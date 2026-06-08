// Full-site screenshot sweep for before/after visual diffing.
// Usage: BASE=http://localhost:4322 OUT=/tmp/baseline node scripts/shoot-all.mjs
import { chromium } from 'playwright-core';
import { mkdirSync } from 'node:fs';

const base = process.env.BASE ?? 'http://localhost:4322';
const out = process.env.OUT ?? '/tmp/shot';
mkdirSync(out, { recursive: true });

const pages = [
  ['design-system', '/design-system/'],
  ['home', '/ru/'],
  ['articles', '/ru/articles/'],
  ['article', '/ru/articles/sila-voli/'],
  ['books', '/ru/books/'],
  ['book', '/ru/books/novy-kod/'],
  ['about', '/ru/about/'],
  ['contact', '/ru/contact/'],
  ['newsletter', '/ru/newsletter/'],
  ['quiz', '/ru/quiz/'],
  ['404', '/ru/nope-404/'],
];

const browser = await chromium.launch({ channel: 'chrome', headless: true });
for (const [name, path] of pages) {
  for (const [w, tag] of [[1280, 'd'], [390, 'm']]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: 1000 }, deviceScaleFactor: 1.5 });
    const page = await ctx.newPage();
    try {
      const resp = await page.goto(`${base}${path}`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(300);
      await page.screenshot({ path: `${out}/${name}-${tag}.png`, fullPage: true });
      console.log('wrote', `${name}-${tag}`, resp?.status());
    } catch (e) {
      console.log('FAIL', name, tag, e.message);
    }
    await ctx.close();
  }
}
await browser.close();
console.log('done ->', out);
