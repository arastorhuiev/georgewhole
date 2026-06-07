// blocks-ru.jsx — shared, reusable RU blocks used across multiple pages.
// Depends on: TOKENS (T), components.jsx (Kicker, PrimaryBtn, GhostBtn,
// TextLink, BookCover, AuthorPortrait, AtmosImage, Icon), ru-strings.

const T = window.TOKENS;

// small external-link glyph
const ExtArrow = (s = 11) => (
  <svg width={s} height={s} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M4 8l4-4M4.5 4H8v3.5" />
  </svg>
);
const Check = (s = 12) => (
  <svg width={s} height={s} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M3 7.5l2.5 2.5L11 4" />
  </svg>
);

// ─────────────────────────────────────────────────────────────
// OldNewCompareRU — symmetric "ledger" comparison with a central
// numbered spine. Left column mirrors right around the spine.
// ─────────────────────────────────────────────────────────────
function OldNewCompareRU({ v, pairs, layout = 'desktop' }) {
  if (layout === 'mobile') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {pairs.map(([oldR, newR], i) =>
          <div key={i} style={{
            border: `1px solid ${T.hair}`, background: T.surfaceSoft,
            padding: '18px 18px 16px', position: 'relative',
          }}>
            <div style={{
              position: 'absolute', top: 14, right: 14, fontFamily: T.mono,
              fontSize: 11, color: T.inkMuted, letterSpacing: 0.6,
            }}>0{i + 1}</div>
            <div style={{
              fontFamily: T.mono, fontSize: 9.5, letterSpacing: 1.4, textTransform: 'uppercase',
              color: T.inkMuted, marginBottom: 6,
            }}>Старый код</div>
            <div style={{
              fontFamily: T.serif, fontSize: 17, lineHeight: 1.4, color: T.inkMuted,
              textDecoration: 'line-through', textDecorationColor: 'rgba(140,132,120,0.5)',
              textDecorationThickness: '1px',
            }}>{oldR}</div>
            <div style={{
              height: 1, background: T.hair, margin: '14px 0 12px',
            }} />
            <div style={{
              fontFamily: T.mono, fontSize: 9.5, letterSpacing: 1.4, textTransform: 'uppercase',
              color: v.accent, marginBottom: 6, display: 'flex', alignItems: 'center', gap: 6,
            }}>{Check(12)} Новый код</div>
            <div style={{ fontFamily: T.serif, fontSize: 18, lineHeight: 1.4, color: T.ink }}>{newR}</div>
          </div>
        )}
      </div>
    );
  }

  // desktop: 1fr | spine | 1fr, mirrored
  return (
    <div className="oldnew" style={{ fontFamily: T.serif }}>
      {/* headers */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 64px 1fr', alignItems: 'end', marginBottom: 4 }}>
        <div style={{
          textAlign: 'right', fontFamily: T.mono, fontSize: 11, letterSpacing: 1.4,
          textTransform: 'uppercase', color: T.inkMuted, paddingBottom: 14,
        }}>Старый код говорит</div>
        <div />
        <div style={{
          textAlign: 'left', fontFamily: T.mono, fontSize: 11, letterSpacing: 1.4,
          textTransform: 'uppercase', color: v.accent, paddingBottom: 14,
        }}>Новый код говорит</div>
      </div>
      {pairs.map(([oldR, newR], i) =>
        <div key={i} style={{
          display: 'grid', gridTemplateColumns: '1fr 64px 1fr', alignItems: 'stretch',
        }}>
          {/* old — right aligned, muted, struck */}
          <div style={{
            textAlign: 'right', padding: '22px 0', borderTop: `1px solid ${T.hair}`,
            fontSize: 19, lineHeight: 1.4, color: T.inkMuted,
            textDecoration: 'line-through', textDecorationColor: 'rgba(140,132,120,0.45)',
            textDecorationThickness: '1px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
          }}>{oldR}</div>
          {/* spine node */}
          <div style={{ position: 'relative', borderTop: `1px solid ${T.hair}` }}>
            <div style={{
              position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1,
              background: T.hair, transform: 'translateX(-0.5px)',
            }} />
            <div style={{
              position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
              width: 32, height: 32, borderRadius: 16, background: T.bg,
              border: `1px solid ${v.accentHair}`, color: v.accent,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: T.mono, fontSize: 12, letterSpacing: 0.4,
            }}>0{i + 1}</div>
          </div>
          {/* new — left aligned, ink */}
          <div style={{
            textAlign: 'left', padding: '22px 0', borderTop: `1px solid ${T.hair}`,
            fontSize: 19, lineHeight: 1.4, color: T.ink, display: 'flex', alignItems: 'center',
          }}>{newR}</div>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// RetailerLinksRU — highlighted, separated store links (reusable)
// ─────────────────────────────────────────────────────────────
function RetailerLinksRU({ v, items, status, label }) {
  return (
    <div>
      {label &&
        <div style={{
          fontFamily: T.mono, fontSize: 10.5, letterSpacing: 1.4, textTransform: 'uppercase',
          color: T.inkMuted, marginBottom: 12,
        }}>{label}</div>}
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
        {items.map(([name, note]) =>
          <a key={name} className="retailer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '9px 14px',
            border: `1px solid ${v.accentHair}`, borderRadius: T.rMd, textDecoration: 'none',
            fontFamily: T.sans, color: T.ink, background: T.bg,
          }}>
            <span style={{ fontSize: 13.5, fontWeight: 600 }}>{name}</span>
            {note && <span style={{ fontSize: 11.5, color: T.inkMuted, fontFamily: T.mono, letterSpacing: 0.3 }}>{note}</span>}
            <span style={{ color: v.accent, display: 'inline-flex' }}>{ExtArrow(11)}</span>
          </a>
        )}
        {status &&
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: T.mono,
            fontSize: 11, letterSpacing: 0.6, textTransform: 'uppercase', color: v.accent,
            padding: '8px 0', marginLeft: 2,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 3, background: v.accent }} />
            {status}
          </span>}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// BookBlockRU — reusable book row with improved CTA spacing.
// ─────────────────────────────────────────────────────────────
function BookBlockRU({ v, compact = false }) {
  const b = RU.books;
  const r = [['Amazon', 'бумага · Kindle'], ['Gumroad', 'PDF · epub']];
  return (
    <article style={{
      display: 'grid', gridTemplateColumns: compact ? '120px 1fr' : '180px 1fr',
      gap: compact ? 20 : 32, alignItems: 'flex-start', fontFamily: T.sans,
    }}>
      <BookCover v={v} title={b.bookTitle} w={compact ? 120 : 180} h={compact ? 172 : 260} />
      <div>
        <Kicker v={v} color={T.inkMuted}>{b.bookKicker}</Kicker>
        <h3 style={{
          fontFamily: T.serif, fontWeight: 400, fontSize: compact ? 24 : 28, lineHeight: 1.2,
          color: T.ink, margin: '8px 0 6px', letterSpacing: -0.3,
        }}>{b.bookTitle}</h3>
        <p style={{ fontFamily: T.serif, fontSize: compact ? 15 : 16, fontStyle: 'italic', lineHeight: 1.5, color: T.inkSoft, margin: '0 0 14px' }}>{b.bookSub}</p>
        {!compact &&
          <p style={{ fontSize: 14.5, lineHeight: 1.65, color: T.inkSoft, margin: '0 0 22px', maxWidth: 480 }}>{b.bookBody}</p>}
        <PrimaryBtn v={v} size="sm">{b.bookCta}</PrimaryBtn>
        <div style={{ marginTop: 22 }}>
          <RetailerLinksRU v={v} items={r} status="Доступна" label="Также напрямую" />
        </div>
      </div>
    </article>
  );
}

// ─────────────────────────────────────────────────────────────
// BooksPromoRU — "go to the author's books" cross-link section.
// ─────────────────────────────────────────────────────────────
function BooksPromoRU({ v, layout = 'desktop' }) {
  const p = RU.booksPromo;
  const wide = layout === 'desktop';
  return (
    <section style={{
      padding: wide ? '72px 64px' : '44px 20px', borderBottom: `1px solid ${T.hair}`,
      background: T.surfaceSoft,
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: wide ? 'auto 1fr auto' : '1fr',
        gap: wide ? 36 : 22, alignItems: 'center',
      }}>
        <div style={{ display: 'flex', gap: 10 }}>
          <BookCover v={v} title="Новый Код" num="05" w={wide ? 96 : 84} h={wide ? 138 : 120} />
          <div style={{ alignSelf: 'flex-end', transform: 'rotate(-2deg)' }}>
            <BookCover v={v} cover="forth" title="Сложные отношения с едой" num="01"
              w={wide ? 78 : 70} h={wide ? 112 : 100}
              bg="#7A5747" fg="#FAF6EF" rule={v.accent} tagline="готовится" />
          </div>
        </div>
        <div>
          <Kicker v={v}>{p.kicker}</Kicker>
          <h2 style={{
            fontFamily: T.serif, fontSize: wide ? 32 : 24, lineHeight: 1.2, fontWeight: 400,
            color: T.ink, letterSpacing: -0.4, margin: '12px 0 8px', textWrap: 'balance',
          }}>{p.title}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: T.inkSoft, fontFamily: T.sans, margin: 0, maxWidth: 460 }}>{p.sub}</p>
        </div>
        <div style={{ justifySelf: wide ? 'end' : 'start' }}>
          <PrimaryBtn v={v}>{p.cta}</PrimaryBtn>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// ContactBlockRU — reusable contact form (topics + name/email/msg)
// ─────────────────────────────────────────────────────────────
function ContactBlockRU({ v, layout = 'desktop' }) {
  const c = RU.contactBlock;
  const wide = layout === 'desktop';
  const [topic, setTopic] = React.useState(0);
  const [sent, setSent] = React.useState(false);
  const labelCss = { fontFamily: T.mono, fontSize: 10.5, letterSpacing: 1.2, textTransform: 'uppercase', color: T.inkMuted, marginBottom: 8, display: 'block' };
  const inputCss = {
    width: '100%', boxSizing: 'border-box', padding: '12px 14px', fontSize: 14.5,
    fontFamily: T.sans, border: `1px solid ${T.hair}`, background: T.bg, borderRadius: T.rMd,
    color: T.ink, outline: 'none',
  };
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: wide ? '1.2fr 1fr' : '1fr', gap: wide ? 64 : 32,
      alignItems: 'flex-start', fontFamily: T.sans,
    }}>
      {/* form */}
      {sent ? (
        <div style={{ padding: wide ? '8px 0' : 0 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 40, height: 40, borderRadius: 20, background: v.accentSoft,
            color: v.accent, marginBottom: 18,
          }}>{Check(19)}</div>
          <h3 style={{
            fontFamily: T.serif, fontWeight: 400, fontSize: wide ? 30 : 24, lineHeight: 1.2,
            color: T.ink, letterSpacing: -0.4, margin: '0 0 10px',
          }}>{c.sentTitle}</h3>
          <p style={{ fontFamily: T.sans, fontSize: 15, lineHeight: 1.6, color: T.inkSoft, margin: '0 0 24px', maxWidth: 420 }}>{c.sentBody}</p>
          <button type="button" onClick={() => { setSent(false); }} className="btn-ghost" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 18px',
            background: 'transparent', color: T.ink, border: `1px solid ${T.hair}`,
            borderRadius: T.rPill, fontFamily: T.sans, fontSize: 13.5, fontWeight: 500, cursor: 'pointer',
          }}>{c.sentAgain}</button>
        </div>
      ) : (
      <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
        <div style={{ marginBottom: 22 }}>
          <span style={labelCss}>{c.topicsLabel}</span>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {c.topics.map((t, i) =>
              <button key={t} type="button" onClick={() => setTopic(i)} className="topicchip" style={{
                padding: '9px 16px', borderRadius: T.rPill, cursor: 'pointer', fontFamily: T.sans,
                fontSize: 13.5, fontWeight: 500,
                border: `1px solid ${i === topic ? v.accent : T.hair}`,
                background: i === topic ? v.accent : 'transparent',
                color: i === topic ? v.accentFg : T.inkSoft,
              }}>{t}</button>
            )}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: wide ? '1fr 1fr' : '1fr', gap: 16, marginBottom: 16 }}>
          <label style={{ display: 'block' }}>
            <span style={labelCss}>{c.nameLabel}</span>
            <input placeholder={c.namePh} style={inputCss} />
          </label>
          <label style={{ display: 'block' }}>
            <span style={labelCss}>{c.emailLabel}</span>
            <input placeholder={c.emailPh} style={inputCss} />
          </label>
        </div>
        <label style={{ display: 'block', marginBottom: 18 }}>
          <span style={labelCss}>{c.msgLabel}</span>
          <textarea placeholder={c.msgPh} rows={5} style={{ ...inputCss, resize: 'vertical', lineHeight: 1.6 }} />
        </label>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <button type="submit" className="btn-primary" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10, padding: '13px 22px',
            background: v.accent, color: v.accentFg, border: 'none', borderRadius: T.rPill,
            fontFamily: T.sans, fontSize: 14.5, fontWeight: 500, cursor: 'pointer',
          }}>{c.submit} {Icon.arrow(13)}</button>
          <span style={{ fontSize: 12, color: T.inkMuted, fontFamily: T.sans, maxWidth: 260, lineHeight: 1.5 }}>{c.fine}</span>
        </div>
      </form>
      )}
      {/* aside */}
      <aside style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div>
          <div style={{ fontFamily: T.mono, fontSize: 10.5, letterSpacing: 1.4, textTransform: 'uppercase', color: T.inkMuted, marginBottom: 6 }}>{c.elsewhereLabel}</div>
          {c.elsewhere.map(([name, note]) =>
            <a key={name} className="elsewhere" style={{
              display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12,
              padding: '13px 0', borderTop: `1px solid ${T.hairSoft}`, textDecoration: 'none',
            }}>
              <span style={{ fontFamily: T.serif, fontSize: 16, color: T.ink }}>{name}</span>
              <span style={{ fontSize: 12, color: T.inkMuted, fontFamily: T.sans, textAlign: 'right' }}>{note}</span>
            </a>
          )}
        </div>
      </aside>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// ArticleFigureRU — in-article image with caption (reusable)
