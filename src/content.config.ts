import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
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

export const collections = { articles, books };
