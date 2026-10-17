import * as THREE from 'three';
import { common } from './glsl.js';

// Brooklyn Bridge–style suspension bridge: floodlit stone towers with pointed arches,
// four main cables strung with the "necklace" lights, suspender/stay web, deck lamps.
export function createBridge(shared, A, B, lanesOut) {
  const g = new THREE.Group();
  const d = B.clone().sub(A); const L = d.length(); d.normalize();
  const side = new THREE.Vector3(-d.z, 0, d.x);
  const rotY = Math.atan2(d.x, d.z);
  const at = (s, y, off = 0) => A.clone().addScaledVector(d, s).addScaledVector(side, off).setY(y);
  const s1 = L * 0.21, s2 = L * 0.79, DECK = 38, TOP = 84;

  const stoneMat = new THREE.ShaderMaterial({
    uniforms: Object.assign({}, shared.atmos),
    vertexShader: /* glsl */`varying vec3 vWorld; varying vec3 vNormal; void main(){ vec4 wp = modelMatrix * vec4(position,1.); vWorld = wp.xyz; vNormal = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * wp; }`,
    fragmentShader: /* glsl */`${common}
      varying vec3 vWorld; varying vec3 vNormal;
      void main(){
        vec3 n = normalize(vNormal);
        vec3 stone = vec3(.55,.47,.38);
        float course = smoothstep(.0,.08, fract(vWorld.y / 1.4)) * .12 + .88;
        float grain = .85 + .3 * vnoise(vWorld.xy * .8 + vWorld.zy * .6);
        float y = vWorld.y;
        float flood = .95 * exp(-max(y - ${DECK}., 0.) / 55.) + .35 * exp(-y / 30.) + .12;
        float facing = .6 + .4 * abs(n.x * .6 + n.z * .8);
        vec3 col = stone * course * grain * flood * facing * vec3(1.,.82,.62) * 1.25;
        col += stone * skyColor(vec3(n.x, .3, n.z)) * .5;
        if (n.y > .5) col *= .5;
        col = applyFog(col, vWorld, cameraPosition);
        gl_FragColor = vec4(col, 1.);
      }`
  });

  // tower: rectangle with two pointed-arch openings, extruded
  function towerShape() {
    const w = 21, s = new THREE.Shape();
    s.moveTo(-w, 0); s.lineTo(w, 0); s.lineTo(w, TOP); s.lineTo(-w, TOP); s.lineTo(-w, 0);
    for (const cx of [-10.5, 10.5]) {
      const hw = 5.2, y0 = DECK - 4, y1 = 66, apex = 76;
      const h = new THREE.Path();
      h.moveTo(cx - hw, y0); h.lineTo(cx + hw, y0); h.lineTo(cx + hw, y1);
      h.quadraticCurveTo(cx + hw * 0.55, apex - 3, cx, apex);
      h.quadraticCurveTo(cx - hw * 0.55, apex - 3, cx - hw, y1);
      h.lineTo(cx - hw, y0);
      s.holes.push(h);
    }
    return s;
  }
  const tGeo = new THREE.ExtrudeGeometry(towerShape(), { depth: 14, bevelEnabled: false, curveSegments: 8 });
  tGeo.translate(0, 0, -7);
  for (const s of [s1, s2]) {
    const t = new THREE.Mesh(tGeo, stoneMat);
    t.position.copy(at(s, 0)); t.rotation.y = rotY; g.add(t);
    // cornice cap
    const cap = new THREE.Mesh(new THREE.BoxGeometry(44, 3, 16), stoneMat);
    cap.position.copy(at(s, TOP + 1.5)); cap.rotation.y = rotY; g.add(cap);
  }
  // anchorages
  for (const s of [10, L - 10]) {
    const an = new THREE.Mesh(new THREE.BoxGeometry(46, 30, 40), stoneMat);
    an.position.copy(at(s, 15)); an.rotation.y = rotY; g.add(an);
  }

  // deck
  const deckMat = new THREE.MeshBasicMaterial({ color: 0x050608 });
  const deck = new THREE.Mesh(new THREE.BoxGeometry(26, 5, L), deckMat);
  deck.position.copy(at(L / 2, DECK)); deck.rotation.y = rotY; g.add(deck);

  // cable profile
  const mid = (s1 + s2) / 2, half = (s2 - s1) / 2;
  const cableY = (s) => {
    if (s < s1) return 32 + (TOP - 2 - 32) * Math.pow(s / s1, 1.5);
    if (s > s2) return 32 + (TOP - 2 - 32) * Math.pow((L - s) / (L - s2), 1.5);
    const u = (s - mid) / half; return DECK + 4 + (TOP - 2 - DECK - 4) * u * u;
  };
  const cableMat = new THREE.MeshBasicMaterial({ color: 0x0b0d12 });
  const necklace = [], lamps = [];
  const susp = [];
  for (const off of [-17, -15.5, 15.5, 17]) {
    const pts = [];
    for (let s = 0; s <= L; s += L / 160) pts.push(at(s, cableY(s), off));
    const tube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 320, 0.35, 4), cableMat);
    g.add(tube);
    if (Math.abs(off) > 16) {
      for (let s = 2; s < L - 2; s += 7.5) necklace.push(at(s, cableY(s) + 0.6, off));
      for (let s = s1 - 160; s < s2 + 160; s += 5) {
        if (s < 12 || s > L - 12 || Math.abs(s - s1) < 8 || Math.abs(s - s2) < 8) continue;
        const top = at(s, cableY(s), off), bot = at(s, DECK + 2, off);
        susp.push(top, bot);
      }
    }
  }
  // diagonal stays fanning from the towers
  for (const s of [s1, s2]) for (const off of [-17, 17]) for (let k = 1; k <= 14; k++) {
    for (const dir of [-1, 1]) {
      const top = at(s, TOP - 6, off), bot = at(s + dir * k * 9.5, DECK + 2, off);
      susp.push(top, bot);
    }
  }
  const sg = new THREE.BufferGeometry().setFromPoints(susp);
  g.add(new THREE.LineSegments(sg, new THREE.LineBasicMaterial({ color: 0x1a1d24, transparent: true, opacity: 0.55 })));

  for (let s = 16; s < L - 16; s += 21) for (const off of [-12.5, 12.5]) lamps.push(at(s, DECK + 7, off));

  g.add(glowPoints(necklace, shared, [1, 0.9, 0.72], 3.2, 2.2));
  g.add(glowPoints(lamps, shared, [1, 0.62, 0.3], 4.5, 2.6));

  // lanes for the traffic system
  for (const [off, head] of [[-8, true], [-4.5, true], [4.5, false], [8, false]]) {
    const a = head ? at(L, DECK + 2.6, off) : at(0, DECK + 2.6, off);
    const b = head ? at(0, DECK + 2.6, off) : at(L, DECK + 2.6, off);
    lanesOut.push({ a, b, n: 9, speed: 15, head });
  }
  return g;
}

export function glowPoints(list, shared, color, size, gain) {
  const pos = new Float32Array(list.length * 3);
  list.forEach((p, i) => pos.set([p.x, p.y, p.z], i * 3));
  const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: Object.assign({ uColor: { value: new THREE.Color(...color) }, uSize: { value: size }, uGain: { value: gain }, uScale: shared.pointScale }, shared.atmos),
    vertexShader: /* glsl */`uniform float uSize, uScale; varying vec3 vWorld;
      void main(){ vec4 mv = modelViewMatrix * vec4(position,1.); vWorld = (modelMatrix * vec4(position,1.)).xyz; gl_PointSize = clamp(uSize * uScale / -mv.z, 1.2, 30.); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: /* glsl */`${common}
      uniform vec3 uColor; uniform float uGain; varying vec3 vWorld;
      void main(){ float d = length(gl_PointCoord - .5); float a = exp(-d * d * 18.);
        float dist = length(vWorld - cameraPosition);
        gl_FragColor = vec4(uColor * a * uGain * exp(-dist * uFogDensity * .6), a); }`
  });
  const p = new THREE.Points(geo, mat); p.frustumCulled = false;
  return p;
}
