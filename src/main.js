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
  sitDown:    { a: 1070, b: 1098 },
  sit:        { a: 1098, b: 1146, loop: true },
  sitUp:      { a: 1146, b: 1166 },
};
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
const gEl = $('#game'), gSky = $('#gSky'), gBar = $('#gBar'), gHint = $('#gHint'), gName = $('#gName'), gX2 = $('#gX2');
const game = { on: false };
const _gRay = new THREE.Raycaster(), _gPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), _gNdc = new THREE.Vector2();
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
function spawnMeteor(aim) {
  const g = game, xm = Math.abs(ndcToPlane(0.7, 0, STAR_Z).x), top = ndcToPlane(0, 1.08, STAR_Z);
  let x = aim ? pivot.position.x + (Math.random() - 0.5) * 0.3 : (Math.random() * 2 - 1) * xm;
  x = THREE.MathUtils.clamp(x, -xm, xm);
  const land = g.baseY + 0.08;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: meteorTex, transparent: true, depthWrite: false }));
  sp.scale.setScalar(0.3); sp.position.set(x, top.y, STAR_Z); scene.add(sp);
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.14, 0.2, 40), new THREE.MeshBasicMaterial({ color: 0xff0032, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide }));
  ring.rotation.x = -Math.PI / 2; ring.position.set(x, g.baseY + 0.012, STAR_Z * 0.5); scene.add(ring);
  g.meteors.push({ sp, ring, t: 0, land, vy: (top.y - land) / METEOR.fall, spin: (Math.random() - 0.5) * 4 });
}
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
function meteorHit(i) {
  const g = game, p = g.meteors[i].sp.position.clone(); removeMeteor(i); meteorBurst(p, 14, true);
  g.hits++; g.combo = 0; setX2(false); g.stun = METEOR.stun; g.invuln = METEOR.invuln;
  try { navigator.vibrate && navigator.vibrate(80); } catch {}
  if (g.lit > 0) { const idx = --g.lit; unlightUnit(idx); gSay('Метеорит сбил звезду!', 1300); }
  else gSay('Осторожно, метеориты!', 1300);
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
  for (let k = 0; k < 8; k++) { x = (Math.random() * 2 - 1) * xm; if (Math.abs(x - dogX) > 0.55) break; }
  sp.position.set(x, top.y, STAR_Z);
  const ramp = 1.15 + 0.5 * game.t / game.dur;
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
  if (catchLick.action) catchLick.action.reset().setEffectiveWeight(1).play(); else game.snap = 0.24;
  game.wag = 0.7; game.caught++;
  game.combo++; game.bestCombo = Math.max(game.bestCombo, game.combo);
  const mult = game.x2 ? 2 : 1;
  if (game.x2 && --game.x2left <= 0) { setX2(false); game.combo = 0; }   // the bonus lasts a few stars, then a new series starts
  else if (!game.x2 && game.combo >= METEOR.series) { setX2(true); game.x2left = METEOR.seriesLen; gSay('Серия ×2!', 1400); }
  if (kind === 'comet') { game.cometCaught++; gSay('Поймал комету!', 1600); }
  const n = (kind === 'white' ? 1 : 2) * mult, from = toScreen(m);
  for (let k = 0; k < n && game.lit < game.need; k++) { const idx = game.lit++; setTimeout(() => flyToSky(from, idx), k * 120); }
  if (game.lit >= game.need) startFinale();
}

