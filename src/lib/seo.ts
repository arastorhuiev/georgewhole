import { getAbsoluteLocaleUrl } from 'astro:i18n';
import { HOME_LOCALE, LIVE_LOCALES, type Locale } from '@lib/locales';

/**
 * The ONE absolute-URL builder. `path` is a LOCALE-LESS logical path
 * ('' = home, 'about', 'articles/foo'). Everything — canonical, hreflang,
 * sitemap mirror, robots, llms — goes through here so URLs never drift
 * (drift drops hreflang pairs).
 */
export function absUrl(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  let url = getAbsoluteLocaleUrl(locale, clean);
  if (!url.endsWith('/')) url += '/'; // enforce trailingSlash: 'always'
  return url;
}

/** x-default / root target — the home locale (never an unbuilt locale). */
export const xDefaultUrl = (path = ''): string => absUrl(HOME_LOCALE, path);

export interface AltLink {
  locale: Locale;
  href: string;
}

/** hreflang alternates for a logical path across all LIVE locales. */
export function hreflangSet(path = ''): AltLink[] {
  return (LIVE_LOCALES as readonly Locale[]).map((locale) => ({
    locale,
    href: absUrl(locale, path),
  }));
}
