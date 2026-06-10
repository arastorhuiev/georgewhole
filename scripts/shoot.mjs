import { chromium } from 'playwright-core';

const base = process.env.BASE ?? 'http://localhost:4322';
const url = `${base}/design-system/`;
const browser = await chromium.launch({ channel: 'chrome', headless: true });

async function shoot(width, path) {
  const ctx = await browser.newContext({ viewport: { width, height: 1000 }, deviceScaleFactor: 1.5 });
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);
  await page.screenshot({ path, fullPage: true });
  await ctx.close();
  console.log('wrote', path);
}

await shoot(1280, '/tmp/ds-desktop.png');
await shoot(390, '/tmp/ds-mobile.png');
await browser.close();
console.log('done');
