// resample animation keys (drop keys that linear interpolation reproduces) + quantize + meshopt compression
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { resample, prune, dedup, meshopt } from '@gltf-transform/functions';
import { MeshoptEncoder, MeshoptDecoder } from 'meshoptimizer';
const [,, inp, out] = process.argv;
await MeshoptEncoder.ready; await MeshoptDecoder.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.encoder': MeshoptEncoder, 'meshopt.decoder': MeshoptDecoder });
const doc = await io.read(inp);
await doc.transform(dedup(), resample({ tolerance: 1e-4 }), prune(), meshopt({ encoder: MeshoptEncoder, level: 'medium' }));
await io.write(out, doc);
