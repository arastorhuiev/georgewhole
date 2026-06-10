# georgewhole

Author platform for the five-book cycle **«Новый Код» / "The New Code"** — a quiet,
anti-diet self-help series about the rules we live by without choosing them.

Static, multilingual, content-driven. Built with **Astro 6 (SSG)**, **Tailwind v4**,
**TypeScript** (strict), and a single **Svelte 5** island for the quiz.

- **Live locales:** Russian (`ru`) + English (`en`). Default locale: `en`.
- **Planned locales:** Ukrainian (`uk`), Spanish (`es`) — added per `LIVE_LOCALES` once fully translated.
- **Domain:** `georgewhole.com` (set via `SITE_URL` at deploy time).
- **Host:** Cloudflare Pages (pure static, no adapter).

## Quick start

```bash
npm install
npm run dev        # local dev server
npm run build      # static build → dist/
npm run preview    # preview the build
npm run check      # astro check (0 TS errors expected)
npm test           # vitest (quiz scoring)
```

Set the production domain with an env var (see `.env.example`):

```bash
SITE_URL=https://georgewhole.com
PUBLIC_PLAUSIBLE_DOMAIN=georgewhole.com   # optional, enables privacy-first analytics
```

## Repository layout

```
georgewhole/
├─ src/                  # the Astro app
│  ├─ pages/{en,ru}/     # thin per-locale route shells
│  ├─ page-impl/         # shared, locale-agnostic page bodies (lang prop)
│  ├─ components/        # home/ nav/ footer/ book/ article/ forms/ common/ seo/ quiz/
│  ├─ layouts/           # BaseLayout
│  ├─ content/           # articles/ + books/ collections (per-locale markdown)
│  ├─ i18n/              # typed UI dictionaries (ru.ts, en.ts) + helpers
│  ├─ quiz/              # quiz data + scoring engine (+ tests)
│  ├─ lib/               # locales, content, seo, schema helpers
│  └─ styles/            # global.css (@theme tokens, fonts, transitions)
├─ public/               # favicons, _redirects, _headers, manifest
├─ scripts/              # build/QA tooling (favicon gen, link audit, screenshots)
├─ docs/                 # NOT shipped — research, design handoff, planning
│  ├─ research/          # audience/market/SEO research
│  ├─ design/            # Claude Design handoff bundle (read-only reference)
│  └─ planning/          # BUILD_PLAN.md, task.md, book summary
└─ astro.config.mjs · tsconfig.json · package.json
```

See [`docs/README.md`](docs/README.md) for the non-app material.

## Architecture notes

- **Routing:** per-locale folders (`src/pages/<locale>/…`) are thin shells that render
  shared `page-impl` bodies. DRY lives at the component/content/i18n layer.
- **Content:** repeatable content (articles, books) lives in Content Collections,
  locale derived from path. UI chrome + singular page copy lives in typed `src/i18n`.
- **SEO:** one URL builder (`src/lib/seo.ts → absUrl`) drives canonical / hreflang /
  sitemap / robots / llms so URLs never drift. hreflang/JSON-LD emitted manually.
- **Styling:** Tailwind v4 utilities for layout + component-scoped CSS for editorial
  typography. Design tokens in `@theme` (`src/styles/global.css`).
- **JS budget:** zero JS except the quiz island and small progressive-enhancement
  scripts (form success, nav) — all reduced-motion aware.
