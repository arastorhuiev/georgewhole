// screen-home-ru.jsx — Russian version of Home (desktop + mobile)
const T = window.TOKENS;

function NavRU({ v, active = 'home', wide = false }) {
  const items = [
  ['articles', window.RU.nav.articles],
  ['books', window.RU.nav.books],
  ['about', window.RU.nav.about],
  ['newsletter', window.RU.nav.newsletter]];

  return (
    <header style={{
      borderBottom: `1px solid ${T.hair}`, background: T.bg,
      padding: wide ? '20px 64px' : '18px 32px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: T.sans
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
        <a className="brandlink" style={{ fontFamily: T.serif, fontSize: 22, fontWeight: 400, letterSpacing: -0.3, color: T.ink, textDecoration: 'none', lineHeight: 1 }}>
          {RU.brand}
        </a>
        <span style={{ fontFamily: T.mono, fontSize: 10, color: T.inkMuted, letterSpacing: 0.6, textTransform: 'uppercase' }}>
          {RU.brandTagline}
        </span>
      </div>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        {items.map(([k, t]) =>
        <a key={k} className="navlink" style={{
          fontSize: 14, color: k === active ? v.accent : T.ink, textDecoration: 'none', fontWeight: 500,
          borderBottom: k === active ? `1px solid ${v.accent}` : '1px solid transparent', paddingBottom: 2
        }}>{t}</a>
        )}
        <LocaleSwitcher v={v} current="RU" />
      </nav>
    </header>);

}

function MobileNavRU({ v }) {
  const [open, setOpen] = React.useState(null); // 'lang' | 'nav' | null
  const [lang, setLang] = React.useState('RU');
  const locales = [
    ['EN', 'English'], ['UK', 'Українська'], ['RU', 'Русский'], ['ES', 'Español'],
  ];
  const navItems = [
    ['articles', RU.nav.articles], ['books', RU.nav.books],
    ['about', RU.nav.about], ['newsletter', RU.nav.newsletter],
  ];
  const toggle = (k) => setOpen((o) => (o === k ? null : k));
  const panelCss = {
    position: 'absolute', top: 'calc(100% + 8px)', right: 20, zIndex: 30,
    background: T.bg, border: `1px solid ${T.hair}`, borderRadius: T.rMd,
    boxShadow: '0 8px 28px rgba(42,39,35,0.14), 0 2px 6px rgba(42,39,35,0.08)',
    overflow: 'hidden', minWidth: 208,
  };
  return (
    <header style={{
      borderBottom: `1px solid ${T.hair}`, background: T.bg, padding: '14px 20px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      fontFamily: T.sans, position: 'relative',
    }}>
      <a className="brandlink" style={{ fontFamily: T.serif, fontSize: 18, fontWeight: 400, color: T.ink, textDecoration: 'none' }}>{RU.brand}</a>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <button
          onClick={() => toggle('lang')}
          aria-label="Язык"
          className={'iconbtn' + (open === 'lang' ? ' is-open' : '')}
          style={{
            border: `1px solid ${T.hair}`, background: 'transparent', color: T.ink,
            padding: '6px 10px', borderRadius: T.rMd, fontSize: 12, fontFamily: T.mono,
            display: 'flex', alignItems: 'center', gap: 5, letterSpacing: 0.4,
          }}>
          {lang} <span className="chev-i" style={{ display: 'inline-flex' }}>{Icon.chev(8)}</span>
        </button>
        <button
          onClick={() => toggle('nav')}
          aria-label="Меню"
          className={'iconbtn' + (open === 'nav' ? ' is-open' : '')}
          style={{
            border: `1px solid ${T.hair}`, background: 'transparent', color: T.ink,
            width: 34, height: 30, borderRadius: T.rMd, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
          }}>{Icon.hamburger(16)}</button>
      </div>

      {/* dim-to-close overlay */}
      {open &&
        <div onClick={() => setOpen(null)} style={{
          position: 'absolute', inset: 0, top: '100%', height: '100vh', zIndex: 20,
          background: 'transparent',
        }} />}

      {/* Language menu */}
      {open === 'lang' &&
        <div style={panelCss}>
          <div style={{
            padding: '10px 16px 8px', fontFamily: T.mono, fontSize: 9.5, letterSpacing: 1.4,
            textTransform: 'uppercase', color: T.inkMuted, borderBottom: `1px solid ${T.hairSoft}`,
            display: 'flex', alignItems: 'center', gap: 7,
          }}>{Icon.globe(11)} Язык сайта</div>
          {locales.map(([code, name]) => {
            const active = code === lang;
            return (
              <button key={code} className="menurow"
                onClick={() => { setLang(code); setOpen(null); }}
                style={{
                  width: '100%', border: 'none', background: active ? v.accentSoft : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
                  padding: '12px 16px', textAlign: 'left',
                }}>
                <span style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                  <span style={{
                    fontFamily: T.mono, fontSize: 11, letterSpacing: 0.6,
                    color: active ? v.accent : T.inkMuted, fontWeight: active ? 700 : 400, width: 22,
                  }}>{code}</span>
                  <span style={{ fontFamily: T.sans, fontSize: 14.5, color: active ? T.ink : T.inkSoft, fontWeight: active ? 600 : 400 }}>{name}</span>
                </span>
                {active && <span style={{ color: v.accent, display: 'inline-flex' }}>{Check(13)}</span>}
              </button>
            );
          })}
        </div>}

      {/* Nav menu */}
      {open === 'nav' &&
        <div style={panelCss}>
          {navItems.map(([k, label]) =>
            <a key={k} className="menurow" onClick={() => setOpen(null)} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '13px 16px', textDecoration: 'none', borderBottom: `1px solid ${T.hairSoft}`,
              color: T.ink, fontFamily: T.sans, fontSize: 15, fontWeight: 500,
            }}>
              {label}
              <span style={{ color: v.accent, display: 'inline-flex' }}>{Icon.arrow(13)}</span>
            </a>
          )}
        </div>}
    </header>);

}

