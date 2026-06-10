# Open questions & decisions for the owner

_Last updated after the locale + Tailwind + content-architecture pass._

The site builds clean across **all four locales** (`en`, `ru`, `uk`, `es` — 19 pages each, 78 total), `astro check` is 0 errors, and the quiz scoring tests pass. Most of the original open questions are now **resolved** (Section A). What's left is real content only you can supply (Section B) and pre-launch wiring (Section C).

---

## A. Resolved this session (decisions made)

### A1. Domain — `georgewhole.com` ✅
Confirmed. Used everywhere; no change needed.

### A2. Vocabulary «статьи» vs «письма» ✅
Locked: **«статьи / articles»** = site texts; **«письмо / рассылка»** = the email newsletter only.

### A3. Brand voice — the «медленно / slowly» tic, removed ✅
You flagged the author-stripe headline *«пишет медленно — пять книг об одном»* as bad (and it was also factually wrong now — there's one real book, not five). The whole "slowness as a virtue" motif (`медленно / slowly / повільно / despacio`, plus `написано не спеша`) was **purged across all 4 locales** — author stripe, footer copyright, the meta blurb, the articles-index title, the books promo, and the "new code" body.
- New author-stripe line (RU): **«georgewhole · книги и статьи о еде, теле и правилах, которые мы не выбирали.»** (mirrored in en/uk/es). Override anytime.

### A4. Footer slogan ✅
Now just **«© 2026 · georgewhole»** (the shouty/“slow” tails are gone).

### A5 / C3. Terms / Privacy pages — **not added** (your call) ✅
Footer link stays removed; no dead control. Revisit once the forms backend (C2) goes live.

### A6. Book scope — one real book ✅
**«Сложные отношения с едой · вес, любовь, красота»** (`slozhnye`, num 01) is the single **published** book with a full detail page. The other four (`eda-psyche`, `krasota`, `diety`, **and «Новый Код»**) are now `status: soon` placeholders. ⚠️ Note: «Новый Код» was demoted to a placeholder per your choice — its previous rich demo content was re-themed onto `slozhnye`. Easy to flip back.

### A7. Crisis-support block — **removed globally** (your call) ✅
Deleted the component, the About section, the dict entries, the theme colors, and the design-system demo. Zero references remain.

### A8. i18n architecture — hybrid ✅
- **UI chrome stays in typed TS** (`src/i18n/{en,ru,uk,es}.ts`), each annotated `: UI` so a missing key **fails the build** (guarantees no thin locale).
- **About prose + quiz content moved to JSON content collections** (`src/content/about.json`, `src/content/quiz.json`) — editable without touching component code. Quiz is keyed `quizId/locale` so more quizzes can be added later.

### A9. Styling — all on Tailwind ✅
Inline `style=` and scoped `<style>` blocks across 29 components were converted to Tailwind utilities. What intentionally remains: dynamic runtime values (book-cover colors/sizes from props, kept as minimal CSS-var inline styles) and a few `<style>` rules that can't be utilities (`:global()` for markdown-rendered content + child components, `@keyframes`, `::-webkit-details-marker`).

### A10. UK + ES locales — **live** ✅
`LIVE_LOCALES = ['en','ru','uk','es']`. All content (books, articles, About, quiz, UI) is translated. **Caveat:** uk/es are AI translations from ru/en — they should get a **native review** before promotion (es especially; uk is close to ru). The quiz/crisis-sensitive copy is flagged below.

---

## B. Content you still need to provide (currently placeholder)

| # | What | Where | Notes |
|---|------|-------|-------|
| B1 | **Real `slozhnye` book copy** | `src/content/books/{en,ru,uk,es}/slozhnye.md` | Detail page (lead, TOC, praise, excerpt, manifesto) is **re-themed demo copy** — replace with the real book. |
| B2 | **Retailer purchase URLs** | book frontmatter `retailers` | Still URL-less (honest — shows as a list, not dead links). Add a URL per retailer → real buy buttons. |
| B3 | **Goodreads profile URL** | `src/i18n/*.ts → contact.elsewhere` | Currently points at goodreads.com homepage. |
| B4 | **Real photos / book covers** | replaces `AtmosImage` / `BookCover` | Atmospheric SVGs + typographic covers are stand-ins. |
| B5 | **Author bio / About prose** | `src/content/about.json` (per-locale) | Demo bio (fictional details: Kharkiv, daughter Irina, etc.). Now plain JSON — editable without code. |
| B6 | **Quiz: answer→archetype mapping + 3 archetype texts** | `src/content/quiz.json` (all 4 locales) | Engine is tested; 3 of 4 result texts are `[ЧЕРНОВИК/DRAFT]`. **YMYL** — author + ideally clinician review before promoting the quiz. |
| B7 | **Real article bodies + sources** | `src/content/articles/{en,ru,uk,es}/` | 7 articles × 4 locales — demo prose + static placeholder sources. |
| B8 | **Designed OG share image** | `public/og-default.png` | Plain brand card; regenerate with `node scripts/gen-og.mjs` or supply a designed 1200×630. |

---

## C. Pre-launch checklist

- [ ] **C1. Env vars in Cloudflare Pages** (Production + Preview): `SITE_URL=https://georgewhole.com`, optional `PUBLIC_PLAUSIBLE_DOMAIN=georgewhole.com`. (Code falls back to `georgewhole.com`, but set it explicitly.)
- [ ] **C2. Forms backend.** Newsletter, contact, and quiz-email forms are **stubs** (animate success, send nothing; honeypot in place). Wire a real endpoint (Formspree / Buttondown / a Pages Function) — you deferred this.
- [ ] **C3. Terms / Privacy** — likely required once C2 is live (see A5).
- [ ] **C4. Native review of uk/es** (see A10) before promoting those locales widely.
- [ ] **C5. Quiz YMYL copy** (B6) authored/reviewed before the quiz is promoted.
- [ ] **C6. Copy pass with you** across all 4 locales once real book/bio/article copy lands.

---

## D. Smaller / lower-priority notes

- **D1.** `BookCover` hardcodes the tagline `georgewhole.com` — matches the domain; separate edit if the domain changes.
- **D2.** Article "filter by topic" chips remain decorative/removed — real filtering needs tag metadata + tag archive pages (small feature, needs your taxonomy).
- **D3.** `/design-system` is an internal `noindex` reference; its inline demo styles are intentionally left (dynamic/demo only).
- **D4.** Contact-strip CTA label could read «Написать автору» instead of «Отправить письмо» — minor, say the word.
