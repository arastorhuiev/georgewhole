# BUILD PLAN — «georgewhole» author platform / «Новый Код» (The New Code)

**STATUS: APPROVED → IN EXECUTION** (rev 5; Architect + Critic APPROVED; §14 decisions locked). **M0 COMPLETE** (2026-06-07): scaffold + i18n/hreflang/canonical/sitemap **go-no-go gate PASSED**, per-locale fonts self-hosted, import aliases everywhere, RU-only launch state, `astro check` 0 errors, deps pinned + lockfile. **M1 COMPLETE** (design-system parity): ~28 components ported (atoms · composites · Nav + CSS-only MobileNav · Footer), mockup hover/focus CSS ported, `/design-system` reference page (noindex, out of sitemap), zero-JS verified, no relative imports (aliases everywhere), fidelity confirmed vs mockup screenshots, `astro check` 0 errors + build green. **Next: M2 (core RU pages + Content Collections).**

Target: faithfully implement the Claude Design handoff bundle as a production site.
Stack: **Astro 6.x (SSG)** *(latest; plan originally said 5.x — 6 shipped, i18n/Content-Layer/SSG unaffected)* · **Tailwind v4** (`@tailwindcss/vite`) · **TypeScript** (strict, path aliases) · content in **Markdown/MDX** · **Astro built-in i18n** (no external i18n libs) · **Svelte 5** islands *only* for the quiz.
Locales: **en (default) · uk · ru · es** (Ukrainian code = `uk`, never `ua`).

---

## RALPLAN-DR SUMMARY

### Principles
1. **Fidelity first.** Recreate the mockup pixel-for-pixel (desktop 1280 / mobile 390). Deviations only when explicitly approved.
2. **Static & lean.** Pure SSG, content in Markdown; ship **zero JS except the quiz island**.
3. **Multilingual done right.** Correct hreflang/canonical/sitemap; **never ship a thin/untranslated locale** (Helpful-Content is site-wide).
4. **Sensitive-topic integrity (YMYL).** E-E-A-T signals, no triggering content, privacy-respecting analytics.
5. **Content-agnostic architecture.** Real copy/photos/covers swap in with no code changes; promoting a locale is a contained change.

### Decision Drivers (top 3)
1. Pixel-perfect parity across **4 locales × 2 breakpoints × 10 page types**.
2. Ranking in **Google + AI answer engines** for 4 locales (the explicit goal).
3. **Maintainability** of an ongoing multi-book, multi-locale, content-driven platform.

### Viable Options (architecture)
| # | Decision point | Chosen | Rejected | Why |
|---|---|---|---|---|
| 1 | Locale routing | **Per-locale folders** (`src/pages/<locale>/…`) = thin shells → shared page-impl components | `[lang]` dynamic segment + getStaticPaths | Architect BLOCKER: `[lang]` double-owns the prefix vs built-in i18n; `getAbsoluteLocaleUrl()` wants locale-less paths. Folders are idiomatic & remove the SEO-seam; DRY recovered at component/content/layout layer |
| 2 | Content | **Content Collections**, per-locale subfolders, **locale derived from path** | inline copy / per-entry `locale` field | Real content swaps without code; path-derived locale avoids folder↔field drift |
| 3 | Styling | **Tailwind v4 for layout utilities + component-scoped CSS for editorial typography**; `@theme` carries colors/radii/shadow/fonts | "@theme carries everything" | Mockup is hand-tuned inline px (ls −1.2, lh 1.04, fs 16.5, pad 88/64) — quantizing into tokens = drift or token-explosion. Accepted cost: Tailwind is a convenience layer, not the type system-of-record |
| 4 | Quiz | **Svelte 5 island, `client:visible`, real 3–4-archetype scoring** | static single result | User chose real scoring; quiz is the lead magnet |
| 5 | Thin locales | **Build/ship only fully-localized locales** (`LIVE_LOCALES`) | ship all 4 now w/ demo text | SEO-safe; matches user's phased choice; folders make "promote a locale" explicit |

> Out of scope by user mandate: external i18n libs, non-Tailwind styling, Svelte outside the quiz, SSR.

---

