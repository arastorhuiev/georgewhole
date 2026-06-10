import { chromium } from 'playwright-core';

const base = process.env.BASE ?? 'http://localhost:4321';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const ctx = await browser.newContext({ viewport: { width: 760, height: 950 }, deviceScaleFactor: 1.4 });
const page = await ctx.newPage();
await page.goto(`${base}/ru/quiz/`, { waitUntil: 'networkidle' });
await page.waitForTimeout(500);
await page.screenshot({ path: '/tmp/quiz-intro.png', fullPage: true });
console.log('intro shot');

// start the quiz (hydration check)
await page.getByText('Начать тест').first().click();
await page.waitForTimeout(400);
await page.screenshot({ path: '/tmp/quiz-q.png', fullPage: true });
console.log('question shot');

// answer all 12 (option А/index0 → expect «Заслуживающий») and finish.
// Robust: precise .nav .primary selector + wait for result (.r-title).
for (let i = 0; i < 16; i++) {
  if ((await page.locator('.r-title').count()) > 0) break;
  await page.locator('.opt').first().click();
  await page.waitForTimeout(120);
  await page.locator('.nav .primary').click(); // Next / Finish
  await page.waitForTimeout(350);
}
await page.locator('.r-title').first().waitFor({ timeout: 5000 }).catch(() => {});
await page.waitForTimeout(400);
await page.screenshot({ path: '/tmp/quiz-result.png', fullPage: true });
console.log('result shot');

await browser.close();
console.log('done');