async function startGame() {
  if (sit.state !== 'stand') { wake(startGame); return; }
  if (busy || game.on) return;
  if (!pivot) return;
  busy = true; petting = false; holdJaw = false; parkBall(); train.classList.remove('show'); hint.style.opacity = 0;
  const shape = constellationOfDay();
  Object.assign(game, { mode: gameMode, meteors: [], meteorIn: METEOR.from, combo: 0, bestCombo: 0, x2: false, stun: 0, invuln: 0, hits: 0, dodged: 0, rush: false,
    wag: 0, slow: 0, hero: null, heroRing: null, heroPerfect: false, newRecord: false,
    left: TAP.start, el: 0, score: 0, chain: 0, mult: 1, lastCatch: -9, fever: 0, feverArmed: true, fly: null, fall: null, mouthOff: null, fullSaid: false });
  gX2.textContent = gameMode === 'tap' ? '' : 'Серия ×2';
  gEl.classList.toggle('tap', gameMode === 'tap'); updateScore();
  setX2(false);
  Object.assign(game, { on: true, t: 0, dur: 25, stars: [], lit: 0, need: shape.pts.length * 2, caught: 0, cometCaught: 0, comets: 0,
    spawnIn: 1.2, cometIn: 6.5, snap: 0, leap: null, anim: '', finale: false, lockAnim: false, helped: false, targetX: 0,
    baseY: FRAMES.game.model[1], mouthY0: 0, drag: null, tapped: null, tapWindow: false, playing: false, hero: null, heroPhase: null, shape });
  buildSky(shape); gName.textContent = shape.name; gBar.style.transform = 'scaleX(1)';
  game.baseHint = game.mode === 'tap' ? 'Тапайте звёзды — Ори прыгнет за ними' : 'Ведите пальцем — Ори бежит за звёздами';
  if (game.mode === 'tap') game.spawnIn = 0.4, game.meteorIn = TAP.meteorFrom;
  showScreen(null); setFrame('game'); zoom.target = gameMode === 'tap' ? 1.5 : 1.0;   // tap mode: wider view, Ori flies all over the sky spin.y = spin.x = spin.vy = 0;
  document.body.classList.add('night', 'gaming'); gEl.classList.remove('done'); gEl.classList.add('show');
  gSay('Соберите созвездие дня');
  play('idle', { fade: 0.3 });
  await wait(1100);
  game.mouthY0 = mouthWorld().y; game.mouthOff = mouthWorld().sub(pivot.position);
  gSay(game.baseHint); game.playing = true;
}

// shared finale: the star of the day falls through a lime ring above Ori; a tap makes him leap and grab it
// (a tap while the star is inside the ring = "shining" star + slow motion), then he rears up with the star in
// his mouth and sends it up to the constellation.
const HERO = { fallV: 0.72, leapUp: 0.42, leapH: 1.0, down: 0.4 };
async function startFinale() {
  const g = game; if (g.finale) return; g.finale = true; g.playing = false;
  for (let i = g.stars.length - 1; i >= 0; i--) removeGameStar(i, true);
  for (let i = g.meteors.length - 1; i >= 0; i--) { meteorBurst(g.meteors[i].sp.position, 5, false); removeMeteor(i); }
  setX2(false); g.stun = 0; g.fly = null; setFever(false);
  gBar.style.transform = 'scaleX(0)';
  if (g.mode === 'tap') gSay('Время!');
  if (g.lit < g.need) {
    await wait(g.mode === 'tap' ? 700 : 0);
    g.helped = true; gSay('Ори помогает дособрать созвездие');
    while (g.lit < g.need) { const idx = g.lit++; flyToSky(toScreen(mouthWorld()), idx); await wait(90); }
  }
  await wait(800);
  gEl.classList.add('done'); gSay('Созвездие собрано!');
  await wait(900);
  if (g.mode === 'tap') {
    const rec = getRecord(); g.newRecord = g.score > rec; if (g.newRecord) setRecord(g.score);
    gSay(g.newRecord ? `Новый рекорд: ${fmtScore(g.score)}!` : `Счёт: ${fmtScore(g.score)} · рекорд: ${fmtScore(Math.max(rec, g.score))}`);
    await wait(1700);
  } else if (!g.helped || g.caught > 0) { gSay(`Звёзд: ${g.caught} · метеоритов мимо: ${g.dodged} · лучшая серия: ${g.bestCombo}`); await wait(1500); }
  g.targetX = 0;
  const t0 = performance.now(); while ((Math.abs(pivot.position.x) > 0.05 || pivot.position.y > g.baseY + 0.02) && performance.now() - t0 < 1800) await wait(40);
  await wait(250);
  gSay('Тапните, когда звезда в кольце!');
  g.lockAnim = true; play('idle', { fade: 0.3 });
  const hero = makeHeroStar(); scene.add(hero); g.hero = hero;
  const top = ndcToPlane(0, 1.1, STAR_Z); hero.position.set(0.35, top.y, STAR_Z);
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.24, 0.29, 48), new THREE.MeshBasicMaterial({ color: 0xd9f38b, transparent: true, opacity: 0.5, depthWrite: false }));
  scene.add(ring); g.heroRing = ring;
  g.tapped = null;
  await new Promise((res) => { g.heroPhase = { stage: 'fall', t: 0, topY: top.y, done: res }; });
  await heroFinish(g.heroPerfect || (g.mode === 'fall' && g.cometCaught > 0 && !g.helped));
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
  const shine = g.heroPerfect;
  for (let i = 0; i < (shine ? 30 : 16); i++) { const a = Math.random() * Math.PI * 2, r = 1.4 + Math.random() * 1.8; const s = spawnFaller(m.x, m.y, m.z, new THREE.Vector3(Math.cos(a) * r, 0.4 + Math.random() * 1.6, Math.sin(a) * r * 0.5), 0.06 + Math.random() * 0.08, 0.7); s.material.color.set(Math.random() < 0.45 ? 0xd9f38b : 0xffffff); }
  if (catchLick.action) catchLick.action.reset().setEffectiveWeight(1).play();
  hero.userData.core.scale.setScalar(0.17); hero.userData.glow.scale.setScalar(0.28);
  flash.style.opacity = shine ? 0.7 : 0.35; setTimeout(() => { flash.style.opacity = 0; }, 160);
  if (shine) { g.slow = 0.7; gSay('Сияющая звезда!'); } else gSay('Поймал!');
  hp.y0 = pivot.position.y; hp.stage = hp.stage === 'leap' ? 'down' : 'rear'; hp.t = 0;
  if (hp.stage === 'rear') { play('rear', { fade: 0.18, speed: 1.25 }); g.wag = 3; }
}