// ─────────────────────────────────────────────────────────────
function ArticleFigureRU({ v, tone = 'dusk', height = 360, bleed = false, caption, credit }) {
  const f = RU.articleFigure;
  return (
    <figure style={{
      margin: bleed ? '40px -64px' : '40px 0', fontFamily: T.sans,
    }}>
      <AtmosImage v={v} height={height} label={credit || f.credit} tone={tone} accentTint />
      <figcaption style={{
        marginTop: 12, fontFamily: T.sans, fontSize: 13, color: T.inkMuted, lineHeight: 1.5,
        paddingLeft: bleed ? 64 : 0, paddingRight: bleed ? 64 : 0,
      }}>
        <span style={{ fontStyle: 'italic', fontFamily: T.serif, fontSize: 14.5, color: T.inkSoft }}>{caption || f.caption}</span>
      </figcaption>
    </figure>
  );
}

// ─────────────────────────────────────────────────────────────
// NextStepsRU — "where to go next" soft CTA trio (reusable)
// ─────────────────────────────────────────────────────────────
function NextStepsRU({ v, layout = 'desktop' }) {
  const a = RU.about;
  const wide = layout === 'desktop';
  return (
    <div style={{ fontFamily: T.sans }}>
      <Kicker v={v}>{a.nextKicker}</Kicker>
      <h2 style={{
        fontFamily: T.serif, fontSize: wide ? 36 : 26, lineHeight: 1.2, fontWeight: 400,
        letterSpacing: -0.4, margin: '14px 0 16px', color: T.ink,
      }}>{a.nextTitle}</h2>
      <p style={{
        fontSize: wide ? 16 : 15, lineHeight: 1.65, color: T.inkSoft, fontFamily: T.serif,
        fontStyle: 'italic', margin: '0 0 28px', maxWidth: 460,
      }}>{a.nextSub}</p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', flexDirection: wide ? 'row' : 'column' }}>
        <PrimaryBtn v={v}>{a.nextCtas[0]}</PrimaryBtn>
        <GhostBtn v={v}>{a.nextCtas[1]}</GhostBtn>
        <GhostBtn v={v}>{a.nextCtas[2]}</GhostBtn>
      </div>
    </div>
  );
}

Object.assign(window, {
  OldNewCompareRU, RetailerLinksRU, BookBlockRU, BooksPromoRU,
  ContactBlockRU, ArticleFigureRU, NextStepsRU, ExtArrow, Check,
});
