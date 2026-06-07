// Locale configuration — single source of truth for the i18n + SEO layer.
// Ukrainian is `uk` (ISO 639-1), NEVER `ua` (that is a country TLD and breaks
// the hreflang cluster).

export const ALL_LOCALES = ['en', 'uk', 'ru', 'es'] as const;
export type Locale = (typeof ALL_LOCALES)[number];

/** Permanent default locale (eventual canonical home / x-default once live). */
export const DEFAULT_LOCALE: Locale = 'en';

/**
 * Locales actually built & shipped: included in routing output, sitemap,
 * hreflang cluster, and the locale switcher. Phased launch — RU ships first
 * (its content is the most ready); add others as each is FULLY localized.
 * Never ship a thin/untranslated locale (Helpful-Content is site-wide).
 */
export const LIVE_LOCALES = ['ru'] as const satisfies readonly Locale[];

/**
 * The "home" locale for the root redirect and hreflang x-default:
 * the default locale if it is live, otherwise the first live locale.
 * This guarantees x-default / `/` never point at an unbuilt locale.
 */
export const HOME_LOCALE: Locale = (LIVE_LOCALES as readonly Locale[]).includes(
  DEFAULT_LOCALE,
)
  ? DEFAULT_LOCALE
  : LIVE_LOCALES[0];

/** Native language names for the locale switcher. */
export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  uk: 'Українська',
  ru: 'Русский',
  es: 'Español',
};

/** Script family per locale — drives the per-locale serif (data-locale). */
export const LOCALE_SCRIPT: Record<Locale, 'cyrillic' | 'latin'> = {
  ru: 'cyrillic',
  uk: 'cyrillic',
  en: 'latin',
  es: 'latin',
};

export function isLive(locale: string): locale is Locale {
  return (LIVE_LOCALES as readonly string[]).includes(locale);
}

export function isLocale(value: string): value is Locale {
  return (ALL_LOCALES as readonly string[]).includes(value);
}

/**
 * Build the locale switcher array for nav components.
 * Each entry has `code` (uppercase), `name` (native), and optionally `href`.
 * `href` is omitted for the current locale (non-navigable) and for locales
 * that are not yet live (prevents linking to unbuilt pages).
 *
 * @param currentLocale - the active locale for this page (lowercase)
 * @param pathSuffix    - path after the locale prefix, e.g. "" for home,
 *                        "articles/foo" for an article page
 */
export function buildLocaleSwitcherItems(
  currentLocale: Locale,
  pathSuffix = '',
): Array<{ code: string; name: string; href?: string }> {
  return ALL_LOCALES.map((locale) => ({
    code: locale.toUpperCase(),
    name: LOCALE_NAMES[locale],
    href:
      locale === currentLocale || !isLive(locale)
        ? undefined
        : `/${locale}/${pathSuffix}`.replace(/\/$/, '') || `/${locale}/`,
  }));
}
