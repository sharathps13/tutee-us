import * as THREE from 'three';
import { common } from './glsl.js';

// Sky dome: blue-hour gradient, thin cloud deck lit from below by the city, stars and a moon.
export function createSky(shared) {
  const geo = new THREE.SphereGeometry(9000, 48, 24);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: Object.assign({ uTime: shared.uTime, uMoon: { value: new THREE.Vector3(0.62, 0.36, -0.7).normalize() } }, shared.atmos),
    vertexShader: /* glsl */`
      varying vec3 vDir;
      void main(){ vDir = normalize(position); vec4 p = modelMatrix * vec4(position,1.); gl_Position = projectionMatrix * viewMatrix * p; gl_Position.z = gl_Position.w; }`,
    fragmentShader: /* glsl */`
      ${common}
      uniform float uTime; uniform vec3 uMoon;
      varying vec3 vDir;
      void main(){
        vec3 d = normalize(vDir);
        vec3 col = skyColor(d);
        // stars (fade into the haze near the horizon)
        vec2 sp = vec2(atan(d.z, d.x) * 320., d.y * 640.);
        vec2 id = floor(sp); vec2 f = fract(sp) - .5;
        float h = hash21(id);
        float star = step(.9965, h) * smoothstep(.10, .5, d.y);
        float tw = .6 + .4 * sin(uTime * (1.5 + h * 4.) + h * 60.);
        col += vec3(.85,.9,1.) * star * smoothstep(.22, .0, length(f)) * tw * (.6 + 2.2 * (h - .9965) / .0035) * (.35 + .65 * uNight);
        // moon + halo
        float md = dot(d, uMoon);
        col += vec3(1.,.95,.86) * smoothstep(.99988, .99993, md) * 1.6;
        col += vec3(.55,.62,.8) * pow(max(md, 0.), 2400.) * .3 + vec3(.25,.3,.42) * pow(max(md,0.), 120.) * .025;
        // cloud deck: wispy stratus, bellies warmed by the city below
        if (d.y > 0.) {
          vec2 cp = d.xz / (d.y + .08) * 1.6;
          float c = fbm(cp * .55 + vec2(uTime * .006, uTime * .002));
          c = smoothstep(.52, .86, c) * smoothstep(.0, .12, d.y) * (1. - smoothstep(.45, .9, d.y));
          vec2 hd = normalize(d.xz + 1e-5);
          float g = pow(max(dot(hd, normalize(uGlowDir.xz)), 0.), 2.);
          vec3 cc = mix(vec3(.06,.07,.1), vec3(.32,.18,.11), g * (1. - uNight) + .25) * (1. - .6 * uNight);
          col = mix(col, cc, c * .75);
        }
        gl_FragColor = vec4(col, 1.);
      }`
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = -10;
  return mesh;
}
