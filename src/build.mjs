import { existsSync } from 'fs';
// Bundle src/main.js with esbuild and inline everything (three.js, model, phrases, MTS fonts, logos) into one HTML file.
import { build } from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const out = await build({
  entryPoints: ['src/main.js'], bundle: true, minify: true, format: 'iife', write: false, target: ['es2020'],
  nodePaths: ['/Users/andrey/crystal-ball/node_modules'],
});
const js = out.outputFiles[0].text;
const b64 = (p, mime) => `data:${mime};base64,${readFileSync(p).toString('base64')}`;
const glb = readFileSync(existsSync('ori.packed.glb') ? 'ori.packed.glb' : 'ori.glb').toString('base64');
const phrases = readFileSync('phrases.json', 'utf8');
const rep = {
  __F_WIDE500__: b64('assets/fonts/MTSWide-500.woff2', 'font/woff2'),
  __F_WIDE700__: b64('assets/fonts/MTSWide-700.woff2', 'font/woff2'),
  __F_TEXT400__: b64('assets/fonts/MTSText-400.woff2', 'font/woff2'),
  __F_TEXT500__: b64('assets/fonts/MTSText-500.woff2', 'font/woff2'),
  __F_COMP400__: b64('assets/fonts/MTSCompact-400.woff2', 'font/woff2'),
  __LOGO_DENGI__: b64('assets/brand/logo-dengi-dark.svg', 'image/svg+xml'),
  __LOGO_MTS__: b64('assets/brand/logo-mts.png', 'image/png'),
  __FAVICON__: b64('assets/brand/favicon.svg', 'image/svg+xml'),
  __GLB__: glb, __PHRASES__: phrases, __BUNDLE__: js.replace(/<\/script>/g, '<\\/script>'),
};
let html = readFileSync('index.html', 'utf8');
for (const [k, v] of Object.entries(rep)) html = html.replace(k, () => v);
mkdirSync('dist', { recursive: true });
writeFileSync('dist/ori-catch-a-star.html', html);
console.log('dist/ori-catch-a-star.html', (html.length / 1e6).toFixed(1), 'MB; js', (js.length / 1e3).toFixed(0), 'KB');
