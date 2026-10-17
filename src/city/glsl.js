// Shared GLSL: hashing, noise, the blue-hour sky model and atmospheric fog.
// Every custom material in the scene uses the same sky + fog so buildings, water and
// bridge all dissolve into one consistent atmosphere.

export const common = /* glsl */ `
float hash11(float p){ p = fract(p * .1031); p *= p + 33.33; p *= p + p; return fract(p); }
float hash21(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec2 hash22(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * vec3(.1031,.1030,.0973)); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.xx + p3.yz) * p3.zy); }
float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p); vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash21(i), hash21(i+vec2(1,0)), u.x), mix(hash21(i+vec2(0,1)), hash21(i+vec2(1,1)), u.x), u.y);
}
float fbm(vec2 p){ float a = .5, s = 0.; for(int i=0;i<5;i++){ s += a*vnoise(p); p = p*2.03 + 17.1; a *= .5; } return s; }

uniform vec3 uGlowDir;      // direction of the last light on the horizon
uniform float uNight;       // 0 = blue hour, 1 = deep night (finale)

vec3 skyColor(vec3 d){
  float h = d.y;
  vec3 zenith  = mix(vec3(.006,.012,.034), vec3(.002,.004,.012), uNight);
  vec3 upper   = mix(vec3(.028,.058,.13),  vec3(.008,.016,.04),  uNight);
  vec3 horizon = mix(vec3(.11,.16,.27),    vec3(.04,.055,.09),   uNight);
  vec3 col = mix(horizon, upper, smoothstep(-.02, .22, h));
  col = mix(col, zenith, smoothstep(.18, .85, h));
  // afterglow of the sunset behind the skyline
  vec2 hd = normalize(d.xz + 1e-5);
  float g = pow(max(dot(hd, normalize(uGlowDir.xz)), 0.), 2.5);
  vec3 warm = mix(vec3(1.05,.42,.16), vec3(.35,.12,.06), uNight);
  col += warm * g * exp(-max(h, 0.) * 9.) * .75;
  col += vec3(.95,.55,.30) * g * exp(-max(h,0.) * 30.) * .55 * (1. - uNight);
  // light pollution dome over the city
  col += vec3(.30,.16,.08) * exp(-max(h,0.) * 18.) * .09;
  if (h < 0.) col = mix(col, horizon * .35, smoothstep(0., -.08, h));
  return col;
}

uniform vec3 uFogA;         // warm low haze (street light scattered)
uniform float uFogDensity;

vec3 applyFog(vec3 col, vec3 wp, vec3 cam){
  vec3 d = wp - cam; float dist = length(d);
  vec3 dir = d / dist;
  // height-attenuated exponential fog
  float hf = exp(-max(wp.y, 0.) * .0028);
  float f = 1. - exp(-dist * uFogDensity * (.35 + .65 * hf));
  vec3 fc = skyColor(vec3(dir.x, max(dir.y, .015), dir.z));
  fc = mix(fc, uFogA, hf * .25);
  fc *= mix(1., .3, smoothstep(.0, -.35, dir.y));   // looking down onto the city: haze stays dim
  return mix(col, fc, clamp(f, 0., 1.));
}
`;