async function heroFinish(shine) {
  const g = game;
  if (g.heroRing) { scene.remove(g.heroRing); g.heroRing.geometry.dispose(); g.heroRing = null; }
  gEl.classList.remove('done'); void gEl.offsetWidth; gEl.classList.add('done');
  scene.remove(g.hero); g.hero = null;
  flash.style.opacity = 1; await wait(240); flash.style.opacity = 0;
  // the star of the day is one per day: a replay keeps today's phrase (and the best shine)
  const rec = store.get() || { used: [] };
  const keep = rec.date === TODAY && rec.phrase;
  phraseToday = keep ? rec.phrase : pickPhrase();
  const shineAll = !!shine || !!(keep && rec.shine);
  store.set({ date: TODAY, phrase: phraseToday, used: keep ? rec.used || [] : [...(rec.used || []), phraseToday].slice(-160), shine: shineAll, constellation: g.shape.name });
  $('#phrase').textContent = phraseToday; applyShine(shineAll);
  await wait(500);
  endGame();
  screens.s3.classList.remove('hidecard'); $('#showCard').style.display = 'none';
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
  mixer.timeScale = 1; setFever(false); gEl.classList.remove('tap'); showRecord();
  for (let i = game.stars.length - 1; i >= 0; i--) removeGameStar(i, false);
  for (let i = (game.meteors || []).length - 1; i >= 0; i--) removeMeteor(i);
  setX2(false);
  game.on = false; game.playing = false;
  gEl.classList.remove('show'); document.body.classList.remove('night', 'gaming'); zoom.target = 1.3; gHint.textContent = '';
}

