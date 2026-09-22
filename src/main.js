import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

/* ---------- clip table (frames in the single Blender action, 24 fps) ---------- */
const FPS = 24;
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
const eyes = { pupils: [], glints: [], irises: [], gaze: new THREE.Vector2(), target: new THREE.Vector2(), sacc: 0 };
// Blender driver basis converted to glTF node space (x, z, -y)
const EYE_AXES = {
  L: { px: new THREE.Vector3(0.87777, 0.03979, -0.47743), py: new THREE.Vector3(0.05253, -0.99853, 0.01336) },
  R: { px: new THREE.Vector3(0.87520, -0.04017, 0.48210), py: new THREE.Vector3(-0.05980, -0.99789, 0.02540) },
};
const spin = { y: 0, x: 0, vy: 0, dragging: false, lastX: 0, lastY: 0, moved: 0 };
// procedural tail wag (port of the Blender drivers: amp deg, speed Hz, per-bone gain and phase lag)
const tail = { bones: [], amp: 14, speed: 2.0, gains: [0.292, 0.364, 0.436, 0.508, 0.580], lags: [0.55, 1.10, 1.65, 2.20, 2.75] };
const _qz = new THREE.Quaternion(), _qx = new THREE.Quaternion(), _ax = new THREE.Vector3(1, 0, 0), _az = new THREE.Vector3(0, 0, 1);
const clock = new THREE.Clock();
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
    const name = m.name || '';
    if (name === 'WEB_body') {
      const pm = new THREE.MeshPhysicalMaterial({
        map: m.map, color: 0xd6d0e8, roughness: 0.36, metalness: 0,
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
             vec4 ec = texture2D( emissiveMap, vEmissiveMapUv );
             float lum = dot(ec.rgb, vec3(0.299, 0.587, 0.114));
             float spark = smoothstep(0.62, 0.9, lum);
             // nebula: two fbm layers in rest-pose object space (Blender: noise scale 1.4 and 2.6 on the position), ramp blue->violet->pink
             vec3 P = vRest * 2.3;
             float n1 = fbm(P * 1.4 + vec3(0.0, uTime * 0.02, 0.0));
             float n2 = fbm(P * 2.6 + vec3(7.1, 3.3, uTime * 0.03));
             float t = clamp((n1 * 0.6 + n2 * 0.4 - 0.28) / 0.46, 0.0, 1.0);
             vec3 ramp = t < 0.5 ? mix(vec3(0.30, 0.55, 1.0), vec3(0.60, 0.35, 1.0), t / 0.5) : mix(vec3(0.60, 0.35, 1.0), vec3(1.0, 0.50, 0.85), (t - 0.5) / 0.5);
             float mask = smoothstep(0.34, 0.72, n1 * 0.6 + n2 * 0.4);
             totalEmissiveRadiance = ramp * mask * 0.85 + vec3(1.0) * spark * 1.0;
             diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * mix(vec3(1.0), ramp, 0.8), mask);
           #endif`);
      };
      pm.name = name; o.material = pm;
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

function play(name, { fade = 0.25, onDone } = {}) {
  const next = actions[name]; if (!next) return;
  if (current && current !== next) current.fadeOut(fade);
  next.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).fadeIn(fade).play();
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
        if (o.isBone) { if (o.name === 'head') headBone = o; if (o.name === 'jaw') jawBone = o; if (/^tail[1-5]$/.test(o.name)) tail.bones[+o.name[4] - 1] = o; }
        const n = o.name || '';
        if (/^PUPIL_[LR]/.test(n)) eyes.pupils.push({ node: o, side: n[6], base: o.position.clone() });
        if (/^GLINT_[LR]/.test(n)) eyes.glints.push({ node: o, side: n[6], base: o.position.clone() });
        if (/^IRIS_[LR]/.test(n) && o.isMesh) eyes.irises.push({ node: o, side: n[5] });
      });
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
    if (eyes.sacc <= 0) { eyes.sacc = 0.7 + Math.random() * 1.8; const ang = Math.random() * Math.PI * 2, mag = 0.55 + Math.random() * 0.45; eyes.target.set(Math.cos(ang) * mag, Math.sin(ang) * mag * 0.6); if (Math.random() < 0.25) eyes.target.set(0, 0.15); }
    tx = eyes.target.x; ty = eyes.target.y;
  }
  // model rotation moves the head: look a bit toward the camera side
  tx -= spin.y * 0.6;
  const k = 1 - Math.pow(0.001, dt);  // fast but smooth
  eyes.gaze.x += (tx - eyes.gaze.x) * k; eyes.gaze.y += (ty - eyes.gaze.y) * k;
  const len = Math.max(1, Math.hypot(eyes.gaze.x, eyes.gaze.y));
  const px = eyes.gaze.x / len, py = eyes.gaze.y / len;
  const off = new THREE.Vector3();
  for (const e of [...eyes.pupils, ...eyes.glints]) {
    const ax = EYE_AXES[e.side]; off.copy(ax.px).multiplyScalar(px).addScaledVector(ax.py, py).multiplyScalar(0.034);
    e.node.position.copy(e.base).add(off);
  }
  for (const e of eyes.irises) {
    const m = e.node.material; if (m && m.map) { m.map.offset.set(-0.2 * px, 0.2 * py); if (m.emissiveMap && m.emissiveMap !== m.map) m.emissiveMap.offset.copy(m.map.offset); }
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
  const runT = THREE.MathUtils.clamp(dist / 1.6, 0.2, 1.1);
  if (dist > 0.4) play('walk', { fade: 0.15 });
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
  if (dist > 0.35) { fetch_.yaw = Math.atan2(home.x - stop.x, home.z - stop.z) - baseY; play('walk', { fade: 0.2 }); await wait(Math.max(600, runT * 1000)); }
  fetch_.yaw = 0; await waitYaw(); fetch_.yaw = null;
  // drop it beside the paws
  const dropP = playAsync('drop', 0.2);
  await wait((1023 - 1010) / 24 * 1000);
  holdJaw = false; scene.attach(ball);
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
    play('walk', { fade: 0.15 });
    const SPEED = 1.35; let caught = false; const t0 = performance.now();
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
    if (back.length() > 0.25) { fetch_.yaw = Math.atan2(back.x, back.z) - baseY; fetch_.pos = base.clone(); play('walk', { fade: 0.2 }); const w0 = performance.now(); while (new THREE.Vector2(pivot.position.x - base.x, pivot.position.z - base.z).length() > 0.06 && performance.now() - w0 < 5000) await wait(40); }
    fetch_.pos = null; fetch_.yaw = 0; await waitYaw(); fetch_.yaw = null;
    const dropP = playAsync('drop', 0.2); await wait((1023 - 1010) / 24 * 1000);
    holdJaw = false; scene.attach(ball);
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
$('#catch').addEventListener('click', catchStar);
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
  // pick up the resting ball with a drag
  if (fetch_.ball && !busy && !phys.on && fetch_.ball.parent === scene) {
    const bp = fetch_.ball.position.clone().project(camera); const bx = (bp.x + 1) / 2 * innerWidth, by = (1 - bp.y) / 2 * innerHeight;
    if (Math.hypot(e.clientX - bx, e.clientY - by) < Math.min(innerWidth, innerHeight) * 0.12) { phys.grab = { id: e.pointerId, pts: [[e.clientX, e.clientY, performance.now()]] }; try { canvas.setPointerCapture(e.pointerId); } catch {} return; }
  }
  pointer.x = e.clientX; pointer.y = e.clientY; pointer.down = true; eyes.hold = 4; spin.dragging = true; spin.lastX = e.clientX; spin.lastY = e.clientY; spin.moved = 0; try { canvas.setPointerCapture(e.pointerId); } catch {} });
