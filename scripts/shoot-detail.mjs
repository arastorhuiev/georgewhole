import { chromium } from 'playwright-core';

const base = process.env.BASE ?? 'http://localhost:4322';
const url = `${base}/design-system/`;
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const ctx = await browser.newContext({ viewport: { width: 1280, height: 940 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(400);

// centerpiece: the 5-book shelf (compare vs shelf-home.png)
const shelf = page.locator('section').filter({ hasText: 'Пять книг, одна линия' }).first();
await shelf.screenshot({ path: '/tmp/ds-shelf.png' });
console.log('wrote shelf');

// components area: scroll buttons into view, capture viewport (vs ds-color.png/ds-focus.png)
await page.getByText('С чего начать').first().scrollIntoViewIfNeeded();
await page.waitForTimeout(200);
await page.screenshot({ path: '/tmp/ds-components.png' });
console.log('wrote components');

await browser.close();
console.log('done');
