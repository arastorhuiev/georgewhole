// Regenerate the raster favicon set from public/favicon.svg.
//   node scripts/gen-favicons.mjs
//
// Source of truth is the vector public/favicon.svg (sage rounded tile + cream
// Literata "g"). The "g" path was extracted from @fontsource-variable/literata
// at wght=500 so it renders identically without web-font loading. This script
// derives the .ico fallback, the iOS apple-touch-icon, and the PWA manifest
// icons. The apple/maskable icons drop the rounded corners (full-bleed sage
// square) so iOS/Android apply their own mask without clipping into transparency.
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pub = join(root, 'public');

const SAGE = '#3F6B5E';
const CREAM = '#FAF6EF';

// Pull the glyph path out of the canonical favicon.svg so this stays the single source.
const svg = readFileSync(join(pub, 'favicon.svg'), 'utf8');
const d = svg.match(/<path d="([^"]+)"/)[1];

const rounded = (rx) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">` +
  `<rect width="100" height="100" rx="${rx}" fill="${SAGE}"/>` +
  `<path d="${d}" fill="${CREAM}"/></svg>`;

const tileRounded = Buffer.from(rounded(22)); // tab / .ico look
const tileSquare = Buffer.from(rounded(0)); // full-bleed for apple-touch + maskable

const png = (svgBuf, size) =>
  sharp(svgBuf, { density: 600 }).resize(size, size).png({ compressionLevel: 9 }).toBuffer();

// --- minimal PNG-in-ICO writer (16/32/48, supported by all modern browsers) ---
function buildIco(entries) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(entries.length, 4);
  const dir = Buffer.alloc(16 * entries.length);
  let offset = 6 + dir.length;
  const blobs = [];
  entries.forEach((e, i) => {
    const o = i * 16;
    dir.writeUInt8(e.size >= 256 ? 0 : e.size, o + 0);
    dir.writeUInt8(e.size >= 256 ? 0 : e.size, o + 1);
    dir.writeUInt8(0, o + 2); // palette
    dir.writeUInt8(0, o + 3); // reserved
    dir.writeUInt16LE(1, o + 4); // color planes
    dir.writeUInt16LE(32, o + 6); // bits per pixel
    dir.writeUInt32LE(e.data.length, o + 8);
    dir.writeUInt32LE(offset, o + 12);
    offset += e.data.length;
    blobs.push(e.data);
  });
  return Buffer.concat([header, dir, ...blobs]);
}

const icoSizes = [16, 32, 48];
const icoPngs = await Promise.all(icoSizes.map((s) => png(tileRounded, s)));
writeFileSync(
  join(pub, 'favicon.ico'),
  buildIco(icoSizes.map((s, i) => ({ size: s, data: icoPngs[i] }))),
);

// iOS home-screen icon — full-bleed square, no transparency.
writeFileSync(join(pub, 'apple-touch-icon.png'), await png(tileSquare, 180));

// PWA / Android manifest icons (purpose: any maskable) — full-bleed square.
writeFileSync(join(pub, 'icon-192.png'), await png(tileSquare, 192));
writeFileSync(join(pub, 'icon-512.png'), await png(tileSquare, 512));

console.log('favicons written: favicon.ico, apple-touch-icon.png, icon-192.png, icon-512.png');
