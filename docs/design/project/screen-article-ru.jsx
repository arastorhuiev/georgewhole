// screen-article-ru.jsx — Article (desktop + mobile) in Russian

const T = window.TOKENS;

function ArticleDesktopRU({ v }) {
  const a = RU.article;
  return (
    <div style={{ background: T.bg, minHeight: '100%', boxSizing: 'border-box' }}>
      <NavRU v={v} active="articles" wide />
      <header style={{ padding: '32px 64px 56px', borderBottom: `1px solid ${T.hair}` }}>
        <div style={{
          fontFamily: T.mono, fontSize: 11, letterSpacing: 1.2, color: T.inkMuted,
          textTransform: 'uppercase', marginBottom: 32, display: 'flex', gap: 10
        }}>
          {a.crumb.map((s, i) =>
          <React.Fragment key={i}>
              <span style={{ color: i === a.crumb.length - 1 ? T.ink : T.inkMuted }}>{s}</span>
              {i < a.crumb.length - 1 && <span style={{ opacity: 0.4 }}>/</span>}
            </React.Fragment>
          )}
        </div>
        <div style={{ maxWidth: 880 }}>
          <Kicker v={v}>{a.kicker}</Kicker>
          <h1 style={{
            fontFamily: T.serif, fontSize: 58, lineHeight: 1.06, margin: '20px 0 28px',
            fontWeight: 400, color: T.ink, letterSpacing: -0.9, textWrap: 'balance'
          }}>{a.h}</h1>
          <p style={{
            fontFamily: T.serif, fontSize: 22, lineHeight: 1.5, color: T.inkSoft,
            margin: '0 0 36px', fontStyle: 'italic', maxWidth: 720
          }}>{a.sub}</p>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 28, paddingTop: 24,
            borderTop: `1px solid ${T.hairSoft}`, flexWrap: 'wrap'
          }} data-comment-anchor="4f60fcfe04-div-32-11">
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <AuthorPortrait v={v} size={48} />
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: T.ink, fontFamily: T.sans }}>{RU.author.name}</div>
                <div style={{ fontSize: 13, color: T.inkSoft, lineHeight: 1.4, fontFamily: T.sans }}>{RU.author.note}</div>
              </div>
            </div>
            <div style={{ width: 1, height: 36, background: T.hair }} />
            <div style={{ fontFamily: T.mono, fontSize: 11, color: T.inkMuted, letterSpacing: 0.8, lineHeight: 1.6, display: 'flex', gap: 18 }}>
              <span>{a.date}</span><span>{a.readtime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Шапка с картинкой — вариация хиро */}
      <section style={{ padding: '48px 64px 0' }}>
        <AtmosImage v={v} height={440} label="утренний свет · север Испании" tone="morning" accentTint />
      </section>

      <div style={{
        display: 'grid', gridTemplateColumns: '220px 1fr 220px', gap: 56,
        padding: '64px 64px 80px', maxWidth: 1280, margin: '0 auto', alignItems: 'flex-start'
      }} data-comment-anchor="f384655065-div-56-7">
        <ArticleTOCRU v={v} />
        <ArticleProseRU v={v} />
        <ArticleSidebarRU v={v} />
      </div>

      <BooksPromoRU v={v} />
      <FooterRU v={v} wide />
    </div>);

}

function ArticleTOCRU({ v }) {
  const a = RU.article;
  return (
    <aside style={{ position: 'sticky', top: 32, fontFamily: T.sans }}>
      <div style={{ fontFamily: T.mono, fontSize: 10.5, letterSpacing: 1.4, textTransform: 'uppercase', color: T.inkMuted, marginBottom: 14 }}>
        {a.tocLabel}
      </div>
      <ol style={{ margin: 0, padding: 0, listStyle: 'none' }}>
        {a.toc.map(([n, t, active]) =>
        <li key={n} style={{ marginBottom: 14, display: 'grid', gridTemplateColumns: '32px 1fr', gap: 8 }}>
            <span style={{ fontFamily: T.mono, fontSize: 10.5, color: active ? v.accent : T.inkMuted, letterSpacing: 0.6, paddingTop: 2 }}>{n}</span>
            <a style={{
            fontSize: 13.5, lineHeight: 1.45, color: active ? T.ink : T.inkSoft, textDecoration: 'none',
            fontWeight: active ? 600 : 400,
            borderLeft: active ? `2px solid ${v.accent}` : '2px solid transparent',
            paddingLeft: 10, marginLeft: -12
          }}>{t}</a>
          </li>
        )}
      </ol>
      <div style={{
        marginTop: 24, paddingTop: 18, borderTop: `1px solid ${T.hairSoft}`,
        fontFamily: T.mono, fontSize: 10.5, letterSpacing: 0.8, color: T.inkMuted
      }}>{a.tocActions}</div>
    </aside>);

}