// per frame, before the mixer: movement, spawning, catching
function gameStep(dt) {
  const g = game;
  if (g.heroPhase && g.hero) { heroStep(dt); pedestal.position.set(pivot.position.x, g.baseY + 0.005, pivot.position.z); return; }
  if (g.mode === 'tap') { tapStep(dt); return; }
  const xm = Math.abs(ndcToPlane(0.78, -0.3, 0).x);
  const tx = THREE.MathUtils.clamp(g.targetX, -xm, xm), dx = tx - pivot.position.x;
  if (g.stun > 0) g.stun -= dt; if (g.invuln > 0) g.invuln -= dt; if (g.wag > 0) g.wag -= dt;
  const moving = Math.abs(dx) > 0.05 && !g.leap && !g.lockAnim && !(g.stun > 0);
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
  if (!g.playing) return;
  g.t += dt; gBar.style.transform = `scaleX(${Math.max(0, 1 - g.t / g.dur)})`;
  const rush = g.t >= g.dur - METEOR.rush;
  if (rush && !g.rush) { g.rush = true; gSay('Звездопад!', 1500); }
  g.spawnIn -= dt; if (g.spawnIn <= 0) { spawnStar(); g.spawnIn = rush ? 0.2 : THREE.MathUtils.lerp(1.25, 0.8, g.t / g.dur); }
  g.cometIn -= dt; if (g.cometIn <= 0 && g.comets < 2 && !rush) { spawnComet(); g.comets++; g.cometIn = 7 + Math.random() * 2; }
  if (g.t >= METEOR.from && !rush) {
    g.meteorIn -= dt;
    if (g.meteorIn <= 0) {
      const late = g.t > 15;
      spawnMeteor(Math.random() < 0.7);
      if (Math.random() < (late ? 0.45 : 0.15)) spawnMeteor(false);
      if (g.t < METEOR.from + 0.1) gSay('Метеориты! Уворачивайтесь', 1600);
      g.meteorIn = late ? 1.0 + Math.random() * 0.4 : 1.7 + Math.random() * 0.5;
    }
  }
  const mh = mouthWorld();
  for (let i = g.meteors.length - 1; i >= 0; i--) {
    const mt = g.meteors[i]; mt.t += dt;
    mt.sp.position.y -= mt.vy * dt; mt.sp.material.rotation += mt.spin * dt;
    const u = Math.min(1, mt.t / METEOR.fall);
    mt.ring.material.opacity = 0.25 + 0.6 * u; mt.ring.scale.setScalar(1.8 - 0.8 * u);
    if (Math.random() < 0.7) { const f = spawnFaller(mt.sp.position.x, mt.sp.position.y + 0.08, mt.sp.position.z, new THREE.Vector3((Math.random() - 0.5) * 0.3, 0.6, 0), 0.04 + Math.random() * 0.04, 0.35); f.material.color.set(Math.random() < 0.5 ? 0xff0032 : 0x5a6488); }
    const y = mt.sp.position.y;
    if (!(g.invuln > 0) && Math.abs(mt.sp.position.x - pivot.position.x) < METEOR.hitHalfW && y < mh.y + 0.22 && y > pivot.position.y + 0.1) { meteorHit(i); continue; }
    if (y <= mt.land) { meteorBurst(mt.sp.position, 8, false); g.dodged++; removeMeteor(i); }
  }
  const m = mouthWorld(); let look = null, lookY = 1e9;
  for (let i = g.stars.length - 1; i >= 0; i--) {
    const s = g.stars[i], u = s.userData;
    s.position.addScaledVector(u.v, dt); s.material.rotation += u.spin * dt;
    if (u.kind === 'comet' && Math.random() < 0.6) emitTrail(s.position);
    const ddx = m.x - s.position.x, ddy = s.position.y - m.y;
    if (u.kind !== 'comet' && Math.abs(ddx) < MAGNET && ddy > -0.15 && ddy < 0.7) s.position.x += ddx * Math.min(1, 4 * dt);   // soft magnet: forgives a near miss, not a far one
    if (u.kind === 'comet' && g.leap && Math.hypot(ddx, ddy) < 0.85) { s.position.x += ddx * Math.min(1, 9 * dt); s.position.y -= ddy * Math.min(1, 9 * dt); }
    const hit = u.kind === 'comet' ? Math.hypot(ddx, ddy) < 0.3 : Math.abs(ddx) < CATCH_R && Math.abs(ddy) < 0.2;
    if (hit) { catchGameStar(i); if (!g.playing) return; continue; }   // the last catch starts the finale, which clears the stars
    if (u.kind !== 'comet' && s.position.y < g.baseY + 0.03) { removeGameStar(i, true); continue; }
    if (u.kind === 'comet' && Math.abs(s.position.x) > xm * 1.6) { removeGameStar(i, false); continue; }
    if (s.position.y > m.y - 0.1 && s.position.y < lookY) { lookY = s.position.y; look = s; }
  }
  if (look) { const p = toScreen(look.position); pointer.x = p.x; pointer.y = p.y; eyes.hold = 1; }
  if (g.t >= g.dur) startFinale();
}
/* ---------- "Звёздный тап": tap a star, Ori leaps to it ---------- */
// Stars flash up over the whole sky and fade; a tap sends Ori flying to the star (a new tap re-targets him even
// in the air). Meteors fly across the sky and knock him down during a leap. Time is earned: +0.3 s per star,
// +2 s for a lime star, −2 s for a meteor. Catches less than chainGap apart build a chain: ×2 … ×5; ×5 starts a
// starfall (fever). Score and a personal record; the constellation fills as before, the round ends when time runs out.
const TAP = { start: 20, max: 40, add: 0.3, gold: 2, hit: 2, meteorTap: 1, chainGap: 1.6, fever: 5, meteorFrom: 3, g: 7.5 };
let gameMode = (() => { try { return localStorage.getItem('ori-game-mode') || 'fall'; } catch { return 'fall'; } })();
{ const q = new URLSearchParams(location.search).get('game'); if (q === 'tap' || q === 'fall') gameMode = q; }
function getRecord() { try { return +localStorage.getItem('ori-record-tap') || 0; } catch { return 0; } }
function setRecord(v) { try { localStorage.setItem('ori-record-tap', String(v)); } catch {} }
const fmtScore = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
function showRecord() {
  const r = getRecord();
  document.querySelectorAll('.g-rec').forEach((el) => { el.textContent = gameMode === 'tap' && r > 0 ? `Рекорд: ${fmtScore(r)}` : ''; });
}
function setGameMode(m) {
  gameMode = m; try { localStorage.setItem('ori-game-mode', m); } catch {}
  document.querySelectorAll('.gmode button').forEach((b) => b.classList.toggle('on', b.dataset.mode === m));
  showRecord();
}
document.querySelectorAll('.gmode button').forEach((b) => b.addEventListener('click', () => setGameMode(b.dataset.mode)));
setGameMode(gameMode);
const gScore = $('#gScore');
function updateScore() {
  if (!gScore) return;
  gScore.innerHTML = game.mode === 'tap' ? `${fmtScore(game.score || 0)}<span>${Math.max(0, Math.ceil(game.left || 0))} с</span>` : '';
}
function setMult(m) {
  game.mult = m; gX2.textContent = game.fever > 0 ? `×${m} · звёздный ливень` : `×${m}`; gX2.classList.toggle('on', m > 1);
}
function setFever(on) { document.body.classList.toggle('fever', !!on); if (!on && game) game.fever = 0; }
function tapPop(text, at, bad) {
  const el = document.createElement('div'); el.className = 'g-pop' + (bad ? ' bad' : ''); el.textContent = text;
  el.style.left = at.x + 'px'; el.style.top = at.y + 'px'; document.body.appendChild(el);
  requestAnimationFrame(() => el.classList.add('go')); setTimeout(() => el.remove(), 900);
}
function tapArea() {
  return { x0: ndcToPlane(-0.68, 0, STAR_Z).x, x1: ndcToPlane(0.68, 0, STAR_Z).x, y0: ndcToPlane(0, TAP_Y0, STAR_Z).y, y1: ndcToPlane(0, TAP_Y1, STAR_Z).y };
}
const TAP_Y0 = -0.12, TAP_Y1 = 0.42;   // screen band for stars (NDC): above Ori's head, below the constellation
function spawnTapStar() {
  const g = game, a = tapArea(), gold = g.fever <= 0 && Math.random() < 0.09;
  let x = 0, y = 0;
  for (let k = 0; k < 12; k++) {
    x = a.x0 + Math.random() * (a.x1 - a.x0); y = a.y0 + Math.random() * (a.y1 - a.y0);
    if (g.stars.every((s) => Math.hypot(s.position.x - x, s.position.y - y) > 0.42)) break;
  }
  const sp = makeGameStar(gold ? 'comet' : 'white'); sp.position.set(x, y, STAR_Z);
  const hard = Math.min(1, g.el / 35);
  sp.userData = { kind: gold ? 'gold' : 'white', age: 0, life: g.fever > 0 ? 1.7 : THREE.MathUtils.lerp(1.9, 1.05, hard), base: sp.scale.x, spin: (Math.random() - 0.5) * 2 };
  sp.scale.setScalar(0.01);
}
function spawnTapMeteor() {
  const g = game, a = tapArea(), dir = Math.random() < 0.5 ? 1 : -1, hard = Math.min(1, g.el / 35);
  const y = a.y0 + 0.1 + Math.random() * (a.y1 - a.y0 - 0.15);
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: meteorTex, transparent: true, depthWrite: false }));
  sp.scale.setScalar(0.3); sp.position.set(dir > 0 ? a.x0 - 0.6 : a.x1 + 0.6, y, STAR_Z); scene.add(sp);
  g.meteors.push({ sp, ring: null, t: 0, vx: dir * THREE.MathUtils.lerp(1.3, 2.2, hard), vy: -0.15 - Math.random() * 0.15, spin: (Math.random() - 0.5) * 4 });
}
function tapAt(cx, cy) {
  const g = game; if (!g.playing) return;
  const R = Math.max(46, Math.min(innerWidth, innerHeight) * 0.09);
  let best = null, bd = R;
  for (const s of g.stars) { const p = toScreen(s.position), d = Math.hypot(p.x - cx, p.y - cy); if (d < bd) { bd = d; best = s; } }
  if (best) { tapLeapTo(best); return; }
  for (let i = 0; i < g.meteors.length; i++) {
    const p = toScreen(g.meteors[i].sp.position);
    if (Math.hypot(p.x - cx, p.y - cy) < R * 0.8) {
      g.left = Math.max(0, g.left - TAP.meteorTap); tapPop(`−${TAP.meteorTap} с`, p, true); gSay('Это метеорит!', 900);
      try { navigator.vibrate && navigator.vibrate(40); } catch {}
      return;
    }
  }
}
function tapLeapTo(star) {
  const g = game;
  star.userData.target = true;
  const tgt = new THREE.Vector3(star.position.x - g.mouthOff.x, star.position.y - g.mouthOff.y, 0);
  const from = pivot.position.clone(), dist = from.distanceTo(tgt);
  g.fly = { from, tgt, t: 0, dur: 0.2 + 0.12 * dist, star }; g.fall = null;
  play('leap', { fade: 0.05, speed: 1.5 });
}
function tapCatch(star) {
  const g = game, i = g.stars.indexOf(star); if (i < 0) return;
  const gold = star.userData.kind === 'gold', m = mouthWorld(), at = toScreen(m);
  for (let k = 0; k < 10; k++) { const a = Math.random() * Math.PI * 2, r = 1 + Math.random() * 1.2; const f = spawnFaller(m.x, m.y, m.z + 0.1, new THREE.Vector3(Math.cos(a) * r, 0.4 + Math.random() * 1.2, 0), 0.05 + Math.random() * 0.05, 0.5); f.material.color.set(gold ? 0xd9f38b : 0xffffff); }
  removeGameStar(i, false);
  if (catchLick.action) catchLick.action.reset().setEffectiveWeight(1).play();
  g.wag = 0.7; g.caught++;
  g.chain = g.el - g.lastCatch < TAP.chainGap ? g.chain + 1 : 1; g.lastCatch = g.el; g.bestCombo = Math.max(g.bestCombo, g.chain);
  const mult = Math.min(5, 1 + Math.floor(g.chain / 3)); setMult(mult);
  const pts = (gold ? 30 : 10) * mult; g.score += pts;
  const add = gold ? TAP.gold : TAP.add; g.left = Math.min(TAP.max, g.left + add);
  tapPop(gold ? `+${pts} · +${TAP.gold} с` : `+${pts}`, { x: at.x, y: at.y - 30 });
  if (mult === 5 && g.feverArmed && g.fever <= 0) { g.fever = TAP.fever; g.feverArmed = false; setFever(true); game.fever = TAP.fever; setMult(5); gSay('Звёздный ливень!', 1500); }
  const n = gold ? 2 : 1;
  for (let k = 0; k < n && g.lit < g.need; k++) { const idx = g.lit++; setTimeout(() => flyToSky(at, idx), k * 120); }
  if (g.lit >= g.need && !g.fullSaid) { g.fullSaid = true; gSay('Созвездие собрано! Дальше — на очки', 1800); }
  updateScore();
}
function tapHit(i) {
  const g = game, p = g.meteors[i].sp.position.clone(); removeMeteor(i); meteorBurst(p, 14, true);
  g.hits++; g.chain = 0; setMult(1); g.stun = METEOR.stun; g.invuln = METEOR.invuln; g.feverArmed = true;
  g.fly = null; g.fall = { vy: 0.5 };
  g.left = Math.max(0, g.left - TAP.hit);
  try { navigator.vibrate && navigator.vibrate(80); } catch {}
  tapPop(`−${TAP.hit} с`, toScreen(p), true);
  if (g.lit > 0 && g.lit <= g.need) { const idx = --g.lit; unlightUnit(idx); }
  gSay('Метеорит! −2 секунды', 1200);
  updateScore();
}
function tapStep(dt) {
  const g = game, base = g.baseY;
  if (g.stun > 0) g.stun -= dt; if (g.invuln > 0) g.invuln -= dt; if (g.wag > 0) g.wag -= dt;
  // Ori: flight to the tapped star, then gravity back to the floor
  if (g.fly) {
    const f = g.fly; f.t += dt; const u = Math.min(1, f.t / f.dur), e = 1 - (1 - u) * (1 - u);
    pivot.position.lerpVectors(f.from, f.tgt, e); pivot.position.y += Math.sin(Math.PI * u) * 0.15;
    if (u >= 1) { if (g.stars.includes(f.star)) tapCatch(f.star); g.fly = null; g.fall = { vy: 0.6 }; }
  } else if (pivot.position.y > base + 0.001 || g.fall) {
    g.fall = g.fall || { vy: 0 }; g.fall.vy -= TAP.g * dt; pivot.position.y += g.fall.vy * dt;
    if (pivot.position.y <= base) { pivot.position.y = base; g.fall = null; play('idle', { fade: 0.2 }); }
  } else if (!g.playing) {
    const dx = g.targetX - pivot.position.x; if (Math.abs(dx) > 0.01) pivot.position.x += Math.sign(dx) * Math.min(Math.abs(dx), 1.6 * dt);
  }
  const xm = Math.abs(ndcToPlane(0.85, -0.3, 0).x); pivot.position.x = THREE.MathUtils.clamp(pivot.position.x, -xm, xm);
  const wantYaw = g.fly ? THREE.MathUtils.clamp((g.fly.tgt.x - g.fly.from.x) * 1.4, -0.8, 0.8) : 0;
  let dyw = wantYaw - pivot.rotation.y; dyw = Math.atan2(Math.sin(dyw), Math.cos(dyw)); pivot.rotation.y += dyw * Math.min(1, 10 * dt);
  pivot.rotation.x = 0; pivot.position.z += (0 - pivot.position.z) * 0.12;
  pedestal.position.set(pivot.position.x, base + 0.005, 0);
  if (!g.playing) return;
  g.el += dt; g.left -= dt;
  if (g.fever > 0) { g.fever -= dt; if (g.fever <= 0) { setFever(false); setMult(g.mult); } }
  if (g.chain > 0 && g.el - g.lastCatch > TAP.chainGap) { g.chain = 0; g.feverArmed = true; setMult(1); }
  gBar.style.transform = `scaleX(${THREE.MathUtils.clamp(g.left / TAP.start, 0, 1)})`;
  updateScore();
  const hard = Math.min(1, g.el / 35), maxAlive = g.fever > 0 ? 8 : Math.round(THREE.MathUtils.lerp(3, 5, hard));
  g.spawnIn -= dt;
  if (g.spawnIn <= 0 && g.stars.length < maxAlive) { spawnTapStar(); g.spawnIn = g.fever > 0 ? 0.12 : THREE.MathUtils.lerp(0.7, 0.4, hard); }
  if (g.fever <= 0 && g.el >= TAP.meteorFrom) {
    g.meteorIn -= dt;
    if (g.meteorIn <= 0) { spawnTapMeteor(); if (hard > 0.5 && Math.random() < 0.3) spawnTapMeteor(); g.meteorIn = THREE.MathUtils.lerp(2.6, 1.1, hard) + Math.random() * 0.4; }
  }
  // stars: pop in, twinkle, blink before they fade out
  for (let i = g.stars.length - 1; i >= 0; i--) {
    const s = g.stars[i], u = s.userData; u.age += dt; s.material.rotation += u.spin * dt;
    const k = u.age / u.life, pop = Math.min(1, u.age / 0.15);
    let sc = u.base * pop * (1 + 0.08 * Math.sin(u.age * 12));
    if (k > 0.7 && !u.target) { sc *= 1 - (k - 0.7) / 0.3 * 0.6; s.material.opacity = 0.55 + 0.45 * Math.abs(Math.sin(u.age * 22)); }
    s.scale.setScalar(sc);
    if (k >= 1 && !u.target) removeGameStar(i, true);
  }
  // meteors cross the sky; they only hurt Ori in the air
  const body0 = pivot.position.clone().add(new THREE.Vector3(0, 0.25, 0)), body1 = mouthWorld();
  const seg = new THREE.Line3(body0, body1), cp = new THREE.Vector3();
  for (let i = g.meteors.length - 1; i >= 0; i--) {
    const mt = g.meteors[i]; mt.t += dt; mt.sp.position.x += mt.vx * dt; mt.sp.position.y += mt.vy * dt; mt.sp.material.rotation += mt.spin * dt;
    if (Math.random() < 0.7) { const f = spawnFaller(mt.sp.position.x - Math.sign(mt.vx) * 0.1, mt.sp.position.y, mt.sp.position.z, new THREE.Vector3(-mt.vx * 0.3, 0.2, 0), 0.04 + Math.random() * 0.04, 0.35); f.material.color.set(Math.random() < 0.5 ? 0xff0032 : 0x5a6488); }
    const airborne = pivot.position.y > base + 0.08;
    if (airborne && !(g.invuln > 0)) {
      const mp = mt.sp.position.clone(); mp.z = 0; seg.closestPointToPoint(mp, true, cp); cp.z = 0;
      if (cp.distanceTo(mp) < 0.3) { tapHit(i); continue; }
    }
    if (Math.abs(mt.sp.position.x) > Math.abs(tapArea().x1) + 1) removeMeteor(i);
  }
  if (g.left <= 0) { g.left = 0; updateScore(); startFinale(); }
}

