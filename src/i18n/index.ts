import type { Locale } from '@lib/locales';
import { ru } from '@i18n/ru';
import { en } from '@i18n/en';
import { uk } from '@i18n/uk';
import { es } from '@i18n/es';

// UI chrome + singular page copy per locale. Repeatable content (articles,
// books) lives in Content Collections, not here. RU is the launch locale;
// en/uk/es dictionaries are added in M5 as each is localized. Until then,
// any non-RU locale falls back to RU (never shipped thin — LIVE_LOCALES gates).
const dicts = { ru, en, uk, es } as const;

export type UI = typeof ru;

export function useTranslations(locale: Locale): UI {
  return (dicts as Record<string, UI>)[locale] ?? ru;
}
