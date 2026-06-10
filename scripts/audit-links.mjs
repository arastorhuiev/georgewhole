// One-off link auditor: crawls dist/**/*.html, extracts every href/src,
// resolves internal links against built files, and reports broken internal
// links + external/placeholder links. Run after `npm run build`.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';

const DIST = resolve('dist');

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) out.push(...walk(p));
    else if (name.endsWith('.html')) out.push(p);
  }
  return out;
}

function resolves(href) {
  // strip query/hash
  const clean = href.split('#')[0].split('?')[0];
  if (clean === '' ) return true; // pure in-page anchor
  let p = clean;
  if (p.endsWith('/')) p = join(DIST, p, 'index.html');
  else if (/\.[a-z0-9]+$/i.test(p)) p = join(DIST, p);
  else p = join(DIST, p, 'index.html'); // extensionless → dir route
  return existsSync(p);
}

const htmlFiles = walk(DIST);
const broken = new Map();   // href -> Set(pages)
const external = new Map(); // host -> count
const placeholders = new Map(); // href -> Set(pages)
const attrRe = /(?:href|src)\s*=\s*"([^"]*)"/gi;

for (const file of htmlFiles) {
  const rel = file.replace(DIST, '') ;
  const html = readFileSync(file, 'utf8');
  let m;
  while ((m = attrRe.exec(html))) {
    const href = m[1].trim();
    if (!href) continue;
    if (href === '#' || href.startsWith('#') ) {
      (placeholders.get(href) ?? placeholders.set(href, new Set()).get(href)).add(rel);
      continue;
    }
    if (/^(https?:)?\/\//i.test(href)) {
      const host = href.replace(/^https?:\/\//, '').split('/')[0];
      external.set(host, (external.get(host) ?? 0) + 1);
      continue;
    }
    if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('data:')) continue;
    if (href.startsWith('/')) {
      if (!resolves(href)) {
        (broken.get(href) ?? broken.set(href, new Set()).get(href)).add(rel);
      }
    }
  }
}

console.log(`\n=== Scanned ${htmlFiles.length} built HTML pages ===\n`);
console.log(`--- BROKEN internal links (${broken.size}) ---`);
if (!broken.size) console.log('  (none — every internal link resolves to a built page)');
for (const [href, pages] of broken) console.log(`  ${href}\n    on: ${[...pages].join(', ')}`);

console.log(`\n--- PLACEHOLDER anchors (${placeholders.size}) ---`);
for (const [href, pages] of placeholders) console.log(`  ${href}  (${pages.size} pages)`);

console.log(`\n--- EXTERNAL hosts referenced ---`);
for (const [host, n] of [...external].sort((a,b)=>b[1]-a[1])) console.log(`  ${host}  ×${n}`);
