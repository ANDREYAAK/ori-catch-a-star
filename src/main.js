import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';   // the model is meshopt-compressed (~4x smaller)
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

/* ---------- clip table (frames in the single Blender action, 24 fps) ---------- */
const FPS = 24;
// fetching is a run: the walk cycle at RUN_ANIM speed while the body travels at RUN_SPEED (units/s)
const RUN_SPEED = 2.1, RUN_ANIM = 2.2;
const CLIPS = {
  idle:  { a: 660, b: 740, loop: true },
  lick:  { a: 170, b: 220 },
  walk:  { a: 230, b: 277, loop: true },
  jump:  { a: 290, b: 340 },
  rear:  { a: 350, b: 418 },
  shake: { a: 430, b: 470 },
  roll:  { a: 480, b: 560 },
  petIn: { a: 570, b: 582 },
  pet:   { a: 582, b: 630, loop: true },
  petOut:{ a: 630, b: 644 },
  leap:  { a: 300, b: 318 },
  catchMouth: { a: 760, b: 790 },
  catchPaw:   { a: 800, b: 870 },
  catchTwo:   { a: 880, b: 960 },
  pickup:     { a: 970, b: 1004 },
  drop:       { a: 1010, b: 1040 },
  sitDown:    { a: 1070, b: 1098 },
  sit:        { a: 1098, b: 1146, loop: true },
  sitUp:      { a: 1146, b: 1166 },
  belly:      { a: 1230, b: 1326 },
};
// BELLY v2 lies with a straight back on the floor without squashing the torso: morph target Flat stays at 0
const flatAt = () => 0;
// BELLY: calmer tail wag while lying on the back (1256-1298), so the tail sweeps along the floor instead of poking into it
const bellyWagK = (f) => { const ss = (x) => { x = Math.min(1, Math.max(0, x)); return x * x * (3 - 2 * x); };
  return f <= 1250 || f >= 1304 ? 1 : f < 1256 ? 1 - 0.6 * ss((f - 1250) / 6) : f <= 1298 ? 0.4 : 0.4 + 0.6 * ss((f - 1298) / 6); };
const flatMeshes = [];
// after this many seconds without any input the dog sits down and stays seated until the next touch
const SIT_AFTER = 3;
// panting: an ADDITIVE loop (jaw, tongue, chest, head) laid over idle or sit now and then.
// ref is a rest frame used as the zero pose for the additive clip.
const PANT = { a: 1170, b: 1194, ref: 1168 };
// catching a star in the game: chomp + lick over the nose, additive over the run
const CATCHLICK = { a: 1200, b: 1215, ref: 1198 };
const JAW_HOLD = 0.34;

/* ---------- DOM ---------- */
const $ = (s) => document.querySelector(s);
const canvas = $('#canvas');
const screens = { s1: $('#s1'), s2: $('#s2'), s3: $('#s3') };
const flash = $('#flash');
const hint = $('#hint');

function showScreen(id) {
  for (const k in screens) screens[k].classList.toggle('show', k === id);
  document.body.classList.toggle('on-card', id === 's3');   // not 'card': that class styles the star card itself
}

/* ---------- renderer / scene ---------- */
const isMobile = matchMedia('(pointer: coarse)').matches;
// onboarding coach: swipe/arrow hint shown at the start of a round until the player first moves Ori
function coachShow() { const t = document.getElementById('gCoachTip'); if (t) t.textContent = isMobile ? 'Свайпай в стороны, чтобы двигать Ори' : 'Двигай мышью или стрелками ← →'; document.body.classList.add('coach'); }
function coachDone() { document.body.classList.remove('coach'); }
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
renderer.setClearColor(0x000000, 0);
renderer.setPixelRatio(Math.min(devicePixelRatio || 1, isMobile ? 1.5 : 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.82;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
scene.environmentIntensity = 0.45;

const key = new THREE.DirectionalLight(0xffffff, 1.15); key.position.set(2.5, 4, 3); scene.add(key);
const rim = new THREE.DirectionalLight(0xc9d6ff, 1.2); rim.position.set(-3, 2, -3); scene.add(rim);
const fill = new THREE.HemisphereLight(0xa9b6e0, 0x1a1a30, 0.55); scene.add(fill);
const under = new THREE.PointLight(0xe4efff, 1.2, 5, 1.6); under.position.set(0, -0.55, 0.9); scene.add(under);   // neutral soft fill from below (no lime tint on the dog)

/* ---------- star field ---------- */
function makeStars(n, spread, size, color) {
  const g = new THREE.BufferGeometry();
  const pos = new Float32Array(n * 3), ph = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    pos[i * 3] = (Math.random() - 0.5) * spread;
    pos[i * 3 + 1] = (Math.random() - 0.5) * spread;
    pos[i * 3 + 2] = -3 - Math.random() * 12;
    ph[i] = Math.random() * Math.PI * 2;
  }
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('phase', new THREE.BufferAttribute(ph, 1));
  const m = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uTime: { value: 0 }, uSize: { value: size }, uColor: { value: new THREE.Color(color) }, uPR: { value: renderer.getPixelRatio() } },
    vertexShader: `attribute float phase; varying float vA; uniform float uTime,uSize,uPR;
      void main(){ vec4 mv=modelViewMatrix*vec4(position,1.); float tw=.55+.45*sin(uTime*1.3+phase*7.); vA=tw;
      gl_PointSize=uSize*uPR*(0.6+0.8*tw)*(6./-mv.z); gl_Position=projectionMatrix*mv; }`,
    fragmentShader: `varying float vA; uniform vec3 uColor; void main(){ vec2 d=gl_PointCoord-.5; float r=length(d);
      float a=smoothstep(.5,.05,r); float core=smoothstep(.18,0.,r); gl_FragColor=vec4(uColor+core*.4,(a*vA)*0.9); }`,
  });
  const p = new THREE.Points(g, m); p.frustumCulled = false; return p;
}
const starsFar = makeStars(380, 26, 5.0, '#dfe7ff'); scene.add(starsFar);
const starsNear = makeStars(70, 14, 9, '#ffffff'); scene.add(starsNear);

/* ---------- floor: soft shadow disc + thin lime ring ---------- */
const pedestal = new THREE.Group();
{
  const c = document.createElement('canvas'); c.width = c.height = 256; const x = c.getContext('2d');
  const g = x.createRadialGradient(128, 128, 0, 128, 128, 128); g.addColorStop(0, 'rgba(8,10,20,.55)'); g.addColorStop(0.55, 'rgba(8,10,20,.25)'); g.addColorStop(1, 'rgba(8,10,20,0)');
  x.fillStyle = g; x.fillRect(0, 0, 256, 256);
  const shadowTex = new THREE.CanvasTexture(c);
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 1.6), new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.002;
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.62, 0.66, 128), new THREE.MeshBasicMaterial({ color: 0xd9f38b, transparent: true, opacity: 0.9, depthWrite: false, side: THREE.DoubleSide }));
  ring.rotation.x = -Math.PI / 2; ring.position.y = 0.004; ring.scale.set(1, 0.72, 1);
  const halo = new THREE.Mesh(new THREE.RingGeometry(0.55, 0.9, 128), new THREE.MeshBasicMaterial({ color: 0xd9f38b, transparent: true, opacity: 0.12, depthWrite: false, side: THREE.DoubleSide }));
  halo.rotation.x = -Math.PI / 2; halo.position.y = 0.003; halo.scale.set(1, 0.72, 1);
  pedestal.add(shadow, halo, ring);
  scene.add(pedestal);
}

/* ---------- falling stars (catch sequence) ---------- */
const starTex = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d');
  const g = x.createRadialGradient(64, 64, 0, 64, 64, 64); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.25, 'rgba(236,244,255,.9)'); g.addColorStop(1, 'rgba(228,239,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, 128, 128);
  x.fillStyle = 'rgba(255,255,255,.95)'; x.beginPath();
  for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4, r = i % 2 ? 12 : 40; x.lineTo(64 + Math.cos(a) * r, 64 + Math.sin(a) * r); }
  x.closePath(); x.fill();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
})();
/* ---------- particles: every spark, trail and puff in ONE draw call ---------- */
// (each spark used to be its own Sprite with its own material: 100+ draw calls in a busy moment of the game)
// A spark keeps the old sprite-like API that the callers use: .position, .material.color, .userData.
const PMAX = 1024;
const pBuf = { pos: new Float32Array(PMAX * 3), col: new Float32Array(PMAX * 3), size: new Float32Array(PMAX), alpha: new Float32Array(PMAX) };
const pGeo = new THREE.BufferGeometry();
pGeo.setAttribute('position', new THREE.BufferAttribute(pBuf.pos, 3).setUsage(THREE.DynamicDrawUsage));
pGeo.setAttribute('color', new THREE.BufferAttribute(pBuf.col, 3).setUsage(THREE.DynamicDrawUsage));
pGeo.setAttribute('size', new THREE.BufferAttribute(pBuf.size, 1).setUsage(THREE.DynamicDrawUsage));
pGeo.setAttribute('alpha', new THREE.BufferAttribute(pBuf.alpha, 1).setUsage(THREE.DynamicDrawUsage));
pGeo.setDrawRange(0, 0);
const pMat = new THREE.ShaderMaterial({
  uniforms: { map: { value: null }, pxPerUnit: { value: 1000 } },
  vertexShader: `attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vCol; varying float vA;
    uniform float pxPerUnit;
    void main() { vCol = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = size * pxPerUnit / -mv.z; gl_Position = projectionMatrix * mv; }`,
  fragmentShader: `uniform sampler2D map; varying vec3 vCol; varying float vA;
    void main() { vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vCol * t.rgb, t.a * vA);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    }`,
  transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
});
pMat.uniforms.map.value = starTex;
const pPoints = new THREE.Points(pGeo, pMat); pPoints.frustumCulled = false; pPoints.renderOrder = 5; scene.add(pPoints);
const fallers = [], sparkPool = [];
let timeUnis = null;
function spawnFaller(x, y, z, v, s, life) {
  if (fallers.length >= PMAX) return sparkPool[0] || { position: new THREE.Vector3(), material: { color: new THREE.Color() }, userData: {} };
  const sp = sparkPool.pop() || { position: new THREE.Vector3(), material: { color: new THREE.Color(), opacity: 1 }, userData: {} };
  sp.position.set(x, y, z); sp.material.color.setRGB(1, 1, 1); sp.material.opacity = 1; sp.size = s;
  sp.userData.v = v; sp.userData.life = life; sp.userData.t = 0; sp.userData.fin = 0;
  fallers.push(sp); return sp;
}
// emission is per SECOND, not per frame: a 120 Hz screen (or a benchmark) must not double the sparks
const emit = (perFrameAt60, dt) => { const n = perFrameAt60 * dt * 60; return Math.floor(n) + (Math.random() < n % 1 ? 1 : 0); };
// the same for smoothing: k is the per-frame lerp factor tuned at 60 fps; on 120 Hz the camera must not settle twice as fast
const ease = (k, dt) => 1 - Math.pow(1 - k, dt * 60);
function stepSparks(dt) {
  let n = 0;
  for (let i = fallers.length - 1; i >= 0; i--) {
    const s = fallers[i], u = s.userData;
    u.t += dt; s.position.addScaledVector(u.v, dt);
    if (u.t > u.life) { fallers[i] = fallers[fallers.length - 1]; fallers.pop(); sparkPool.push(s); }
  }
  for (const s of fallers) {
    const u = s.userData, k = n * 3;
    pBuf.pos[k] = s.position.x; pBuf.pos[k + 1] = s.position.y; pBuf.pos[k + 2] = s.position.z;
    pBuf.col[k] = s.material.color.r; pBuf.col[k + 1] = s.material.color.g; pBuf.col[k + 2] = s.material.color.b;
    pBuf.size[n] = s.size; pBuf.alpha[n] = Math.max(0, 1 - u.t / u.life) * (u.fin ? Math.min(1, u.t / u.fin) : 1); n++;
  }
  pGeo.setDrawRange(0, n);
  if (n) for (const a of ['position', 'color', 'size', 'alpha']) pGeo.attributes[a].needsUpdate = true;
}

/* ---------- model ---------- */
let ori, pivot, mixer, skel, headBone, jawBone, actions = {}, current = null;
const zoom = { v: 1.3, target: 1.3, min: 0.75, max: 2.2, pinch: 0 };
const fetch_ = { mode: false, pos: null, yaw: null, ball: null, sparks: [] };
// free ball on the floor: simple 2D physics with walls at the visible play area
const phys = { on: false, v: new THREE.Vector3(), vy: 0, bounds: { x: 1.55, zMin: -1.7, zMax: 1.35 }, grab: null, chase: false };
const BALL_R = 0.072;
const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
const raycaster = new THREE.Raycaster();
const eyes = { pupils: [], glints: [], irises: [], scleras: [], pivots: [], gaze: new THREE.Vector2(), target: new THREE.Vector2(), sacc: 0 };
// Blender driver basis converted to glTF node space (x, z, -y)
// Build one pivot per eye at the centre of the eyeball sphere (fitted to the iris cap) and hang the iris,
// pupil and glints on it, so the gaze rotates the eyeball instead of sliding flat discs over the face.
function buildEyePivots() {
  for (const side of ['L', 'R']) {
    const iris = eyes.irises.find((e) => e.side === side); if (!iris) continue;
    const g = iris.node.geometry.attributes.position;
    // least squares sphere fit: |p|^2 = 2p.c + (R^2 - |c|^2)
    const A = [], b = [];
    for (let i = 0; i < g.count; i += 3) {
      const x = g.getX(i), y = g.getY(i), z = g.getZ(i);
      A.push([2 * x, 2 * y, 2 * z, 1]); b.push(x * x + y * y + z * z);
    }
    const n = 4, AtA = Array.from({ length: n }, () => new Array(n).fill(0)), Atb = new Array(n).fill(0);
    for (let k = 0; k < A.length; k++) for (let i = 0; i < n; i++) { Atb[i] += A[k][i] * b[k]; for (let j = 0; j < n; j++) AtA[i][j] += A[k][i] * A[k][j]; }
    for (let i = 0; i < n; i++) {                                   // gaussian elimination
      let p = i; for (let r = i + 1; r < n; r++) if (Math.abs(AtA[r][i]) > Math.abs(AtA[p][i])) p = r;
      [AtA[i], AtA[p]] = [AtA[p], AtA[i]]; [Atb[i], Atb[p]] = [Atb[p], Atb[i]];
      if (Math.abs(AtA[i][i]) < 1e-12) continue;
      for (let r = 0; r < n; r++) { if (r === i) continue; const f = AtA[r][i] / AtA[i][i]; for (let c2 = i; c2 < n; c2++) AtA[r][c2] -= f * AtA[i][c2]; Atb[r] -= f * Atb[i]; }
    }
    const cx = Atb[0] / AtA[0][0], cy = Atb[1] / AtA[1][1], cz = Atb[2] / AtA[2][2];
    const centreLocal = new THREE.Vector3(cx, cy, cz);              // in the iris mesh's own space
    const centre = iris.node.localToWorld(centreLocal.clone());
    const parent = iris.node.parent;
    const pivot = new THREE.Group(); pivot.name = 'EYEBALL_' + side;
    parent.add(pivot); pivot.position.copy(parent.worldToLocal(centre.clone()));
    for (const e of [iris, ...eyes.pupils.filter((p) => p.side === side), ...eyes.glints.filter((p) => p.side === side)]) pivot.attach(e.node);
    eyes.pivots.push({ node: pivot, side });
  }
}

const EYE_AXES = {
  L: { px: new THREE.Vector3(0.87777, 0.03979, -0.47743), py: new THREE.Vector3(0.05253, -0.99853, 0.01336) },
  R: { px: new THREE.Vector3(0.87520, -0.04017, 0.48210), py: new THREE.Vector3(-0.05980, -0.99789, 0.02540) },
};
const spin = { y: 0, x: 0, vy: 0, dragging: false, lastX: 0, lastY: 0, moved: 0 };
// procedural tail wag (port of the Blender drivers: amp deg, speed Hz, per-bone gain and phase lag)
const tail = { bones: [], amp: 14, speed: 2.0, gains: [0.292, 0.364, 0.436, 0.508, 0.580], lags: [0.55, 1.10, 1.65, 2.20, 2.75] };
const _eq = new THREE.Quaternion(), _eq2 = new THREE.Quaternion();
const _qz = new THREE.Quaternion(), _qx = new THREE.Quaternion(), _ax = new THREE.Vector3(1, 0, 0), _az = new THREE.Vector3(0, 0, 1);
const clock = new THREE.Clock();
const _lifeE = new THREE.Euler(), _lifeQ = new THREE.Quaternion(), _lifeBones = {};
// Procedural offsets on top of the clips. three.js skips writing a bone when the clip value did not
// change since the last frame, so an offset multiplied in every frame would pile up and spin the bone.
// Every offset is remembered and taken off again before the mixer runs.
const _procOff = new Map(), _procInv = new THREE.Quaternion();
function procUndo() {
  for (const [b, q] of _procOff) b.quaternion.multiply(_procInv.copy(q).invert());
  _procOff.clear();
}
function procApply(b, q) {
  b.quaternion.multiply(q);
  const prev = _procOff.get(b); if (prev) prev.multiply(q); else _procOff.set(b, q.clone());
}
function life(name, x, y, z) {
  const b = _lifeBones[name] || (_lifeBones[name] = ori && ori.getObjectByName(name)); if (!b) return;
  _lifeE.set(x, y, z); _lifeQ.setFromEuler(_lifeE); procApply(b, _lifeQ);
}
const MODEL_SCALE = 0.43;

function decodeGLB(b64) {
  const bin = atob(b64); const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
  return arr.buffer;
}

function setupMaterials(root) {
  root.traverse((o) => {
    if (!o.isMesh) return;
    o.frustumCulled = false;
    const m = o.material; if (!m) return;
    const name = (m.name || '').replace(/\.\d+$/, '');   // tolerate Blender's .001 duplicate suffixes
    if (name === 'WEB_body') {
      const pm = new THREE.MeshPhysicalMaterial({
        map: m.map, color: 0xe4e1ee, roughness: 0.36, metalness: 0,
        emissive: 0xffffff, emissiveMap: m.emissiveMap, emissiveIntensity: 1.0,
        clearcoat: 0.45, clearcoatRoughness: 0.25, iridescence: 0.35, iridescenceIOR: 1.5, iridescenceThicknessRange: [150, 400],
        sheen: 0.15, sheenRoughness: 0.5, sheenColor: new THREE.Color(0xd9bfff), envMapIntensity: 0.9,
      });
      // nebula patches from the baked Blender emission, recoloured to the brand-guide greys (#5B6E96 .. #E4EFFF)
      pm.onBeforeCompile = (sh) => {
        sh.uniforms.uTime = { value: 0 }; pm.userData.uni = sh.uniforms;
        sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vRest;')
          .replace('#include <begin_vertex>', '#include <begin_vertex>\nvRest = position;');
        sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>
          varying vec3 vRest; uniform float uTime;
          float hsh(vec3 p){ return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
          float vnoise(vec3 p){ vec3 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
            return mix(mix(mix(hsh(i), hsh(i+vec3(1,0,0)), f.x), mix(hsh(i+vec3(0,1,0)), hsh(i+vec3(1,1,0)), f.x), f.y),
                       mix(mix(hsh(i+vec3(0,0,1)), hsh(i+vec3(1,0,1)), f.x), mix(hsh(i+vec3(0,1,1)), hsh(i+vec3(1,1,1)), f.x), f.y), f.z); }
          float fbm(vec3 p){ float a = 0.0, w = 0.5; for (int k = 0; k < 4; k++) { a += w * vnoise(p); p *= 2.0; w *= 0.5; } return a; }`)
        .replace('#include <emissivemap_fragment>',
          `#ifdef USE_EMISSIVEMAP
             // baked Blender emission (sRGB texture, decoded to linear here) gives the exact patch layout from the OPAL shader
             vec4 ec = texture2D( emissiveMap, vEmissiveMapUv );
             float lum = dot(ec.rgb, vec3(0.299, 0.587, 0.114));
             float spark = smoothstep(0.66, 0.9, lum);
             // patch mask from the baked luminance (linear: body median ~0.34, patch cores ~0.5-0.6), fine detail from live noise
             vec3 P = vRest * 2.3;
             float n2 = fbm(P * 2.6 + vec3(7.1, 3.3, uTime * 0.03));
             float pb = smoothstep(0.23, 0.50, lum + (n2 - 0.5) * 0.12);
             float mask = pb * (1.0 - spark);
             // patch colours: violet -> pink with a blue touch on the rims (restored at the user's request)
             float t = clamp((lum - 0.30) / 0.30 + (n2 - 0.5) * 0.5, 0.0, 1.0);
             vec3 ramp = t < 0.5 ? mix(vec3(0.42, 0.45, 1.0), vec3(0.62, 0.35, 1.0), t / 0.5) : mix(vec3(0.62, 0.35, 1.0), vec3(1.0, 0.48, 0.86), (t - 0.5) / 0.5);
             // patches replace the white albedo (so bright lights cannot wash them out) and glow a little
             diffuseColor.rgb = mix(diffuseColor.rgb, ramp * 0.85, mask * 0.95);
             totalEmissiveRadiance = ramp * mask * 0.6 + vec3(1.0) * spark * 1.3;
           #endif`);
      };
      pm.name = name; o.material = pm;
    } else if (name === 'WEB_lid') {
      // eyelid shutters: same pale crystal surface as the body, but no baked atlas (the lids have no UVs)
      o.material = new THREE.MeshPhysicalMaterial({ color: 0xe8e4f2, roughness: 0.34, metalness: 0,
        clearcoat: 0.45, clearcoatRoughness: 0.25, sheen: 0.2, sheenRoughness: 0.5, sheenColor: new THREE.Color(0xd9bfff), envMapIntensity: 0.9 });
      o.material.name = name; o.renderOrder = 2;
    } else if (name === 'WEB_mouth') {
      o.material = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.55, metalness: 0 });
    } else if (name === 'WEB_lens') {
      o.material = new THREE.MeshPhysicalMaterial({ color: 0xffffff, transparent: true, opacity: 0.14, roughness: 0.05, metalness: 0, clearcoat: 1, depthWrite: false });
      o.renderOrder = 3;
    } else if (name === 'WEB_glint') {
      o.material = new THREE.MeshBasicMaterial({ color: 0xffffff }); o.renderOrder = 4;
    } else if (name === 'WEB_iris') {
      m.emissiveIntensity = 0.35; m.roughness = 0.4;
    } else if (name === 'WEB_sclera') {
      m.emissiveIntensity = 0.5;
    } else if (name === 'WEB_ink') {
      o.material = new THREE.MeshStandardMaterial({ color: 0x1e2536, roughness: 0.85 }); o.renderOrder = 2;
    } else if (name === 'WEB_teeth') {
      m.color.set(0xf7f5ff); m.roughness = 0.3;
    }
  });
}

function makeAction(gltfClip, name) {
  const { a, b, loop } = CLIPS[name];
  const sub = THREE.AnimationUtils.subclip(gltfClip, name, a, b, FPS);
  const act = mixer.clipAction(sub);
  act.setLoop(loop ? THREE.LoopRepeat : THREE.LoopOnce, Infinity);
  act.clampWhenFinished = !loop;
  return act;
}

function play(name, { fade = 0.25, onDone, speed = 1 } = {}) {
  const next = actions[name]; if (!next) return;
  if (current && current !== next) current.fadeOut(fade);
  next.reset().setEffectiveTimeScale(speed).setEffectiveWeight(1).fadeIn(fade).play();
  current = next;
  if (onDone) {
    const cb = (e) => { if (e.action === next) { mixer.removeEventListener('finished', cb); onDone(); } };
    mixer.addEventListener('finished', cb);
  }
}

async function loadModel() {
  // versioned: a new model is never served from an old cache
  const fetchGLB = () => fetch('assets/ori.glb' + (window.ORI_GLB_V ? '?v=' + window.ORI_GLB_V : '')).then((r) => { if (!r.ok) throw new Error('ori.glb ' + r.status); return r.arrayBuffer(); });
  // pages build: the page head already started the download (ORI_GLB_P), so it ran alongside bundle.js
  const buf = window.ORI_GLB ? decodeGLB(window.ORI_GLB) : await (window.ORI_GLB_P || fetchGLB()).catch(fetchGLB);
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader(); loader.setMeshoptDecoder(MeshoptDecoder);
    loader.parse(buf, '', (gltf) => {
      ori = gltf.scene; ori.scale.setScalar(MODEL_SCALE);
      setupMaterials(ori);
      ori.traverse((o) => {
        if (o.isBone) { if (o.name === 'head') headBone = o; if (o.name === 'jaw') jawBone = o; if (o.name === 'lidL' || o.name === 'lidR') blink.bones.push(o); if (/^tail[1-5]$/.test(o.name)) tail.bones[+o.name[4] - 1] = o; }
        if (o.isMesh && o.morphTargetDictionary && o.morphTargetDictionary.Flat !== undefined) flatMeshes.push(o);
        const n = o.name || '';
        if (n === 'LID_L' || n === 'LID_R') { blink.groups.push(o); o.visible = false; }
        if (/^PUPIL_[LR]/.test(n)) eyes.pupils.push({ node: o, side: n[6], base: o.position.clone() });
        if (/^GLINT_[LR]/.test(n)) eyes.glints.push({ node: o, side: n[6], base: o.position.clone() });
        if (/^IRIS_[LR]/.test(n) && o.isMesh) eyes.irises.push({ node: o, side: n[5], base: o.position.clone() });
        if (/^SCLERA_[LR]/.test(n) && o.isMesh) eyes.scleras.push({ node: o, side: n[7] });
      });
      buildEyePivots();
      pivot = new THREE.Group(); pivot.add(ori); scene.add(pivot);
      const box = new THREE.Box3().setFromObject(ori); const ctr = box.getCenter(new THREE.Vector3());
      ori.position.set(-ctr.x, 0, -ctr.z);
      mixer = new THREE.AnimationMixer(ori);
      const clip = gltf.animations[0];
      for (const k in CLIPS) actions[k] = makeAction(clip, k);
      // additive overlays: only the listed bones, relative to a rest frame (rng.ref)
      const additive = (name, rng, keep) => {
        const sub = THREE.AnimationUtils.subclip(clip, name, rng.a, rng.b, FPS);
        sub.tracks = sub.tracks.filter((t) => keep.test(t.name));
        const ref = THREE.AnimationUtils.subclip(clip, name + 'Ref', rng.ref, rng.ref + 1, FPS);
        ref.tracks = ref.tracks.filter((t) => keep.test(t.name));
        THREE.AnimationUtils.makeClipAdditive(sub, 0, ref, FPS);
        return mixer.clipAction(sub, undefined, THREE.AdditiveAnimationBlendMode);
      };
      pant.action = additive('pant', PANT, /^(jaw|tongue[123]|chest|spine|head)\./);
      pant.action.setLoop(THREE.LoopRepeat, Infinity); pant.action.setEffectiveWeight(0); pant.action.play();
      catchLick.action = additive('catchLick', CATCHLICK, /^(jaw|tongue[123]|head)\./);
      catchLick.action.setLoop(THREE.LoopOnce, 1); catchLick.action.clampWhenFinished = false;
      resolve();
    }, reject);
  });
}

/* ---------- camera framing per state ---------- */
const view = { pos: new THREE.Vector3(0, 0.9, 4.6), look: new THREE.Vector3(0, 0.75, 0), tPos: new THREE.Vector3(), tLook: new THREE.Vector3() };
const FRAMES = {
  s1: { pos: [0, 1.0, 5.3], look: [0, 0.62, 0], model: [0, -0.22, 0] },
  s2: { pos: [0, 1.1, 5.4], look: [0, 0.85, 0], model: [0, 0.05, 0] },
  s3: { pos: [0, 0.45, 6.8], look: [0, -0.3, 0], model: [0, -1.14, 0] },
  game: { pos: [0, 1.55, 7.6], look: [0, 1.2, 0], model: [0, -0.35, 0] },
};
let frame = 's1';
function setFrame(id) { frame = id; }
function floorY() { return (pivot ? pivot.position.y : 0) + BALL_R; }

