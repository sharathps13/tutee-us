// Dotted "route map" globe: land as glowing dots, a glass shell, an atmosphere,
// and animated flight arcs from Tutee Connect's offices (Chennai, Dubai) to US hubs.
import * as THREE from 'three';
import { LAND } from '../../assets/js/land-data.js';

export const OFFICES = {
  chennai: [13.08, 80.27],
  dubai: [25.2, 55.27],
};
export const US_CITIES = {
  newYork: [40.71, -74.0],
  boston: [42.36, -71.06],
  chicago: [41.88, -87.63],
  austin: [30.27, -97.74],
  sanFrancisco: [37.77, -122.42],
  seattle: [47.61, -122.33],
};

export function ll(lat, lon, r = 1) {
  const la = THREE.MathUtils.degToRad(lat), lo = THREE.MathUtils.degToRad(lon);
  return new THREE.Vector3(Math.cos(la) * Math.cos(lo) * r, Math.sin(la) * r, -Math.cos(la) * Math.sin(lo) * r);
}

function decodeLand() {
  const bin = atob(LAND);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new Int16Array(bytes.buffer);
}

const dotVert = /* glsl */`
  uniform float uSize; uniform float uPixelRatio;
  attribute float aSeed;
  varying float vFacing; varying float vSeed; varying float vLat;
  void main(){
    vec4 wp = modelMatrix * vec4(position,1.0);
    vec3 n = normalize(mat3(modelMatrix) * normalize(position));
    vec3 toCam = normalize(cameraPosition - wp.xyz);
    vFacing = dot(n,toCam);
    vSeed = aSeed; vLat = position.y;
    vec4 mv = viewMatrix * wp;
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * uPixelRatio * (1.0/ -mv.z) * (0.75 + 0.5*aSeed);
  }`;
const dotFrag = /* glsl */`
  uniform vec3 uColA; uniform vec3 uColB; uniform float uTime;
  varying float vFacing; varying float vSeed; varying float vLat;
  void main(){
    vec2 c = gl_PointCoord - 0.5; float d = length(c);
    if(d>0.5) discard;
    float a = smoothstep(0.5,0.18,d);
    float facing = smoothstep(-0.05,0.35,vFacing);
    float tw = 0.75 + 0.25*sin(uTime*1.3 + vSeed*40.0);
    vec3 col = mix(uColA,uColB, smoothstep(-0.6,0.9,vLat)*0.6 + vSeed*0.2);
    gl_FragColor = vec4(col, a*facing*tw*0.95);
  }`;

const shellVert = /* glsl */`
  varying vec3 vN; varying vec3 vV;
  void main(){
    vec4 wp = modelMatrix*vec4(position,1.0);
    vN = normalize(mat3(modelMatrix)*normal); vV = normalize(cameraPosition-wp.xyz);
    gl_Position = projectionMatrix*viewMatrix*wp;
  }`;
const shellFrag = /* glsl */`
  uniform vec3 uCore; uniform vec3 uRim; uniform vec3 uSunDir;
  varying vec3 vN; varying vec3 vV;
  void main(){
    float f = pow(1.0 - max(dot(vN,vV),0.0), 2.6);
    float sun = pow(max(dot(vN, normalize(uSunDir)),0.0), 2.0);
    vec3 col = uCore + uRim*f*1.2 + vec3(1.0,0.72,0.45)*sun*0.18;
    gl_FragColor = vec4(col, 0.86 + f*0.14);
  }`;
const atmoFrag = /* glsl */`
  uniform vec3 uColor; varying vec3 vN; varying vec3 vV;
  void main(){
    float f = pow(0.72 - dot(vN,vV), 3.2);
    gl_FragColor = vec4(uColor, clamp(f,0.0,1.0)*0.38);
  }`;

const arcVert = /* glsl */`
  varying vec2 vUv;
  void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`;
const arcFrag = /* glsl */`
  uniform float uTime; uniform float uOffset; uniform vec3 uBase; uniform vec3 uHead; uniform float uReveal;
  varying vec2 vUv;
  void main(){
    float x = vUv.x;
    if(x > uReveal) discard;
    float t = mod(uTime*0.22 + uOffset, 1.35) - 0.15;
    float d = x - t;
    float trail = d < 0.0 ? exp(d*9.0) : exp(-d*120.0);
    float base = 0.38;
    vec3 col = mix(uBase, uHead, clamp(trail,0.0,1.0));
    gl_FragColor = vec4(col, clamp(base + trail*1.1, 0.0, 1.0));
  }`;

function arcCurve(a, b, radius, lift) {
  const va = ll(a[0], a[1], 1), vb = ll(b[0], b[1], 1);
  const angle = va.angleTo(vb);
  const pts = [];
  const N = 64;
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    const v = new THREE.Vector3().copy(va).lerp(vb, t);
    // slerp on unit sphere
    const s = Math.sin(angle);
    v.copy(va).multiplyScalar(Math.sin((1 - t) * angle) / s).add(vb.clone().multiplyScalar(Math.sin(t * angle) / s));
    const h = 1 + lift * Math.sin(Math.PI * t) * (0.5 + angle / Math.PI);
    pts.push(v.multiplyScalar(radius * h));
  }
  return new THREE.CatmullRomCurve3(pts);
}

