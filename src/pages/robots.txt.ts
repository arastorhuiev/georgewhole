import type { APIRoute } from 'astro';

// Welcome the cite-and-search AI crawlers (they can't cite what they can't read)
// plus normal crawlers, and point at the sitemap.
const AI_BOTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'anthropic-ai',
  'PerplexityBot',
  'Google-Extended',
  'Bingbot',
];

export const GET: APIRoute = ({ site }) => {
  const base = (site?.href ?? 'https://example.com/').replace(/\/$/, '');
  const lines = [
    'User-agent: *',
    'Allow: /',
    '',
    ...AI_BOTS.flatMap((b) => [`User-agent: ${b}`, 'Allow: /', '']),
    `Sitemap: ${base}/sitemap-index.xml`,
    '',
  ];
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
