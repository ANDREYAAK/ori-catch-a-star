import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
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
};
const JAW_HOLD = 0.34;

/* ---------- DOM ---------- */
const $ = (s) => document.querySelector(s);
const canvas = $('#canvas');
const screens = { s1: $('#s1'), s2: $('#s2'), s3: $('#s3') };
const flash = $('#flash');
const hint = $('#hint');
const train = $('#train');

function showScreen(id) {
  for (const k in screens) screens[k].classList.toggle('show', k === id);
}

/* ---------- renderer / scene ---------- */
const isMobile = matchMedia('(pointer: coarse)').matches;
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
const under = new THREE.PointLight(0xd9f38b, 3.0, 5, 1.6); under.position.set(0, -0.55, 0.9); scene.add(under);

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
  const g = x.createRadialGradient(64, 64, 0, 64, 64, 64); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.25, 'rgba(240,232,255,.9)'); g.addColorStop(1, 'rgba(200,180,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, 128, 128);
  x.fillStyle = 'rgba(255,255,255,.95)'; x.beginPath();
  for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4, r = i % 2 ? 12 : 40; x.lineTo(64 + Math.cos(a) * r, 64 + Math.sin(a) * r); }
  x.closePath(); x.fill();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
})();
const fallers = [];
function spawnFaller(x, y, z, v, s, life) {
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: starTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  sp.position.set(x, y, z); sp.scale.setScalar(s); sp.userData = { v, life, t: 0 }; scene.add(sp); fallers.push(sp); return sp;
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
      // boost the baked nebula: raise contrast and saturation of the emissive map so the violet patches read like in Blender
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
             // Blender ramp: violet (0.6,0.35,1) -> pink (1,0.5,0.85), with a blue touch on the patch rims
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
      o.material = new THREE.MeshStandardMaterial({ color: 0x0d0820, roughness: 0.85 }); o.renderOrder = 2;
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
  const buf = window.ORI_GLB ? decodeGLB(window.ORI_GLB) : await (await fetch('assets/ori.glb')).arrayBuffer();
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.parse(buf, '', (gltf) => {
      ori = gltf.scene; ori.scale.setScalar(MODEL_SCALE);
      setupMaterials(ori);
      ori.traverse((o) => {
        if (o.isBone) { if (o.name === 'head') headBone = o; if (o.name === 'jaw') jawBone = o; if (o.name === 'lidL' || o.name === 'lidR') blink.bones.push(o); if (/^tail[1-5]$/.test(o.name)) tail.bones[+o.name[4] - 1] = o; }
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
      resolve();
    }, reject);
  });
}

