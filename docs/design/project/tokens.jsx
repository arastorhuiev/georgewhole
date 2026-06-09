// tokens.jsx — design tokens for «Новый Код»
// One restrained accent: шалфей (sage). Warm-neutral foundation.

const TOKENS = {
  // Фон, поверхности, чернила
  bg: '#FAF6EF',           // песочный кремовый
  surface: '#F2ECDF',       // карточная поверхность
  surfaceSoft: '#F7F2E6',
  ink: '#2A2723',           // основной текст
  inkSoft: '#5C5349',       // вторичный
  inkMuted: '#8C8478',      // мета
  hair: 'rgba(42,39,35,0.12)',
  hairSoft: 'rgba(42,39,35,0.06)',

  // Шрифтовые стеки — резолвятся в CSS-переменные (см. <style> в HTML),
  // поэтому пошрифтовую логику можно менять по локали через data-locale="xx".
  // Все семейства несут латиницу + кириллицу, читаемость на всех языках.
  serif: 'var(--font-serif)',
  sans:  'var(--font-sans)',
  mono:  'var(--font-mono)',

  // Радиусы
  rPill: 999,
  rMd: 6,
  rSm: 3,

  // Бумажная тень
  paper: '0 1px 0 rgba(42,39,35,0.04), 0 1px 2px rgba(42,39,35,0.06)',

  // Акцент — единственный, шалфей
  accent:      '#3F6B5E',
  accentDeep:  '#2F5246',
  accentSoft:  'rgba(63,107,94,0.10)',
  accentHair:  'rgba(63,107,94,0.22)',
  accentFg:    '#FAF6EF',
  callout:     '#EDE9DE',
  crisisBg:    '#F0EBDE',
  crisisBorder:'#7A6A4E',
};

// Сохраняем форму VARIANTS для совместимости с компонентами,
// принимающими prop `v`. Теперь — только один вариант.
const VARIANTS = {
  sage: {
    name: 'Шалфей',
    accent:      TOKENS.accent,
    accentDeep:  TOKENS.accentDeep,
    accentSoft:  TOKENS.accentSoft,
    accentHair:  TOKENS.accentHair,
    accentFg:    TOKENS.accentFg,
    callout:     TOKENS.callout,
    calloutBorder: TOKENS.accent,
    crisisBg:    TOKENS.crisisBg,
    crisisBorder:TOKENS.crisisBorder,
  },
};

window.TOKENS = TOKENS;
window.VARIANTS = VARIANTS;
window.V = VARIANTS.sage; // удобный шорткат