function FooterRU({ v, wide = false }) {
  const c = RU.footer;
  // Mobile: dedicated stacked layout (the desktop multi-column grid is far
  // too cramped at 390px). Brand blurb, then link groups two-up, then a
  // calm vertical bottom bar.
  if (!wide) {
    return (
      <footer style={{
        borderTop: `1px solid ${T.hair}`, padding: '36px 20px 28px',
        fontFamily: T.sans, color: T.inkSoft, fontSize: 13.5, background: T.bg
      }}>
        <div style={{ fontFamily: T.serif, fontSize: 19, color: T.ink, marginBottom: 8 }}>{c.deskTitle}</div>
        <p style={{ margin: '0 0 28px', lineHeight: 1.6, color: T.inkSoft, fontSize: 14 }}>{c.deskBlurb}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginBottom: 28 }}>
          {c.cols.slice(0, 2).map(([head, links]) =>
            <div key={head}>
              <div style={{ fontFamily: T.mono, fontSize: 10.5, letterSpacing: 1.4, textTransform: 'uppercase', color: T.inkMuted, marginBottom: 12 }}>{head}</div>
              {links.map((l) =>
                <a key={l} className="footerlink" style={{ display: 'block', marginBottom: 10, color: T.ink, fontSize: 14, textDecoration: 'none' }}>{l}</a>
              )}
            </div>
          )}
        </div>
        <div style={{ paddingTop: 22, borderTop: `1px solid ${T.hairSoft}`, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <LocaleSwitcher v={v} current="RU" />
          <div style={{ display: 'flex', gap: 16, fontFamily: T.mono, fontSize: 10.5, color: T.inkMuted, letterSpacing: 0.5 }}>
            {c.legal.map((l) => <span key={l}>{l}</span>)}
          </div>
          <div style={{ fontFamily: T.mono, fontSize: 10.5, color: T.inkMuted, letterSpacing: 0.5 }}>{c.copy}</div>
        </div>
      </footer>);
  }
  return (
    <footer style={{
      borderTop: `1px solid ${T.hair}`, padding: '48px 64px 32px',
      fontFamily: T.sans, color: T.inkSoft, fontSize: 13.5, background: T.bg
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48 }}>
        <div>
          <div style={{ fontFamily: T.serif, fontSize: 18, color: T.ink, marginBottom: 8 }}>{c.deskTitle}</div>
          <p style={{ margin: 0, lineHeight: 1.65, maxWidth: 340, color: T.inkSoft }}>{c.deskBlurb}</p>
        </div>
        {c.cols.slice(0, 3).map(([head, links], i) =>
        <div key={head}>
            <div style={{ fontFamily: T.mono, fontSize: 11, letterSpacing: 1.4, textTransform: 'uppercase', color: T.inkMuted, marginBottom: 12 }}>{head}</div>
            {links.map((l) =>
          <a key={l} className="footerlink" style={{
            display: 'block', marginBottom: 8,
            color: i === 2 && links.indexOf(l) === 0 ? v.accent : T.ink,
            fontSize: 13.5, textDecoration: 'none'
          }}>{l}</a>
          )}
          </div>
        )}
      </div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginTop: 40, paddingTop: 20, borderTop: `1px solid ${T.hairSoft}`,
        fontFamily: T.mono, fontSize: 11, color: T.inkMuted, letterSpacing: 0.5, flexWrap: 'wrap', gap: 16
      }}>
        <div>{c.copy}</div>
        <div style={{ display: 'flex', gap: 18 }}>
          {c.legal.map((l) => <span key={l}>{l}</span>)}
        </div>
        <LocaleSwitcher v={v} current="RU" />
      </div>
    </footer>);

}

