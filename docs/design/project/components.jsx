// components.jsx — shared building blocks for the New Code website mockups.
// All components take a `v` prop = a VARIANTS[key] object so we can render
// the same screen in sage or terracotta from one source.

const T = window.TOKENS;

// ── tiny SVG icons ──────────────────────────────────────────
const Icon = {
  arrow: (s = 14) => (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  ),
  globe: (s = 14) => (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3">
      <circle cx="8" cy="8" r="6"/><path d="M2 8h12M8 2c2 2 2 10 0 12M8 2c-2 2-2 10 0 12"/>
    </svg>
  ),
  chev: (s = 10) => (
    <svg width={s} height={s} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 4l3 3 3-3"/>
    </svg>
  ),
  quote: (s = 28) => (
    <svg width={s} height={s} viewBox="0 0 28 28" fill="currentColor">
      <path d="M4 18c0-5 3-9 8-10v3c-3 1-5 3-5 6h3v6H4v-5zm12 0c0-5 3-9 8-10v3c-3 1-5 3-5 6h3v6h-6v-5z" opacity=".4"/>
    </svg>
  ),
  envelope: (s = 14) => (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3">
      <rect x="2" y="3.5" width="12" height="9" rx="1"/><path d="M2 4l6 4 6-4"/>
    </svg>
  ),
  heart: (s = 14) => (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 13.5s-5-3.2-5-7.1c0-1.9 1.5-3.4 3.3-3.4 1 0 1.9.5 2.4 1.3.5-.8 1.4-1.3 2.4-1.3 1.8 0 3.3 1.5 3.3 3.4 0 3.9-5 7.1-5 7.1H8z"/>
    </svg>
  ),
  hamburger: (s = 18) => (
    <svg width={s} height={s} viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M3 5h12M3 9h12M3 13h12"/>
    </svg>
  ),
};

// ── atmospheric / abstract imagery placeholders (no people, no food) ──
// Soft striated SVG washes. The design brief calls for atmospheric imagery
// the user will replace later; these placeholders signal mood (light,
// texture, calm) without inventing illustrations.
function AtmosImage({ v, height = 360, label = 'image', tone = 'paper', radius = 0, accentTint = false }) {
  const id = React.useId().replace(/[:]/g, '');
  const toneMap = {
    paper: ['#E8E0CE', '#D9CFB6'],
    dusk:  ['#C9BDA4', '#A89A7E'],
    morning: ['#EFE7D4', '#DFD2B4'],
    deep:  ['#7A6A4E', '#574A36'],
  };
  const [c1, c2] = toneMap[tone] || toneMap.paper;
  const tint = accentTint ? v.accent : null;
  return (
    <div style={{
      position: 'relative', width: '100%', height, borderRadius: radius,
      overflow: 'hidden', background: c1,
    }}>
      <svg width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" style={{ display: 'block' }}>
        <defs>
          <linearGradient id={`g${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={c1}/>
            <stop offset="100%" stopColor={c2}/>
          </linearGradient>
          <pattern id={`p${id}`} width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(28)">
            <line x1="0" y1="0" x2="0" y2="3" stroke={c2} strokeWidth="0.6" opacity="0.55"/>
          </pattern>
        </defs>
        <rect width="800" height="600" fill={`url(#g${id})`}/>
        <rect width="800" height="600" fill={`url(#p${id})`}/>
        {tint && <rect width="800" height="600" fill={tint} opacity="0.07"/>}
        {/* soft horizon band */}
        <rect x="0" y="380" width="800" height="120" fill={c2} opacity="0.35"/>
        <rect x="0" y="500" width="800" height="100" fill={c2} opacity="0.55"/>
      </svg>
      <div style={{
        position: 'absolute', left: 12, bottom: 10, fontFamily: T.mono, fontSize: 10,
        letterSpacing: 0.5, textTransform: 'uppercase', color: 'rgba(42,39,35,0.45)',
      }}>изображение · {label}</div>
    </div>
  );
}

// ── Locale switcher ─────────────────────────────────────────
function LocaleSwitcher({ v, current = 'EN' }) {
  const locales = [
    { code: 'EN', name: 'English' },
    { code: 'UK', name: 'Українська' },
    { code: 'RU', name: 'Русский' },
    { code: 'ES', name: 'Español' },
  ];
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 10px',
      border: `1px solid ${T.hair}`, borderRadius: T.rPill, fontFamily: T.mono,
      fontSize: 11, color: T.inkSoft, letterSpacing: 0.6,
    }}>
      {Icon.globe(11)}
      {locales.map((l, i) => (
        <React.Fragment key={l.code}>
          {i > 0 && <span style={{ opacity: 0.35 }}>·</span>}
          <span className="localeopt" style={{
            color: l.code === current ? v.accent : T.inkSoft,
            fontWeight: l.code === current ? 700 : 400,
          }}>{l.code}</span>
        </React.Fragment>
      ))}
    </div>
  );
}

