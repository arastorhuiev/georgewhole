// screen-about-ru.jsx — About the author (desktop + mobile) in Russian

const T = window.TOKENS;

function AboutDesktopRU({ v }) {
  const a = RU.about;
  return (
    <div style={{ background: T.bg, minHeight: '100%', boxSizing: 'border-box' }}>
      <NavRU v={v} active="about" wide />

      <section style={{
        padding: '80px 64px 64px', borderBottom: `1px solid ${T.hair}`,
        display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 72, alignItems: 'center'
      }}>
        <div>
          <Kicker v={v}>{a.kicker}</Kicker>
          <h1 style={{
            fontFamily: T.serif, fontSize: 54, lineHeight: 1.07, margin: '20px 0 24px',
            fontWeight: 400, color: T.ink, letterSpacing: -0.9, textWrap: 'balance'
          }}>{a.h}</h1>
          <p style={{
            fontFamily: T.serif, fontSize: 20, lineHeight: 1.55, color: T.inkSoft,
            margin: 0, fontStyle: 'italic', maxWidth: 540
          }}>{a.sub}</p>
        </div>
        <div style={{ position: 'relative' }}>
          <AtmosImage v={v} height={460} label="автор за столом · плейсхолдер" tone="dusk" accentTint />
          <div style={{
            position: 'absolute', left: -32, bottom: -28, background: T.bg,
            padding: '18px 22px', border: `1px solid ${T.hair}`, fontFamily: T.sans,
            maxWidth: 300, boxShadow: T.paper
          }}>
            <div style={{ fontFamily: T.mono, fontSize: 10.5, color: T.inkMuted, letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 6 }}>{a.brief}</div>
            <div style={{ fontFamily: T.serif, fontSize: 16, color: T.ink, lineHeight: 1.4 }}>
              {RU.author.briefLine}
            </div>
          </div>
        </div>
      </section>

      <section style={{
        padding: '88px 64px', borderBottom: `1px solid ${T.hair}`,
        display: 'grid', gridTemplateColumns: '220px 1fr', gap: 56, alignItems: 'flex-start'
      }} data-comment-anchor="8417841910-section-41-7">
        <aside style={{ position: 'sticky', top: 32 }}>
          <div style={{ fontFamily: T.mono, fontSize: 10.5, letterSpacing: 1.4, textTransform: 'uppercase', color: T.inkMuted, marginBottom: 14 }}>
            {a.timelineLabel}
          </div>
          {a.timeline.map(([y, t]) =>
          <div key={y} style={{
            display: 'grid', gridTemplateColumns: '52px 1fr', gap: 8, fontFamily: T.sans,
            padding: '10px 0', borderTop: `1px solid ${T.hairSoft}`, fontSize: 13
          }}>
              <span style={{ fontFamily: T.mono, color: v.accent, letterSpacing: 0.4 }}>{y}</span>
              <span style={{ color: T.inkSoft, lineHeight: 1.4 }}>{t}</span>
            </div>
          )}
        </aside>
        <article style={{
          maxWidth: '70ch', fontFamily: T.serif, color: T.ink, fontSize: 20, lineHeight: 1.7, justifySelf: 'center'
        }}>
          <h2 style={{ fontFamily: T.serif, fontSize: 32, lineHeight: 1.2, fontWeight: 400, letterSpacing: -0.4, margin: '0 0 24px' }}>{a.h2_1}</h2>
          <p style={{ margin: '0 0 24px' }}>{a.p1}</p>
          <p style={{ margin: '0 0 24px' }}>{a.p2}</p>

          <PullQuoteRU v={v} attribution={a.pullBy}>{a.pull}</PullQuoteRU>

          <h2 style={{ fontFamily: T.serif, fontSize: 32, lineHeight: 1.2, fontWeight: 400, letterSpacing: -0.4, margin: '40px 0 24px' }}>{a.h2_2}</h2>
          <p style={{ margin: '0 0 24px' }}>{a.p3}</p>
          <p style={{ margin: '0 0 24px' }}>{a.p4}</p>

          <h2 style={{ fontFamily: T.serif, fontSize: 32, lineHeight: 1.2, fontWeight: 400, letterSpacing: -0.4, margin: '40px 0 24px' }}>{a.h2_3}</h2>
          <p style={{ margin: '0 0 12px' }}>{a.p5}</p>
          <ul style={{
            margin: '20px 0 24px', padding: 0, listStyle: 'none', fontSize: 17.5, lineHeight: 1.65, color: T.inkSoft,
            fontFamily: T.sans
          }}>
            {a.nots.map((b) =>
            <li key={b} style={{ padding: '8px 0', borderTop: `1px solid ${T.hairSoft}`, display: 'flex', gap: 12 }}>
                <span style={{ color: v.accent, fontFamily: T.mono, marginTop: 1 }}>—</span>{b}
              </li>
            )}
          </ul>
        </article>
      </section>

      <section style={{ padding: '80px 64px', borderBottom: `1px solid ${T.hair}`, background: T.surfaceSoft }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56, alignItems: 'flex-start' }}>
          <div>
            <Kicker v={v}>{a.credKicker}</Kicker>
            <h2 style={{ fontFamily: T.serif, fontSize: 32, lineHeight: 1.2, fontWeight: 400, letterSpacing: -0.4, margin: '14px 0 20px', color: T.ink }}>
              {a.credTitle}
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: T.inkSoft, fontFamily: T.sans, margin: 0 }}>{a.credIntro}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {a.credCards.map(([k, t, b]) =>
            <div key={t} style={{ background: T.bg, padding: 22, border: `1px solid ${T.hair}`, fontFamily: T.sans }}>
                <Kicker v={v}>{k}</Kicker>
                <h4 style={{ fontFamily: T.serif, fontSize: 19, color: T.ink, margin: '10px 0 8px', lineHeight: 1.3, fontWeight: 400, letterSpacing: -0.2 }}>{t}</h4>
                <p style={{ fontSize: 13.5, lineHeight: 1.6, color: T.inkSoft, margin: 0 }}>{b}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section style={{ padding: '88px 64px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <Kicker v={v}>{a.nextKicker}</Kicker>
          <h2 style={{ fontFamily: T.serif, fontSize: 36, lineHeight: 1.2, fontWeight: 400, letterSpacing: -0.4, margin: '14px 0 16px', color: T.ink }}>
            {a.nextTitle}
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: T.inkSoft, fontFamily: T.serif, fontStyle: 'italic', margin: '0 0 28px', maxWidth: 460 }}>
            {a.nextSub}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <PrimaryBtn v={v}>{a.nextCtas[0]}</PrimaryBtn>
            <GhostBtn v={v}>{a.nextCtas[1]}</GhostBtn>
            <GhostBtn v={v}>{a.nextCtas[2]}</GhostBtn>
          </div>
        </div>
        <div style={{ padding: 32, background: T.surfaceSoft, border: `1px solid ${T.hair}`, fontFamily: T.sans }}>
          <Kicker v={v} color={T.inkMuted}>{a.letterKicker}</Kicker>
          <h3 style={{ fontFamily: T.serif, fontSize: 22, lineHeight: 1.3, fontWeight: 400, color: T.ink, margin: '10px 0 12px', letterSpacing: -0.2 }}>
            {a.letterTitle}
          </h3>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: T.inkSoft, margin: '0 0 18px' }}>{a.letterSub}</p>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: 8 }}>
            <input placeholder={RU.newsletter.placeholder} style={{
              flex: 1, padding: '11px 14px', border: `1px solid ${T.hair}`, background: T.bg,
              color: T.ink, fontFamily: T.sans, fontSize: 14, borderRadius: T.rMd, outline: 'none'
            }} />
            <button style={{
              padding: '11px 18px', background: v.accent, color: v.accentFg, border: 'none',
              borderRadius: T.rMd, fontFamily: T.sans, fontSize: 14, fontWeight: 500, cursor: 'pointer'
            }}>{RU.newsletter.submit}</button>
          </form>
        </div>
      </section>

      <FooterRU v={v} wide />
    </div>);

}

