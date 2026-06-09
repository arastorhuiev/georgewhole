# Open questions & decisions for the owner

This is the "let's go through it together" list. It has three parts:

- **A. Calls I made for you** — defensible defaults I applied so the site reads well now. Override any of them; I left alternatives.
- **B. Content you need to provide** — real copy/links/assets that only you can supply.
- **C. Pre-launch checklist** — things to verify before the site goes public.

Everything below is a *demo/near-production* state: it builds, every link works, and the copy reads like a human wrote it — but it's still placeholder content meant to be replaced with you.

---

## A. Calls I made for you (override freely)

### A1. Domain spelling — `georgewhole.com`
Your message said the domain will be `gerogewhole.com`, but the brand is **georgewhole** everywhere (logo, book covers, copy). I treated `gerogewhole` as a typo and used **`georgewhole.com`** throughout (`astro.config.mjs`, `_redirects`, `.env.example`, OG image, fallbacks).
→ **Confirm the exact domain.** If it really is `gerogewhole.com`, it's a one-line change to `SITE_URL`.

### A2. "письма" → "статьи" (the thing you flagged)
You asked *"почему письма? почему не статьи?"*. The root issue was that the site used **two words for the same thing**: nav said *Статьи*, but the brand line + newsletter said *письма*. I locked the vocabulary:
- **"статьи / articles"** = texts on the site
- **"письмо / рассылка / a weekly letter"** = the email newsletter only

So the brand tagline no longer calls site content "письма". New tagline: **«книги и статьи о еде и теле»** / *"books and articles on food and the body"*.
→ Alternatives if you want it less literal: «медленные книги о еде и теле» · «книги, статьи, рассылка» · or a pure-mood line. Tell me the voice you want.

### A3. "Тихие книги…" hero headline (you flagged "тихие")
"Тихие книги" was a literal calque of *quiet books*. New headline:
- RU: **«Книги о правилах, которые мы не выбирали — но по которым живём.»**
- EN: **"Books about the rules we never chose — but live by anyway."**

I also cut the word **тихий/тише** from ~11 places down to ~2 (it had become a tic). Other options for the hero are in the audit notes — happy to try a more sales-forward or more literary version.

### A4. Footer slogan "СНАЧАЛА НА БУМАГЕ" / "PAPER FIRST" (you flagged it)
Removed the shouty caps slogan. Now: **«© 2026 · georgewhole · написано медленно»** / *"written slowly"*.
→ If you have a real ethos line you want there, give it to me.

### A5. Footer "УСЛОВИЯ / TERMS" link — removed for now
It pointed to a Terms page that doesn't exist (dead control). I removed the label rather than ship a link that goes nowhere.
→ **Do you want Terms / Privacy pages?** (A real book site eventually needs them, especially once the newsletter/contact forms have a backend.) If yes, I'll add them and restore the footer link.