// ── Buttons ─────────────────────────────────────────────────
function PrimaryBtn({ v, children, size = 'md', icon = true }) {
  const pad = size === 'lg' ? '14px 22px' : size === 'sm' ? '8px 14px' : '11px 18px';
  const fs = size === 'lg' ? 15 : size === 'sm' ? 13 : 14;
  return (
    <a style={{
      display: 'inline-flex', alignItems: 'center', gap: 10, padding: pad,
      background: v.accent, color: v.accentFg, fontFamily: T.sans, fontSize: fs,
      fontWeight: 500, letterSpacing: 0.1, borderRadius: T.rPill, textDecoration: 'none',
      border: 'none',
    }} className="btn-primary">{children} {icon && Icon.arrow(13)}</a>
  );
}
function GhostBtn({ v, children, size = 'md' }) {
  const pad = size === 'lg' ? '13px 22px' : size === 'sm' ? '8px 14px' : '10px 18px';
  const fs = size === 'lg' ? 15 : size === 'sm' ? 13 : 14;
  return (
    <a style={{
      display: 'inline-flex', alignItems: 'center', gap: 10, padding: pad,
      background: 'transparent', color: T.ink, fontFamily: T.sans, fontSize: fs,
      fontWeight: 500, borderRadius: T.rPill, textDecoration: 'none',
      border: `1px solid ${T.hair}`,
    }} className="btn-ghost">{children}</a>
  );
}
function TextLink({ v, children }) {
  return (
    <a style={{
      display: 'inline-flex', alignItems: 'center', gap: 6, color: v.accent,
      fontFamily: T.sans, fontSize: 14, fontWeight: 500, textDecoration: 'none',
      borderBottom: `1px solid ${v.accentHair}`, paddingBottom: 1,
    }} className="textlink">{children} {Icon.arrow(12)}</a>
  );
}

// ── Tag / kicker ─────────────────────────────────────────────
function Kicker({ v, children, color }) {
  return (
    <div style={{
      fontFamily: T.mono, fontSize: 11, letterSpacing: 1.6, textTransform: 'uppercase',
      color: color || v.accent, fontWeight: 500,
    }}>{children}</div>
  );
}

// ── Article card ────────────────────────────────────────────
function ArticleCard({ v, kicker, title, meta, summary, width, image, imageTone = 'paper', compact = false }) {
  return (
    <article style={{
      width, fontFamily: T.sans, display: 'flex', flexDirection: 'column', gap: 12,
    }}>
      {image && (
        <AtmosImage v={v} height={compact ? 140 : 200} label={image} tone={imageTone}/>
      )}
      <Kicker v={v}>{kicker}</Kicker>
      <h3 style={{
        fontFamily: T.serif, fontWeight: 400, fontSize: compact ? 20 : 24,
        lineHeight: 1.25, color: T.ink, margin: 0, letterSpacing: -0.2,
      }}>{title}</h3>
      {summary && <p style={{
        fontSize: 14.5, lineHeight: 1.6, color: T.inkSoft, margin: 0, fontFamily: T.sans,
      }}>{summary}</p>}
      <div style={{ fontFamily: T.mono, fontSize: 11, color: T.inkMuted, letterSpacing: 0.6 }}>
        {meta}
      </div>
    </article>
  );
}

