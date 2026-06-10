import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '@lib/locales';

// glob ids look like "ru/novy-kod" → "<locale>/<slug>"
export function localeOf(id: string): string {
  return id.split('/')[0];
}
export function slugOf(id: string): string {
  return id.split('/').slice(1).join('/');
}

export async function booksFor(locale: Locale): Promise<CollectionEntry<'books'>[]> {
  const all = await getCollection('books', (e) => localeOf(e.id) === locale);
  return all.sort((a, b) => a.data.order - b.data.order);
}

export async function articlesFor(locale: Locale): Promise<CollectionEntry<'articles'>[]> {
  const all = await getCollection(
    'articles',
    (e) => localeOf(e.id) === locale && !e.data.draft,
  );
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function articleByTransKey(
  locale: Locale,
  transKey: string,
): Promise<CollectionEntry<'articles'> | undefined> {
  const all = await articlesFor(locale);
  return all.find((e) => e.data.transKey === transKey);
}
