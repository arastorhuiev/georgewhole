// JSON-LD (schema.org) builders. Stable @ids keep the author/org/site entities
// consolidated across every page. Pure functions — fed absolute URLs by the
// caller (BaseLayout / page shells).
import type { Locale } from '@lib/locales';

const websiteId = (s: string) => `${s}/#website`;
const orgId = (s: string) => `${s}/#org`;
const personId = (s: string) => `${s}/#person`;

interface BaseInfo {
  siteUrl: string;
  locale: Locale;
  brand: string;
  description: string;
}

/** Sitewide nodes emitted on every page (deduped by @id in the @graph). */
export function baseGraph({ siteUrl, locale, brand, description }: BaseInfo): object[] {
  return [
    {
      '@type': 'WebSite',
      '@id': websiteId(siteUrl),
      url: `${siteUrl}/`,
      name: brand,
      description,
      inLanguage: locale,
      publisher: { '@id': orgId(siteUrl) },
    },
    {
      '@type': 'Organization',
      '@id': orgId(siteUrl),
      name: brand,
      url: `${siteUrl}/`,
    },
    {
      '@type': 'Person',
      '@id': personId(siteUrl),
      name: brand,
      url: `${siteUrl}/${locale}/about/`,
      jobTitle: 'Author',
      description: 'Пишет из личного опыта восстановления.',
    },
  ];
}

export function breadcrumb(
  items: Array<{ name: string; url: string }>,
): object {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function bookNode(
  siteUrl: string,
  url: string,
  locale: Locale,
  data: { title: string; subtitle?: string; lead?: string; languages?: string[]; year?: string },
): object {
  return {
    '@type': 'Book',
    '@id': `${url}#book`,
    name: data.title,
    url,
    ...(data.subtitle ? { alternativeName: data.subtitle } : {}),
    ...(data.lead ? { description: data.lead } : {}),
    author: { '@id': personId(siteUrl) },
    publisher: { '@id': orgId(siteUrl) },
    inLanguage: data.languages?.length ? data.languages : [locale],
    ...(data.year ? { datePublished: data.year } : {}),
  };
}

export function articleNode(
  siteUrl: string,
  url: string,
  locale: Locale,
  data: { title: string; summary: string; date: Date; updated?: Date },
): object {
  return {
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: data.title,
    description: data.summary,
    url,
    mainEntityOfPage: url,
    datePublished: data.date.toISOString(),
    dateModified: (data.updated ?? data.date).toISOString(),
    author: { '@id': personId(siteUrl) },
    publisher: { '@id': orgId(siteUrl) },
    inLanguage: locale,
  };
}

export function collectionPageNode(
  url: string,
  locale: Locale,
  name: string,
  description: string,
): object {
  return {
    '@type': 'CollectionPage',
    '@id': `${url}#collection`,
    url,
    name,
    description,
    inLanguage: locale,
  };
}
