// screen-lists-ru.jsx — list & detail pages: Articles index, Books index, Book detail.
const T = window.TOKENS;

// Reusable typographic list row (numbered, divider, hover).
function ArticleListRow({ v, no, title, summary, readtime, layout = 'desktop' }) {
  if (layout === 'mobile') {
    return (
      <a className="artrow" style={{
        display: 'block', padding: '18px 0', borderTop: `1px solid ${T.hairSoft}`, textDecoration: 'none',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginBottom: 4 }}>
          <span style={{ fontFamily: T.mono, fontSize: 11, color: v.accent, letterSpacing: 0.4 }}>{no}</span>
          <span style={{ fontFamily: T.mono, fontSize: 10.5, color: T.inkMuted, letterSpacing: 0.6 }}>{readtime}</span>
        </div>
        <h4 className="artrow-t" style={{ fontFamily: T.serif, fontSize: 20, fontWeight: 400, color: T.ink, margin: '0 0 5px', lineHeight: 1.3, letterSpacing: -0.2 }}>{title}</h4>
        <p style={{ fontFamily: T.sans, fontSize: 13.5, color: T.inkSoft, lineHeight: 1.55, margin: 0 }}>{summary}</p>
      </a>
    );
  }
  return (
    <a className="artrow" style={{
      display: 'grid', gridTemplateColumns: '56px 1fr 96px 20px', gap: 20, alignItems: 'baseline',
      padding: '22px 0', borderTop: `1px solid ${T.hair}`, textDecoration: 'none',
    }}>
      <span style={{ fontFamily: T.mono, fontSize: 12, color: v.accent, letterSpacing: 0.4 }}>{no}</span>
      <div>
        <h4 className="artrow-t" style={{ fontFamily: T.serif, fontSize: 23, fontWeight: 400, color: T.ink, margin: '0 0 6px', lineHeight: 1.25, letterSpacing: -0.2 }}>{title}</h4>
        <p style={{ fontFamily: T.sans, fontSize: 14, color: T.inkSoft, lineHeight: 1.55, margin: 0, maxWidth: 560 }}>{summary}</p>
      </div>
      <span style={{ fontFamily: T.mono, fontSize: 11, color: T.inkMuted, letterSpacing: 0.6, textAlign: 'right' }}>{readtime}</span>
      <span className="artrow-a" style={{ color: v.accent, display: 'inline-flex', alignSelf: 'center' }}>{Icon.arrow(14)}</span>
    </a>
  );
}

function PageHeaderRU({ v, crumb, kicker, title, sub, meta, wide = true }) {
  return (
    <header style={{ padding: wide ? '40px 64px 48px' : '28px 20px 32px', borderBottom: `1px solid ${T.hair}` }}>
      {crumb &&
        <div style={{
          fontFamily: T.mono, fontSize: 11, letterSpacing: 1.2, color: T.inkMuted,
          textTransform: 'uppercase', marginBottom: wide ? 28 : 18, display: 'flex', gap: 10,
        }}>
          {crumb.map((s, i) =>
            <React.Fragment key={i}>
              <span style={{ color: i === crumb.length - 1 ? T.ink : T.inkMuted }}>{s}</span>
              {i < crumb.length - 1 && <span style={{ opacity: 0.4 }}>/</span>}
            </React.Fragment>
          )}
        </div>}
      <div style={{ maxWidth: 820 }}>
        <Kicker v={v}>{kicker}</Kicker>
        <h1 style={{
          fontFamily: T.serif, fontSize: wide ? 52 : 32, lineHeight: 1.06, margin: '16px 0 18px',
          fontWeight: 400, color: T.ink, letterSpacing: wide ? -0.9 : -0.5, textWrap: 'balance',
        }}>{title}</h1>
        <p style={{ fontFamily: T.serif, fontSize: wide ? 20 : 17, lineHeight: 1.5, color: T.inkSoft, margin: 0, fontStyle: 'italic', maxWidth: 680 }}>{sub}</p>
        {meta &&
          <div style={{ fontFamily: T.mono, fontSize: 11, letterSpacing: 0.6, color: T.inkMuted, marginTop: 18, textTransform: 'uppercase' }}>{meta}</div>}
      </div>
    </header>
  );
}