function ReframeCalloutRU({ v, children, label = RU.article.reframeLabel }) {
  return (
    <aside style={{
      margin: '32px 0', background: v.callout, padding: '24px 28px',
      borderTop: `2px solid ${v.accent}`, fontFamily: T.serif, color: T.ink
    }}>
      <div style={{
        fontFamily: T.mono, fontSize: 11, letterSpacing: 1.6, textTransform: 'uppercase',
        color: v.accent, marginBottom: 10, fontWeight: 500
      }}>{label}</div>
      <div style={{ fontSize: 19, lineHeight: 1.55, fontStyle: 'italic' }}>{children}</div>
    </aside>);

}

function PullQuoteRU({ v, children, attribution }) {
  return (
    <figure style={{
      margin: '36px 0', padding: '24px 0 24px 28px',
      borderLeft: `2px solid ${v.accent}`, fontFamily: T.serif
    }}>
      <blockquote style={{
        margin: 0, fontSize: 26, lineHeight: 1.45, color: T.ink, fontStyle: 'italic',
        letterSpacing: -0.2, fontWeight: 400
      }}>«{children}»</blockquote>
      {attribution &&
      <figcaption style={{
        marginTop: 14, fontFamily: T.mono, fontSize: 11, letterSpacing: 0.8,
        textTransform: 'uppercase', color: T.inkMuted
      }}>{attribution}</figcaption>
      }
    </figure>);

}

