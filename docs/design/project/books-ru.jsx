// books-ru.jsx — multi-book model + BookShelfRU.
// The site pivots from one-book to an author's shelf: georgewhole publishes
// several quiet books. This file owns the book data and the shelf component
// used on Home and at the top of the Books index.

const T = window.TOKENS;

// ── Book data ────────────────────────────────────────────────
// status: 'out' (вышла) | 'soon' (готовится). Each book carries its own
// cover treatment so the shelf reads as a body of work, not one repeated spine.
Object.assign(window.RU, {
  shelf: {
    kicker: 'Цикл · пять книг',
    title: 'Пять книг, одна линия.',
    sub: 'Цикл идёт от сложных отношений с едой — через тело, красоту и диеты — к более тихому коду. Каждую можно читать отдельно; вместе они складываются в одну дугу.',
    all: 'Все книги',
    statusOut: 'Вышла',
    statusSoon: 'Готовится',
    onShelf: 'в цикле',
  },
  // Пять книг = одна дуга. Темы (themes) несут смысл, даже если заголовок
  // ещё меняется, поэтому макет устойчив к правкам названий. Это —
  // единственный источник правды о цикле (полка, кросс-промо, «следующие»).
  bookList: [
    {
      id: 'slozhnye', num: '01', title: 'Сложные отношения с едой',
      themes: ['вес', 'любовь', 'красота'],
      line: 'С чего всё начинается.',
      status: 'soon',
      cover: { bg: '#7A5747', fg: '#FAF6EF', rule: T.accent, tagline: 'готовится' },
    },
    {
      id: 'eda-psyche', num: '02', title: 'Еда: психика против тела',
      themes: ['культура', 'религия', 'гендер'],
      line: 'Откуда правила берут силу.',
      status: 'soon',
      cover: { bg: '#3F6B5E', fg: '#FAF6EF', rule: '#EDE9DE', tagline: 'готовится' },
    },
    {
      id: 'krasota', num: '03', title: 'Красота',
      themes: ['тело', 'внешность', 'внутренний мир'],
      line: 'Чей это взгляд на самом деле.',
      status: 'soon',
      cover: { bg: '#EDE9DE', fg: '#2A2723', rule: T.accent, tagline: 'готовится' },
    },
    {
      id: 'diety', num: '04', title: 'Диеты',
      themes: ['медицина', 'таблетки', 'операции', 'Сизифов труд'],
      line: 'Почему усилие возвращается к началу.',
      status: 'soon',
      cover: { bg: '#4F4636', fg: '#FAF6EF', rule: T.accent, tagline: 'готовится' },
    },
    {
      id: 'novy-kod', num: '05', title: 'Новый Код',
      themes: ['еда', 'тело', 'движение', 'Троянский конь'],
      line: 'Тихий способ кормить себя.',
      status: 'out', year: '2026',
      cover: { bg: '#2A2723', fg: '#FAF6EF', rule: T.accent, tagline: 'вышла · 2026' },
    },
  ],
});

// ── Theme keywords line (mono · middot-separated) ────────────
function ShelfThemes({ themes, size = 10.5 }) {
  if (!themes || !themes.length) return null;
  return (
    <div style={{
      fontFamily: T.mono, fontSize: size, lineHeight: 1.6, letterSpacing: 0.4,
      color: T.inkMuted, display: 'flex', flexWrap: 'wrap', gap: '2px 8px',
    }}>
      {themes.map((t, i) =>
        <span key={i} style={{ whiteSpace: 'nowrap' }}>
          {i > 0 && <span style={{ opacity: 0.4, marginRight: 8 }}>·</span>}{t}
        </span>
      )}
    </div>
  );
}