// ── ARTICLES INDEX ───────────────────────────────────────────
function ArticlesIndexRU({ v }) {
  const a = RU.articlesIndex;
  return (
    <div style={{ background: T.bg, minHeight: '100%', boxSizing: 'border-box' }}>
      <NavRU v={v} active="articles" wide />
      <PageHeaderRU v={v} crumb={a.crumb} kicker={a.kicker} title={a.title} sub={a.sub} meta={a.count} />

      {/* featured */}
      <section style={{ padding: '56px 64px', borderBottom: `1px solid ${T.hair}` }}>
        <a className="feat" style={{
          display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48, alignItems: 'center', textDecoration: 'none',
        }}>
          <AtmosImage v={v} height={340} label={a.featured.image} tone={a.featured.imageTone} />
          <div>
            <Kicker v={v}>{a.featured.kicker}</Kicker>
            <h2 className="feat-t" style={{ fontFamily: T.serif, fontSize: 38, lineHeight: 1.12, fontWeight: 400, color: T.ink, letterSpacing: -0.5, margin: '14px 0 16px', textWrap: 'balance' }}>{a.featured.title}</h2>
            <p style={{ fontFamily: T.sans, fontSize: 15.5, lineHeight: 1.6, color: T.inkSoft, margin: '0 0 18px', maxWidth: 480 }}>{a.featured.summary}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontFamily: T.mono, fontSize: 11, color: T.inkMuted, letterSpacing: 0.6, textTransform: 'uppercase' }}>
              <span>{a.featured.meta}</span>
              <span className="feat-a" style={{ color: v.accent, display: 'inline-flex' }}>{Icon.arrow(14)}</span>
            </div>
          </div>
        </a>
      </section>

      {/* filter tags */}
      <section style={{ padding: '28px 64px', borderBottom: `1px solid ${T.hair}` }}>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {RU.reading.tags.map((t, i) =>
            <span key={t} className="tagchip" style={{
              fontFamily: T.mono, fontSize: 11.5, letterSpacing: 0.8, textTransform: 'uppercase',
              padding: '8px 15px', borderRadius: T.rPill, cursor: 'pointer',
              border: `1px solid ${i === 0 ? v.accent : T.hair}`,
              background: i === 0 ? v.accent : 'transparent',
              color: i === 0 ? v.accentFg : T.inkSoft,
            }}>{t}</span>
          )}
        </div>
      </section>

      {/* series */}
      <section style={{ padding: '24px 64px 72px' }}>
        {a.series.map((s, si) =>
          <div key={s.label} style={{ marginTop: si === 0 ? 40 : 64 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 6, flexWrap: 'wrap', gap: 12 }}>
              <h3 style={{ fontFamily: T.serif, fontSize: 26, fontWeight: 400, color: T.ink, letterSpacing: -0.3, margin: 0 }}>{s.label}</h3>
              <span style={{ fontFamily: T.serif, fontStyle: 'italic', fontSize: 15, color: T.inkMuted }}>{s.note}</span>
            </div>
            <div>
              {s.items.map(([no, title, summary, rt]) =>
                <ArticleListRow key={title} v={v} no={no} title={title} summary={summary} readtime={rt} />
              )}
            </div>
          </div>
        )}
      </section>

      <BooksPromoRU v={v} />
      <FooterRU v={v} wide />
    </div>
  );
}

