import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// Per-locale content lives under <type>/<locale>/<slug>.md — locale is derived
// from the entry id (see src/lib/content.ts), NOT a frontmatter field.
// `transKey` is the stable cross-locale id used to resolve translated slugs for
// hreflang reciprocity.

const imageTone = z.enum(['paper', 'dusk', 'morning', 'deep']);

const articles = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    transKey: z.string(),
    title: z.string(),
    kicker: z.string().optional(),
    summary: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    readingTime: z.string().optional(),
    image: z.string().optional(),
    imageTone: imageTone.optional(),
    // present only when a real clinician reviews (none at launch — see decisions)
    reviewedBy: z.object({ name: z.string(), role: z.string() }).optional(),
    related: z.array(z.string()).optional(), // transKeys
    draft: z.boolean().default(false),
  }),
});

const books = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/books' }),
  schema: z.object({
    transKey: z.string(),
    order: z.number(),
    num: z.string(),
    title: z.string(),
    themes: z.array(z.string()),
    line: z.string(),
    status: z.enum(['out', 'soon']),
    year: z.string().optional(),
    cover: z.object({
      bg: z.string(),
      fg: z.string(),
      rule: z.string(),
      tagline: z.string(),
    }),
    subtitle: z.string().optional(),
    lead: z.string().optional(),
    facts: z.array(z.tuple([z.string(), z.string()])).optional(),
    languages: z.array(z.string()).optional(),
    retailers: z.array(z.tuple([z.string(), z.string()])).optional(),
    retailerStatus: z.string().optional(),
    toc: z.array(z.tuple([z.string(), z.string()])).optional(),
    excerpt: z.string().optional(),
    praise: z.array(z.tuple([z.string(), z.string()])).optional(),
    // book 05 «Новый Код» carries the Old/New ledger
    manifesto: z.array(z.tuple([z.string(), z.string()])).optional(),
  }),
});

// About-page copy: structured prose + timeline/credibility data, one JSON
// entry per locale (id = locale). Editable without touching component code.
const about = defineCollection({
  loader: file('./src/content/about.json'),
  schema: z.object({
    crumb: z.tuple([z.string(), z.string()]),
    kicker: z.string(),
    title: z.string(),
    sub: z.string(),
    timelineLabel: z.string(),
    timeline: z.array(z.tuple([z.string(), z.string()])),
    h2_1: z.string(),
    p1: z.string(),
    p2: z.string(),
    pull: z.string(),
    pullBy: z.string(),
    h2_2: z.string(),
    p3: z.string(),
    p4: z.string(),
    h2_3: z.string(),
    p5: z.string(),
    nots: z.array(z.string()),
    nextKicker: z.string(),
    nextTitle: z.string(),
    nextSub: z.string(),
    nextCtas: z.array(z.string()),
    credKicker: z.string(),
    credTitle: z.string(),
    credBody: z.string(),
    credCards: z.array(z.tuple([z.string(), z.string(), z.string()])),
  }),
});

// Quiz content: questions, UI labels, archetype results — one entry per quiz
// per locale (id = "<quizId>/<locale>"). Supports multiple quizzes later.
const quiz = defineCollection({
  loader: file('./src/content/quiz.json'),
  schema: z.object({
    questions: z.array(
      z.object({ text: z.string(), options: z.array(z.string()) }),
    ),
    ui: z.object({
      kicker: z.string(),
      title: z.string(),
      sub: z.string(),
      startCta: z.string(),
      optionLetters: z.string(),
      meta: z.array(z.string()),
      howLabel: z.string(),
      how: z.array(z.tuple([z.string(), z.string(), z.string()])),
      progressLabel: z.string(),
      of: z.string(),
      back: z.string(),
      next: z.string(),
      finish: z.string(),
      timerNote: z.string(),
      resultKicker: z.string(),
      resultStart: z.string(),
      resultRetake: z.string(),
      resultMailKicker: z.string(),
      resultMailTitle: z.string(),
      resultMailSub: z.string(),
      resultMailCta: z.string(),
      resultMailPh: z.string(),
      resultMailSkip: z.string(),
      resultMailSentTitle: z.string(),
      resultMailSentSub: z.string(),
    }),
    archetypes: z.array(
      z.object({
        key: z.string(),
        title: z.string(),
        body: z.string(),
        recommended: z.array(z.string()),
        placeholder: z.boolean().optional(),
      }),
    ),
  }),
});

export const collections = { articles, books, about, quiz };