function EmailCaptureRU({ v, variant = 'newsletter', compact = false, bare = false }) {
  const isQuiz = variant === 'quiz';
  const c = isQuiz ? RU.quiz : RU.newsletter;
  const [sent, setSent] = React.useState(false);

  // Newsletter — thank-you confirmation state.
  if (!isQuiz && sent) {
    return (
      <div style={{ fontFamily: T.sans, maxWidth: 480 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 38, height: 38, borderRadius: 19, background: v.accentSoft,
          color: v.accent, marginBottom: 16,
        }}>{Check(18)}</div>
        <h3 style={{
          fontFamily: T.serif, fontWeight: 400, fontSize: compact ? 22 : 26,
          lineHeight: 1.2, color: T.ink, margin: '0 0 8px', letterSpacing: -0.3,
        }}>{c.sentTitle}</h3>
        <p style={{ fontSize: 14.5, lineHeight: 1.6, color: T.inkSoft, margin: 0 }}>{c.sentBody}</p>
      </div>);
  }

  return (
    <div style={{ fontFamily: T.sans }}>
      {isQuiz &&
      <div style={{
        fontFamily: T.mono, fontSize: 11, letterSpacing: 1.6, textTransform: 'uppercase',
        color: v.accent, fontWeight: 500
      }}>{c.kicker}</div>
      }
      {!bare &&
      <h3 style={{
        fontFamily: T.serif, fontWeight: 400,
        fontSize: isQuiz ? compact ? 26 : 32 : compact ? 22 : 26,
        lineHeight: 1.2, color: T.ink, margin: isQuiz ? '12px 0 10px' : '0 0 8px', letterSpacing: -0.3
      }}>{c.title}</h3>
      }
      {!bare &&
      <p style={{ fontSize: 14.5, lineHeight: 1.6, color: T.inkSoft, margin: '0 0 18px', maxWidth: 480 }}>{c.sub}</p>
      }
      <form onSubmit={(e) => { e.preventDefault(); if (!isQuiz) setSent(true); }} style={{ display: 'flex', gap: 8, flexWrap: 'wrap', maxWidth: 460 }}>
        <input placeholder={c.placeholder} style={{
          flex: '1 1 220px', padding: '12px 14px', fontSize: 14, fontFamily: T.sans,
          border: `1px solid ${T.hair}`, background: T.bg, borderRadius: T.rMd, color: T.ink, outline: 'none'
        }} />
        <button type="submit" className="btn-primary" style={{
          padding: '12px 18px', background: v.accent, color: v.accentFg,
          border: 'none', borderRadius: T.rMd, fontSize: 14, fontWeight: 500,
          fontFamily: T.sans, cursor: 'pointer'
        }}>{c.submit}</button>
      </form>
      <div style={{ fontSize: 11.5, color: T.inkMuted, marginTop: 12 }}>{c.note}</div>
    </div>);

}

