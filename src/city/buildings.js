import * as THREE from 'three';
import { common } from './glsl.js';

// ---------------------------------------------------------------------------
// City layout (metres). Camera side shore ~ z=+40, harbour, city shoreline at z=-500,
// avenues every 80 m along x (centre lines at x = k*80), streets every 60 m along z.
// ---------------------------------------------------------------------------
export const SHORE_Z = -500;
export const AVE = 80, STREET = 60;
export const blockX = (i) => [i * AVE + 10, (i + 1) * AVE - 10];
export const blockZ = (j) => [SHORE_Z - j * STREET - 54, SHORE_Z - j * STREET - 6];

export function rng(seed) {
  let s = seed >>> 0;
  return () => { s += 0x6D2B79F5; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

const BUILDING_VS = /* glsl */`
  attribute vec4 aInfo;   // seed, type (0 masonry, 1 glass, 2 dark glass), lit ratio, crown floodlight
  attribute float aTop;   // roof height of the whole building
  varying vec3 vWorld; varying vec3 vNormal; varying vec4 vInfo; varying float vTop;
  void main(){
    mat4 m = modelMatrix;
    #ifdef USE_INSTANCING
      m = m * instanceMatrix;
    #endif
    vec4 wp = m * vec4(position, 1.);
    vWorld = wp.xyz;
    vNormal = normalize(mat3(m) * normal);
    vInfo = aInfo; vTop = aTop;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }`;

const BUILDING_FS = /* glsl */`
  ${common}
  uniform float uTime; uniform float uWindowGain;
  varying vec3 vWorld; varying vec3 vNormal; varying vec4 vInfo; varying float vTop;

  vec3 litColor(float h, float warmth){
    vec3 warm = vec3(1., .58, .27), neutral = vec3(1., .80, .58), cool = vec3(.72, .84, 1.), green = vec3(.78, 1., .82);
    if (h < .45 + warmth * .25) return warm;
    if (h < .78) return neutral;
    if (h < .96) return cool;
    return green;
  }

  void main(){
    vec3 n = normalize(vNormal);
    vec3 V = normalize(cameraPosition - vWorld);
    float seed = vInfo.x, type = vInfo.y, litRatio = vInfo.z, flood = vInfo.w;
    float distTop = vTop - vWorld.y;
    vec3 col;

    // light arriving from the street (sodium haze) and from the sky
    vec3 skyAmb = skyColor(vec3(n.x, max(n.y, .05) + .3, n.z)) * .2;
    vec3 streetUp = vec3(1., .55, .25) * .22 * exp(-vWorld.y / 22.);
    vec3 floodCol = vec3(1., .86, .66) * flood * (exp(-distTop / 26.) * 1.25 + exp(-distTop / 4.) * .5);

    if (n.y > .5) {
      // roof: dark membrane, mechanical clutter lights, washed by the crown floodlights
      vec2 rp = floor(vWorld.xz / 6.);
      float spot = step(.985, hash21(rp + seed * 31.));
      col = vec3(.012, .013, .016) + skyAmb * .25 + spot * vec3(1., .7, .4) * 1.5 + floodCol * .25;
    } else {
      vec2 t = normalize(vec2(-n.z, n.x));
      float u = dot(vWorld.xz, t);
      float face = floor(n.x * 3.1 + n.z * 5.3 + 9.);
      float colW = (type < .5 ? 2.5 : 3.1) * (.8 + .55 * hash11(seed * 1.31));
      float flH = (type < .5 ? 3.5 : 3.9) * (.9 + .25 * hash11(seed * 2.17));
      vec2 c = vec2(u / colW, (vWorld.y - 1.2) / flH);
      vec2 id = floor(c), f = fract(c);
      vec2 fw = fwidth(c);
      // window opening
      vec2 lo = type < .5 ? vec2(.2, .22) : vec2(.05, .12);
      vec2 hi = type < .5 ? vec2(.8, .86) : vec2(.95, .94);
      float mx = smoothstep(lo.x - fw.x, lo.x + fw.x, f.x) * (1. - smoothstep(hi.x - fw.x, hi.x + fw.x, f.x));
      float my = smoothstep(lo.y - fw.y, lo.y + fw.y, f.y) * (1. - smoothstep(hi.y - fw.y, hi.y + fw.y, f.y));
      float mask = mx * my;

      // which windows are lit: per floor and per tenant cluster variation
      float floorR = hash21(vec2(id.y, seed * 91.7));
      float tenant = hash21(vec2(floor(id.x / 5.) + face * 17., id.y + seed * 13.));
      float prob = litRatio * (floorR > .9 ? 2.4 : floorR < .3 ? .3 : 1.) * (tenant > .7 ? 1.6 : tenant < .25 ? .25 : 1.);
      float r = hash21(id + vec2(seed * 7.13, face * 3.7));
      float lit = step(r, prob) * step(.5, vWorld.y);
      float hc = hash21(vec2(floor(id.x / 3.), id.y) + seed * 3.1 + face);
      vec3 lc = litColor(hc, flood) * (.45 + 1.6 * hash21(id.yx + seed)) * uWindowGain;
      lc *= .6 + .55 * f.y;                    // ceiling lights: brighter at the top of the window
      lc *= .85 + .3 * step(.5, fract(f.x * 2.)); // blinds / partitions

      // unlit glass reflects the sky
      vec3 R = reflect(-V, n);
      float F = .04 + .96 * pow(1. - max(dot(n, V), 0.), 5.);
      vec3 refl = skyColor(vec3(R.x, max(R.y, .03), R.z));
      float glassRefl = type > .5 ? mix(.18, .7, F) : mix(.06, .4, F);
      vec3 glass = mix(vec3(.004, .005, .009), refl, glassRefl);
      vec3 win = mix(glass, lc, lit);

      // facade frame
      vec3 frame = type < .5 ? vec3(.05, .045, .04) : (type < 1.5 ? vec3(.025, .03, .04) : vec3(.01, .012, .018));
      frame = frame * (skyAmb * 3. + streetUp * 2.) + frame * floodCol * 2.;
      if (type > .5) frame += refl * F * .25;
      col = mix(frame, win, mask);

      // far away: replace the sub-pixel window grid by its average to avoid shimmer
      float k = smoothstep(.22, .65, max(fw.x, fw.y));
      vec3 avgLit = litColor(.5, flood) * 1.25 * uWindowGain;
      float area = (hi.x - lo.x) * (hi.y - lo.y);
      vec3 avg = mix(frame, mix(glass * .5, avgLit, clamp(litRatio * .32, 0., 1.)), area);
      col = mix(col, avg, k);

      col += streetUp * .15 + floodCol * .08;
    }
    col = applyFog(col, vWorld, cameraPosition);
    gl_FragColor = vec4(col, 1.);
  }`;

export function buildingMaterial(shared) {
  return new THREE.ShaderMaterial({
    uniforms: Object.assign({ uTime: shared.uTime, uWindowGain: shared.windowGain }, shared.atmos),
    vertexShader: BUILDING_VS, fragmentShader: BUILDING_FS
  });
}

// ---------------------------------------------------------------------------
export function generateCity(opts) {
  const R = rng(opts.seed || 7);
  const boxes = []; // {x,z,w,d,base,h,rot,info:[seed,type,lit,flood],top}
  const tall = [];  // roofs that carry aviation lights
  const reserved = opts.reserved || [];
  const gauss = (x, z, cx, cz, s) => Math.exp(-((x - cx) ** 2 + (z - cz) ** 2) / (2 * s * s));
  const nx = opts.mobile ? 15 : 19, nz = opts.mobile ? 30 : 38;

  for (let i = -nx; i < nx; i++) {
    for (let j = 0; j < nz; j++) {
      const [x0, x1] = blockX(i), [z0, z1] = blockZ(j);
      const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
      if (reserved.some(r => Math.abs(r.x - cx) < 40 && Math.abs(r.z - cz) < 30)) continue;
      // density falls off to the east/west edges so the island has a silhouette
      const edge = Math.max(0, 1 - Math.abs(cx) / (nx * AVE * 0.92));
      const downtown = gauss(cx, cz, -360, -780, 190);
      const midtown = gauss(cx, cz, 120, -1600, 330);
      const ues = gauss(cx, cz, -200, -2350, 450) * 0.3;
      const village = 1 - 0.6 * gauss(cx, cz, -60, -1150, 260);   // low-rise gap between the two skylines
      const pull = Math.max(downtown * 1.05, midtown, ues) * village;
      const parts = R() < 0.35 ? 1 : R() < 0.6 ? 2 : 3;
      let xa = x0;
      for (let p = 0; p < parts; p++) {
        const w = p === parts - 1 ? x1 - xa : (x1 - x0) / parts * (0.75 + R() * 0.5);
        const xb = xa + w;
        const depthSplit = R() < 0.4;
        const zs = depthSplit ? [[z0, (z0 + z1) / 2 - 1], [(z0 + z1) / 2 + 1, z1]] : [[z0, z1]];
        for (const [za, zb] of zs) {
          const bw = (xb - xa) - 2, bd = (zb - za) - 2;
          if (bw < 8 || bd < 8) continue;
          let h = (12 + R() * 22 + Math.pow(R(), 2.6) * 70 * edge) * village;
          h += pull * (60 + Math.pow(R(), 1.4) * 320) * edge;
          if (R() < 0.04 * pull) h *= 1.5;
          h = Math.min(h, 400);
          const seed = R() * 1000;
          const type = h > 120 ? (R() < 0.6 ? 1 : R() < 0.5 ? 2 : 0) : (R() < 0.75 ? 0 : 1);
          const lit = (R() < 0.22 ? 0.05 + R() * 0.08 : 0.16 + R() * 0.32) + (h > 160 ? 0.06 : 0);
          const flood = h > 150 && R() < 0.35 ? 0.6 + R() * 0.6 : 0;
          const bx = (xa + xb) / 2, bz = (za + zb) / 2;
          const info = [seed, type, lit, flood];
          // setbacks
          const tiers = h > 110 ? (R() < 0.5 ? 3 : 2) : 1;
          let base = 0, tw = bw, td = bd;
          for (let t = 0; t < tiers; t++) {
            const th = t === tiers - 1 ? h - base : (h - base) * (0.45 + R() * 0.25);
            boxes.push({ x: bx, z: bz, w: tw, d: td, base, h: th, info, top: h });
            base += th; tw *= 0.7 + R() * 0.2; td *= 0.7 + R() * 0.2;
          }
          if (h > 140) tall.push([bx, h + 1, bz, R()]);
        }
        xa = xb;
      }
    }
  }
  return { boxes, tall };
}

export function buildCityMesh(boxes, mat) {
  const geo = new THREE.BoxGeometry(1, 1, 1);
  geo.translate(0, 0.5, 0);
  geo.deleteAttribute('uv');
  const mesh = new THREE.InstancedMesh(geo, mat, boxes.length);
  const info = new Float32Array(boxes.length * 4), top = new Float32Array(boxes.length);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
  boxes.forEach((b, k) => {
    e.set(0, b.rot || 0, 0); q.setFromEuler(e);
    m.compose(new THREE.Vector3(b.x, b.base, b.z), q, new THREE.Vector3(b.w, b.h, b.d));
    mesh.setMatrixAt(k, m);
    info.set(b.info, k * 4); top[k] = b.top;
  });
  geo.setAttribute('aInfo', new THREE.InstancedBufferAttribute(info, 4));
  geo.setAttribute('aTop', new THREE.InstancedBufferAttribute(top, 1));
  mesh.frustumCulled = false;
  return mesh;
}

// aviation obstruction lights + beacons ---------------------------------------
export function beaconPoints(list, shared, color = [1, 0.12, 0.08], size = 5) {
  const pos = new Float32Array(list.length * 3), ph = new Float32Array(list.length);
  list.forEach((p, i) => { pos.set([p[0], p[1], p[2]], i * 3); ph[i] = p[3] || 0; });
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('aPhase', new THREE.BufferAttribute(ph, 1));
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uTime: shared.uTime, uColor: { value: new THREE.Color(...color) }, uSize: { value: size }, uScale: shared.pointScale },
    vertexShader: /* glsl */`
      attribute float aPhase; uniform float uTime, uSize, uScale; varying float vOn;
      void main(){
        vec4 mv = modelViewMatrix * vec4(position, 1.);
        float blink = fract(uTime * .55 + aPhase);
        vOn = smoothstep(.0, .05, blink) * (1. - smoothstep(.35, .5, blink));
        gl_PointSize = clamp(uSize * uScale / -mv.z, 1.5, 22.);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */`
      uniform vec3 uColor; varying float vOn;
      void main(){ float d = length(gl_PointCoord - .5); float a = exp(-d * d * 22.); gl_FragColor = vec4(uColor * a * (.25 + 3. * vOn), a); }`
  });
  const pts = new THREE.Points(g, mat); pts.frustumCulled = false;
  return pts;
}

// ---------------------------------------------------------------------------
// Landmarks
// ---------------------------------------------------------------------------
function emissiveMat(shared, fs) {
  return new THREE.ShaderMaterial({
    uniforms: Object.assign({ uTime: shared.uTime }, shared.atmos),
    vertexShader: /* glsl */`varying vec3 vWorld; varying vec3 vNormal; varying vec2 vUv;
      void main(){ vUv = uv; vec4 wp = modelMatrix * vec4(position,1.); vWorld = wp.xyz; vNormal = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * wp; }`,
    fragmentShader: /* glsl */`${common}
      uniform float uTime; varying vec3 vWorld; varying vec3 vNormal; varying vec2 vUv;
      void main(){ vec3 col; ${fs} col = applyFog(col, vWorld, cameraPosition); gl_FragColor = vec4(col, 1.); }`
  });
}

// Empire State–style: stepped limestone tower with a floodlit, tri-colour lit crown
export function empire(x, z, shared, boxes, beacons) {
  const info = [431.7, 0, 0.42, 1.0];
  const T = 381;
  const st = (w, d, base, h) => boxes.push({ x, z, w, d, base, h, info, top: T });
  st(58, 46, 0, 24); st(52, 42, 24, 60); st(44, 36, 84, 235); st(36, 30, 319, 22); st(30, 24, 341, 20); st(24, 20, 361, 14);
  const g = new THREE.Group();
  // crown: lantern tiers lit red / white / blue
  const tiers = [[18, 375, 10, 0], [13, 385, 9, 1], [9.5, 394, 8, 2], [6.5, 402, 7, 2]];
  const crownMat = emissiveMat(shared, `
    float tier = floor((vWorld.y - 375.) / 9.);
    vec3 a = vec3(1.,.08,.06), b = vec3(1.,.95,.88), c = vec3(.12,.25,1.);
    vec3 base = tier < .5 ? a : tier < 1.5 ? b : c;
    float ribs = smoothstep(.35,.5, abs(fract(atan(vNormal.z, vNormal.x) * 2.546) - .5));
    float pane = step(.25, fract(vWorld.y / 2.2));
    col = base * (1.4 + 1.4 * ribs) * (.6 + .4 * pane);`);
  for (const [r, y, h] of tiers) {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.86, r, h, 8, 1), crownMat);
    m.position.set(x, y + h / 2, z); m.rotation.y = Math.PI / 8; g.add(m);
  }
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 2.4, 52, 8), emissiveMat(shared, `col = vec3(.85,.88,1.) * (.6 + .9 * smoothstep(410., 460., vWorld.y));`));
  mast.position.set(x, 410 + 26, z); g.add(mast);
  beacons.push([x, 463, z, 0.2]);
  return g;
}

// One World Trade Center–style: square base morphing into a 45°-rotated square, glass, spire
export function oneWTC(x, z, shared, boxes, mat, beacons) {
  const info = [77.3, 1, 0.22, 0.0];
  boxes.push({ x, z, w: 62, d: 62, base: 0, h: 58, info: [77.3, 2, 0.06, 0], top: 417 });
  const y0 = 58, y1 = 417, s = 31, r = 29;
  const B = [[-s, -s], [s, -s], [s, s], [-s, s]];
  const Tp = [[0, -r], [r, 0], [0, r], [-r, 0]];
  const v = [];
  const P = (p, y) => [p[0], y, p[1]];
  for (let i = 0; i < 4; i++) {
    const b0 = B[i], b1 = B[(i + 1) % 4], t0 = Tp[i], t1 = Tp[(i + 1) % 4];
    v.push(...P(b0, y0), ...P(t0, y1), ...P(b1, y0));   // side triangle (base edge up to top vertex)
    v.push(...P(b1, y0), ...P(t0, y1), ...P(t1, y1));   // inverted triangle
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
  geo.computeVertexNormals();
  // the building shader expects instancing attributes; give it a 1-instance mesh
  const im = new THREE.InstancedMesh(geo, mat, 1);
  im.setMatrixAt(0, new THREE.Matrix4().makeTranslation(x, 0, z));
  geo.setAttribute('aInfo', new THREE.InstancedBufferAttribute(new Float32Array(info), 4));
  geo.setAttribute('aTop', new THREE.InstancedBufferAttribute(new Float32Array([y1]), 1));
  im.frustumCulled = false;
  const g = new THREE.Group(); g.add(im);
  // parapet + spire with a ring of lights
  const roofMat = emissiveMat(shared, `col = vec3(.02,.022,.03) + vec3(.9,.95,1.) * smoothstep(.0,.6, fract(vWorld.y / 9.)) * step(${y1 + 6}., vWorld.y) * .9;`);
  const par = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.98, r, 8, 4, 1), roofMat); par.position.set(x, y1 + 4, z); g.add(par);
  const sp = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 2.2, 120, 8), roofMat); sp.position.set(x, y1 + 8 + 60, z); g.add(sp);
  beacons.push([x, y1 + 130, z, 0.6]);
  return g;
}

// Chrysler-style: shaft with a terraced, illuminated sunburst crown and needle
export function chrysler(x, z, shared, boxes, beacons) {
  const info = [212.2, 0, 0.36, 0.5];
  boxes.push({ x, z, w: 48, d: 44, base: 0, h: 60, info, top: 240 });
  boxes.push({ x, z, w: 38, d: 38, base: 60, h: 180, info, top: 240 });
  const g = new THREE.Group();
  const crownMat = emissiveMat(shared, `
    vec2 t = normalize(vec2(-vNormal.z, vNormal.x));
    float u = dot(vWorld.xz - vec2(${x}., ${z}.), t);
    float v = fract((vWorld.y - 240.) / 13.);
    float tri = step(abs(fract(u / 3.) - .5) * 2., v * 1.1);
    float rows = step(.12, fract(v * 4.)) * step(fract(v * 4.), .7);
    col = vec3(.04,.045,.05) + vec3(1.,.93,.82) * tri * rows * 2.6;`);
  let r = 18, y = 240;
  for (let i = 0; i < 6; i++) {
    const h = 13, rt = r * 0.8;
    const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, r, h, 4, 1), crownMat);
    m.position.set(x, y + h / 2, z); m.rotation.y = Math.PI / 4; g.add(m);
    y += h; r = rt;
  }
  const nd = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 2.8, 40, 6), crownMat);
  nd.position.set(x, y + 20, z); g.add(nd);
  beacons.push([x, y + 41, z, 0.4]);
  return g;
}

// ---------------------------------------------------------------------------
// Street grid on the ground: sodium-lit avenues and cross streets
export function cityGround(shared, mobile) {
  const W = (mobile ? 15 : 19) * AVE * 2 + 20, D = (mobile ? 30 : 38) * STREET + 60;
  const geo = new THREE.PlaneGeometry(W, D, 1, 1); geo.rotateX(-Math.PI / 2);
  const mat = new THREE.ShaderMaterial({
    uniforms: Object.assign({ uTime: shared.uTime }, shared.atmos),
    vertexShader: /* glsl */`varying vec3 vWorld; void main(){ vec4 wp = modelMatrix * vec4(position,1.); vWorld = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }`,
    fragmentShader: /* glsl */`${common}
      varying vec3 vWorld;
      void main(){
        float ax = abs(mod(vWorld.x + 40., 80.) - 40.);              // distance to avenue centre
        float sz = abs(mod(vWorld.z - ${SHORE_Z}., 60.)); sz = min(sz, 60. - sz);      // distance to street centre
        float ave = 1. - smoothstep(9., 11., ax);
        float st = 1. - smoothstep(5., 7., sz);
        float road = max(ave, st);
        // lamp pools every 28 m
        float lampA = exp(-pow(abs(mod(vWorld.z, 28.) - 14.) - 14., 2.) * .02);
        float lampS = exp(-pow(abs(mod(vWorld.x, 28.) - 14.) - 14., 2.) * .02);
        float pools = max(ave * (.55 + .45 * lampA), st * (.45 + .55 * lampS));
        vec3 col = vec3(.008,.008,.01) + vec3(1.,.55,.24) * pools * .55 * road;
        col += vec3(1.,.6,.3) * .03;
        col = applyFog(col, vWorld, cameraPosition);
        gl_FragColor = vec4(col, 1.);
      }`
  });
  const m = new THREE.Mesh(geo, mat);
  m.position.set(0, 0.2, SHORE_Z - D / 2);
  return m;
}