// ── Pull quote ──────────────────────────────────────────────
function PullQuote({ v, children, attribution }) {
  return (
    <figure style={{
      margin: '36px 0', padding: '24px 0 24px 28px',
      borderLeft: `2px solid ${v.accent}`, fontFamily: T.serif,
    }}>
      <blockquote style={{
        margin: 0, fontSize: 26, lineHeight: 1.45, color: T.ink, fontStyle: 'italic',
        letterSpacing: -0.2, fontWeight: 400,
      }}>“{children}”</blockquote>
      {attribution && (
        <figcaption style={{
          marginTop: 14, fontFamily: T.mono, fontSize: 11, letterSpacing: 0.8,
          textTransform: 'uppercase', color: T.inkMuted,
        }}>{attribution}</figcaption>
      )}
    </figure>
  );
}

// ── Reframe callout — "it's not willpower" ──────────────────
function ReframeCallout({ v, label = 'A gentler frame', children }) {
  return (
    <aside style={{
      margin: '32px 0', background: v.callout, padding: '24px 28px',
      borderTop: `2px solid ${v.accent}`, fontFamily: T.serif, color: T.ink,
    }}>
      <div style={{
        fontFamily: T.mono, fontSize: 11, letterSpacing: 1.6, textTransform: 'uppercase',
        color: v.accent, marginBottom: 10, fontWeight: 500,
      }}>{label}</div>
      <div style={{ fontSize: 19, lineHeight: 1.55, fontStyle: 'italic' }}>{children}</div>
    </aside>
  );
}

// ── Author byline (article header) ──────────────────────────────────
function AuthorByline({ v, layout = 'inline' }) {
  if (layout === 'stack') {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontFamily: T.sans }}>
        <AuthorPortrait v={v} size={48}/>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: T.ink }}>By georgewhole</div>
          <div style={{ fontSize: 13, color: T.inkSoft, lineHeight: 1.4 }}>
            Writes from lived experience of recovery (b. 1962).
          </div>
        </div>
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: T.sans }}>
      <AuthorPortrait v={v} size={36}/>
      <div style={{ fontSize: 13, color: T.inkSoft, lineHeight: 1.45 }}>
        <span style={{ color: T.ink, fontWeight: 600 }}>georgewhole</span> · writes from lived experience of recovery
      </div>
    </div>
  );
}

function AuthorPortrait({ v, size = 56 }) {
  // abstract placeholder — calm tonal disc + initials
  return (
    <div style={{
      width: size, height: size, borderRadius: size / 2, flexShrink: 0,
      background: 'linear-gradient(135deg, #D9CFB6 0%, #A89A7E 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'rgba(42,39,35,0.55)', fontFamily: T.serif, fontSize: size * 0.42,
      letterSpacing: 0.5, fontStyle: 'italic',
      border: `1px solid ${T.hair}`,
    }}>gw</div>
  );
}

// ── Book block (REUSABLE platform component) ────────────────
function BookBlock({ v, title, subtitle, edition, status = 'available', cover = 'newcode' }) {
  const statusLabel = status === 'available' ? 'Available now' :
                      status === 'forthcoming' ? 'Forthcoming · 2026' : status;
  return (
    <article style={{
      display: 'grid', gridTemplateColumns: '180px 1fr', gap: 32, alignItems: 'flex-start',
      fontFamily: T.sans, padding: '8px 0',
    }}>
      <BookCover v={v} cover={cover} title={title}/>
      <div>
        <Kicker v={v} color={T.inkMuted}>Book · {edition}</Kicker>
        <h3 style={{
          fontFamily: T.serif, fontWeight: 400, fontSize: 28, lineHeight: 1.2,
          color: T.ink, margin: '8px 0 6px', letterSpacing: -0.3,
        }}>{title}</h3>
        {subtitle && <p style={{
          fontSize: 16, lineHeight: 1.5, color: T.inkSoft, margin: '0 0 14px',
          fontStyle: 'italic', fontFamily: T.serif,
        }}>{subtitle}</p>}
        <p style={{ fontSize: 14.5, lineHeight: 1.65, color: T.inkSoft, margin: '0 0 18px', maxWidth: 480 }}>
          A short, plain-spoken book about the rules we never agreed to follow —
          and a quieter way to feed yourself, written from the other side of recovery.
        </p>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
          <PrimaryBtn v={v} size="sm">Get the book</PrimaryBtn>
          <span style={{ fontSize: 12, color: T.inkMuted, fontFamily: T.mono, letterSpacing: 0.4 }}>
            Amazon · Gumroad · {statusLabel}
          </span>
        </div>
      </div>
    </article>
  );
}