function ArticlesIndexMobileRU({ v }) {
  const a = RU.articlesIndex;
  return (
    <div style={{ background: T.bg, minHeight: '100%', boxSizing: 'border-box' }}>
      <MobileNavRU v={v} />
      <PageHeaderRU v={v} crumb={a.crumb} kicker={a.kicker} title={a.title} sub={a.sub} meta={a.count} wide={false} />
      <section style={{ padding: '28px 20px', borderBottom: `1px solid ${T.hair}` }}>
        <AtmosImage v={v} height={200} label={a.featured.image} tone={a.featured.imageTone} />
        <div style={{ marginTop: 16 }}>
          <Kicker v={v}>{a.featured.kicker}</Kicker>
          <h2 style={{ fontFamily: T.serif, fontSize: 26, lineHeight: 1.2, fontWeight: 400, color: T.ink, letterSpacing: -0.3, margin: '10px 0 10px' }}>{a.featured.title}</h2>
          <p style={{ fontFamily: T.sans, fontSize: 14, lineHeight: 1.55, color: T.inkSoft, margin: '0 0 12px' }}>{a.featured.summary}</p>
          <div style={{ fontFamily: T.mono, fontSize: 10.5, color: T.inkMuted, letterSpacing: 0.6, textTransform: 'uppercase' }}>{a.featured.meta}</div>
        </div>
      </section>
      <section style={{ padding: '20px 20px', borderBottom: `1px solid ${T.hair}`, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {RU.reading.tags.slice(0, 5).map((t, i) =>
          <span key={t} style={{
            fontFamily: T.mono, fontSize: 11, letterSpacing: 0.6, textTransform: 'uppercase', padding: '7px 13px',
            borderRadius: T.rPill, border: `1px solid ${i === 0 ? v.accent : T.hair}`,
            background: i === 0 ? v.accent : 'transparent', color: i === 0 ? v.accentFg : T.inkSoft,
          }}>{t}</span>
        )}
      </section>
      <section style={{ padding: '12px 20px 48px' }}>
        {a.series.map((s, si) =>
          <div key={s.label} style={{ marginTop: si === 0 ? 28 : 40 }}>
            <h3 style={{ fontFamily: T.serif, fontSize: 22, fontWeight: 400, color: T.ink, letterSpacing: -0.3, margin: '0 0 2px' }}>{s.label}</h3>
            <div style={{ fontFamily: T.serif, fontStyle: 'italic', fontSize: 14, color: T.inkMuted, marginBottom: 10 }}>{s.note}</div>
            {s.items.map(([no, title, summary, rt]) =>
              <ArticleListRow key={title} v={v} no={no} title={title} summary={summary} readtime={rt} layout="mobile" />
            )}
          </div>
        )}
      </section>
      <BooksPromoRU v={v} layout="mobile" />
      <FooterRU v={v} />
    </div>
  );
}

// ── BOOKS INDEX ──────────────────────────────────────────────
function ForthcomingGridRU({ v, layout = 'desktop' }) {
  const b = RU.books;
  const wide = layout === 'desktop';
  const covers = {
    '01': { bg: '#7A5747', fg: '#FAF6EF' },
    '02': { bg: '#3F6B5E', fg: '#FAF6EF' },
    '03': { bg: '#EDE9DE', fg: '#2A2723' },
    '04': { bg: '#4F4636', fg: '#FAF6EF' },
  };
  return (
    <div style={{ display: 'grid', gridTemplateColumns: wide ? 'repeat(2, 1fr)' : '1fr', gap: wide ? '28px 40px' : 20, fontFamily: T.sans }}>
      {b.forthcoming.map((f) => {
        const c = covers[f.no] || {};
        return (
        <div key={f.no} style={{ display: 'grid', gridTemplateColumns: '88px 1fr', gap: 16, alignItems: 'flex-start' }}>
          <BookCover v={v} cover="forth" title={f.title} num={f.no} w={88} h={126}
            bg={c.bg} fg={c.fg} rule={v.accent} tagline="готовится" />
          <div>
            <div style={{ fontFamily: T.mono, fontSize: 10.5, color: T.inkMuted, letterSpacing: 0.8, marginBottom: 6 }}>{RU.books.forthcomingLabel} · {f.no}</div>
            <div style={{ fontFamily: T.serif, fontSize: 19, color: T.ink, lineHeight: 1.25, letterSpacing: -0.2 }}>{f.title}</div>
            <p style={{ fontSize: 13.5, color: T.inkSoft, lineHeight: 1.55, margin: '6px 0 0' }}>{f.line}</p>
          </div>
        </div>
        );
      })}
    </div>
  );
}

function BooksIndexRU({ v }) {
  const b = RU.booksIndex;
  return (
    <div style={{ background: T.bg, minHeight: '100%', boxSizing: 'border-box' }}>
      <NavRU v={v} active="books" wide />
      <PageHeaderRU v={v} crumb={b.crumb} kicker={b.kicker} title={b.title} sub={b.sub} />
      <BookShelfRU v={v} layout="desktop" heading={false} />
      <section style={{ padding: '64px 64px', borderBottom: `1px solid ${T.hair}` }}>
        <div style={{ fontFamily: T.mono, fontSize: 11, letterSpacing: 1.4, textTransform: 'uppercase', color: v.accent, marginBottom: 28 }}>{b.publishedLabel}</div>
        <BookBlockRU v={v} />
      </section>
      <FooterRU v={v} wide />
    </div>
  );
}

function BooksIndexMobileRU({ v }) {
  const b = RU.booksIndex;
  return (
    <div style={{ background: T.bg, minHeight: '100%', boxSizing: 'border-box' }}>
      <MobileNavRU v={v} />
      <PageHeaderRU v={v} crumb={b.crumb} kicker={b.kicker} title={b.title} sub={b.sub} wide={false} />
      <BookShelfRU v={v} layout="mobile" heading={false} />
      <section style={{ padding: '36px 20px' }}>
        <div style={{ fontFamily: T.mono, fontSize: 11, letterSpacing: 1.4, textTransform: 'uppercase', color: v.accent, marginBottom: 20 }}>{b.publishedLabel}</div>
        <BookBlockRU v={v} compact />
      </section>
      <FooterRU v={v} />
    </div>
  );
}

// ── BOOK DETAIL ──────────────────────────────────────────────
function BookDetailRU({ v }) {
  const d = RU.bookDetail;
  return (
    <div style={{ background: T.bg, minHeight: '100%', boxSizing: 'border-box' }}>
      <NavRU v={v} active="books" wide />
      {/* hero */}
      <section style={{ padding: '40px 64px 64px', borderBottom: `1px solid ${T.hair}` }}>
        <div style={{
          fontFamily: T.mono, fontSize: 11, letterSpacing: 1.2, color: T.inkMuted,
          textTransform: 'uppercase', marginBottom: 32, display: 'flex', gap: 10,
        }}>
          {d.crumb.map((s, i) =>
            <React.Fragment key={i}>
              <span style={{ color: i === d.crumb.length - 1 ? T.ink : T.inkMuted }}>{s}</span>
              {i < d.crumb.length - 1 && <span style={{ opacity: 0.4 }}>/</span>}
            </React.Fragment>
          )}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 64, alignItems: 'flex-start' }}>
          <div style={{ position: 'sticky', top: 32 }}>
            <BookCover v={v} title={d.title} w={300} h={432} />
          </div>
          <div>
            <Kicker v={v} color={T.inkMuted}>{d.kicker}</Kicker>
            <h1 style={{ fontFamily: T.serif, fontSize: 54, lineHeight: 1.05, fontWeight: 400, color: T.ink, letterSpacing: -0.9, margin: '14px 0 10px' }}>{d.title}</h1>
            <p style={{ fontFamily: T.serif, fontSize: 24, fontStyle: 'italic', color: T.inkSoft, margin: '0 0 22px', lineHeight: 1.4 }}>{d.sub}</p>
            <p style={{ fontFamily: T.sans, fontSize: 16, lineHeight: 1.65, color: T.inkSoft, margin: '0 0 28px', maxWidth: 560 }}>{d.lead}</p>

            <div style={{ marginBottom: 28 }}>
              <PrimaryBtn v={v}>{RU.books.bookCta}</PrimaryBtn>
            </div>
            <RetailerLinksRU v={v} items={d.retailers} status={d.status} label={d.retailLabel} />

            {/* facts + languages */}
            <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start', flexWrap: 'wrap', marginTop: 36 }}>
              <div style={{ display: 'flex', gap: 1, background: T.hair, border: `1px solid ${T.hair}` }}>
                {d.facts.map(([k, val]) =>
                  <div key={k} style={{ background: T.bg, padding: '16px 24px', minWidth: 92 }}>
                    <div style={{ fontFamily: T.mono, fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', color: T.inkMuted, marginBottom: 6 }}>{k}</div>
                    <div style={{ fontFamily: T.serif, fontSize: 17, color: T.ink }}>{val}</div>
                  </div>
                )}
              </div>
              <div>
                <div style={{ fontFamily: T.mono, fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', color: T.inkMuted, marginBottom: 12 }}>{d.langLabel}</div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {d.langs.map((l) =>
                    <span key={l} style={{
                      fontFamily: T.sans, fontSize: 13, color: T.ink, padding: '7px 14px',
                      border: `1px solid ${v.accentHair}`, borderRadius: T.rPill, background: T.bg,
                    }}>{l}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about + toc */}
      <section style={{ padding: '72px 64px', borderBottom: `1px solid ${T.hair}`, display: 'grid', gridTemplateColumns: '1fr 360px', gap: 64, alignItems: 'flex-start' }}>
        <div>
          <Kicker v={v}>{d.aboutLabel}</Kicker>
          <div style={{ marginTop: 18, fontFamily: T.serif, fontSize: 20, lineHeight: 1.7, color: T.ink }}>
            {d.about.map((p, i) => <p key={i} style={{ margin: i === 0 ? '0 0 22px' : 0 }}>{p}</p>)}
          </div>
          <figure style={{ margin: '36px 0 0', padding: '24px 0 4px 28px', borderLeft: `2px solid ${v.accent}` }}>
            <blockquote style={{ margin: 0, fontFamily: T.serif, fontSize: 24, fontStyle: 'italic', lineHeight: 1.45, color: T.ink, letterSpacing: -0.2 }}>{d.excerpt}</blockquote>
            <figcaption style={{ marginTop: 14, fontFamily: T.mono, fontSize: 10.5, letterSpacing: 1, textTransform: 'uppercase', color: T.inkMuted }}>{d.excerptLabel}</figcaption>
          </figure>
        </div>
        <aside style={{ position: 'sticky', top: 32 }}>
          <div style={{ fontFamily: T.mono, fontSize: 10.5, letterSpacing: 1.4, textTransform: 'uppercase', color: T.inkMuted, marginBottom: 14 }}>{d.tocLabel}</div>
          {d.toc.map(([n, t]) =>
            <div key={n} style={{ display: 'grid', gridTemplateColumns: '34px 1fr', gap: 8, padding: '12px 0', borderTop: `1px solid ${T.hairSoft}` }}>
              <span style={{ fontFamily: T.mono, fontSize: 11, color: v.accent }}>{n}</span>
              <span style={{ fontFamily: T.serif, fontSize: 16, color: T.ink, lineHeight: 1.35 }}>{t}</span>
            </div>
          )}
          <div style={{ marginTop: 28, fontFamily: T.mono, fontSize: 10.5, letterSpacing: 1.4, textTransform: 'uppercase', color: T.inkMuted, marginBottom: 14 }}>{d.praiseLabel}</div>
          {d.praise.map(([quote, by]) =>
            <div key={by} style={{ padding: '14px 0', borderTop: `1px solid ${T.hairSoft}` }}>
              <p style={{ fontFamily: T.serif, fontSize: 15.5, fontStyle: 'italic', color: T.ink, lineHeight: 1.5, margin: '0 0 6px' }}>{quote}</p>
              <div style={{ fontFamily: T.mono, fontSize: 10.5, letterSpacing: 0.6, textTransform: 'uppercase', color: T.inkMuted }}>{by}</div>
            </div>
          )}
        </aside>
      </section>

      <IdeaSection v={v} layout="desktop" />

      <BooksPromoRU v={v} />
      <FooterRU v={v} wide />
    </div>
  );
}

function BookDetailMobileRU({ v }) {
  const d = RU.bookDetail;
  return (
    <div style={{ background: T.bg, minHeight: '100%', boxSizing: 'border-box' }}>
      <MobileNavRU v={v} />
      <section style={{ padding: '28px 20px 36px', borderBottom: `1px solid ${T.hair}` }}>
        <div style={{ fontFamily: T.mono, fontSize: 10, letterSpacing: 1.2, textTransform: 'uppercase', color: T.inkMuted, marginBottom: 20 }}>{d.crumb.join(' / ')}</div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <BookCover v={v} title={d.title} w={180} h={260} />
        </div>
        <Kicker v={v} color={T.inkMuted}>{d.kicker}</Kicker>
        <h1 style={{ fontFamily: T.serif, fontSize: 36, lineHeight: 1.05, fontWeight: 400, color: T.ink, letterSpacing: -0.6, margin: '12px 0 8px' }}>{d.title}</h1>
        <p style={{ fontFamily: T.serif, fontSize: 19, fontStyle: 'italic', color: T.inkSoft, margin: '0 0 16px', lineHeight: 1.4 }}>{d.sub}</p>
        <p style={{ fontFamily: T.sans, fontSize: 15, lineHeight: 1.6, color: T.inkSoft, margin: '0 0 22px' }}>{d.lead}</p>
        <div style={{ marginBottom: 20 }}><PrimaryBtn v={v}>{RU.books.bookCta}</PrimaryBtn></div>
        <RetailerLinksRU v={v} items={d.retailers} status={d.status} label={d.retailLabel} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, marginTop: 28, background: T.hair, border: `1px solid ${T.hair}` }}>
          {d.facts.map(([k, val]) =>
            <div key={k} style={{ background: T.bg, padding: '14px 16px' }}>
              <div style={{ fontFamily: T.mono, fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', color: T.inkMuted, marginBottom: 5 }}>{k}</div>
              <div style={{ fontFamily: T.serif, fontSize: 16, color: T.ink }}>{val}</div>
            </div>
          )}
        </div>
        <div style={{ marginTop: 20 }}>
          <div style={{ fontFamily: T.mono, fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', color: T.inkMuted, marginBottom: 10 }}>{d.langLabel}</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {d.langs.map((l) =>
              <span key={l} style={{
                fontFamily: T.sans, fontSize: 13, color: T.ink, padding: '7px 13px',
                border: `1px solid ${v.accentHair}`, borderRadius: T.rPill, background: T.bg,
              }}>{l}</span>
            )}
          </div>
        </div>
      </section>
      <section style={{ padding: '40px 20px', borderBottom: `1px solid ${T.hair}` }}>
        <Kicker v={v}>{d.aboutLabel}</Kicker>
        <div style={{ marginTop: 14, fontFamily: T.serif, fontSize: 18, lineHeight: 1.7, color: T.ink }}>
          {d.about.map((p, i) => <p key={i} style={{ margin: i === 0 ? '0 0 18px' : 0 }}>{p}</p>)}
        </div>
        <figure style={{ margin: '28px 0 0', padding: '20px 0 4px 22px', borderLeft: `2px solid ${v.accent}` }}>
          <blockquote style={{ margin: 0, fontFamily: T.serif, fontSize: 20, fontStyle: 'italic', lineHeight: 1.45, color: T.ink }}>{d.excerpt}</blockquote>
          <figcaption style={{ marginTop: 12, fontFamily: T.mono, fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', color: T.inkMuted }}>{d.excerptLabel}</figcaption>
        </figure>
      </section>
      <section style={{ padding: '36px 20px', background: T.surfaceSoft, borderBottom: `1px solid ${T.hair}` }}>
        <div style={{ fontFamily: T.mono, fontSize: 10.5, letterSpacing: 1.4, textTransform: 'uppercase', color: T.inkMuted, marginBottom: 12 }}>{d.tocLabel}</div>
        {d.toc.map(([n, t]) =>
          <div key={n} style={{ display: 'grid', gridTemplateColumns: '30px 1fr', gap: 8, padding: '11px 0', borderTop: `1px solid ${T.hairSoft}` }}>
            <span style={{ fontFamily: T.mono, fontSize: 11, color: v.accent }}>{n}</span>
            <span style={{ fontFamily: T.serif, fontSize: 15.5, color: T.ink, lineHeight: 1.35 }}>{t}</span>
          </div>
        )}
      </section>
      <IdeaSection v={v} layout="mobile" />

      <BooksPromoRU v={v} layout="mobile" />
      <FooterRU v={v} />
    </div>
  );
}

Object.assign(window, {
  ArticleListRow, PageHeaderRU, ForthcomingGridRU,
  ArticlesIndexRU, ArticlesIndexMobileRU,
  BooksIndexRU, BooksIndexMobileRU,
  BookDetailRU, BookDetailMobileRU,
});
