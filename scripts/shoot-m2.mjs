import { chromium } from 'playwright-core';

const base = process.env.BASE ?? 'http://localhost:4321';
const browser = await chromium.launch({ channel: 'chrome', headless: true });

async function shoot(path, width, out) {
  const ctx = await browser.newContext({ viewport: { width, height: 1000 }, deviceScaleFactor: 1.25 });
  const page = await ctx.newPage();
  await page.goto(`${base}${path}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);
  await page.screenshot({ path: out, fullPage: true });
  await ctx.close();
  console.log('wrote', out);
}

await shoot('/ru/', 1280, '/tmp/m2-home-d.png');
await shoot('/ru/', 390, '/tmp/m2-home-m.png');
await shoot('/ru/books/novy-kod/', 1280, '/tmp/m2-book.png');
await shoot('/ru/articles/sila-voli/', 1280, '/tmp/m2-article.png');
await browser.close();
console.log('done');