## USER DECISIONS (locked this session)
- **Locales:** phased — 1 locale fully live; others **not built/shipped** until localized.
- **First live locale = RU** (`LIVE_LOCALES=['ru']`); **permanent default = EN** (`defaultLocale='en'`) → x-default/root → `/ru/` now, auto-flip to `/en/` when EN ships.
- **Locale targeting:** RU = **diaspora** (not RF). ES = **NOT Spain** → Spanish-speaking countries (LatAm + US-Hispanic + diaspora), **español neutro**; ES keywords + crisis resources localized to LatAm, not Spain.
- **Forms:** **stubs now** (success UI, no network) with a single integration seam for later.
- **Quiz:** **real scoring**, engine + 4 archetypes (mapping/copy = authored content).
- **Analytics:** **Plausible** (privacy-first, no cookies) + Search Console / Yandex.Webmaster verification.
- **Crisis resources:** **YES, per-locale** (footer + end-of-sensitive-articles), in M2 — **documented as provisional, may be reworked later** (user note).
- **Clinical reviewer:** **none** — remove the "Проверено …" badge everywhere; E-E-A-T via author lived-experience + cited sources; **no `reviewedBy` schema** (no fabricated credential).
- **Host:** **Cloudflare Pages** (static, no adapter). **Privacy page: deferred** (forms are stubs).