// per frame, after the mixer: a quick mouth snap when a star is caught
const _gq = new THREE.Quaternion(), _gx = new THREE.Vector3(1, 0, 0), _gy = new THREE.Vector3(0, 1, 0);
function gamePose(dt) {
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
  if (!g.playing || g.leap || g.mode === 'tap') return;
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
  if (name === 'showcard') { screens.s3.classList.remove('hidecard'); $('#showCard').style.display = 'none'; setFrame('s3'); train.classList.remove('show'); return; }
  if (!actions[name]) return;
  petting = false; busy = true;
  const loop = CLIPS[name].loop;
  play(name, { fade: 0.25, onDone: loop ? undefined : () => { busy = false; play('idle', { fade: 0.5 }); } });
  if (loop) setTimeout(() => { busy = false; play('idle', { fade: 0.5 }); }, 4000);
}

/* ---------- events ---------- */
$('#catch').addEventListener('click', startGame);
$('#again').addEventListener('click', startGame);
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
addEventListener('pointerdown', () => wake(), true);
addEventListener('keydown', () => wake(), true);
addEventListener('wheel', () => wake(), { capture: true, passive: true });
addEventListener('pointermove', () => { if (sit.state === 'stand') sit.idle = 0; }, true);
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
  if (game.on && game.mode === 'tap') { if (game.finale) gameTap(); else tapAt(e.clientX, e.clientY); return; }
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
function tick(_ts, simDt) {
  const dt = simDt !== undefined ? simDt : Math.min(clock.getDelta(), 0.05);
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
    const wagAmp = THREE.MathUtils.degToRad(petting || (game.on && game.wag > 0) ? tail.amp * 2.2 : sit.state === 'sitting' ? tail.amp * 0.3 : tail.amp), wagT = t * (petting ? tail.speed * 1.8 : tail.speed) * Math.PI * 2;
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
    updateEyes(dt); updateBlink(dt); updateSit(dt); updatePant(dt);
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
  window.__ori = { game, tick, sim: (dt) => tick(0, dt), tapAt, toScreen, startGame, eyes, blink, spin, pointer, flick: (x, z) => flickBall(new THREE.Vector3(x, 0, z)), get pivot() { return pivot; }, get ball() { return fetch_.ball; }, scene, phys, sit, pant, get busy() { return busy; }, get cur() { return current && current.getClip().name; }, get pupil() { const e = eyes.pupils[0]; return e ? [e.node.position.x - e.base.x, e.node.position.y - e.base.y, e.node.position.z - e.base.z] : null; } };
  tick();
})();
