// quantize + meshopt compression, textures re-encoded to WebP from the lossless PNG bakes.
// NO resample(): the page cuts clips out of one long action by frame numbers (AnimationUtils.subclip); dropping
// "redundant" keys left some bones without any key inside a clip (e.g. the seated root in the sit loop), so they
// snapped back to rest. Every-frame keys are kept.
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS, EXTTextureWebP } from '@gltf-transform/extensions';
import { prune, dedup, meshopt } from '@gltf-transform/functions';
import { MeshoptEncoder, MeshoptDecoder } from 'meshoptimizer';
import sharp from 'sharp';
import { existsSync } from 'node:fs';
const [,, inp, out] = process.argv;
await MeshoptEncoder.ready; await MeshoptDecoder.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.encoder': MeshoptEncoder, 'meshopt.decoder': MeshoptDecoder });
const doc = await io.read(inp);

// Blender writes the textures as JPEG q80. The same bakes exist as PNG (web_export.py saves them next to the
// model, the eye bakes live in gen/), so WebP is encoded from the PNG: smaller AND closer to the bake.
// The quality is picked per texture: the lowest one whose error against the PNG is at least 1 dB below the
// JPEG's (PSNR), never under 70. A PNG that does not match the texture in the model is ignored (JPEG kept).
const PNG = { body_color: 'body_color.png', body_emit: 'body_emit.png', iris_bake: '../gen/iris_bake.png', sclera_bake: '../gen/sclera_bake.png' };
const raw = async (buf) => sharp(buf).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const psnr = (a, b) => { let s = 0; for (let i = 0; i < a.length; i++) { const d = a[i] - b[i]; s += d * d; } const m = s / a.length; return m === 0 ? 99 : 10 * Math.log10(255 * 255 / m); };
let webp = false;
for (const tex of doc.getRoot().listTextures()) {
  const src = PNG[tex.getName()];
  if (!src || !existsSync(src) || tex.getMimeType() !== 'image/jpeg') { console.log('keep', tex.getName()); continue; }
  const ref = await raw(src), jpg = await raw(Buffer.from(tex.getImage()));
  if (ref.info.width !== jpg.info.width || ref.info.height !== jpg.info.height || psnr(ref.data, jpg.data) < 34) { console.log('keep', tex.getName(), '(the PNG is not this texture)'); continue; }
  const want = psnr(ref.data, jpg.data) + 1;
  let best = null;
  for (let q = 70; q <= 96 && !best; q += 2) {
    const buf = await sharp(src).webp({ quality: q, effort: 6, smartSubsample: true }).toBuffer();
    const p = psnr(ref.data, (await raw(buf)).data);
    if (p >= want || q === 96) best = { q, buf, p };
  }
  console.log(`webp ${tex.getName()}: jpeg ${(tex.getImage().byteLength / 1024).toFixed(0)} KB, ${(want - 1).toFixed(1)} dB -> webp q${best.q} ${(best.buf.length / 1024).toFixed(0)} KB, ${best.p.toFixed(1)} dB`);
  tex.setImage(new Uint8Array(best.buf)).setMimeType('image/webp').setURI(tex.getURI().replace(/\.jpe?g$/i, '.webp'));
  webp = true;
}
if (webp) doc.createExtension(EXTTextureWebP).setRequired(true);

await doc.transform(dedup(), prune(), meshopt({ encoder: MeshoptEncoder, level: 'medium' }));
await io.write(out, doc);