## DESIGN FACTS (handoff bundle = source of truth)
- **Author platform** "georgewhole" (pseudonym); **5-book cycle**, book 05 «Новый Код» published, 01–04 forthcoming. `bookList` is the single source of truth.
- **One accent: sage** `#3F6B5E` / deep `#2F5246` (terracotta rejected). Base cream `#FAF6EF`, ink `#2A2723`, surfaces `#F2ECDF`/`#F7F2E6`, muted `#8C8478`/`#5C5349`, hairlines `rgba(42,39,35,.12/.06)`.
- **Fonts:** serif **Literata** (ru/uk) / **Source Serif 4** (en/es); sans **Source Sans 3**; mono **Source Code Pro**. Per-locale swap via `data-locale` → `--font-serif`.
- **Type scale:** Hero 64–70 (lh 1.04–1.05, ls −0.8…−1.2) · Display 44 · H1 32 · H2 24–40 · Body 18–22 (lh 1.7, 65–75ch) · UI 14–15 · Kicker 11 mono uppercase ls 1.6. Mobile hero 38.
- **Scale/radii/shadow:** spacing base 4px [4,8,12,16,24,32,48,64,96]; radii sm 3 / md 6 / pill 999; "paper" shadow `0 1px 0 rgba(42,39,35,.04), 0 1px 2px rgba(42,39,35,.06)`. Contrast 11.6:1 (AA+).
- **10 page types** (desktop+mobile): Design-system ref, Home, Article, About, Articles-index, Books-index, Book-detail, Newsletter, Contact, Quiz (3 states), 404.
- **Hover/focus affordances** are in the `<style>` block of `The New Code.html` (must be ported).
- **Imagery:** in-system SVG "atmospheric" placeholders ("no people-as-objects, no food-as-goal, no before/after"); typographic book covers. Real assets later by user.
- **Removed in design:** RSS, privacy page, search, English duplicates (RU = design's source language). *Crisis blocks were removed in design but are **re-added per-locale** per the locked decision (provisional). The "Проверено: Dr. M. Karim" clinician badge is **removed** (no reviewer).*
- Bundle at `/tmp/newcode-design/georgewhole/` (+ `.bin` in `~/.claude/projects/.../tool-results/`). Execution **step 0** = persist to `design-reference/` in-repo (ephemeral /tmp).

---

## 1. PROJECT STRUCTURE
```
georgewhole/                       # existing repo (research/, marketingskills/ stay)
  design-reference/                # persisted handoff bundle (read-only)
  src/
    pages/                         # ROUTING = per-locale folders (thin shells)
      index.astro?                 # (optional) only if host can't do /→/en/ ; else omit, _redirects owns it
      404.astro                    # single root 404 (per-locale 404 = best-effort)
      en/  index.astro about.astro newsletter.astro contact.astro quiz.astro
           articles/index.astro articles/[...slug].astro
           books/index.astro     books/[...slug].astro
      # uk/ ru/ es/ added ONLY when that locale is promoted to LIVE_LOCALES
      design-system.astro          # internal fidelity-check page (noindex)
      robots.txt.ts  llms.txt.ts   # generated endpoints
    page-impl/                     # shared page bodies, param: lang  (DRY lives here)
      HomePage.astro AboutPage.astro ArticleIndexPage.astro ArticlePage.astro
      BooksIndexPage.astro BookDetailPage.astro NewsletterPage.astro ContactPage.astro QuizPage.astro
    components/  nav/ footer/ book/ article/ forms/ common/ seo/ quiz/
    layouts/ BaseLayout.astro PageLayout.astro ArticleLayout.astro
    content/ articles/{en,uk,ru,es}/*.md(x)  books/{…}/*.md  authors/{…}/georgewhole.md
    i18n/ index.ts en.ts uk.ts ru.ts es.ts                # typed UI dictionaries + helpers
    quiz/ questions.<loc>.ts archetypes.<loc>.ts scoring.ts
    lib/ locales.ts seo.ts schema.ts slugs.ts
    styles/ global.css                                    # @import "tailwindcss" + @theme + per-locale fonts + ported hover/focus
    assets/ fonts/(woff2 subset)  images/
  public/ favicons, og-default, _redirects, _headers
  astro.config.mjs  tsconfig.json  package.json
```
Each `src/pages/<locale>/about.astro` ≈ `---import AboutPage from '../../page-impl/AboutPage.astro'---<AboutPage lang="en"/>`. Collection routes use a shared `getStaticPaths` factory filtered to that folder's locale.

## 2. CONFIG & TOOLCHAIN
- `npm create astro@latest` (minimal, TS strict). Add: `@astrojs/svelte` (v6+, Svelte 5), `@astrojs/sitemap`, `@astrojs/mdx`, `@tailwindcss/vite` (**not** deprecated `@astrojs/tailwind`), `sharp`. **Pin exact versions and commit the lockfile** (build determinism — AC14); `npm view` the current `latest` for each at M0 and record the pins.
- `astro.config.mjs`:
  ```js
  export default defineConfig({
    site: process.env.SITE_URL ?? 'https://example.com',
    trailingSlash: 'always',
    i18n: { locales: ['en','uk','ru','es'], defaultLocale: 'en',
            routing: { prefixDefaultLocale: true } },   // root redirect owned by host _redirects (see §10)
    integrations: [svelte(), mdx(), sitemap({ i18n: { defaultLocale:'en',
            locales:{ en:'en', uk:'uk', ru:'ru', es:'es' } } })],
    vite: { plugins: [tailwindcss()] },
  });
  ```
- `src/lib/locales.ts`: `ALL_LOCALES`, **`LIVE_LOCALES`** (initially **`['ru']`** — RU ships first; `defaultLocale` stays `en`). hreflang, sitemap inclusion, x-default/root target, and the locale switcher iterate **LIVE_LOCALES** only. Promoting a locale = author its content + add its `src/pages/<locale>/` shells + add to `LIVE_LOCALES` (one contained change). Un-ready locales are simply never built → no thin pages, no noindex needed.

## 3. STYLING — Tailwind v4 (CSS-first)
- `global.css`: `@import "tailwindcss";` + `@theme { … }` mapping **colors, `--radius-*`, `--shadow-paper`, font stacks**. Per-locale serif via `[data-locale="en"],[data-locale="es"]{--font-serif:"Source Serif 4",…}` etc.; `data-locale` + `lang` on `<html>`.
- **Editorial typography (hero/display/h1/h2/body/kicker) lives in component-scoped CSS / arbitrary values with the mockup's exact px/ls/lh** — not forced through `@theme` (accepted cost, see Option 3). A small `--text-*` ramp exists for convenience but fidelity values win.
- Port the mockup `<style>` block (hover/focus/transition: `.btn-primary`, `.navlink`, `.bookcard`, `.quizopt`, `input:focus`, …) into `@layer components`/global + `@media (prefers-reduced-motion)` guard.

## 4. COMPONENT MAPPING (JSX → Astro/Svelte)
- tokens.jsx → `@theme`; components.jsx/blocks-ru.jsx/books-ru.jsx → `src/components/**` (.astro), 1:1 markup & exact styles.
- Hardcoded strings (`window.RU`, EN strings in components.jsx) → `src/i18n/*.ts` + Content Collections.
- `Icon.*` SVGs → inline Astro snippets. `quiz-ru.jsx` (React) → `Quiz.svelte` (runes). Home `QuizPreviewCardRU` → static `QuizPreviewCard.astro` (no JS) → links `/<lang>/quiz/`.
- `AtmosImage` placeholder → `AtmosImage.astro` (until real photos). Semantic HTML throughout (a11y + GEO).
- **NEW `CrisisResources.astro`** (per locked decision): small per-locale support block (EN: National Alliance for Eating Disorders +1-866-662-1235, **not** the closed NEDA line; ES: LatAm orgs; RU/UK: source verified before launch) in the footer + at the end of sensitive articles. **Carries a doc comment: provisional, may be reworked later.**
- **Removed per decision:** the clinician-review badge — drop "Проверено: Dr. M. Karim · КЛИНИЧЕСКИЙ ПСИХОЛОГ" from the article header, and drop the "Клиническая проверка" card from About (credibility grid 4→3: Личный опыт / Источники / Чем это не является). Keep author byline + Sources. (User-approved deviation from mockup.)

## 5. CONTENT MODEL (Collections + i18n)
- **Locale derived from path** (Astro 5 `glob()` loaders over `content/<type>/<locale>/…`); **no per-entry `locale` field**.
- **articles**: `transKey` (stable cross-locale id — keystone for hreflang of translated slugs), title, kicker/series, summary, body(MDX), date, **updated**, readingTime, image+tone, `reviewedBy{name,role}?` (**not used at launch — no clinician reviewer; field kept optional for future re-add; badge removed from UI & schema**), toc[], related[transKey], slug(localized).
- **books**: `transKey`, id, num, title, themes[], line, status(`out|soon`), year?, cover{bg,fg,rule,tagline}, subtitle, lead/body, facts[], **`languages[]` = editions available** (distinct from site locales), retailers[], toc[], excerpt, praise[], manifesto pairs (book 05).
- **authors**: bio, timeline[], credibility cards[], "won't write" list, next-steps CTAs.
- **UI dictionaries** (`src/i18n/*.ts`): nav/hero/footer/forms/quiz-labels/404 — typed; `useTranslations(locale)` + `getLangFromUrl`.
- **Quiz data**: 12 questions × 4 options, **4 archetypes**, per-locale.
- **Initial population:** port RU demo copy → `ru`; author/translate `en` (live-first). Demo copy is explicit placeholder (fictional names/figures) — never shipped as fact.

## 6. QUIZ (Svelte 5) — real scoring
- `Quiz.svelte`, `client:visible`; props (locale, questions, archetypes, ui) from Astro (no copy in JS). Runes: `stage`,`idx`,`answers[12]`,`secs`. UI matches mockup exactly (lettered tiles А/Б/В/Г, segmented progress, timer, back disabled@Q1/next/finish).
- **Scoring engine** (`src/quiz/scoring.ts`, pure + unit-tested): a **generic, config-driven** tally — each option carries an explicit `tendency` weight in the quiz data; engine sums weights → dominant → 1 of N archetypes; **tie-break pinned А > Б > В > Г**. The engine is mechanical and testable.
- **NOT verified / must be authored (Critic):** the mockup ships **zero scoring logic** and **one static result** ("Заслуживающий"); the questions carry **no option→tendency tags**. The А=earn/Б=shame/В=tired/Г=quieter mapping is an *inference, not a fact in the design*. Mapping ED-quiz answers to psychological archetypes is **YMYL content** → the **option→tendency mapping + the 4 archetype copy blocks + their recommended-article triplets must be authored and user/clinician-confirmed, per locale — the executor builds the engine, never invents the mapping or YMYL result copy.** Ship clearly-labeled placeholders until provided (see §14.6 clinical reviewer, §14.7 content provided later).
- Result without email; optional end email block = **stub** (success state, no submit). A11y: group semantics, keyboard, `aria-live`, focus mgmt between stages.

## 7. SEO / GEO
- **One URL builder:** `lib/seo.ts → absUrl(locale, logicalPath)` is the *single* source for every absolute URL (Head, Hreflang, JsonLd, robots, llms, and mirrored by sitemap i18n). Always fed **locale-less logical paths**. Trailing-slash-consistent.
- **Head.astro:** localized title/description, **self-canonical**, OG/Twitter, `<html lang data-locale>`, robots meta.
- **Hreflang.astro:** loop **LIVE_LOCALES** via `absUrl` (resolving translated slugs by `transKey`) → self + reciprocal `<link rel=alternate hreflang>` + `x-default`. **x-default target = `defaultLocale` if it is live, else the first `LIVE_LOCALES` entry** (never a hard-coded `en` that may be unbuilt — see §14.1). (Built-in i18n does **not** auto-emit these.)
- **JsonLd.astro** (`@graph`, stable author `@id`): Home→Person+WebSite+Organization; Book detail→Book(+workExample editions, inLanguage, offers, author); Article→Article/BlogPosting(+author, **dateModified**; **no `reviewedBy` at launch — no clinician reviewer; field stays optional for future**); every page→BreadcrumbList; index→CollectionPage. Skip deprecated SearchAction. Keep visible Q&A (+ optional FAQPage) for GEO though FAQ rich-result is sunsetting.
- **Sitemap:** `@astrojs/sitemap` mirrored i18n (auto `xhtml:link`), one sitemap by type, absolute URLs. **HTML hreflang ↔ sitemap URLs identical** (enforced by shared `absUrl`).
- **robots.txt** (generated): allow `GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, Bingbot`; optional `Disallow CCBot`; reference sitemap.
- **llms.txt** (generated curated index). Implement (cheap); **do not gate M4 on it**; `_headers` sets `text/plain`. Treat as low-leverage.
- **GEO on-page:** 40–60-word lead answers per section; query-shaped H2/H3 (PAA banks 04b/10 at content time); comparison tables; prominent "last updated"; one content for humans+AI.

## 8. FORMS (stubs) & ANALYTICS
- EmailCapture / ContactForm / quiz-email: accessible, validated UI; single `onSubmit` seam showing the design's success state, **no network**; honeypot present; one place to wire Formspree/ESP later.
- **Plausible** (async, no cookies → no consent banner) on live locales; `SITE_URL`-aware. Search Console + Yandex.Webmaster verification via env meta (Yandex for `/ru/`).

## 9. PERFORMANCE / FONTS / IMAGES / A11Y
- **Self-host** all 4 families, **WOFF2 only**, **physically subset** to **Latin + Latin-Extended-A (incl. U+00A1 ¡, U+00BF ¿, ñ/á/í/ü for `es`) + Cyrillic (ru/uk)**; `@font-face unicode-range` split so RU pages don't pull Latin-only faces and ES pages get extended Latin; `font-display:swap`; `preload` 1–2 above-fold faces. (Fontsource or Astro Fonts API — pick stable path at M0.)
- **astro:assets** `<Image/>`/`<Picture/>`, AVIF+WebP, `priority` only on LCP (hero/lead cover), lazy else. LCP < 2.5s, CWV green.
- Zero JS except the quiz island (`client:visible`).
- A11y: WCAG AA, keyboard (menu/switcher/quiz), visible focus (ported), `alt`, reduced-motion, correct `lang`.

## 10. DEPLOYMENT
- Host-agnostic static output. **`public/_redirects` is the authoritative root→home-locale 301** (one mechanism; no hand-written redirect page, no reliance on framework meta-redirect). **Root target = same logic as x-default: `defaultLocale` if live, else first `LIVE_LOCALES` entry** — so `/` never points at an unbuilt locale (generated, not hard-coded). `public/_headers`: content-type for `llms.txt`/`robots.txt`, cache for fonts/assets. `SITE_URL` env → absolute URLs (domain TBD). **Target host: Cloudflare Pages** — `astro build` → `dist`, **no adapter** (pure static); CF Pages natively serves `_redirects`/`_headers`. (Later, real forms → CF Pages Functions or Formspree.)
- CI (proposed): `astro check` → build → **build-failing hreflang/canonical + sitemap↔HTML parity validator** → link check → Lighthouse budget → schema validation.

## 11. PHASING / MILESTONES
- **M0 Scaffold + routing gate:** Astro+TS+Tailwind v4+Svelte, i18n config, fonts pipeline (incl. ES extended-Latin check), `@theme`, BaseLayout, Head/Hreflang/JsonLd, `absUrl`, deploy pipeline, `LIVE_LOCALES`. **Go/no-go spike:** EN + one *stub* locale exercising folder-routing + i18n helpers + hreflang + translated-slug + sitemap **end-to-end** (not just "routes resolve").
- **M1 Design-system parity:** all shared components + hover/focus CSS; `/design-system` page verifies tokens/components vs mockup screenshots.
- **M2 Core pages (RU — first live locale):** Home, About, Article + index, Books + Book detail, Newsletter, Contact, 404 — pixel-perfect desktop+mobile. Page bodies are locale-agnostic `page-impl`; RU is the first locale wired. **Also in M2:** per-locale crisis-resources block (privacy deferred per §14.5).
- **M3 Quiz:** Svelte scoring + 4 archetypes (3 placeholder) + home preview + scoring tests.
- **M4 SEO/GEO (RU first):** hreflang, JSON-LD, sitemap, robots, llms.txt, Plausible, schema validation, GEO structure.
- **M5 i18n content:** localize **EN** (then UK, ES) → promote via `LIVE_LOCALES` as each is fully translated.
- **M6 QA & launch (RU):** fidelity diff vs screenshots, CWV, schema, a11y, link/hreflang integrity → ship RU; EN/UK/ES follow as localized.

## 12. ACCEPTANCE CRITERIA (testable)
1. `npm run build` + `astro check` pass, **0 TS errors**; output fully static (no adapter/SSR).
2. Every shipped page matches the mockup at 1280 & 390 — **objectively graded:** Playwright screenshot diff vs `design-reference` renders with a **pixel-diff budget ≤ 2%** per page (plus human review for typography/spacing); tokens identical.
3. Only the quiz ships JS; other routes render with JS disabled. Lighthouse mobile Perf ≥ 95 / SEO 100 / BP ≥ 95 / A11y ≥ 95; LCP < 2.5s.
4. hreflang self+reciprocal+`x-default` across **live** locales; **x-default → home locale (`defaultLocale` if live, else first live entry — §7/§10), never a hard-coded `en`**; canonical self & in cluster; **sitemap URL == HTML URL** (asserted by a build-failing test, not spot-check).
5. JSON-LD valid (Rich Results Test): Home(Person/WebSite), Book(Book), Article(Article/BlogPosting; **`reviewedBy` only when a real reviewer is configured** — §7, AC10), all(BreadcrumbList).
6. `uk` everywhere; **zero `ua`**. No un-localized locale is built, reachable, in sitemap, or in hreflang.
7. Quiz: given a configured option→tendency mapping, the **engine** maps 12 answers → a deterministic archetype (tie-break А>Б>В>Г); scoring-engine unit tests pass against fixture mappings; keyboard-only works (incl. timer announced via `aria-live`, not relied on for completion); email block is a no-network stub. (The mapping/archetype copy itself is authored content, not asserted here — see §6, §14.7.)
8. robots.txt allows named AI bots + references sitemap; `/llms.txt` returns 200 `text/plain`.
9. Promoting a locale (content + folder shells + `LIVE_LOCALES`) yields a complete, indexed locale with no changes to shared components/SEO code.
10. No triggering content; every YMYL page has author attribution, publish + last-updated dates, cited sources, disclaimer, **and a per-locale crisis-resources block** (live locales). **No clinician badge / `reviewedBy` at launch** (none chosen → none emitted; no fabricated E-E-A-T).
11. ES renders ñ/¿/¡/á without tofu (extended-Latin subset present).
12. One root `404.astro` ships; AC does not assume guaranteed per-locale 404 (host-dependent).
13. **For any `LIVE_LOCALES` configuration** (e.g. `['en']` or `['ru']`), the root redirect target and `x-default` both resolve to a **built, HTTP-200 page** (verified in CI by toggling LIVE_LOCALES).
14. **Build determinism:** exact dependency versions pinned + lockfile committed; a clean `npm ci` build reproduces the site.

## 13. RISKS & MITIGATIONS
- **Routing/i18n seam** (downgraded by choosing folders) → M0 go/no-go spike still validates folder-routing + helpers + translated slug + hreflang + sitemap before page work.
- **Pixel drift under Tailwind v4** → component-scoped CSS for editorial type + screenshot diff (M1/M6).
- **Cyrillic + ES extended-Latin subsetting** → verify subset files actually reduce bytes AND cover ES diacritics (M0 check).
- **Quiz: scoring mapping + 4 archetypes' copy are unbuilt YMYL content** (mockup has none) → the *engine* ships now (config-driven, tested); the option→tendency mapping, archetype copy, and article triplets are named content dependencies (labeled placeholders, no invented YMYL text; clinician-confirmed before launch).
- **Translated-slug ↔ hreflang reciprocity** → `transKey` shared key + single `absUrl`.
- **Content readiness gates locales** → phased `LIVE_LOCALES`, **RU first** (EN/UK/ES follow).
- **Experimental Astro Fonts API churn** → fall back to Fontsource if unstable in pinned version.

## 14. DECISIONS (locked) + content you provide later
**Locked this session:**
1. **First live locale = RU** (`LIVE_LOCALES=['ru']`); **permanent default = EN** (`defaultLocale='en'`). x-default/root → `/ru/` now; auto-flip to `/en/` when EN ships.
2. **Crisis resources: YES, per-locale** — footer + end-of-sensitive-articles, in **M2**. EN: National Alliance for Eating Disorders (**not** closed NEDA); ES: LatAm orgs; RU/UK: source verified before launch. **Documented as provisional (may be reworked later)** per your note — a doc comment in `CrisisResources.astro` + this line.
3. **Locales = 4** (en/uk/ru/es). **RU = diaspora** (not RF). **ES = NOT Spain** → Spanish-speaking countries (LatAm + US-Hispanic + diaspora); **español neutro**; ES keywords + resources localized to LatAm, not Spain. (Repo `09` doc is stale 3-locale.)
4. **Host = Cloudflare Pages.** `SITE_URL` env for absolute URLs (domain TBD).
5. **Privacy page: deferred** (forms are stubs; revisit before wiring a real form backend).
6. **Clinical reviewer: none** — badge removed everywhere; E-E-A-T = author lived-experience + cited sources; **no `reviewedBy` schema** (no fabricated credential).

**You provide later (build proceeds with labeled placeholders):** real photos, book covers, author bio/photo, article copy, final names for books 01–04, retailer links (Amazon/Gumroad confirmed; Ozon/others TBD); the quiz **option→tendency mapping + 4 archetype copy blocks + article recommendations** (authored, not invented); and verified **UK/RU crisis resources** before those locales launch.

## 15. ADR (Architecture Decision Record)
- **Decision:** Astro 5 SSG + built-in i18n with **per-locale folder routing** (thin shells → shared `page-impl` components) over Content Collections (locale derived from path, `transKey` for translated-slug reciprocity); Tailwind v4 `@theme` for colors/radii/shadow/fonts + component-scoped CSS for editorial typography; Svelte-5 island (only) for a real-scoring quiz; single `absUrl` driving manual hreflang/JSON-LD/sitemap; phased locale launch via `LIVE_LOCALES`; forms stubbed; Plausible analytics.
- **Drivers:** pixel-perfect parity; multilingual SEO+GEO ranking; long-term maintainability; user mandates (Astro/Tailwind/Svelte/built-in-i18n/SSG).
- **Alternatives considered:** `[lang]` dynamic routing (rejected: double-owns locale prefix vs built-in i18n, concentrates risk at the SEO layer — Architect BLOCKER); per-entry `locale` field (rejected: drift vs path); external i18n lib (rejected: violates "built-in only"); static single-result quiz (rejected: user chose scoring); shipping all 4 locales now with demo text (rejected: thin-locale penalty); `@theme`-carries-all-typography (rejected: drift vs bespoke px); CDN fonts (rejected: perf/privacy).
- **Why chosen:** maximizes fidelity + SEO correctness while honoring every hard constraint; routing is idiomatic (removes the one structural risk); content/locale growth stays contained.
- **Consequences:** (+) clean parity, robust SEO/GEO, easy locale/content growth, tiny JS surface, no routing-layer risk. (−) ~thin per-locale page shells to maintain; Tailwind is utilities+scoped-CSS (not the type system-of-record); localization is the launch bottleneck; manual hreflang/schema upkeep (mitigated by single `absUrl` + build-failing parity test).
- **Follow-ups (post-launch / as content readies):** ship **EN** (then UK, ES) via `LIVE_LOCALES`; wire real form backend + ESP (revisit privacy then); author/translate per-locale content incl. the **quiz option→tendency mapping + 4 archetypes**; add real assets; source verified **UK/RU crisis resources** before those locales launch; revisit the **provisional crisis-resources** treatment; (later) regionalize `en-*` if expanding.