function ArticleCardRU({ v, card, width, compact = false }) {
  return (
    <article style={{ width, fontFamily: T.sans, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <AtmosImage v={v} height={compact ? 140 : 200} label={card.image} tone={card.imageTone} />
      <div style={{ fontFamily: T.mono, fontSize: 11, letterSpacing: 1.6, textTransform: 'uppercase', color: v.accent, fontWeight: 500 }}>{card.kicker}</div>
      <h3 style={{
        fontFamily: T.serif, fontWeight: 400, fontSize: compact ? 20 : 24,
        lineHeight: 1.25, color: T.ink, margin: 0, letterSpacing: -0.2
      }}>{card.title}</h3>
      {card.summary && <p style={{ fontSize: 14.5, lineHeight: 1.6, color: T.inkSoft, margin: 0 }}>{card.summary}</p>}
      <div style={{ fontFamily: T.mono, fontSize: 11, color: T.inkMuted, letterSpacing: 0.6 }}>{card.meta}</div>
    </article>);

}

function IdeaSection({ v, layout = 'desktop' }) {
  const r = RU.idea;
  const wide = layout === 'desktop';
  return (
    <section style={{
      padding: wide ? '88px 64px' : '48px 20px',
      borderBottom: `1px solid ${T.hair}`
    }}>
      {/* Header */}
      <div style={{ marginBottom: wide ? 56 : 28, maxWidth: wide ? 880 : '100%' }}>
        <Kicker v={v}>{r.kicker}</Kicker>
        <h2 style={{
          fontFamily: T.serif, fontSize: wide ? 44 : 30, lineHeight: 1.1,
          margin: '14px 0 0', fontWeight: 400, color: T.ink, letterSpacing: -0.5,
          textWrap: 'balance'
        }}>
          <span>Старый код — и тихий </span>
          <span style={{ color: v.accent, fontStyle: 'italic' }}>Новый</span>
          <span> под ним.</span>
        </h2>
      </div>

      {/* Two intro paragraphs, equal weight */}
      <div style={{
        display: 'grid', gridTemplateColumns: wide ? '1fr 1fr' : '1fr',
        gap: wide ? 64 : 28
      }}>
        <CodeIntro side="old" v={v} kicker={r.oldK} body={r.oldBody} />
        <CodeIntro side="new" v={v} kicker={r.newK} body={r.newBody} />
      </div>

      {/* Paired comparison */}
      <div style={{ marginTop: wide ? 56 : 40 }}>
        <OldNewCompareRU v={v} pairs={r.pairs} layout={wide ? 'desktop' : 'mobile'} />
      </div>
    </section>);

}

function CodeIntro({ side, v, kicker, body }) {
  const old = side === 'old';
  return (
    <div style={{
      paddingTop: 18,
      borderTop: `2px solid ${old ? T.inkMuted : v.accent}`
    }}>
      <div style={{ marginBottom: 14 }}>
        <Kicker v={v} color={old ? T.inkMuted : v.accent}>{kicker}</Kicker>
      </div>
      <p style={{
        fontFamily: T.serif, fontSize: 19, lineHeight: 1.55, color: T.ink,
        margin: 0, textWrap: 'pretty'
      }}>{body}</p>
    </div>);

}

function RulesTableDesktop({ v, pairs }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '40px 1fr 56px 1fr', columnGap: 24,
      fontFamily: T.serif
    }}>
      {/* Column headings */}
      <div />
      <div style={{
        paddingBottom: 12, fontFamily: T.mono, fontSize: 10.5, letterSpacing: 1.2,
        textTransform: 'uppercase', color: T.inkMuted
      }}>Старый код говорит</div>
      <div />
      <div style={{
        paddingBottom: 12, fontFamily: T.mono, fontSize: 10.5, letterSpacing: 1.2,
        textTransform: 'uppercase', color: v.accent
      }}>Новый код говорит</div>

      {pairs.map(([oldR, newR], i) =>
      <React.Fragment key={i}>
          <div style={{
          padding: '18px 0', borderTop: `1px solid ${T.hair}`,
          fontFamily: T.mono, fontSize: 11, color: T.inkMuted, letterSpacing: 0.8,
          display: 'flex', alignItems: 'center'
        }}>0{i + 1}</div>
          <div style={{
          padding: '18px 0', borderTop: `1px solid ${T.hair}`,
          fontSize: 18, lineHeight: 1.45, color: T.inkSoft,
          textDecoration: 'line-through', textDecorationColor: T.inkMuted,
          textDecorationThickness: '1px'
        }}>{oldR}</div>
          <div style={{
          padding: '18px 0', borderTop: `1px solid ${T.hair}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: v.accent, fontFamily: T.mono, fontSize: 16
        }}>→</div>
          <div style={{
          padding: '18px 0', borderTop: `1px solid ${T.hair}`,
          fontSize: 18, lineHeight: 1.45, color: T.ink
        }}>{newR}</div>
        </React.Fragment>
      )}
    </div>);

}

function RulesTableMobile({ v, pairs }) {
  return (
    <div>
      {pairs.map(([oldR, newR], i) =>
      <div key={i} style={{
        padding: '18px 0', borderTop: `1px solid ${T.hair}`,
        fontFamily: T.serif
      }}>
          <div style={{
          fontFamily: T.mono, fontSize: 11, color: T.inkMuted, letterSpacing: 0.8,
          marginBottom: 8
        }}>0{i + 1}</div>
          <div style={{
          fontSize: 17, lineHeight: 1.45, color: T.inkSoft,
          textDecoration: 'line-through', textDecorationColor: T.inkMuted,
          textDecorationThickness: '1px'
        }}>{oldR}</div>
          <div style={{
          fontSize: 17, lineHeight: 1.45, color: T.ink,
          marginTop: 6, display: 'flex', gap: 8, alignItems: 'baseline'
        }}>
            <span style={{ color: v.accent, fontFamily: T.mono, fontSize: 14 }}>→</span>
            {newR}
          </div>
        </div>
      )}
    </div>);

}

function CodeColumnRU({ v, muted, kicker, body, bullets }) {
  // Legacy — kept as a thin no-op wrapper in case anything still imports it.
  // The Old/New section now uses <IdeaSection/>.
  return null;
}

function QuizPreviewRU({ v }) {
  const q = RU.quiz;
  return (
    <div style={{ background: T.bg, padding: 32, border: `1px solid ${T.hair}`, fontFamily: T.sans }} data-comment-anchor="af45cb87cb-div-347-5">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18, fontFamily: T.mono, fontSize: 10.5, color: T.inkMuted, letterSpacing: 0.8, textTransform: 'uppercase' }}>
        <span>{q.qHead}</span>
        <span>· · · · ● · · · · · · ·</span>
      </div>
      <h4 style={{
        fontFamily: T.serif, fontSize: 22, lineHeight: 1.35, color: T.ink,
        margin: '0 0 22px', fontWeight: 400, letterSpacing: -0.2
      }}>{q.qBody}</h4>
      {q.qAnswers.map((a, i) =>
      <label key={i} style={{
        display: 'flex', gap: 14, padding: '14px 16px', border: `1px solid ${T.hair}`,
        marginBottom: 8, cursor: 'pointer', fontSize: 14.5, color: T.ink, alignItems: 'flex-start',
        background: i === 2 ? v.accentSoft : T.bg
      }}>
          <span style={{
          width: 16, height: 16, borderRadius: 8, border: `1.5px solid ${i === 2 ? v.accent : T.hair}`,
          background: i === 2 ? v.accent : 'transparent', flexShrink: 0, marginTop: 1
        }} />
          {a}
        </label>
      )}
      <div style={{ fontFamily: T.mono, fontSize: 10.5, color: T.inkMuted, marginTop: 14, letterSpacing: 0.6 }}>{q.qFoot}</div>
    </div>);

}

function HomeDesktopRU({ v }) {
  const r = RU;
  return (
    <div style={{ background: T.bg, minHeight: '100%', boxSizing: 'border-box' }}>
      <NavRU v={v} active="home" wide />

      {/* Hero */}
      <section style={{
        padding: '88px 64px 72px', borderBottom: `1px solid ${T.hair}`,
        display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 80, alignItems: 'center'
      }}>
        <div>
          <Kicker v={v}>{r.hero.kicker}</Kicker>
          <h1 style={{
            fontFamily: T.serif, fontSize: 70, lineHeight: 1.04, margin: '24px 0 24px',
            fontWeight: 400, letterSpacing: -1.2, color: T.ink, textWrap: 'balance'
          }}>{r.hero.h}</h1>
          <p style={{
            fontFamily: T.serif, fontSize: 22, lineHeight: 1.5, color: T.inkSoft,
            margin: '0 0 36px', maxWidth: 560
          }}>{r.hero.sub}</p>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <PrimaryBtn v={v} size="lg">{r.hero.primary}</PrimaryBtn>
            <GhostBtn v={v} size="lg">{r.hero.ghost}</GhostBtn>
          </div>
        </div>
        <AtmosImage v={v} height={520} label="утренний свет · без фигур" tone="morning" />
      </section>

      {/* Author stripe */}
      <section style={{
        padding: '40px 64px', borderBottom: `1px solid ${T.hair}`, background: T.surfaceSoft,
        display: 'flex', alignItems: 'center', gap: 28, fontFamily: T.sans
      }}>
        <AuthorPortrait v={v} size={68} />
        <div style={{ flex: 1 }}>
          <Kicker v={v} color={T.inkMuted}>{r.author.kicker}</Kicker>
          <div style={{ fontFamily: T.serif, fontSize: 24, color: T.ink, marginTop: 6, lineHeight: 1.35, letterSpacing: -0.2 }}>
            {r.author.line}
          </div>
        </div>
        <TextLink v={v}>{r.author.link}</TextLink>
      </section>

      {/* Books shelf — полка автора, центр дома */}
      <BookShelfRU v={v} layout="desktop" />

      {/* Reading grid */}
      <section style={{ padding: '88px 64px', borderBottom: `1px solid ${T.hair}` }} data-comment-anchor="65d015250a-section-422-7">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48 }}>
          <h2 style={{
            fontFamily: T.serif, fontSize: 36, lineHeight: 1.15, margin: 0,
            fontWeight: 400, color: T.ink, letterSpacing: -0.4
          }}>{r.reading.title}</h2>
          <TextLink v={v}>{r.reading.all}</TextLink>
        </div>
        <div style={{ display: 'flex', gap: 12, marginBottom: 36, fontFamily: T.mono, fontSize: 11.5, letterSpacing: 0.8, color: T.inkSoft, textTransform: 'uppercase', flexWrap: 'wrap' }}>
          {r.reading.tags.map((t, i) =>
          <span key={t} style={{
            padding: '7px 14px', border: `1px solid ${T.hair}`, borderRadius: 999,
            color: i === 0 ? v.accentFg : T.inkSoft, background: i === 0 ? v.accent : 'transparent',
            borderColor: i === 0 ? v.accent : T.hair
          }}>{t}</span>
          )}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
          {r.reading.cards.map((c) =>
          <ArticleCardRU key={c.title} v={v} card={c} width="100%" />
          )}
        </div>
      </section>

      {/* Quiz */}
      <section style={{ padding: '88px 64px', borderBottom: `1px solid ${T.hair}` }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center',
          background: T.surfaceSoft, padding: '64px 56px', border: `1px solid ${T.hair}`
        }}>
          <EmailCaptureRU v={v} variant="quiz" />
          <div data-comment-anchor="af45cb87cb-div-347-5"><QuizPreviewCardRU v={v} /></div>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ padding: '88px 64px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <EmailCaptureRU v={v} variant="newsletter" />
        <AtmosImage v={v} height={300} label="послеобеденный свет · бумажный стол" tone="paper" accentTint />
      </section>

      {/* Обратная связь — тихая полоса */}
      <section style={{ padding: '64px 64px', borderTop: `1px solid ${T.hair}`, background: T.surfaceSoft }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 540 }}>
            <Kicker v={v}>{RU.contactBlock.kicker}</Kicker>
            <h2 style={{ fontFamily: T.serif, fontSize: 30, lineHeight: 1.2, fontWeight: 400, color: T.ink, letterSpacing: -0.4, margin: '12px 0 8px' }}>{RU.contactBlock.title}</h2>
            <p style={{ fontFamily: T.sans, fontSize: 15, lineHeight: 1.6, color: T.inkSoft, margin: 0 }}>{RU.contactBlock.sub}</p>
          </div>
          <PrimaryBtn v={v}>{RU.contactBlock.submit}</PrimaryBtn>
        </div>
      </section>

      <FooterRU v={v} wide />
    </div>);

}

function HomeMobileRU({ v }) {
  const r = RU;
  return (
    <div style={{ background: T.bg, minHeight: '100%', boxSizing: 'border-box' }}>
      <MobileNavRU v={v} />

      <section style={{ padding: '40px 20px 36px', borderBottom: `1px solid ${T.hair}` }}>
        <Kicker v={v}>{r.hero.kicker}</Kicker>
        <h1 style={{
          fontFamily: T.serif, fontSize: 38, lineHeight: 1.05, margin: '18px 0 16px',
          fontWeight: 400, letterSpacing: -0.7, color: T.ink, textWrap: 'balance'
        }}>{r.hero.h}</h1>
        <p style={{ fontFamily: T.serif, fontSize: 17, lineHeight: 1.5, color: T.inkSoft, margin: '0 0 24px' }}>
          {r.hero.sub}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PrimaryBtn v={v}>{r.hero.primary}</PrimaryBtn>
          <GhostBtn v={v}>{r.hero.ghost}</GhostBtn>
        </div>
        <div style={{ marginTop: 28 }}><AtmosImage v={v} height={200} label="утренний свет" tone="morning" /></div>
      </section>

      <section style={{ padding: '28px 20px', borderBottom: `1px solid ${T.hair}`, background: T.surfaceSoft }}>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <AuthorPortrait v={v} size={52} />
          <div style={{ flex: 1 }}>
            <Kicker v={v} color={T.inkMuted}>{r.author.kicker}</Kicker>
            <div style={{ fontFamily: T.serif, fontSize: 17, color: T.ink, marginTop: 4, lineHeight: 1.35 }}>{r.author.name}</div>
            <div style={{ fontFamily: T.serif, fontSize: 14.5, color: T.inkSoft, fontStyle: 'italic', lineHeight: 1.45 }}>
              {r.author.mobileSummary}
            </div>
          </div>
        </div>
        <div style={{ marginTop: 14 }}><TextLink v={v}>{r.author.link}</TextLink></div>
      </section>

      <BookShelfRU v={v} layout="mobile" />

      <section style={{ padding: '48px 20px', borderBottom: `1px solid ${T.hair}` }}>
        <h2 style={{ fontFamily: T.serif, fontSize: 28, lineHeight: 1.2, margin: '0 0 24px', fontWeight: 400, color: T.ink, letterSpacing: -0.3 }}>
          {r.reading.title}
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
          {r.reading.cards.map((c) =>
          <ArticleCardRU key={c.title} v={v} card={c} width="100%" />
          )}
        </div>
        <div style={{ marginTop: 28 }}><TextLink v={v}>{r.reading.all}</TextLink></div>
      </section>

      <section style={{ padding: '40px 20px', borderBottom: `1px solid ${T.hair}`, background: T.surfaceSoft }}>
        <EmailCaptureRU v={v} variant="quiz" compact />
      </section>

      <section style={{ padding: '40px 20px' }}>
        <EmailCaptureRU v={v} variant="newsletter" />
      </section>

      <section style={{ padding: '40px 20px', borderTop: `1px solid ${T.hair}`, background: T.surfaceSoft }}>
        <Kicker v={v}>{RU.contactBlock.kicker}</Kicker>
        <h2 style={{ fontFamily: T.serif, fontSize: 24, lineHeight: 1.2, fontWeight: 400, color: T.ink, letterSpacing: -0.3, margin: '12px 0 8px' }}>{RU.contactBlock.title}</h2>
        <p style={{ fontFamily: T.sans, fontSize: 14.5, lineHeight: 1.6, color: T.inkSoft, margin: '0 0 18px' }}>{RU.contactBlock.sub}</p>
        <PrimaryBtn v={v}>{RU.contactBlock.submit}</PrimaryBtn>
      </section>

      <FooterRU v={v} />
    </div>);

}

Object.assign(window, {
  NavRU, MobileNavRU, FooterRU, ReframeCalloutRU,
  PullQuoteRU, EmailCaptureRU, ArticleCardRU, CodeColumnRU, QuizPreviewRU,
  HomeDesktopRU, HomeMobileRU, IdeaSection
});