// ── Status pill ──────────────────────────────────────────────
function ShelfStatus({ v, status, withDot = true }) {
  const out = status === 'out';
  const label = out ? RU.shelf.statusOut : RU.shelf.statusSoon;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: T.mono,
      fontSize: 10.5, letterSpacing: 1, textTransform: 'uppercase',
      color: out ? v.accent : T.inkMuted,
    }}>
      {withDot && <span style={{
        width: 6, height: 6, borderRadius: 3,
        background: out ? v.accent : 'transparent',
        border: out ? 'none' : `1px solid ${T.inkMuted}`,
      }} />}
      {label}
    </span>
  );
}

// ── BookShelfRU — the centrepiece: covers standing on a shelf ──
function BookShelfRU({ v, layout = 'desktop', heading = true }) {
  const s = RU.shelf;
  const books = RU.bookList;
  const wide = layout === 'desktop';

  return (
    <section style={{
      padding: wide ? '88px 64px' : '48px 20px', borderBottom: `1px solid ${T.hair}`,
    }}>
      {heading &&
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          gap: 24, marginBottom: wide ? 52 : 28, flexWrap: 'wrap',
        }}>
          <div style={{ maxWidth: wide ? 660 : '100%' }}>
            <Kicker v={v}>{s.kicker}</Kicker>
            <h2 style={{
              fontFamily: T.serif, fontSize: wide ? 40 : 28, lineHeight: 1.12,
              margin: '14px 0 12px', fontWeight: 400, color: T.ink, letterSpacing: -0.5,
            }}>{s.title}</h2>
            <p style={{
              fontFamily: T.serif, fontSize: wide ? 18 : 15.5, lineHeight: 1.55,
              color: T.inkSoft, margin: 0, fontStyle: 'italic',
            }}>{s.sub}</p>
          </div>
          <TextLink v={v}>{s.all}</TextLink>
        </div>}

      {wide ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 24, alignItems: 'start' }}>
          {books.map((b, i) =>
            <a key={b.id} className="bookcard" style={{
              display: 'flex', flexDirection: 'column', textDecoration: 'none',
            }}>
              {/* cover zone — fixed height so every spine sits on one shelf line */}
              <div style={{
                height: 224, display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
                borderBottom: `2px solid ${b.status === 'out' ? v.accent : T.hair}`,
              }}>
                <BookCover v={v} title={b.title} num={b.num} w={148} h={210}
                  bg={b.cover.bg} fg={b.cover.fg} rule={b.cover.rule} tagline={b.cover.tagline} />
              </div>
              <div style={{ marginTop: 16 }}>
                <ShelfStatus v={v} status={b.status} />
                <h3 className="bookcard-t" style={{
                  fontFamily: T.serif, fontSize: 18, lineHeight: 1.22, fontWeight: 400,
                  color: T.ink, letterSpacing: -0.3, margin: '10px 0 8px', textWrap: 'pretty',
                }}>{b.title}</h3>
                <ShelfThemes themes={b.themes} />
              </div>
            </a>
          )}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {books.map((b, i) =>
            <a key={b.id} className="bookcard" style={{
              display: 'grid', gridTemplateColumns: '72px 1fr', gap: 18, alignItems: 'center',
              padding: '20px 0', borderTop: `1px solid ${T.hairSoft}`, textDecoration: 'none',
            }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <BookCover v={v} title={b.title} num={b.num} w={72} h={104}
                  bg={b.cover.bg} fg={b.cover.fg} rule={b.cover.rule} tagline={b.cover.tagline} />
              </div>
              <div>
                <ShelfStatus v={v} status={b.status} />
                <h3 className="bookcard-t" style={{
                  fontFamily: T.serif, fontSize: 19, lineHeight: 1.2, fontWeight: 400,
                  color: T.ink, letterSpacing: -0.2, margin: '8px 0 7px', textWrap: 'pretty',
                }}>{b.title}</h3>
                <ShelfThemes themes={b.themes} size={10} />
              </div>
            </a>
          )}
          <div style={{ marginTop: 20 }}><TextLink v={v}>{s.all}</TextLink></div>
        </div>
      )}
    </section>
  );
}

Object.assign(window, { BookShelfRU, ShelfStatus, ShelfThemes });