function BookCover({ v, cover = 'newcode', title = 'Новый Код', num, w = 180, h = 260, bg, fg, rule, byline = 'georgewhole', tagline = 'georgewhole.com' }) {
  // typographic cover placeholder, designed in-system. Each book can pass its
  // own bg/fg/rule so the shelf reads as a body of work, not one repeated cover.
  const isNewCode = cover === 'newcode';
  const coverBg = bg || (isNewCode ? '#2A2723' : v.accentDeep);
  const coverFg = fg || (isNewCode ? '#FAF6EF' : v.accentFg);
  const ruleColor = rule || v.accent;
  return (
    <div style={{
      width: w, height: h, background: coverBg,
      color: coverFg, padding: 18, boxSizing: 'border-box',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      fontFamily: T.serif, boxShadow: '4px 6px 0 rgba(42,39,35,0.08), 0 1px 3px rgba(0,0,0,0.18)',
      position: 'relative', overflow: 'hidden',
    }} className="bookcover">
      <div style={{ fontFamily: T.mono, fontSize: 9.5, letterSpacing: 1.6, textTransform: 'uppercase', opacity: 0.65 }}>
        {byline}
      </div>
      <div>
        {num != null && <div style={{
          fontFamily: T.serif, fontSize: Math.round(w * 0.36), lineHeight: 0.86,
          fontWeight: 400, letterSpacing: -1.5, marginBottom: 12, opacity: 0.9,
        }}>{num}</div>}
        <div style={{
          fontSize: num != null ? Math.max(13, Math.round(w * 0.115)) : 24,
          lineHeight: num != null ? 1.14 : 1.1, fontWeight: 400, letterSpacing: -0.3,
        }}>
          {num != null ? title : title.split(' ').map((word, i) => <div key={i}>{word}</div>)}
        </div>
        <div style={{
          width: 36, height: 2, background: ruleColor, marginTop: 10,
        }}/>
      </div>
      <div style={{
        fontFamily: T.mono, fontSize: 9, letterSpacing: 1.2, opacity: 0.55, textTransform: 'uppercase',
      }}>{tagline}</div>
    </div>
  );
}

// ── Sources / citations row (trust furniture) ───────────────
function Sources({ v }) {
  return (
    <section style={{
      margin: '40px 0 0', padding: '24px 0', borderTop: `1px solid ${T.hair}`,
      fontFamily: T.sans, color: T.inkSoft,
    }}>
      <Kicker v={v} color={T.inkMuted}>Sources & further reading</Kicker>
      <ol style={{ margin: '14px 0 0', paddingLeft: 18, fontSize: 13.5, lineHeight: 1.7 }}>
        <li>Tribole, E. & Resch, E. <em>Intuitive Eating</em>, 4th ed. (2020).</li>
        <li>Bacon, L. <em>Health at Every Size</em> (2010).</li>
        <li>Linehan, M. M. <em>DBT Skills Training Manual</em> (2014).</li>
        <li>Reviewed by Dr. M. Karim, clinical psychologist · last updated April 2026.</li>
      </ol>
    </section>
  );
}

Object.assign(window, {
  LocaleSwitcher, PrimaryBtn, GhostBtn, TextLink, Kicker,
  ArticleCard, PullQuote, ReframeCallout, AuthorByline,
  AuthorPortrait, BookBlock, BookCover, AtmosImage, Sources, Icon,
});
