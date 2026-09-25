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
  sp.userData.v = v; sp.userData.life = life; sp.userData.t = 0;
  fallers.push(sp); return sp;
}
// emission is per SECOND, not per frame: a 120 Hz screen (or a benchmark) must not double the sparks
const emit = (perFrameAt60, dt) => { const n = perFrameAt60 * dt * 60; return Math.floor(n) + (Math.random() < n % 1 ? 1 : 0); };
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
    pBuf.size[n] = s.size; pBuf.alpha[n] = Math.max(0, 1 - u.t / u.life); n++;
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
  const buf = window.ORI_GLB ? decodeGLB(window.ORI_GLB) : await (await fetch('assets/ori.glb' + (window.ORI_GLB_V ? '?v=' + window.ORI_GLB_V : ''))).arrayBuffer();   // versioned: a new model is never served from an old cache
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
const TODAY = new Date().toISOString().slice(0, 10);
const store = {
  get() { try { return JSON.parse(localStorage.getItem('ori_star') || 'null'); } catch { return null; } },
  set(v) { try { localStorage.setItem('ori_star', JSON.stringify(v)); } catch {} },
  clear() { try { localStorage.removeItem('ori_star'); } catch {} },
};
function pickPhrase() {
  const lib = window.ORI_PHRASES; const cats = Object.keys(lib);
  const used = (store.get() && store.get().used) || [];
  const money = Math.random() < 0.17;
  const pool = money ? lib.money : cats.filter((c) => c !== 'money').flatMap((c) => lib[c]);
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
// the constellation is filled in UNITS: every point takes two stars (half-lit after the first one)
function refreshSky() {
  const full = new Set();
  game.ptEls.forEach((el, p) => {
    const c = (game.shown.has(2 * p) ? 1 : 0) + (game.shown.has(2 * p + 1) ? 1 : 0);
    el.classList.toggle('lit', c === 2); el.classList.toggle('half', c === 1); el.setAttribute('r', c === 2 ? 2.2 : c === 1 ? 1.95 : 1.7);
    if (c === 2) full.add(p);
  });
  game.litSet = full;
  for (const l of game.lineEls) l.el.classList.toggle('lit', full.has(l.a) && full.has(l.b));
}
function lightUnit(idx) { game.shown.add(idx); refreshSky(); }
function flyToSky(from, idx) {
  const el = document.createElement('div'); el.className = 'g-fly'; el.style.left = from.x + 'px'; el.style.top = from.y + 'px';
  document.body.appendChild(el);
  const r = game.ptEls[idx >> 1].getBoundingClientRect();
  setTimeout(() => { el.style.transform = `translate(${r.left + r.width / 2 - from.x}px, ${r.top + r.height / 2 - from.y}px) scale(.45)`; }, 20);
  setTimeout(() => { el.remove(); if (game.on && idx < game.lit) lightUnit(idx); }, 640);
}
function unlightUnit(idx) {
  game.shown.delete(idx); refreshSky();
  const el = game.ptEls[idx >> 1]; el.classList.remove('lost'); void el.getBBox(); el.classList.add('lost');
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
function gSay(text, ms) {
  gHint.textContent = text;
  if (ms) { const token = Symbol(); game.sayToken = token; setTimeout(() => { if (game.sayToken === token && game.on && !game.finale) gHint.textContent = game.baseHint; }, ms); }
}
function makeGameStar(kind) {
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: starTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  if (kind === 'blue') sp.material.color.set(0x9fc8ff);
  if (kind === 'comet') sp.material.color.set(0xd9f38b);
  sp.scale.setScalar(kind === 'comet' ? 0.36 : kind === 'blue' ? 0.27 : 0.23);
  scene.add(sp); game.stars.push(sp); return sp;
}
function removeGameStar(i, puff) {
  const s = game.stars[i];
  if (puff) for (let k = 0; k < 5; k++) { const a = Math.random() * Math.PI; const f = spawnFaller(s.position.x, s.position.y, s.position.z, new THREE.Vector3(Math.cos(a) * 0.6, Math.sin(a) * 0.5, 0), 0.05, 0.45); f.material.color.copy(s.material.color); }
  scene.remove(s); s.material.dispose(); game.stars.splice(i, 1);
}

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
  gX2.textContent = '';
  gEl.classList.add('jump');
  setX2(false);
  Object.assign(game, { on: true, t: 0, dur: 25, stars: [], lit: 0, need: shape.pts.length * 2, caught: 0,
    snap: 0, leap: null, anim: '', finale: false, lockAnim: false, helped: false, targetX: 0, airT: 0, airDur: 1, airK: 0, squash: 0, lean: 0, earA: 0, earV: 0,
    baseY: FRAMES.game.model[1], mouthY0: 0, drag: null, tapped: null, tapWindow: false, playing: false, hero: null, heroPhase: null, shape });
  buildSky(shape); gName.textContent = shape.name; gBar.style.transform = 'scaleX(1)';
  game.baseHint = 'Ведите пальцем — Ори прыгает по планетам';
  showScreen(null); setFrame('game'); zoom.target = 1.5;   // a wider view of the sky
  spin.y = spin.x = spin.vy = 0;
  jumpStart();
  updateScore();
  document.body.classList.add('night', 'gaming'); gEl.classList.remove('done'); gEl.classList.add('show');
  gSay('Допрыгни до звезды дня — она на 100 м');
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
    gSay(`${g.newRecord ? 'Новый рекорд' : 'Высота'}: ${fmtScore(h)} м · ★ ${g.caught} · идеальных подряд: ${g.bestSeries}` + (g.newRecord ? '' : ` · рекорд ${fmtScore(Math.max(rec, h))} м`));
    await gwait(2200);
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
  const shineAll = !!shine || !!(keep && rec.shine);
  store.set({ date: TODAY, phrase: phraseToday, used: keep ? rec.used || [] : [...(rec.used || []), phraseToday].slice(-160), shine: shineAll, constellation: g.shape.name });
  $('#phrase').textContent = phraseToday; applyShine(shineAll);
  await gwait(500);
  endGame();
  screens.s3.classList.remove('hidecard'); $('#showCard').style.display = 'none';
  showScreen('s3'); setFrame('s3');
  play('pet', { fade: 0.3 });
  await gwait(1400);
  play('idle', { fade: 0.5 });
  unparkBall(); busy = false;
}
function applyShine(shine) {
  const card = screens.s3.querySelector('.card'); card.classList.toggle('shine', !!shine);
  const from = card.querySelector('.from'); from.textContent = shine ? 'Ори поймал для вас сияющую звезду' : 'Ори поймал для вас звезду';
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
// Goal: the star of the day hangs at 100 m (its light is always visible at the top and grows as Ori nears it).
// Reached it = a shining star (if he never needed rescuing); after it the climb goes on for a record.
// Ori bounces by himself, the finger steers. Stars are CURRENCY: a fall costs 5 stars for a rescue planet,
// no stars = the run is over. Perfect landings (close to the planet's centre) build a series: stars count x2,
// 5 perfect in a row charge a "dash" (next bounce x3 high).
// Levels every 20 m: Орбита → Пояс астероидов (moving planets, crumbling meteorites, flying meteors) →
// Ледяная туманность (ice comets: one bounce, slippery edges) → Солнечный ветер (hot red dwarfs push him
// down, side gusts) → Чёрные дыры (pull him in; skimming past the edge gives a boost) → Глубокий космос (all
// mixed, harder every 20 m). Rare power-ups: rocket (3 s of flight), bubble (saves once), magnet (5 s).
// Every row has one reachable safe platform; traps and hazards are extras.
const JUMP = { g: 10, v0: 6.8, boost: 1.75, dash: 1.75, levelH: 20, goal: 100, maxGap: 2.1, speed: 5, rescue: 5, bank0: 5, perfect: 0.13 };
const LEVELS = [
  { name: 'Орбита', gap: [1.2, 1.6], move: 0, ice: 0, ring: 0.1, crumble: 0, hot: 0, hole: 0, meteor: 0, gust: 0, star: 0.45, bonus: 0.03 },
  { name: 'Пояс астероидов', gap: [1.4, 1.8], move: 0.3, ice: 0, ring: 0.08, crumble: 0.35, hot: 0, hole: 0, meteor: 5, gust: 0, star: 0.4, bonus: 0.045 },
  { name: 'Ледяная туманность', gap: [1.5, 1.9], move: 0.2, ice: 0.35, ring: 0.08, crumble: 0.3, hot: 0, hole: 0, meteor: 4.5, gust: 0, star: 0.4, bonus: 0.045 },
  { name: 'Солнечный ветер', gap: [1.5, 1.95], move: 0.3, ice: 0.1, ring: 0.08, crumble: 0.2, hot: 0.4, hole: 0, meteor: 4.5, gust: 6, star: 0.4, bonus: 0.05 },
  { name: 'Чёрные дыры', gap: [1.6, 2.0], move: 0.3, ice: 0.15, ring: 0.08, crumble: 0.25, hot: 0.15, hole: 0.3, meteor: 4, gust: 0, star: 0.4, bonus: 0.05 },
  { name: 'Глубокий космос', gap: [1.65, 2.05], move: 0.35, ice: 0.2, ring: 0.08, crumble: 0.3, hot: 0.25, hole: 0.15, meteor: 3.2, gust: 7, star: 0.35, bonus: 0.05 },
];
const gameMode = 'jump';   // "Звездопад" was removed; the jump game is the only game
function getRecord() { try { return +localStorage.getItem('ori-record-jump') || 0; } catch { return 0; } }
function setRecord(v) { try { localStorage.setItem('ori-record-jump', String(v)); } catch {} }
const fmtScore = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
function showRecord() {
  const r = getRecord();
  document.querySelectorAll('.g-rec').forEach((el) => { el.textContent = r > 0 ? `${fmtScore(r)} м` : ''; });
  document.querySelectorAll('.g-recchip').forEach((el) => { el.style.display = r > 0 ? '' : 'none'; });
}
showRecord();
const gScore = $('#gScore'), gAlt = $('#gAlt'), gAltFill = $('#gAltFill'), gAltMe = $('#gAltMe'), gAltStar = $('#gAltStar');
function updateScore() {
  if (!gScore) return;
  if (game.mode !== 'jump') { gScore.innerHTML = ''; return; }
  gScore.innerHTML = `${fmtScore(Math.floor(game.best || 0))} м<span>★ ${game.bank}</span>`;
  const f = THREE.MathUtils.clamp((game.alt || 0) / JUMP.goal, 0, 1), fb = THREE.MathUtils.clamp((game.best || 0) / JUMP.goal, 0, 1);
  gAltFill.style.transform = `scaleY(${fb})`; gAltMe.style.bottom = `${f * 100}%`;
  gAltStar.classList.toggle('got', !!game.dayStar);
}
function setSeries() {
  const g = game, n = g.series;
  gX2.textContent = n >= 3 ? `Идеально ×${n} · звёзды ×2` : n >= 1 ? `Идеально ×${n}` : '';
  gX2.classList.toggle('on', n >= 1);
}
function gPop(text, at, bad) {
  const el = document.createElement('div'); el.className = 'g-pop' + (bad ? ' bad' : ''); el.textContent = text;
  el.style.left = at.x + 'px'; el.style.top = at.y + 'px'; document.body.appendChild(el);
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
const holeTex = spriteTex((x, s) => {
  const g = x.createRadialGradient(s / 2, s / 2, s * 0.12, s / 2, s / 2, s / 2);
  g.addColorStop(0, '#000'); g.addColorStop(0.32, '#05060c'); g.addColorStop(0.42, '#7d63d8'); g.addColorStop(0.5, '#D9F38B'); g.addColorStop(0.62, 'rgba(125,99,216,.55)'); g.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = g; x.beginPath(); x.arc(s / 2, s / 2, s / 2, 0, Math.PI * 2); x.fill();
});
const glowTex = spriteTex((x, s) => { const g = x.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2); g.addColorStop(0, 'rgba(255,170,90,.9)'); g.addColorStop(0.5, 'rgba(255,60,40,.35)'); g.addColorStop(1, 'rgba(255,0,50,0)'); x.fillStyle = g; x.fillRect(0, 0, s, s); });
const bubbleTex = spriteTex((x, s) => { x.strokeStyle = 'rgba(217,243,139,.9)'; x.lineWidth = s * 0.03; x.beginPath(); x.arc(s / 2, s / 2, s * 0.45, 0, Math.PI * 2); x.stroke(); const g = x.createRadialGradient(s * 0.38, s * 0.35, 0, s / 2, s / 2, s * 0.45); g.addColorStop(0, 'rgba(255,255,255,.35)'); g.addColorStop(1, 'rgba(217,243,139,.08)'); x.fillStyle = g; x.fill(); });
const BONUS = { rocket: '🚀', bubble: '🫧', magnet: '🧲' };
const bonusTex = Object.fromEntries(Object.entries(BONUS).map(([k, e]) => [k, spriteTex((x, s) => {
  x.fillStyle = 'rgba(29,34,51,.85)'; x.beginPath(); x.arc(s / 2, s / 2, s * 0.46, 0, Math.PI * 2); x.fill();
  x.strokeStyle = '#D9F38B'; x.lineWidth = s * 0.05; x.stroke();
  x.font = `${s * 0.5}px system-ui, "Apple Color Emoji", "Segoe UI Emoji"`; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(e, s / 2, s / 2 + s * 0.03);
})]));
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
function makePlatform(type, x, y) {
  const grp = new THREE.Group(); let body;
  if (type === 'crumble') { body = new THREE.Mesh(jumpGeo.rock, jumpMat.rock); body.scale.setScalar(0.9); body.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3); }
  else if (type === 'ice') { body = new THREE.Mesh(jumpGeo.planet, jumpMat.ice.clone()); }
  else if (type === 'ground') { body = new THREE.Object3D(); }
  else if (type === 'hot') {
    body = new THREE.Mesh(jumpGeo.planet, jumpMat.hot);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })); glow.scale.setScalar(1.5); grp.add(glow);
  } else {
    const mat = type === 'rescue' ? jumpMat.lime : jumpMat.planet[Math.floor(Math.random() * jumpMat.planet.length)];
    body = new THREE.Mesh(jumpGeo.planet, mat); body.rotation.set((Math.random() - 0.5) * 0.5, Math.random() * 6, (Math.random() - 0.5) * 0.4);
    if (type === 'move') { const b = new THREE.Mesh(jumpGeo.belt, jumpMat.belt); b.rotation.x = Math.PI / 2 - 0.25; grp.add(b); }
  }
  grp.add(body);
  if (type === 'ring') { const r = new THREE.Mesh(jumpGeo.ring, jumpMat.lime); r.rotation.x = Math.PI / 2 - 0.35; r.rotation.y = 0.25; grp.add(r); }
  grp.position.set(x, y, 0); scene.add(grp);
  const p = { grp, body, type, x0: x, w: type === 'ground' ? 1.4 : 0.42, top: type === 'ground' ? 0 : type === 'crumble' ? 0.34 : PLANET_R - 0.02, vx: 0, alive: true, gone: 0 };
  if (type === 'move') p.vx = (Math.random() < 0.5 ? -1 : 1) * (0.7 + Math.random() * 0.6);
  game.plats.push(p); return p;
}
function removePlatform(i) { const p = game.plats[i]; scene.remove(p.grp); game.plats.splice(i, 1); }
function jumpLevel(alt = game.alt) { const k = Math.floor(Math.max(0, alt) / JUMP.levelH); return { idx: Math.min(k, LEVELS.length - 1), extra: Math.max(0, k - (LEVELS.length - 1)), n: k }; }
function jumpStar(x, y) {
  const sp = makeGameStar('white'); sp.position.set(x, y, 0.15);
  sp.userData = { kind: 'white', spin: (Math.random() - 0.5) * 2, base: sp.scale.x, age: Math.random() * 6 };
}
function jumpBonus(x, y) {
  const kind = ['rocket', 'bubble', 'magnet'][Math.floor(Math.random() * 3)];
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: bonusTex[kind], transparent: true, depthWrite: false })); sp.scale.setScalar(0.5);
  sp.position.set(x, y, 0.2); scene.add(sp); game.bonuses.push({ sp, kind, t: Math.random() * 6 });
}
function jumpHole(x, y) {
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: holeTex, transparent: true, depthWrite: false })); sp.scale.setScalar(1.25);
  sp.position.set(x, y, -0.05); scene.add(sp); game.holes.push({ sp, near: 9, used: false });
}
// one row = one reachable safe platform + optional extras (trap, hot dwarf, black hole, star, power-up)
function jumpRow() {
  const g = game, { xm } = jumpBounds(), rowAlt = g.nextY - g.baseY + g.scrolled, { idx, extra } = jumpLevel(rowAlt), L = LEVELS[idx];
  const gap = Math.min(JUMP.maxGap, L.gap[0] + Math.random() * (L.gap[1] - L.gap[0]) + extra * 0.04);
  const y = g.nextY + gap;
  const x = THREE.MathUtils.clamp(g.lastX + (Math.random() * 2 - 1) * 1.8, -xm, xm);
  const r = Math.random();
  const type = r < L.ring ? 'ring' : r < L.ring + L.ice ? 'ice' : r < L.ring + L.ice + L.move ? 'move' : 'planet';
  const p = makePlatform(type, x, y);
  if (type === 'move') p.vx *= 1 + extra * 0.1;
  const side = (d) => { let tx = x + (Math.random() < 0.5 ? -1 : 1) * d; if (Math.abs(tx) > xm) tx = x - Math.sign(tx - x) * d; return THREE.MathUtils.clamp(tx, -xm, xm); };
  let risky = null;
  if (type !== 'move') {
    const t = Math.random();
    if (t < L.crumble) risky = makePlatform('crumble', side(1.1 + Math.random() * 0.8), y + (Math.random() - 0.5) * 0.6);
    else if (t < L.crumble + L.hot) risky = makePlatform('hot', side(1.1 + Math.random() * 0.8), y + (Math.random() - 0.5) * 0.6);
  }
  if (Math.random() < L.hole && !g.holeRecent) { jumpHole(side(1.6 + Math.random() * 0.6), y + gap * 0.45); g.holeRecent = 2; } else if (g.holeRecent) g.holeRecent--;
  if (Math.random() < L.star) {
    // half of the stars hang right above a trap: a tempting risk
    if (risky && Math.random() < 0.55) jumpStar(risky.grp.position.x, y + 0.75);
    else jumpStar(THREE.MathUtils.clamp(x + (Math.random() - 0.5) * 1.8, -xm, xm), y - gap * 0.5 + 0.4);
  }
  if (Math.random() < L.bonus) jumpBonus(THREE.MathUtils.clamp(x + (Math.random() - 0.5) * 1.4, -xm, xm), y + 0.9);
  g.nextY = y; g.lastX = x;
}
function spawnJumpMeteor() {
  const g = game, b = jumpBounds(), dir = Math.random() < 0.5 ? 1 : -1, { extra } = jumpLevel();
  const y = b.bot + (b.top - b.bot) * (0.45 + Math.random() * 0.4);
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: meteorTex, transparent: true, depthWrite: false }));
  sp.scale.setScalar(0.38); sp.position.set(dir > 0 ? -b.xm - 1.4 : b.xm + 1.4, y, 0.3); scene.add(sp);
  g.meteors.push({ sp, ring: null, t: 0, vx: dir * (1.5 + Math.random() * 0.7 + extra * 0.1), vy: -0.2, spin: (Math.random() - 0.5) * 4 });
}
function jumpBounce(v, anim = true) {
  const g = game; g.vy = v; g.slip = 0; g.airT = 0; g.airDur = 2 * v / JUMP.g;   // flight time back to the same height
  g.earV += 3;   // the push-off flings the ears back
  // takeoff: the clip's push-off at a slightly different speed each time, a big bounce takes longer
  if (anim) play('leap', { fade: 0.05, speed: v > JUMP.v0 * 1.2 ? 1.0 : 1.2 + Math.random() * 0.3 });
}
function jumpScroll(dy) {   // the world moves down instead of the camera moving up
  const g = game;
  for (const p of g.plats) p.grp.position.y -= dy;
  for (const s of g.stars) s.position.y -= dy;
  for (const m of g.meteors) m.sp.position.y -= dy;
  for (const b of g.bonuses) b.sp.position.y -= dy;
  for (const h of g.holes) h.sp.position.y -= dy;
  for (const f of fallers) f.position.y -= dy;
  pivot.position.y -= dy; g.nextY -= dy; g.scrolled += dy; g.dayY -= dy;
  starsFar.position.y -= dy * 0.03; starsNear.position.y -= dy * 0.08;
}
function jumpStart() {
  const g = game;
  Object.assign(g, { plats: [], bonuses: [], holes: [], vy: 0, slip: 0, alt: 0, best: 0, scrolled: 0, level: 0, bank: JUMP.bank0, rescues: 0, series: 0, bestSeries: 0,
    dashReady: false, face: Math.random() < 0.5 ? -1 : 1, spinT: 0, rocket: 0, bubble: false, magnet: 0, wind: 0, windT: 0, gustIn: 99, dayStar: false, dayShine: false, holeRecent: 0, perfects: 0 });
  g.nextY = g.baseY; g.lastX = 0; g.meteorIn = 99; g.dayY = g.baseY + JUMP.goal; g.dayX = 0;
  makePlatform('ground', 0, g.baseY);
  const b = jumpBounds(); while (g.nextY < b.top + 2) jumpRow();
  // the star of the day: always visible (as a light at the top) until Ori reaches it
  const day = makeHeroStar(); scene.add(day); g.day = day;
  if (!g.bubbleSp) { g.bubbleSp = new THREE.Sprite(new THREE.SpriteMaterial({ map: bubbleTex, transparent: true, depthWrite: false })); g.bubbleSp.scale.setScalar(1.7); }
  scene.add(g.bubbleSp); g.bubbleSp.visible = false;
  setSeries(); updateScore();
}
function jumpCleanup() {
  const g = game;
  for (let i = (g.plats || []).length - 1; i >= 0; i--) removePlatform(i);
  for (const b of g.bonuses || []) scene.remove(b.sp); for (const h of g.holes || []) scene.remove(h.sp);
  g.bonuses = []; g.holes = [];
  if (g.day) { scene.remove(g.day); g.day = null; }
  if (g.bubbleSp) g.bubbleSp.visible = false;
}
const rescuePrice = () => JUMP.rescue + 3 * (game.rescues || 0);   // every rescue costs more
function jumpLose(why) {
  const g = game;
  try { navigator.vibrate && navigator.vibrate(90); } catch {}
  g.series = 0; g.dashReady = false; setSeries();
  const price = rescuePrice();
  if (g.bank < price) { gSay(`${why ? why + ' ' : ''}Не хватило звёзд на спасение (нужно ${price} ★)`, 1800); g.playing = false; startFinale(); return; }
  g.bank -= price; g.rescues++; updateScore();
  const b = jumpBounds(), y = b.bot + 1.0;
  // the rescue planet goes where nothing nasty hangs right above it (a hot dwarf there made an endless loop)
  const blocked = (x) => g.plats.some((q) => q.alive && (q.type === 'hot' || q.type === 'crumble') && Math.abs(q.grp.position.x - x) < 1.0 && q.grp.position.y > y && q.grp.position.y < y + 3.6)
    || g.holes.some((h) => Math.abs(h.sp.position.x - x) < 1.3 && h.sp.position.y > y && h.sp.position.y < y + 4);
  let x = THREE.MathUtils.clamp(pivot.position.x, -b.xm, b.xm);
  if (blocked(x)) { let best = null; for (let c = -b.xm; c <= b.xm + 1e-6; c += 0.25) if (!blocked(c) && (best === null || Math.abs(c - x) < Math.abs(best - x))) best = c; if (best !== null) x = best; }
  const p = makePlatform('rescue', x, y);
  pivot.position.set(x, p.grp.position.y + p.top, 0); jumpBounce(JUMP.v0 * 1.15); g.invuln = 1.5;
  gPop(`−${price} ★`, toScreen(p.grp.position), true);
  gSay(`${why ? why + ' ' : ''}Спасение за ${price} ★ · следующее — ${rescuePrice()} ★`, 1600);
}
function jumpCollectStar(i) {
  const g = game, s = g.stars[i], at = toScreen(s.position); removeGameStar(i, true);
  if (catchLick.action) catchLick.action.reset().setEffectiveWeight(1).play();
  const n = g.series >= 3 ? 2 : 1; g.bank += n; g.wag = 0.7; g.caught++;
  gPop(n > 1 ? '+2 ★' : '+1 ★', at); updateScore();
}
function jumpLand(p, top) {
  const g = game, dxp = pivot.position.x - p.grp.position.x;
  pivot.position.y = top;
  if (p.type === 'ice' && Math.abs(dxp) > 0.2 && !g.bubble) {   // slippery edge: he slides off
    g.slip = Math.sign(dxp) * 2.4; p.alive = false; p.gone = 0.001; g.series = 0; setSeries();
    gSay('Скользко!', 800); return false;
  }
  const perfect = Math.abs(dxp) < JUMP.perfect && p.type !== 'ground';
  if (perfect) {
    g.series++; g.perfects++; g.bestSeries = Math.max(g.bestSeries, g.series);
    gPop('Идеально!', toScreen(new THREE.Vector3(pivot.position.x, top + 0.9, 0)));
    if (g.series % 5 === 0) g.dashNow = true;
  } else if (p.type !== 'ground') g.series = 0;
  setSeries();
  let v = JUMP.v0;
  if (p.type === 'ring') v = JUMP.v0 * JUMP.boost;
  g.squash = 1; g.earV += 4;   // landing: a short squash, the ears swing on past their rest, then the stretch of the push-off
  if (g.dashNow) {
    v = Math.max(v, JUMP.v0 * JUMP.dash); g.dashNow = false; g.spinT = 0.7; gSay('5 идеальных — рывок!', 900);
    for (let k = 0; k < 14; k++) { const a = Math.random() * Math.PI; const f = spawnFaller(pivot.position.x, top, 0.2, new THREE.Vector3(Math.cos(a) * 1.4, Math.sin(a) * 1.2, 0), 0.06, 0.5); f.material.color.set(0xd9f38b); }
  }
  if (p.type === 'ring') for (let k = 0; k < 12; k++) { const a = Math.random() * Math.PI; const f = spawnFaller(p.grp.position.x, top, 0.2, new THREE.Vector3(Math.cos(a) * 1.2, Math.sin(a) * 1.5, 0), 0.06, 0.5); f.material.color.set(0xd9f38b); }
  jumpBounce(v);
  // bouncing in place: now and then he turns to look the other way
  if (Math.abs(g.targetX - pivot.position.x) < 0.15 && Math.random() < 0.4) g.face = -(g.face || 1);
  if (p.type === 'ice') { p.alive = false; p.gone = 0.001; }
  return true;
}
function useBubble(what) { const g = game; g.bubble = false; g.bubbleSp.visible = false; gSay(`Пузырь спас от ${what}!`, 900); meteorBurst(pivot.position.clone().add(new THREE.Vector3(0, 0.6, 0.2)), 10, false); }
function jumpStep(dt) {
  const g = game, b = jumpBounds();
  if (g.invuln > 0) g.invuln -= dt; if (g.wag > 0) g.wag -= dt;
  // steering: follow the finger with a capped speed (+ wind gusts, + sliding off ice)
  const tx = THREE.MathUtils.clamp(g.targetX, -b.xm, b.xm), dx = tx - pivot.position.x;
  const x0 = pivot.position.x;
  pivot.position.x += Math.sign(dx) * Math.min(Math.abs(dx), JUMP.speed * dt, Math.abs(dx) * 12 * dt);
  // body language of the flight: bank into the turn, squash on landing, stretch on the push-off, somersault off a ring
  const vx = dt > 0 ? (pivot.position.x - x0) / dt : 0;
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
  pivot.rotation.z = g.playing ? g.lean : 0;
  pivot.position.z += (0 - pivot.position.z) * 0.12;
  if (!g.playing) {
    // before the start / after the run: stand (or drop) onto the pedestal
    if (pivot.position.y > g.baseY + 0.001 || g.vy > 0) { g.vy -= JUMP.g * dt; pivot.position.y += g.vy * dt; if (pivot.position.y <= g.baseY) { pivot.position.y = g.baseY; g.vy = 0; play('idle', { fade: 0.2 }); } }
    else if (pivot.position.y < g.baseY - 0.001) pivot.position.y = Math.min(g.baseY, pivot.position.y + (g.baseY - pivot.position.y) * Math.min(1, 8 * dt) + 0.3 * dt);
    pedestal.position.set(pivot.position.x, g.baseY + 0.005, 0);
    return;
  }
  const body = pivot.position.clone(); body.y += 0.55;
  // rocket: steady flight up
  if (g.rocket > 0) {
    g.rocket -= dt; g.vy = 9;
    for (let k = 0, n = emit(2, dt); k < n; k++) { const f = spawnFaller(pivot.position.x + (Math.random() - 0.5) * 0.2, pivot.position.y, 0.2, new THREE.Vector3((Math.random() - 0.5) * 0.6, -2.5, 0), 0.07 + Math.random() * 0.05, 0.4); f.material.color.set(Math.random() < 0.5 ? 0xff0032 : 0xffb347); }
    if (g.rocket <= 0) { g.vy = 4; }
  }
  // gravity and landings
  const y0 = pivot.position.y; if (g.rocket <= 0) g.vy -= JUMP.g * dt; pivot.position.y += g.vy * dt;
  if (g.vy < 0 && g.rocket <= 0) {
    for (const p of g.plats) {
      if (!p.alive) continue;
      const top = p.grp.position.y + p.top;
      if (y0 >= top - 0.02 && pivot.position.y <= top && Math.abs(pivot.position.x - p.grp.position.x) < p.w + 0.28) {
        if (p.type === 'crumble' && !g.bubble) {   // a meteorite: breaks under him, he falls through
          p.alive = false; p.gone = 0.001; meteorBurst(new THREE.Vector3(p.grp.position.x, top, 0.2), 10, true); g.series = 0; setSeries();
          gSay('Это был метеорит!', 900); try { navigator.vibrate && navigator.vibrate(40); } catch {}
          continue;
        }
        if (p.type === 'hot' && !g.bubble) {   // a red dwarf: too hot to stand on, pushes him down
          pivot.position.y = top; g.vy = -3; g.series = 0; g.dashReady = false; setSeries();
          for (let k = 0; k < 10; k++) { const a = Math.random() * Math.PI; const f = spawnFaller(pivot.position.x, top, 0.2, new THREE.Vector3(Math.cos(a) * 1.2, Math.sin(a) * 1.2, 0), 0.06, 0.45); f.material.color.set(Math.random() < 0.5 ? 0xff4a1c : 0xffb347); }
          gSay('Горячо!', 800); try { navigator.vibrate && navigator.vibrate(40); } catch {}
          break;
        }
        if ((p.type === 'crumble' || p.type === 'hot') && g.bubble) { useBubble(p.type === 'hot' ? 'жара' : 'обломка'); if (p.type === 'crumble') { p.alive = false; p.gone = 0.001; } jumpBounce(JUMP.v0); break; }
        if (jumpLand(p, top)) break;
      }
    }
  }
  if (g.slip && g.vy < -1) g.slip *= 0.98;
  // scroll when Ori is in the upper part of the screen
  const line = b.bot + (b.top - b.bot) * 0.42;
  if (pivot.position.y > line) jumpScroll(pivot.position.y - line);
  g.alt = g.scrolled + (pivot.position.y - g.baseY); if (g.alt > g.best) g.best = g.alt;
  // levels
  const lv = jumpLevel();
  if (lv.n > g.level) {
    g.level = lv.n; const L = LEVELS[lv.idx];
    gSay(lv.n < LEVELS.length - 1 ? `Уровень ${lv.n + 1} · ${L.name}` : `Уровень ${lv.n + 1} · ${L.name}${lv.extra ? ' +' + lv.extra : ''}`, 1800);
    g.meteorIn = Math.min(g.meteorIn, 2); if (L.gust) g.gustIn = Math.min(g.gustIn, 2.5);
  }
  // the constellation lights up as he climbs toward the star of the day
  while (g.lit < g.need && g.alt >= (g.lit + 1) * JUMP.goal / g.need) { const idx = g.lit++; flyToSky(toScreen(body), idx); }
  // the star of the day
  if (g.day) {
    const glowY = Math.min(g.dayY, b.top - 0.35), far = THREE.MathUtils.clamp((g.dayY - b.top) / 40, 0, 1);
    g.day.position.set(g.dayX, glowY, 0.2); g.day.rotation.z += dt * 1.5;
    g.day.userData.core.scale.setScalar(THREE.MathUtils.lerp(0.55, 0.22, far)); g.day.userData.glow.scale.setScalar(THREE.MathUtils.lerp(1.3, 0.6, far) * (1 + 0.08 * Math.sin(g.alt)));
    // near the goal the star drifts toward Ori; at 100 m it lands in his mouth wherever he is
    if (g.dayY < b.top) { g.dayX += (pivot.position.x - g.dayX) * Math.min(1, 2.5 * dt); }
    if (g.alt >= JUMP.goal - 0.2 || (g.dayY < b.top - 0.3 && Math.abs(body.x - g.dayX) < 1.0 && Math.abs(body.y - g.dayY) < 0.8)) {
      g.dayStar = true; g.dayShine = g.rescues === 0;
      const m = mouthWorld(); scene.remove(g.day); g.day = null;
      if (catchLick.action) catchLick.action.reset().setEffectiveWeight(1).play();
      for (let k = 0; k < 30; k++) { const a = Math.random() * Math.PI * 2, r = 1.4 + Math.random() * 1.8; const s = spawnFaller(m.x, m.y, m.z, new THREE.Vector3(Math.cos(a) * r, 0.4 + Math.random() * 1.6, Math.sin(a) * r * 0.5), 0.06 + Math.random() * 0.08, 0.7); s.material.color.set(Math.random() < 0.45 ? 0xd9f38b : 0xffffff); }
      flash.style.opacity = 0.6; setTimeout(() => { flash.style.opacity = 0; }, 180);
      while (g.lit < g.need) { const idx = g.lit++; flyToSky(toScreen(m), idx); }
      gEl.classList.add('done'); g.wag = 3;
      gSay(g.dayShine ? 'Сияющая звезда дня! Дальше — за рекордом' : 'Звезда дня! Дальше — за рекордом', 2400);
      updateScore();
    }
  }
  updateScore();
  // platforms: move, crumble/melt, recycle; new rows above
  for (let i = g.plats.length - 1; i >= 0; i--) {
    const p = g.plats[i];
    if (p.vx) {   // a moving planet swings around its own spot, so the next planet stays within reach
      p.grp.position.x += p.vx * dt;
      if (Math.abs(p.grp.position.x) > b.xm || Math.abs(p.grp.position.x - p.x0) > 1.1) { p.grp.position.x = THREE.MathUtils.clamp(THREE.MathUtils.clamp(p.grp.position.x, p.x0 - 1.1, p.x0 + 1.1), -b.xm, b.xm); p.vx = -p.vx; }
    }
    if (p.type === 'hot') p.body.rotation.y += dt * 0.6;
    if (p.gone > 0) {
      p.gone += dt;
      if (p.type === 'crumble') { p.grp.position.y -= 3 * p.gone * dt * 10; p.grp.rotation.z += 3 * dt; p.body.scale.multiplyScalar(1 - dt * 1.2); }
      else { p.body.material.opacity = Math.max(0, 0.82 - p.gone * 2.2); p.body.scale.multiplyScalar(1 - dt * 1.5); }
      // an ice comet freezes back after a while, so the way up never disappears for good
      if (p.type === 'ice' && p.gone > 0.7) {
        p.body.visible = false;
        if (p.gone > 2.6) { p.gone = 0; p.alive = true; p.body.visible = true; p.body.scale.setScalar(1); p.body.material.opacity = 0.82; meteorBurst(new THREE.Vector3(p.grp.position.x, p.grp.position.y, 0.2), 6, false); }
        continue;
      }
      if (p.gone > 0.7) { removePlatform(i); continue; }
    }
    if (p.type === 'ground') { pedestal.position.set(p.grp.position.x, p.grp.position.y + 0.005, 0); pedestal.visible = p.grp.position.y > b.bot - 1; }
    if (p.grp.position.y < b.bot - 1.5 && p.type !== 'ground') removePlatform(i);
  }
  while (g.nextY < b.top + 2) jumpRow();
  // stars (currency); the magnet pulls them in
  for (let i = g.stars.length - 1; i >= 0; i--) {
    const s = g.stars[i], u = s.userData; u.age += dt; s.material.rotation += u.spin * dt; s.scale.setScalar(u.base * (1 + 0.1 * Math.sin(u.age * 5)));
    if (g.magnet > 0) { const d = body.clone().sub(s.position); d.z = 0; const L2 = d.length(); if (L2 < 3.2) s.position.addScaledVector(d.normalize(), Math.min(L2, 7 * dt)); }
    if (Math.hypot(s.position.x - body.x, s.position.y - body.y) < 0.55) { jumpCollectStar(i); continue; }
    if (s.position.y < b.bot - 1) removeGameStar(i, false);
  }
  if (g.magnet > 0) g.magnet -= dt;
  // power-ups
  for (let i = g.bonuses.length - 1; i >= 0; i--) {
    const bo = g.bonuses[i]; bo.t += dt; bo.sp.position.y += Math.sin(bo.t * 3) * 0.004;
    if (Math.hypot(bo.sp.position.x - body.x, bo.sp.position.y - body.y) < 0.6) {
      const at = toScreen(bo.sp.position); scene.remove(bo.sp); g.bonuses.splice(i, 1);
      if (bo.kind === 'rocket') { g.rocket = 3; gPop('Ракета!', at); play('leap', { fade: 0.05, speed: 0.6 }); }
      if (bo.kind === 'bubble') { g.bubble = true; gPop('Пузырь!', at); }
      if (bo.kind === 'magnet') { g.magnet = 5; gPop('Магнит!', at); }
      continue;
    }
    if (bo.sp.position.y < b.bot - 1) { scene.remove(bo.sp); g.bonuses.splice(i, 1); }
  }
  if (g.bubbleSp) { g.bubbleSp.visible = g.bubble; if (g.bubble) g.bubbleSp.position.set(pivot.position.x, pivot.position.y + 0.6, 0.35); }
  // black holes: pull; a close pass past the edge = boost; the centre = a fall
  for (let i = g.holes.length - 1; i >= 0; i--) {
    const h = g.holes[i]; h.sp.material.rotation -= dt * 2;
    const d = h.sp.position.clone().sub(body); d.z = 0; const L2 = d.length();
    if (L2 < 1.8 && g.rocket <= 0) { const a = 4.2 / (L2 * L2 + 0.35); pivot.position.x += d.x / L2 * a * dt * 0.35; g.vy += d.y / L2 * a * dt; }
    h.near = Math.min(h.near, L2);
    if (L2 < 0.38 && g.rocket <= 0) {
      scene.remove(h.sp); g.holes.splice(i, 1);
      if (g.bubble) { useBubble('чёрной дыры'); g.vy = JUMP.v0; continue; }
      pivot.position.y = b.bot - 1; jumpLose('Чёрная дыра!'); if (!g.playing) return; continue;
    }
    if (!h.used && h.near < 0.95 && L2 > 1.3) { h.used = true; g.vy = Math.max(g.vy, 0) + 4.5; gSay('Гравиманёвр!', 800); gPop('Разгон!', toScreen(body)); }
    if (h.sp.position.y < b.bot - 1.5) { scene.remove(h.sp); g.holes.splice(i, 1); }
  }
  // wind gusts (warned by streaks a moment before)
  const L = LEVELS[lv.idx];
  if (L.gust) {
    g.gustIn -= dt;
    if (g.gustIn <= 0 && g.windT <= 0) { g.windDir = Math.random() < 0.5 ? -1 : 1; g.windT = 2.4; g.gustIn = L.gust * (0.8 + Math.random() * 0.5); gSay(g.windDir > 0 ? 'Ветер вправо →' : '← Ветер влево', 900); }
  }
  if (g.windT > 0) {
    g.windT -= dt; const ramp = Math.min(1, (2.4 - g.windT) / 0.6) * Math.min(1, g.windT / 0.4);
    g.wind = g.windDir * 2.3 * Math.max(0, ramp);
    for (let k = 0, n = emit(0.8, dt); k < n; k++) { const f = spawnFaller(-g.windDir * (b.xm + 1.2), b.bot + Math.random() * (b.top - b.bot), 0.4, new THREE.Vector3(g.windDir * 6, 0, 0), 0.03, 0.6); f.material.color.set(0xdfe7ff); }
  } else g.wind = 0;
  // flying meteors
  if (L.meteor > 0) { g.meteorIn -= dt; if (g.meteorIn <= 0) { spawnJumpMeteor(); g.meteorIn = L.meteor * Math.pow(0.9, lv.extra) * (0.7 + Math.random() * 0.6); } }
  const seg = new THREE.Line3(pivot.position.clone().add(new THREE.Vector3(0, 0.2, 0)), pivot.position.clone().add(new THREE.Vector3(0, 1.0, 0))), cp = new THREE.Vector3();
  for (let i = g.meteors.length - 1; i >= 0; i--) {
    const mt = g.meteors[i]; mt.sp.position.x += mt.vx * dt; mt.sp.position.y += mt.vy * dt; mt.sp.material.rotation += mt.spin * dt;
    for (let k = 0, n = emit(0.7, dt); k < n; k++) { const f = spawnFaller(mt.sp.position.x - Math.sign(mt.vx) * 0.12, mt.sp.position.y, 0.3, new THREE.Vector3(-mt.vx * 0.3, 0.2, 0), 0.05 + Math.random() * 0.04, 0.35); f.material.color.set(Math.random() < 0.5 ? 0xff0032 : 0x5a6488); }
    if (!(g.invuln > 0) && g.rocket <= 0) {
      const mp = mt.sp.position.clone(); mp.z = 0; seg.closestPointToPoint(mp, true, cp);
      if (cp.distanceTo(mp) < 0.38) {
        const p = mt.sp.position.clone(); removeMeteor(i); meteorBurst(p, 14, true);
        if (g.bubble) { useBubble('метеорита'); continue; }
        g.vy = Math.min(g.vy, -3.5); g.invuln = 1.2; g.hits++; g.series = 0; g.dashReady = false; setSeries();
        try { navigator.vibrate && navigator.vibrate(80); } catch {}
        gSay('Метеорит сбил Ори!', 1100); continue;
      }
    }
    if (Math.abs(mt.sp.position.x) > b.xm + 2) removeMeteor(i);
  }
  if (pivot.position.y < b.bot - 0.6) jumpLose();
}

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
  if (g.playing && !g.finale) {
    const inAir = g.rocket > 0 ? 0 : 1;
    const p = THREE.MathUtils.clamp(g.airT / Math.max(0.3, g.airDur), 0, 1);
    const ss = (a, b, x) => { const t = THREE.MathUtils.clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
    const push = inAir * (1 - ss(0.05, 0.32, p));
    const tuck = inAir * Math.sin(Math.PI * THREE.MathUtils.clamp((p - 0.12) / 0.8, 0, 1));
    const reach = inAir * ss(0.55, 0.92, p);
    // bones: +X on a leg = swings back, +X on a lower leg = bends, +X on the spine/head = nose down, +X on an ear = back
    life('spine', -0.16 * push + 0.20 * tuck + 0.06 * reach, 0, 0);
    life('chest', -0.08 * push + 0.08 * tuck, 0, 0);
    life('neck', -0.12 * push + 0.05 * tuck + 0.10 * reach, 0, 0);
    life('head', -0.22 * push - 0.05 * tuck + 0.30 * reach, 0, 0);
    const fu = 0.45 * push + 0.55 * tuck - 0.70 * reach, fl = 0.8 * push + 1.0 * tuck + 0.15 * reach;
    life('f_upperL', fu, 0, 0); life('f_upperR', fu, 0, 0); life('f_lowerL', fl, 0, 0); life('f_lowerR', fl, 0, 0);
    const bu = -0.55 * push + 0.55 * tuck + 0.25 * reach, bl = -0.25 * push + 0.85 * tuck + 0.45 * reach;
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
}

function updateEyes(dt) {
  // gaze target: pointer relative to the head on screen, else slow wander with saccades
  const hs = headScreen();
  let tx = 0, ty = 0;
  eyes.hold = Math.max(0, (eyes.hold || 0) - dt);
  if (hs && pointer.x >= 0 && (!isMobile || eyes.hold > 0)) {
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
  try { await throwBallInner(cx, cy); } catch (e) { console.error(e); } finally { busy = false; holdJaw = false; fetch_.pos = null; fetch_.yaw = null; if (current !== actions.idle) play('idle', { fade: 0.4 }); }
}
async function throwBallInner(cx, cy) {
  const target = floorPoint(cx, cy); if (!target) return;
  fetch_.mode = false; syncThrowBtns();
  if (busy) return; busy = true; petting = false; holdJaw = false;
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
  const to = new THREE.Vector3(pivot.position.x + side * 0.38, 0.072, pivot.position.z + 0.5); const d1 = performance.now();
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
    // run after the ball until close enough; the dog follows the ball position each frame
    while (!caught && performance.now() - t0 < 12000) {
      if (performance.now() - t0 > 6000 && ball.position.y > floorY() + 0.3) { phys.vy = -1; }
      const bp = ball.position; const dp = pivot.position;
      const d = new THREE.Vector3(bp.x - dp.x, 0, bp.z - dp.z); const dist = d.length();
      if (dist > 0.05) { fetch_.yaw = Math.atan2(d.x, d.z) - baseY; }
      const stop = bp.clone().sub(d.clone().normalize().multiplyScalar(0.3)); stop.y = 0; stop.x = THREE.MathUtils.clamp(stop.x, -phys.bounds.x, phys.bounds.x); stop.z = THREE.MathUtils.clamp(stop.z, phys.bounds.zMin, phys.bounds.zMax); fetch_.pos = stop;
      const speedB = phys.v.length();
      if (dist < 0.5 && ball.position.y < floorY() + 0.3 && speedB < 0.9) caught = true;
      if (!phys.on && dist < 0.75) caught = true;
      if (performance.now() - t0 > 2500 && dist < 0.9 && ball.position.y < floorY() + 0.3) caught = true;
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
  return !busy && !game.on && !fetch_.mode && !petting && !phys.on && !phys.grab && !pointer.down && current === actions.idle;
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
$('#share').addEventListener('click', async () => {
  const text = `${phraseToday || $('#phrase').textContent} — Ори поймал для меня звезду в МТС Деньги`;
  try { if (navigator.share) await navigator.share({ title: 'Поймай звезду', text }); else { await navigator.clipboard.writeText(text); toast('Текст скопирован'); } } catch {}
});
$('#trainToggle').addEventListener('click', () => { if (confirm('Сбросить день? Звезда и фраза дня будут пойманы заново.')) command('reset'); });
$('#cardClose').addEventListener('click', () => { screens.s3.classList.add('hidecard'); $('#showCard').style.display = ''; setFrame('s1'); });
document.querySelectorAll('#throwBtn,[data-throw]').forEach((b) => b.addEventListener('click', armThrow));
function syncThrowBtns() { document.querySelectorAll('#throwBtn,[data-throw]').forEach((b) => { b.classList.toggle('armed', fetch_.mode); b.textContent = fetch_.mode ? 'Тапните, куда бросить' : 'Бросить мяч'; }); }
document.querySelectorAll('.cmds').forEach((row) => row.addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) command(b.dataset.cmd); }));

let pointer = { x: -1, y: -1, down: false };
addEventListener('pointerdown', () => wake(), true);
addEventListener('keydown', () => wake(), true);
addEventListener('wheel', () => wake(), { capture: true, passive: true });
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
    spin.vy = dx * 0.006; spin.y += spin.vy; spin.x = THREE.MathUtils.clamp(spin.x + dy * 0.003, -0.35, 0.35);
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
  pointer.x = e.clientX; pointer.y = e.clientY; pointer.down = true; eyes.hold = 4; spin.dragging = true; spin.lastX = e.clientX; spin.lastY = e.clientY; spin.moved = 0; try { canvas.setPointerCapture(e.pointerId); } catch {} });
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
  if (e.type === 'pointerup' && fetch_.mode && spin.moved < 10 && e.target === canvas) throwBall(e.clientX, e.clientY);
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
  zoom.v += (zoom.target - zoom.v) * 0.12;
  view.tPos.sub(view.tLook).multiplyScalar(zoom.v * narrow).add(view.tLook);
  view.pos.lerp(view.tPos, 0.06); view.look.lerp(view.tLook, 0.06);
  camera.position.copy(view.pos); camera.lookAt(view.look);
  if (ori) {
    if (game.on) gameStep(dt);
    else {
    if (fetch_.pos) { const tgt = fetch_.pos; const dv = tgt.clone().sub(pivot.position); dv.y = 0; const L = dv.length(); const stepL = Math.min(L, RUN_SPEED * dt); if (L > 1e-4) pivot.position.addScaledVector(dv.normalize(), stepL); }
    else pivot.position.lerp(new THREE.Vector3().fromArray(f.model), 0.06);
    pedestal.position.set(pivot.position.x, pivot.position.y + 0.005, pivot.position.z);
    if (!spin.dragging) { spin.y += spin.vy; spin.vy *= 0.92; spin.x *= 0.95; }
    // while the dog is fetching, its facing is driven by the chase; fade the user's manual rotation to zero
    // so releasing the fetch yaw cannot snap it back sideways when it delivers the ball
    if (fetch_.yaw !== null) { const kd = 1 - Math.pow(0.02, dt); spin.y -= spin.y * kd; spin.x -= spin.x * kd; spin.vy = 0; }
    const baseY = frame === 's1' ? -0.35 : frame === 's3' ? -0.5 : -0.2;
    const wantYaw = fetch_.yaw !== null ? baseY + fetch_.yaw : Math.sin(t * 0.35) * 0.06 + baseY + spin.y;
    let dy = wantYaw - pivot.rotation.y; dy = Math.atan2(Math.sin(dy), Math.cos(dy)); pivot.rotation.y += dy * (fetch_.yaw !== null ? 0.18 : 1);
    pivot.rotation.x = spin.x;
    }
    procUndo();
    mixer.update(dt);
    if (flatMeshes.length) {
      const ba = actions.belly, w = ba && ba.isRunning() ? ba.getEffectiveWeight() : 0;
      const k = w > 0 ? w * flatAt(CLIPS.belly.a + ba.time * FPS) : 0;
      for (const m of flatMeshes) m.morphTargetInfluences[m.morphTargetDictionary.Flat] = k;
    }
    if (game.on) gamePose(dt);
    if (holdJaw && jawBone) { const e = new THREE.Euler().setFromQuaternion(jawBone.quaternion, 'XYZ'); if (e.x < JAW_HOLD) { e.x = JAW_HOLD; jawBone.quaternion.setFromEuler(e); } }
    // tail wag on top of the clips
    const _ba = actions.belly, bellyK = _ba && _ba.isRunning() ? bellyWagK(CLIPS.belly.a + _ba.time * FPS) : 1;
    const wagAmp = bellyK * THREE.MathUtils.degToRad(petting || (game.on && game.wag > 0) ? tail.amp * 2.2 : sit.state === 'sitting' ? tail.amp * 0.3 : tail.amp), wagT = t * (petting ? tail.speed * 1.8 : tail.speed) * Math.PI * 2;
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
    updateEyes(dt); updateBlink(dt); updateSit(dt); updatePant(dt);
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
  $('#loading').style.opacity = 0; setTimeout(() => $('#loading').remove(), 500);
  const saved = store.get();
  if (saved && saved.date === TODAY && saved.phrase) {
    phraseToday = saved.phrase; $('#phrase').textContent = saved.phrase; applyShine(saved.shine); showScreen('s3'); setFrame('s3');
  }
  play('idle');
  window.__ori = { get actions() { return actions; }, get mixer() { return mixer; }, play, game, tick, sim: (dt) => tick(0, dt), toScreen, startGame, camera, renderer, eyes, blink, spin, pointer, flick: (x, z) => flickBall(new THREE.Vector3(x, 0, z)), get pivot() { return pivot; }, get ball() { return fetch_.ball; }, scene, phys, sit, pant, get busy() { return busy; }, get cur() { return current && current.getClip().name; }, get pupil() { const e = eyes.pupils[0]; return e ? [e.node.position.x - e.base.x, e.node.position.y - e.base.y, e.node.position.z - e.base.z] : null; } };
  tick();
})();