/* ---------- camera framing per state ---------- */
const view = { pos: new THREE.Vector3(0, 0.9, 4.6), look: new THREE.Vector3(0, 0.75, 0), tPos: new THREE.Vector3(), tLook: new THREE.Vector3() };
const FRAMES = {
  s1: { pos: [0, 1.0, 5.3], look: [0, 0.62, 0], model: [0, 0.12, 0] },
  s2: { pos: [0, 1.1, 5.4], look: [0, 0.85, 0], model: [0, 0.05, 0] },
  s3: { pos: [0, 0.45, 6.8], look: [0, -0.3, 0], model: [0, -1.05, 0] },
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

async function catchStar() {
  if (busy) return; busy = true; petting = false; holdJaw = false;
  parkBall();
  showScreen('s2'); setFrame('s2'); hint.style.opacity = 0;
  document.body.classList.add('night');
  // Ori looks up at the sky, tail wagging
  const lookUp = actions.petIn; if (lookUp) { if (current && current !== lookUp) current.fadeOut(0.25); lookUp.reset().setEffectiveWeight(1).fadeIn(0.25).play(); lookUp.paused = false; current = lookUp; }
  // star rain: diagonal streaks, brighter, with a lime tint on some
  for (let i = 0; i < 14; i++) {
    setTimeout(() => {
      const st = spawnFaller(-1.2 + Math.random() * 3.6, 2.4 + Math.random() * 0.9, -2.0 - Math.random() * 2.5, new THREE.Vector3(-1.2 - Math.random() * 0.5, -2.2 - Math.random() * 0.9, 0), 0.07 + Math.random() * 0.06, 2.0);
      st.material.color.set(Math.random() < 0.3 ? 0xd9f38b : 0xffffff);
      st.userData.streak = true;
    }, i * 90);
  }
  await wait(900);
  // the hero star: big, glowing, with a trail; arcs down toward Ori's mouth while Ori jumps
  const hero = makeHeroStar(); scene.add(hero);
  const start = new THREE.Vector3(2.2, 3.6, -1.2); hero.position.copy(start);
  await wait(250);
  play('jump', { fade: 0.15 });
  const t0 = performance.now();
  await new Promise((res) => {
    const step = () => {
      const t = Math.min(1, (performance.now() - t0) / 1150);
      const target = mouthWorld();
      const e = t * t * (3 - 2 * t);
      hero.position.lerpVectors(start, target, e);
      hero.position.y += Math.sin(t * Math.PI) * 0.5;
      const sc = 1 - 0.45 * e; hero.userData.core.scale.setScalar(0.5 * sc); hero.userData.glow.scale.setScalar((1.1 + 0.25 * Math.sin(t * 40)) * sc);
      hero.rotation.z += 0.05;
      if (t > 0.1) emitTrail(hero.position);
      if (t < 1) requestAnimationFrame(step); else res();
    };
    step();
  });
  // catch: burst of sparks from the mouth, flash, then Ori lands
  const m = mouthWorld();
  for (let i = 0; i < 14; i++) { const a = Math.random() * Math.PI * 2, r = 1.6 + Math.random() * 1.6; const s = spawnFaller(m.x, m.y, m.z, new THREE.Vector3(Math.cos(a) * r, 0.6 + Math.random() * 1.8, Math.sin(a) * r * 0.5), 0.06 + Math.random() * 0.08, 0.6); s.material.color.set(Math.random() < 0.4 ? 0xd9f38b : 0xffffff); }
  scene.remove(hero);
  flash.style.opacity = 1; await wait(220); flash.style.opacity = 0;
  phraseToday = pickPhrase();
  const rec = store.get() || { used: [] };
  store.set({ date: TODAY, phrase: phraseToday, used: [...(rec.used || []), phraseToday].slice(-160) });
  $('#phrase').textContent = phraseToday;
  await wait(650);
  document.body.classList.remove('night');
  showScreen('s3'); setFrame('s3');
  play('pet', { fade: 0.3 });
  await wait(1400);
  play('idle', { fade: 0.5 });
  unparkBall();
  busy = false;
  hint.style.opacity = 0;
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

/* ---------- mini game: star fall and the constellation of the day ---------- */
// Drag = Ori runs after your finger, stars are caught automatically when they reach his mouth (with a soft magnet),
// tap = leap (for comets). Every catch lights a point of today's constellation; when it is complete the star of
// the day falls and a tap at the right moment makes it a "shining" star. There is no way to lose: if time runs out
// Ori finishes the constellation himself.
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
const gEl = $('#game'), gSky = $('#gSky'), gBar = $('#gBar'), gHint = $('#gHint'), gName = $('#gName');
const game = { on: false };
const _gRay = new THREE.Raycaster(), _gPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), _gNdc = new THREE.Vector2();
function ndcToPlane(nx, ny, z = 0) {
  _gPlane.constant = -z; _gNdc.set(nx, ny); _gRay.setFromCamera(_gNdc, camera);
  const p = new THREE.Vector3(); return _gRay.ray.intersectPlane(_gPlane, p) ? p : new THREE.Vector3();
}
function screenX2world(sx, z = 0) { return ndcToPlane(sx / innerWidth * 2 - 1, 0, z).x; }
function toScreen(v) { const p = v.clone().project(camera); return { x: (p.x + 1) / 2 * innerWidth, y: (1 - p.y) / 2 * innerHeight }; }
const STAR_Z = 0.4;
const MAGNET = 0.2, CATCH_R = 0.2;   // world units; the play area is about +/-1.0 wide on a phone

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
  game.litSet = new Set();
}
function lightPoint(i) {
  game.litSet.add(i); game.ptEls[i].classList.add('lit'); game.ptEls[i].setAttribute('r', 2.2);
  for (const l of game.lineEls) if (game.litSet.has(l.a) && game.litSet.has(l.b)) l.el.classList.add('lit');
}
function flyToSky(from, idx) {
  const el = document.createElement('div'); el.className = 'g-fly'; el.style.left = from.x + 'px'; el.style.top = from.y + 'px';
  document.body.appendChild(el);
  const r = game.ptEls[idx].getBoundingClientRect();
  setTimeout(() => { el.style.transform = `translate(${r.left + r.width / 2 - from.x}px, ${r.top + r.height / 2 - from.y}px) scale(.45)`; }, 20);
  setTimeout(() => { el.remove(); lightPoint(idx); }, 640);
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
function spawnStar() {
  const blue = game.t > 3 && Math.random() < 0.22, kind = blue ? 'blue' : 'white';
  const top = ndcToPlane(0, 1.06, STAR_Z), xm = Math.abs(ndcToPlane(0.8, 0, STAR_Z).x);
  const sp = makeGameStar(kind);
  // stars appear away from where Ori stands, so catching them takes a run
  let x = 0, dogX = pivot ? pivot.position.x : 0;
  for (let k = 0; k < 8; k++) { x = (Math.random() * 2 - 1) * xm; if (Math.abs(x - dogX) > 0.42) break; }
  sp.position.set(x, top.y, STAR_Z);
  const ramp = 1 + 0.45 * game.t / game.dur;
  sp.userData = { kind, v: new THREE.Vector3((Math.random() - 0.5) * 0.3, -(blue ? 1.75 + Math.random() * 0.35 : 1.0 + Math.random() * 0.45) * ramp, 0), spin: (Math.random() - 0.5) * 3 };
}
function spawnComet() {
  const dir = Math.random() < 0.5 ? 1 : -1, xm = Math.abs(ndcToPlane(1.12, 0, STAR_Z).x);
  const sp = makeGameStar('comet');
  sp.position.set(-dir * xm, game.mouthY0 + 0.55, STAR_Z);
  sp.userData = { kind: 'comet', v: new THREE.Vector3(dir * 1.7, 0, 0), spin: 4 };
  gSay('Комета! Тапните — Ори прыгнет', 2200);
}
function removeGameStar(i, puff) {
  const s = game.stars[i];
  if (puff) for (let k = 0; k < 5; k++) { const a = Math.random() * Math.PI; const f = spawnFaller(s.position.x, s.position.y, s.position.z, new THREE.Vector3(Math.cos(a) * 0.6, Math.sin(a) * 0.5, 0), 0.05, 0.45); f.material.color.copy(s.material.color); }
  scene.remove(s); s.material.dispose(); game.stars.splice(i, 1);
}
function catchGameStar(i) {
  const s = game.stars[i], kind = s.userData.kind, m = mouthWorld();
  for (let k = 0; k < 10; k++) { const a = Math.random() * Math.PI * 2, r = 1 + Math.random() * 1.2; const f = spawnFaller(m.x, m.y, m.z + 0.1, new THREE.Vector3(Math.cos(a) * r, 0.4 + Math.random() * 1.2, 0), 0.05 + Math.random() * 0.05, 0.5); f.material.color.set(kind === 'blue' ? 0x9fc8ff : kind === 'comet' ? 0xd9f38b : 0xffffff); }
  removeGameStar(i, false);
  game.snap = 0.24; game.caught++;
  if (kind === 'comet') { game.cometCaught++; gSay('Поймал комету!', 1600); }
  const n = kind === 'white' ? 1 : 2, from = toScreen(m);
  for (let k = 0; k < n && game.lit < game.need; k++) { const idx = game.lit++; setTimeout(() => flyToSky(from, idx), k * 120); }
  if (game.lit >= game.need) startFinale();
}

async function startGame() {
  if (busy || game.on) return;
  if (!pivot) return;
  busy = true; petting = false; holdJaw = false; parkBall(); train.classList.remove('show'); hint.style.opacity = 0;
  const shape = constellationOfDay();
  Object.assign(game, { on: true, t: 0, dur: 22, stars: [], lit: 0, need: shape.pts.length, caught: 0, cometCaught: 0, comets: 0,
    spawnIn: 1.2, cometIn: 6.5, snap: 0, leap: null, anim: '', finale: false, lockAnim: false, helped: false, targetX: 0,
    baseY: FRAMES.game.model[1], mouthY0: 0, drag: null, tapped: null, tapWindow: false, playing: false, hero: null, heroPhase: null, shape });
  buildSky(shape); gName.textContent = shape.name; gBar.style.transform = 'scaleX(1)';
  game.baseHint = 'Ведите пальцем — Ори бежит за звёздами';
  showScreen(null); setFrame('game'); zoom.target = 1.0; spin.y = spin.x = spin.vy = 0;
  document.body.classList.add('night', 'gaming'); gEl.classList.remove('done'); gEl.classList.add('show');
  gSay('Соберите созвездие дня');
  play('idle', { fade: 0.3 });
  await wait(1100);
  game.mouthY0 = mouthWorld().y;
  gSay(game.baseHint); game.playing = true;
}

async function startFinale() {
  const g = game; if (g.finale) return; g.finale = true; g.playing = false;
  for (let i = g.stars.length - 1; i >= 0; i--) removeGameStar(i, true);
  gBar.style.transform = 'scaleX(0)';
  if (g.lit < g.need) {
    g.helped = true; gSay('Ори помогает дособрать созвездие');
    while (g.lit < g.need) { const idx = g.lit++; flyToSky(toScreen(mouthWorld()), idx); await wait(170); }
  }
  await wait(800);
  gEl.classList.add('done'); gSay('Созвездие собрано!');
  g.targetX = 0;
  const t0 = performance.now(); while (Math.abs(pivot.position.x) > 0.05 && performance.now() - t0 < 1800) await wait(40);
  await wait(300);
  // the star of the day: slow fall, the tap window opens when it is a little above Ori
  gSay('Тапните, когда звезда над Ори');
  const hero = makeHeroStar(); scene.add(hero); g.hero = hero;
  const top = ndcToPlane(0, 1.1, STAR_Z); hero.position.set(0.45, top.y, STAR_Z);
  // the fall is advanced by the frame loop (gameStep), so the tap window always matches what is on screen
  await new Promise((res) => { g.heroPhase = { t: 0, topY: top.y, done: res }; });
  const perfect = !!(g.tapped && g.tapped.inWindow);
  g.lockAnim = true;
  await heroFinish(hero, perfect || g.cometCaught > 0 && !g.helped);
}

async function heroFinish(hero, shine) {
  const g = game;
  gSay(shine ? 'Сияющая звезда!' : 'Поймал!');
  play('jump', { fade: 0.12 });
  const start = hero.position.clone(), t0 = performance.now();
  await new Promise((res) => {
    const step = () => {
      const t = Math.min(1, (performance.now() - t0) / 1050), e = t * t * (3 - 2 * t);
      hero.position.lerpVectors(start, mouthWorld(), e); hero.position.y += Math.sin(t * Math.PI) * 0.25;
      const sc = 1 - 0.5 * e; hero.userData.core.scale.setScalar(0.5 * sc); hero.userData.glow.scale.setScalar((1.1 + 0.25 * Math.sin(t * 40)) * sc);
      emitTrail(hero.position);
      if (t < 1) setTimeout(step, 16); else res();
    };
    step();
  });
  const m = mouthWorld();
  for (let i = 0; i < (shine ? 26 : 14); i++) { const a = Math.random() * Math.PI * 2, r = 1.6 + Math.random() * 1.8; const s = spawnFaller(m.x, m.y, m.z, new THREE.Vector3(Math.cos(a) * r, 0.6 + Math.random() * 1.8, Math.sin(a) * r * 0.5), 0.06 + Math.random() * 0.08, 0.7); s.material.color.set(Math.random() < 0.45 ? 0xd9f38b : 0xffffff); }
  scene.remove(hero);
  flash.style.opacity = 1; await wait(240); flash.style.opacity = 0;
  phraseToday = pickPhrase();
  const rec = store.get() || { used: [] };
  store.set({ date: TODAY, phrase: phraseToday, used: [...(rec.used || []), phraseToday].slice(-160), shine, constellation: g.shape.name });
  $('#phrase').textContent = phraseToday; applyShine(shine);
  await wait(700);
  endGame();
  showScreen('s3'); setFrame('s3');
  play('pet', { fade: 0.3 });
  await wait(1400);
  play('idle', { fade: 0.5 });
  unparkBall(); busy = false;
}
function applyShine(shine) {
  const card = screens.s3.querySelector('.card'); card.classList.toggle('shine', !!shine);
  const from = card.querySelector('.from'); from.textContent = shine ? 'Ори поймал для вас сияющую звезду' : 'Ори поймал для вас звезду';
}
function endGame() {
  for (let i = game.stars.length - 1; i >= 0; i--) removeGameStar(i, false);
  game.on = false; game.playing = false;
  gEl.classList.remove('show'); document.body.classList.remove('night', 'gaming'); zoom.target = 1.3; gHint.textContent = '';
}

// per frame, before the mixer: movement, spawning, catching
function gameStep(dt) {
  const g = game;
  const xm = Math.abs(ndcToPlane(0.78, -0.3, 0).x);
  const tx = THREE.MathUtils.clamp(g.targetX, -xm, xm), dx = tx - pivot.position.x;
  const moving = Math.abs(dx) > 0.05 && !g.leap && !g.lockAnim;
  if (moving) pivot.position.x += Math.sign(dx) * Math.min(Math.abs(dx), RUN_SPEED * 1.15 * dt);
  if (!g.lockAnim) {
    const want = g.leap ? 'leap' : moving ? 'run' : 'idle';
    if (want !== g.anim) { g.anim = want; if (want === 'run') play('walk', { fade: 0.12, speed: RUN_ANIM }); else if (want === 'idle') play('idle', { fade: 0.25 }); }
  }
  const wantYaw = moving ? Math.sign(dx) * 1.2 : 0;
  let dyw = wantYaw - pivot.rotation.y; dyw = Math.atan2(Math.sin(dyw), Math.cos(dyw)); pivot.rotation.y += dyw * Math.min(1, 9 * dt);
  pivot.rotation.x = 0;
  let hop = 0;
  if (g.leap) { g.leap.t += dt; const u = g.leap.t / g.leap.dur; if (u >= 1) { g.leap = null; g.anim = ''; } else hop = Math.sin(Math.PI * u) * 0.42; }
  pivot.position.y += (g.baseY + hop - pivot.position.y) * (g.leap ? 1 : 0.12);
  pivot.position.z += (0 - pivot.position.z) * 0.12;
  pedestal.position.set(pivot.position.x, g.baseY + 0.005, pivot.position.z);
  if (g.heroPhase && g.hero) {
    const hp = g.heroPhase, hero = g.hero; hp.t += dt;
    hero.position.y = hp.topY - hp.t * 0.95;
    hero.position.x = 0.45 * Math.cos(hp.t * 1.7) * Math.max(0, 1 - hp.t / 2.6);
    hero.rotation.z += 2.4 * dt; emitTrail(hero.position);
    const dy = hero.position.y - mouthWorld().y;
    g.tapWindow = dy < 1.05 && dy > 0.3;
    if (g.tapped || dy <= 0.3 || hp.t > 6) { g.heroPhase = null; hp.done(); }
  }
  if (!g.playing) return;
  g.t += dt; gBar.style.transform = `scaleX(${Math.max(0, 1 - g.t / g.dur)})`;
  g.spawnIn -= dt; if (g.spawnIn <= 0) { spawnStar(); g.spawnIn = THREE.MathUtils.lerp(1.0, 0.6, g.t / g.dur); }
  g.cometIn -= dt; if (g.cometIn <= 0 && g.comets < 2) { spawnComet(); g.comets++; g.cometIn = 7 + Math.random() * 2; }
  const m = mouthWorld(); let look = null, lookY = 1e9;
  for (let i = g.stars.length - 1; i >= 0; i--) {
    const s = g.stars[i], u = s.userData;
    s.position.addScaledVector(u.v, dt); s.material.rotation += u.spin * dt;
    if (u.kind === 'comet' && Math.random() < 0.6) emitTrail(s.position);
    const ddx = m.x - s.position.x, ddy = s.position.y - m.y;
    if (u.kind !== 'comet' && Math.abs(ddx) < MAGNET && ddy > -0.15 && ddy < 0.7) s.position.x += ddx * Math.min(1, 4 * dt);   // soft magnet: forgives a near miss, not a far one
    if (u.kind === 'comet' && g.leap && Math.hypot(ddx, ddy) < 0.85) { s.position.x += ddx * Math.min(1, 9 * dt); s.position.y -= ddy * Math.min(1, 9 * dt); }
    const hit = u.kind === 'comet' ? Math.hypot(ddx, ddy) < 0.3 : Math.abs(ddx) < CATCH_R && Math.abs(ddy) < 0.2;
    if (hit) { catchGameStar(i); continue; }
    if (u.kind !== 'comet' && s.position.y < g.baseY + 0.03) { removeGameStar(i, true); continue; }
    if (u.kind === 'comet' && Math.abs(s.position.x) > xm * 1.6) { removeGameStar(i, false); continue; }
    if (s.position.y > m.y - 0.1 && s.position.y < lookY) { lookY = s.position.y; look = s; }
  }
  if (look) { const p = toScreen(look.position); pointer.x = p.x; pointer.y = p.y; eyes.hold = 1; }
  if (g.t >= g.dur) startFinale();
}
// per frame, after the mixer: a quick mouth snap when a star is caught
const _gq = new THREE.Quaternion(), _gx = new THREE.Vector3(1, 0, 0);
function gamePose(dt) {
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
  if (!g.playing || g.leap) return;
  g.leap = { t: 0, dur: 0.62 }; g.anim = 'leap'; play('leap', { fade: 0.08, speed: 1.35 });
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

/* ---------- commands (training demo) ---------- */
function command(name) {
  if (busy) return;
  if (name === 'reset') { store.clear(); location.reload(); return; }
  if (name === 'showcard') { screens.s3.classList.remove('hidecard'); $('#showCard').style.display = 'none'; setFrame('s3'); train.classList.remove('show'); return; }
  if (!actions[name]) return;
  petting = false; busy = true;
  const loop = CLIPS[name].loop;
  play(name, { fade: 0.25, onDone: loop ? undefined : () => { busy = false; play('idle', { fade: 0.5 }); } });
  if (loop) setTimeout(() => { busy = false; play('idle', { fade: 0.5 }); }, 4000);
}

/* ---------- events ---------- */
$('#catch').addEventListener('click', startGame);
$('#share').addEventListener('click', async () => {
  const text = `${phraseToday || $('#phrase').textContent} — Ори поймал для меня звезду в МТС Деньги`;
  try { if (navigator.share) await navigator.share({ title: 'Поймай звезду', text }); else { await navigator.clipboard.writeText(text); toast('Текст скопирован'); } } catch {}
});
$('#trainToggle').addEventListener('click', () => train.classList.toggle('show'));
$('#cardClose').addEventListener('click', () => { screens.s3.classList.add('hidecard'); $('#showCard').style.display = ''; setFrame('s1'); });
document.querySelectorAll('#throwBtn,[data-throw]').forEach((b) => b.addEventListener('click', armThrow));
function syncThrowBtns() { document.querySelectorAll('#throwBtn,[data-throw]').forEach((b) => { b.classList.toggle('armed', fetch_.mode); b.textContent = fetch_.mode ? 'Тапните, куда бросить' : 'Бросить мяч'; }); }
train.addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) command(b.dataset.cmd); });
document.querySelectorAll('.cmds').forEach((row) => row.addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) command(b.dataset.cmd); }));

