// One-off codemod: 7 page-impl components double-wrap their content in
// <BaseLayout> while their route files ALSO wrap them → duplicate <html>/<head>,
// duplicate canonical + hreflang on 34 pages. The route's BaseLayout is the
// canonical one (carries t.brand title + jsonLd), so strip the inner one and
// let the page-impl be pure content (the HomePage/QuizPage pattern).
import { readFileSync, writeFileSync } from 'node:fs';

const files = [
  'src/page-impl/AboutPage.astro',
  'src/page-impl/NewsletterPage.astro',
  'src/page-impl/ArticlePage.astro',
  'src/page-impl/ArticleIndexPage.astro',
  'src/page-impl/BookDetailPage.astro',
  'src/page-impl/BooksIndexPage.astro',
  'src/page-impl/ContactPage.astro',
];

for (const f of files) {
  let src = readFileSync(f, 'utf8');
  const before = src;

  // 1) drop the import line
  src = src.replace(/^import BaseLayout from ['"]@layouts\/BaseLayout\.astro['"];\n/m, '');
  // 2) drop the opening tag (non-greedy to the first '>'; props here contain no '>')
  src = src.replace(/<BaseLayout[\s\S]*?>\n?/, '');
  // 3) drop the closing tag
  src = src.replace(/\n?\s*<\/BaseLayout>\s*$/, '\n');

  if (src === before) {
    console.log('NO-CHANGE (check manually):', f);
  } else {
    writeFileSync(f, src);
    const baseRefs = (src.match(/BaseLayout/g) || []).length;
    console.log(`stripped ${f}  (remaining 'BaseLayout' tokens: ${baseRefs})`);
  }
}
