// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Absolute URLs (canonical / hreflang / sitemap) come from SITE_URL.
// Domain is TBD — set SITE_URL in the deploy env (Cloudflare Pages).
const SITE_URL = process.env.SITE_URL ?? 'https://example.com';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  // Pick ONE slash policy and keep it identical across URLs, canonical,
  // hreflang and sitemap (drift drops hreflang pairs).
  trailingSlash: 'always',

  // Built-in i18n: routing only. It does NOT emit hreflang — we do that
  // manually (src/components/seo/Hreflang.astro) via getAbsoluteLocaleUrl().
  // Ukrainian = `uk` (never `ua`). EN is the permanent default; RU ships first
  // (see src/lib/locales.ts → LIVE_LOCALES). Root redirect is owned by the
  // host (public/_redirects), not the framework.
  i18n: {
    locales: ['en', 'uk', 'ru', 'es'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: true },
  },

  integrations: [
    svelte(),
    mdx(),
    // @astrojs/sitemap can't read Astro's i18n — mirror it here. Only built
    // pages enter the sitemap, so un-shipped locales never appear.
    sitemap({
      // Keep internal/dev pages (e.g. the design-system reference) out.
      filter: (page) => !page.includes('/design-system'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', uk: 'uk', ru: 'ru', es: 'es' },
      },
    }),
  ],

  // Tailwind v4 via the Vite plugin (NOT the deprecated @astrojs/tailwind).
  vite: { plugins: [tailwindcss()] },
});
