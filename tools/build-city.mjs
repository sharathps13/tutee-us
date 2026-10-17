// Bundles the WebGL city (src/city) into assets/js/city.js.
// Needs: npm i three@0.169.0 esbuild   (run from the project root: node tools/build-city.mjs)
import { build } from 'esbuild';
await build({
  entryPoints: ['src/city/main.js'], bundle: true, format: 'esm', minify: true,
  outfile: 'assets/js/city.js', target: ['es2020'], legalComments: 'none',
  nodePaths: [process.env.NODE_PATH || 'node_modules'].filter(Boolean)
});
console.log('assets/js/city.js built');