### A6. Article "filter by topic" chips — removed for now
The topic filter on `/articles` was decorative (clicking did nothing — there's no tag metadata on articles yet).
→ Want real topic filtering? It needs (a) tags added to each article's frontmatter and (b) tag archive pages. Small feature, just needs your topic taxonomy.

### A7. "AUTHOR STRIPE — two avatars" (you flagged it)
That was a real bug (an inline style was forcing both the mobile and desktop avatar to render). Fixed — now exactly one shows per screen size.

### A8. Contact-strip button label
The homepage contact strip CTA still uses *«Отправить письмо» / "Send"*. As a link into the contact page (you haven't written anything yet) a label like **«Написать автору»** might read better.
→ Want me to change it?

### A9. About-page timeline arithmetic
The timeline said *"1991 — начинаются сорок лет диет"*, but with recovery in 2016 that's ~25 years, not 40. I softened it to **«Начинаются годы диет»** to avoid a visible contradiction.
→ Give me the real years and I'll make the timeline + bio consistent.

---

## B. Content you need to provide (currently placeholder)

| # | What | Where | Notes |
|---|---|---|---|
| B1 | **Real book titles 01–04** | `src/content/books/{ru,en}/*.md` | Only «Новый Код» (05) is "out"; the other four are placeholders. |
| B2 | **Retailer purchase URLs** (Amazon, Gumroad, Ozon, …) | book frontmatter `retailers` | Right now retailers show as a non-clickable list (honest, no dead links). Add a URL per retailer and they become real buy buttons automatically. The book page "Купить книгу" button currently scrolls to that list. |
| B3 | **Goodreads profile URL** | `src/i18n/*.ts → contact.elsewhere` | Currently links to goodreads.com homepage as a placeholder. |
| B4 | **Real photos / book covers** | replaces `AtmosImage` / `BookCover` placeholders | The atmospheric SVGs and typographic covers are stand-ins. |
| B5 | **Author bio / About prose** | `src/i18n/*.ts → about.*` | Demo bio (fictional details: Kharkiv, daughter Irina, etc.). |
| B6 | **Quiz: option→archetype mapping + 3 archetype texts** | `src/quiz/data.{ru,en}.ts` | The scoring *engine* works and is tested, but the answer→type mapping and 3 of 4 result texts are labelled `[ЧЕРНОВИК/DRAFT]`. This is sensitive (YMYL) content — should be authored and ideally clinician-reviewed before launch. |
| B7 | **Verified RU/UK crisis resources** | `src/i18n/*.ts → crisis.resources` | Currently a US hotline (National Alliance for Eating Disorders) in both locales. The RU diaspora needs verified local resources before the RU site is promoted. |
| B8 | **Real article bodies + sources** | `src/content/articles/` + ArticlePage `sourceItems` | Sources are static placeholders (Intuitive Eating, HAES, DBT). |
| B9 | **Designed OG share image** | `public/og-default.png` | I generated a plain brand card (regenerate with `node scripts/gen-og.mjs`). A real designed 1200×630 card would share better. |

---

## C. Pre-launch checklist

- [ ] **C1. Set env vars in Cloudflare Pages** (Production *and* Preview): `SITE_URL=https://georgewhole.com`, optional `PUBLIC_PLAUSIBLE_DOMAIN=georgewhole.com`. See `.env.example`. (The code now falls back to `georgewhole.com` so it can't leak `example.com`, but the env var should still be set explicitly.)
- [ ] **C2. Forms backend.** All forms (newsletter, contact, quiz email) are stubs: with JS they animate to a success message and send nothing; the honeypot is in place and there's a single seam to wire a real endpoint (`action="<url>"` → the form does a normal/real submit instead of the demo success). Pick Formspree / Buttondown / a Pages Function.
- [ ] **C3. Decide Terms/Privacy pages** (see A5) — likely required once C2 is live.
- [ ] **C4. UK + ES locales** are built but not "live" (`LIVE_LOCALES = ['en','ru']`). Promote each only when its content is fully translated.
- [ ] **C5. Quiz YMYL content** (B6) authored/reviewed before promoting.
- [ ] **C6. Re-run a copy pass with you** across both locales once real book/bio copy lands — the audit notes (`docs/AUDIT_FINDINGS.md`) list every line I touched and why.

---

## D. Smaller / lower-priority notes

- **D1.** `BookCover` hardcodes the tagline `georgewhole.com`. It matches the domain, but if the domain changes it's a separate edit. Left as an intentional brand mark.
- **D2.** `llms.txt` section headers are English while content is English (the first live locale). Fine for now; revisit if you want a per-locale `llms.txt`.
- **D3.** The design-system page (`/design-system`) is an internal, `noindex` reference and still uses `#` placeholder links by design — it's not a public page.
- **D4.** Possible future nicety: a thin Markdown layer for the long-form About prose so a non-developer can edit it without touching `.ts`. Not done now (kept typed i18n per our decision); easy to add later if you'll be editing copy yourself.
