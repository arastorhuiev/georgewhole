import type { APIRoute } from 'astro';
import { booksFor, articlesFor, slugOf } from '@lib/content';
import { useTranslations } from '@i18n';
import { LIVE_LOCALES } from '@lib/locales';

// Curated llms.txt index (llmstxt.org convention). Low-leverage by itself
// (Google doesn't honour it) but cheap; real GEO wins come from on-page
// structure. Served as text/plain.
export const GET: APIRoute = async ({ site }) => {
  const base = (site?.href ?? 'https://example.com/').replace(/\/$/, '');
  const locale = LIVE_LOCALES[0];
  const t = useTranslations(locale);
  const books = await booksFor(locale);
  const articles = await articlesFor(locale);

  const lines = [
    `# ${t.brand}`,
    '',
    `> ${t.hero.sub}`,
    '',
    '## Книги',
    ...books.map(
      (b) => `- [${b.data.title}](${base}/${locale}/books/${slugOf(b.id)}/): ${b.data.line}`,
    ),
    '',
    '## Статьи',
    ...articles.map(
      (a) => `- [${a.data.title}](${base}/${locale}/articles/${slugOf(a.id)}/): ${a.data.summary}`,
    ),
    '',
    '## Об авторе',
    `- [${t.about.kicker}](${base}/${locale}/about/): ${t.about.sub}`,
    '',
  ];
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
