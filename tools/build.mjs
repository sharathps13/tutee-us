// Bundles the WebGL hero (three.js is tree-shaken) into assets/js/hero.js.
// Run: node tools/build.mjs   (needs: npm i three esbuild)
import { build } from 'esbuild';
await build({
  entryPoints: ['src/hero/hero.js'], bundle: true, minify: true, format: 'esm', target: ['es2019'],
  outfile: 'assets/js/hero.js', legalComments: 'none', logLevel: 'info',
});