function onPointerEnd(e) {
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

function toast(msg) { hint.textContent = msg; hint.style.opacity = 1; setTimeout(() => { hint.style.opacity = 0; hint.textContent = 'Погладьте Ори по голове'; }, 1800); }
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
    if (fetch_.pos) { const tgt = fetch_.pos; const dv = tgt.clone().sub(pivot.position); dv.y = 0; const L = dv.length(); const stepL = Math.min(L, 1.35 * dt); if (L > 1e-4) pivot.position.addScaledVector(dv.normalize(), stepL); }
    else pivot.position.lerp(new THREE.Vector3().fromArray(f.model), 0.06);
    pedestal.position.set(pivot.position.x, pivot.position.y + 0.005, pivot.position.z);
    if (!spin.dragging) { spin.y += spin.vy; spin.vy *= 0.92; spin.x *= 0.95; }
    const baseY = frame === 's1' ? -0.35 : frame === 's3' ? -0.5 : -0.2;
    const wantYaw = fetch_.yaw !== null ? baseY + fetch_.yaw : Math.sin(t * 0.35) * 0.06 + baseY + spin.y;
    let dy = wantYaw - pivot.rotation.y; dy = Math.atan2(Math.sin(dy), Math.cos(dy)); pivot.rotation.y += dy * (fetch_.yaw !== null ? 0.18 : 1);
    pivot.rotation.x = spin.x;
    mixer.update(dt);
    if (holdJaw && jawBone) { const e = new THREE.Euler().setFromQuaternion(jawBone.quaternion, 'XYZ'); if (e.x < JAW_HOLD) { e.x = JAW_HOLD; jawBone.quaternion.setFromEuler(e); } }
    // tail wag on top of the clips
    const wagAmp = THREE.MathUtils.degToRad(petting ? tail.amp * 2.2 : tail.amp), wagT = t * (petting ? tail.speed * 1.8 : tail.speed) * Math.PI * 2;
    for (let i = 0; i < 5; i++) {
      const b = tail.bones[i]; if (!b) continue;
      const z = wagAmp * tail.gains[i] * Math.sin(wagT - tail.lags[i]);
      const x = wagAmp * 0.25 * tail.gains[i] * Math.sin(wagT - tail.lags[i] + Math.PI / 2);
      _qz.setFromAxisAngle(_az, z); _qx.setFromAxisAngle(_ax, x);
      b.quaternion.multiply(_qz).multiply(_qx);
    }
    ori.traverse((o) => { if (o.isMesh && o.material.userData.uni) o.material.userData.uni.uTime.value = t; });
    updateEyes(dt);
    // petting hit test
    const hs = headScreen();
    if (hs) {
      const r = Math.min(innerWidth, innerHeight) * 0.11;
      const over = pointer.x >= 0 && Math.hypot(pointer.x - hs.x, pointer.y - hs.y) < r && (isMobile ? pointer.down : true) && spin.moved < 12;
      if (over && !fetch_.mode) { petTimer = 0.6; if (!petting) startPet(); } else { petTimer -= dt; if (petting && petTimer < 0) stopPet(); }
    }
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
    phraseToday = saved.phrase; $('#phrase').textContent = saved.phrase; showScreen('s3'); setFrame('s3');
  }
  play('idle');
  window.__ori = { eyes, spin, pointer, flick: (x, z) => flickBall(new THREE.Vector3(x, 0, z)), get pivot() { return pivot; }, get ball() { return fetch_.ball; }, scene, phys, get busy() { return busy; }, get cur() { return current && current.getClip().name; }, get pupil() { const e = eyes.pupils[0]; return e ? [e.node.position.x - e.base.x, e.node.position.y - e.base.y, e.node.position.z - e.base.z] : null; } };
  tick();
})();
