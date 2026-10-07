// Screenshots of the planner. Start `npm run dev` first (port 5300) or pass a URL.
import { chromium } from 'playwright';
import { existsSync } from 'node:fs';
const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || (existsSync(chrome) ? chrome : undefined), headless: true });
const url = process.argv[2] || 'http://localhost:5300';
const errors = [];
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })).newPage();
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
await page.goto(url);
await page.evaluate(() => localStorage.clear());
await page.reload();
await page.waitForFunction(() => window.planner?.ready);
const shot = (name) => page.waitForTimeout(500).then(() => page.screenshot({ path: `shots/${name}.png` }));

await shot('1-empty');
await page.click('#addAll');
await shot('2-set-3d');
await page.click('#viewTop');
await shot('3-set-top');

await page.evaluate(() => window.planner.setView('3d'));
await shot('4-back-3d');

// Close-ups of each model
const types = ['sofa3', 'sofa2', 'recliner', 'freezer', 'bookcase', 'pantry'];
await page.evaluate(() => { const s = window.planner.state; for (const it of [...s.items]) window.planner.removeItem(it.id); });
await page.evaluate((types) => { let x = -5; for (const t of types) { const it = window.planner.addItem(t, { x, z: 0, rot: 0 }); x += it.w / 100 + 0.6; } window.planner.select(null); }, types);
await shot('5-models');
await page.evaluate(() => { const p = window.planner; p.orbit.target.set(-0.8, 0.6, 0); p.persp.position.set(-0.8, 2.4, 4.6); });
await shot('6-closeup-left');
await page.evaluate(() => { const p = window.planner; p.orbit.target.set(3.2, 0.8, 0); p.persp.position.set(3.2, 1.8, 3.4); });
await shot('7-closeup-right');

// Overlap check
const status = await page.evaluate(() => {
  const p = window.planner;
  const a = p.state.items[0], b = p.state.items[1];
  b.x = a.x + 0.3; b.z = a.z;
  const st = p.evaluate();
  return [...st.entries()];
});
console.log('status after forced overlap:', JSON.stringify(status));
console.log('errors:', errors.length ? errors : 'none');
await browser.close();