/* ---------- state machine ---------- */
// the player's own calendar day (toISOString is UTC: in Moscow the "day" used to turn over at 03:00)
const TODAY = (() => { const d = new Date(), p = (n) => String(n).padStart(2, '0'); return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`; })();
const store = {
  get() { try { return JSON.parse(localStorage.getItem('ori_star') || 'null'); } catch { return null; } },
  set(v) { try { localStorage.setItem('ori_star', JSON.stringify(v)); } catch {} },
  clear() { try { localStorage.removeItem('ori_star'); } catch {} },
};
function pickPhrase() {
  const pool = window.ORI_PHRASES;
  const used = (store.get() && store.get().used) || [];
  const fresh = pool.filter((p) => !used.includes(p));
  const arr = fresh.length ? fresh : pool;
  return arr[Math.floor(Math.random() * arr.length)];
}

let busy = false, petting = false, petTimer = 0;
// eyelid shutters (bones lidL/lidR: scale y,z 0.02 = open, 1 = closed). Blink every 2.5-6 s, half-closed while petted.
const blink = { bones: [], groups: [], next: 2.5, t: -1, cur: 0, squint: 0 };
const LID_OPEN = 0.001, LID_SHUT = 1.0;
function updateBlink(dt) {
  if (!blink.bones.length) return;
  // one blink = close 0.07 s, hold 0.03 s, open 0.11 s; then the lid is fully hidden again
  let k = 0;                                   // 0 = open, 1 = shut
  if (blink.t >= 0) {
    blink.t += dt;
    const c = 0.07, h = 0.03, op = 0.11;
    if (blink.t < c) k = blink.t / c;
    else if (blink.t < c + h) k = 1;
    else if (blink.t < c + h + op) k = 1 - (blink.t - c - h) / op;
    else { k = 0; blink.t = -1; blink.next = 2.2 + Math.random() * 3.6; }
  } else {
    blink.next -= dt;
    if (blink.next <= 0) blink.t = 0;          // time for the next blink
  }
  // happy squint while petted, eased in and out so it never sticks
  const wantSquint = petting ? 0.5 : 0;
  blink.squint += (wantSquint - blink.squint) * (1 - Math.pow(0.02, dt));
  blink.cur = Math.max(k, blink.squint);
  const s = LID_OPEN + (LID_SHUT - LID_OPEN) * blink.cur;
  for (const b of blink.bones) b.scale.set(1, s, s);
  const show = blink.cur > 0.04;               // fully open: the lid is hidden, never a sliver over the eye
  for (const g of blink.groups) g.visible = show;
}
let phraseToday = null;

/* ---------- star with a trail (hero star for the catch) ---------- */
function makeHeroStar() {
  const g = new THREE.Group();
  const core = new THREE.Sprite(new THREE.SpriteMaterial({ map: starTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, color: 0xffffff }));
  core.scale.setScalar(0.5); g.add(core);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: starTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, color: 0xd9f38b, opacity: 0.55 }));
  glow.scale.setScalar(1.1); g.add(glow);
  g.userData = { core, glow, trail: [] };
  return g;
}
function emitTrail(pos) {
  for (let i = 0; i < 2; i++) {
    const s = spawnFaller(pos.x + (Math.random() - 0.5) * 0.08, pos.y + (Math.random() - 0.5) * 0.08, pos.z, new THREE.Vector3((Math.random() - 0.5) * 0.3, -0.25, 0), 0.1 + Math.random() * 0.12, 0.55);
    s.material.color.set(Math.random() < 0.5 ? 0xffffff : 0xd9f38b);
  }
}
function parkBall() {
  // the ball must not float when the stage re-frames: drop it on the floor next to the dog (or hide during the catch)
  if (!fetch_.ball) return; phys.on = false; phys.v.set(0, 0, 0); phys.vy = 0;
  if (fetch_.ball.parent !== scene) scene.attach(fetch_.ball);
  fetch_.ball.visible = false;
}
function unparkBall() {
  if (!fetch_.ball) return;
  fetch_.ball.position.set(pivot.position.x + 0.42, floorY(), pivot.position.z + 0.5); fetch_.ball.visible = true;
}

const _v = new THREE.Vector3();
function mouthWorld() {
  if (!jawBone) return new THREE.Vector3(0, 0.9, 0.6);
  // jaw bone points along its local +Y toward the chin; the ball sits just past the tip, between the teeth
  const tip = new THREE.Vector3(0, 0.36, 0.01); jawBone.localToWorld(tip); return tip;
}
let holdJaw = false;
function headScreen() {
  if (!headBone) return null;
  headBone.getWorldPosition(_v); _v.z += 0.1;
  const p = _v.clone().project(camera);
  return { x: (p.x + 1) / 2 * innerWidth, y: (1 - p.y) / 2 * innerHeight };
}

/* ---------- mini game: "Прыжки к звёздам" and the constellation of the day ---------- */
// The constellation of the day lights up as Ori climbs toward the star of the day (see the jump block below);
// the run ends with the shared jump-and-grab finale and today's card.
const CONSTELLATIONS = [
  { name: 'Ковш', pts: [[8, 14], [21, 18], [33, 24], [45, 31], [48, 47], [67, 50], [70, 33]], lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 3]] },
  { name: 'Сердце', pts: [[50, 55], [33, 41], [25, 25], [36, 11], [50, 21], [64, 11], [75, 25], [67, 41]], lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0]] },
  { name: 'Ракета', pts: [[50, 5], [41, 19], [59, 19], [41, 40], [59, 40], [31, 55], [69, 55]], lines: [[0, 1], [0, 2], [1, 3], [2, 4], [3, 4], [3, 5], [4, 6]] },
  { name: 'Копилка', pts: [[20, 34], [30, 18], [52, 14], [72, 22], [84, 32], [70, 46], [40, 48]], lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 0]] },
];
function constellationOfDay() {
  let h = 0; for (const c of TODAY) h = (h * 31 + c.charCodeAt(0)) % 9973;
  return CONSTELLATIONS[h % CONSTELLATIONS.length];
}
const gEl = $('#game'), gSky = $('#gSky'), gBar = $('#gBar'), gHint = $('#gHint'), gName = $('#gName'), gX2 = $('#gX2');
const game = { on: false };
const _gRay = new THREE.Raycaster(), _gPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), _gNdc = new THREE.Vector2();
// on a wide screen the game stays inside the central column (the UI is 440 px wide), not across the whole monitor
function playNdc(f) { const w = canvas.clientWidth || innerWidth; return Math.min(f, f * 250 / (w / 2)); }
function ndcToPlane(nx, ny, z = 0) {
  _gPlane.constant = -z; _gNdc.set(nx, ny); _gRay.setFromCamera(_gNdc, camera);
  const p = new THREE.Vector3(); return _gRay.ray.intersectPlane(_gPlane, p) ? p : new THREE.Vector3();
}
function screenX2world(sx, z = 0) { return ndcToPlane(sx / innerWidth * 2 - 1, 0, z).x; }
function toScreen(v) { const p = v.clone().project(camera); return { x: (p.x + 1) / 2 * innerWidth, y: (1 - p.y) / 2 * innerHeight }; }
const STAR_Z = 0.4;
const MAGNET = 0.12, CATCH_R = 0.17;   // world units; the play area is about +/-1.0 wide on a phone
// meteors: a hit knocks one lit star out of the constellation. Warned by a red ring on the floor.
const METEOR = { from: 2.5, series: 6, seriesLen: 3, fall: 0.8, hitHalfW: 0.33, stun: 0.45, invuln: 1.1, rush: 3 };
const meteorTex = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d');
  const g = x.createRadialGradient(64, 60, 8, 64, 64, 60);
  g.addColorStop(0, '#46527a'); g.addColorStop(0.62, '#303B57'); g.addColorStop(0.8, '#FF0032'); g.addColorStop(1, 'rgba(255,0,50,0)');
  x.fillStyle = g; x.beginPath(); x.arc(64, 64, 60, 0, Math.PI * 2); x.fill();
  x.fillStyle = 'rgba(20,26,44,.55)'; for (const [cx, cy, r] of [[48, 50, 9], [78, 70, 7], [60, 82, 5]]) { x.beginPath(); x.arc(cx, cy, r, 0, Math.PI * 2); x.fill(); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
})();

function buildSky(shape) {
  const ns = 'http://www.w3.org/2000/svg'; gSky.innerHTML = '';
  game.lineEls = shape.lines.map(([a, b]) => {
    const l = document.createElementNS(ns, 'line'); l.setAttribute('class', 'ln');
    l.setAttribute('x1', shape.pts[a][0]); l.setAttribute('y1', shape.pts[a][1]); l.setAttribute('x2', shape.pts[b][0]); l.setAttribute('y2', shape.pts[b][1]);
    gSky.appendChild(l); return { a, b, el: l };
  });
  game.ptEls = shape.pts.map(([x, y]) => {
    const c = document.createElementNS(ns, 'circle'); c.setAttribute('class', 'pt'); c.setAttribute('cx', x); c.setAttribute('cy', y); c.setAttribute('r', 1.7);
    gSky.appendChild(c); return c;
  });
  game.litSet = new Set(); game.shown = new Set();
}
// the constellation is filled in UNITS: every point takes PER_PT units. One key star = one whole point
const PER_PT = 1;
function refreshSky() {
  const full = new Set();
  game.ptEls.forEach((el, p) => {
    let c = 0; for (let k = 0; k < PER_PT; k++) if (game.shown.has(PER_PT * p + k)) c++;
    el.classList.toggle('lit', c === PER_PT); el.classList.toggle('half', c > 0 && c < PER_PT); el.setAttribute('r', c === PER_PT ? 2.2 : c > 0 ? 1.7 + 0.35 * c / PER_PT : 1.7);
    if (c === PER_PT) full.add(p);
  });
  game.litSet = full;
  for (const l of game.lineEls) l.el.classList.toggle('lit', full.has(l.a) && full.has(l.b));
}
function lightUnit(idx) { game.shown.add(idx); refreshSky(); }
function flyToSky(from, idx) {
  const el = document.createElement('div'); el.className = 'g-fly'; el.style.left = from.x + 'px'; el.style.top = from.y + 'px';
  document.body.appendChild(el);
  const r = game.ptEls[Math.floor(idx / PER_PT)].getBoundingClientRect();
  setTimeout(() => { el.style.transform = `translate(${r.left + r.width / 2 - from.x}px, ${r.top + r.height / 2 - from.y}px) scale(.45)`; }, 20);
  setTimeout(() => { el.remove(); if (game.on && idx < game.lit) lightUnit(idx); }, 640);
}
function unlightUnit(idx) {
  game.shown.delete(idx); refreshSky();
  const el = game.ptEls[Math.floor(idx / PER_PT)]; el.classList.remove('lost'); void el.getBBox(); el.classList.add('lost');
}
function setX2(on) { game.x2 = on; gX2.classList.toggle('on', on); }
function removeMeteor(i) {
  const mt = game.meteors[i]; scene.remove(mt.sp); mt.sp.material.dispose();
  if (mt.ring) { scene.remove(mt.ring); mt.ring.geometry.dispose(); mt.ring.material.dispose(); }
  game.meteors.splice(i, 1);
}
function meteorBurst(p, n, hit) {
  for (let k = 0; k < n; k++) { const a = Math.random() * Math.PI, r = 0.5 + Math.random() * (hit ? 1.4 : 0.8);
    const f = spawnFaller(p.x, p.y, p.z, new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r * 0.8, 0), 0.05 + Math.random() * 0.05, 0.5);
    f.material.color.set(Math.random() < (hit ? 0.6 : 0.3) ? 0xff0032 : 0x8a93ad); }
}
function gSay(text, ms, tip) {
  if (!tip && ms && ms <= 1200 && (game.clock || 0) < (game.tipUntil || 0)) return;   // short remarks do not cut a tip off
  if (tip) game.tipUntil = (game.clock || 0) + ms / 1000;
  gHint.textContent = text; game.sayUntil = (game.clock || 0) + (ms || 0) / 1000;   // game time: a tip waits until the current line has been read
  if (ms) { const token = Symbol(); game.sayToken = token; setTimeout(() => { if (game.sayToken === token && game.on && !game.finale) gHint.textContent = game.baseHint; }, ms); }
}
function makeGameStar(kind) {
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: starTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  if (kind === 'blue') sp.material.color.set(0x9fc8ff);
  if (kind === 'comet') sp.material.color.set(0xd9f38b);
  sp.scale.setScalar(kind === 'comet' ? 0.36 : kind === 'blue' ? 0.27 : kind === 'white' ? 0.42 : 0.23);
  scene.add(sp); game.stars.push(sp); return sp;
}
function removeGameStar(i, puff) {
  const s = game.stars[i];
  if (puff) for (let k = 0; k < 5; k++) { const a = Math.random() * Math.PI; const f = spawnFaller(s.position.x, s.position.y, s.position.z, new THREE.Vector3(Math.cos(a) * 0.6, Math.sin(a) * 0.5, 0), 0.05, 0.45); f.material.color.copy(s.material.color); }
  if (s.userData.glow) { scene.remove(s.userData.glow); s.userData.glow.material.dispose(); }
  scene.remove(s); s.material.dispose(); game.stars.splice(i, 1);
}


/* ---------- sound: everything is synthesised with Web Audio, no files ---------- */
const sfx = (() => {
  let ctx = null, master = null, muted = false;
  try { muted = localStorage.getItem('ori-muted') === '1'; } catch {}
  const ensure = () => {
    if (ctx) { if (ctx.state === 'suspended') ctx.resume().catch(() => {}); return true; }
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return false;
    ctx = new AC(); master = ctx.createGain(); master.gain.value = muted ? 0 : 0.6; master.connect(ctx.destination); return true;
  };
  const now = () => ctx.currentTime;
  // one note: oscillator with an amplitude envelope and an optional pitch glide
  const tone = (f0, { type = 'sine', f1 = f0, t = 0.2, a = 0.005, vol = 0.5, delay = 0 } = {}) => {
    const o = ctx.createOscillator(), g = ctx.createGain(), t0 = now() + delay;
    o.type = type; o.frequency.setValueAtTime(f0, t0); if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t0 + t);
    g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(vol, t0 + a); g.gain.exponentialRampToValueAtTime(0.0001, t0 + t);
    o.connect(g); g.connect(master); o.start(t0); o.stop(t0 + t + 0.02);
  };
  // a burst of filtered noise: thuds, crackle, hiss
  const noise = ({ t = 0.2, vol = 0.4, f = 1200, q = 0.7, type = 'lowpass', delay = 0, f1 } = {}) => {
    const n = Math.floor(ctx.sampleRate * t), buf = ctx.createBuffer(1, n, ctx.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / n);
    const src = ctx.createBufferSource(); src.buffer = buf; const flt = ctx.createBiquadFilter(); flt.type = type; flt.frequency.value = f; flt.Q.value = q;
    if (f1) flt.frequency.exponentialRampToValueAtTime(f1, now() + delay + t);
    const g = ctx.createGain(); g.gain.value = vol; src.connect(flt); flt.connect(g); g.connect(master); src.start(now() + delay);
  };
  const play = (name, arg) => {
    if (muted || !ensure()) return;
    try {
      switch (name) {
        case 'bounce': { const k = Math.min(1.6, Math.max(0.6, arg || 1)); tone(180 * k, { type: 'triangle', f1: 330 * k, t: 0.14, vol: 0.35 }); noise({ t: 0.05, vol: 0.12, f: 600 }); break; }
        case 'yip': tone(640, { type: 'sawtooth', f1: 400, t: 0.1, vol: 0.22 }); tone(980, { type: 'triangle', f1: 620, t: 0.08, vol: 0.14 }); noise({ t: 0.06, vol: 0.14, f: 1500, type: 'bandpass', q: 1.2 }); break;
        case 'weak': tone(150, { type: 'triangle', f1: 120, t: 0.16, vol: 0.28 }); break;
        case 'perfect': tone(880, { t: 0.12, vol: 0.25 }); tone(1320, { t: 0.18, vol: 0.22, delay: 0.06 }); break;
        case 'star': { const n = Math.min(4, arg || 1); tone(1046 * Math.pow(1.06, n), { t: 0.16, vol: 0.28 }); tone(1568 * Math.pow(1.06, n), { t: 0.22, vol: 0.18, delay: 0.05 }); break; }
        case 'meteor': noise({ t: 0.35, vol: 0.7, f: 400, f1: 80 }); tone(120, { type: 'square', f1: 40, t: 0.3, vol: 0.3 }); break;
        case 'warn': tone(660, { type: 'square', t: 0.07, vol: 0.12 }); tone(660, { type: 'square', t: 0.07, vol: 0.12, delay: 0.14 }); break;
        case 'crack': noise({ t: 0.18, vol: 0.5, f: 3200, q: 1.5, type: 'bandpass' }); noise({ t: 0.1, vol: 0.3, f: 5000, type: 'highpass', delay: 0.06 }); break;
        case 'shatter': noise({ t: 0.5, vol: 0.6, f: 2600, q: 1.2, type: 'bandpass' }); for (let i = 0; i < 5; i++) tone(1800 + Math.random() * 2200, { t: 0.12, vol: 0.12, delay: i * 0.05 }); break;
        case 'hot': noise({ t: 0.5, vol: 0.45, f: 4500, type: 'highpass' }); tone(500, { type: 'sawtooth', f1: 900, t: 0.12, vol: 0.15 }); break;
        case 'hole': tone(500, { type: 'sawtooth', f1: 45, t: 0.7, vol: 0.3 }); noise({ t: 0.7, vol: 0.35, f: 900, f1: 100 }); break;
        case 'sling': tone(300, { type: 'triangle', f1: 1400, t: 0.35, vol: 0.3 }); break;
        case 'rescue': tone(392, { t: 0.12, vol: 0.25 }); tone(523, { t: 0.12, vol: 0.25, delay: 0.1 }); tone(659, { t: 0.22, vol: 0.25, delay: 0.2 }); break;
        case 'lose': tone(440, { type: 'triangle', f1: 110, t: 0.8, vol: 0.3 }); break;
        case 'level': [523, 659, 784, 1046].forEach((f, i) => tone(f, { t: 0.18, vol: 0.22, delay: i * 0.08 })); break;
        case 'dash': tone(200, { type: 'sawtooth', f1: 1600, t: 0.4, vol: 0.25 }); noise({ t: 0.3, vol: 0.2, f: 2000, type: 'highpass' }); break;
        case 'ring': tone(600, { type: 'triangle', f1: 1500, t: 0.3, vol: 0.3 }); break;
        case 'bonus': tone(784, { t: 0.1, vol: 0.25 }); tone(1046, { t: 0.1, vol: 0.25, delay: 0.08 }); tone(1318, { t: 0.2, vol: 0.25, delay: 0.16 }); break;
        case 'mult': tone(660, { t: 0.1, vol: 0.22 }); tone(880, { t: 0.16, vol: 0.22, delay: 0.07 }); break;
        case 'day': [523, 659, 784, 1046, 1318, 1568].forEach((f, i) => tone(f, { t: 0.5, vol: 0.2, delay: i * 0.09 })); noise({ t: 1.2, vol: 0.12, f: 6000, type: 'highpass' }); break;
        case 'cash': [1046, 1318, 1568, 2093].forEach((f, i) => tone(f, { t: 0.25, vol: 0.2, delay: i * 0.06 })); break;
        case 'bubble': tone(900, { f1: 300, t: 0.25, vol: 0.25 }); noise({ t: 0.15, vol: 0.2, f: 3000, type: 'highpass' }); break;
        case 'wind': noise({ t: 1.4, vol: 0.18, f: 700, q: 0.5, type: 'bandpass' }); break;
      }
    } catch {}
  };
  const setMuted = (m) => { muted = m; try { localStorage.setItem('ori-muted', m ? '1' : '0'); } catch {} if (master) master.gain.value = m ? 0 : 0.6; };
  return { play, ensure, setMuted, get muted() { return muted; } };
})();

// game flows: the wait throws QUIT when the round was left with the ✕ button, so the rest of the scene is skipped
const QUIT = Symbol('quit');
const gwait = async (ms) => { const run = game.run; await wait(ms); if (game.run !== run) throw QUIT; };
const guarded = (fn) => async (...a) => { try { return await fn(...a); } catch (e) { if (e !== QUIT) throw e; } };
const startGame = guarded(startGame_);
async function startGame_() {
  if (sit.state !== 'stand') { wake(startGame); return; }
  if (busy || game.on) return;
  if (!pivot) return;
  busy = true; petting = false; holdJaw = false; parkBall(); hint.style.opacity = 0;
  const shape = constellationOfDay();
  game.run = Symbol('run'); game.backScreen = Object.keys(screens).find((k) => screens[k].classList.contains('show')) || 's1';
  Object.assign(game, { mode: gameMode, meteors: [], meteorIn: METEOR.from, combo: 0, bestCombo: 0, x2: false, stun: 0, invuln: 0, hits: 0, dodged: 0, rush: false,
    wag: 0, slow: 0, hero: null, heroRing: null, heroPerfect: false, newRecord: false,
    plats: [], bonuses: [], holes: [], bank: 0, best: 0, alt: 0, vy: 0, noShine: false, dayStar: false, mouthOff: null });
  gX2.textContent = ''; gResult.textContent = '';
  gEl.classList.add('jump');
  setX2(false);
  Object.assign(game, { on: true, t: 0, dur: 25, stars: [], lit: 0, need: shape.pts.length * PER_PT, caught: 0,
    snap: 0, leap: null, anim: '', finale: false, lockAnim: false, helped: false, targetX: 0, airT: 0, airDur: 1, airK: 0, squash: 0, lean: 0, earA: 0, earV: 0,
    baseY: FRAMES.game.model[1], mouthY0: 0, drag: null, tapped: null, tapWindow: false, playing: false, hero: null, heroPhase: null, shape });
  buildSky(shape); gName.textContent = shape.name; gBar.style.transform = 'scaleX(1)';
  game.baseHint = 'Ведите пальцем — Ори прыгает по планетам';
  showScreen(null); setFrame('game'); zoom.target = 1.5;   // a wider view of the sky
  spin.y = spin.x = spin.vy = 0;
  jumpStart();
  updateScore();
  document.body.classList.add('night', 'gaming'); gEl.classList.remove('done'); gEl.classList.add('show');
  gSay(`Допрыгни до звезды дня — она на ${JUMP.goal} м`);
  play('idle', { fade: 0.3 });
  await gwait(1100);
  game.mouthY0 = mouthWorld().y; game.mouthOff = mouthWorld().sub(pivot.position);
  gSay(game.baseHint); game.playing = true; coachShow();
  jumpBounce(JUMP.v0);
}

// shared finale: the star of the day falls through a lime ring above Ori; a tap makes him leap and grab it
// (a tap while the star is inside the ring = "shining" star + slow motion), then he rears up with the star in
// his mouth and sends it up to the constellation.
const HERO = { fallV: 0.72, leapUp: 0.42, leapH: 1.0, down: 0.4 };
const startFinale = guarded(startFinale_);
async function startFinale_() {
  const g = game; if (g.finale) return; g.finale = true; g.playing = false;
  gRecLine.classList.remove('show'); hud.recShow = false;
  for (let i = g.stars.length - 1; i >= 0; i--) removeGameStar(i, true);
  for (let i = g.meteors.length - 1; i >= 0; i--) { meteorBurst(g.meteors[i].sp.position, 5, false); removeMeteor(i); }
  setX2(false); g.stun = 0;
  gBar.style.transform = 'scaleX(0)';
  {
    // the run is over: clear the planets and drop Ori back onto the pedestal
    jumpCleanup(); g.rocket = 0; g.wind = 0; g.slip = 0; setX2(false);
    pedestal.visible = true; pivot.position.set(pivot.position.x, jumpBounds().top + 0.5, 0); g.vy = 0; g.targetX = 0;
    await gwait(1400);
    const h = Math.floor(g.best), rec = getRecord(); g.newRecord = h > rec; if (g.newRecord) setRecord(h);
    const rs = getStarRecord(); g.newStarRecord = g.bank > rs; if (g.newStarRecord) setStarRecord(g.bank);
    // "almost": how close the run came to the next goal, shown now and again under the replay button
    g.result = !g.dayStar ? `До звезды дня не хватило ${fmtScore(JUMP.goal - h)} м`
      : !g.dayShine ? `До сияния не хватило точек созвездия: ${g.need - g.lit}` : '';
    if (!g.result && g.waveAlt != null && !g.supernova) g.result = `До конца Сверхновой не хватило ${Math.max(1, Math.ceil(novaEnd() - g.best))} м`;
    if (!g.result && !g.newRecord && rec - h > 0 && rec - h <= 10) g.result = `До рекорда не хватило ${rec - h} м`;
    gSay(`${g.newRecord ? 'Новый рекорд' : 'Высота'}: ${fmtScore(h)} м · ${g.newStarRecord ? 'рекорд звёзд' : 'звёзды'}: ★ ${g.bank}` + (g.result ? ` · ${g.result}` : g.newRecord ? '' : ` · рекорд ${fmtScore(Math.max(rec, h))} м`));
    await gwait(2600);
    if (g.dayStar) {   // the star of the day was caught in flight: straight to the card
      gEl.classList.add('done'); await gwait(600);
      await heroFinish(g.dayShine); return;
    }
    g.noShine = true;   // did not reach 100 m: Ori still gets the star, but a plain one
  }
  if (g.lit < g.need) {
    g.helped = true; gSay('Ори помогает дособрать созвездие');
    while (g.lit < g.need) { const idx = g.lit++; flyToSky(toScreen(mouthWorld()), idx); await gwait(90); }
  }
  await gwait(800);
  gEl.classList.add('done'); gSay('Созвездие собрано!');
  await gwait(900);
  g.targetX = 0;
  const t0 = performance.now(); while ((Math.abs(pivot.position.x) > 0.05 || pivot.position.y > g.baseY + 0.02) && performance.now() - t0 < 1800) await gwait(40);
  await gwait(250);
  gSay('Тапните, когда звезда в кольце!');
  g.lockAnim = true; play('idle', { fade: 0.3 });
  const hero = makeHeroStar(); scene.add(hero); g.hero = hero;
  const top = ndcToPlane(0, 1.1, STAR_Z); hero.position.set(0.35, top.y, STAR_Z);
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.24, 0.29, 48), new THREE.MeshBasicMaterial({ color: 0xd9f38b, transparent: true, opacity: 0.5, depthWrite: false }));
  scene.add(ring); g.heroRing = ring;
  g.tapped = null;
  await new Promise((res) => { g.heroPhase = { stage: 'fall', t: 0, topY: top.y, done: res }; });
  await heroFinish(g.heroPerfect && !g.noShine);
}
function heroStep(rdt) {
  const g = game, hp = g.heroPhase, hero = g.hero;
  if (g.slow > 0) g.slow -= rdt;
  const k = g.slow > 0 ? 0.3 : 1; mixer.timeScale = k; const dt = rdt * k;
  hp.t += dt;
  const base = g.baseY, m = mouthWorld(), core = hero.userData.core, glow = hero.userData.glow;
  if (g.heroRing) {
    const catchY = base + (g.mouthOff ? g.mouthOff.y : m.y - base) + HERO.leapH;
    g.heroRing.position.set(pivot.position.x, catchY, STAR_Z);
    g.heroRing.material.opacity = hp.stage === 'fall' ? (hp.perfectNow ? 0.95 : 0.45 + 0.15 * Math.sin(hp.t * 8)) : Math.max(0, g.heroRing.material.opacity - dt * 3);
    g.heroRing.scale.setScalar(hp.perfectNow ? 1.12 : 1);
  }
  const attach = () => { hero.position.copy(mouthWorld()); hero.position.z += 0.18; hero.position.y -= 0.03; };
  if (hp.stage === 'fall') {
    hero.position.y = hp.topY - hp.t * HERO.fallV;
    hero.position.x = pivot.position.x + 0.35 * Math.cos(hp.t * 1.6) * Math.max(0, 1 - hp.t / 2.8);
    hero.rotation.z += 2.4 * dt; emitTrail(hero.position);
    const catchY = g.heroRing.position.y;
    const pred = hero.position.y - HERO.fallV * HERO.leapUp;   // where the star will be at the top of the leap
    hp.perfectNow = Math.abs(pred - catchY) < 0.2; g.tapWindow = hp.perfectNow;
    if (g.tapped) { g.heroPerfect = hp.perfectNow; hp.stage = 'leap'; hp.t = 0; hp.s0 = hero.position.clone(); play('leap', { fade: 0.06, speed: 1.1 }); }
    else if (hero.position.y < m.y + 0.12 || hp.t > 8) { g.heroPerfect = false; hp.stage = 'snap'; hp.t = 0; hp.s0 = hero.position.clone(); }
  } else if (hp.stage === 'leap') {
    const u = Math.min(1, hp.t / HERO.leapUp), e = 1 - (1 - u) * (1 - u);
    pivot.position.y = base + HERO.leapH * e;
    const s0 = hp.s0.clone(); s0.y -= HERO.fallV * hp.t;
    const w = Math.max(0, (u - 0.35) / 0.65); hero.position.lerpVectors(s0, mouthWorld(), w * w * (3 - 2 * w));
    emitTrail(hero.position);
    if (u >= 1) heroGrab(hp);
  } else if (hp.stage === 'snap') {
    const u = Math.min(1, hp.t / 0.3); hero.position.lerpVectors(hp.s0, mouthWorld(), u);
    if (u >= 1) heroGrab(hp);
  } else if (hp.stage === 'down') {
    const u = Math.min(1, hp.t / HERO.down); pivot.position.y = base + (hp.y0 - base) * (1 - u * u); attach();
    if (u >= 1) { pivot.position.y = base; hp.stage = 'rear'; hp.t = 0; play('rear', { fade: 0.18, speed: 1.25 }); g.wag = 3; }
  } else if (hp.stage === 'rear') {
    attach(); glow.scale.setScalar(0.28 + 0.05 * Math.sin(hp.t * 9));
    if (hp.t > (CLIPS.rear.b - CLIPS.rear.a) / FPS / 1.25 * 0.92) { hp.stage = 'rise'; hp.t = 0; hp.s0 = hero.position.clone(); play('idle', { fade: 0.35 }); }
  } else if (hp.stage === 'rise') {
    const u = Math.min(1, hp.t / 1.0), e = u * u * (3 - 2 * u);
    const to = ndcToPlane(0, 0.62, STAR_Z);
    hero.position.lerpVectors(hp.s0, to, e); hero.position.x += Math.sin(u * Math.PI) * 0.25;
    core.scale.setScalar(0.17 + 0.6 * e); glow.scale.setScalar(0.28 + 1.4 * e); emitTrail(hero.position);
    if (u >= 1) { g.heroPhase = null; mixer.timeScale = 1; hp.done(); }
  }
}
function heroGrab(hp) {
  const g = game, hero = g.hero, m = mouthWorld();
  const shine = g.heroPerfect && !g.noShine;
  for (let i = 0; i < (shine ? 30 : 16); i++) { const a = Math.random() * Math.PI * 2, r = 1.4 + Math.random() * 1.8; const s = spawnFaller(m.x, m.y, m.z, new THREE.Vector3(Math.cos(a) * r, 0.4 + Math.random() * 1.6, Math.sin(a) * r * 0.5), 0.06 + Math.random() * 0.08, 0.7); s.material.color.set(Math.random() < 0.45 ? 0xd9f38b : 0xffffff); }
  if (catchLick.action) catchLick.action.reset().setEffectiveWeight(1).play();
  hero.userData.core.scale.setScalar(0.17); hero.userData.glow.scale.setScalar(0.28);
  flash.style.opacity = shine ? 0.7 : 0.35; setTimeout(() => { flash.style.opacity = 0; }, 160);
  if (shine) { g.slow = 0.7; gSay('Сияющая звезда!'); } else gSay('Поймал!');
  hp.y0 = pivot.position.y; hp.stage = hp.stage === 'leap' ? 'down' : 'rear'; hp.t = 0;
  if (hp.stage === 'rear') { play('rear', { fade: 0.18, speed: 1.25 }); g.wag = 3; }
}

const heroFinish = guarded(heroFinish_);
async function heroFinish_(shine) {
  const g = game;
  if (g.heroRing) { scene.remove(g.heroRing); g.heroRing.geometry.dispose(); g.heroRing = null; }
  gEl.classList.remove('done'); void gEl.offsetWidth; gEl.classList.add('done');
  scene.remove(g.hero); g.hero = null;
  flash.style.opacity = 1; await gwait(240); flash.style.opacity = 0;
  // the star of the day is one per day: a replay keeps today's phrase (and the best shine)
  const rec = store.get() || { used: [] };
  const keep = rec.date === TODAY && rec.phrase;
  phraseToday = keep ? rec.phrase : pickPhrase();
  const shineAll = !!shine || !!(keep && rec.shine), novaAll = !!g.supernova || !!(keep && rec.nova);   // the best of the day stays
  store.set({ date: TODAY, phrase: phraseToday, used: keep ? rec.used || [] : [...(rec.used || []), phraseToday].slice(-160), shine: shineAll, nova: novaAll, constellation: g.shape.name });
  $('#phrase').textContent = phraseToday; applyShine(shineAll, novaAll);
  // the "almost" line, right above "Сыграть ещё" (not "short of the shine" when today's star already shines from an earlier run)
  gResult.textContent = shineAll && !shine && /сияния/.test(g.result || '') ? '' : g.result || '';
  await gwait(500);
  endGame();
  screens.s3.classList.remove('hidecard'); $('#showCard').style.display = 'none';
  showScreen('s3'); setFrame('s3');
  play('pet', { fade: 0.3 });
  await gwait(1400);
  play('idle', { fade: 0.5 });
  unparkBall(); busy = false;
}
const gResult = $('#gResult');
function applyShine(shine, nova) {
  const card = screens.s3.querySelector('.card'); card.classList.toggle('shine', !!shine);
  card.classList.toggle('nova', !!nova);
  const from = card.querySelector('.from'); from.textContent = nova ? 'Ори поймал для вас сверхновую звезду' : shine ? 'Ори поймал для вас сияющую звезду' : 'Ори поймал для вас звезду';
}
// ✕ in the round: drop everything and go back to the screen the game was started from
function quitGame() {
  const g = game; if (!g.on) return;
  g.run = Symbol('quit');
  if (g.heroRing) { scene.remove(g.heroRing); g.heroRing.geometry.dispose(); g.heroRing = null; }
  if (g.hero) { scene.remove(g.hero); g.hero = null; }
  g.heroPhase = null; g.finale = false; g.slow = 0; g.lockAnim = false;
  flash.style.opacity = 0;
  endGame();
  showScreen(g.backScreen || 's1'); setFrame(g.backScreen === 's3' ? 's3' : 's1');
  play('idle', { fade: 0.3 });
  unparkBall(); busy = false;
}
function endGame() {
  mixer.timeScale = 1; gEl.classList.remove('jump'); showRecord();
  jumpCleanup();
  pedestal.visible = true; starsFar.position.y = 0; starsNear.position.y = 0;
  for (let i = game.stars.length - 1; i >= 0; i--) removeGameStar(i, false);
  for (let i = (game.meteors || []).length - 1; i >= 0; i--) removeMeteor(i);
  setX2(false);
  game.on = false; game.playing = false;
  gEl.classList.remove('show'); document.body.classList.remove('night', 'gaming', 'coach'); zoom.target = 1.3; gHint.textContent = '';
  pivot.scale.set(1, 1, 1); pivot.rotation.x = 0; pivot.rotation.z = 0;
}

// per frame, before the mixer: movement, spawning, catching
function gameStep(dt) {
  const g = game;
  if (g.heroPhase && g.hero) { heroStep(dt); pedestal.position.set(pivot.position.x, g.baseY + 0.005, pivot.position.z); return; }
  jumpStep(dt);
}

/* ---------- "Прыжки к звёздам": endless climb over planets ---------- */
// Goal: the star of the day hangs at JUMP.goal (150 m: five levels of 30 m) (its light is always visible at the top and grows as Ori nears it).
// Every caught star lights a third of a point of the constellation of the day; the star of the day shines if the
// constellation is complete when he gets it (or gets completed after). After the goal the climb goes on for a record:
// one more level of deep space, then laps (see LAPS).
// Ori bounces by himself, the finger steers, a tap in the air is a hop (one charge, refilled by a perfect landing).
// A miss ends the run: once he drops below the planet he pushed off from, nothing catches him, unless he carries
// the bubble (rare, about one per run), which catches him once. Perfect landings (close to the planet's centre)
// build a series: from the 3rd one stars count x2, every 5th one gives a dash (a much higher bounce).
// Levels every 30 m (JUMP.levelH); ONE new thing every half level (see STAGE_INTRO), shown first in a safe form in a few
// easier rows (a sawtooth difficulty curve). Ordinary stars are the score; the constellation is lit by
// KEY stars (one per point), each hung behind the thing its level is about (see KEY_SIG). Inside a level the gaps and the share of
// hazards grow smoothly. Every row has one reachable safe planet; no two bodies ever come closer than minSep.
// bubble: [first, every] = metres of the first bubble and the spacing after it (+ up to half again at random)
// hop = the take-off speed of the mid-air hop; edge = a landing this far off centre (share of landW) is "on a hair"
const JUMP = { g: 10, v0: 6.8, boost: 1.75, dash: 1.75, levelH: 30, goal: 150, maxGap: 1.95, minGap: 1.15, speed: 3.6,
  orbitEvery: [4, 5], perfect: 0.13, introRows: 3, minSep: 1.1, holeSep: 1.45, missDrop: 0.45, landW: 0.46, foot: 0.14,
  bubble: [18, 40], drift: 0.36, hop: 5.2, edge: 0.78, trailRows: 2 };
// [a, b] = the value at the start and at the end of the level; meteor = seconds between meteors
const LEVELS = [
  { name: 'Орбита', gap: [1.15, 1.4], dx: [1.0, 1.3], ring: 0.15, move: 0, ice: 0, orbit: false, crumble: 0, hot: 0, hole: 0, meteor: 0, gust: 0, star: 0.5, bonus: 0.03 },
  { name: 'Пояс астероидов', gap: [1.3, 1.55], dx: [1.3, 1.6], ring: 0.06, move: 0, ice: 0, orbit: false, crumble: [0.3, 0.5], hot: 0, hole: 0, meteor: [8, 6], gust: 0, star: 0.45, bonus: 0.04 },
  { name: 'Ледяная туманность', gap: [1.4, 1.65], dx: [1.5, 1.8], ring: 0.06, move: [0.25, 0.4], ice: [0.25, 0.45], orbit: false, crumble: 0, hot: 0, hole: 0, meteor: 0, gust: 0, star: 0.45, bonus: 0.045 },
  { name: 'Солнечный ветер', gap: [1.45, 1.75], dx: [1.6, 1.9], ring: 0.06, move: 0, ice: 0, orbit: false, crumble: 0, hot: [0.3, 0.5], hole: 0, meteor: 0, gust: 6.5, star: 0.4, bonus: 0.05 },
  { name: 'Чёрные дыры', gap: [1.5, 1.8], dx: [1.6, 2.0], ring: 0.06, move: 0, ice: 0, orbit: true, crumble: 0, hot: 0, hole: [0.3, 0.45], meteor: 0, gust: 0, star: 0.4, bonus: 0.05 },
  { name: 'Глубокий космос', gap: [1.55, 1.85], dx: [1.8, 2.0], ring: 0.08, move: 0.35, ice: 0.2, orbit: true, crumble: 0.3, hot: 0.25, hole: 0.15, meteor: 5.5, gust: 7, star: 0.35, bonus: 0.05 },
  // aliens: a planet with a green fellow on it is taken (he shoves Ori off); later they fly in and out of the planets on the way
  { name: 'Планета пришельцев', gap: [1.55, 1.85], dx: [1.8, 2.0], ring: 0.06, move: 0, ice: 0, orbit: false, crumble: 0, hot: 0, hole: 0, meteor: 0, gust: 0, alien: [0.35, 0.55], visit: [0.3, 0.45], star: 0.4, bonus: 0.05 },
  // the rings of a gas giant: no planets, only narrow flat shards of its ring; later whole rows of them drift one way (the ring turns)
  { name: 'Кольца гиганта', gap: [1.5, 1.8], dx: [1.5, 1.8], ring: 0, move: 0, ice: 0, orbit: false, crumble: 0, hot: 0, hole: 0, meteor: 0, gust: 0, belt: [0.4, 0.6], star: 0.45, bonus: 0.05, tip: 'Обломки кольца узкие — целься точно' },
  // a storm nebula: soft clouds instead of planets (they spring him higher); later lightning strikes a column that glows first
  { name: 'Грозовая туманность', gap: [1.6, 1.9], dx: [1.7, 2.0], ring: 0, move: 0, ice: 0, orbit: false, crumble: 0, hot: 0, hole: 0, meteor: 0, gust: 0, bolt: [5, 3.6], star: 0.45, bonus: 0.05, tip: 'Облака пружинят — подбрасывают выше' },
  // a graveyard of satellites: wide, but only the middle holds (a panel tips under the paws and slides him off); later some of them spin
  { name: 'Кладбище спутников', gap: [1.55, 1.85], dx: [1.7, 2.0], ring: 0, move: 0, ice: 0, orbit: false, crumble: 0, hot: 0, hole: 0, meteor: 0, gust: 0, spinner: [0.3, 0.45], star: 0.45, bonus: 0.05, tip: 'Спутник кренится под лапами — садись на середину' },
  // THE SUPER LEVEL. A supernova: a wave of light climbs from below and must be outrun; every planet burns away after one
  // push-off, so there is no waiting; the hazards of the first five levels are mixed. Its end is the second goal of the game.
  { name: 'Сверхновая', title: 'Суперуровень · Сверхновая', nova: true, gap: [1.6, 1.9], dx: [1.8, 2.0], ring: 0.1, move: 0.15, ice: 0, orbit: false, crumble: 0.3, hot: 0.25, hole: 0.15, meteor: 5, gust: 7, star: 0.4, bonus: 0.06, tip: 'Волна света идёт снизу — не останавливайся. Планеты сгорают после прыжка' },
];
const lvl = (v, d) => Array.isArray(v) ? v[0] + (v[1] - v[0]) * d : v;
// After the six levels (120 m) the climb goes on in LAPS of 20 m: deep space bent one way each time, in the sky of
// the level that thing came from. Four hard laps, then a breather with nothing but stars, then round again
// (the gaps and the speeds keep growing with every lap, as before).
const LAPS = [
  { name: 'Метеорный дождь', zone: 1, meteor: 2.8, meteorMin: 2.2, crumble: 0.5, tip: 'Метеоры летят вдвое чаще' },
  { name: 'Ледяной виток', zone: 2, ice: 0.75, iceRun: true, move: 0.15, tip: 'Почти все планеты — лёд' },
  { name: 'Солнечная буря', zone: 3, hot: 0.5, gust: 3.2, tip: 'Ветер почти не стихает' },
  { name: 'Поле чёрных дыр', zone: 4, hole: 0.7, holeField: true, orbit: false, tip: 'Дыры на каждом шагу — лови гравиманёвры' },
  { name: 'Звёздный дождь', zone: 0, rest: true, starRain: true, gap: [1.3, 1.5], dx: [1.3, 1.6], bonus: 0.12, tip: 'Передышка: только звёзды' },
];
const LAST = LEVELS.length - 1;
// the definition of level n (0-based): the six levels, then the laps over deep space
function levelDef(n) { if (n <= LAST) return LEVELS[n]; const lap = LAPS[(n - LAST - 1) % LAPS.length]; return lap.def || (lap.def = { ...LEVELS[lap.zone], gap: LEVELS[LAST].gap, dx: LEVELS[LAST].dx, ...lap }); }
const NOVA = { wave: [1.0, 1.4], lead: 9, max: 11, close: 3 };   // the wave's speed over the level (m/s), where it starts below him, how far it may fall behind
const novaEnd = () => (LAST + 1) * JUMP.levelH;   // the super level is the last one
const levelTitle = (n) => n <= LAST ? LEVELS[n].title || `Уровень ${n + 1} · ${LEVELS[n].name}` : `Виток ${n - LAST} · ${levelDef(n).name}`;
const zoneOf = (n) => n <= LAST ? n : levelDef(n).zone;
// Every level has its OWN pair of things and its own planets; they do not carry over to the next level.
// Only the last one, deep space, mixes them all (and the laps after it bend one level's pair further).
// ONE new thing every half level (10 m), in this order; the level's name is its pair of things:
//   Орбита: planets, then the ringed planet · Пояс астероидов: meteorites, then flying meteors ·
//   Ледяная туманность: ice, then drifting planets · Солнечный ветер: red dwarfs, then their wind ·
//   Чёрные дыры: holes, then planets orbiting across the screen · Глубокий космос: everything together
const STAGE_INTRO = [null, 'ring', 'crumble', 'meteor', 'ice', 'move', 'hot', 'gust', 'hole', 'orbit', null, null, 'alien', 'visit', null, 'belt', null, 'bolt', null, 'spinner', null, null];
// where each thing first appears, in levels (1.5 = the middle of level 2). Nothing is generated before that
const FEATURE_AT = Object.fromEntries(STAGE_INTRO.map((f, i) => [f, i / 2]).filter(([f]) => f));
const MAIN_INTRO = new Set(['ring', 'ice', 'move', 'orbit', 'visit', 'belt', 'spinner']);                // shown as the row's own planet
const ROW_INTRO = new Set(['ring', 'ice', 'move', 'orbit', 'crumble', 'hot', 'hole', 'alien', 'visit', 'belt', 'spinner']);   // meteors and wind are shown by jumpStep
// a key star (a point of the constellation) hangs behind the thing its level is about
const KEY_SIG = ['ring', 'crumble', 'ice', 'hot', 'hole', null, 'alien', null, null, null, null];   // by zone
// the first time a new thing comes into view, one line explains it
const INTRO_TIP = {
  ring: 'Планета с кольцом подбрасывает намного выше',
  move: 'Планета дрейфует — прыгай, когда она под тобой',
  crumble: 'Метеорит выдержит один прыжок — внутри звёзды',
  ice: 'Лёд выдержит три прыжка, потом расколется',
  orbit: 'Планета ходит через весь экран — дождись её',
  hot: 'Красный карлик обжигает лапы — обходи его',
  hole: 'Чёрная дыра затягивает. Пролети по краю — будет разгон',
  alien: 'Планета занята — пришелец отпихнёт. Ищи свободную',
  visit: 'Пришелец прилетает и улетает — прыгай, пока планета свободна',
  belt: 'Кольцо вращается: обломки плывут в одну сторону и несут Ори с собой',
  spinner: 'Спутник вращается — прыгай, когда панели лежат ровно',
};
function tipOnce(key, y, b) {
  const g = game;
  if (g.tipped[key] || g.alt < FEATURE_AT[key] * JUMP.levelH || y > b.top - 0.6 || y < b.bot + 0.8 || !(g.clock > (g.sayUntil || 0))) return;
  g.tipped[key] = true; gSay(INTRO_TIP[key], 2400, true);
}
/* ---------- zones: every level has its own sky (colours, nebulae, drifting specks) and a gate at its border ---------- */
const zoneBg = (blobs, glow, a, b, c) => `${blobs.map(([w, h, x, y, col]) => `radial-gradient(${w}% ${h}% at ${x}% ${y}%,${col},transparent 70%)`).join(',')},radial-gradient(120% 55% at 50% -6%,${glow} 0%,transparent 62%),linear-gradient(180deg,${a} 0%,${b} 55%,${c} 100%)`;
// amb: n = specks per frame at 60 fps, v = [vx, vy] drift, sway = sideways wobble
const ZONES = [
  { accent: '#D9F38B', star: '#dfe7ff', bg: null, amb: null },
  { accent: '#FFC39A', star: '#ffe6d2', bg: zoneBg([[60, 34, 16, 30, 'rgba(190,140,110,.22)'], [70, 30, 86, 68, 'rgba(150,110,130,.18)']], '#4f3d42', '#2b2430', '#1a1721', '#0d0b12'),
    amb: { n: 0.22, col: [0xb9a79a, 0x8d8290], v: [-0.45, -0.3], s: [0.03, 0.06], life: 5 } },
  { accent: '#9FD8FF', star: '#cfeaff', bg: zoneBg([[70, 36, 82, 28, 'rgba(90,200,255,.24)'], [70, 34, 10, 64, 'rgba(120,150,255,.2)']], '#2a5f80', '#15304a', '#0f1f38', '#091122'),
    amb: { n: 0.4, col: [0xe6f6ff, 0x9fd0ff], v: [0.1, -0.5], s: [0.025, 0.05], life: 5, sway: 0.5 } },
  { accent: '#FF9A6B', star: '#ffe0c2', bg: zoneBg([[110, 40, 50, 0, 'rgba(255,120,60,.3)'], [60, 30, 12, 72, 'rgba(255,60,80,.16)']], '#8a3d25', '#3a1d22', '#22131c', '#100911'),
    amb: { n: 0.35, col: [0xffb347, 0xff6a3d], v: [0, 0.85], s: [0.025, 0.045], life: 3.5, sway: 0.3 } },
  { accent: '#B39CFF', star: '#d9ccff', bg: zoneBg([[70, 36, 18, 26, 'rgba(140,90,255,.26)'], [60, 30, 84, 62, 'rgba(217,243,139,.07)']], '#3a2970', '#1b1335', '#0e0a21', '#05040f'),
    amb: { n: 0.25, col: [0xb39cff, 0x7d63d8], v: [0, 0.22], s: [0.03, 0.05], life: 5 } },
  { accent: '#D9F38B', star: '#e8fff4', bg: zoneBg([[70, 34, 78, 30, 'rgba(60,200,180,.12)'], [70, 34, 18, 74, 'rgba(120,100,255,.12)']], '#16302f', '#0b1317', '#070a0f', '#020306'),
    amb: { n: 0.12, col: [0xd9f38b, 0xffffff], v: [0, -0.08], s: [0.02, 0.04], life: 4 } },
  { accent: '#8CFF9A', star: '#d6ffe0', bg: zoneBg([[70, 36, 20, 28, 'rgba(80,255,150,.2)'], [60, 30, 84, 66, 'rgba(60,200,220,.16)']], '#1f5a45', '#10302c', '#0a1f22', '#040d10'),
    amb: { n: 0.22, col: [0x8cff9a, 0xd9f38b], v: [0, 0.3], s: [0.025, 0.045], life: 4, sway: 0.3 } },
  { accent: '#FFD9A0', star: '#fff0d8', bg: zoneBg([[90, 34, 50, 102, 'rgba(255,190,110,.2)'], [60, 30, 86, 20, 'rgba(150,170,255,.12)']], '#3a3040', '#1b1a2c', '#11111f', '#07070f'),
    amb: { n: 0.4, col: [0xffffff, 0xffe2b0], v: [0.55, 0], s: [0.02, 0.045], life: 4, sway: 0.1 } },   // ice dust of the ring, drifting along it
  { accent: '#C7B8FF', star: '#e6dcff', bg: zoneBg([[95, 40, 28, 22, 'rgba(150,130,255,.24)'], [95, 40, 76, 70, 'rgba(90,110,200,.22)']], '#3f3d70', '#1f2040', '#13142b', '#080814'),
    amb: { n: 0.45, col: [0xcfd0ff, 0x9aa0e0], v: [-0.3, -1.1], s: [0.02, 0.035], life: 2.2, sway: 0.05 } },   // slanting rain
  { accent: '#7FF0E0', star: '#dff8ff', bg: zoneBg([[80, 34, 22, 24, 'rgba(90,220,230,.16)'], [80, 34, 80, 60, 'rgba(255,120,80,.1)']], '#22404a', '#111f2a', '#0b141c', '#04080c'),
    amb: { n: 0.22, col: [0xffffff, 0x9fe8ff, 0xffc08a], v: [-0.22, -0.05], s: [0.02, 0.05], life: 4, sway: 0.12 } },   // glints of drifting junk
  { accent: '#FFE9A8', star: '#fff4d6', bg: zoneBg([[150, 60, 50, 112, 'rgba(255,225,150,.55)'], [90, 40, 50, -6, 'rgba(255,120,60,.2)']], '#6a4030', '#2c1b22', '#1c1220', '#40280f'),
    amb: { n: 0.5, col: [0xffe9a8, 0xffffff, 0xffb347], v: [0, 1.5], s: [0.025, 0.05], life: 2.2, sway: 0.4 } },   // embers flying up from the blast
];
const zoneEls = [...document.querySelectorAll('#zone i')], zoneStar = new THREE.Color('#dfe7ff');
let zoneIdx = -1, zoneTop = 0;
function setZone(i) {   // -1 = no zone (outside the game)
  if (i === zoneIdx) return; zoneIdx = i;
  const z = ZONES[i], cur = zoneEls[zoneTop], next = zoneEls[1 - zoneTop];
  if (cur && next) {
    if (z && z.bg) { next.style.background = z.bg; next.style.opacity = 1; cur.style.opacity = 0; zoneTop = 1 - zoneTop; }   // cross-fade between the two layers
    else { cur.style.opacity = 0; next.style.opacity = 0; }
  }
  document.body.style.setProperty('--zone', z ? z.accent : '#D9F38B');
  zoneStar.set(z ? z.star : '#dfe7ff');
  if (!z) { starsFar.material.uniforms.uColor.value.set('#dfe7ff'); gGate.classList.remove('show'); hud.gateShow = false; gWind.className = ''; hud.wind = ''; if (giant) { giant.visible = false; giant.material.opacity = 0; } if (earth) { earth.visible = false; earth.material.opacity = 0; } }
}
// the gas giant of zone 7: a huge banded planet with rings far behind everything (drawn once, shown only there)
let giant = null;
function makeGiant() {
  const r2 = (a, b) => a + Math.random() * (b - a);
  const tex = spriteTex((x, s) => { const c = s / 2, R = s * 0.33;
    const ring = (front) => { x.save(); x.translate(c, c); x.rotate(-0.35); x.scale(1, 0.26); for (const [r, w, a] of [[1.32, 9, 0.5], [1.52, 16, 0.36], [1.76, 6, 0.3]]) { x.strokeStyle = `rgba(255,226,180,${a})`; x.lineWidth = w * s / 512; x.beginPath(); x.arc(0, 0, R * r, front ? 0 : Math.PI, front ? Math.PI : Math.PI * 2); x.stroke(); } x.restore(); };
    ring(false);
    x.save(); x.beginPath(); x.arc(c, c, R, 0, 7); x.clip(); x.translate(c, c); x.rotate(-0.35);
    const bands = ['#e8c08a', '#c9925c', '#f0d6a8', '#b87a52', '#e0b47c', '#9a6248', '#eccb98', '#c48a5a'];
    for (let y = -R, i = 0; y < R; i++) { const h = R * r2(0.1, 0.26); x.fillStyle = bands[i % bands.length]; x.fillRect(-R, y, 2 * R, h + 1); y += h; }
    x.rotate(0.35); const g = x.createRadialGradient(-R * 0.45, -R * 0.45, R * 0.15, 0, 0, R * 1.1); g.addColorStop(0, 'rgba(255,255,255,.14)'); g.addColorStop(0.55, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(8,8,24,.8)'); x.fillStyle = g; x.fillRect(-R, -R, 2 * R, 2 * R);
    x.restore(); ring(true);
  }, 512);
  giant = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, opacity: 0 }));
  giant.scale.setScalar(5.4); giant.renderOrder = -2; giant.visible = false; scene.add(giant);
}
let earth = null;
function makeEarth() {
  const r2 = (a, b) => a + Math.random() * (b - a);
  const tex = spriteTex((x, s) => { const c = s / 2, R = s * 0.42;
    const halo = x.createRadialGradient(c, c, R * 0.96, c, c, R * 1.16); halo.addColorStop(0, 'rgba(120,220,255,.75)'); halo.addColorStop(1, 'rgba(120,220,255,0)'); x.fillStyle = halo; x.beginPath(); x.arc(c, c, R * 1.16, 0, 7); x.fill();
    x.save(); x.beginPath(); x.arc(c, c, R, 0, 7); x.clip();
    const sea = x.createRadialGradient(c, c - R * 0.5, R * 0.1, c, c, R); sea.addColorStop(0, '#3f8fe0'); sea.addColorStop(1, '#123a7a'); x.fillStyle = sea; x.fillRect(0, 0, s, s);
    for (let i = 0; i < 16; i++) { x.fillStyle = Math.random() < 0.6 ? '#3f9a5a' : '#a08a5a'; x.globalAlpha = r2(0.6, 0.9); x.beginPath(); x.ellipse(r2(c - R, c + R), r2(c - R, c), r2(18, 60), r2(10, 30), r2(0, 3), 0, 7); x.fill(); }
    x.globalAlpha = 0.75; x.strokeStyle = '#fff'; x.lineCap = 'round'; for (let i = 0; i < 16; i++) { x.lineWidth = r2(5, 14); const px = r2(c - R, c + R), py = r2(c - R, c + R * 0.2); x.beginPath(); x.moveTo(px, py); x.bezierCurveTo(px + 40, py - 14, px + 80, py + 14, px + r2(90, 150), py + r2(-10, 10)); x.stroke(); }
    x.globalAlpha = 1; const sh = x.createLinearGradient(0, c - R, 0, c + R); sh.addColorStop(0, 'rgba(0,0,0,0)'); sh.addColorStop(0.5, 'rgba(4,8,20,.45)'); sh.addColorStop(1, 'rgba(4,8,20,.9)'); x.fillStyle = sh; x.fillRect(0, 0, s, s);
    x.restore();
  }, 512);
  earth = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, opacity: 0 }));
  earth.scale.setScalar(12); earth.renderOrder = -2; earth.visible = false; scene.add(earth);
}
function stepZone(dt, b) {
  if (zoneIdx === 9 && !earth) makeEarth();
  if (earth) {   // only its lit top edge rises over the bottom of the screen
    const want = zoneIdx === 9 ? 0.75 : 0; earth.material.opacity += (want - earth.material.opacity) * Math.min(1, 1.2 * dt); earth.visible = earth.material.opacity > 0.01;
    earth.position.set(0.4, b.bot * 2 - 3.4 - (game.alt - 9 * JUMP.levelH) * 0.03, -7);
  }
  if (zoneIdx === 7 && !giant) makeGiant();
  if (giant) {
    const want = zoneIdx === 7 ? 0.62 : 0; giant.material.opacity += (want - giant.material.opacity) * Math.min(1, 1.2 * dt); giant.visible = giant.material.opacity > 0.01;
    giant.position.set(-1.3, b.bot + (b.top - b.bot) * 0.22 - (game.alt - 7 * JUMP.levelH) * 0.04, -7);   // it sinks slowly as he climbs
  }
  const g = game, z = ZONES[zoneIdx];
  starsFar.material.uniforms.uColor.value.lerp(zoneStar, Math.min(1, dt));
  const a = z && z.amb; if (!a) return;
  for (let k = 0, n = emit(a.n, dt); k < n; k++) {
    const f = spawnFaller((Math.random() * 2 - 1) * (b.xm + 1.2), b.bot + Math.random() * (b.top - b.bot + 1.5), -1.2 + Math.random() * 1.7,
      new THREE.Vector3(a.v[0] + (Math.random() - 0.5) * (a.sway || 0.15), a.v[1] * (0.7 + Math.random() * 0.6), 0), a.s[0] + Math.random() * (a.s[1] - a.s[0]), a.life * (0.7 + Math.random() * 0.6));
    f.material.color.set(a.col[Math.random() < 0.5 ? 0 : 1]); f.userData.fin = 0.8;
  }
}
// the gate: a glowing line with the level's name at every 20 m, in that level's colour; Ori flies through it
const gGate = $('#gGate'), gGateLabel = $('#gGate span'), gWind = $('#gWind'), gLvl = $('#gLvl');
function stepGate() {
  const g = game; let show = false;
  for (const n of [g.level + 1, g.level]) {
    if (n < 1) continue;
    const y = Math.round(toScreen(_v.set(0, g.baseY + n * JUMP.levelH - g.scrolled, 0)).y);
    if (y < 300 || y > innerHeight - 100) continue;   // below the HUD (score, constellation, series pill), above the hint line
    show = true;
    if (y !== hud.gateY) { hud.gateY = y; gGate.style.transform = `translate(-50%, ${y}px)`; }
    if (n !== hud.gateN) {
      hud.gateN = n; gGateLabel.textContent = levelTitle(n); gGate.style.color = ZONES[zoneOf(n)].accent;
    }
    break;
  }
  if (show !== hud.gateShow) { hud.gateShow = show; gGate.classList.toggle('show', show); }
}
const gameMode = 'jump';   // "Звездопад" was removed; the jump game is the only game
function getRecord() { try { return +localStorage.getItem('ori-record-jump') || 0; } catch { return 0; } }
function getStarRecord() { try { return +localStorage.getItem('ori-record-stars') || 0; } catch { return 0; } }
function setStarRecord(v) { try { localStorage.setItem('ori-record-stars', String(v)); } catch {} }
function setRecord(v) { try { localStorage.setItem('ori-record-jump', String(v)); } catch {} }
const fmtScore = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
function showRecord() {
  const r = getRecord(), rs = getStarRecord();
  document.querySelectorAll('.g-rec').forEach((el) => { el.textContent = r > 0 ? `${fmtScore(r)} м${rs > 0 ? ' · ★ ' + rs : ''}` : ''; });
  document.querySelectorAll('.g-recchip').forEach((el) => { el.style.display = r > 0 ? '' : 'none'; });
}
showRecord();
const gScore = $('#gScore'), gAlt = $('#gAlt'), gAltFill = $('#gAltFill'), gAltMe = $('#gAltMe'), gAltStar = $('#gAltStar');
function updateScore() {
  if (!gScore) return;
  if (game.mode !== 'jump') { gScore.innerHTML = hud.html = ''; return; }
  // called every frame: the DOM is written only when something shown actually changed (no layout per frame)
  // stars caught · the bubble while he carries it · the hop while it is charged
  const html = `${fmtScore(Math.floor(game.best || 0))} м<span>★ ${game.bank}${game.bubble ? ' · <i class="bub"></i>' : ''}${game.hop ? ' · <b class="hop">↑ подскок</b>' : ''}</span>`;
  if (html !== hud.html) { hud.html = html; gScore.innerHTML = html; }
  const cnt = game.need ? (game.lit >= game.need ? '✓' : `${game.lit}/${game.need}`) : '';
  if (cnt !== hud.cnt) { hud.cnt = cnt; gCount.textContent = cnt; gCount.classList.toggle('full', cnt === '✓'); }
  // the bar is the way to the star of the day; once it is caught, the way to the next hundred metres (its number replaces the star)
  const toNova = game.dayStar && !game.supernova, alt = Math.max(0, game.alt || 0);
  const base = toNova ? JUMP.goal : game.dayStar ? Math.floor(alt / 100) * 100 : 0, span = toNova ? novaEnd() - JUMP.goal : game.dayStar ? 100 : JUMP.goal;
  const f = THREE.MathUtils.clamp((alt - base) / span, 0, 1), fb = base ? f : THREE.MathUtils.clamp((game.best || 0) / JUMP.goal, 0, 1);
  const lab = toNova ? '✹' : base ? String(base + 100) : '★';
  if (toNova !== hud.toNova) { hud.toNova = toNova; gAltStar.classList.toggle('nova', toNova); }
  if (lab !== hud.lab) { hud.lab = lab; gAltStar.textContent = lab; gAltStar.classList.toggle('num', !!base && !toNova); }
  const fill = `scaleY(${fb.toFixed(3)})`, me = `${(f * 100).toFixed(1)}%`;
  if (fill !== hud.fill) { hud.fill = fill; gAltFill.style.transform = fill; }
  if (me !== hud.me) { hud.me = me; gAltMe.style.bottom = me; }
  if (!!game.dayStar !== hud.star) { hud.star = !!game.dayStar; gAltStar.classList.toggle('got', hud.star); }
}
const hud = { html: '', fill: '', me: '', star: null, cnt: null, lab: '★', gateY: null, gateN: null, gateShow: false, wind: '' };
const gCount = $('#gCount');
function setSeries() {
  const g = game, n = g.series;
  gX2.textContent = n >= 3 ? `Идеально ×${n} · звёзды ×2` : n >= 1 ? `Идеально ×${n}` : '';
  gX2.classList.toggle('on', n >= 1);
}
function gPop(text, at, bad) {
  const el = document.createElement('div'); el.className = 'g-pop' + (bad ? ' bad' : ''); el.textContent = text;
  el.style.left = Math.max(20 + text.length * 5.5, Math.min(innerWidth - 20 - text.length * 5.5, at.x)) + 'px'; el.style.top = at.y + 'px'; document.body.appendChild(el);
  requestAnimationFrame(() => el.classList.add('go')); setTimeout(() => el.remove(), 900);
}
// planet surfaces: soft bands and craters painted on a canvas; meteorites: graphite with glowing red cracks
function planetTex(a, b) {
  const c = document.createElement('canvas'); c.width = 256; c.height = 128; const x = c.getContext('2d');
  x.fillStyle = a; x.fillRect(0, 0, 256, 128);
  for (let i = 0; i < 7; i++) { x.fillStyle = i % 2 ? a : b; x.globalAlpha = 0.35 + Math.random() * 0.3; const y = 10 + i * 17 + Math.random() * 6; x.fillRect(0, y, 256, 5 + Math.random() * 9); }
  x.globalAlpha = 0.28; x.fillStyle = b;
  for (let i = 0; i < 9; i++) { x.beginPath(); x.arc(Math.random() * 256, 20 + Math.random() * 88, 4 + Math.random() * 9, 0, Math.PI * 2); x.fill(); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = THREE.RepeatWrapping; return t;
}
function crackTex(glow) {
  const c = document.createElement('canvas'); c.width = 256; c.height = 128; const x = c.getContext('2d');
  x.fillStyle = glow ? '#000' : '#303B57'; x.fillRect(0, 0, 256, 128);
  if (!glow) { x.fillStyle = 'rgba(20,26,44,.6)'; for (let i = 0; i < 14; i++) { x.beginPath(); x.arc(Math.random() * 256, Math.random() * 128, 3 + Math.random() * 8, 0, Math.PI * 2); x.fill(); } }
  x.strokeStyle = glow ? '#FF0032' : '#5a1020'; x.lineWidth = glow ? 2.2 : 3; x.lineCap = 'round';
  for (let i = 0; i < 9; i++) { let px = Math.random() * 256, py = Math.random() * 128; x.beginPath(); x.moveTo(px, py); for (let k = 0; k < 5; k++) { px += (Math.random() - 0.5) * 50; py += (Math.random() - 0.5) * 30; x.lineTo(px, py); } x.stroke(); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function spriteTex(draw, size = 128) {
  const c = document.createElement('canvas'); c.width = c.height = size; draw(c.getContext('2d'), size);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
const starGlowTex = spriteTex((x, s) => { const g = x.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2); g.addColorStop(0, 'rgba(255,250,220,.55)'); g.addColorStop(0.4, 'rgba(255,240,180,.18)'); g.addColorStop(1, 'rgba(255,240,180,0)'); x.fillStyle = g; x.fillRect(0, 0, s, s); });
// ice: white cracks that glow through the comet, more of them after every landing
function iceCrackTex(n) {
  return spriteTex((x, s) => { x.fillStyle = '#000'; x.fillRect(0, 0, s, s); x.strokeStyle = '#fff'; x.lineCap = 'round';
    for (let i = 0; i < n * 5; i++) { x.lineWidth = 1.5 + Math.random() * 1.5; let px = s / 2 + (Math.random() - 0.5) * s * 0.4, py = s / 2 + (Math.random() - 0.5) * s * 0.4; x.beginPath(); x.moveTo(px, py); for (let k = 0; k < 4; k++) { px += (Math.random() - 0.5) * s * 0.35; py += (Math.random() - 0.5) * s * 0.35; x.lineTo(px, py); } x.stroke(); } }, 256);
}
const iceCracks = [null, iceCrackTex(1), iceCrackTex(2)];
const holeTex = spriteTex((x, s) => {
  const g = x.createRadialGradient(s / 2, s / 2, s * 0.12, s / 2, s / 2, s / 2);
  g.addColorStop(0, '#000'); g.addColorStop(0.32, '#05060c'); g.addColorStop(0.42, '#7d63d8'); g.addColorStop(0.5, '#D9F38B'); g.addColorStop(0.62, 'rgba(125,99,216,.55)'); g.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = g; x.beginPath(); x.arc(s / 2, s / 2, s / 2, 0, Math.PI * 2); x.fill();
});
const glowTex = spriteTex((x, s) => { const g = x.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2); g.addColorStop(0, 'rgba(255,170,90,.9)'); g.addColorStop(0.5, 'rgba(255,60,40,.35)'); g.addColorStop(1, 'rgba(255,0,50,0)'); x.fillStyle = g; x.fillRect(0, 0, s, s); });
const bubbleTex = spriteTex((x, s) => { x.strokeStyle = 'rgba(217,243,139,.9)'; x.lineWidth = s * 0.03; x.beginPath(); x.arc(s / 2, s / 2, s * 0.45, 0, Math.PI * 2); x.stroke(); const g = x.createRadialGradient(s * 0.38, s * 0.35, 0, s / 2, s / 2, s * 0.45); g.addColorStop(0, 'rgba(255,255,255,.35)'); g.addColorStop(1, 'rgba(217,243,139,.08)'); x.fillStyle = g; x.fill(); });
// power-up icons are drawn (emoji look different on every platform, and some have no bubble at all)
const BONUS_DRAW = {
  rocket(x, s) {
    const u = s / 100; x.save(); x.translate(s / 2, s / 2); x.rotate(Math.PI / 4);
    x.fillStyle = '#FFB347'; x.beginPath(); x.moveTo(-7 * u, 20 * u); x.quadraticCurveTo(0, 46 * u, 7 * u, 20 * u); x.fill();
    x.fillStyle = '#FF0032';
    for (const k of [-1, 1]) { x.beginPath(); x.moveTo(k * 9 * u, 4 * u); x.lineTo(k * 22 * u, 25 * u); x.lineTo(k * 9 * u, 21 * u); x.closePath(); x.fill(); }
    x.fillStyle = '#FAFAFC'; x.beginPath(); x.moveTo(0, -31 * u); x.bezierCurveTo(16 * u, -14 * u, 13 * u, 10 * u, 10 * u, 22 * u); x.lineTo(-10 * u, 22 * u); x.bezierCurveTo(-13 * u, 10 * u, -16 * u, -14 * u, 0, -31 * u); x.fill();
    x.fillStyle = '#FF0032'; x.beginPath(); x.moveTo(0, -31 * u); x.bezierCurveTo(6 * u, -25 * u, 9 * u, -20 * u, 10.5 * u, -14 * u); x.lineTo(-10.5 * u, -14 * u); x.bezierCurveTo(-9 * u, -20 * u, -6 * u, -25 * u, 0, -31 * u); x.fill();
    x.fillStyle = '#1D2233'; x.beginPath(); x.arc(0, -2 * u, 5.6 * u, 0, Math.PI * 2); x.fill();
    x.fillStyle = '#D9F38B'; x.beginPath(); x.arc(0, -2 * u, 3.4 * u, 0, Math.PI * 2); x.fill();
    x.restore();
  },
  bubble(x, s) {
    const u = s / 100; x.fillStyle = 'rgba(217,243,139,.18)'; x.strokeStyle = '#D9F38B'; x.lineWidth = 4 * u;
    x.beginPath(); x.arc(s / 2, s / 2, 22 * u, 0, Math.PI * 2); x.fill(); x.stroke();
    x.strokeStyle = '#fff'; x.lineWidth = 3.5 * u; x.lineCap = 'round'; x.beginPath(); x.arc(s / 2, s / 2, 14.5 * u, Math.PI * 1.08, Math.PI * 1.45); x.stroke();
  },
  magnet(x, s) {
    const u = s / 100; x.save(); x.translate(s / 2, s / 2 + 3 * u); x.lineWidth = 13 * u; x.lineCap = 'butt';
    x.strokeStyle = '#FF0032'; x.beginPath(); x.moveTo(-15 * u, -24 * u); x.lineTo(-15 * u, 3 * u); x.arc(0, 3 * u, 15 * u, Math.PI, 0, true); x.lineTo(15 * u, -24 * u); x.stroke();
    x.strokeStyle = '#FAFAFC'; x.beginPath(); x.moveTo(-15 * u, -24 * u); x.lineTo(-15 * u, -13 * u); x.moveTo(15 * u, -24 * u); x.lineTo(15 * u, -13 * u); x.stroke();
    x.restore();
  },
};
const bonusTex = Object.fromEntries(Object.entries(BONUS_DRAW).map(([k, draw]) => [k, spriteTex((x, s) => {
  x.fillStyle = 'rgba(29,34,51,.85)'; x.beginPath(); x.arc(s / 2, s / 2, s * 0.46, 0, Math.PI * 2); x.fill();
  x.strokeStyle = '#D9F38B'; x.lineWidth = s * 0.05; x.stroke();
  draw(x, s);
}, 192)]));
const PLANET_R = 0.38;
const jumpGeo = { planet: new THREE.SphereGeometry(PLANET_R, 40, 28), rock: new THREE.DodecahedronGeometry(0.42, 0), ring: new THREE.TorusGeometry(0.62, 0.045, 10, 48), belt: new THREE.TorusGeometry(0.66, 0.02, 8, 48) };
const jumpMat = {
  // a colourful system: lilac, coral, sky, mint, peach, lime, sunflower, light lavender
  planet: [['#cbb8ff', '#9d86e8'], ['#ffa3b1', '#e0566d'], ['#a9d4ff', '#5f9be0'], ['#b6f0d8', '#4fbf98'], ['#ffd2a8', '#e8935a'],
    ['#e6f7a8', '#a9cf4c'], ['#ffe6a0', '#e0b247'], ['#e4efff', '#a2b3dc']].map(([a, b]) => new THREE.MeshStandardMaterial({ map: planetTex(a, b), roughness: 0.55, metalness: 0.05, emissive: 0x1c2136, emissiveIntensity: 0.25 })),
  rock: new THREE.MeshStandardMaterial({ map: crackTex(false), roughness: 0.95, flatShading: true, emissive: 0xffffff, emissiveMap: crackTex(true), emissiveIntensity: 1.2 }),
  ice: new THREE.MeshStandardMaterial({ color: 0xbfd8ff, roughness: 0.15, metalness: 0.1, transparent: true, opacity: 0.82, emissive: 0x6f9cff, emissiveIntensity: 0.25 }),
  hot: new THREE.MeshStandardMaterial({ map: planetTex('#ff7a3d', '#e0263a'), emissive: 0xff4a1c, emissiveIntensity: 0.9, roughness: 0.5 }),
  lime: new THREE.MeshStandardMaterial({ color: 0xd9f38b, emissive: 0xd9f38b, emissiveIntensity: 0.55, roughness: 0.4 }),
  belt: new THREE.MeshStandardMaterial({ color: 0xfafafc, roughness: 0.5, transparent: true, opacity: 0.6 }),
};
function jumpBounds() {
  const top = ndcToPlane(0, 1, 0).y, bot = ndcToPlane(0, -1, 0).y, xm = Math.abs(ndcToPlane(playNdc(0.82), 0, 0).x) - 0.35;
  return { top, bot, xm };
}
/* ---------- planet skins: every level has its own planets ---------- */
// 0 Орбита: pastel striped planets · 1 Пояс астероидов: cratered rocks · 2 Ледяная туманность: frozen, snow-capped ·
// 3 Солнечный ветер: charred with glowing lava cracks, smoking · 4 Чёрные дыры: dark violet with neon bands
function texCanvas(w, h, draw) { const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = THREE.RepeatWrapping; return t; }
const rnd = (a, b) => a + Math.random() * (b - a);
function rockSkin(base, dark, light) {
  return new THREE.MeshStandardMaterial({ map: texCanvas(256, 128, (x, w, h) => {
    x.fillStyle = base; x.fillRect(0, 0, w, h);
    for (let i = 0; i < 60; i++) { x.globalAlpha = rnd(0.08, 0.2); x.fillStyle = Math.random() < 0.5 ? dark : light; x.beginPath(); x.ellipse(rnd(0, w), rnd(0, h), rnd(6, 26), rnd(4, 14), rnd(0, 3), 0, 7); x.fill(); }
    for (let i = 0; i < 12; i++) { const cx = rnd(0, w), cy = rnd(16, h - 16), r = rnd(4, 12);
      x.globalAlpha = 0.55; x.fillStyle = dark; x.beginPath(); x.arc(cx, cy, r, 0, 7); x.fill();
      x.globalAlpha = 0.5; x.strokeStyle = light; x.lineWidth = 1.5; x.beginPath(); x.arc(cx, cy, r, Math.PI * 0.9, Math.PI * 1.9); x.stroke(); }
  }), roughness: 0.95, metalness: 0, flatShading: true, emissive: 0x2a2020, emissiveIntensity: 0.4 });
}
function frozenSkin(a, b) {
  return new THREE.MeshStandardMaterial({ map: texCanvas(256, 128, (x, w, h) => {
    const g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, a); g.addColorStop(0.5, b); g.addColorStop(1, a); x.fillStyle = g; x.fillRect(0, 0, w, h);
    x.fillStyle = 'rgba(30,70,150,.38)'; for (let i = 0; i < 9; i++) { x.beginPath(); x.ellipse(rnd(0, w), rnd(38, h - 38), rnd(10, 28), rnd(3, 7), 0, 0, 7); x.fill(); }
    x.strokeStyle = 'rgba(255,255,255,.8)'; x.lineWidth = 1.2; for (let i = 0; i < 14; i++) { let px = rnd(0, w), py = rnd(30, h - 30); x.beginPath(); x.moveTo(px, py); for (let k = 0; k < 4; k++) { px += rnd(-22, 22); py += rnd(-12, 12); x.lineTo(px, py); } x.stroke(); }   // frost veins
  }), roughness: 0.5, metalness: 0.05, emissive: 0x2a5a96, emissiveIntensity: 0.2 });
}
function lavaSkin(glow) {
  const lines = []; for (let i = 0; i < 12; i++) { let px = rnd(0, 256), py = rnd(0, 128); const pts = [[px, py]]; for (let k = 0; k < 5; k++) { px += rnd(-34, 34); py += rnd(-20, 20); pts.push([px, py]); } lines.push(pts); }
  const stroke = (x, col, lw) => { x.strokeStyle = col; x.lineWidth = lw; x.lineCap = x.lineJoin = 'round'; for (const pts of lines) { x.beginPath(); pts.forEach(([a, b], i) => (i ? x.lineTo(a, b) : x.moveTo(a, b))); x.stroke(); } };
  const map = texCanvas(256, 128, (x, w, h) => { x.fillStyle = '#3c2628'; x.fillRect(0, 0, w, h); for (let i = 0; i < 40; i++) { x.globalAlpha = rnd(0.15, 0.4); x.fillStyle = Math.random() < 0.5 ? '#22151a' : '#5a373a'; x.beginPath(); x.ellipse(rnd(0, w), rnd(0, h), rnd(8, 24), rnd(5, 12), rnd(0, 3), 0, 7); x.fill(); } x.globalAlpha = 1; stroke(x, '#7a2a14', 5); });
  const em = texCanvas(256, 128, (x, w, h) => { x.fillStyle = '#0c0606'; x.fillRect(0, 0, w, h); stroke(x, glow, 4.5); stroke(x, '#ffe2a8', 1.5); });
  return new THREE.MeshStandardMaterial({ map, emissiveMap: em, emissive: 0xffffff, emissiveIntensity: 1.15, roughness: 0.9 });
}
function voidSkin(a, b, neon) {
  const bands = []; for (let i = 0; i < 4; i++) bands.push([rnd(14, 114), rnd(1.5, 4)]);
  const map = texCanvas(256, 128, (x, w, h) => { x.fillStyle = a; x.fillRect(0, 0, w, h); for (let i = 0; i < 8; i++) { x.globalAlpha = rnd(0.3, 0.6); x.fillStyle = b; x.fillRect(0, rnd(0, h), w, rnd(4, 14)); } });
  const em = texCanvas(256, 128, (x, w, h) => { x.fillStyle = '#0a0716'; x.fillRect(0, 0, w, h); x.fillStyle = neon; for (const [y, t] of bands) x.fillRect(0, y, w, t); x.fillStyle = '#fff'; for (let i = 0; i < 36; i++) x.fillRect(rnd(0, w), rnd(0, h), 1.5, 1.5); });
  return new THREE.MeshStandardMaterial({ map, emissiveMap: em, emissive: 0xffffff, emissiveIntensity: 0.95, roughness: 0.4, metalness: 0.2 });
}
// 6 Планета пришельцев: mossy green with ponds and clusters of little lights (their towns)
function mossSkin(a, b, light) {
  const towns = []; for (let i = 0; i < 7; i++) { const cx = rnd(0, 256), cy = rnd(24, 104); for (let k = 0; k < 7; k++) towns.push([cx + rnd(-12, 12), cy + rnd(-8, 8), rnd(1.2, 2.4)]); }
  const map = texCanvas(256, 128, (x, w, h) => { x.fillStyle = a; x.fillRect(0, 0, w, h);
    for (let i = 0; i < 46; i++) { x.globalAlpha = rnd(0.2, 0.5); x.fillStyle = Math.random() < 0.6 ? b : '#7fd08a'; x.beginPath(); x.ellipse(rnd(0, w), rnd(0, h), rnd(8, 26), rnd(5, 13), rnd(0, 3), 0, 7); x.fill(); }
    x.globalAlpha = 0.75; x.fillStyle = '#1c6f86'; for (let i = 0; i < 5; i++) { x.beginPath(); x.ellipse(rnd(0, w), rnd(26, h - 26), rnd(7, 15), rnd(4, 7), 0, 0, 7); x.fill(); } });
  const em = texCanvas(256, 128, (x, w, h) => { x.fillStyle = '#04120a'; x.fillRect(0, 0, w, h); x.fillStyle = light; for (const [cx, cy, r] of towns) { x.beginPath(); x.arc(cx, cy, r, 0, 7); x.fill(); } });
  return new THREE.MeshStandardMaterial({ map, emissiveMap: em, emissive: 0xffffff, emissiveIntensity: 1.0, roughness: 0.7 });
}
// the alien: a small green fellow with big eyes and an antenna, drawn once
const alienTex = spriteTex((x, s) => { const u = s / 100;
  x.lineCap = 'round'; x.strokeStyle = '#2f9e4f'; x.lineWidth = 3 * u; x.beginPath(); x.moveTo(50 * u, 30 * u); x.lineTo(50 * u, 12 * u); x.stroke();
  x.fillStyle = '#eaffb0'; x.shadowColor = '#d9f38b'; x.shadowBlur = 8 * u; x.beginPath(); x.arc(50 * u, 10 * u, 5 * u, 0, 7); x.fill(); x.shadowBlur = 0;
  x.strokeStyle = '#35b85a'; x.lineWidth = 6 * u; x.beginPath(); x.moveTo(36 * u, 72 * u); x.lineTo(21 * u, 60 * u); x.moveTo(64 * u, 72 * u); x.lineTo(79 * u, 60 * u); x.stroke();
  x.fillStyle = '#2a9648'; x.beginPath(); x.ellipse(41 * u, 95 * u, 8 * u, 4 * u, 0, 0, 7); x.fill(); x.beginPath(); x.ellipse(59 * u, 95 * u, 8 * u, 4 * u, 0, 0, 7); x.fill();
  x.fillStyle = '#35b85a'; x.beginPath(); x.ellipse(50 * u, 78 * u, 17 * u, 18 * u, 0, 0, 7); x.fill();
  x.fillStyle = 'rgba(255,255,255,.2)'; x.beginPath(); x.ellipse(50 * u, 81 * u, 9 * u, 10 * u, 0, 0, 7); x.fill();
  x.fillStyle = '#4fd676'; x.beginPath(); x.ellipse(50 * u, 45 * u, 27 * u, 21 * u, 0, 0, 7); x.fill();
  x.fillStyle = 'rgba(255,255,255,.22)'; x.beginPath(); x.ellipse(42 * u, 33 * u, 10 * u, 5 * u, -0.4, 0, 7); x.fill();
  x.fillStyle = '#0d1a12'; for (const k of [-1, 1]) { x.save(); x.translate((50 + k * 11) * u, 46 * u); x.rotate(k * 0.35); x.beginPath(); x.ellipse(0, 0, 7 * u, 10 * u, 0, 0, 7); x.fill(); x.restore(); }
  x.fillStyle = '#fff'; for (const k of [-1, 1]) { x.beginPath(); x.arc((50 + k * 11 - 2) * u, 42 * u, 2.4 * u, 0, 7); x.fill(); }
  x.strokeStyle = '#0d1a12'; x.lineWidth = 2 * u; x.beginPath(); x.arc(50 * u, 57 * u, 5 * u, 0.15 * Math.PI, 0.85 * Math.PI); x.stroke();
}, 192);
const ALIEN_S = 0.64, ALIEN_Y = PLANET_R - 0.02 + ALIEN_S * 0.44;   // the sprite's centre when his feet are on the planet's top
const SKINS = [
  jumpMat.planet,
  [rockSkin('#7c7078', '#3f363c', '#b3a59c'), rockSkin('#86705f', '#463a33', '#c2a98f'), rockSkin('#6a6f7c', '#353a45', '#a6adba')],
  [frozenSkin('#a9d8ff', '#4f93d8'), frozenSkin('#b4ecf4', '#48a8c4'), frozenSkin('#b9c6ff', '#6478d6')],
  [lavaSkin('#ff7a2a'), lavaSkin('#ff5a2a'), lavaSkin('#ffa23a')],
  [voidSkin('#2a1f55', '#45308a', '#b39cff'), voidSkin('#1f1a48', '#3a2a78', '#d9f38b'), voidSkin('#33205c', '#56308f', '#ff8ad8')],
  null,   // 5 = deep space: a mix of the first five
  [mossSkin('#2f8a55', '#1d5c3a', '#8cff9a'), mossSkin('#3a9a7a', '#1f5f55', '#d9f38b'), mossSkin('#4a9a45', '#2a6230', '#aef0ff')],
  // 7 Кольца гиганта: shards of ice and rock (flat, see jumpGeo.shard)
  [new THREE.MeshStandardMaterial({ color: 0xb4c6de, roughness: 0.35, metalness: 0.2, flatShading: true, emissive: 0x38527c, emissiveIntensity: 0.35 }),
    new THREE.MeshStandardMaterial({ color: 0xd9c6a8, roughness: 0.5, metalness: 0.1, flatShading: true, emissive: 0x5a4630, emissiveIntensity: 0.35 }),
    new THREE.MeshStandardMaterial({ color: 0xe6f0ff, roughness: 0.2, metalness: 0.25, flatShading: true, emissive: 0x4a6aa0, emissiveIntensity: 0.4 })],
];
// 8 Грозовая туманность: a cloud is a clump of soft lobes with a light flickering inside. Flat and wide to land on, and springy
const CLOUD = { landW: 0.5, top: 0.22, spring: 1.16 };
const cloudMat = [0xd6daf8, 0xc4c8f2, 0xe2def9].map((color) => new THREE.MeshStandardMaterial({ color, roughness: 1, metalness: 0, emissive: 0x5650a8, emissiveIntensity: 0.5 }));
SKINS.push(cloudMat);   // index 8 (the lobes pick their own material, this only keeps the table whole)
// 9 Кладбище спутников: a dead satellite, a foil-wrapped core between two wide solar panels (one of them often broken short)
const SAT = { landW: 0.64, top: 0.12, hold: 0.3, slide: 3.2, scale: 1.2, lean: 0.5 };   // lean = tipped toward the camera so the panels show their faces   // hold = the share of the half-width that does not tip
const satMat = {
  core: new THREE.MeshStandardMaterial({ color: 0xd2a94e, roughness: 0.45, metalness: 0.7, emissive: 0x3a2a08, emissiveIntensity: 0.5 }),
  steel: new THREE.MeshStandardMaterial({ color: 0x9aa7b8, roughness: 0.5, metalness: 0.6, emissive: 0x1a2230, emissiveIntensity: 0.5 }),
  panel: new THREE.MeshStandardMaterial({ map: texCanvas(128, 64, (x, w, h) => { x.fillStyle = '#15306e'; x.fillRect(0, 0, w, h); x.strokeStyle = '#7fc8ff'; x.lineWidth = 1.2; for (let i = 0; i <= 8; i++) { x.beginPath(); x.moveTo(i * 16, 0); x.lineTo(i * 16, h); x.stroke(); } for (let i = 0; i <= 4; i++) { x.beginPath(); x.moveTo(0, i * 16); x.lineTo(w, i * 16); x.stroke(); } x.fillStyle = 'rgba(8,12,30,.7)'; for (let i = 0; i < 5; i++) x.fillRect(Math.floor(rnd(0, 8)) * 16 + 1, Math.floor(rnd(0, 4)) * 16 + 1, 14, 14); }), roughness: 0.3, metalness: 0.4, emissive: 0x2a5ab0, emissiveIntensity: 0.45 }),
};
SKINS.push([satMat.core]);   // index 9, as for the clouds
const satGeo = { core: new THREE.BoxGeometry(0.24, 0.2, 0.22), panel: new THREE.BoxGeometry(1, 0.03, 0.26), arm: new THREE.BoxGeometry(0.06, 0.03, 0.04), dish: new THREE.ConeGeometry(0.1, 0.08, 14, 1, true), mast: new THREE.CylinderGeometry(0.008, 0.008, 0.2, 5) };
function satBody() {
  const grp = new THREE.Group(), y = 0.085;
  grp.add(new THREE.Mesh(satGeo.core, satMat.core));
  for (const k of [-1, 1]) {
    const len = Math.random() < 0.25 ? rnd(0.2, 0.3) : 0.4;   // a broken panel is shorter
    const pn = new THREE.Mesh(satGeo.panel, satMat.panel); pn.scale.x = len; pn.position.set(k * (0.17 + len / 2), y, 0); grp.add(pn);
    const arm = new THREE.Mesh(satGeo.arm, satMat.steel); arm.position.set(k * 0.145, y, 0); grp.add(arm);
  }
  const dish = new THREE.Mesh(satGeo.dish, satMat.steel); dish.position.set(0.02, -0.15, 0.06); dish.rotation.x = 0.5; grp.add(dish);
  const mast = new THREE.Mesh(satGeo.mast, satMat.steel); mast.position.set(-0.07, -0.2, -0.05); grp.add(mast);
  const blink = new THREE.Sprite(new THREE.SpriteMaterial({ map: softTex, color: 0xff3040, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 })); blink.scale.setScalar(0.16); blink.position.set(0.08, -0.03, 0.13); grp.add(blink); grp.userData.blink = blink;
  grp.scale.setScalar(SAT.scale); grp.rotation.x = SAT.lean;
  return grp;
}
const cloudLobe = new THREE.SphereGeometry(1, 18, 12);
const softTex = spriteTex((x, s) => { const g = x.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2); g.addColorStop(0, 'rgba(255,255,255,.9)'); g.addColorStop(0.4, 'rgba(255,255,255,.3)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, s, s); });
function cloudBody() {
  const grp = new THREE.Group(), mat = cloudMat[Math.floor(Math.random() * cloudMat.length)];
  for (const [x, y, z, r] of [[0, 0, 0, 0.3], [-0.3, -0.04, 0, 0.23], [0.3, -0.03, 0, 0.24], [-0.15, 0.06, 0.06, 0.22], [0.16, 0.07, -0.04, 0.23], [0.02, -0.07, 0.14, 0.22], [-0.44, -0.09, 0.02, 0.15], [0.45, -0.08, 0.02, 0.15]]) {
    const m = new THREE.Mesh(cloudLobe, mat); m.position.set(x + rnd(-0.03, 0.03), y * 0.8 + rnd(-0.02, 0.02), z); m.scale.set(r * rnd(0.95, 1.1), r * 0.78, r); grp.add(m);
  }
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: softTex, color: 0xcab8ff, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 })); glow.scale.set(1.5, 0.9, 1); glow.position.z = 0.32; grp.add(glow); grp.userData.glow = glow;
  return grp;
}
// lightning: a soft column for the warning, a jagged bolt for the strike
const boltColTex = spriteTex((x, s) => { const g = x.createLinearGradient(0, 0, s, 0); g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(0.5, 'rgba(255,255,255,.85)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, s, s); }, 64);
const boltTex = [0, 1, 2].map(() => { const c = document.createElement('canvas'); c.width = 96; c.height = 512; const x = c.getContext('2d'); const pts = [[48, 0]]; for (let y = 28; y < 512; y += 28) pts.push([48 + rnd(-30, 30), y + rnd(-8, 8)]); pts.push([48 + rnd(-10, 10), 512]);
  const stroke = (col, lw) => { x.strokeStyle = col; x.lineWidth = lw; x.lineJoin = 'round'; x.beginPath(); pts.forEach(([a, b], i) => (i ? x.lineTo(a, b) : x.moveTo(a, b))); x.stroke(); };
  stroke('rgba(170,150,255,.35)', 18); stroke('rgba(210,200,255,.7)', 8); stroke('#fff', 3);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; });
// a shard: a lens of rock, ragged, half as tall as it is deep. SHARD = its landing half-width and the height of its top
const SHARD = { landW: 0.36, top: 0.12 };
jumpGeo.shard = (() => { const g = new THREE.IcosahedronGeometry(1, 2), pos = g.attributes.position;
  for (let i = 0; i < pos.count; i++) { const k = 1 + 0.16 * Math.sin(pos.getX(i) * 7.3 + pos.getZ(i) * 4.1) + 0.1 * Math.sin(pos.getZ(i) * 9.7); pos.setXYZ(i, pos.getX(i) * 0.52 * k, pos.getY(i) * SHARD.top * (pos.getY(i) > 0 ? 1 : 1.5), pos.getZ(i) * 0.32 * k); }
  g.computeVertexNormals(); return g; })();
jumpGeo.asteroid = new THREE.IcosahedronGeometry(PLANET_R * 1.04, 1);
// a frozen planet wears a cap of snow: a thick mound over its top with a ragged, drooping edge
function snowCapGeo(seed) {
  const N = 10, M = 44, R = PLANET_R, pos = [], idx = [];
  for (let i = 0; i <= N; i++) for (let j = 0; j <= M; j++) {
    const phi = j / M * Math.PI * 2, tMax = 0.93 + 0.2 * Math.sin(3 * phi + seed * 2.1) + 0.11 * Math.sin(7 * phi + seed * 5.3), th = i / N * tMax;
    const r = R * (1.045 + 0.15 * Math.cos(th) ** 2) * (i === N ? 0.985 : 1);   // thickest at the top, tucked in at the edge
    pos.push(r * Math.sin(th) * Math.cos(phi), r * Math.cos(th), r * Math.sin(th) * Math.sin(phi));
  }
  for (let i = 0; i < N; i++) for (let j = 0; j < M; j++) { const a = i * (M + 1) + j, b = a + M + 1; idx.push(a, a + 1, b, a + 1, b + 1, b); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals(); return g;
}
const snowCaps = [snowCapGeo(1), snowCapGeo(2.7), snowCapGeo(4.4)];
const snowMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.75, metalness: 0, emissive: 0xc4dcff, emissiveIntensity: 0.32, side: THREE.DoubleSide });
// a thin atmosphere around every planet, in its level's colour (a sprite behind the sphere: only the rim shows)
const haloTex = spriteTex((x, s) => { const g = x.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2); g.addColorStop(0.5, 'rgba(255,255,255,0)'); g.addColorStop(0.64, 'rgba(255,255,255,.85)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, s, s); }, 256);
const haloMat = [[0xbfd0ff, 0.3], [0xffb98a, 0.28], [0x9fe4ff, 0.45], [0xff6a2a, 0.8], [0xa98bff, 0.75], [0xa98bff, 0], [0x7dffa0, 0.6], [0xffe2b0, 0], [0xc7b8ff, 0], [0x7ff0e0, 0]].map(([color, opacity]) => new THREE.SpriteMaterial({ map: haloTex, color, opacity, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
function makePlatform(type, x, y) {
  const grp = new THREE.Group(); let body;
  if (type === 'crumble') { body = new THREE.Mesh(jumpGeo.rock, jumpMat.rock); body.scale.setScalar(0.9); body.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3); }
  else if (type === 'ice') { body = new THREE.Mesh(jumpGeo.planet, jumpMat.ice.clone()); }
  else if (type === 'ground') { body = new THREE.Object3D(); }
  else if (type === 'hot') {
    body = new THREE.Mesh(jumpGeo.planet, jumpMat.hot);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })); glow.scale.setScalar(1.15); grp.add(glow); grp.userData.glow = glow;
  } else {
    // the planet of the level this row belongs to (deep space mixes them all)
    let skin = game.skinZone ?? 0; const nova = skin === 10; if (skin === 5 || nova) skin = Math.floor(Math.random() * 5);
    if (nova && type !== 'rescue') grp.userData.nova = true;
    const mat = type === 'rescue' ? jumpMat.lime : SKINS[skin][Math.floor(Math.random() * SKINS[skin].length)];
    const shard = skin === 7 && type !== 'rescue', cloud = skin === 8 && type !== 'rescue';
    const sat = skin === 9 && type !== 'rescue';
    if (sat) { body = satBody(); grp.userData.skin = 9; grp.userData.flat = true; grp.userData.landW = SAT.landW; grp.userData.top = SAT.top; grp.userData.blink = body.userData.blink; }
    else if (cloud) { body = cloudBody(); grp.userData.skin = 8; grp.userData.flat = true; grp.userData.landW = CLOUD.landW; grp.userData.top = CLOUD.top; grp.userData.flick = body.userData.glow; }
    else body = new THREE.Mesh(shard ? jumpGeo.shard : skin === 1 && type !== 'rescue' ? jumpGeo.asteroid : jumpGeo.planet, mat); if (!cloud && !sat) body.rotation.set((Math.random() - 0.5) * 0.5, Math.random() * 6, (Math.random() - 0.5) * 0.4);
    if (shard) { body.rotation.set(rnd(-0.06, 0.06), rnd(-0.25, 0.25), rnd(-0.06, 0.06)); grp.userData.skin = 7; grp.userData.flat = true; grp.userData.landW = SHARD.landW; grp.userData.top = SHARD.top; }
    else if (cloud || sat) { /* built above */ }
    else if (type !== 'rescue') { grp.userData.skin = skin; const halo = new THREE.Sprite(haloMat[skin]); halo.scale.setScalar(1.22); halo.position.z = -0.12; grp.add(halo);
      if (skin === 2) { const cap = new THREE.Mesh(snowCaps[Math.floor(Math.random() * snowCaps.length)], snowMat); cap.rotation.set(rnd(-0.1, 0.1), rnd(0, 6.28), rnd(-0.1, 0.1)); grp.add(cap); grp.userData.cap = cap; } }
    if (type === 'move' || type === 'orbit') { const b = new THREE.Mesh(jumpGeo.belt, jumpMat.belt); b.rotation.x = Math.PI / 2 - 0.25; grp.add(b); }
  }
  grp.add(body);
  if (type === 'alien' || type === 'visit') {
    const al = new THREE.Sprite(new THREE.SpriteMaterial({ map: alienTex, transparent: true, depthWrite: false })); al.scale.setScalar(ALIEN_S); al.position.set(0, ALIEN_Y, 0.3); grp.add(al); grp.userData.alien = al;
  }
  if (type === 'orbit') {
    const xm = jumpBounds().xm + PLANET_R, pts = []; for (let i = 0; i <= 40; i++) pts.push(new THREE.Vector3(-xm + i * 2 * xm / 40, 0, -0.1));
    const track = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineDashedMaterial({ color: 0xfafafc, transparent: true, opacity: 0.28, dashSize: 0.12, gapSize: 0.1 }));
    track.computeLineDistances(); track.position.set(-x, 0, 0); grp.add(track);
  }
  if (type === 'ring') { const r = new THREE.Mesh(jumpGeo.ring, jumpMat.lime); r.rotation.x = Math.PI / 2 - 0.35; r.rotation.y = 0.25; grp.add(r); }
  grp.position.set(x, y, type === 'ground' ? 0 : -0.55); scene.add(grp);   // planets sit behind Ori's plane so he never cuts into them
  const p = { grp, body, type, skin: grp.userData.skin ?? -1, glow: grp.userData.glow, cap: grp.userData.cap, alien: grp.userData.alien, occupied: type === 'alien', visitT: Math.random() * 4.8, flat: !!grp.userData.flat, landW: grp.userData.landW ?? JUMP.landW, flick: grp.userData.flick, nova: !!grp.userData.nova, blink: grp.userData.blink, rot: type === 'spinner' ? Math.random() * 6.28 : 0, rotV: type === 'spinner' ? (Math.random() < 0.5 ? -1 : 1) * 1.15 : 0, tilt: 0, tiltV: 0, x0: x, w: type === 'ground' ? 1.4 : 0.42, top: type === 'ground' ? 0 : type === 'crumble' ? 0.34 : PLANET_R - 0.02, vx: 0, alive: true, gone: 0 };
  if (type === 'move') { p.vx = (Math.random() < 0.5 ? -1 : 1) * (0.6 + Math.random() * 0.5); p.swing = 1.1; }
  if (type === 'orbit' || type === 'belt') p.swing = 99;
  if (p.flat) p.top = grp.userData.top;
  game.plats.push(p); return p;
}
function removePlatform(i) { const p = game.plats[i]; scene.remove(p.grp); game.plats.splice(i, 1); }
function jumpLevel(alt = game.alt) { const k = Math.floor(Math.max(0, alt) / JUMP.levelH); return { idx: Math.min(k, LEVELS.length - 1), extra: Math.max(0, k - (LEVELS.length - 1)), n: k }; }
function jumpStar(x, y, kind = 'white') {
  const sp = makeGameStar('white'); sp.position.set(x, y, 0.15);
  if (kind === 'key') { sp.scale.setScalar(0.66); sp.material.color.set(0xd9f38b); }
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: starGlowTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })); glow.position.set(x, y, 0.1); scene.add(glow);
  sp.userData = { kind, spin: (Math.random() - 0.5) * 2, base: sp.scale.x, age: Math.random() * 6, glow };
  return sp;
}
// random power-ups are the rocket and the magnet; the bubble comes only on its own schedule (see jumpRow)
function jumpBonus(x, y, kind = Math.random() < 0.5 ? 'rocket' : 'magnet') {
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: bonusTex[kind], transparent: true, depthWrite: false })); sp.scale.setScalar(0.5);
  sp.position.set(x, y, 0.2); scene.add(sp); game.bonuses.push({ sp, kind, t: Math.random() * 6 });
}
function jumpHole(x, y) {
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: holeTex, transparent: true, depthWrite: false })); sp.scale.setScalar(1.25);
  sp.position.set(x, y, -0.05); scene.add(sp);
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.78, 0.84, 56), new THREE.MeshBasicMaterial({ color: 0xd9f38b, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide }));
  ring.position.set(x, y, -0.02); scene.add(ring);
  const h = { sp, ring, near: 9, used: false }; game.holes.push(h); return h;
}
// spacing: bodies are kept apart by their centres; a moving planet counts as its whole swing
function sepTo(q, px, py, sw = 0) {
  return Math.hypot(Math.max(0, Math.abs(px - q.x0) - sw - (q.swing || 0)), py - q.grp.position.y);
}
const spacer = (q) => q.type !== 'ground' && (q.alive || q.type === 'ice');   // an ice comet freezes back in place
function spotFree(px, py, sw = 0, sep = JUMP.minSep) {
  return game.plats.every((q) => !spacer(q) || sepTo(q, px, py, sw) >= sep)
    && game.holes.every((h) => Math.hypot(Math.max(0, Math.abs(px - h.sp.position.x) - sw), py - h.sp.position.y) >= JUMP.holeSep);
}
// the last resort: optional extras standing in the way of a needed planet go (with a puff)
function clearSpot(px, py, sw = 0) {
  const g = game;
  for (let i = g.plats.length - 1; i >= 0; i--) { const q = g.plats[i]; if (spacer(q) && q.type !== 'rescue' && sepTo(q, px, py, sw) < JUMP.minSep) { meteorBurst(q.grp.position.clone(), 8, false); removePlatform(i); } }
  for (let i = g.holes.length - 1; i >= 0; i--) { const h = g.holes[i]; if (Math.hypot(Math.max(0, Math.abs(px - h.sp.position.x) - sw), py - h.sp.position.y) < JUMP.holeSep) { scene.remove(h.sp); scene.remove(h.ring); g.holes.splice(i, 1); } }
}
// one row = one reachable safe planet + optional extras (meteorite, hot dwarf, black hole, star, power-up)
function jumpRow() {
  const g = game, { xm } = jumpBounds(), rowAlt = g.nextY - g.baseY + g.scrolled, lv = jumpLevel(rowAlt), L = levelDef(lv.n), extra = L.rest ? 0 : lv.extra;
  const d = THREE.MathUtils.clamp((rowAlt - lv.n * JUMP.levelH) / JUMP.levelH, 0, 1);
  g.skinZone = zoneOf(lv.n);
  const at = rowAlt / JUMP.levelH, on = (f) => at >= FEATURE_AT[f];
  // every half level starts with a few easier rows that show its new thing in a safe form
  const stage = Math.floor(at * 2);
  if (stage > g.genStage) {
    g.genStage = stage;
    const f = STAGE_INTRO[stage] || null, rowF = ROW_INTRO.has(f) ? f : null;
    if (stage % 2 === 0) { g.intro = rowF ? [null, rowF] : []; g.introLeft = JUMP.introRows; }   // a level's first row is a plain one
    else if (f) { g.intro = rowF ? [rowF] : []; g.introLeft = 2; }
  }
  const calm = g.introLeft > 0; if (calm) g.introLeft--;
  const intro = g.intro.length ? g.intro.shift() : null;
  let gap = calm ? L.gap[0] - 0.1 : lvl(L.gap, d) + extra * 0.03;
  gap = THREE.MathUtils.clamp(gap * (0.92 + Math.random() * 0.16), JUMP.minGap, JUMP.maxGap);
  const reach = calm ? Math.max(0.8, L.dx[0] - 0.2) : lvl(L.dx, d);
  // the main planet
  // a key star is due: this row is built around the thing the level is about
  const keyRow = !calm && !intro && g.lit < g.need && !g.keyOut && rowAlt >= g.keyAt;
  let sig = keyRow ? KEY_SIG[zoneOf(lv.n)] : null; if (sig === 'ring' && !on('ring')) sig = null;
  let type = 'planet';
  if (MAIN_INTRO.has(intro)) type = intro;
  else if (sig) type = sig === 'ring' || sig === 'ice' ? sig : 'planet';
  else if (!calm) { const r = Math.random(), pr = on('ring') ? L.ring : 0, pi = lvl(L.ice, d), pm = on('move') ? lvl(L.move, d) : 0, pv = on('visit') ? lvl(L.visit || 0, d) : 0, pb = on('belt') ? lvl(L.belt || 0, d) : 0; type = r < pr ? 'ring' : r < pr + pi ? 'ice' : r < pr + pi + pm ? 'move' : r < pr + pi + pm + pv ? 'visit' : r < pr + pi + pm + pv + pb ? 'belt' : r < pr + pi + pm + pv + pb + (on('spinner') ? lvl(L.spinner || 0, d) : 0) ? 'spinner' : 'planet'; }
  if (type === 'visit' && g.lastType === 'visit' && intro !== 'visit') type = 'planet';
  if (type === 'belt' && g.lastType === 'belt' && intro !== 'belt') type = 'planet';
  if (type === 'spinner' && g.lastType === 'spinner' && intro !== 'spinner') type = 'planet';   // a still shard between two drifting rows   // never two in a row: the way up must not close
  if (type === 'ice' && g.lastType === 'ice' && !L.iceRun) type = 'planet';
  // a black hole is decided before the planet is placed, so the row can make room for it (as a key row does)
  const wantHole = on('hole') && !calm && !intro && !sig && !g.holeRecent && Math.random() < lvl(L.hole, d);
  if (wantHole && type === 'move') type = 'planet';
  const roomy = sig || wantHole;
  g.rowN++;
  const orbits = L.orbit && on('orbit');
  if (orbits && !calm && !keyRow && g.lastType !== 'orbit' && --g.orbitIn <= 0) { type = 'orbit'; g.orbitIn = JUMP.orbitEvery[0] + Math.floor(Math.random() * (JUMP.orbitEvery[1] - JUMP.orbitEvery[0] + 1)); }
  const orbitNext = orbits && g.orbitIn <= 1 && g.introLeft === 0;   // the row under an orbit stays clear
  let y = g.nextY + gap, x = 0, sw = type === 'orbit' || type === 'belt' ? 99 : type === 'move' ? (intro ? 0.7 : 1.1) : 0, ok = false;
  for (let t = 0; t < 40 && !ok; t++) {
    if (t && t % 10 === 0) {   // no room: a shorter swing, then a still planet, then a slightly bigger gap
      if (type === 'move' && sw > 0.5) sw = 0.5;
      else if (type === 'move' || type === 'orbit' || type === 'belt') { type = 'planet'; sw = 0; }
      else y = Math.min(g.nextY + JUMP.maxGap, y + 0.12);
    }
    // (a key row of a black hole or a red dwarf: the planet goes to its own side's edge, so the other body fits beside it on a phone)
    x = type === 'orbit' || type === 'belt' ? (Math.random() * 2 - 1) * xm : sig === 'hole' || sig === 'hot' || sig === 'alien' || wantHole ? (g.lastX >= 0 ? 1 : -1) * xm * (0.8 + 0.2 * Math.random())
      : THREE.MathUtils.clamp(g.lastX + (Math.random() * 2 - 1) * reach, -xm, xm);
    ok = spotFree(x, y, sw);
  }
  if (!ok) clearSpot(x, y, sw);
  const p = makePlatform(type, x, y);
  if (type === 'move') { p.swing = sw; p.vx *= intro ? 0.75 : 1 + extra * 0.1; }
  if (type === 'spinner' && intro) p.rotV *= 0.7;   // the first one turns slower
  if (type === 'belt') {   // the ring turns: two shards half the field apart drift the same way and come round again
    const W = xm + 0.6, v = g.beltDir * (0.85 + extra * 0.08) * (intro ? 0.7 : 1);
    p.vx = v; p.wrap = true;
    const q = makePlatform('belt', x > 0 ? x - W : x + W, y); q.vx = v; q.wrap = true;
  }
  if (type === 'orbit') { p.vx = (Math.random() < 0.5 ? -1 : 1) * (1.1 + 0.2 * Math.min(lv.idx, 4) + extra * 0.1) * (intro ? 0.7 : 1); }
  if (MAIN_INTRO.has(intro) && type !== intro) g.intro.unshift(intro);
  // a spot dd to one side of the planet; if it is off the field, the other side; if that is off too (a phone), the far edge
  // (it used to clamp back onto the planet's own side there, so on a narrow screen holes and dwarfs almost never fitted)
  const side = (dd) => { const dir = Math.random() < 0.5 ? -1 : 1; let tx = x + dir * dd; if (Math.abs(tx) > xm) { const o = x - dir * dd; tx = Math.abs(o) <= xm ? o : (x > 0 ? -xm : xm); } return tx; };
  // extras: never next to a moving or orbiting planet, never under an orbit
  let risky = null, newHole = null;
  if (type !== 'move' && type !== 'orbit' && type !== 'belt' && !orbitNext) {
    let rtype = null;
    if (intro === 'crumble' || intro === 'hot' || intro === 'alien') rtype = intro;
    else if (sig === 'crumble' || sig === 'hot' || sig === 'alien') rtype = sig;
    else if (!calm && !wantHole) { const t = Math.random(), pc = lvl(L.crumble, d), ph = lvl(L.hot, d); /* a hole needs the free side for itself */ const pa = lvl(L.alien || 0, d); rtype = t < pc ? 'crumble' : t < pc + ph ? 'hot' : t < pc + ph + pa ? 'alien' : null; }
    if (rtype) for (let k = 0; k < (sig ? 24 : 8) && !risky; k++) { const rx = side(1.2 + Math.random() * 0.8), ry = y + (Math.random() - 0.5) * 0.6; if (spotFree(rx, ry)) { risky = makePlatform(rtype, rx, ry); risky.extra = true; } }
    if (!risky && (intro === 'crumble' || intro === 'hot' || intro === 'alien')) g.intro.unshift(intro);
    if (intro === 'hole' || sig === 'hole' || wantHole) {
      for (let k = 0; k < (roomy ? 24 : 8); k++) {
        const hx = side(1.6 + Math.random() * 0.6), hy = y + gap * (roomy ? 0.3 + Math.random() * 0.3 : 0.45);
        if (g.plats.every((q) => !spacer(q) || sepTo(q, hx, hy) >= JUMP.holeSep)) { const h = newHole = jumpHole(hx, hy); if (intro === 'hole') h.intro = true; g.holeRecent = L.holeField ? 1 : 2; break; }
      }
      if (intro === 'hole' && !g.holes.some((h) => h.intro)) g.intro.unshift('hole');
    } else if (g.holeRecent) g.holeRecent--;
  }
  if ((intro === 'crumble' || intro === 'hot' || intro === 'hole' || intro === 'alien') && (type === 'move' || type === 'orbit' || orbitNext) && g.intro[0] !== intro) g.intro.unshift(intro);
  // the first rows carry a trail of three stars along the jump from the previous planet: the opening seconds
  // teach "jump through the stars" and give the first lights of the constellation
  if (!keyRow && (g.rowN <= JUMP.trailRows || L.starRain)) for (const t of [0.3, 0.55, 0.8]) jumpStar(THREE.MathUtils.lerp(g.lastX, x, t), THREE.MathUtils.lerp(g.nextY, y, t) + 0.9 + Math.sin(Math.PI * t));
  else if (keyRow) {
    // the point of the constellation: high above a ringed planet (only its bounce gets there), over an ice comet,
    // on top of a meteorite or a red dwarf, in the slingshot corridor of a black hole; otherwise a hop to the side
    let kx = THREE.MathUtils.clamp(x + (x > 0 ? -0.9 : 0.9), -xm, xm), ky = y + 1.3;
    if (type === 'ring') { kx = x; ky = y + 3.0; }
    else if (type === 'ice' && sig === 'ice') { kx = x; ky = y + 2.6; }
    else if (risky && risky.type === sig) { kx = risky.grp.position.x; ky = risky.grp.position.y + (sig === 'hot' ? 0.95 : sig === 'alien' ? 1.2 : 0.75); }
    else if (newHole) { kx = THREE.MathUtils.clamp(newHole.sp.position.x + Math.sign(x - newHole.sp.position.x || 1) * 0.9, -xm, xm); ky = newHole.sp.position.y; }
    jumpStar(kx, ky, 'key'); g.keyOut = true;
  }
  else if (intro === 'crumble' && risky) jumpStar(risky.grp.position.x, risky.grp.position.y + 0.75);   // shown with a reward on top
  else if (Math.random() < L.star) {
    // half of the stars hang right above a trap: a tempting risk
    if (risky && risky.type === 'crumble' && Math.random() < 0.55) jumpStar(risky.grp.position.x, y + 0.75);
    else if (risky && risky.type === 'hot' && lv.idx > 3 && Math.random() < 0.4) jumpStar(risky.grp.position.x, y + 0.85);
    else jumpStar(THREE.MathUtils.clamp(x + (Math.random() - 0.5) * 1.8, -xm, xm), y - gap * 0.5 + 0.4);
  }
  // the bubble is the only rescue: rare, on its own schedule, never while he carries one or one is on screen
  if (rowAlt >= g.bubbleAt && type !== 'orbit' && !g.bubble && !g.bonuses.some((bo) => bo.kind === 'bubble')) {
    jumpBonus(THREE.MathUtils.clamp(x + (Math.random() - 0.5) * 0.8, -xm, xm), y + 0.9, 'bubble');
    g.bubbleAt = rowAlt + JUMP.bubble[1] * (1 + Math.random() * 0.5);
  } else if (!calm && Math.random() < L.bonus) jumpBonus(THREE.MathUtils.clamp(x + (Math.random() - 0.5) * 1.4, -xm, xm), y + 0.9);
  g.nextY = y; g.lastX = x; g.lastType = type;
}
// the wave of the supernova: a wall of light that climbs from below. Its front is at g.waveAlt (metres)
const waveTex = spriteTex((x, s) => { const g = x.createLinearGradient(0, 0, 0, s); g.addColorStop(0, 'rgba(255,220,140,0)'); g.addColorStop(0.1, 'rgba(255,200,110,.35)'); g.addColorStop(0.16, 'rgba(255,240,190,.95)'); g.addColorStop(0.24, 'rgba(255,255,255,1)'); g.addColorStop(1, 'rgba(255,255,255,1)'); x.fillStyle = g; x.fillRect(0, 0, s, s); }, 128);
let waveSp = null;
function stepWave(dt, b, L, d) {
  const g = game;
  const on = !!L.nova && !g.supernova; if (on !== hud.nova) { hud.nova = on; document.body.classList.toggle('nova', on); }   // (the dark strip under the hint line would hide the wave)
  if (!on) { if (waveSp && waveSp.visible) { waveSp.material.opacity -= dt * 1.5; waveSp.position.y -= dt * 3; if (waveSp.material.opacity <= 0) waveSp.visible = false; } return; }
  if (g.waveAlt == null) g.waveAlt = g.alt - NOVA.lead;
  g.waveAlt = Math.max(g.waveAlt + lvl(NOVA.wave, d) * dt, g.alt - NOVA.max);
  if (g.invuln > 0) g.waveAlt = Math.min(g.waveAlt, g.alt - 5);   // just rescued by the bubble: the wave gives him room
  if (!waveSp) { waveSp = new THREE.Sprite(new THREE.SpriteMaterial({ map: waveTex, transparent: true, depthWrite: false })); waveSp.scale.set(16, 10, 1); waveSp.renderOrder = 5; scene.add(waveSp); }
  const y = g.baseY + g.waveAlt - g.scrolled;   // the front on screen; the sprite's front line is 16% from its top
  waveSp.visible = true; waveSp.material.opacity = 1; waveSp.position.set(0, y - 5 + 1.6, 0.6);
  for (let k = 0, n = emit(0.9, dt); k < n; k++) { const f = spawnFaller(rnd(-b.xm - 1, b.xm + 1), y + rnd(-0.1, 0.4), 0.5, new THREE.Vector3(rnd(-0.3, 0.3), rnd(1, 2.6), 0), rnd(0.04, 0.08), rnd(0.4, 0.8)); f.material.color.set(Math.random() < 0.5 ? 0xffffff : 0xffd98a); }
  const gap = g.alt - g.waveAlt;
  if (gap < NOVA.close && g.clock > (g.waveWarn || 0)) { g.waveWarn = g.clock + 2.5; gSay('Волна близко — выше!', 800); sfx.play('warn'); }
  if (gap < -0.15 && g.rocket <= 0) {
    if (g.bubble) { useBubble('волны'); g.waveAlt = g.alt - 7; g.vy = JUMP.v0 * 1.3; setTakeoff(-Infinity); g.invuln = 1.2; }
    else { pivot.position.y = b.bot - 1; jumpLose('Сверхновая догнала Ори.'); }
  }
}
function spawnBolt() {
  const g = game, b = jumpBounds(), first = !g.boltSeen;
  const x = THREE.MathUtils.clamp(pivot.position.x + rnd(-0.45, 0.45), -b.xm, b.xm), H = b.top - b.bot + 1;
  const col = new THREE.Sprite(new THREE.SpriteMaterial({ map: boltColTex, color: 0xcbbdff, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 }));
  col.scale.set(0.85, H, 1); col.position.set(x, (b.top + b.bot) / 2, 0.3); scene.add(col);
  // the first one is shown in a safe form: a much longer warning, with a line about it
  if (first) { g.boltSeen = true; gSay('Светящийся столб — туда ударит молния. Уйди в сторону', 2600, true); }
  sfx.play('warn');
  g.bolts.push({ x, col, warn: first ? 2.0 : 1.15, strike: 0, sp: null });
}
function removeBolt(i) { const bo = game.bolts[i]; scene.remove(bo.col); bo.col.material.dispose(); if (bo.sp) { scene.remove(bo.sp); bo.sp.material.dispose(); } game.bolts.splice(i, 1); }
function stepBolts(dt) {
  const g = game;
  for (let i = g.bolts.length - 1; i >= 0; i--) {
    const bo = g.bolts[i];
    if (bo.warn > 0) {   // the column glows and flickers, brighter just before the strike
      bo.warn -= dt; bo.col.material.opacity = 0.34 + 0.26 * Math.abs(Math.sin(bo.warn * 18)) + (bo.warn < 0.3 ? 0.3 : 0);
      if (bo.warn > 0) continue;
      bo.strike = 0.24; bo.col.material.color.set(0xffffff); bo.col.material.opacity = 0.9;
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: boltTex[Math.floor(Math.random() * boltTex.length)], transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
      sp.scale.set(1.2, bo.col.scale.y, 1); sp.position.set(bo.x, bo.col.position.y, 0.35); scene.add(sp); bo.sp = sp;
      flash.style.opacity = 0.28; setTimeout(() => { flash.style.opacity = 0; }, 90); sfx.play('shatter');
      const off = Math.abs(pivot.position.x - bo.x);
      if (off < 0.4 && !(g.invuln > 0) && g.rocket <= 0) {
        if (g.bubble) useBubble('молнии');
        else {   // struck: thrown down and aside, no steering for a moment (as a meteor does)
          g.vy = Math.min(g.vy, 0.5); setTakeoff(-Infinity); g.knock = 0.45; g.knockV = (pivot.position.x >= bo.x ? 1 : -1) * 3.5; g.spinT = 0.45; g.invuln = 1.2; g.hits++; g.series = 0; g.dashReady = false; setSeries();
          try { navigator.vibrate && navigator.vibrate(80); } catch {}
          gSay('Молния ударила в Ори!', 1100); sfx.play('meteor');
        }
      } else if (off < 0.85 && g.rocket <= 0) nearMiss(toScreen(new THREE.Vector3(pivot.position.x, pivot.position.y + 1.5, 0)));
      continue;
    }
    bo.strike -= dt; const k = Math.max(0, bo.strike / 0.24); bo.col.material.opacity = 0.9 * k; if (bo.sp) bo.sp.material.opacity = k;
    if (bo.strike <= 0) removeBolt(i);
  }
}
function spawnJumpMeteor() {
  const g = game, b = jumpBounds(), dir = Math.random() < 0.5 ? 1 : -1, { extra } = jumpLevel();
  const y = b.bot + (b.top - b.bot) * (0.45 + Math.random() * 0.4);
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: meteorTex, transparent: true, depthWrite: false }));
  sp.scale.setScalar(0.38); sp.position.set(dir > 0 ? -b.xm - 1.4 : b.xm + 1.4, y, 0.3); sp.visible = false; scene.add(sp);
  // a second of warning: a red pulse at the edge it will come from
  const ring = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  ring.material.color.set(0xff0032); ring.scale.setScalar(0.6); ring.position.set(dir > 0 ? -b.xm - 0.15 : b.xm + 0.15, y, 0.35); scene.add(ring);
  sfx.play('warn');
  const first = !g.meteorSeen;   // the first one is shown in a safe form: a longer warning, a slower flight
  if (first) { g.meteorSeen = true; gSay('Красная вспышка на краю — сейчас пролетит метеор', 2400, true); }
  g.meteors.push({ sp, ring, t: 0, warn: first ? 1.6 : 1.0, vx: dir * (1.5 + Math.random() * 0.7 + extra * 0.1) * (first ? 0.6 : 1), vy: -0.2, spin: (Math.random() - 0.5) * 4 });
}
function jumpBounce(v, anim = true) {
  const g = game; g.vy = v; g.slip = 0; g.airT = 0; g.airDur = 2 * v / JUMP.g;   // flight time back to the same height
  g.earV += 3;   // the push-off flings the ears back
  // takeoff: the clip's push-off at a slightly different speed each time, a big bounce takes longer
  if (anim) play('leap', { fade: 0.05, speed: v > JUMP.v0 * 1.2 ? 1.0 : 1.2 + Math.random() * 0.3 });
  if (anim) sfx.play(v < JUMP.v0 * 0.9 ? 'weak' : 'bounce', v / JUMP.v0);
}
function jumpScroll(dy) {   // the world moves down instead of the camera moving up
  const g = game;
  for (const p of g.plats) p.grp.position.y -= dy;
  for (const s of g.stars) { s.position.y -= dy; if (s.userData.glow) s.userData.glow.position.y -= dy; }
  for (const m of g.meteors) { m.sp.position.y -= dy; if (m.ring) m.ring.position.y -= dy; }
  for (const b of g.bonuses) b.sp.position.y -= dy;
  for (const h of g.holes) { h.sp.position.y -= dy; if (h.ring) h.ring.position.y -= dy; }
  for (const f of fallers) f.position.y -= dy;
  pivot.position.y -= dy; g.nextY -= dy; g.takeoffY -= dy; g.scrolled += dy; g.dayY -= dy;
  starsFar.position.y -= dy * 0.03; starsNear.position.y -= dy * 0.08;
}
function jumpStart() {
  const g = game;
  Object.assign(g, { plats: [], bonuses: [], holes: [], vy: 0, slip: 0, alt: 0, best: 0, scrolled: 0, level: 0, bank: 0, saves: 0, series: 0, bestSeries: 0,
    bubbleAt: JUMP.bubble[0] + Math.random() * 12, hop: 1, nearT: 0, tipQ: [], recAt: getRecord(), recTip: false, recPassed: false, litTip: false, litDone: false, result: '',
    dashReady: false, face: Math.random() < 0.5 ? -1 : 1, spinT: 0, rocket: 0, bubble: false, magnet: 0, wind: 0, windT: 0, gustIn: 99, dayStar: false, dayShine: false, supernova: false, waveAlt: null, waveWarn: 0, holeRecent: 0, perfects: 0,
    knock: 0, knockV: 0, scald: 0, vx: 0, rowN: 0, bolts: [], boltIn: 2, boltSeen: false, beltDir: Math.random() < 0.5 ? -1 : 1, orbitIn: 4, tipped: {}, genStage: 0, keyAt: 3, keyOut: false, gustSeen: false, gustOn: false, windAmp: 2.3, introLeft: 0, intro: [], lastType: 'planet', meteorSeen: false, falling: false, fallT: 0 });
  g.takeoffY = g.baseY;
  g.nextY = g.baseY; g.lastX = 0; g.meteorIn = 99; g.dayY = g.baseY + JUMP.goal; g.dayX = 0;
  g.skinZone = 0; makePlatform('ground', 0, g.baseY);
  const b = jumpBounds(); while (g.nextY < b.top + 2) jumpRow();
  // the star of the day: always visible (as a light at the top) until Ori reaches it
  const day = makeHeroStar(); scene.add(day); g.day = day;
  hud.recShow = null; hud.recY = null; hud.gateY = null; hud.gateN = null; setZone(0); gLvl.textContent = levelTitle(0);
  if (!g.bubbleSp) { g.bubbleSp =new THREE.Sprite(new THREE.SpriteMaterial({ map: bubbleTex, transparent: true, depthWrite: false })); g.bubbleSp.scale.setScalar(1.7); }
  scene.add(g.bubbleSp); g.bubbleSp.visible = false;
  setSeries(); updateScore();
}
function jumpCleanup() {
  const g = game; setZone(-1);
  for (let i = (g.plats || []).length - 1; i >= 0; i--) removePlatform(i);
  for (let i = (g.bolts || []).length - 1; i >= 0; i--) removeBolt(i);
  for (const b of g.bonuses || []) scene.remove(b.sp); for (const h of g.holes || []) { scene.remove(h.sp); if (h.ring) scene.remove(h.ring); }
  g.bonuses = []; g.holes = [];
  if (g.day) { scene.remove(g.day); g.day = null; }
  if (g.bubbleSp) g.bubbleSp.visible = false;
  if (waveSp) waveSp.visible = false;
  document.body.classList.remove('nova'); hud.nova = false;
}
// the height he pushed off from: below it (minus a little) nothing can catch him any more
function setTakeoff(y) { const g = game; g.takeoffY = y; g.falling = false; g.fallT = 0; }
// where a paw touches a planet at a horizontal offset dx from its centre (a sphere, flat under the paws' width)
function surfaceAt(p, dx) { const r = p.top + 0.02, e = Math.max(0, Math.abs(dx) - JUMP.foot); return Math.sqrt(Math.max(0, r * r - e * e)) - 0.02; }
function jumpLose(why) {
  const g = game;
  try { navigator.vibrate && navigator.vibrate(90); } catch {}
  g.series = 0; g.dashReady = false; setSeries();
  // no bubble: the fall ends the run
  if (!g.bubble) { sfx.play('lose'); gSay(`${why ? why + ' ' : ''}Забег окончен`, 1800); g.playing = false; startFinale(); return; }
  // the bubble catches him once: a lime planet comes up under him and he bounces back into the climb
  g.bubble = false; g.bubbleSp.visible = false; g.saves++; updateScore();
  const b = jumpBounds(), y = b.bot + 1.0;
  // the rescue planet goes where nothing nasty hangs right above it (a hot dwarf there made an endless loop)
  const blocked = (x) => g.plats.some((q) => q.alive && (q.type === 'hot' || q.type === 'crumble' || q.type === 'alien') && Math.abs(q.grp.position.x - x) < 1.0 && q.grp.position.y > y && q.grp.position.y < y + 3.6)
    || g.holes.some((h) => Math.abs(h.sp.position.x - x) < 1.3 && h.sp.position.y > y && h.sp.position.y < y + 4);
  // ...and never on top of another planet
  let x = THREE.MathUtils.clamp(pivot.position.x, -b.xm, b.xm);
  const nearest = (okFn) => { let best = null; for (let c = -b.xm; c <= b.xm + 1e-6; c += 0.2) if (okFn(c) && (best === null || Math.abs(c - x) < Math.abs(best - x))) best = c; return best; };
  const spot = nearest((c) => !blocked(c) && spotFree(c, y)) ?? nearest((c) => spotFree(c, y));
  if (spot !== null) x = spot; else clearSpot(x, y);
  const p = makePlatform('rescue', x, y);
  pivot.position.set(x, p.grp.position.y + p.top, 0); setTakeoff(pivot.position.y); pivot.rotation.z = 0; jumpBounce(JUMP.v0 * 1.15); g.invuln = 1.5;
  meteorBurst(new THREE.Vector3(x, p.grp.position.y + 0.6, 0.3), 12, false); gPop('Пузырь!', toScreen(p.grp.position)); sfx.play('bubble'); sfx.play('rescue');
  gSay(`${why ? why + ' ' : ''}Пузырь подхватил Ори`, 1800);
}
function jumpCollectStar(i) {
  const g = game, s = g.stars[i], at = toScreen(s.position);
  if (catchLick.action) catchLick.action.reset().setEffectiveWeight(1).play();
  const key = s.userData.kind === 'key';
  removeGameStar(i, true);
  const n = key ? 3 : g.series >= 3 ? 2 : 1; g.bank += n; g.wag = key ? 1.5 : 0.7; g.caught++;
  if (!key) { gPop(`+${n} ★`, at); updateScore(); sfx.play('star', n); return; }
  // a key star: one point of the constellation. The next one is spaced so that all of them fit below the goal
  g.keyOut = false; lightStars(1, at);
  // (aimed at 80 m when none is missed: rows are generated a few metres ahead, and a miss or two must still fit below 100 m)
  const left = g.need - g.lit, sp = 0.8 * JUMP.goal / g.need;
  g.keyAt = g.alt + THREE.MathUtils.clamp((0.8 * JUMP.goal - g.alt) / Math.max(1, left), 4, sp);
  gPop(`Созвездие ${g.lit}/${g.need}`, at); updateScore(); sfx.play('star', 2); sfx.play('perfect');
}
// every key star lights one point of the constellation
function lightStars(n, from) {
  const g = game;
  for (let k = 0; k < n && g.lit < g.need; k++) { const idx = g.lit++; flyToSky(from, idx); }
  if (g.lit < g.need || g.litDone) return;
  g.litDone = true; sfx.play('level');
  // completed after the star of the day was caught: it lights up now
  if (g.dayStar && !g.dayShine) { g.dayShine = true; gEl.classList.add('done'); gSay('Созвездие собрано — звезда дня засияла!', 2200); }
  else if (!g.dayStar) gSay('Созвездие собрано! Теперь — к звезде дня', 1800);
}
// a black hole takes a lit point back out of the constellation (another key star will come for it)
function unlightStars(n) {
  const g = game; let k = 0;
  for (; k < n && g.lit > 0; k++) { g.lit--; unlightUnit(g.lit); }
  if (g.lit < g.need) g.litDone = false;
  return k;
}
// tips wait until the line on screen has been read (a level title, a remark), then show one by one
function tipLater(key, text, ms = 2600) { const g = game; if (g.tipped[key]) return; g.tipped[key] = true; g.tipQ.push([text, ms]); }
function stepTips() { const g = game; if (g.tipQ.length && g.clock > (g.sayUntil || 0)) { const [text, ms] = g.tipQ.shift(); gSay(text, ms, true); } }
// "on a hair": landing on the very edge of a planet, or a meteor flying past close, is worth a star
function nearMiss(at) {
  const g = game; if (g.clock < g.nearT) return; g.nearT = g.clock + 1.5;
  g.bank++; gPop('На волоске! +1 ★', at); sfx.play('star', 1); updateScore();
}
// what a landing kicks up depends on the planet: snow off a frozen one (and its cap squashes), sparks and smoke
// off a charred one, a low cloud of dust off an asteroid (which wobbles), a ring of motes off a violet one
function landFx(p, x, top) {
  const puff = (n, col, vx, vy, size, life, fin = 0) => { for (let k = 0; k < n; k++) { const f = spawnFaller(x + rnd(-0.16, 0.16), top + rnd(0, 0.06), 0.25, new THREE.Vector3(vx(), vy(), 0), rnd(size[0], size[1]), rnd(life[0], life[1])); f.material.color.set(Array.isArray(col) ? col[Math.floor(Math.random() * col.length)] : col); f.userData.fin = fin; } };
  if (p.skin === 2) {
    puff(16, [0xffffff, 0xdff2ff], () => rnd(-1.5, 1.5), () => rnd(0.3, 1.5), [0.05, 0.09], [0.35, 0.6]);        // a spray of snow
    puff(8, 0xffffff, () => rnd(-0.5, 0.5), () => rnd(-0.35, -0.1), [0.035, 0.05], [0.9, 1.5], 0.15);              // flakes sliding off the cap
    if (p.cap) p.capSq = 1;
  } else if (p.skin === 3) {
    puff(14, [0xff7a2a, 0xffc24a, 0xff4a1c], () => rnd(-1.7, 1.7), () => rnd(0.5, 2.0), [0.035, 0.065], [0.3, 0.55]);   // sparks
    puff(7, 0x8f8088, () => rnd(-0.45, 0.45), () => rnd(0.35, 0.8), [0.1, 0.17], [0.8, 1.3], 0.15);                    // a puff of smoke
  } else if (p.skin === 1) {
    puff(16, [0xb9a79a, 0x8d8290, 0xc9b6a2], () => rnd(-1.5, 1.5), () => rnd(0, 0.45), [0.08, 0.15], [0.5, 0.9], 0.08);   // dust along the surface
    puff(5, 0x6f6a70, () => rnd(-1.0, 1.0), () => rnd(0.8, 1.6), [0.04, 0.06], [0.4, 0.6]);                              // pebbles
    p.spin = (x > p.grp.position.x ? -1 : 1) * rnd(1.2, 2.2);
  } else if (p.skin === 4) {
    for (let k = 0; k < 18; k++) { const a = k / 18 * Math.PI * 2, f = spawnFaller(x + Math.cos(a) * 0.12, top + 0.05 + Math.sin(a) * 0.05, 0.25, new THREE.Vector3(Math.cos(a) * 1.5, Math.sin(a) * 0.6, 0), 0.05, 0.5); f.material.color.set(k % 3 ? 0xb39cff : 0xd9f38b); }   // a ring spreading out
  } else if (p.skin === 9) {
    puff(12, [0xffffff, 0x9fe8ff, 0xffd08a], () => rnd(-1.7, 1.7), () => rnd(0.3, 1.4), [0.025, 0.05], [0.25, 0.5]);   // sparks off the metal
  } else if (p.skin === 8) {
    puff(12, [0xffffff, 0xd6daf8, 0xcab8ff], () => rnd(-0.9, 0.9), () => rnd(0.1, 0.7), [0.1, 0.18], [0.6, 1.0], 0.12);   // wisps
    p.sq = 1; p.flickT = 0.5;
  } else if (p.skin === 7) {
    puff(12, [0xffffff, 0xffe2b0, 0xcfe0ff], () => rnd(-1.6, 1.6), () => rnd(0.1, 0.8), [0.03, 0.06], [0.35, 0.6]);   // chips of ice
    p.dip = 1;
  } else if (p.skin === 6) {
    puff(12, [0x8cff9a, 0xd9f38b, 0xffffff], () => rnd(-1.2, 1.2), () => rnd(0.3, 1.3), [0.04, 0.07], [0.35, 0.6]);   // spores
  } else if (p.skin === 0) {
    puff(8, [0xffffff, 0xd9f38b], () => rnd(-1.0, 1.0), () => rnd(0.2, 0.9), [0.03, 0.05], [0.3, 0.5]);
  }
}
function jumpLand(p, top) {
  const g = game, dxp = pivot.position.x - p.grp.position.x;
  pivot.position.y = top; setTakeoff(top); landFx(p, pivot.position.x, top);
  if (p.type === 'ice') {   // a comet takes three landings: cracks, more cracks, then it shatters. Slippery: he keeps sliding a little
    p.hp = (p.hp ?? 3) - 1;   // (the slide itself is set after jumpBounce below, which resets slip)
    if (p.hp > 0) {
      p.body.material.emissiveMap = iceCracks[3 - p.hp]; p.body.material.emissive.set(0xffffff); p.body.material.emissiveIntensity = 0.9; p.body.material.needsUpdate = true;
      meteorBurst(new THREE.Vector3(pivot.position.x, top, 0.25), 4, false);
      if (p.hp === 2 && !p.bait) { p.bait = true; const bx = jumpBounds().xm; jumpStar(THREE.MathUtils.clamp(p.grp.position.x + (p.grp.position.x > 0 ? -0.85 : 0.85), -bx, bx), top + 0.45); }   // a star appears: worth one more landing?
      if (!g.tipped.ice) { g.tipped.ice = true; gSay(INTRO_TIP.ice, 2400, true); } else gSay(p.hp === 2 ? 'Лёд треснул' : 'Лёд вот-вот расколется!', 700);
      sfx.play('crack');
    } else { gSay('Лёд раскололся!', 800); sfx.play('shatter'); }
  }
  const perfect = Math.abs(dxp) < JUMP.perfect && p.type !== 'ground';
  if (perfect) {
    g.series++; g.perfects++; g.bestSeries = Math.max(g.bestSeries, g.series);
    const refill = !g.hop; if (refill) { g.hop = 1; updateScore(); }   // a perfect landing refills the hop
    gPop(refill ? 'Идеально! ↑ подскок' : 'Идеально!', toScreen(new THREE.Vector3(pivot.position.x, top + 1.5, 0))); sfx.play('perfect');
    if (g.series % 5 === 0) g.dashNow = true;
  } else if (p.type !== 'ground') {
    g.series = 0;
    if (Math.abs(dxp) > p.landW * JUMP.edge && p.type !== 'rescue') nearMiss(toScreen(new THREE.Vector3(pivot.position.x, top + 1.5, 0)));
  }
  setSeries();
  let v = JUMP.v0;
  if (p.type === 'ring') { v = JUMP.v0 * JUMP.boost; sfx.play('ring'); }
  if (p.skin === 8) v = JUMP.v0 * CLOUD.spring;   // a cloud gives way and springs him higher
  g.squash = 1; g.earV += 4;   // landing: a short squash, the ears swing on past their rest, then the stretch of the push-off
  if (g.dashNow) {
    v = Math.max(v, JUMP.v0 * JUMP.dash); g.dashNow = false; g.spinT = 0.7; gSay('5 идеальных — рывок!', 900); sfx.play('dash');
    for (let k = 0; k < 14; k++) { const a = Math.random() * Math.PI; const f = spawnFaller(pivot.position.x, top, 0.2, new THREE.Vector3(Math.cos(a) * 1.4, Math.sin(a) * 1.2, 0), 0.06, 0.5); f.material.color.set(0xd9f38b); }
  }
  if (p.type === 'ring') for (let k = 0; k < 12; k++) { const a = Math.random() * Math.PI; const f = spawnFaller(p.grp.position.x, top, 0.2, new THREE.Vector3(Math.cos(a) * 1.2, Math.sin(a) * 1.5, 0), 0.06, 0.5); f.material.color.set(0xd9f38b); }
  jumpBounce(v);
  if (p.nova && p.alive) {   // the supernova: the planet burns away under him, there is no second landing
    p.alive = false; p.gone = 0.001; p.novaBurn = true;
    for (let k = 0; k < 14; k++) { const a = Math.random() * Math.PI * 2; const f = spawnFaller(p.grp.position.x + Math.cos(a) * 0.3, p.grp.position.y + Math.sin(a) * 0.3, 0.2, new THREE.Vector3(Math.cos(a) * 1.2, Math.sin(a) * 1.2 + 0.5, 0), rnd(0.05, 0.09), rnd(0.4, 0.7)); f.material.color.set(Math.random() < 0.5 ? 0xffe9a8 : 0xff7a2a); }
  }
  if (p.wrap) g.slip = p.vx * 0.9;   // the turning ring carries him along
  if (p.skin === 9) {   // a satellite holds only in the middle: out on a panel it tips and slides him off that way
    const k = dxp / p.landW, over = Math.max(0, Math.abs(k) - SAT.hold) / (1 - SAT.hold);
    g.slip = Math.sign(k) * over * SAT.slide + Math.sin(p.rot) * -1.6 * Math.sign(Math.cos(p.rot)); p.tiltV -= k * 7;
    if (over > 0.35) gSay('Панель накренилась!', 700);
  }
  if (p.type === 'ice') g.slip = THREE.MathUtils.clamp(g.vx * 0.35, -1.4, 1.4);   // slippery: he keeps sliding a little
  // bouncing in place: now and then he turns to look the other way
  if (Math.abs(g.targetX - pivot.position.x) < 0.15 && Math.random() < 0.4) g.face = -(g.face || 1);
  if (p.type === 'ice' && p.hp <= 0) { p.alive = false; p.gone = 0.001; meteorBurst(new THREE.Vector3(p.grp.position.x, top, 0.25), 12, false); }
  return true;
}
// the previous record as a dashed line across the screen at its height: "3 m to go" as he nears it, a cheer when he passes
function stepRecordLine() {
  const g = game, rec = g.recAt;
  let show = false;
  if (rec >= 5 && !g.recPassed) {
    if (g.best > rec) {
      g.recPassed = true; gPop('Новый рекорд!', toScreen(new THREE.Vector3(pivot.position.x, pivot.position.y + 1.3, 0))); sfx.play('level');
    } else {
      // shown only below the header (logos, ✕) and above the hint line
      const y = Math.round(toScreen(_v.set(0, g.baseY + rec - g.scrolled, 0)).y);
      if (y > 130 && y < innerHeight - 90) {
        show = true;
        if (y !== hud.recY) { hud.recY = y; gRecLine.style.transform = `translate(-50%, ${y}px)`; }
      }
      const left = Math.ceil(rec - g.best);
      if (!g.recTip && left <= 5) { g.recTip = true; gSay(`Ещё ${left} м до рекорда!`, 1600); }   // > 1.2 s: shown even over a tip
    }
  }
  if (show !== hud.recShow) { hud.recShow = show; gRecLine.classList.toggle('show', show); if (show) gRecLabel.textContent = `Рекорд ${fmtScore(rec)} м`; }
}
const gRecLine = $('#gRecLine'), gRecLabel = $('#gRecLine span');
function useBubble(what) { const g = game; g.bubble = false; g.bubbleSp.visible = false; sfx.play('bubble'); gSay(`Пузырь спас от ${what}!`, 900); meteorBurst(pivot.position.clone().add(new THREE.Vector3(0, 0.6, 0.2)), 10, false); }
function jumpStep(dt) {
  const g = game, b = jumpBounds();
  g.clock = (g.clock || 0) + dt;
  if (g.invuln > 0) g.invuln -= dt; if (g.wag > 0) g.wag -= dt;
  // steering: follow the finger with a capped speed (+ wind gusts, + sliding off ice)
  // wind carries him off course: the point he flies to is shifted downwind (about a planet's width in a full gust),
  // so the finger has to lead into the wind. (A plain push was eaten by the steering: he kept up with the finger anyway.)
  const tx = THREE.MathUtils.clamp(THREE.MathUtils.clamp(g.targetX, -b.xm - 0.6, b.xm + 0.6) + (g.wind || 0) * JUMP.drift, -b.xm, b.xm), dx = tx - pivot.position.x;
  const x0 = pivot.position.x;
  if (g.knock > 0) { g.knock -= dt; pivot.position.x += g.knockV * dt; g.knockV *= Math.max(0, 1 - 4 * dt); }   // knocked: the finger is ignored
  else { const steer = g.scald > 0 ? 0.5 : g.falling ? 0.3 : 1; pivot.position.x += Math.sign(dx) * Math.min(Math.abs(dx), JUMP.speed * steer * dt, Math.abs(dx) * 12 * steer * dt); }
  if (g.scald > 0) g.scald -= dt;
  // body language of the flight: bank into the turn, squash on landing, stretch on the push-off, somersault off a ring
  const vx = dt > 0 ? (pivot.position.x - x0) / dt : 0; g.vx = vx;
  g.lean += (THREE.MathUtils.clamp(-vx * 0.05, -0.22, 0.22) - g.lean) * Math.min(1, 6 * dt);
  g.airT += dt; if (g.squash > 0) g.squash = Math.max(0, g.squash - dt / 0.16);
  const sq = g.playing ? Math.sin(Math.PI * g.squash) : 0;
  const st = g.playing && g.vy > 0 ? Math.min(1, g.vy / JUMP.v0) * Math.max(0, 1 - g.airT / 0.3) : 0;
  pivot.scale.set(1 + 0.11 * sq - 0.05 * st, 1 - 0.22 * sq + 0.11 * st, 1 + 0.11 * sq - 0.05 * st);
  if (g.playing) pivot.position.x = THREE.MathUtils.clamp(pivot.position.x + (g.wind + g.slip) * dt, -b.xm - 0.3, b.xm + 0.3);
  if (Math.abs(dx) > 0.15) g.face = Math.sign(dx);
  let wantYaw = !g.playing || g.rocket > 0 ? 0 : (g.face || 1) * (Math.abs(dx) > 0.15 ? 0.8 : 0.5);
  if (g.spinT > 0) { g.spinT -= dt; wantYaw += (1 - g.spinT / 0.7) * Math.PI * 2 * (g.face || 1); pivot.rotation.y = wantYaw; }
  else { pivot.rotation.y = Math.atan2(Math.sin(pivot.rotation.y), Math.cos(pivot.rotation.y)); let dyw = wantYaw - pivot.rotation.y; dyw = Math.atan2(Math.sin(dyw), Math.cos(dyw)); pivot.rotation.y += dyw * Math.min(1, 7 * dt); }
  pivot.rotation.x = 0;
  pivot.rotation.z = g.playing ? g.lean - (g.wind || 0) * 0.085 + (g.falling ? -(g.face || 1) * Math.min(1.1, g.fallT * 2.2) : 0) : 0;
  pivot.position.z += (0 - pivot.position.z) * ease(0.12, dt);
  if (!g.playing) {
    // before the start / after the run: stand (or drop) onto the pedestal
    if (pivot.position.y > g.baseY + 0.001 || g.vy > 0) { g.vy -= JUMP.g * dt; pivot.position.y += g.vy * dt; if (pivot.position.y <= g.baseY) { pivot.position.y = g.baseY; g.vy = 0; play('idle', { fade: 0.2 }); } }
    else if (pivot.position.y < g.baseY - 0.001) pivot.position.y = Math.min(g.baseY, pivot.position.y + (g.baseY - pivot.position.y) * Math.min(1, 8 * dt) + 0.3 * dt);
    pedestal.position.set(pivot.position.x, g.baseY + 0.005, 0);
    return;
  }
  const body = pivot.position.clone(); body.y += 0.55;
  if (g.clock > 7) tipLater('hop', 'Тапни в полёте — подскок вверх. Заряд даёт идеальное приземление');
  stepTips(); stepRecordLine(); stepGate(); stepZone(dt, b);
  // rocket: steady flight up
  if (g.rocket > 0) {
    g.rocket -= dt; g.vy = 9;
    for (let k = 0, n = emit(2, dt); k < n; k++) { const f = spawnFaller(pivot.position.x + (Math.random() - 0.5) * 0.2, pivot.position.y, 0.2, new THREE.Vector3((Math.random() - 0.5) * 0.6, -2.5, 0), 0.07 + Math.random() * 0.05, 0.4); f.material.color.set(Math.random() < 0.5 ? 0xff0032 : 0xffb347); }
    if (g.rocket <= 0) { g.vy = 4; setTakeoff(-Infinity); }   // after the flight any planet on screen below him will do
  }
  // gravity and landings
  const y0 = pivot.position.y; if (g.rocket <= 0) g.vy -= JUMP.g * (g.falling ? 1.5 : 1) * dt; pivot.position.y += g.vy * dt;
  // a miss: he dropped below the planet he pushed off from. No second chance on anything lower
  if (!g.falling && g.vy < 0 && g.rocket <= 0 && pivot.position.y < g.takeoffY - JUMP.missDrop) {
    g.falling = true; g.fallT = 0; g.series = 0; setSeries(); gSay('Промах!', 1000); sfx.play('weak');
  }
  if (g.falling) g.fallT += dt;
  if (g.vy < 0 && g.rocket <= 0 && !g.falling) {
    for (const p of g.plats) {
      if (!p.alive) continue;
      const dxp = pivot.position.x - p.grp.position.x, ground = p.type === 'ground';
      if (Math.abs(dxp) >= (ground ? p.w + 0.28 : p.landW)) continue;   // paws must be over the planet, not over the air beside it
      const top = p.grp.position.y + (ground || p.flat ? p.top : surfaceAt(p, dxp));
      if (top < g.takeoffY - JUMP.missDrop || (!ground && top < b.bot + 0.3)) continue;   // lower than the take-off, or off screen: not a landing
      if (p.rotV && Math.abs(Math.sin(p.rot)) > 0.45) continue;   // a spinning satellite standing on edge is not a surface
      if (y0 >= top - 0.02 && pivot.position.y <= top) {
        if (p.type === 'crumble') {   // a cracked meteorite holds exactly one push-off, then bursts and spills its ore: three stars
          jumpLand(p, top); p.alive = false; p.gone = 0.001; meteorBurst(new THREE.Vector3(p.grp.position.x, top, 0.2), 12, true);
          const px = p.grp.position.x; jumpStar(px, top + 1.1); jumpStar(px - 0.55, top + 0.7); jumpStar(px + 0.55, top + 0.7);
          if (Math.random() < 0.25) jumpBonus(px, top + 1.7);
          gSay('Метеорит раскололся — руда!', 900); sfx.play('shatter'); try { navigator.vibrate && navigator.vibrate(40); } catch {}
          break;
        }
        if (p.type === 'hot' && !g.bubble) {   // a red dwarf: scalded paws, he leaps off at once but sideways, and steers badly for a moment
          if (p.steam > 0) continue;   // still steaming after the last touch: not a surface right now
          pivot.position.y = top; setTakeoff(top); g.series = 0; g.dashReady = false; setSeries();
          jumpBounce(JUMP.v0 * 0.95); g.squash = 1; g.earV += 6;
          g.slip = (Math.random() < 0.5 ? -1 : 1) * (2.6 + Math.random() * 1.6); g.scald = 0.7; p.steam = 1.2;
          for (let k = 0; k < 12; k++) { const a = Math.random() * Math.PI; const f = spawnFaller(pivot.position.x, top, 0.2, new THREE.Vector3(Math.cos(a) * 1.2, Math.sin(a) * 1.2, 0), 0.06, 0.45); f.material.color.set(Math.random() < 0.5 ? 0xff4a1c : 0xffb347); }
          gSay('Ой, горячо! Лапы обожжены', 900); sfx.play('hot'); try { navigator.vibrate && navigator.vibrate(40); } catch {}
          break;
        }
        if (p.type === 'hot' && g.bubble) { pivot.position.y = top; setTakeoff(top); useBubble('жара'); jumpBounce(JUMP.v0); break; }
        if (p.occupied) {   // taken: the alien shoves him off to the side he came from. Not a fall by itself, but the series is gone
          pivot.position.y = top; setTakeoff(top);
          if (g.bubble) { useBubble('пришельца'); jumpBounce(JUMP.v0); break; }
          g.series = 0; g.dashReady = false; setSeries();
          jumpBounce(JUMP.v0 * 0.92); g.squash = 1; g.earV += 6;
          g.slip = (dxp >= 0 ? 1 : -1) * rnd(2.2, 3.0); p.shove = 1;
          for (let k = 0; k < 10; k++) { const a = Math.random() * Math.PI; const f = spawnFaller(pivot.position.x, top + 0.1, 0.25, new THREE.Vector3(Math.cos(a) * 1.3, Math.sin(a) * 1.1, 0), 0.05, 0.45); f.material.color.set(Math.random() < 0.6 ? 0x8cff9a : 0xd9f38b); }
          gSay('Занято! Пришелец отпихнул Ори', 900); gPop('Занято!', toScreen(new THREE.Vector3(p.grp.position.x, top + 1.0, 0)), true); sfx.play('weak'); try { navigator.vibrate && navigator.vibrate(40); } catch {}
          break;
        }
        if (jumpLand(p, top)) break;
      }
    }
  }
  if (g.slip) g.slip *= Math.max(0, 1 - 1.6 * dt);
  // scroll when Ori is in the upper part of the screen
  const line = b.bot + (b.top - b.bot) * 0.42;
  if (pivot.position.y > line) jumpScroll(pivot.position.y - line);
  g.alt = g.scrolled + (pivot.position.y - g.baseY); if (g.alt > g.best) g.best = g.alt;
  // levels
  const lv = jumpLevel();
  if (lv.n > g.level) {
    g.level = lv.n; const L = levelDef(lv.n); setZone(zoneOf(lv.n));
    if (lv.n === LAST + 1 && g.waveAlt != null && !g.supernova) {   // the whole super level is behind him: the second goal of the game
      g.supernova = true; flash.style.opacity = 0.7; setTimeout(() => { flash.style.opacity = 0; }, 220); sfx.play('day'); g.wag = 3;
      for (let k = 0; k < 40; k++) { const a = Math.random() * Math.PI * 2, r = 1.2 + Math.random() * 2.2; const f = spawnFaller(pivot.position.x, pivot.position.y + 0.6, 0.3, new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r, 0), rnd(0.06, 0.12), rnd(0.6, 1.1)); f.material.color.set(Math.random() < 0.5 ? 0xffe9a8 : 0xffffff); }
      gPop('Сверхновая пройдена!', toScreen(new THREE.Vector3(pivot.position.x, pivot.position.y + 1.6, 0))); g.tipQ.unshift(['Сверхновая позади — Ори несёт сверхновую звезду!', 2600]); updateScore();
    }
    gLvl.textContent = levelTitle(lv.n); gSay(levelTitle(lv.n), 1800); if (L.tip) g.tipQ.push([L.tip, 2200]);   // a lap says what it bends
    g.meteorIn = Math.min(g.meteorIn, 3); if (L.gust) g.gustIn = Math.min(g.gustIn, 2.5); sfx.play('level');
  }
  // the star of the day
  if (g.day) {
    const glowY = Math.min(g.dayY, b.top - 0.35), far = THREE.MathUtils.clamp((g.dayY - b.top) / 40, 0, 1);
    g.day.position.set(g.dayX, glowY, 0.2); g.day.rotation.z += dt * 1.5;
    g.day.userData.core.scale.setScalar(THREE.MathUtils.lerp(0.55, 0.22, far)); g.day.userData.glow.scale.setScalar(THREE.MathUtils.lerp(1.3, 0.6, far) * (1 + 0.08 * Math.sin(g.alt)));
    // near the goal the star drifts toward Ori; at 100 m it lands in his mouth wherever he is
    if (g.dayY < b.top) { g.dayX += (pivot.position.x - g.dayX) * Math.min(1, 2.5 * dt); }
    if (g.alt >= JUMP.goal - 0.2 || (g.dayY < b.top - 0.3 && Math.abs(body.x - g.dayX) < 1.0 && Math.abs(body.y - g.dayY) < 0.8)) {
      g.dayStar = true; g.dayShine = g.lit >= g.need;
      const m = mouthWorld(); scene.remove(g.day); g.day = null;
      if (catchLick.action) catchLick.action.reset().setEffectiveWeight(1).play();
      for (let k = 0; k < 30; k++) { const a = Math.random() * Math.PI * 2, r = 1.4 + Math.random() * 1.8; const s = spawnFaller(m.x, m.y, m.z, new THREE.Vector3(Math.cos(a) * r, 0.4 + Math.random() * 1.6, Math.sin(a) * r * 0.5), 0.06 + Math.random() * 0.08, 0.7); s.material.color.set(Math.random() < 0.45 ? 0xd9f38b : 0xffffff); }
      flash.style.opacity = 0.6; setTimeout(() => { flash.style.opacity = 0; }, 180);
      if (g.dayShine) gEl.classList.add('done');
      g.wag = 3; sfx.play('day');
      gSay(g.dayShine ? 'Сияющая звезда дня! Дальше — за рекордом' : `Звезда дня! Дособери созвездие — она засияет (осталось точек: ${g.need - g.lit})`, 2600);
      updateScore();
    }
  }
  updateScore();
  // platforms: move, crumble/melt, recycle; new rows above
  for (let i = g.plats.length - 1; i >= 0; i--) {
    const p = g.plats[i];
    if (p.wrap) { const W = b.xm + 0.6; p.grp.position.x += p.vx * dt; if (p.grp.position.x > W) p.grp.position.x -= 2 * W; else if (p.grp.position.x < -W) p.grp.position.x += 2 * W; }   // a shard of the turning ring: off one edge, back in at the other
    else if (p.vx) {   // a moving planet swings around its own spot, so the next planet stays within reach
      p.grp.position.x += p.vx * dt;
      const lim = p.swing ?? 1.1;
      if (Math.abs(p.grp.position.x) > b.xm || Math.abs(p.grp.position.x - p.x0) > lim) { p.grp.position.x = THREE.MathUtils.clamp(THREE.MathUtils.clamp(p.grp.position.x, p.x0 - lim, p.x0 + lim), -b.xm, b.xm); p.vx = -p.vx; }
    }
    if (p.alien) {
      const al = p.alien;
      if (p.type === 'visit') {   // away 2.4 s -> coming (blinking outline) 0.8 s -> on the planet 1.6 s
        p.visitT = (p.visitT + dt) % 4.8; const t = p.visitT;
        p.occupied = t >= 3.2;
        if (t < 2.4) { al.material.opacity = Math.max(0, al.material.opacity - dt * 5); al.position.y = ALIEN_Y + 0.5 * (1 - al.material.opacity); }
        else if (t < 3.2) { const k = (t - 2.4) / 0.8; al.material.opacity = 0.25 + 0.3 * Math.abs(Math.sin(t * 16)); al.position.y = ALIEN_Y + 0.7 * (1 - k); }   // dropping in, a warning
        else { al.material.opacity = 1; al.position.y = ALIEN_Y + 0.02 * Math.sin(g.clock * 4 + p.x0 * 5); }
      } else al.position.y = ALIEN_Y + 0.02 * Math.sin(g.clock * 4 + p.x0 * 5);
      if (p.shove > 0) p.shove = Math.max(0, p.shove - dt / 0.35);
      const q = p.shove > 0 ? Math.sin(Math.PI * p.shove) : 0;
      al.scale.set(ALIEN_S * (1 + 0.35 * q), ALIEN_S * (1 - 0.12 * q), 1);
      al.material.rotation = THREE.MathUtils.clamp((p.grp.position.x - pivot.position.x) * 0.12, -0.22, 0.22);   // he leans toward Ori, watching
    }
    if (p.capSq > 0) { p.capSq = Math.max(0, p.capSq - dt / 0.32); const q = Math.sin(Math.PI * p.capSq); p.cap.scale.set(1 + 0.07 * q, 1 - 0.22 * q, 1 + 0.07 * q); }   // the snow cap squashes under the paws
    if (p.skin === 9) {   // it rocks back after a landing; a spinner keeps turning; the red light blinks
      p.tiltV += (-42 * p.tilt - 5 * p.tiltV) * dt; p.tilt += p.tiltV * dt; p.rot += p.rotV * dt;
      p.body.rotation.z = p.rot + p.tilt;
      if (p.blink) p.blink.material.opacity = Math.sin(g.clock * 3 + p.x0 * 9) > 0.7 ? 0.95 : 0;
    }
    if (p.sq > 0) { p.sq = Math.max(0, p.sq - dt / 0.4); const q = Math.sin(Math.PI * p.sq); p.body.scale.set(1 + 0.14 * q, 1 - 0.36 * q, 1); p.body.position.y = -0.08 * q; }   // a cloud gives way under him
    if (p.flick) { if (!(p.flickT > 0) && Math.random() < dt * 0.35) p.flickT = rnd(0.15, 0.4); if (p.flickT > 0) p.flickT -= dt; p.flick.material.opacity = p.flickT > 0 ? 0.35 + 0.5 * Math.abs(Math.sin(p.flickT * 40)) : 0; }   // light inside a storm cloud
    if (p.dip > 0) { p.dip = Math.max(0, p.dip - dt / 0.3); p.body.position.y = -0.07 * Math.sin(Math.PI * p.dip); }   // a shard dips under the paws
    if (p.spin) { p.body.rotation.z += p.spin * dt; p.spin *= Math.max(0, 1 - 2.5 * dt); if (Math.abs(p.spin) < 0.05) p.spin = 0; }   // an asteroid wobbles from the push
    if (p.alive && p.skin > 0) {
      const px = p.grp.position.x, py = p.grp.position.y;
      if (p.skin === 3) for (let k = 0, n = emit(0.07, dt); k < n; k++) { const f = spawnFaller(px + rnd(-0.22, 0.22), py + rnd(0.2, 0.36), -0.3, new THREE.Vector3(rnd(-0.1, 0.1) + g.wind * 0.5, rnd(0.3, 0.55), 0), rnd(0.07, 0.13), rnd(1.2, 2)); f.material.color.set(0x8f8088); f.userData.fin = 0.4; }   // smoke
      else if (p.skin === 2) for (let k = 0, n = emit(0.05, dt); k < n; k++) { const f = spawnFaller(px + rnd(-0.42, 0.42), py + rnd(-0.1, 0.4), -0.3, new THREE.Vector3(rnd(-0.08, 0.08), -rnd(0.1, 0.25), 0), rnd(0.03, 0.045), rnd(1, 1.8)); f.material.color.set(0xeaf8ff); f.userData.fin = 0.3; }   // snow
      else if (p.skin === 1) for (let k = 0, n = emit(0.025, dt); k < n; k++) { const f = spawnFaller(px + rnd(-0.45, 0.45), py + rnd(-0.3, 0.3), -0.3, new THREE.Vector3(rnd(-0.2, 0.2), rnd(-0.12, 0.05), 0), rnd(0.03, 0.05), rnd(1.2, 2)); f.material.color.set(0xb9a79a); f.userData.fin = 0.3; }   // dust
      else if (p.skin === 6) for (let k = 0, n = emit(0.04, dt); k < n; k++) { const f = spawnFaller(px + rnd(-0.35, 0.35), py + rnd(0.1, 0.4), -0.3, new THREE.Vector3(rnd(-0.08, 0.08), rnd(0.15, 0.35), 0), rnd(0.03, 0.05), rnd(1, 1.8)); f.material.color.set(0x8cff9a); f.userData.fin = 0.3; }   // spores
      else if (p.skin === 4) for (let k = 0, n = emit(0.045, dt); k < n; k++) { const a = rnd(0, 6.28), f = spawnFaller(px + Math.cos(a) * 0.52, py + Math.sin(a) * 0.52, -0.3, new THREE.Vector3(-Math.sin(a) * 0.3, Math.cos(a) * 0.3, 0), rnd(0.03, 0.05), rnd(0.8, 1.4)); f.material.color.set(Math.random() < 0.7 ? 0xb39cff : 0xd9f38b); f.userData.fin = 0.3; }   // motes circling
    }
    if (p.type === 'hot') {
      // the dwarf blazes: a pulsing corona and tongues of flame, so it is never mistaken for a planet to land on
      if (p.glow) p.glow.scale.setScalar(1.2 + 0.1 * Math.sin(g.clock * 5 + p.x0 * 7));
      for (let k = 0, n = emit(0.14, dt); k < n; k++) { const a = rnd(0.3, 2.84), f = spawnFaller(p.grp.position.x + Math.cos(a) * 0.36, p.grp.position.y + Math.sin(a) * 0.36, -0.3, new THREE.Vector3(Math.cos(a) * 0.25 + g.wind * 0.45, 0.35 + Math.sin(a) * 0.4, 0), rnd(0.05, 0.09), rnd(0.5, 0.9)); f.material.color.set(Math.random() < 0.5 ? 0xff4a1c : 0xffb347); }
      p.body.rotation.y += dt * 0.6; if (p.steam > 0) { p.steam -= dt; for (let k = 0, n = emit(6, dt); k < n; k++) { const f = spawnFaller(p.grp.position.x + (Math.random() - 0.5) * 0.6, p.grp.position.y + 0.3, 0.3, new THREE.Vector3((Math.random() - 0.5) * 0.3, 1.2 + Math.random(), 0), 0.07, 0.6); f.material.color.set(0xffd7c2); } } }
    if (p.gone > 0) {
      p.gone += dt;
      if (p.type === 'crumble') { p.grp.position.y -= 3 * p.gone * dt * 10; p.grp.rotation.z += 3 * dt; p.body.scale.multiplyScalar(1 - dt * 1.2); }
      else if (p.novaBurn) p.grp.scale.multiplyScalar(Math.max(0, 1 - dt * 4));   // (its material is shared: it shrinks, it does not fade)
      else { p.body.material.opacity = Math.max(0, 0.82 - p.gone * 2.2); p.body.scale.multiplyScalar(1 - dt * 1.5); }
      // an ice comet freezes back after a while, so the way up never disappears for good
      if (p.type === 'ice' && p.gone > 0.7) {
        p.body.visible = false;
        if (p.gone > 2.6) { p.gone = 0; p.alive = true; p.hp = 3; p.bait = false; p.body.material.emissiveMap = null; p.body.material.emissive.set(0x6f9cff); p.body.material.emissiveIntensity = 0.25; p.body.material.needsUpdate = true; p.body.visible = true; p.body.scale.setScalar(1); p.body.material.opacity = 0.82; meteorBurst(new THREE.Vector3(p.grp.position.x, p.grp.position.y, 0.2), 6, false); }
        continue;
      }
      if (p.gone > 0.7) { removePlatform(i); continue; }
    }
    // a new thing gets one line of explanation the first time it is on screen (after the level title has been read)
    if (p.type in INTRO_TIP) tipOnce(p.type, p.grp.position.y, b);
    if (p.type === 'ground') { pedestal.position.set(p.grp.position.x, p.grp.position.y + 0.005, 0); pedestal.visible = p.grp.position.y > b.bot - 1; }
    if (p.grp.position.y < b.bot - 1.5) removePlatform(i);
  }
  while (g.nextY < b.top + 2) jumpRow();
  // stars (currency); the magnet pulls them in
  for (let i = g.stars.length - 1; i >= 0; i--) {
    const s = g.stars[i], u = s.userData; u.age += dt; s.material.rotation += u.spin * dt; s.scale.setScalar(u.base * (1 + 0.16 * Math.sin(u.age * 5)));
    if (u.glow) { u.glow.position.copy(s.position); u.glow.scale.setScalar(u.base * (2.2 + 0.5 * Math.sin(u.age * 3.1))); }
    if (g.magnet > 0) { const d = body.clone().sub(s.position); d.z = 0; const L2 = d.length(); if (L2 < 3.6) { s.position.addScaledVector(d.normalize(), Math.min(L2, 8 * dt)); for (let k = 0, n = emit(1.2, dt); k < n; k++) spawnFaller(s.position.x, s.position.y, 0.1, new THREE.Vector3(-d.x * 0.5, -d.y * 0.5, 0), 0.05, 0.35); } }
    if (Math.hypot(s.position.x - body.x, s.position.y - body.y) < 0.65) { jumpCollectStar(i); continue; }
    if (u.kind === 'key' && s.position.y < b.top - 0.6) tipLater('key', `Большая звезда — точка созвездия. Собери все до ${JUMP.goal} м, и звезда дня засияет`);
    if (s.position.y < b.bot - 1) {
      if (u.kind === 'key') { g.keyOut = false; g.keyAt = g.alt + 4; gSay('Точка созвездия осталась внизу — скоро будет ещё одна', 1200); }   // missed: another one soon
      removeGameStar(i, false);
    }
  }
  if (g.magnet > 0) g.magnet -= dt;
  // power-ups
  for (let i = g.bonuses.length - 1; i >= 0; i--) {
    const bo = g.bonuses[i]; bo.t += dt; bo.sp.position.y += Math.sin(bo.t * 3) * 0.24 * dt;
    if (Math.hypot(bo.sp.position.x - body.x, bo.sp.position.y - body.y) < 0.6) {
      const at = toScreen(bo.sp.position); scene.remove(bo.sp); g.bonuses.splice(i, 1);
      sfx.play('bonus');
      if (bo.kind === 'rocket') { g.rocket = 3; gPop('Ракета!', at); play('leap', { fade: 0.05, speed: 0.6 }); }
      if (bo.kind === 'bubble') { g.bubble = true; gPop('Пузырь!', at); updateScore(); if (!g.tipped.bubble) { g.tipped.bubble = true; gSay('Пузырь подхватит, если сорвёшься. И защитит от жара и метеорита', 2800, true); } }
      if (bo.kind === 'magnet') { g.magnet = 5; gPop('Магнит!', at); }
      continue;
    }
    if (bo.sp.position.y < b.bot - 1) {
      if (bo.kind === 'bubble' && !g.bubble) g.bubbleAt = Math.min(g.bubbleAt, g.nextY - g.baseY + g.scrolled + 12);   // missed it: another one soon
      scene.remove(bo.sp); g.bonuses.splice(i, 1);
    }
  }
  if (g.bubbleSp) { g.bubbleSp.visible = g.bubble; if (g.bubble) g.bubbleSp.position.set(pivot.position.x, pivot.position.y + 0.6, 0.35); }
  // black holes: pull; a close pass past the edge = boost; the centre = a fall
  for (let i = g.holes.length - 1; i >= 0; i--) {
    const h = g.holes[i]; h.sp.material.rotation -= dt * 2;
    const d = h.sp.position.clone().sub(body); d.z = 0; const L2 = d.length();
    if (L2 < 1.8 && g.rocket <= 0) { const a = 4.2 / (L2 * L2 + 0.35); pivot.position.x += d.x / L2 * a * dt * 0.35; g.vy += d.y / L2 * a * dt; }
    // the slingshot corridor lights up as he comes close, and pulses once it is earned
    const want = h.used ? 0 : THREE.MathUtils.clamp((2.0 - L2) / 1.0, 0, 1) * 0.42;
    h.ring.material.opacity += (want - h.ring.material.opacity) * Math.min(1, 6 * dt); h.ring.rotation.z += dt * 0.8;
    h.sp.scale.setScalar(1.25 + 0.06 * Math.sin(performance.now() * 0.004));
    h.near = Math.min(h.near, L2);
    tipOnce('hole', h.sp.position.y, b);
    if (L2 < 0.38 && g.rocket <= 0) {
      scene.remove(h.sp); scene.remove(h.ring); g.holes.splice(i, 1);
      if (g.bubble) { useBubble('чёрной дыры'); g.vy = JUMP.v0; setTakeoff(pivot.position.y); continue; }
      // swallowed: spat out from the lowest planet on screen, one point of the constellation poorer, spinning
      let low = null; for (const q of g.plats) if (q.alive && q.type !== 'hot' && q.type !== 'crumble' && q.grp.position.y > b.bot + 0.3 && (!low || q.grp.position.y < low.grp.position.y)) low = q;
      if (!low) { pivot.position.y = b.bot - 1; jumpLose('Чёрная дыра!'); if (!g.playing) return; continue; }
      const cost = unlightStars(1); g.series = 0; g.dashReady = false; setSeries(); updateScore();
      meteorBurst(body.clone(), 10, false);
      pivot.position.set(low.grp.position.x, low.grp.position.y + low.top, 0); setTakeoff(pivot.position.y); jumpBounce(JUMP.v0); g.spinT = 0.7; g.invuln = 1.5;
      gPop(cost > 0 ? '−1 точка созвездия' : 'Выплюнуло!', toScreen(pivot.position), true); gSay('Чёрная дыра выплюнула Ори ниже', 1200); sfx.play('hole');
      try { navigator.vibrate && navigator.vibrate(60); } catch {}
      continue;
    }
    if (!h.used && h.near < 0.95 && L2 > 1.3) { h.used = true; g.vy = Math.max(g.vy, 0) + 4.5; gSay('Гравиманёвр!', 800); gPop('Разгон!', toScreen(body)); sfx.play('sling'); }
    if (h.sp.position.y < b.bot - 1.5) { scene.remove(h.sp); scene.remove(h.ring); g.holes.splice(i, 1); }
  }
  // wind gusts (warned by streaks a moment before)
  const L = levelDef(lv.n);
  if (L.gust && g.alt >= FEATURE_AT.gust * JUMP.levelH) {
    if (!g.gustOn) { g.gustOn = true; g.gustIn = 2; }
    g.gustIn -= dt;
    if (g.gustIn <= 0 && g.windT <= 0) {
      g.windDir = Math.random() < 0.5 ? -1 : 1; g.windT = 2.6; g.gustIn = L.gust * (0.8 + Math.random() * 0.5); sfx.play('wind');
      // the first gust is a weak one, with a line about it
      g.windAmp = g.gustSeen ? 2.3 : 1.3;
      if (!g.gustSeen) { g.gustSeen = true; gSay(`Солнечный ветер сносит ${g.windDir > 0 ? 'вправо →' : '← влево'} Рули против него`, 2400, true); }
      else gSay(g.windDir > 0 ? 'Ветер вправо →' : '← Ветер влево', 900);
    }
  }
  if (g.windT > 0) {
    g.windT -= dt; const ramp = Math.min(1, (2.6 - g.windT) / 0.9) * Math.min(1, g.windT / 0.4);
    g.wind = g.windDir * g.windAmp * Math.max(0, ramp);
    // long streaks across the whole screen (each is a short row of points flying together), from the first moment of the gust
    for (let k = 0, n = emit(1.1, dt); k < n; k++) {
      const y = b.bot + Math.random() * (b.top - b.bot), z = rnd(-0.6, 0.5), v = g.windDir * rnd(6, 9), x0 = -g.windDir * (b.xm + 1.4);
      for (let i = 0; i < 6; i++) { const f = spawnFaller(x0 - g.windDir * i * 0.09, y, z, new THREE.Vector3(v, 0, 0), 0.05 - i * 0.006, 0.55); f.material.color.set(i < 2 ? 0xffffff : 0xdfe7ff); }
    }
    const w = g.windDir > 0 ? 'r' : 'l'; if (hud.wind !== w) { hud.wind = w; gWind.className = 'on ' + w; }
  } else { g.wind = 0; if (hud.wind) { hud.wind = ''; gWind.className = ''; } }
  // flying meteors
  const dNow = THREE.MathUtils.clamp((g.alt - lv.n * JUMP.levelH) / JUMP.levelH, 0, 1), every = g.alt >= FEATURE_AT.meteor * JUMP.levelH ? lvl(L.meteor, dNow) : 0;
  if (every > 0) { g.meteorIn -= dt; if (g.meteorIn <= 0) { spawnJumpMeteor(); g.meteorIn = Math.max(L.meteorMin || 4.5, every * Math.pow(0.92, lv.extra)) * (0.8 + Math.random() * 0.4); } }
  const seg = new THREE.Line3(pivot.position.clone().add(new THREE.Vector3(0, 0.2, 0)), pivot.position.clone().add(new THREE.Vector3(0, 1.0, 0))), cp = new THREE.Vector3();
  for (let i = g.meteors.length - 1; i >= 0; i--) {
    const mt = g.meteors[i];
    if (mt.warn > 0) {   // still only the warning pulse
      mt.warn -= dt; mt.ring.scale.setScalar(0.45 + 0.35 * Math.abs(Math.sin(mt.warn * 14))); mt.ring.material.opacity = 0.5 + 0.5 * Math.abs(Math.sin(mt.warn * 14));
      if (mt.warn <= 0) { scene.remove(mt.ring); mt.ring.material.dispose(); mt.ring = null; mt.sp.visible = true; }
      continue;
    }
    mt.sp.position.x += mt.vx * dt; mt.sp.position.y += mt.vy * dt; mt.sp.material.rotation += mt.spin * dt;
    for (let k = 0, n = emit(0.7, dt); k < n; k++) { const f = spawnFaller(mt.sp.position.x - Math.sign(mt.vx) * 0.12, mt.sp.position.y, 0.3, new THREE.Vector3(-mt.vx * 0.3, 0.2, 0), 0.05 + Math.random() * 0.04, 0.35); f.material.color.set(Math.random() < 0.5 ? 0xff0032 : 0x5a6488); }
    if (!(g.invuln > 0) && g.rocket <= 0) {
      const mp = mt.sp.position.clone(); mp.z = 0; seg.closestPointToPoint(mp, true, cp);
      if (cp.distanceTo(mp) < 0.38) {
        const p = mt.sp.position.clone(); removeMeteor(i); meteorBurst(p, 14, true);
        if (g.bubble) { useBubble('метеорита'); continue; }
        // knocked off course: thrown sideways the way the meteor flew, tumbling, no steering for a moment
        g.vy = Math.min(g.vy, 0.5); setTakeoff(-Infinity); g.knock = 0.45; g.knockV = Math.sign(mt.vx) * 5.5; g.spinT = 0.45; g.invuln = 1.2; g.hits++; g.series = 0; g.dashReady = false; setSeries();
        try { navigator.vibrate && navigator.vibrate(80); } catch {}
        gSay('Метеорит сбил Ори с курса!', 1100); sfx.play('meteor'); continue;
      }
      // a close pass that missed is "on a hair" (paid once the meteor has moved away again)
      const dd = cp.distanceTo(mp);
      if (dd < 0.75) mt.close = true; else if (mt.close && !mt.paid && dd > 0.9) { mt.paid = true; nearMiss(toScreen(mt.sp.position)); }
    }
    if (Math.abs(mt.sp.position.x) > b.xm + 2 || mt.sp.position.y < b.bot - 1) removeMeteor(i);
  }
  stepWave(dt, b, L, dNow); if (!g.playing) return;
  // lightning of the storm nebula
  const bEvery = g.alt >= FEATURE_AT.bolt * JUMP.levelH ? lvl(L.bolt || 0, dNow) : 0;
  if (bEvery > 0) { g.boltIn -= dt; if (g.boltIn <= 0) { spawnBolt(); g.boltIn = Math.max(2.4, bEvery * Math.pow(0.92, lv.extra)) * (0.8 + Math.random() * 0.4); } }
  stepBolts(dt);
  if (pivot.position.y < b.bot - 0.6 || (g.falling && g.fallT > 1.2)) jumpLose('Промах!');
}

// ?debug: window.__jump.audit(n) generates n rows on the running game and reports the closest pair and the biggest gap
if (/[?&]debug\b/.test(location.search)) window.__jump = {
  game, JUMP, LEVELS, pivot: () => pivot, bounds: jumpBounds, step: (dt) => gameStep(dt),
  audit(n = 600) {
    const g = game, b = jumpBounds(); let minD = 9, maxGap = 0, worst = null; const types = {};
    for (let i = 0; i < n; i++) {
      const y0 = g.nextY; jumpRow(); maxGap = Math.max(maxGap, g.nextY - y0); types[g.lastType] = (types[g.lastType] || 0) + 1;
      const ps = g.plats.filter(spacer);
      for (let a = 0; a < ps.length; a++) for (let c = a + 1; c < ps.length; c++) { const dd = sepTo(ps[a], ps[c].x0, ps[c].grp.position.y, ps[c].swing || 0); if (dd < minD) { minD = dd; worst = [ps[a].type, ps[c].type, Math.round(g.scrolled)]; } }
      for (const h of g.holes) for (const q of ps) { const dd = sepTo(q, h.sp.position.x, h.sp.position.y); if (dd < JUMP.holeSep - 1e-6) worst = ['hole', q.type, dd]; }
      jumpScroll(g.nextY - y0);
      for (let k = g.plats.length - 1; k >= 0; k--) if (g.plats[k].grp.position.y < b.bot - 1.5) removePlatform(k);
      for (let k = g.holes.length - 1; k >= 0; k--) if (g.holes[k].sp.position.y < b.bot - 1.5) { scene.remove(g.holes[k].sp); scene.remove(g.holes[k].ring); g.holes.splice(k, 1); }
    }
    return { minD: +minD.toFixed(3), maxGap: +maxGap.toFixed(3), worst, types, reachedM: Math.round(g.scrolled) };
  },
};

// per frame, after the mixer: a quick mouth snap when a star is caught
const _gq = new THREE.Quaternion(), _gx = new THREE.Vector3(1, 0, 0), _gy = new THREE.Vector3(0, 1, 0);
function gamePose(dt) {
  const g = game;
  // The jump as a bound: phase p runs from the push-off (0) through the apex (0.5) to the landing (1).
  //   push (p<0.3): spine arched, hind legs extended back, front legs pulled up, head up
  //   tuck (around the apex): all four legs gathered under the body, back rounded
  //   reach (p>0.55): front legs stretch forward for the planet, hind legs stay under, head looks down
  // Ears are a spring that lags behind the motion: streaming back on the way up, flying up on the way down,
  // bouncing on the push-off and the landing.
  if (g.playing && !g.finale && !window.__noPose) {
    const inAir = g.rocket > 0 ? 0 : 1;
    const p = THREE.MathUtils.clamp(g.airT / Math.max(0.3, g.airDur), 0, 1);
    const ss = (a, b, x) => { const t = THREE.MathUtils.clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
    const push = inAir * (1 - ss(0.05, 0.32, p));
    const tuck = inAir * Math.sin(Math.PI * THREE.MathUtils.clamp((p - 0.12) / 0.8, 0, 1));
    const reach = inAir * ss(0.55, 0.92, p);
    // bones: +X on a leg = swings back, +X on a lower leg = bends, +X on the spine/head = nose down, +X on an ear = back
    life('spine', -0.16 * push - 0.04 * reach, 0, 0);
    life('chest', -0.08 * push - 0.03 * reach, 0, 0);
    life('neck', -0.12 * push + 0.03 * reach, 0, 0);
    life('head', -0.22 * push + 0.10 * reach, 0, 0);
    const fu = 0.35 * push + 0.22 * tuck - 0.35 * reach, fl = 0.7 * push + 0.55 * tuck + 0.30 * reach;
    life('f_upperL', fu, 0, 0); life('f_upperR', fu, 0, 0); life('f_lowerL', fl, 0, 0); life('f_lowerR', fl, 0, 0);
    const bu = -0.5 * push + 0.28 * tuck + 0.2 * reach, bl = -0.25 * push + 0.5 * tuck + 0.4 * reach;
    life('b_upperL', bu, 0, 0); life('b_upperR', bu, 0, 0); life('b_lowerL', bl, 0, 0); life('b_lowerR', bl, 0, 0);
    // ear spring: target follows the vertical speed, the spring overshoots and settles
    const target = inAir * THREE.MathUtils.clamp(g.vy * 0.1, -0.75, 0.75);
    g.earV += (55 * (target - g.earA) - 7 * g.earV) * dt; g.earA += g.earV * dt;
    g.earA = THREE.MathUtils.clamp(g.earA, -1.1, 1.1);
    const splay = 0.18 * tuck;
    life('ear1L', g.earA, 0, splay); life('ear1R', g.earA, 0, -splay);
    life('ear2L', 0.6 * g.earA, 0, 0); life('ear2R', 0.6 * g.earA, 0, 0);
  }
  if (game.stun > 0 && headBone) { const k = game.stun / METEOR.stun; _gq.setFromAxisAngle(_gy, 0.28 * k * Math.sin(game.stun * 40)); procApply(headBone, _gq); }
  if (game.snap > 0 && jawBone && headBone) {
    const k = Math.sin(Math.PI * (1 - game.snap / 0.24));
    _gq.setFromAxisAngle(_gx, 0.45 * k); procApply(jawBone, _gq);
    _gq.setFromAxisAngle(_gx, -0.16 * k); procApply(headBone, _gq);
    game.snap -= dt;
  }
}
function gameTap() {
  const g = game;
  if (g.finale) { if (g.hero && !g.tapped) g.tapped = { inWindow: g.tapWindow }; return; }
  if (g.playing) hop();
}
// the mid-air hop: one charge, refilled by a perfect landing. It also saves a miss (he can hop while falling),
// and the planet he hopped from no longer counts: any planet above the hop point (minus missDrop) will do
function hop() {
  const g = game;
  if (!g.hop || g.rocket > 0 || g.knock > 0 || g.airT < 0.12) return;
  g.hop = 0; g.tipped.hop = true;
  g.vy = Math.max(g.vy, JUMP.hop); setTakeoff(pivot.position.y); g.airT = 0; g.airDur = 2 * g.vy / JUMP.g;
  g.earV += 5; g.squash = 0.6;
  play('leap', { fade: 0.05, speed: 1.4 }); sfx.play('sling');
  for (let k = 0; k < 14; k++) { const a = Math.PI + Math.random() * Math.PI, f = spawnFaller(pivot.position.x, pivot.position.y + 0.05, 0.25, new THREE.Vector3(Math.cos(a) * 1.3, Math.sin(a) * 0.6, 0), 0.06, 0.4); f.material.color.set(0xd9f38b); }
  updateScore();
}

function updateEyes(dt) {
  // gaze target: pointer relative to the head on screen, else slow wander with saccades
  const hs = headScreen();
  let tx = 0, ty = 0;
  eyes.hold = Math.max(0, (eyes.hold || 0) - dt);
  if (hs && beg.look) {   // asking for the ball: his eyes go from the ball to the viewer and back
    if (beg.look === 'ball' && fetch_.ball) { const bp = toScreen(fetch_.ball.position); tx = THREE.MathUtils.clamp((bp.x - hs.x) / (innerWidth * 0.3), -1, 1); ty = THREE.MathUtils.clamp((hs.y - bp.y) / (innerHeight * 0.25), -1, 1); }
    else { tx = 0; ty = 0.1; }
  } else if (hs && pointer.x >= 0 && (!isMobile || eyes.hold > 0)) {
    tx = THREE.MathUtils.clamp((pointer.x - hs.x) / (innerWidth * 0.35), -1, 1);
    ty = THREE.MathUtils.clamp((hs.y - pointer.y) / (innerHeight * 0.3), -1, 1);
  } else {
    eyes.sacc -= dt;
    if (eyes.sacc <= 0) { eyes.sacc = 0.5 + Math.random() * 1.4; const ang = Math.random() * Math.PI * 2, mag = 0.55 + Math.random() * 0.45; eyes.target.set(Math.cos(ang) * mag, Math.sin(ang) * mag * 0.6); if (Math.random() < 0.25) eyes.target.set(0, 0.15); }
    tx = eyes.target.x; ty = eyes.target.y;
  }
  // model rotation moves the head: look a bit toward the camera side
  tx -= spin.y * 0.6;
  const k = 1 - Math.pow(0.001, dt);  // fast but smooth
  eyes.gaze.x += (tx - eyes.gaze.x) * k; eyes.gaze.y += (ty - eyes.gaze.y) * k;
  const len = Math.max(1, Math.hypot(eyes.gaze.x, eyes.gaze.y));
  const px = eyes.gaze.x / len, py = eyes.gaze.y / len;
  const off = new THREE.Vector3();
  // the whole eye (iris, pupil, glints) slides across the white sclera, the way an eyeball turns.
  // The iris used to be shifted by its texture offset instead, but the bake fills the whole UV square,
  // so the trailing edge wrapped around and showed up on the other side of the eye.
  const MAXA = THREE.MathUtils.degToRad(15);
  for (const p of eyes.pivots) {
    const ax = EYE_AXES[p.side];
    _eq.setFromAxisAngle(ax.py, -px * MAXA);                 // look left / right
    _eq2.setFromAxisAngle(ax.px, -py * MAXA);                // look up / down
    p.node.quaternion.copy(_eq).multiply(_eq2);
  }
  if (!eyes.pivots.length) for (const e of [...eyes.irises, ...eyes.pupils, ...eyes.glints]) {
    const ax = EYE_AXES[e.side]; off.copy(ax.px).multiplyScalar(px).addScaledVector(ax.py, py).multiplyScalar(0.038);
    e.node.position.copy(e.base).add(off);
  }
}

/* ---------- fetch: throw a ball to a tapped point, dog runs, jumps and catches ---------- */
function makeBall() {
  const g = new THREE.Group();
  const m = new THREE.Mesh(new THREE.SphereGeometry(0.072, 32, 24), new THREE.MeshPhysicalMaterial({ color: 0xd9f38b, roughness: 0.75, sheen: 1, sheenColor: new THREE.Color(0xf4ffc2), sheenRoughness: 0.6 }));
  const seam = new THREE.Mesh(new THREE.TorusGeometry(0.072, 0.006, 8, 64), new THREE.MeshBasicMaterial({ color: 0xfafafc }));
  seam.rotation.x = Math.PI / 2; seam.scale.set(0.99, 0.99, 0.99);
  const seam2 = seam.clone(); seam2.rotation.set(0, 0, Math.PI / 2);
  g.add(m, seam, seam2); return g;
}
function floorPointRaw(cx, cy) {
  const ndc = new THREE.Vector2((cx / innerWidth) * 2 - 1, -(cy / innerHeight) * 2 + 1);
  raycaster.setFromCamera(ndc, camera); const hit = new THREE.Vector3(); const pl = new THREE.Plane(new THREE.Vector3(0, 1, 0), -(pivot ? pivot.position.y : 0));
  if (!raycaster.ray.intersectPlane(pl, hit)) raycaster.ray.at(6, hit); hit.y = pivot ? pivot.position.y : 0; return hit;
}
function floorPoint(cx, cy) {
  const ndc = new THREE.Vector2((cx / innerWidth) * 2 - 1, -(cy / innerHeight) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  const hit = new THREE.Vector3(); const pl = new THREE.Plane(new THREE.Vector3(0, 1, 0), -(pivot ? pivot.position.y : 0));
  if (!raycaster.ray.intersectPlane(pl, hit)) { raycaster.ray.at(6, hit); }
  // keep within reach of the scene
  const r = Math.hypot(hit.x, hit.z); const R = 1.7; if (r > R) { hit.x *= R / r; hit.z *= R / r; }
  hit.z = THREE.MathUtils.clamp(hit.z, -1.6, 1.3); hit.y = pivot ? pivot.position.y : 0; return hit;
}
function armThrow() {
  if (sit.state !== 'stand') { wake(armThrow); return; }
  if (busy) return;
  fetch_.mode = !fetch_.mode; syncThrowBtns();
  hint.style.opacity = 0;
}
const playAsync = (name, fade = 0.2) => new Promise((res) => {
  const dur = (CLIPS[name].b - CLIPS[name].a) / FPS * 1000 + 250; let doneFlag = false;
  const fin = () => { if (!doneFlag) { doneFlag = true; res(); } };
  play(name, { fade, onDone: fin }); setTimeout(fin, dur);
});
async function throwBall(cx, cy) {
  // the dog is busy (a command, a chase): ignore the tap and stay armed. Returning from inside the try below
  // would run the finally and cut the running command short
  if (busy) return;
  try { await throwBallInner(cx, cy); } catch (e) { console.error(e); } finally { busy = false; holdJaw = false; fetch_.pos = null; fetch_.yaw = null; if (current !== actions.idle) play('idle', { fade: 0.4 }); }
}
async function throwBallInner(cx, cy) {
  const target = floorPoint(cx, cy); if (!target) return;
  fetch_.mode = false; syncThrowBtns();
  busy = true; petting = false; holdJaw = false;
  if (fetch_.ball) { scene.remove(fetch_.ball); fetch_.ball = null; }
  const ball = makeBall(); fetch_.ball = ball; scene.add(ball);
  const start = camera.position.clone().add(new THREE.Vector3(0.35, -0.55, -0.6)); ball.position.copy(start);
  const base = new THREE.Vector3().fromArray(FRAMES[frame].model);
  const dir = new THREE.Vector3().subVectors(target, base); const dist = dir.length();
  const baseY = frame === 's1' ? -0.35 : frame === 's3' ? -0.5 : -0.2;
  // choose the catch by where the ball is aimed: at the face -> mouth, low/side -> paw, high -> two paws
  const ndcY = -(cy / innerHeight) * 2 + 1;
  const hs = headScreen(); const nearHead = hs && Math.hypot(cx - hs.x, cy - hs.y) < Math.min(innerWidth, innerHeight) * 0.16;
  const kind = nearHead ? 'mouth' : (ndcY > 0.15 ? 'two' : 'paw');
  fetch_.yaw = (kind === 'mouth' || dist < 0.35) ? 0 : Math.atan2(dir.x, dir.z) - baseY;
  const stop = dist > 0.35 ? target.clone().addScaledVector(dir.clone().normalize(), -0.3) : base.clone();
  fetch_.pos = stop;
  const runT = THREE.MathUtils.clamp(dist / RUN_SPEED, 0.2, 1.1);
  if (dist > 0.4) play('walk', { fade: 0.15, speed: RUN_ANIM });
  // catch moment inside each clip (seconds from clip start) and where the ball should be then
  const catchAt = { mouth: 13 / 24, paw: 11 / 24, two: 18 / 24 }[kind];
  const flight = runT + catchAt; const t0 = performance.now(); const apex = 1.0 + dist * 0.25;
  let started = false; const clip = { mouth: 'catchMouth', paw: 'catchPaw', two: 'catchTwo' }[kind];
  const landFor = () => {
    if (kind === 'mouth') return mouthWorld();
    const p = pivot.position.clone(); const yaw = pivot.rotation.y;
    const fwd = new THREE.Vector3(Math.sin(yaw), 0, Math.cos(yaw));
    if (kind === 'paw') { const side = new THREE.Vector3(fwd.z, 0, -fwd.x); return p.clone().addScaledVector(fwd, 0.45).addScaledVector(side, 0.12).setY(pivot.position.y + 0.35); }
    return p.clone().addScaledVector(fwd, 0.35).setY(pivot.position.y + 0.95);
  };
  let done = false;
  await new Promise((res) => {
    const step = () => {
      const t = Math.min(1, (performance.now() - t0) / (flight * 1000));
      if (!started && t * flight >= runT) { started = true; fetch_.pos = null; playAsync(clip, 0.12).then(() => { done = true; }); }
      ball.position.lerpVectors(start, landFor(), t); ball.position.y += Math.sin(t * Math.PI) * apex;
      ball.rotation.x += 0.12; ball.rotation.z += 0.07;
      if (t < 1) requestAnimationFrame(step); else res();
    };
    step();
  });
  const sparkle = () => { const m = ball.getWorldPosition(new THREE.Vector3()); for (let i = 0; i < 8; i++) { const a = Math.random() * Math.PI * 2; spawnFaller(m.x, m.y, m.z, new THREE.Vector3(Math.cos(a) * 0.9, 0.8 + Math.random() * 0.8, Math.sin(a) * 0.9), 0.1, 0.6); } };
  const grab = () => { holdJaw = true; jawBone.attach(ball); const loc = jawBone.worldToLocal(mouthWorld()); ball.position.copy(loc); ball.rotation.set(0, 0, 0); };
  if (kind === 'mouth') { grab(); sparkle(); }
  else {
    // ball drops to the floor in front of the dog, then the clip continues into the pickup
    const fl = landFor().setY(floorY()); const from = ball.position.clone(); const d0 = performance.now();
    await new Promise((res) => { const step = () => { const t = Math.min(1, (performance.now() - d0) / 350); ball.position.lerpVectors(from, fl, t); ball.position.y = THREE.MathUtils.lerp(from.y, fl.y, t * t); if (t < 1) requestAnimationFrame(step); else res(); }; step(); });
    // pickup happens at clip-relative frame (paw: 826+14=840, two: 918+14=932)
    const grabAt = kind === 'paw' ? (840 - 800) / 24 : (932 - 880) / 24;
    const elapsed = (performance.now() - t0) / 1000 - runT; await wait(Math.max(0, grabAt - elapsed) * 1000);
    grab(); sparkle();
  }
  for (let i = 0; i < 60 && !done; i++) await wait(50);
  // bring it back: face home, trot back with the ball in the mouth
  const home = base.clone(); fetch_.pos = null;
  if (dist > 0.35) { fetch_.yaw = Math.atan2(home.x - stop.x, home.z - stop.z) - baseY; play('walk', { fade: 0.2, speed: RUN_ANIM }); await wait(Math.max(450, runT * 1000)); }
  fetch_.yaw = 0; await waitYaw(); spin.y = 0; spin.x = 0; spin.vy = 0; fetch_.yaw = null;
  // drop it beside the paws
  const dropP = playAsync('drop', 0.2);
  await wait((1023 - 1010) / 24 * 1000);
  holdJaw = false; scene.attach(ball); phys.on = false; phys.v.set(0, 0, 0); phys.vy = 0;
  const from = ball.position.clone(); const side = Math.random() < 0.5 ? -1 : 1;
  const to = new THREE.Vector3(pivot.position.x + side * 0.38, floorY(), pivot.position.z + 0.5); const d1 = performance.now();
  await new Promise((res) => { const step = () => { const t = Math.min(1, (performance.now() - d1) / 600); ball.position.lerpVectors(from, to, t); ball.position.y = THREE.MathUtils.lerp(from.y, to.y, t * t) + (t > 0.7 ? Math.sin((t - 0.7) / 0.3 * Math.PI) * 0.08 : 0); ball.rotation.x += 0.1; if (t < 1) requestAnimationFrame(step); else { ball.position.copy(to); res(); } }; step(); });
  await dropP;
  play('idle', { fade: 0.4 }); busy = false;
}

function flickBall(v, vy) {
  phys.on = true; phys.v.copy(v); phys.vy = vy !== undefined ? vy : 1.6 + v.length() * 0.25; phys.chase = true;
  if (!busy) chaseBall();
}
function updateBounds() {
  // floor points at the screen edges (10% inset), evaluated on the ball's own row so the walls follow the frustum
  const y = THREE.MathUtils.clamp(fetch_.ball ? ((fetch_.ball.position.clone().project(camera).y)) : 0, -0.6, 0.6);
  const cy = (1 - y) / 2 * innerHeight;
  const L = floorPointRaw(innerWidth * 0.10, cy), R = floorPointRaw(innerWidth * 0.90, cy);
  phys.bounds.x = Math.max(0.6, Math.min(Math.abs(L.x), Math.abs(R.x)));
  const near = floorPointRaw(innerWidth / 2, innerHeight * 0.72), far = floorPointRaw(innerWidth / 2, innerHeight * 0.50);
  phys.bounds.zMax = Math.min(near.z, 1.3); phys.bounds.zMin = Math.max(-1.3, far.z);
  // ceiling: world height where the ball's screen-y would reach the top edge (8% inset)
  if (fetch_.ball) { const ndc = new THREE.Vector2(fetch_.ball.position.clone().project(camera).x, 1 - 0.16); raycaster.setFromCamera(ndc, camera);
    const pl = new THREE.Plane(new THREE.Vector3(0, 0, 1), -fetch_.ball.position.z); const hit = new THREE.Vector3();
    phys.bounds.top = raycaster.ray.intersectPlane(pl, hit) ? Math.max(0.6, hit.y) : 2.5; }
}
function stepBallPhysics(dt) {
  const b = fetch_.ball; if (!b || !phys.on) return;
  phys.vy -= 9.8 * dt; phys.vy *= Math.pow(0.9, dt);
  b.position.addScaledVector(phys.v, dt); b.position.y += phys.vy * dt;
  // floor
  const fy = floorY(); if (b.position.y < fy) { b.position.y = fy; if (Math.abs(phys.vy) > 0.6) phys.vy = -phys.vy * 0.45; else phys.vy = 0; phys.v.multiplyScalar(0.985); }
  // screen-edge walls: reflect in screen space so the ball can never leave the visible area
  const pad = 0.06; // ndc inset
  const ndc = b.position.clone().project(camera);
  let hit = false;
  const camRight = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0).setY(0).normalize();
  const camUp = new THREE.Vector3(0, 1, 0);
  const camFwd = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 2).negate().setY(0).normalize();
  const vel = phys.v.clone(); vel.y = phys.vy;
  if (ndc.x > 1 - pad && vel.dot(camRight) > 0 || ndc.x < -1 + pad && vel.dot(camRight) < 0) {
    const r = vel.dot(camRight); phys.v.addScaledVector(camRight, -r * 1.8); hit = true;
  }
  if (ndc.y > 1 - pad - 0.08 && phys.vy > 0) { phys.vy = -phys.vy * 0.75; hit = true; }
  if (ndc.y < -1 + pad + 0.02) {
    // bottom edge: the ball rolled toward the camera; push it back into the scene
    const f = vel.dot(camFwd); if (f < 0) { phys.v.addScaledVector(camFwd, -f * 1.8); hit = true; }
  }
  // clamp to keep inside after the reflection
  const n2 = b.position.clone().project(camera);
  if (Math.abs(n2.x) > 1 - pad || n2.y > 1 - pad - 0.08 || n2.y < -1 + pad + 0.02) {
    n2.x = THREE.MathUtils.clamp(n2.x, -1 + pad, 1 - pad); n2.y = THREE.MathUtils.clamp(n2.y, -1 + pad + 0.02, 1 - pad - 0.08);
    const back = n2.unproject(camera); const dir = back.sub(camera.position).normalize();
    // move along the view ray to the ball's current height plane
    const tY = (b.position.y - camera.position.y) / dir.y; if (isFinite(tY) && tY > 0) { const q = camera.position.clone().addScaledVector(dir, tY); b.position.x = q.x; b.position.z = q.z; }
  }
  // depth safety (never go far behind the dog or into the camera)
  if (b.position.z < -1.2 && phys.v.z < 0) { b.position.z = -1.2; phys.v.z = -phys.v.z * 0.8; hit = true; }
  if (b.position.z > 1.3 && phys.v.z > 0) { b.position.z = 1.3; phys.v.z = -phys.v.z * 0.8; hit = true; }
  if (hit) { const m = b.position; for (let i = 0; i < 4; i++) { const a = Math.random() * Math.PI * 2; spawnFaller(m.x, m.y, m.z, new THREE.Vector3(Math.cos(a) * 0.6, 0.6, Math.sin(a) * 0.6), 0.07, 0.4); } }
  if (b.position.y <= fy + 1e-3) phys.v.multiplyScalar(Math.pow(0.35, dt));   // rolling friction
  b.rotation.x += phys.v.z * dt / BALL_R; b.rotation.z -= phys.v.x * dt / BALL_R;
  if (b.position.y <= fy + 1e-3 && phys.v.length() < 0.05 && Math.abs(phys.vy) < 0.05) { phys.v.set(0, 0, 0); phys.vy = 0; phys.on = false; }
  else if (b.position.y > fy + 1e-3) { phys.on = true; }
  phys.bounds.x = 1.6; phys.bounds.zMin = -1.2; phys.bounds.zMax = 1.3;
}
async function chaseBall() {
  busy = true; petting = false; holdJaw = false;
  const ball = fetch_.ball; const base = new THREE.Vector3().fromArray(FRAMES[frame].model);
  const baseY = frame === 's1' ? -0.35 : frame === 's3' ? -0.5 : -0.2;
  try {
    play('walk', { fade: 0.15, speed: RUN_ANIM });
    const SPEED = RUN_SPEED; let caught = false; const t0 = performance.now();
    let lastX = pivot.position.x, lastZ = pivot.position.z, stillSince = performance.now();
    // run after the ball until close enough; the dog follows the ball position each frame
    while (!caught && performance.now() - t0 < 12000) {
      if (performance.now() - t0 > 6000 && ball.position.y > floorY() + 0.3) { phys.vy = -1; }
      const bp = ball.position; const dp = pivot.position;
      const d = new THREE.Vector3(bp.x - dp.x, 0, bp.z - dp.z); const dist = d.length();
      if (dist > 0.05) { fetch_.yaw = Math.atan2(d.x, d.z) - baseY; }
      // no sideways clamp: on a wide desktop screen the ball can rest further out than a fixed bound,
      // and the dog would trot in place against it; the ball itself is already kept on screen
      const stop = bp.clone().sub(d.clone().normalize().multiplyScalar(0.3)); stop.y = 0; stop.z = THREE.MathUtils.clamp(stop.z, phys.bounds.zMin, phys.bounds.zMax); fetch_.pos = stop;
      const speedB = phys.v.length();
      if (dist < 0.5 && ball.position.y < floorY() + 0.3 && speedB < 0.9) caught = true;
      if (!phys.on && dist < 0.75) caught = true;
      if (performance.now() - t0 > 2500 && dist < 0.9 && ball.position.y < floorY() + 0.3) caught = true;
      // safety net: the ball is resting but the dog has not moved for a while -> it is stuck, just pick the ball up
      const now = performance.now();
      if (Math.hypot(pivot.position.x - lastX, pivot.position.z - lastZ) > 0.03) { lastX = pivot.position.x; lastZ = pivot.position.z; stillSince = now; }
      else if (!phys.on && now - stillSince > 800) caught = true;
      await wait(40);
    }
    fetch_.pos = null; phys.on = false; phys.v.set(0, 0, 0); phys.vy = 0;
    if (!caught) { fetch_.yaw = null; return; }
    // catch style: ball still moving fast -> paw swat, otherwise pick up from the floor
    const fast = phys.v.length() > 0.5;
    const clip = fast ? 'catchPaw' : 'pickup'; const grabAt = fast ? (840 - 800) / 24 : (984 - 970) / 24;
    const clipP = playAsync(clip, 0.15);
    // slide the ball to the spot in front of the mouth while the clip plays
    const from = ball.position.clone(); const c0 = performance.now();
    await new Promise((res) => { const step = () => { const t = Math.min(1, (performance.now() - c0) / (grabAt * 1000)); const yaw = pivot.rotation.y; const to = pivot.position.clone().add(new THREE.Vector3(Math.sin(yaw), 0, Math.cos(yaw)).multiplyScalar(0.36)).setY(floorY()); ball.position.lerpVectors(from, to, t); if (t < 1) requestAnimationFrame(step); else res(); }; step(); });
    holdJaw = true; jawBone.attach(ball); ball.position.copy(jawBone.worldToLocal(mouthWorld())); ball.rotation.set(0, 0, 0);
    const m = mouthWorld(); for (let i = 0; i < 8; i++) { const a = Math.random() * Math.PI * 2; spawnFaller(m.x, m.y, m.z, new THREE.Vector3(Math.cos(a) * 0.9, 0.8 + Math.random() * 0.8, Math.sin(a) * 0.9), 0.1, 0.6); }
    await clipP;
    // bring it back
    const here = pivot.position.clone(); const back = base.clone().sub(here); back.y = 0;
    if (back.length() > 0.25) { fetch_.yaw = Math.atan2(back.x, back.z) - baseY; fetch_.pos = base.clone(); play('walk', { fade: 0.2, speed: RUN_ANIM }); const w0 = performance.now(); while (new THREE.Vector2(pivot.position.x - base.x, pivot.position.z - base.z).length() > 0.06 && performance.now() - w0 < 5000) await wait(40); }
    fetch_.pos = null; fetch_.yaw = 0; await waitYaw(); spin.y = 0; spin.x = 0; spin.vy = 0; fetch_.yaw = null;
    const dropP = playAsync('drop', 0.2); await wait((1023 - 1010) / 24 * 1000);
    holdJaw = false; scene.attach(ball); phys.on = false; phys.v.set(0, 0, 0); phys.vy = 0;
    const f2 = ball.position.clone(); const side = Math.random() < 0.5 ? -1 : 1; const to = new THREE.Vector3(THREE.MathUtils.clamp(pivot.position.x + side * 0.38, -phys.bounds.x, phys.bounds.x), floorY(), Math.min(pivot.position.z + 0.5, phys.bounds.zMax)); const d1 = performance.now();
    await new Promise((res) => { const step = () => { const t = Math.min(1, (performance.now() - d1) / 600); ball.position.lerpVectors(f2, to, t); ball.position.y = THREE.MathUtils.lerp(f2.y, to.y, t * t) + (t > 0.7 ? Math.sin((t - 0.7) / 0.3 * Math.PI) * 0.08 : 0); if (t < 1) requestAnimationFrame(step); else { ball.position.copy(to); res(); } }; step(); });
    await dropP;
  } catch (e) { console.error(e); }
  finally { busy = false; holdJaw = false; fetch_.pos = null; fetch_.yaw = null; phys.chase = false; play('idle', { fade: 0.4 }); }
}

async function waitYaw() {
  // wait until the pivot has turned to the requested yaw (facing the viewer), max 1.2 s
  const baseY = frame === 's1' ? -0.35 : frame === 's3' ? -0.5 : -0.2;
  const t0 = performance.now();
  while (performance.now() - t0 < 1200) {
    let d = (baseY + (fetch_.yaw || 0)) - pivot.rotation.y; d = Math.atan2(Math.sin(d), Math.cos(d));
    if (Math.abs(d) < 0.06) break; await wait(40);
  }
}
function startPet() {
  if (petting || busy || (current && current !== actions.idle && current !== actions.pet && current !== actions.petOut)) return;
  petting = true; hint.style.opacity = 0;
  play('petIn', { fade: 0.2, onDone: () => { if (petting) play('pet', { fade: 0.1 }); } });
}
function stopPet() {
  if (!petting) return; petting = false;
  play('petOut', { fade: 0.2, onDone: () => play('idle', { fade: 0.4 }) });
}

/* ---------- panting now and then ---------- */
const pant = { action: null, w: 0, on: false, t: 0, next: 4 };
const catchLick = { action: null };
function updatePant(dt) {
  if (!pant.action) return;
  const allowed = !busy && !game.on && !fetch_.mode && !petting && !holdJaw && (current === actions.idle || current === actions.sit);
  if (pant.on) { pant.t -= dt; if (pant.t <= 0 || !allowed) { pant.on = false; pant.next = 5 + Math.random() * 7; } }
  else if (allowed) { pant.next -= dt; if (pant.next <= 0) { pant.on = true; pant.t = 2.5 + Math.random() * 2.5; } }
  // open gently, close a little faster
  pant.w += ((pant.on ? 1 : 0) - pant.w) * Math.min(1, dt * (pant.on ? 3 : 5));
  pant.action.setEffectiveWeight(pant.w < 0.002 ? 0 : pant.w);
}

/* ---------- sit when left alone ---------- */
const sit = { state: 'stand', idle: 0, pending: null };
function sitReady() {
  return !busy && !beg.on && !game.on && !fetch_.mode && !petting && !phys.on && !phys.grab && !pointer.down && current === actions.idle;
}
function updateSit(dt) {
  if (sit.state !== 'stand') return;
  if (!sitReady()) { sit.idle = 0; return; }
  sit.idle += dt;
  if (sit.idle >= SIT_AFTER) {
    sit.state = 'down';
    play('sitDown', { fade: 0.35, onDone: () => { if (sit.state === 'down' && current === actions.sitDown) { sit.state = 'sitting'; play('sit', { fade: 0.2 }); } } });
  }
}
// any input: stand up first (if seated), then run `then`. Returns true when the dog is already standing.
function wake(then) {
  sfx.ensure();
  sit.idle = 0;
  if (sit.state === 'stand') { if (then) then(); return true; }
  if (then) sit.pending = then;
  if (sit.state === 'up') return false;
  const done = () => {
    sit.state = 'stand'; sit.idle = 0;
    if (current === actions.sitUp || current === actions.sitDown) play('idle', { fade: 0.3 });
    const p = sit.pending; sit.pending = null; if (p) p();
  };
  // barely started sitting: just settle back instead of playing the whole stand-up
  if (sit.state === 'down' && actions.sitDown.time < (CLIPS.sitDown.b - CLIPS.sitDown.a) / FPS * 0.4) { sit.state = 'up'; play('idle', { fade: 0.35 }); setTimeout(done, 300); return false; }
  sit.state = 'up';
  play('sitUp', { fade: 0.2, onDone: done });
  return false;
}

/* ---------- left alone, he asks for the ball ---------- */
// 1. he fetches the ball (one rolls in if there is none yet) and puts it down in front of the viewer
// 2. he looks at the ball, at the viewer, tilts his head; a thought of the ball hangs over him
// 3. still nothing: he turns to the ball, nudges it with his nose, drops into a play bow and yips
// 4. meanwhile the "Бросить мяч" button pulses, and a tap anywhere throws the ball there at once
// Any input stops it (begStop). The poses are procedural offsets on top of the clips: the rig has no bow of its own.
const BEG = { first: 7, again: 12 };
const beg = { idle: 0, on: false, stage: 0, look: null, tilt: 0, tiltTo: 0, bow: 0, bowTo: 0, snap: 0, cycles: 0, tok: 0, tap: 0 };
const begBubble = $('#begBubble');
const begQuiet = () => !busy && !game.on && !fetch_.mode && !petting && !phys.on && !phys.grab && !pointer.down && (frame === 's1' || frame === 's3') && !document.hidden
  && (current === actions.idle || current === actions.sit || current === actions.sitDown);
function begOff() { beg.on = false; beg.stage = 0; beg.look = null; beg.tiltTo = 0; beg.bowTo = 0; begBubble.classList.remove('on'); document.body.classList.remove('beg'); }
function begStop() {
  beg.idle = 0; if (!beg.on) return;
  beg.tok++; if (beg.stage === 3 && !busy) fetch_.yaw = null;
  begOff();
}
function yip() { beg.snap = 0.22; sfx.play('yip'); }
async function begRun() {
  const tok = ++beg.tok, alive = () => beg.on && beg.tok === tok;
  beg.on = true; beg.idle = 0; beg.cycles++;
  try {
    if (sit.state !== 'stand') { wake(); while (alive() && sit.state !== 'stand') await wait(60); await wait(200); }
    if (!alive()) return;
    // 1. the ball: one rolls in from the side the first time; then he runs to it and brings it to the front
    let ball = fetch_.ball && fetch_.ball.parent === scene ? fetch_.ball : null;
    if (!ball) {
      if (fetch_.ball) scene.remove(fetch_.ball);
      ball = makeBall(); fetch_.ball = ball; scene.add(ball);
      const side = Math.random() < 0.5 ? -1 : 1; ball.position.set(side * 1.3, floorY(), pivot.position.z + 0.3);
      phys.on = true; phys.v.set(-side * 1.5, 0, 0.05); phys.vy = 0; phys.chase = false;
      await wait(600); if (!alive()) return;
    }
    const near = Math.hypot(ball.position.x - pivot.position.x, ball.position.z - pivot.position.z) < 0.7 && ball.position.z > pivot.position.z + 0.2;
    if (!near || phys.on) { await chaseBall(); await wait(250); }
    if (!alive()) return;
    // 2. he asks
    beg.stage = 2; document.body.classList.add('beg'); begBubble.classList.add('on');
    for (let i = 0; i < 4 && alive(); i++) { const you = i % 2 === 1; beg.look = you ? 'you' : 'ball'; beg.tiltTo = you ? (i === 1 ? 0.3 : -0.3) : 0; await wait(you ? 1500 : 900); }
    if (!alive()) return;
    // 3. he insists: turns to the ball, nudges it, bows, yips
    beg.stage = 3; beg.look = 'ball'; beg.tiltTo = 0;
    const baseY = frame === 's1' ? -0.35 : frame === 's3' ? -0.5 : -0.2, dx = ball.position.x - pivot.position.x, dz = ball.position.z - pivot.position.z;
    fetch_.yaw = Math.atan2(dx, dz) - baseY; await wait(450); if (!alive()) return;
    beg.bowTo = 1; await wait(520); if (!alive()) return;
    if (!phys.on && ball.parent === scene) { phys.on = true; phys.chase = false; phys.v.set(Math.sign(dx || 1) * 0.12, 0, 0.3); phys.vy = 0.5; }   // the nudge: the ball hops and rolls a little toward the viewer
    await wait(650); if (!alive()) return;
    beg.look = 'you'; yip(); await wait(420); if (!alive()) return;
    yip(); await wait(1100); if (!alive()) return;
    beg.bowTo = 0; fetch_.yaw = null; await wait(600); if (!alive()) return;
    beg.tiltTo = 0.25; await wait(2200);   // and waits, head to one side
  } catch (e) { console.error('beg', e); }
  finally { if (beg.tok === tok) { if (beg.stage === 3 && !busy) fetch_.yaw = null; begOff(); beg.idle = 0; } }
}
function updateBeg(dt) {
  if (beg.on) {
    const hs = headScreen(); if (hs) begBubble.style.transform = `translate(${Math.round(hs.x + 34)}px, ${Math.round(hs.y - 96)}px)`;
    return;
  }
  if (!begQuiet()) { if (busy || game.on || pointer.down || fetch_.mode) beg.idle = 0; return; }
  beg.idle += dt;
  if (beg.idle >= (beg.cycles ? BEG.again : BEG.first)) begRun();
}
// per frame, after the mixer: the head tilt, the play bow, the yip
function begPose(dt) {
  beg.tilt += (beg.tiltTo - beg.tilt) * Math.min(1, dt * 5); beg.bow += (beg.bowTo - beg.bow) * Math.min(1, dt * 5);
  const t = beg.tilt, k = beg.bow;
  if (Math.abs(t) > 0.002) { life('head', 0, 0, t); life('neck', 0, 0, t * 0.4); }
  if (beg.look === 'ball' && k < 0.3) { life('neck', 0.14, 0, 0); life('head', 0.16, 0, 0); }   // looking down at it
  if (k > 0.002) {   // the play bow: chest to the floor on folded front legs, rump stays up, head lifted to the viewer
    life('spine', 0.3 * k, 0, 0); life('chest', 0.34 * k, 0, 0);
    life('neck', -0.3 * k, 0, 0); life('head', -0.28 * k, 0, 0);
    life('f_upperL', -1.0 * k, 0, 0); life('f_upperR', -1.0 * k, 0, 0); life('f_lowerL', 0.75 * k, 0, 0); life('f_lowerR', 0.75 * k, 0, 0);
    life('ear1L', -0.25 * k, 0, 0); life('ear1R', -0.25 * k, 0, 0);
  }
  if (beg.snap > 0 && jawBone && headBone) {
    const q = Math.sin(Math.PI * (1 - beg.snap / 0.22));
    _gq.setFromAxisAngle(_gx, 0.5 * q); procApply(jawBone, _gq);
    _gq.setFromAxisAngle(_gx, -0.16 * q); procApply(headBone, _gq);
    beg.snap -= dt;
  }
}

/* ---------- commands (training demo) ---------- */
function command(name) {
  if (sit.state !== 'stand' && name !== 'reset' && name !== 'showcard') { wake(() => command(name)); return; }
  if (busy) return;
  if (name === 'reset') { store.clear(); location.reload(); return; }
  if (name === 'showcard') { screens.s3.classList.remove('hidecard'); $('#showCard').style.display = 'none'; setFrame('s3'); return; }
  if (!actions[name]) return;
  petting = false; busy = true;
  const loop = CLIPS[name].loop;
  play(name, { fade: 0.25, onDone: loop ? undefined : () => { busy = false; play('idle', { fade: 0.5 }); } });
  if (loop) setTimeout(() => { busy = false; play('idle', { fade: 0.5 }); }, 4000);
}

/* ---------- events ---------- */
$('#catch').addEventListener('click', startGame);
$('#again').addEventListener('click', startGame);
$('#gQuit').addEventListener('click', quitGame);
const gMute = $('#gMute');
const showMute = () => { gMute.textContent = sfx.muted ? '🔇' : '🔊'; gMute.setAttribute('aria-label', sfx.muted ? 'Включить звук' : 'Выключить звук'); };
gMute.addEventListener('click', () => { sfx.setMuted(!sfx.muted); showMute(); if (!sfx.muted) sfx.play('star', 1); });
showMute();
$('#trainToggle').addEventListener('click', () => { if (confirm('Сбросить день? Звезда и фраза дня будут пойманы заново.')) command('reset'); });
$('#cardClose').addEventListener('click', () => { screens.s3.classList.add('hidecard'); $('#showCard').style.display = ''; setFrame('s1'); });
document.querySelectorAll('#throwBtn,[data-throw]').forEach((b) => b.addEventListener('click', armThrow));
function syncThrowBtns() { document.querySelectorAll('#throwBtn,[data-throw]').forEach((b) => { b.classList.toggle('armed', fetch_.mode); b.textContent = fetch_.mode ? 'Тапните, куда бросить' : 'Бросить мяч'; }); }
document.querySelectorAll('.cmds').forEach((row) => row.addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) command(b.dataset.cmd); }));
// desktop: mouse wheel scrolls the command row sideways, and it can be dragged with the mouse
document.querySelectorAll('.cmds').forEach((row) => {
  row.addEventListener('wheel', (e) => {
    if (row.scrollWidth <= row.clientWidth || Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
    e.preventDefault(); row.scrollLeft += e.deltaY;
  }, { passive: false });
  let down = false, moved = false, x0 = 0, left0 = 0;
  row.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse' || e.button !== 0) return; down = true; moved = false; x0 = e.clientX; left0 = row.scrollLeft; });
  window.addEventListener('pointermove', (e) => {
    if (!down) return;
    const dx = e.clientX - x0;
    if (!moved && Math.abs(dx) > 5) { moved = true; row.style.scrollSnapType = 'none'; row.classList.add('dragging'); }
    if (moved) row.scrollLeft = left0 - dx;
  });
  window.addEventListener('pointerup', () => { if (!down) return; down = false; row.style.scrollSnapType = ''; row.classList.remove('dragging'); });
  row.addEventListener('click', (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
});

let pointer = { x: -1, y: -1, down: false };
addEventListener('pointerdown', () => { beg.tap = beg.on && beg.stage >= 2 && !busy ? performance.now() : 0; begStop(); wake(); }, true);
addEventListener('keydown', () => { begStop(); wake(); }, true);
addEventListener('wheel', () => { begStop(); wake(); }, { capture: true, passive: true });
addEventListener('pointermove', () => { if (sit.state === 'stand') sit.idle = 0; }, true);
addEventListener('pointermove', (e) => {
  if (game.on) {
    if (game.drag && game.drag.id === e.pointerId) {
      game.drag.moved += Math.abs(e.clientX - game.drag.lx); game.drag.lx = e.clientX;
      if (!game.finale) game.targetX = screenX2world(e.clientX);
      if (game.drag.moved > 8) coachDone();
    }
    return;
  }
  if (phys.grab && phys.grab.id === e.pointerId) {
    phys.grab.pts.push([e.clientX, e.clientY, performance.now()]); if (phys.grab.pts.length > 12) phys.grab.pts.shift();
    return;
  }
  pointer.x = e.clientX; pointer.y = e.clientY; if (isMobile && pointer.down) eyes.hold = 4;
  if (spin.dragging) {
    const dx = e.clientX - spin.lastX, dy = e.clientY - spin.lastY; spin.lastX = e.clientX; spin.lastY = e.clientY;
    spin.moved += Math.abs(dx) + Math.abs(dy);
    // the release spin is kept as "radians per 60 Hz frame", measured over the real time between pointer events,
    // so the coast after a flick is the same on a 60 and a 120 Hz screen
    const et = THREE.MathUtils.clamp(e.timeStamp - (spin.lastT || e.timeStamp - 16.7), 4, 50); spin.lastT = e.timeStamp;
    spin.y += dx * 0.006; spin.vy = dx * 0.006 * 16.7 / et; spin.x = THREE.MathUtils.clamp(spin.x + dy * 0.003, -0.35, 0.35);
    if (spin.moved > 12 && petting) stopPet();
  }
});
canvas.addEventListener('pointerdown', (e) => {
  if (game.on && game.playing) { game.targetX = screenX2world(e.clientX); coachDone(); }
  if (game.on) { game.drag = { id: e.pointerId, x: e.clientX, lx: e.clientX, t: performance.now(), moved: 0 }; try { canvas.setPointerCapture(e.pointerId); } catch {} return; }
  // pick up the resting ball with a drag
  if (fetch_.ball && !busy && !phys.on && fetch_.ball.parent === scene) {
    const bp = fetch_.ball.position.clone().project(camera); const bx = (bp.x + 1) / 2 * innerWidth, by = (1 - bp.y) / 2 * innerHeight;
    if (Math.hypot(e.clientX - bx, e.clientY - by) < Math.min(innerWidth, innerHeight) * 0.12) { phys.grab = { id: e.pointerId, pts: [[e.clientX, e.clientY, performance.now()]] }; try { canvas.setPointerCapture(e.pointerId); } catch {} return; }
  }
  pointer.x = e.clientX; pointer.y = e.clientY; pointer.down = true; eyes.hold = 4; spin.dragging = true; spin.lastX = e.clientX; spin.lastY = e.clientY; spin.lastT = e.timeStamp; spin.moved = 0; try { canvas.setPointerCapture(e.pointerId); } catch {} });
function onPointerEnd(e) {
  if (game.on) {
    const d = game.drag; game.drag = null;
    if (d && d.id === e.pointerId && e.type === 'pointerup' && d.moved < 10 && performance.now() - d.t < 350) gameTap();
    return;
  }
  if (phys.grab && phys.grab.id === e.pointerId) {
    const pts = phys.grab.pts; phys.grab = null;
    try {
      const a = pts[0], b = pts[pts.length - 1];
      // last ~120 ms for velocity, whole gesture for direction fallback
      let k = pts.length - 1; while (k > 0 && b[2] - pts[k - 1][2] < 120) k--;
      const a2 = pts[k]; const dt = Math.max(16, b[2] - a2[2]) / 1000;
      const p0 = floorPointRaw(a2[0], a2[1]), p1 = floorPointRaw(b[0], b[1]);
      const q0 = floorPointRaw(a[0], a[1]);
      const v = p1.clone().sub(p0).divideScalar(dt); v.y = 0;
      const disp = p1.clone().sub(q0); disp.y = 0;
      const upPx = a[1] - b[1]; const lift = THREE.MathUtils.clamp(Math.max(0, upPx) / (innerHeight * 0.35), 0, 1);   // a third of the screen = full-power throw
      v.z *= 0.35; disp.z *= 0.35;
      const touch = e.pointerType === 'touch';
      if (touch) { const gestureV = disp.clone().multiplyScalar(6.0); if (gestureV.length() > v.length()) v.copy(gestureV); else v.multiplyScalar(1.4); }
      else if (v.length() < 0.8 && disp.length() > 0.15) v.copy(disp).multiplyScalar(4.0);
      // an upward gesture also sends the ball away from the viewer so it arcs across the scene
      if (lift > 0.05) v.z -= lift * 2.2;
      if (v.length() > 0.5 || lift > 0.05) { v.z = THREE.MathUtils.clamp(v.z, -2.6, 2.0); flickBall(v.clampLength(0, 7.5), 1.2 + lift * 9.0); }
    } catch (err) { console.error('flick', err); }
    return;
  }
  pointer.down = false; spin.dragging = false;
  // a tap throws the ball there: when the button was armed, or while he was asking for it
  const asked = beg.tap && performance.now() - beg.tap < 700; beg.tap = 0;
  if (e.type === 'pointerup' && (fetch_.mode || asked) && spin.moved < 10 && e.target === canvas) throwBall(e.clientX, e.clientY);
}
addEventListener('pointerup', onPointerEnd);
addEventListener('pointercancel', onPointerEnd);
addEventListener('keydown', (e) => {
  if (!game.on) return;
  if (e.code === 'Space' || e.code === 'ArrowUp') { e.preventDefault(); gameTap(); }
  if (e.code === 'ArrowLeft') { game.targetX = pivot.position.x - 0.6; coachDone(); }
  if (e.code === 'ArrowRight') { game.targetX = pivot.position.x + 0.6; coachDone(); }
});
canvas.addEventListener('dblclick', () => { spin.y = 0; spin.x = 0; spin.vy = 0; zoom.target = 1.3; });
canvas.addEventListener('wheel', (e) => { e.preventDefault(); zoom.target = THREE.MathUtils.clamp(zoom.target * (1 + Math.sign(e.deltaY) * 0.08), zoom.min, zoom.max); }, { passive: false });
const touches = new Map();
canvas.addEventListener('pointerdown', (e) => { if (e.pointerType === 'touch' && !(phys.grab && phys.grab.id === e.pointerId)) touches.set(e.pointerId, [e.clientX, e.clientY]); });
canvas.addEventListener('pointermove', (e) => {
  if (!touches.has(e.pointerId)) return; touches.set(e.pointerId, [e.clientX, e.clientY]);
  if (touches.size === 2) {
    const [a, b] = [...touches.values()]; const d = Math.hypot(a[0] - b[0], a[1] - b[1]);
    if (zoom.pinch) zoom.target = THREE.MathUtils.clamp(zoom.target * (zoom.pinch / d), zoom.min, zoom.max);
    zoom.pinch = d; spin.dragging = false;
  }
});
addEventListener('pointerup', (e) => { touches.delete(e.pointerId); if (touches.size < 2) zoom.pinch = 0; });
addEventListener('pointercancel', (e) => { touches.delete(e.pointerId); zoom.pinch = 0; });
addEventListener('pointerleave', () => { pointer.x = -1; spin.dragging = false; });
canvas.style.touchAction = 'none';
canvas.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
canvas.addEventListener('touchstart', (e) => { if (e.touches.length === 1) e.preventDefault(); }, { passive: false });

function toast(msg) { hint.textContent = msg; hint.style.opacity = 1; setTimeout(() => { hint.style.opacity = 0; hint.textContent = 'Покрутите Ори пальцем'; }, 1800); }
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

/* ---------- resize ---------- */
// size the drawing buffer from the canvas' real box (not the window), so the picture can never be stretched,
// and keep the pixel count within a budget: a 4K monitor at DPR 2 is ~16 MP per frame for this material
const PIXEL_BUDGET = isMobile ? 2.2e6 : 3.2e6;
let qualityScale = 1;
function resize() {
  const w = canvas.clientWidth || innerWidth, h = canvas.clientHeight || innerHeight;
  const dpr = Math.min(devicePixelRatio || 1, isMobile ? 1.5 : 2, Math.sqrt(PIXEL_BUDGET / (w * h))) * qualityScale;
  renderer.setPixelRatio(Math.max(0.75, dpr));
  renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
}
addEventListener('resize', resize); resize();
if (window.ResizeObserver) new ResizeObserver(resize).observe(canvas);
// adaptive quality: if frames get slow for a couple of seconds, render fewer pixels (and back up when it is smooth)
const perf = { acc: 0, n: 0, t: 0 };
function watchPerf(dt) {
  perf.acc += dt; perf.n++; perf.t += dt;
  if (perf.t < 2) return;
  const avg = perf.acc / perf.n; perf.acc = perf.n = perf.t = 0;
  const prev = qualityScale;
  if (avg > 1 / 45 && qualityScale > 0.55) qualityScale = Math.max(0.55, qualityScale - 0.15);
  else if (avg < 1 / 58 && qualityScale < 1) qualityScale = Math.min(1, qualityScale + 0.1);
  if (qualityScale !== prev) resize();
}

/* ---------- loop ---------- */
function tick(_ts, simDt) {
  const dt = simDt !== undefined ? simDt : Math.min(clock.getDelta(), 0.05);
  if (simDt === undefined && document.visibilityState === 'visible') watchPerf(dt);
  const t = clock.elapsedTime;
  starsFar.material.uniforms.uTime.value = t; starsNear.material.uniforms.uTime.value = t;
  starsFar.rotation.z = t * 0.004; starsNear.rotation.z = -t * 0.006;
  // camera
  const f = FRAMES[frame];
  view.tPos.fromArray(f.pos); view.tLook.fromArray(f.look);
  const narrow = innerWidth / innerHeight < 0.62 ? 1.0 : 0.85;
  zoom.v += (zoom.target - zoom.v) * ease(0.12, dt);
  view.tPos.sub(view.tLook).multiplyScalar(zoom.v * narrow).add(view.tLook);
  view.pos.lerp(view.tPos, ease(0.06, dt)); view.look.lerp(view.tLook, ease(0.06, dt));
  camera.position.copy(view.pos); camera.lookAt(view.look);
  if (ori) {
    if (game.on) gameStep(dt);
    else {
    if (fetch_.pos) { const tgt = fetch_.pos; const dv = tgt.clone().sub(pivot.position); dv.y = 0; const L = dv.length(); const stepL = Math.min(L, RUN_SPEED * dt); if (L > 1e-4) pivot.position.addScaledVector(dv.normalize(), stepL); }
    else pivot.position.lerp(_v.fromArray(f.model), ease(0.06, dt));
    pedestal.position.set(pivot.position.x, pivot.position.y + 0.005, pivot.position.z);
    if (!spin.dragging) { const n60 = dt * 60; spin.y += spin.vy * n60; spin.vy *= Math.pow(0.92, n60); spin.x *= Math.pow(0.95, n60); }
    // while the dog is fetching, its facing is driven by the chase; fade the user's manual rotation to zero
    // so releasing the fetch yaw cannot snap it back sideways when it delivers the ball
    if (fetch_.yaw !== null) { const kd = 1 - Math.pow(0.02, dt); spin.y -= spin.y * kd; spin.x -= spin.x * kd; spin.vy = 0; }
    const baseY = frame === 's1' ? -0.35 : frame === 's3' ? -0.5 : -0.2;
    const wantYaw = fetch_.yaw !== null ? baseY + fetch_.yaw : Math.sin(t * 0.35) * 0.06 + baseY + spin.y;
    let dy = wantYaw - pivot.rotation.y; dy = Math.atan2(Math.sin(dy), Math.cos(dy)); pivot.rotation.y += dy * (fetch_.yaw !== null ? ease(0.18, dt) : 1);
    pivot.rotation.x = spin.x;
    }
    procUndo();
    mixer.update(dt);
    if (flatMeshes.length) {
      const ba = actions.belly, w = ba && ba.isRunning() ? ba.getEffectiveWeight() : 0;
      const k = w > 0 ? w * flatAt(CLIPS.belly.a + ba.time * FPS) : 0;
      for (const m of flatMeshes) m.morphTargetInfluences[m.morphTargetDictionary.Flat] = k;
    }
    if (game.on) gamePose(dt); else begPose(dt);
    if (holdJaw && jawBone) { const e = new THREE.Euler().setFromQuaternion(jawBone.quaternion, 'XYZ'); if (e.x < JAW_HOLD) { e.x = JAW_HOLD; jawBone.quaternion.setFromEuler(e); } }
    // tail wag on top of the clips
    const _ba = actions.belly, bellyK = _ba && _ba.isRunning() ? bellyWagK(CLIPS.belly.a + _ba.time * FPS) : 1;
    const wagAmp = bellyK * THREE.MathUtils.degToRad(petting || beg.on || (game.on && game.wag > 0) ? tail.amp * 2.2 : sit.state === 'sitting' ? tail.amp * 0.3 : tail.amp), wagT = t * (petting || beg.stage >= 2 ? tail.speed * 1.8 : tail.speed) * Math.PI * 2;
    for (let i = 0; i < 5; i++) {
      const b = tail.bones[i]; if (!b) continue;
      const z = wagAmp * tail.gains[i] * Math.sin(wagT - tail.lags[i]);
      const x = wagAmp * 0.25 * tail.gains[i] * Math.sin(wagT - tail.lags[i] + Math.PI / 2);
      _qz.setFromAxisAngle(_az, z); _qx.setFromAxisAngle(_ax, x);
      procApply(b, _qz); procApply(b, _qx);
    }
    // procedural life on top of the clips: breathing (chest/spine), head sway, ear swing
    if (!busy && !fetch_.mode) {
      const br = Math.sin(t * 2 * Math.PI * 0.32);
      life('chest', 0.018 * br, 0, 0); life('spine', -0.012 * br, 0, 0);
      life('neck', 0.02 * Math.sin(t * 1.1), 0.03 * Math.sin(t * 0.7 + 1.0), 0.02 * Math.sin(t * 0.9 + 2.0));
      life('head', 0.025 * Math.sin(t * 0.8 + 0.5), 0.04 * Math.sin(t * 0.55 + 2.3), 0.03 * Math.sin(t * 0.65 + 4.0));
      const ear = 0.04 * Math.sin(t * 1.6) + 0.02 * br;
      life('ear1L', ear, 0, 0); life('ear1R', ear, 0, 0); life('ear2L', ear * 1.4, 0, 0); life('ear2R', ear * 1.4, 0, 0);
    }
    if (!timeUnis) { timeUnis = []; ori.traverse((o) => { if (o.isMesh && o.material.userData.uni) timeUnis.push(o.material.userData.uni); }); }   // collected once, not every frame
    for (const u of timeUnis) u.uTime.value = t;
    updateEyes(dt); updateBlink(dt); updateSit(dt); updatePant(dt); updateBeg(dt);
    // touching the dog only rotates it: the pet reaction fired on every touch and read as a twitch,
    // so it is off (startPet/stopPet stay available for the command menu)
    if (petting) stopPet();
  }
  stepBallPhysics(dt);
  if (fetch_.ball && fetch_.ball.visible && !phys.on && fetch_.ball.parent === scene && !busy) fetch_.ball.position.y = floorY();
  // sparks: one draw call; the point size matches the old sprites (world units -> pixels at this camera)
  stepSparks(dt);
  pMat.uniforms.pxPerUnit.value = renderer.domElement.height * 0.5 * camera.projectionMatrix.elements[5];
  if (simDt !== undefined) return;   // fixed-step simulation for tests: no render, no new frame
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}

/* ---------- boot ---------- */
(async () => {
  try { await loadModel(); } catch (e) { console.error(e); $('#loading').textContent = 'Не удалось загрузить Ори'; return; }
  // compile the dog's shaders (crystal body: clearcoat + iridescence + sheen + skinning) while the loader is still up,
  // so the first frames do not stall on them
  try { await renderer.compileAsync(scene, camera); } catch (e) { console.error(e); }
  $('#loading').style.opacity = 0; setTimeout(() => $('#loading').remove(), 500);
  const saved = store.get();
  if (saved && saved.date === TODAY && saved.phrase) {
    phraseToday = saved.phrase; $('#phrase').textContent = saved.phrase; applyShine(saved.shine, saved.nova); showScreen('s3'); setFrame('s3');
  }
  play('idle');
  window.__ori = { beg, get actions() { return actions; }, get mixer() { return mixer; }, play, game, tick, sim: (dt) => tick(0, dt), toScreen, startGame, camera, renderer, eyes, blink, spin, pointer, flick: (x, z) => flickBall(new THREE.Vector3(x, 0, z)), get pivot() { return pivot; }, get ball() { return fetch_.ball; }, scene, phys, sit, pant, get busy() { return busy; }, get cur() { return current && current.getClip().name; }, get pupil() { const e = eyes.pupils[0]; return e ? [e.node.position.x - e.base.x, e.node.position.y - e.base.y, e.node.position.z - e.base.z] : null; } };
  tick();
  setTimeout(warmGame, 800);
})();

// The game's materials (planets, meteorite, ice with and without cracks, red dwarf, orbit track, sprites, the ball)
// are compiled in the background on the menu: otherwise each one compiles in the frame it first appears,
// a hitch at the start of a round and on the first cracked comet.
function warmGame() {
  const grp = new THREE.Group(), cracked = jumpMat.ice.clone();
  cracked.emissiveMap = iceCracks[1]; cracked.emissive.set(0xffffff);
  for (const m of [...jumpMat.planet, jumpMat.ice, cracked, jumpMat.hot, jumpMat.lime, jumpMat.belt]) grp.add(new THREE.Mesh(jumpGeo.planet, m));
  grp.add(new THREE.Mesh(jumpGeo.rock, jumpMat.rock));
  for (const map of [starTex, starGlowTex, glowTex, holeTex, bubbleTex, meteorTex, bonusTex.rocket]) grp.add(new THREE.Sprite(new THREE.SpriteMaterial({ map, transparent: true, depthWrite: false })));
  grp.add(new THREE.Sprite(new THREE.SpriteMaterial({ map: starTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })));
  grp.add(new THREE.Line(new THREE.BufferGeometry(), new THREE.LineDashedMaterial({ color: 0xfafafc, transparent: true, opacity: 0.28 })));
  grp.add(makeBall());
  // not disposed afterwards: dispose() would release the very programs that were just compiled
  renderer.compileAsync(grp, camera, scene).catch((e) => console.error(e));
}