let pointer = { x: -1, y: -1, down: false };
addEventListener('pointermove', (e) => {
  if (game.on) {
    if (game.drag && game.drag.id === e.pointerId) {
      game.drag.moved += Math.abs(e.clientX - game.drag.lx); game.drag.lx = e.clientX;
      if (game.drag.moved > 8 && !game.finale) game.targetX = screenX2world(e.clientX);
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
  if (e.code === 'ArrowLeft') game.targetX = pivot.position.x - 0.6;
  if (e.code === 'ArrowRight') game.targetX = pivot.position.x + 0.6;
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
function resize() {
  const w = innerWidth, h = innerHeight;
  renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
}
addEventListener('resize', resize); resize();

/* ---------- loop ---------- */
function tick() {
  const dt = Math.min(clock.getDelta(), 0.05);
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
    if (game.on) gamePose(dt);
    if (holdJaw && jawBone) { const e = new THREE.Euler().setFromQuaternion(jawBone.quaternion, 'XYZ'); if (e.x < JAW_HOLD) { e.x = JAW_HOLD; jawBone.quaternion.setFromEuler(e); } }
    // tail wag on top of the clips
    const wagAmp = THREE.MathUtils.degToRad(petting ? tail.amp * 2.2 : tail.amp), wagT = t * (petting ? tail.speed * 1.8 : tail.speed) * Math.PI * 2;
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
    ori.traverse((o) => { if (o.isMesh && o.material.userData.uni) o.material.userData.uni.uTime.value = t; });
    updateEyes(dt); updateBlink(dt);
    // touching the dog only rotates it: the pet reaction fired on every touch and read as a twitch,
    // so it is off (startPet/stopPet stay available for the command menu)
    if (petting) stopPet();
  }
  stepBallPhysics(dt);
  if (fetch_.ball && fetch_.ball.visible && !phys.on && fetch_.ball.parent === scene && !busy) fetch_.ball.position.y = floorY();
  // fallers
  for (let i = fallers.length - 1; i >= 0; i--) {
    const s = fallers[i]; if (s.userData.hero) continue;
    s.userData.t += dt; s.position.addScaledVector(s.userData.v, dt);
    s.material.opacity = Math.max(0, 1 - s.userData.t / s.userData.life);
    if (s.userData.streak) { const L = s.userData.v.length(); s.material.rotation = Math.atan2(s.userData.v.y, s.userData.v.x); s.scale.set(s.userData.base || (s.userData.base = s.scale.x) * 1, 1, 1); s.scale.x = s.userData.base * (1 + L * 0.5); s.scale.y = s.userData.base * 0.5; }
    if (s.userData.t > s.userData.life) { scene.remove(s); fallers.splice(i, 1); }
  }
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
  window.__ori = { game, tick, eyes, blink, spin, pointer, flick: (x, z) => flickBall(new THREE.Vector3(x, 0, z)), get pivot() { return pivot; }, get ball() { return fetch_.ball; }, scene, phys, get busy() { return busy; }, get cur() { return current && current.getClip().name; }, get pupil() { const e = eyes.pupils[0]; return e ? [e.node.position.x - e.base.x, e.node.position.y - e.base.y, e.node.position.z - e.base.z] : null; } };
  tick();
})();
