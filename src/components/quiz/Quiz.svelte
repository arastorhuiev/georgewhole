<script lang="ts">
  // Interactive 12-question quiz island (Svelte 5 runes). Ported from
  // design-reference/project/quiz-ru.jsx. The ONLY JS island on the site
  // (hydrated client:visible). Copy comes from props (content-agnostic).
  import { scoreQuiz, type QuizQuestion } from '@quiz/scoring';

  interface ResultLink { title: string; href: string; }
  interface ArchetypeView { title: string; body: string; recommended: ResultLink[]; }
  interface Ui {
    kicker: string; title: string; sub: string; startCta: string;
    meta: string[]; howLabel: string; how: Array<[string, string, string]>;
    progressLabel: string; of: string; back: string; next: string; finish: string;
    timerNote: string; resultKicker: string; resultStart: string; resultRetake: string;
    resultMailKicker: string; resultMailTitle: string; resultMailSub: string;
    resultMailCta: string; resultMailPh: string; resultMailSkip: string;
  }

  let { questions, archetypes, ui }: {
    questions: QuizQuestion[];
    archetypes: ArchetypeView[];
    ui: Ui;
  } = $props();

  const total = questions.length;
  const letters = 'АБВГДЕ';

  let stage = $state<'intro' | 'q' | 'result'>('intro');
  let idx = $state(0);
  let answers = $state<(number | null)[]>(Array(total).fill(null));
  let secs = $state(0);
  let mailSent = $state(false);

  $effect(() => {
    if (stage !== 'q') return;
    const t = setInterval(() => { secs += 1; }, 1000);
    return () => clearInterval(t);
  });

  const last = $derived(idx === total - 1);
  const canNext = $derived(answers[idx] != null);
  const result = $derived(archetypes[scoreQuiz(answers, archetypes.length)]);

  function fmt(s: number) {
    const m = Math.floor(s / 60), ss = s % 60;
    return `${m}:${ss < 10 ? '0' : ''}${ss}`;
  }
  const start = () => { stage = 'q'; idx = 0; secs = 0; };
  const select = (i: number) => { answers[idx] = i; };
  const next = () => { if (last) stage = 'result'; else idx += 1; };
  const back = () => { if (idx > 0) idx -= 1; };
  const retake = () => { stage = 'intro'; idx = 0; answers = Array(total).fill(null); secs = 0; mailSent = false; };
</script>