function ArticleProseRU({ v }) {
  const a = RU.article;
  return (
    <article style={{
      maxWidth: '70ch', fontFamily: T.serif, color: T.ink, fontSize: 20,
      lineHeight: 1.7, justifySelf: 'center'
    }}>
      <p style={{ fontSize: 22, lineHeight: 1.6, color: T.inkSoft, fontStyle: 'italic', margin: '0 0 32px' }}>
        {a.intro}
      </p>
      <p style={{ margin: '0 0 24px' }}>{a.body1}</p>
      <p style={{ margin: '0 0 24px' }}>{a.body2}</p>

      <ReframeCalloutRU v={v}>{a.reframeText}</ReframeCalloutRU>

      <h2 style={{ fontFamily: T.serif, fontSize: 30, lineHeight: 1.25, fontWeight: 400, color: T.ink, letterSpacing: -0.4, margin: '48px 0 18px' }}>
        {a.h2_2}
      </h2>
      <p style={{ margin: '0 0 24px' }}>{a.body3}</p>

      <PullQuoteRU v={v} attribution={a.pull1by}>{a.pull1}</PullQuoteRU>

      <p style={{ margin: '0 0 24px' }}>{a.body4}</p>
      <p style={{ margin: '0 0 24px' }}>{a.body5}</p>

      <h2 style={{ fontFamily: T.serif, fontSize: 30, lineHeight: 1.25, fontWeight: 400, color: T.ink, letterSpacing: -0.4, margin: '48px 0 18px' }}>
        {a.h2_3}
      </h2>
      <p style={{ margin: '0 0 24px' }}>{a.body6}</p>

      <ArticleFigureRU v={v} tone="dusk" height={360} />

      <div style={{
        margin: '48px 0', padding: '36px 32px', background: T.surfaceSoft,
        border: `1px solid ${T.hair}`, fontFamily: T.sans
      }}>
        <EmailCaptureRU v={v} variant="newsletter" compact />
      </div>

      <h2 style={{ fontFamily: T.serif, fontSize: 30, lineHeight: 1.25, fontWeight: 400, color: T.ink, letterSpacing: -0.4, margin: '48px 0 18px' }}>
        {a.h2_4}
      </h2>
      <p style={{ margin: '0 0 24px' }}>{a.body7}</p>
      <p style={{ margin: '0 0 24px' }}>{a.body8}</p>

      <div style={{ marginTop: 48, paddingTop: 32, borderTop: `1px solid ${T.hairSoft}`, display: 'flex', alignItems: 'center', gap: 18 }}>
        <AuthorPortrait v={v} size={56} />
        <div style={{ fontFamily: T.sans, fontSize: 14, color: T.inkSoft, lineHeight: 1.55 }}>
          <div style={{ color: T.ink, fontWeight: 600 }}>Автор: {RU.author.name}</div>
          {a.authorBlurb}
          <a style={{
            display: 'inline-block', marginLeft: 8, color: v.accent, textDecoration: 'none',
            borderBottom: `1px solid ${v.accentHair}`, fontWeight: 500
          }}>{a.authorLink}</a>
        </div>
      </div>

      <section style={{
        margin: '40px 0 0', padding: '24px 0', borderTop: `1px solid ${T.hair}`,
        fontFamily: T.sans, color: T.inkSoft
      }}>
        <Kicker v={v} color={T.inkMuted}>{a.sources}</Kicker>
        <ol style={{ margin: '14px 0 0', paddingLeft: 18, fontSize: 13.5, lineHeight: 1.7 }}>
          <li>Tribole, E. &amp; Resch, E. <em>Intuitive Eating</em>, 4-е изд. (2020).</li>
          <li>Bacon, L. <em>Health at Every Size</em> (2010).</li>
          <li>Linehan, M. M. <em>DBT Skills Training Manual</em> (2014).</li>
          <li>Проверено: Dr. M. Karim, клинический психолог · обновлено в апреле 2026.</li>
        </ol>
      </section>
    </article>);

}

