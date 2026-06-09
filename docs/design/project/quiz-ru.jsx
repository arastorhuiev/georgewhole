// quiz-ru.jsx — interactive 12-question quiz flow + home preview card.
// Clarifies how the quiz works: answer 12 → see result instantly (no email),
// optional weekly letter at the end. Lettered tiles, segmented progress, timer.

const T = window.TOKENS;

function fmtTime(s) {
  const m = Math.floor(s / 60), ss = s % 60;
  return `${m}:${ss < 10 ? '0' : ''}${ss}`;
}

// Editorial lettered-tile option (А/Б/В/Г) — no round radios.
function QuizOption({ v, label, selected, onClick, idx }) {
  const letter = 'АБВГДЕ'[idx] || String.fromCharCode(65 + idx);
  return (
    <label onClick={onClick} className="quizopt" style={{
      display: 'flex', gap: 14, padding: '14px 16px', cursor: 'pointer',
      border: `1px solid ${selected ? v.accent : T.hair}`, borderRadius: T.rSm,
      background: selected ? v.accentSoft : T.bg, alignItems: 'center',
      fontFamily: T.sans, fontSize: 15, color: T.ink, lineHeight: 1.4,
      transition: 'border-color .15s ease, background .15s ease',
    }}>
      <span style={{
        width: 27, height: 27, flexShrink: 0, borderRadius: T.rSm,
        border: `1px solid ${selected ? v.accent : T.hair}`,
        background: selected ? v.accent : 'transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: T.mono, fontSize: 12, letterSpacing: 0.2,
        color: selected ? v.accentFg : T.inkMuted,
        transition: 'all .15s ease',
      }}>{letter}</span>
      <span>{label}</span>
    </label>
  );
}

// Segmented progress: one thin tick per question. Current = accent,
// answered = soft accent, upcoming = hairline. No round nodes.
function QuizProgress({ v, total, idx, answered }) {
  return (
    <div style={{ display: 'flex', gap: 4 }}>
      {Array.from({ length: total }).map((_, i) => {
        const isCur = i === idx;
        const isDone = answered[i] != null;
        return (
          <span key={i} style={{
            flex: 1, height: 5,
            background: isCur ? v.accent : isDone ? v.accentHair : T.hairSoft,
            transition: 'background .25s ease',
          }} />
        );
      })}
    </div>
  );
}