<div class="shell">
  {#if stage === 'intro'}
    <div class="kicker">{ui.kicker}</div>
    <h1 class="h-title">{ui.title}</h1>
    <p class="lead">{ui.sub}</p>
    <div class="meta-row">
      {#each ui.meta as m}<span class="meta-chip">{m}</span>{/each}
    </div>
    <button class="btn-primary cta" onclick={start}>{ui.startCta} →</button>
    <div class="how">
      <div class="how-label">{ui.howLabel}</div>
      <div class="how-grid">
        {#each ui.how as [n, h, b]}
          <div>
            <div class="how-n">{n}</div>
            <div class="how-h">{h}</div>
            <p class="how-b">{b}</p>
          </div>
        {/each}
      </div>
    </div>
  {:else if stage === 'q'}
    <div class="topbar">
      <span>{ui.progressLabel} <span class="ink">{idx + 1}</span> {ui.of} {total}</span>
      <span class="timer"><span class="dot"></span>{fmt(secs)}</span>
    </div>
    <div class="progress" role="progressbar" aria-valuenow={idx + 1} aria-valuemin="1" aria-valuemax={total}>
      {#each Array(total) as _, i}
        <span class="tick" class:cur={i === idx} class:done={answers[i] != null}></span>
      {/each}
    </div>
    <h2 class="q-text">{questions[idx].text}</h2>
    <div class="options" role="radiogroup" aria-label={questions[idx].text}>
      {#each questions[idx].options as opt, i}
        <button
          class="opt"
          class:sel={answers[idx] === i}
          role="radio"
          aria-checked={answers[idx] === i}
          onclick={() => select(i)}
        >
          <span class="letter">{letters[i] ?? i + 1}</span>
          <span>{opt}</span>
        </button>
      {/each}
    </div>
    <div class="nav">
      <button class="btn-ghost navbtn" onclick={back} disabled={idx === 0}>
        <span class="rev">→</span>{ui.back}
      </button>
      <span class="timer-note">{ui.timerNote}</span>
      <button class="btn-primary navbtn primary" onclick={next} disabled={!canNext}>
        {last ? ui.finish : ui.next} →
      </button>
    </div>
  {:else}
    <div class="kicker">{ui.resultKicker}</div>
    <h2 class="r-title">{result.title}</h2>
    <p class="r-body">{result.body}</p>
    <div class="r-start">{ui.resultStart}</div>
    <ol class="r-links">
      {#each result.recommended as link, i}
        <li>
          <a class="reslink" href={link.href}>
            <span class="r-num">0{i + 1}</span>
            <span>{link.title}</span>
            <span class="r-arrow">→</span>
          </a>
        </li>
      {/each}
    </ol>
    <button class="btn-ghost navbtn" onclick={retake}>{ui.resultRetake}</button>

    <div class="mail">
      {#if mailSent}
        <div class="mail-kicker">{ui.resultMailKicker}</div>
        <h3 class="mail-title">Спасибо, что подписались.</h3>
        <p class="mail-sub">Первое письмо придёт в ближайшее воскресенье.</p>
      {:else}
        <div class="mail-kicker">{ui.resultMailKicker}</div>
        <h3 class="mail-title">{ui.resultMailTitle}</h3>
        <p class="mail-sub">{ui.resultMailSub}</p>
        <form class="mail-form" onsubmit={(e) => { e.preventDefault(); mailSent = true; }}>
          <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true" class="hp" />
          <input type="email" required placeholder={ui.resultMailPh} aria-label={ui.resultMailPh} />
          <button type="submit" class="btn-primary">{ui.resultMailCta}</button>
        </form>
        <div class="mail-skip">{ui.resultMailSkip}</div>
      {/if}
    </div>
  {/if}
</div>

<style>
  .shell {
    background: var(--color-bg);
    border: 1px solid var(--color-hair);
    font-family: var(--font-sans);
    padding: 40px 44px;
    box-shadow: var(--shadow-paper);
  }
  @media (max-width: 640px) { .shell { padding: 24px 20px; } }

  .kicker {
    font-family: var(--font-mono); font-size: 11px; letter-spacing: 1.6px;
    text-transform: uppercase; color: var(--color-accent); font-weight: 500;
  }
  .h-title {
    font-family: var(--font-serif); font-weight: 400; font-size: 34px;
    line-height: 1.15; color: var(--color-ink); margin: 12px 0; letter-spacing: -0.4px;
  }
  .lead { font-size: 15px; line-height: 1.6; color: var(--color-ink-soft); margin: 0 0 22px; max-width: 520px; }
  .meta-row { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 26px; }
  .meta-chip {
    font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.6px;
    color: var(--color-ink-soft); border: 1px solid var(--color-hair);
    border-radius: var(--radius-pill); padding: 6px 12px;
  }
  .cta, .btn-primary {
    display: inline-flex; align-items: center; gap: 10px; padding: 13px 22px;
    background: var(--color-accent); color: var(--color-accent-fg); border: none;
    border-radius: var(--radius-pill); font-family: var(--font-sans); font-size: 15px;
    font-weight: 500; cursor: pointer;
  }
  .how { margin-top: 30px; padding-top: 24px; border-top: 1px solid var(--color-hair-soft); }
  .how-label { font-family: var(--font-mono); font-size: 10.5px; letter-spacing: 1.4px; text-transform: uppercase; color: var(--color-ink-muted); margin-bottom: 16px; }
  .how-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  @media (max-width: 640px) { .how-grid { grid-template-columns: 1fr; gap: 14px; } }
  .how-n { font-family: var(--font-serif); font-size: 24px; color: var(--color-accent); line-height: 1; margin-bottom: 8px; }
  .how-h { font-size: 14px; font-weight: 600; color: var(--color-ink); margin-bottom: 4px; }
  .how-b { font-size: 13px; line-height: 1.55; color: var(--color-ink-soft); margin: 0; }

  .topbar {
    display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;
    font-family: var(--font-mono); font-size: 11px; color: var(--color-ink-muted);
    letter-spacing: 0.8px; text-transform: uppercase;
  }
  .topbar .ink { color: var(--color-ink); }
  .timer { display: inline-flex; align-items: center; gap: 7px; }
  .timer .dot { width: 6px; height: 6px; border-radius: 1px; background: var(--color-accent); }
  .progress { display: flex; gap: 4px; }
  .tick { flex: 1; height: 5px; background: var(--color-hair-soft); transition: background 0.25s ease; }
  .tick.done { background: var(--color-accent-hair); }
  .tick.cur { background: var(--color-accent); }
  .q-text { font-family: var(--font-serif); font-weight: 400; font-size: 26px; line-height: 1.3; color: var(--color-ink); margin: 24px 0 20px; letter-spacing: -0.2px; }
  @media (max-width: 640px) { .q-text { font-size: 22px; } }
  .options { display: flex; flex-direction: column; gap: 10px; }
  .opt {
    display: flex; gap: 14px; padding: 14px 16px; cursor: pointer; text-align: left;
    border: 1px solid var(--color-hair); border-radius: var(--radius-sm);
    background: var(--color-bg); align-items: center; font-family: var(--font-sans);
    font-size: 15px; color: var(--color-ink); line-height: 1.4;
    transition: border-color 0.15s ease, background 0.15s ease;
  }
  .opt:hover { border-color: var(--color-accent); }
  .opt.sel { border-color: var(--color-accent); background: var(--color-accent-soft); }
  .letter {
    width: 27px; height: 27px; flex-shrink: 0; border-radius: var(--radius-sm);
    border: 1px solid var(--color-hair); background: transparent;
    display: flex; align-items: center; justify-content: center;
    font-family: var(--font-mono); font-size: 12px; color: var(--color-ink-muted);
    transition: all 0.15s ease;
  }
  .opt.sel .letter { border-color: var(--color-accent); background: var(--color-accent); color: var(--color-accent-fg); }
  .nav {
    display: flex; justify-content: space-between; align-items: center; margin-top: 26px;
    padding-top: 20px; border-top: 1px solid var(--color-hair-soft); gap: 12px; flex-wrap: wrap;
  }
  .navbtn {
    display: inline-flex; align-items: center; gap: 8px; padding: 10px 18px;
    border-radius: var(--radius-pill); font-family: var(--font-sans); font-size: 13.5px;
    font-weight: 500; cursor: pointer; background: transparent; color: var(--color-ink);
    border: 1px solid var(--color-hair);
  }
  .navbtn.primary { background: var(--color-accent); color: var(--color-accent-fg); border: none; font-size: 14px; padding: 11px 20px; }
  .navbtn:disabled { opacity: 0.5; cursor: default; }
  .navbtn.primary:disabled { background: var(--color-hair-soft); color: var(--color-ink-muted); }
  .rev { display: inline-block; transform: rotate(180deg); }
  .timer-note { font-family: var(--font-sans); font-size: 11.5px; color: var(--color-ink-muted); }

  .r-title { font-family: var(--font-serif); font-weight: 400; font-size: 32px; line-height: 1.2; color: var(--color-ink); margin: 12px 0 14px; letter-spacing: -0.4px; }
  @media (max-width: 640px) { .r-title { font-size: 26px; } }
  .r-body { font-size: 15.5px; line-height: 1.65; color: var(--color-ink-soft); margin: 0 0 24px; max-width: 540px; }
  .r-start { font-family: var(--font-mono); font-size: 10.5px; letter-spacing: 1.2px; text-transform: uppercase; color: var(--color-ink-muted); margin-bottom: 10px; }
  .r-links { margin: 0 0 26px; padding: 0; list-style: none; }
  .reslink {
    display: grid; grid-template-columns: 34px 1fr auto; gap: 10px; align-items: center;
    padding: 14px 0; border-top: 1px solid var(--color-hair-soft); text-decoration: none;
    font-family: var(--font-serif); font-size: 16.5px; color: var(--color-ink); line-height: 1.35;
    transition: color 0.18s ease;
  }
  .reslink:hover { color: var(--color-accent); }
  .r-num { font-family: var(--font-mono); font-size: 11px; color: var(--color-accent); }
  .r-arrow { color: var(--color-accent); }

  .mail { background: var(--color-surface-soft); border: 1px solid var(--color-hair); padding: 24px 26px; margin-top: 28px; }
  @media (max-width: 640px) { .mail { padding: 20px; } }
  .mail-kicker { font-family: var(--font-mono); font-size: 11px; letter-spacing: 1.6px; text-transform: uppercase; color: var(--color-ink-muted); font-weight: 500; }
  .mail-title { font-family: var(--font-serif); font-size: 22px; font-weight: 400; color: var(--color-ink); margin: 8px 0; letter-spacing: -0.2px; line-height: 1.3; }
  .mail-sub { font-size: 13.5px; line-height: 1.6; color: var(--color-ink-soft); margin: 0 0 16px; max-width: 460px; }
  .mail-form { display: flex; gap: 8px; flex-wrap: wrap; max-width: 460px; }
  .mail-form input[type='email'] {
    flex: 1 1 200px; padding: 12px 14px; font-size: 14px; font-family: var(--font-sans);
    border: 1px solid var(--color-hair); background: var(--color-bg);
    border-radius: var(--radius-md); color: var(--color-ink); outline: none;
  }
  .mail-form .btn-primary { padding: 12px 18px; border-radius: var(--radius-md); font-size: 14px; }
  .mail-skip { font-size: 12px; color: var(--color-ink-muted); margin-top: 12px; }
  .hp { position: absolute; left: -9999px; width: 1px; height: 1px; opacity: 0; }
</style>
