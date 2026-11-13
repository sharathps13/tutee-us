// Precomputes the finder map's state labels and label room table (FINDER_LABELS / FINDER_ROOM (see FINDER_ROOM in assets/js/main.js).
// usage: node tools/bake-finder-room.mjs <playwright-module-path> <chromium-path>
import fs from 'fs'; import path from 'path'; import url from 'url';
const [pwPath, chrome] = process.argv.slice(2);
const { chromium } = await import(pwPath);
const root = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), '..');
const b = await chromium.launch(chrome ? { executablePath: chrome } : {});
const all = {}, place = {}; let labels = null;
for (const w of [390, 1440]) {
  const pg = await b.newPage({ viewport: { width: w, height: 900 } });
  await pg.goto('file://' + path.join(root, 'index.html')); await pg.waitForTimeout(1500);
  Object.assign(all, await pg.evaluate(() => window.__TC_ROOM_LOG || {}));
  Object.assign(place, await pg.evaluate(async () => { const out = Object.assign({}, window.__TC_PLACE_LOG); const sec = document.getElementById('finder');
    // walk every type/field filter once so their bubble sizes are baked too
    for (const b of [...sec.querySelectorAll('[data-type], [data-finder-fields] button')]) { b.click(); await new Promise(r => setTimeout(r, 30)); Object.assign(out, window.__TC_PLACE_LOG); b.click(); }
    const reset = sec.querySelector('[data-finder-reset]'); if (reset) reset.click(); return Object.assign(out, window.__TC_PLACE_LOG); }));
  if (w === 1440) labels = await pg.evaluate(() => window.__TC_LABELS && window.__TC_LABELS());
  await pg.close();
}
await b.close();
const js = path.join(root, 'assets/js/main.js'); let s = fs.readFileSync(js, 'utf8');
s = s.replace(/\/\*ROOM\*\/[\s\S]*?\/\*\/ROOM\*\//, '/*ROOM*/' + JSON.stringify(all) + '/*/ROOM*/');
if (labels) s = s.replace(/\/\*LABELS\*\/[\s\S]*?\/\*\/LABELS\*\//, '/*LABELS*/' + JSON.stringify(labels) + '/*/LABELS*/');
s = s.replace(/\/\*PLACE\*\/[\s\S]*?\/\*\/PLACE\*\//, '/*PLACE*/' + JSON.stringify(place) + '/*/PLACE*/');
fs.writeFileSync(js, s); console.log('bubble spots', Object.keys(place).length); console.log('baked', Object.keys(all).length, 'entries');