function QuizFlowRU({ v, compact = false, initialStage = 'intro', initialIdx = 0, initialAnswers = null, initialSecs = 0 }) {
  const q = RU.quiz12;
  const [stage, setStage] = React.useState(initialStage); // intro | q | result
  const [idx, setIdx] = React.useState(initialIdx);
  const [answers, setAnswers] = React.useState(initialAnswers || Array(q.questions.length).fill(null));
  const [secs, setSecs] = React.useState(initialSecs);

  React.useEffect(() => {
    if (stage !== 'q') return;
    const t = setInterval(() => setSecs((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [stage]);

  const pad = compact ? '24px 20px' : '40px 44px';
  const shell = {
    background: T.bg, border: `1px solid ${T.hair}`, fontFamily: T.sans,
    padding: pad, boxShadow: T.paper,
  };

  // ---- INTRO ----
  if (stage === 'intro') {
    return (
      <div style={shell}>
        <Kicker v={v}>{q.kicker}</Kicker>
        <h3 style={{
          fontFamily: T.serif, fontWeight: 400, fontSize: compact ? 28 : 34, lineHeight: 1.15,
          color: T.ink, margin: '12px 0 12px', letterSpacing: -0.4,
        }}>{q.title}</h3>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: T.inkSoft, margin: '0 0 22px', maxWidth: 520 }}>{q.sub}</p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 26 }}>
          {q.meta.map((m) =>
            <span key={m} style={{
              fontFamily: T.mono, fontSize: 11, letterSpacing: 0.6, color: T.inkSoft,
              border: `1px solid ${T.hair}`, borderRadius: T.rPill, padding: '6px 12px',
            }}>{m}</span>
          )}
        </div>
        <button onClick={() => { setStage('q'); setSecs(0); }} className="btn-primary" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10, padding: '13px 22px',
          background: v.accent, color: v.accentFg, border: 'none', borderRadius: T.rPill,
          fontFamily: T.sans, fontSize: 15, fontWeight: 500, cursor: 'pointer',
        }}>{q.startCta} {Icon.arrow(13)}</button>

        <div style={{ marginTop: 30, paddingTop: 24, borderTop: `1px solid ${T.hairSoft}` }}>
          <div style={{ fontFamily: T.mono, fontSize: 10.5, letterSpacing: 1.4, textTransform: 'uppercase', color: T.inkMuted, marginBottom: 16 }}>{q.howLabel}</div>
          <div style={{ display: 'grid', gridTemplateColumns: compact ? '1fr' : 'repeat(3, 1fr)', gap: compact ? 14 : 24 }}>
            {q.how.map(([n, h, b]) =>
              <div key={n}>
                <div style={{ fontFamily: T.serif, fontSize: 24, color: v.accent, lineHeight: 1, marginBottom: 8 }}>{n}</div>
                <div style={{ fontFamily: T.sans, fontSize: 14, fontWeight: 600, color: T.ink, marginBottom: 4 }}>{h}</div>
                <p style={{ fontSize: 13, lineHeight: 1.55, color: T.inkSoft, margin: 0 }}>{b}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ---- RESULT ----
  if (stage === 'result') {
    return (
      <div style={shell}>
        <Kicker v={v}>{q.resultKicker}</Kicker>
        <h3 style={{
          fontFamily: T.serif, fontWeight: 400, fontSize: compact ? 26 : 32, lineHeight: 1.2,
          color: T.ink, margin: '12px 0 14px', letterSpacing: -0.4,
        }}>{q.resultTitle}</h3>
        <p style={{ fontSize: 15.5, lineHeight: 1.65, color: T.inkSoft, margin: '0 0 24px', maxWidth: 540 }}>{q.resultBody}</p>

        <div style={{ fontFamily: T.mono, fontSize: 10.5, letterSpacing: 1.2, textTransform: 'uppercase', color: T.inkMuted, marginBottom: 10 }}>{q.resultStart}</div>
        <ol style={{ margin: '0 0 26px', padding: 0, listStyle: 'none' }}>
          {q.resultLinks.map((l, i) =>
            <li key={l}>
              <a className="reslink" style={{
                display: 'grid', gridTemplateColumns: '34px 1fr auto', gap: 10, alignItems: 'center',
                padding: '14px 0', borderTop: `1px solid ${T.hairSoft}`, textDecoration: 'none',
                fontFamily: T.serif, fontSize: 16.5, color: T.ink, lineHeight: 1.35,
              }}>
                <span style={{ fontFamily: T.mono, fontSize: 11, color: v.accent }}>0{i + 1}</span>
                <span>{l}</span>
                <span style={{ color: v.accent, display: 'inline-flex' }}>{Icon.arrow(13)}</span>
              </a>
            </li>
          )}
        </ol>

        <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', marginBottom: 28 }}>
          <button onClick={() => { setStage('intro'); setIdx(0); setAnswers(Array(q.questions.length).fill(null)); }} className="btn-ghost" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 18px',
            background: 'transparent', color: T.ink, border: `1px solid ${T.hair}`,
            borderRadius: T.rPill, fontFamily: T.sans, fontSize: 13.5, fontWeight: 500, cursor: 'pointer',
          }}>{q.resultRetake}</button>
        </div>

        {/* optional email — explicitly optional */}
        <div style={{ background: T.surfaceSoft, border: `1px solid ${T.hair}`, padding: compact ? '20px' : '24px 26px' }}>
          <Kicker v={v} color={T.inkMuted}>{q.resultMailKicker}</Kicker>
          <h4 style={{ fontFamily: T.serif, fontSize: compact ? 19 : 22, fontWeight: 400, color: T.ink, margin: '8px 0 8px', letterSpacing: -0.2, lineHeight: 1.3 }}>{q.resultMailTitle}</h4>
          <p style={{ fontSize: 13.5, lineHeight: 1.6, color: T.inkSoft, margin: '0 0 16px', maxWidth: 460 }}>{q.resultMailSub}</p>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: 8, flexWrap: 'wrap', maxWidth: 460 }}>
            <input placeholder={q.resultMailPh} style={{
              flex: '1 1 200px', padding: '12px 14px', fontSize: 14, fontFamily: T.sans,
              border: `1px solid ${T.hair}`, background: T.bg, borderRadius: T.rMd, color: T.ink, outline: 'none',
            }} />
            <button className="btn-primary" style={{
              padding: '12px 18px', background: v.accent, color: v.accentFg, border: 'none',
              borderRadius: T.rMd, fontSize: 14, fontWeight: 500, fontFamily: T.sans, cursor: 'pointer',
            }}>{q.resultMailCta}</button>
          </form>
          <div style={{ fontSize: 12, color: T.inkMuted, marginTop: 12, fontFamily: T.sans }}>{q.resultMailSkip}</div>
        </div>
      </div>
    );
  }

  // ---- QUESTION ----
  const [qText, qAnswers] = q.questions[idx];
  const last = idx === q.questions.length - 1;
  const canNext = answers[idx] != null;
  return (
    <div style={shell}>
      {/* top bar: question count + timer */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14,
        fontFamily: T.mono, fontSize: 11, color: T.inkMuted, letterSpacing: 0.8, textTransform: 'uppercase',
      }}>
        <span>{q.progressLabel} <span style={{ color: T.ink }}>{idx + 1}</span> {q.of} {q.questions.length}</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
          <span style={{ width: 6, height: 6, borderRadius: 1, background: v.accent }} />
          {fmtTime(secs)}
        </span>
      </div>
      <QuizProgress v={v} total={q.questions.length} idx={idx} answered={answers} />

      <h3 style={{
        fontFamily: T.serif, fontWeight: 400, fontSize: compact ? 22 : 26, lineHeight: 1.3,
        color: T.ink, margin: '24px 0 20px', letterSpacing: -0.2,
      }}>{qText}</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {qAnswers.map((a, i) =>
          <QuizOption key={i} v={v} idx={i} label={a} selected={answers[idx] === i}
            onClick={() => setAnswers((prev) => { const n = [...prev]; n[idx] = i; return n; })} />
        )}
      </div>

      {/* nav */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 26,
        paddingTop: 20, borderTop: `1px solid ${T.hairSoft}`, gap: 12, flexWrap: 'wrap',
      }}>
        <button onClick={() => setIdx((i) => Math.max(0, i - 1))} disabled={idx === 0} className="btn-ghost" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 16px',
          background: 'transparent', color: idx === 0 ? T.inkMuted : T.ink,
          border: `1px solid ${T.hair}`, borderRadius: T.rPill, fontFamily: T.sans,
          fontSize: 13.5, fontWeight: 500, cursor: idx === 0 ? 'default' : 'pointer',
          opacity: idx === 0 ? 0.5 : 1,
        }}><span style={{ transform: 'rotate(180deg)', display: 'inline-flex' }}>{Icon.arrow(12)}</span>{q.back}</button>

        <span style={{ fontFamily: T.sans, fontSize: 11.5, color: T.inkMuted }}>{q.timerNote}</span>

        <button onClick={() => last ? setStage('result') : setIdx((i) => i + 1)} disabled={!canNext} className="btn-primary" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 20px',
          background: canNext ? v.accent : T.hairSoft, color: canNext ? v.accentFg : T.inkMuted,
          border: 'none', borderRadius: T.rPill, fontFamily: T.sans, fontSize: 14, fontWeight: 500,
          cursor: canNext ? 'pointer' : 'default',
        }}>{last ? q.finish : q.next} {Icon.arrow(13)}</button>
      </div>
    </div>
  );
}