function AboutMobileRU({ v }) {
  const a = RU.about;
  return (
    <div style={{ background: T.bg, minHeight: '100%', boxSizing: 'border-box' }}>
      <MobileNavRU v={v} />
      <section style={{ padding: '36px 20px 32px', borderBottom: `1px solid ${T.hair}` }}>
        <Kicker v={v}>{a.kicker}</Kicker>
        <h1 style={{
          fontFamily: T.serif, fontSize: 32, lineHeight: 1.1, margin: '14px 0 16px',
          fontWeight: 400, color: T.ink, letterSpacing: -0.5, textWrap: 'balance'
        }}>{a.h}</h1>
        <p style={{ fontFamily: T.serif, fontSize: 17, lineHeight: 1.55, color: T.inkSoft, margin: '0 0 22px', fontStyle: 'italic' }}>
          {a.sub}
        </p>
        <AtmosImage v={v} height={240} label="автор за столом" tone="dusk" accentTint />
        <div style={{
          marginTop: 16, padding: '14px 16px', border: `1px solid ${T.hair}`, fontFamily: T.sans,
          background: T.surfaceSoft
        }}>
          <div style={{ fontFamily: T.mono, fontSize: 10, color: T.inkMuted, letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 4 }}>{a.brief}</div>
          <div style={{ fontFamily: T.serif, fontSize: 15, color: T.ink, lineHeight: 1.45 }}>
            {RU.author.briefLine}
          </div>
        </div>
      </section>

      <section style={{ padding: '40px 20px', borderBottom: `1px solid ${T.hair}` }}>
        <article style={{ fontFamily: T.serif, color: T.ink, fontSize: 18, lineHeight: 1.7 }}>
          <h2 style={{ fontFamily: T.serif, fontSize: 24, lineHeight: 1.25, fontWeight: 400, margin: '0 0 16px', letterSpacing: -0.3 }}>
            {a.h2_1}
          </h2>
          <p style={{ margin: '0 0 20px' }}>{a.p1}</p>
          <p style={{ margin: '0 0 20px' }}>{a.p2}</p>
          <PullQuoteRU v={v} attribution={a.pullBy}>{a.pull}</PullQuoteRU>
          <h2 style={{ fontFamily: T.serif, fontSize: 24, lineHeight: 1.25, fontWeight: 400, margin: '32px 0 16px', letterSpacing: -0.3 }}>
            {a.h2_3}
          </h2>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', fontSize: 15.5, lineHeight: 1.6, color: T.inkSoft, fontFamily: T.sans }}>
            {a.nots.map((b) =>
            <li key={b} style={{ padding: '7px 0', borderTop: `1px solid ${T.hairSoft}`, display: 'flex', gap: 10 }}>
                <span style={{ color: v.accent, fontFamily: T.mono }}>—</span>{b}
              </li>
            )}
          </ul>
        </article>
      </section>

      <section style={{ padding: '36px 20px', background: T.surfaceSoft, borderBottom: `1px solid ${T.hair}` }}>
        <Kicker v={v}>{a.credKicker}</Kicker>
        <h3 style={{ fontFamily: T.serif, fontSize: 22, lineHeight: 1.3, fontWeight: 400, color: T.ink, margin: '12px 0 18px', letterSpacing: -0.2 }}>
          {a.credTitle}
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {a.credCards.map(([k, t, b]) =>
          <div key={t} style={{ background: T.bg, padding: 18, border: `1px solid ${T.hair}`, fontFamily: T.sans }}>
              <Kicker v={v}>{k}</Kicker>
              <h4 style={{ fontFamily: T.serif, fontSize: 17, color: T.ink, margin: '8px 0 6px', lineHeight: 1.3, fontWeight: 400, letterSpacing: -0.2 }}>{t}</h4>
              <p style={{ fontSize: 13, lineHeight: 1.55, color: T.inkSoft, margin: 0 }}>{b}</p>
            </div>
          )}
        </div>
      </section>

      <section style={{ padding: '40px 20px' }}>
        <Kicker v={v}>{a.nextKicker}</Kicker>
        <h2 style={{ fontFamily: T.serif, fontSize: 26, lineHeight: 1.2, fontWeight: 400, margin: '12px 0 14px', color: T.ink, letterSpacing: -0.3 }}>
          {a.nextTitle}
        </h2>
        <p style={{ fontFamily: T.serif, fontStyle: 'italic', fontSize: 16, color: T.inkSoft, lineHeight: 1.55, margin: '0 0 22px' }}>
          {a.nextSub}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PrimaryBtn v={v}>{a.nextCtas[0]}</PrimaryBtn>
          <GhostBtn v={v}>{a.nextCtas[1]}</GhostBtn>
          <GhostBtn v={v}>{a.nextCtas[2]}</GhostBtn>
        </div>
      </section>

      <FooterRU v={v} />
    </div>);

}

window.AboutDesktopRU = AboutDesktopRU;
window.AboutMobileRU = AboutMobileRU;