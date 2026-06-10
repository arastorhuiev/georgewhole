// Generates public/og-default.png (1200×630) — the default social share card.
// Brand-only placeholder; replace with a designed card before a big launch.
// Run: node scripts/gen-og.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '..', 'public', 'og-default.png');

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#faf6ef"/>
  <rect x="40" y="40" width="1120" height="550" fill="none" stroke="rgba(42,39,35,0.12)" stroke-width="2"/>
  <text x="96" y="300" font-family="Georgia, 'Times New Roman', serif" font-size="96" fill="#2a2723" letter-spacing="-3">georgewhole</text>
  <rect x="100" y="338" width="64" height="4" fill="#3f6b5e"/>
  <text x="100" y="404" font-family="Georgia, serif" font-style="italic" font-size="34" fill="#5c5349">The New Code · Новый Код</text>
  <text x="100" y="556" font-family="'Courier New', monospace" font-size="22" fill="#8c8478" letter-spacing="3">GEORGEWHOLE.COM</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('Wrote', out);