export function buildGlobe({ radius = 1.4, pixelRatio = 1, sunDir, dotTex, isMobile }) {
  const group = new THREE.Group();      // positioned/oriented by hero
  const spin = new THREE.Group();       // rotates around the polar axis
  group.add(spin);

  const shell = new THREE.Mesh(
    new THREE.SphereGeometry(radius * 0.985, 64, 48),
    new THREE.ShaderMaterial({
      vertexShader: shellVert, fragmentShader: shellFrag, transparent: true,
      uniforms: { uCore: { value: new THREE.Color('#123840') }, uRim: { value: new THREE.Color('#7fb9bb') }, uSunDir: { value: sunDir.clone() } },
    })
  );
  spin.add(shell);

  const atmo = new THREE.Mesh(
    new THREE.SphereGeometry(radius * 1.1, 48, 32),
    new THREE.ShaderMaterial({
      vertexShader: shellVert, fragmentShader: atmoFrag, transparent: true, side: THREE.BackSide,
      depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { uColor: { value: new THREE.Color('#ffd9bd') } },
    })
  );
  group.add(atmo);

  // land dots
  const land = decodeLand();
  const count = land.length / 2;
  const pos = new Float32Array(count * 3), seed = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    const v = ll(land[i * 2] / 10, land[i * 2 + 1] / 10, radius);
    pos.set([v.x, v.y, v.z], i * 3);
    seed[i] = Math.random();
  }
  const dg = new THREE.BufferGeometry();
  dg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  dg.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
  const dotMat = new THREE.ShaderMaterial({
    vertexShader: dotVert, fragmentShader: dotFrag, transparent: true, depthWrite: false,
    uniforms: {
      uSize: { value: isMobile ? 34 : 30 }, uPixelRatio: { value: pixelRatio }, uTime: { value: 0 },
      uColA: { value: new THREE.Color('#f6e7cf') }, uColB: { value: new THREE.Color('#ffd1a3') },
    },
  });
  spin.add(new THREE.Points(dg, dotMat));

  // flight arcs
  const routes = [
    ['chennai', 'newYork', 0.0], ['chennai', 'sanFrancisco', 0.35], ['chennai', 'chicago', 0.7],
    ['dubai', 'boston', 0.18], ['dubai', 'austin', 0.55], ['chennai', 'seattle', 0.9],
  ];
  const arcMats = [];
  for (const [from, to, off] of routes) {
    const curve = arcCurve(OFFICES[from], US_CITIES[to], radius, 0.16);
    const mat = new THREE.ShaderMaterial({
      vertexShader: arcVert, fragmentShader: arcFrag, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { uTime: { value: 0 }, uOffset: { value: off }, uReveal: { value: 0 }, uBase: { value: new THREE.Color('#f4a26b') }, uHead: { value: new THREE.Color('#fff4e2') } },
    });
    arcMats.push(mat);
    spin.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 96, isMobile ? 0.014 : 0.011, 6, false), mat));
  }

  // city markers
  const markerMat = new THREE.PointsMaterial({ map: dotTex, color: '#ffcf9e', size: 0.2, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
  const officeMat = new THREE.PointsMaterial({ map: dotTex, color: '#ff8a4c', size: 0.32, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
  const cityPts = Object.values(US_CITIES).map(([a, b]) => ll(a, b, radius * 1.01));
  const officePts = Object.values(OFFICES).map(([a, b]) => ll(a, b, radius * 1.01));
  spin.add(new THREE.Points(new THREE.BufferGeometry().setFromPoints(cityPts), markerMat));
  spin.add(new THREE.Points(new THREE.BufferGeometry().setFromPoints(officePts), officeMat));

  // orientation helpers: the view direction we want facing the camera (between India & the US, over the Atlantic/Europe)
  const focus = ll(57, -18, 1).normalize();
  const north = new THREE.Vector3(0, 1, 0);

  const _m = new THREE.Matrix4(), _l = new THREE.Matrix4();
  const F = new THREE.Vector3(), U = new THREE.Vector3(), Rr = new THREE.Vector3();
  const f = new THREE.Vector3(), u = new THREE.Vector3(), r = new THREE.Vector3();
  function orient(toCamera, sway) {
    // local basis around focus
    const fl = focus.clone().applyAxisAngle(north, sway);
    f.copy(fl); u.copy(north).addScaledVector(f, -f.dot(north)).normalize(); r.crossVectors(u, f);
    F.copy(toCamera).normalize(); U.set(0, 1, 0).addScaledVector(F, -F.dot(U.set(0, 1, 0))).normalize(); Rr.crossVectors(U, F);
    _m.makeBasis(Rr, U, F); _l.makeBasis(r, u, f).transpose();
    spin.quaternion.setFromRotationMatrix(_m.multiply(_l));
    // a gentle axial tilt so it reads as a planet, not a disc
    spin.rotateOnWorldAxis(F, -0.18);
  }

  function update(time, reveal) {
    dotMat.uniforms.uTime.value = time;
    for (const m of arcMats) { m.uniforms.uTime.value = time; m.uniforms.uReveal.value = reveal; }
  }

  function dispose() {
    group.traverse((o) => { o.geometry?.dispose?.(); o.material?.dispose?.(); });
  }

  return { group, spin, orient, update, dispose, dotMat };
}
