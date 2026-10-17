// Hero scene: a floating American campus island under a dotted "route map" globe,
// at dawn above the clouds. Pointer parallax + scroll-driven camera move.
import * as THREE from 'three';
import { buildIsland, CAMPUS_POINT } from './island.js';
import { buildGlobe, ll, US_CITIES } from './globe.js';
import { mulberry32 } from './noise.js';

const stage = document.querySelector('[data-hero-stage]');
const canvas = document.querySelector('[data-hero-canvas]');
const heroEl = document.querySelector('#home');
const root = document.documentElement;

function webglAvailable() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch { return false; }
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!stage || !canvas || !webglAvailable()) {
  root.classList.add('no-webgl');
} else {
  try { init(); } catch (err) { console.error('[hero] 3D disabled:', err); root.classList.add('no-webgl'); }
}

function makeGlowTexture(inner = 'rgba(255,255,255,1)', mid = 'rgba(255,220,180,0.35)') {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grd.addColorStop(0, inner); grd.addColorStop(0.25, mid); grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd; g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

function makeCloudTexture(seed) {
  const rnd = mulberry32(seed);
  const S = 512, k = S / 256;
  const c = document.createElement('canvas'); c.width = S; c.height = S;
  const g = c.getContext('2d');
  // cumulus: many puffs, domed top, flat base
  for (let i = 0; i < 140; i++) {
    const a = rnd() * Math.PI, d = Math.pow(rnd(), 0.6) * 92;
    const x = S / 2 + Math.cos(a) * d * 1.3 * k, y = S * 0.6 - Math.sin(a) * d * 0.62 * k;
    const r = (12 + rnd() * 30 * (1 - d / 130)) * k;
    const grd = g.createRadialGradient(x - r * 0.3, y - r * 0.4, 0, x, y, r);
    const lum = 238 + Math.floor(rnd() * 17);
    grd.addColorStop(0, `rgba(${lum},${lum - 4},${lum - 8},0.75)`);
    grd.addColorStop(0.55, `rgba(${lum - 28},${lum - 26},${lum - 22},0.45)`);
    grd.addColorStop(1, 'rgba(190,195,205,0)');
    g.fillStyle = grd; g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
  }
  // shadowed, flattened underside
  const sh = g.createLinearGradient(0, S * 0.42, 0, S * 0.66);
  sh.addColorStop(0, 'rgba(0,0,0,0)'); sh.addColorStop(1, 'rgba(70,80,100,0.5)');
  g.globalCompositeOperation = 'source-atop'; g.fillStyle = sh; g.fillRect(0, 0, S, S);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

function init() {
  const isMobile = window.matchMedia('(max-width: 760px)').matches;
  const lowPower = isMobile || (navigator.hardwareConcurrency || 8) <= 4;
  const DPR = Math.min(window.devicePixelRatio || 1, lowPower ? 1.5 : 1.8);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: !lowPower, powerPreference: 'high-performance', alpha: false });
  renderer.setPixelRatio(DPR);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;
  renderer.shadowMap.enabled = !lowPower;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  const fogCol = new THREE.Color('#c3b8b2');
  scene.fog = new THREE.FogExp2(fogCol, 0.0105);

  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 400);

  // ---- sky dome ----
  const sunDir = new THREE.Vector3(0.55, 0.42, -0.72).normalize();
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(180, 48, 24),
    new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: {
        uTop: { value: new THREE.Color('#0b2131') }, uMid: { value: new THREE.Color('#4a7088') },
        uHorizon: { value: new THREE.Color('#e9b994') }, uBelow: { value: new THREE.Color('#b9b2b0') },
        uSun: { value: sunDir }, uSunCol: { value: new THREE.Color('#ffd7a8') },
      },
      vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} `,
      fragmentShader: `
        uniform vec3 uTop,uMid,uHorizon,uBelow,uSun,uSunCol; varying vec3 vDir;
        void main(){
          float y = vDir.y;
          vec3 col = mix(uHorizon, uMid, smoothstep(-0.02,0.16,y));
          col = mix(col, uTop, smoothstep(0.14,0.5,y));
          col = mix(col, uBelow, smoothstep(0.0,-0.35,y));
          float s = max(dot(vDir, normalize(uSun)), 0.0);
          col += uSunCol * (pow(s, 8.0)*0.55 + pow(s, 120.0)*1.6);
          gl_FragColor = vec4(col,1.0);
        }`,
    })
  );
  scene.add(sky);

  // ---- lights ----
  scene.add(new THREE.HemisphereLight('#bcd3dc', '#6b4a3a', 0.95));
  const sun = new THREE.DirectionalLight('#ffd2a0', 2.6);
  sun.position.copy(sunDir).multiplyScalar(14);
  sun.castShadow = renderer.shadowMap.enabled;
  sun.shadow.mapSize.set(1536, 1536);
  Object.assign(sun.shadow.camera, { left: -4, right: 4, top: 4, bottom: -4, near: 1, far: 30 });
  sun.shadow.bias = -0.0008; sun.shadow.normalBias = 0.02;
  scene.add(sun);
  const rim = new THREE.DirectionalLight('#7fb3c4', 0.9); rim.position.set(-6, 2, -4); scene.add(rim);
  const under = new THREE.DirectionalLight('#f0a27a', 0.55); under.position.set(2, -6, 4); scene.add(under);

  const glowTex = makeGlowTexture();

  // ---- island ----
  const world = new THREE.Group(); scene.add(world);
  const islandPivot = new THREE.Group(); world.add(islandPivot);
  const { root: island, fragments, windowMat } = buildIsland({ isMobile, glowTex });
  islandPivot.add(island);
  island.rotation.y = -0.5;
  fragments.forEach((f) => world.add(f));

  // ---- globe ----
  const globe = buildGlobe({ radius: 1.35, pixelRatio: DPR, sunDir, dotTex: glowTex, isMobile });
  world.add(globe.group);

  // light beam from the globe's US side down to the campus quad
  const beamMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uTime: { value: 0 }, uReveal: { value: 0 } },
    vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);} `,
    fragmentShader: `uniform float uTime; uniform float uReveal; varying vec2 vUv;
      void main(){ if(vUv.x>uReveal) discard;
        float p = fract(vUv.x*3.0 - uTime*0.45);
        float dash = smoothstep(0.0,0.08,p)*smoothstep(0.55,0.35,p);
        float a = 0.22 + dash*0.75;
        gl_FragColor = vec4(mix(vec3(0.96,0.55,0.32), vec3(1.0,0.92,0.8), dash), a*smoothstep(0.0,0.06,vUv.x)); }`,
  });
  const beam = new THREE.Mesh(new THREE.BufferGeometry(), beamMat);
  world.add(beam);

  // ---- clouds ----
  const cloudTex = [makeCloudTexture(11), makeCloudTexture(23), makeCloudTexture(37)];
  const clouds = [];
  const rnd = mulberry32(99);
  const cloudGeo = new THREE.PlaneGeometry(1, 1);
  const addCloud = (x, y, z, s, tint, opacity, layer) => {
    const mat = new THREE.MeshBasicMaterial({ map: cloudTex[Math.floor(rnd() * 3)], color: tint, transparent: true, opacity, depthWrite: false, fog: layer !== 'front' });
    const m = new THREE.Mesh(cloudGeo, mat);
    m.position.set(x, y, z); m.scale.set(s * 1.9, s, 1);
    m.userData = { base: m.position.clone(), drift: (rnd() - 0.5) * 0.12, phase: rnd() * 6.28, layer, baseOpacity: opacity };
    m.renderOrder = layer === 'front' ? 10 : 0;
    world.add(m); clouds.push(m);
  };
  const nBack = lowPower ? 9 : 16, nMid = lowPower ? 7 : 12, nFront = lowPower ? 2 : 4;
  // a sea of cloud below the horizon, plus a few towering cumulus behind the island
  for (let i = 0; i < nBack; i++) {
    const tower = i % 4 === 0;
    addCloud(-34 + rnd() * 68, tower ? -6 + rnd() * 5 : -9 - rnd() * 4, -24 - rnd() * 34, tower ? 12 + rnd() * 8 : 14 + rnd() * 10,
      new THREE.Color('#f6dcc6').lerp(new THREE.Color('#9fb2bb'), 0.15 + rnd() * 0.45), tower ? 0.9 : 0.95, 'back');
  }
  // cloud banks hugging the island's base
  for (let i = 0; i < nMid; i++) {
    const side = i % 2 ? 1 : -1;
    addCloud(side * (1.5 + rnd() * 6) + 1.5, -4.6 - rnd() * 1.8, -2.5 - rnd() * 4, 3.5 + rnd() * 3.5,
      new THREE.Color('#fff3ea').lerp(new THREE.Color('#c8c5cc'), rnd() * 0.4), 0.92, 'mid');
  }
  for (let i = 0; i < nFront; i++) addCloud((i % 2 ? 1 : -1) * (6 + rnd() * 3), -3.6 - rnd() * 1.5, 4.5 + rnd() * 2, 4 + rnd() * 2, new THREE.Color('#ffffff'), 0.5, 'front');

  // sun glow sprite
  const sunSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture('rgba(255,236,210,1)', 'rgba(255,190,130,0.35)'), color: '#ffd6a6', transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  sunSprite.scale.setScalar(46); sunSprite.position.copy(sunDir).multiplyScalar(120); scene.add(sunSprite);

  // dust motes (foreground depth)
  const dustCount = lowPower ? 120 : 260;
  const dpos = new Float32Array(dustCount * 3);
  for (let i = 0; i < dustCount; i++) dpos.set([(rnd() - 0.5) * 22, (rnd() - 0.5) * 12, -6 + rnd() * 16], i * 3);
  const dustGeo = new THREE.BufferGeometry(); dustGeo.setAttribute('position', new THREE.BufferAttribute(dpos, 3));
  const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({ map: glowTex, size: 0.07, color: '#ffe2c0', transparent: true, opacity: 0.7, depthWrite: false, blending: THREE.AdditiveBlending }));
  world.add(dust);

  // ---- layout (desktop: island right of copy; mobile: island below copy) ----
  const layout = { islandPos: new THREE.Vector3(), globePos: new THREE.Vector3(), camBase: new THREE.Vector3(), look: new THREE.Vector3(), scale: 1 };
  function computeLayout(w, h) {
    const aspect = w / h;
    if (aspect < 0.8) {             // portrait phones / tablets: scene in the upper half, copy below
      const sc = aspect < 0.6 ? 0.7 : 0.82;
      layout.islandPos.set(0, 2.85, 0); layout.globePos.set(0.12, 2.85 + 2.6 * sc / 0.7 * 0.92, -0.4);
      layout.camBase.set(0, 5.4, 20); layout.look.set(0, 0.9, 0); layout.scale = sc;
    } else if (aspect < 1.25) {     // square-ish
      layout.islandPos.set(1.6, -1.2, 0); layout.globePos.set(1.75, 2.15, -0.4);
      layout.camBase.set(0, 1.2, 17.5); layout.look.set(0.6, 0.2, 0); layout.scale = 0.95;
    } else {
      layout.islandPos.set(3.1, -1.05, 0); layout.globePos.set(3.25, 2.45, -0.45);
      layout.camBase.set(0, 1.0, 15.2); layout.look.set(1.15, 0.35, 0); layout.scale = 1;
    }
    islandPivot.position.copy(layout.islandPos); islandPivot.scale.setScalar(layout.scale);
    globe.group.position.copy(layout.globePos); globe.group.scale.setScalar(layout.scale);
    // beam: from the globe's New York region to the campus quad
    const start = layout.globePos.clone().add(new THREE.Vector3(-0.55, -0.85, 0.75).multiplyScalar(layout.scale));
    const end = CAMPUS_POINT.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), -0.5).multiplyScalar(layout.scale).add(layout.islandPos);
    const mid = start.clone().lerp(end, 0.5).add(new THREE.Vector3(-0.9, 0.2, 0.9));
    beam.geometry.dispose();
    beam.geometry = new THREE.TubeGeometry(new THREE.QuadraticBezierCurve3(start, mid, end), 60, 0.012, 6, false);
  }

  // ---- state ----
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  let scrollP = 0, scrollTarget = 0, visible = true, running = false, rafId = 0;
  let intro = reduceMotion ? 1 : 0;
  const clock = new THREE.Clock();
  const toCam = new THREE.Vector3();

  function resize() {
    const w = stage.clientWidth, h = stage.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.fov = w / h < 0.8 ? 40 : 32;
    camera.updateProjectionMatrix();
    computeLayout(w, h);
  }

  function readScroll() {
    if (reduceMotion) { scrollTarget = 0; return; }
    const r = heroEl.getBoundingClientRect();
    const span = Math.max(1, r.height - window.innerHeight);
    scrollTarget = THREE.MathUtils.clamp(-r.top / span, 0, 1);
  }

  const ease = (t) => 1 - Math.pow(1 - t, 3);

  function frame() {
    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.elapsedTime;
    if (!reduceMotion) intro = Math.min(1, intro + dt / 2.6);
    const ie = ease(intro);

    pointer.x += (pointer.tx - pointer.x) * 0.045; pointer.y += (pointer.ty - pointer.y) * 0.045;
    scrollP += (scrollTarget - scrollP) * 0.09;
    const sp = scrollP;

    // camera: drifts in on load, follows pointer, sinks + pushes in on scroll
    const cb = layout.camBase;
    camera.position.set(
      cb.x + pointer.x * 0.9 - sp * 0.6,
      cb.y + pointer.y * 0.5 + (1 - ie) * 1.6 - sp * 2.8,
      cb.z + (1 - ie) * 4.5 - sp * 3.2
    );
    camera.lookAt(layout.look.x + pointer.x * 0.15, layout.look.y - sp * 1.6, layout.look.z);

    // island: slow idle bob/turn, extra turn while scrolling
    islandPivot.position.y = layout.islandPos.y + Math.sin(t * 0.55) * 0.08 - (1 - ie) * 0.6;
    islandPivot.rotation.y = Math.sin(t * 0.12) * 0.05 + sp * 0.55 + pointer.x * 0.06;
    islandPivot.rotation.z = Math.sin(t * 0.4) * 0.01;

    // globe: rises with scroll, orbits gently
    const g = globe.group;
    g.position.y = layout.globePos.y + Math.sin(t * 0.7 + 1) * 0.07 + sp * 0.9;
    toCam.copy(camera.position).sub(g.position).normalize();
    globe.orient(toCam, Math.sin(t * 0.09) * 0.22 + sp * 0.5);
    const reveal = THREE.MathUtils.clamp((intro - 0.35) / 0.6, 0, 1);
    globe.update(t, reveal);
    beamMat.uniforms.uTime.value = t; beamMat.uniforms.uReveal.value = THREE.MathUtils.clamp((intro - 0.55) / 0.45, 0, 1);

    windowMat.emissiveIntensity = 1.2 + Math.sin(t * 1.7) * 0.08;

    for (const f of fragments) { const u = f.userData; f.position.y = u.baseY + Math.sin(t * u.speed + u.phase) * 0.12; f.rotation.y += dt * 0.05; }
    for (const c of clouds) {
      const u = c.userData;
      c.position.x = u.base.x + Math.sin(t * 0.05 + u.phase) * 0.6 + t * u.drift * 0.05;
      c.quaternion.copy(camera.quaternion);
      if (u.layer === 'front') c.material.opacity = u.baseOpacity * (0.35 + sp * 1.1);
      if (u.layer === 'mid') c.position.y = u.base.y + sp * 1.4;
    }
    dust.rotation.y = t * 0.01; dust.position.y = Math.sin(t * 0.2) * 0.2;

    renderer.render(scene, camera);
  }

  function loop() {
    if (!running) return;
    frame();
    rafId = requestAnimationFrame(loop);
  }
  function start() { if (running || reduceMotion) return; running = true; clock.getDelta(); rafId = requestAnimationFrame(loop); }
  function stop() { running = false; cancelAnimationFrame(rafId); }

  // ---- events ----
  const onPointer = (e) => {
    pointer.tx = (e.clientX / window.innerWidth - 0.5) * 2;
    pointer.ty = -(e.clientY / window.innerHeight - 0.5) * 2;
  };
  if (!isMobile && !reduceMotion) window.addEventListener('pointermove', onPointer, { passive: true });
  const onScroll = () => readScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  let rT;
  const ro = new ResizeObserver(() => { clearTimeout(rT); rT = setTimeout(() => { resize(); if (!running) frame(); }, 60); });
  ro.observe(stage);

  const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; visible && !document.hidden ? start() : stop(); }, { rootMargin: '80px' });
  io.observe(heroEl);
  document.addEventListener('visibilitychange', () => { document.hidden ? stop() : visible && start(); });

  canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); stop(); root.classList.add('no-webgl'); });

  resize(); readScroll(); scrollP = scrollTarget;
  frame();
  root.classList.add('hero-ready');
  if (reduceMotion) { intro = 1; frame(); } else start();

  // exposed for debugging / poster capture
  window.__hero = { renderer, scene, camera, frame, stop, start, set intro(v) { intro = v; } };
}
