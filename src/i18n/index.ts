import type { Locale } from '@lib/locales';
import { ru } from '@i18n/ru';

// UI chrome + singular page copy per locale. Repeatable content (articles,
// books) lives in Content Collections, not here. RU is the launch locale;
// en/uk/es dictionaries are added in M5 as each is localized. Until then,
// any non-RU locale falls back to RU (never shipped thin — LIVE_LOCALES gates).
const dicts = { ru } as const;

export type UI = typeof ru;

export function useTranslations(locale: Locale): UI {
  return (dicts as Record<string, UI>)[locale] ?? ru;
}