// Static, on-brand preview for the Home page (links through to the full quiz).
function QuizPreviewCardRU({ v }) {
  const q = RU.quiz12;
  const answered = [null, null, null, 2, null, null, null, null, null, null, null, null];
  return (
    <div style={{ background: T.bg, padding: 28, border: `1px solid ${T.hair}`, fontFamily: T.sans, boxShadow: T.paper }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14,
        fontFamily: T.mono, fontSize: 11, color: T.inkMuted, letterSpacing: 0.8, textTransform: 'uppercase',
      }}>
        <span>{q.progressLabel} <span style={{ color: T.ink }}>04</span> {q.of} 12</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
          <span style={{ width: 6, height: 6, borderRadius: 1, background: v.accent }} />1:12
        </span>
      </div>
      <QuizProgress v={v} total={12} idx={3} answered={answered} />
      <h4 style={{
        fontFamily: T.serif, fontSize: 21, lineHeight: 1.35, color: T.ink, margin: '20px 0 18px',
        fontWeight: 400, letterSpacing: -0.2,
      }}>{q.questions[3][0]}</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
        {q.questions[3][1].map((a, i) =>
          <QuizOption key={i} v={v} idx={i} label={a} selected={i === 2} onClick={() => {}} />
        )}
      </div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 18,
        paddingTop: 14, borderTop: `1px solid ${T.hairSoft}`,
      }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: T.sans, fontSize: 13,
          color: T.inkMuted,
        }}><span style={{ transform: 'rotate(180deg)', display: 'inline-flex' }}>{Icon.arrow(11)}</span>{q.back}</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: T.sans, fontSize: 13.5, fontWeight: 500, color: v.accent }}>{q.next} {Icon.arrow(12)}</span>
      </div>
    </div>
  );
}

Object.assign(window, { QuizFlowRU, QuizPreviewCardRU, QuizOption, QuizProgress });
