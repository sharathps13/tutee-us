import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { createSky } from './sky.js';
import { generateCity, buildCityMesh, buildingMaterial, beaconPoints, empire, oneWTC, chrysler, cityGround, SHORE_Z, AVE } from './buildings.js';
import { createWater } from './water.js';
import { createTraffic } from './traffic.js';
import { createBridge, glowPoints } from './bridge.js';

// Shared state written by the page (assets/js/main.js): window.TCFilm = { p, mode, active }
const film = window.TCFilm = window.TCFilm || { p: 0, mode: 'hero', active: true };
const canvas = document.querySelector('[data-city]');
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function fail() { document.documentElement.classList.add('no-webgl'); }

function start() {
  if (!canvas) return;
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', stencil: false });
  } catch (e) { fail(); return; }
  if (!renderer.capabilities.isWebGL2) { fail(); return; }

  const mobile = Math.min(window.innerWidth, window.innerHeight) < 700 || /Mobi|Android/i.test(navigator.userAgent);
  let dprCap = mobile ? 1.25 : 1.5, dpr = Math.min(window.devicePixelRatio || 1, dprCap);
  renderer.setPixelRatio(dpr);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 1, 14000);

  const shared = {
    uTime: { value: 0 },
    windowGain: { value: 1 },
    pointScale: { value: 600 },
    atmos: {
      uGlowDir: { value: new THREE.Vector3(0.28, 0, -1).normalize() },
      uNight: { value: 0 },
      uFogA: { value: new THREE.Color(0.12, 0.075, 0.045) },
      uFogDensity: { value: 0.00012 }
    }
  };

  scene.add(createSky(shared));

  // ---- city
  const LM = { empire: [120, -1490], chrysler: [200, -1370], wtc: [-440, -770], park432: [40, -1790] };
  const reserved = Object.values(LM).map(([x, z]) => ({ x, z }));
  const { boxes, tall } = generateCity({ seed: 11, mobile, reserved });
  const beacons = tall.map(t => [t[0], t[1], t[2], t[3]]);
  const bMat = buildingMaterial(shared);
  const landmarkGroup = new THREE.Group();
  landmarkGroup.add(empire(LM.empire[0], LM.empire[1], shared, boxes, beacons));
  landmarkGroup.add(chrysler(LM.chrysler[0], LM.chrysler[1], shared, boxes, beacons));
  landmarkGroup.add(oneWTC(LM.wtc[0], LM.wtc[1], shared, boxes, bMat, beacons));
  boxes.push({ x: LM.park432[0], z: LM.park432[1], w: 28, d: 28, base: 0, h: 425, info: [432.1, 0, 0.3, 0.25], top: 425 });
  beacons.push([LM.park432[0], 427, LM.park432[1], 0.8]);
  scene.add(buildCityMesh(boxes, bMat));
  scene.add(landmarkGroup);
  scene.add(beaconPoints(beacons, shared));
  scene.add(cityGround(shared, mobile));

  // shoreline bulkhead + waterfront lamps
  const quay = new THREE.Mesh(new THREE.BoxGeometry(3400, 4, 12), new THREE.MeshBasicMaterial({ color: 0x07080a }));
  quay.position.set(0, 1.5, SHORE_Z + 2); scene.add(quay);
  const qLamps = [];
  for (let x = -1600; x <= 1600; x += 16) qLamps.push(new THREE.Vector3(x, 7, SHORE_Z + 6));
  scene.add(glowPoints(qLamps, shared, [1, 0.7, 0.42], 9, 3));

  // distant boroughs: a scatter of tiny lights on the far horizon
  const far = [];
  const rr = (a, b) => a + Math.random() * (b - a);
  for (let i = 0; i < (mobile ? 1400 : 2600); i++) {
    const ang = rr(-Math.PI, Math.PI), r = rr(3200, 7000);
    const x = Math.sin(ang) * r, z = -Math.cos(ang) * r - 600;
    if (Math.abs(x) < 1700 && z < -400 && z > -3000) continue;
    far.push(new THREE.Vector3(x, rr(2, 40) * (r / 4000), z));
  }
  scene.add(glowPoints(far, shared, [1, 0.72, 0.45], 9, 1.4));

  // ---- water
  const water = createWater(shared, { width: 9000, depth: 5200, z: -900, rtW: 512, rtH: 512, mobile });
  scene.add(water);

  // ---- bridge + traffic
  const lanes = [];
  scene.add(createBridge(shared, new THREE.Vector3(430, 0, 470), new THREE.Vector3(330, 0, SHORE_Z - 120), lanes));
  // waterfront highway
  for (const [z, head] of [[SHORE_Z - 3, true], [SHORE_Z - 6, true], [SHORE_Z - 10, false], [SHORE_Z - 13, false]]) {
    const a = new THREE.Vector3(head ? 1700 : -1700, 4.5, z), b = new THREE.Vector3(head ? -1700 : 1700, 4.5, z);
    lanes.push({ a, b, n: mobile ? 30 : 55, speed: 22, head });
  }
  // one-way avenues, alternating direction
  for (let k = -9; k <= 9; k++) {
    const head = k % 2 === 0;
    for (const o of [-5, 0, 5]) {
      const x = k * AVE + o;
      const near = new THREE.Vector3(x, 0.4, SHORE_Z - 8), farP = new THREE.Vector3(x, 0.4, SHORE_Z - 2300);
      lanes.push({ a: head ? farP : near, b: head ? near : farP, n: mobile ? 10 : 18, speed: 14, head });
    }
  }
  // a few cross-town streets
  for (let j = 1; j < 36; j += 3) {
    const z = SHORE_Z - j * 60; const head = j % 2 === 0;
    lanes.push({ a: new THREE.Vector3(1500, 0.4, z), b: new THREE.Vector3(-1500, 0.4, z), n: mobile ? 6 : 12, speed: 9, head });
  }
  scene.add(createTraffic(lanes, shared, { trail: 14 }));

  // ---- post
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.7, 0.55, 0.95);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
  const finish = new ShaderPass({
    uniforms: { tDiffuse: { value: null }, uTime: { value: 0 }, uFade: { value: 0 }, uRes: { value: new THREE.Vector2(1, 1) } },
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }`,
    fragmentShader: /* glsl */`
      uniform sampler2D tDiffuse; uniform float uTime, uFade; uniform vec2 uRes; varying vec2 vUv;
      float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
      void main(){
        vec2 c = vUv - .5;
        float r2 = dot(c, c);
        // subtle lens: chromatic fringe toward the corners
        vec2 off = c * r2 * .012;
        vec3 col = vec3(texture2D(tDiffuse, vUv + off).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - off).b);
        // grade: cool shadows, warm highlights
        float l = dot(col, vec3(.299,.587,.114));
        col = mix(col * vec3(.92,1.,1.08), col * vec3(1.06,1.,.9), smoothstep(.15,.7,l));
        // vignette + film grain
        col *= 1. - r2 * .95;
        float g = h(vUv * uRes + fract(uTime * 7.3) * 100.) - .5;
        col += g * .045 * (1. - l * .6);
        gl_FragColor = vec4(col * uFade, 1.);
      }`
  });
  composer.addPass(finish);

  // ---- camera shots (hero reel)
  const V = (x, y, z) => new THREE.Vector3(x, y, z);
  const shotPos = new THREE.CatmullRomCurve3([V(-60, 24, 640), V(-40, 9, -60), V(0, 36, -460), V(14, 74, -1150), V(-170, 430, -1270)], false, 'centripetal');
  const shotLook = new THREE.CatmullRomCurve3([V(-560, 150, -1100), V(-60, 130, -900), V(0, 60, -1150), V(100, 330, -1490), V(170, 260, -1760)], false, 'centripetal');
  const finaleC = new THREE.Vector3(60, 0, -1350);

  const cur = { pos: shotPos.getPoint(0), look: shotLook.getPoint(0) };
  const tmpP = new THREE.Vector3(), tmpL = new THREE.Vector3();
  const pointer = { x: 0, y: 0, sx: 0, sy: 0 };
  window.addEventListener('pointermove', (e) => { pointer.x = e.clientX / innerWidth - 0.5; pointer.y = e.clientY / innerHeight - 0.5; }, { passive: true });

  let W = 0, H = 0, portrait = false;
  function resize() {
    W = canvas.clientWidth || innerWidth; H = canvas.clientHeight || innerHeight;
    portrait = H > W;
    renderer.setPixelRatio(dpr);
    renderer.setSize(W, H, false);
    composer.setPixelRatio(dpr); composer.setSize(W, H);
    bloom.resolution.set(W * dpr / 2, H * dpr / 2);
    camera.aspect = W / H;
    camera.fov = portrait ? 62 : (W / H < 1.4 ? 50 : 40);
    camera.updateProjectionMatrix();
    shared.pointScale.value = (H * dpr) / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2));
    finish.uniforms.uRes.value.set(W * dpr, H * dpr);
  }
  window.addEventListener('resize', resize); resize();

  const clock = new THREE.Clock();
  let t = 0, intro = (reduce || film.noIntro) ? 1 : 0, smoothP = film.p || 0, frames = 0, acc = 0, running = true;
  const ease = (x) => 1 - Math.pow(1 - x, 3);

  function frame() {
    const dt = Math.min(clock.getDelta(), 0.1);
    if (!film.active || document.hidden) { requestAnimationFrame(frame); return; }
    t += reduce ? 0 : dt;
    shared.uTime.value = t;
    finish.uniforms.uTime.value = t;
    intro = Math.min(1, intro + dt / 3.6);
    finish.uniforms.uFade.value = ease(Math.min(1, intro * 1.6));

    pointer.sx += (pointer.x - pointer.sx) * 0.04; pointer.sy += (pointer.y - pointer.sy) * 0.04;
    if (film.mode === 'finale') {
      shared.atmos.uNight.value += (0.75 - shared.atmos.uNight.value) * 0.03;
      const a = -0.35 + t * 0.012 + (film.p || 0) * 0.25;
      tmpP.set(finaleC.x + Math.sin(a) * 1250, 420 - (film.p || 0) * 60, finaleC.z + Math.cos(a) * 1250);
      tmpL.set(finaleC.x, 140, finaleC.z);
    } else {
      shared.atmos.uNight.value += (0 - shared.atmos.uNight.value) * 0.03;
      smoothP += ((film.p || 0) - smoothP) * (reduce ? 1 : 0.07);
      const u = Math.min(Math.max(smoothP, 0), 1);
      shotPos.getPoint(u, tmpP); shotLook.getPoint(u, tmpL);
      if (portrait) { tmpP.x += 60 * (1 - u); tmpP.z += 120 * (1 - u); tmpL.x -= 60 * (1 - u); }
      const k = 1 - ease(intro);
      tmpP.y += 26 * k; tmpP.z += 160 * k;
    }
    // handheld drift + pointer parallax
    const hx = Math.sin(t * 0.37) * 0.6 + Math.sin(t * 0.91) * 0.25, hy = Math.sin(t * 0.53 + 1) * 0.4;
    tmpP.x += hx + pointer.sx * 14; tmpP.y += hy - pointer.sy * 6;
    tmpL.x += pointer.sx * 30; tmpL.y -= pointer.sy * 18;
    cur.pos.lerp(tmpP, film.mode === 'finale' ? 0.05 : 0.2); cur.look.lerp(tmpL, film.mode === 'finale' ? 0.05 : 0.2);
    camera.position.copy(cur.pos); camera.lookAt(cur.look);

    composer.render(dt);

    // adaptive resolution: keep the frame budget on slower GPUs
    frames++; acc += dt;
    if (frames === 90) {
      const avg = acc / frames;
      if (avg > 0.024 && dpr > 0.6) { dpr = Math.max(0.6, dpr - 0.2); resize(); }
      else if (avg < 0.012 && dpr < Math.min(window.devicePixelRatio || 1, dprCap)) { dpr = Math.min(dprCap, dpr + 0.1); resize(); }
      frames = 0; acc = 0;
    }
    if (running) requestAnimationFrame(frame);
  }
  document.documentElement.classList.add('city-ready');
  window.TCCity = { renderer, scene, camera, shared, still: () => { composer.render(0); } };
  requestAnimationFrame(frame);
}

try { start(); } catch (e) { console.error(e); fail(); }
