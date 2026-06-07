// screen-misc-ru.jsx — Contact, full Quiz page, 404 (desktop + mobile).
const T = window.TOKENS;

// ── CONTACT ──────────────────────────────────────────────────
function ContactRU({ v }) {
  const c = RU.contactPage;
  return (
    <div style={{ background: T.bg, minHeight: '100%', boxSizing: 'border-box' }}>
      <NavRU v={v} active="" wide />
      <PageHeaderRU v={v} crumb={c.crumb} kicker={c.kicker} title={c.title} sub={c.sub} />
      <section style={{ padding: '64px 64px 80px' }}>
        <ContactBlockRU v={v} />
      </section>
      <FooterRU v={v} wide />
    </div>
  );
}

function ContactMobileRU({ v }) {
  const c = RU.contactPage;
  return (
    <div style={{ background: T.bg, minHeight: '100%', boxSizing: 'border-box' }}>
      <MobileNavRU v={v} />
      <PageHeaderRU v={v} crumb={c.crumb} kicker={c.kicker} title={c.title} sub={c.sub} wide={false} />
      <section style={{ padding: '36px 20px 48px' }}>
        <ContactBlockRU v={v} layout="mobile" />
      </section>
      <FooterRU v={v} />
    </div>
  );
}

// ── NEWSLETTER (subscribe) ─────────────────────────
function NewsletterPoints({ v, wide }) {
  const n = RU.newsletterPage;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: wide ? 24 : 18 }}>
      {n.points.map(([head, body]) =>
        <div key={head} style={{ paddingTop: 16, borderTop: `2px solid ${v.accent}` }}>
          <div style={{ fontFamily: T.serif, fontSize: wide ? 19 : 17, color: T.ink, letterSpacing: -0.2, marginBottom: 5 }}>{head}</div>
          <p style={{ fontFamily: T.sans, fontSize: 14, lineHeight: 1.55, color: T.inkSoft, margin: 0 }}>{body}</p>
        </div>
      )}
    </div>
  );
}

function NewsletterRU({ v }) {
  const n = RU.newsletterPage;
  return (
    <div style={{ background: T.bg, minHeight: '100%', boxSizing: 'border-box' }}>
      <NavRU v={v} active="newsletter" wide />
      <PageHeaderRU v={v} crumb={n.crumb} kicker={n.kicker} title={n.title} sub={n.sub} />
      <section style={{
        padding: '64px 64px 80px', display: 'grid', gridTemplateColumns: '1.1fr 1fr',
        gap: 72, alignItems: 'start',
      }}>
        <div style={{ background: T.surfaceSoft, border: `1px solid ${T.hair}`, padding: '40px 44px' }}>
          <EmailCaptureRU v={v} variant="newsletter" bare />
        </div>
        <NewsletterPoints v={v} wide />
      </section>
      <FooterRU v={v} wide />
    </div>
  );
}

function NewsletterMobileRU({ v }) {
  const n = RU.newsletterPage;
  return (
    <div style={{ background: T.bg, minHeight: '100%', boxSizing: 'border-box' }}>
      <MobileNavRU v={v} />
      <PageHeaderRU v={v} crumb={n.crumb} kicker={n.kicker} title={n.title} sub={n.sub} wide={false} />
      <section style={{ padding: '32px 20px 24px' }}>
        <div style={{ background: T.surfaceSoft, border: `1px solid ${T.hair}`, padding: '28px 22px' }}>
          <EmailCaptureRU v={v} variant="newsletter" bare compact />
        </div>
      </section>
      <section style={{ padding: '8px 20px 48px' }}>
        <NewsletterPoints v={v} wide={false} />
      </section>
      <FooterRU v={v} />
    </div>
  );
}

// ── QUIZ PAGE (full flow) ────────────────────────────────────
function QuizPageRU({ v, demo = {} }) {
  return (
    <div style={{ background: T.surfaceSoft, minHeight: '100%', boxSizing: 'border-box' }}>
      <NavRU v={v} active="" wide />
      <section style={{ padding: '56px 64px 72px', maxWidth: 760, margin: '0 auto' }}>
        <QuizFlowRU v={v} {...demo} />
        <p style={{
          textAlign: 'center', marginTop: 24, fontFamily: T.sans, fontSize: 12.5,
          color: T.inkMuted, lineHeight: 1.6, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto',
        }}>
          Ответы никуда не отправляются, пока вы сами не решите оставить почту в конце.
        </p>
      </section>
      <FooterRU v={v} wide />
    </div>
  );
}

function QuizPageMobileRU({ v, demo = {} }) {
  return (
    <div style={{ background: T.surfaceSoft, minHeight: '100%', boxSizing: 'border-box' }}>
      <MobileNavRU v={v} />
      <section style={{ padding: '24px 16px 40px' }}>
        <QuizFlowRU v={v} compact {...demo} />
        <p style={{ textAlign: 'center', marginTop: 18, fontFamily: T.sans, fontSize: 12, color: T.inkMuted, lineHeight: 1.55 }}>
          Ответы никуда не отправляются, пока вы сами не решите оставить почту.
        </p>
      </section>
      <FooterRU v={v} />
    </div>
  );
}

// ── 404 ──────────────────────────────────────────────────────
function NotFoundInner({ v, wide }) {
  const n = RU.notFound;
  return (
    <section style={{
      padding: wide ? '120px 64px' : '72px 24px', textAlign: 'center',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      borderBottom: `1px solid ${T.hair}`,
    }}>
      {/* quiet typographic mark */}
      <div style={{ position: 'relative', marginBottom: 28 }}>
        <div style={{
          fontFamily: T.serif, fontSize: wide ? 140 : 92, lineHeight: 1, color: T.ink,
          letterSpacing: -4, fontWeight: 400,
        }}>{n.code}</div>
        <div style={{
          position: 'absolute', left: '50%', bottom: wide ? -6 : -2, transform: 'translateX(-50%)',
          width: wide ? 64 : 48, height: 2, background: v.accent,
        }} />
      </div>
      <h1 style={{ fontFamily: T.serif, fontSize: wide ? 38 : 28, fontWeight: 400, color: T.ink, letterSpacing: -0.4, margin: '0 0 14px' }}>{n.title}</h1>
      <p style={{ fontFamily: T.serif, fontStyle: 'italic', fontSize: wide ? 19 : 16, lineHeight: 1.55, color: T.inkSoft, margin: '0 0 32px', maxWidth: 420 }}>{n.sub}</p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', flexDirection: wide ? 'row' : 'column', alignItems: 'center' }}>
        <PrimaryBtn v={v}>{n.ctas[0]}</PrimaryBtn>
        <GhostBtn v={v}>{n.ctas[1]}</GhostBtn>
        <GhostBtn v={v}>{n.ctas[2]}</GhostBtn>
      </div>
    </section>
  );
}

function NotFoundRU({ v }) {
  return (
    <div style={{ background: T.bg, minHeight: '100%', boxSizing: 'border-box' }}>
      <NavRU v={v} active="" wide />
      <NotFoundInner v={v} wide />
      <FooterRU v={v} wide />
    </div>
  );
}

function NotFoundMobileRU({ v }) {
  return (
    <div style={{ background: T.bg, minHeight: '100%', boxSizing: 'border-box' }}>
      <MobileNavRU v={v} />
      <NotFoundInner v={v} wide={false} />
      <FooterRU v={v} />
    </div>
  );
}

Object.assign(window, {
  ContactRU, ContactMobileRU,
  NewsletterRU, NewsletterMobileRU,
  QuizPageRU, QuizPageMobileRU,
  NotFoundRU, NotFoundMobileRU,
});