function ArticleSidebarRU({ v }) {
  const a = RU.article;
  return (
    <aside style={{ position: 'sticky', top: 32, fontFamily: T.sans }}>
      <div style={{ padding: '20px', border: `1px solid ${T.hair}`, background: T.surfaceSoft }}>
        <Kicker v={v}>{a.sidebarKicker}</Kicker>
        <div style={{ fontFamily: T.serif, fontSize: 17, color: T.ink, margin: '10px 0 12px', lineHeight: 1.4, fontStyle: 'italic' }}>
          {a.sidebarQuote}
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginTop: 16 }}>
          <BookCover v={v} w={64} h={92} title={RU.books.bookTitle} />
          <div>
            <div style={{ fontSize: 13, color: T.ink, fontWeight: 600 }}>{RU.books.bookTitle}</div>
            <div style={{ fontSize: 12, color: T.inkSoft, lineHeight: 1.4, marginBottom: 8 }}>{RU.books.bookSub}</div>
            <a style={{ color: v.accent, fontSize: 12, fontWeight: 500, textDecoration: 'none', borderBottom: `1px solid ${v.accentHair}` }}>
              {RU.books.bookCta} →
            </a>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 24, fontFamily: T.mono, fontSize: 10.5, letterSpacing: 1.4, textTransform: 'uppercase', color: T.inkMuted, marginBottom: 12 }}>
        {a.sidebarTheme}
      </div>
      {a.sidebarLinks.map((t) =>
      <a key={t} style={{
        display: 'block', fontFamily: T.serif, fontSize: 15, color: T.ink,
        lineHeight: 1.4, padding: '12px 0', borderTop: `1px solid ${T.hairSoft}`,
        textDecoration: 'none'
      }}>{t}</a>
      )}
    </aside>);

}

function ArticleMobileRU({ v }) {
  const a = RU.article;
  return (
    <div style={{ background: T.bg, minHeight: '100%', boxSizing: 'border-box' }}>
      <MobileNavRU v={v} />
      <div style={{ height: 3, background: T.hairSoft, position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '34%', background: v.accent }} />
      </div>
      <header style={{ padding: '28px 20px 28px' }}>
        <div style={{ fontFamily: T.mono, fontSize: 10, letterSpacing: 1.2, textTransform: 'uppercase', color: T.inkMuted, marginBottom: 14 }}>
          {a.crumb.join(' / ')}
        </div>
        <Kicker v={v}>{a.kicker}</Kicker>
        <h1 style={{
          fontFamily: T.serif, fontSize: 32, lineHeight: 1.1, margin: '14px 0 18px',
          fontWeight: 400, color: T.ink, letterSpacing: -0.5, textWrap: 'balance'
        }}>{a.h}</h1>
        <p style={{ fontFamily: T.serif, fontSize: 17, lineHeight: 1.55, color: T.inkSoft, margin: '0 0 22px', fontStyle: 'italic' }}>
          {a.sub}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <AuthorPortrait v={v} size={48} />
          <div style={{ fontFamily: T.sans }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: T.ink }}>{RU.author.name}</div>
            <div style={{ fontSize: 13, color: T.inkSoft, lineHeight: 1.4 }}>{RU.author.note}</div>
          </div>
        </div>
        <div style={{
          marginTop: 16, paddingTop: 14, borderTop: `1px solid ${T.hairSoft}`,
          display: 'flex', gap: 18, fontFamily: T.mono, fontSize: 10.5, color: T.inkMuted, letterSpacing: 0.6, flexWrap: 'wrap'
        }}>
          <span>{a.date}</span><span>{a.readtime}</span>
        </div>
      </header>
      <div style={{ padding: '0 20px 8px' }}>
        <AtmosImage v={v} height={220} label="утренний свет" tone="morning" accentTint />
      </div>
      <article style={{
        padding: '8px 20px 32px', fontFamily: T.serif, color: T.ink,
        fontSize: 19, lineHeight: 1.7
      }}>
        <p style={{ margin: '0 0 22px' }}>{a.body1}</p>
        <ReframeCalloutRU v={v}>{a.reframeText}</ReframeCalloutRU>
        <h2 style={{ fontFamily: T.serif, fontSize: 24, lineHeight: 1.25, fontWeight: 400, color: T.ink, letterSpacing: -0.3, margin: '36px 0 14px' }}>
          {a.h2_2}
        </h2>
        <p style={{ margin: '0 0 22px' }}>{a.body3}</p>
        <PullQuoteRU v={v} attribution={a.pull1by}>{a.pull1}</PullQuoteRU>
        <p style={{ margin: '0 0 22px' }}>{a.body4}</p>
        <ArticleFigureRU v={v} tone="dusk" height={240} />
        <h2 style={{ fontFamily: T.serif, fontSize: 24, lineHeight: 1.25, fontWeight: 400, color: T.ink, letterSpacing: -0.3, margin: '36px 0 14px' }}>
          {a.h2_4}
        </h2>
        <p style={{ margin: '0 0 22px' }}>{a.body7}</p>
      </article>
      <section style={{
        padding: '28px 20px', background: T.surfaceSoft, borderTop: `1px solid ${T.hair}`
      }}>
        <EmailCaptureRU v={v} variant="newsletter" compact />
      </section>
      <BooksPromoRU v={v} layout="mobile" />
      <FooterRU v={v} />
    </div>);

}

window.ArticleDesktopRU = ArticleDesktopRU;
window.ArticleMobileRU = ArticleMobileRU;