// Multi-file build for GitHub Pages: index.html + assets (glb, fonts, logos, bundle.js, phrases.json)
import { build } from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs';
const out = await build({ entryPoints: ['src/main.js'], bundle: true, minify: true, format: 'iife', write: false, target: ['es2020'], nodePaths: ['/Users/andrey/crystal-ball/node_modules'] });
let js = out.outputFiles[0].text;
// swap inline-glb decoding for a fetch of ori.glb
// bundle already falls back to fetch("assets/ori.glb") when window.ORI_GLB is empty
mkdirSync('pages/assets', { recursive: true });
for (const f of ['MTSWide-500.woff2','MTSWide-700.woff2','MTSText-400.woff2','MTSText-500.woff2','MTSCompact-400.woff2']) copyFileSync('assets/fonts/'+f, 'pages/assets/'+f);
copyFileSync('assets/brand/logo-dengi-dark.svg', 'pages/assets/logo-dengi.svg'); copyFileSync('assets/brand/logo-mts.png', 'pages/assets/logo-mts.png'); copyFileSync('assets/brand/favicon.svg', 'pages/assets/favicon.svg');
import { existsSync } from 'fs';
copyFileSync(existsSync('ori.packed.glb') ? 'ori.packed.glb' : 'ori.glb', 'pages/assets/ori.glb');   // the compressed model when it exists
writeFileSync('pages/assets/bundle.js', js);
const rep = { __F_WIDE500__: 'assets/MTSWide-500.woff2', __F_WIDE700__: 'assets/MTSWide-700.woff2', __F_TEXT400__: 'assets/MTSText-400.woff2', __F_TEXT500__: 'assets/MTSText-500.woff2', __F_COMP400__: 'assets/MTSCompact-400.woff2', __LOGO_DENGI__: 'assets/logo-dengi.svg', __LOGO_MTS__: 'assets/logo-mts.png', __FAVICON__: 'assets/favicon.svg', __GLB__: '', __PHRASES__: readFileSync('phrases.json','utf8') };
let html = readFileSync('index.html', 'utf8');
for (const [k, v] of Object.entries(rep)) html = html.replace(k, () => v);
// the model URL carries a content hash, so a new model is picked up at once (GitHub Pages caches files for 10 min)
const glbHash = (await import('node:crypto')).createHash('md5').update(readFileSync('pages/assets/ori.glb')).digest('hex').slice(0, 10);
html = html.replace('<script>__BUNDLE__</script>', '<script>window.ORI_GLB_V="' + glbHash + '"</script><script src="assets/bundle.js?v=' + Date.now() + '"></script>');
writeFileSync('pages/index.html', html);
writeFileSync('pages/.nojekyll', '');
console.log('pages/ ready');
