<script lang="ts">
  // Interactive 12-question quiz island (Svelte 5 runes). Ported from
  // docs/design/project/quiz-ru.jsx. The ONLY JS island on the site
  // (hydrated client:visible). Copy comes from props (content-agnostic).
  import { scoreQuiz, type QuizQuestion } from '@quiz/scoring';

  interface ResultLink { title: string; href: string; }
  interface ArchetypeView { title: string; body: string; recommended: ResultLink[]; }
  interface Ui {
    kicker: string; title: string; sub: string; startCta: string;
    optionLetters: string;
    meta: string[]; howLabel: string; how: Array<[string, string, string]>;
    progressLabel: string; of: string; back: string; next: string; finish: string;
    timerNote: string; resultKicker: string; resultStart: string; resultRetake: string;
    resultMailKicker: string; resultMailTitle: string; resultMailSub: string;
    resultMailCta: string; resultMailPh: string; resultMailSkip: string;
    resultMailSentTitle: string; resultMailSentSub: string;
  }

  let { questions, archetypes, ui }: {
    questions: QuizQuestion[];
    archetypes: ArchetypeView[];
    ui: Ui;
  } = $props();

  const total = questions.length;
  const letters = ui.optionLetters || 'ABCDEF';

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

<div class="bg-bg border border-hair font-sans p-[40px_44px] shadow-paper max-[640px]:p-[24px_20px]">
  {#if stage === 'intro'}
    <div class="font-mono text-[11px] tracking-[1.6px] uppercase text-accent font-medium">{ui.kicker}</div>
    <h1 class="font-serif font-normal text-[34px] leading-[1.15] text-ink my-[12px] tracking-[-0.4px]">{ui.title}</h1>
    <p class="text-[15px] leading-[1.6] text-ink-soft mb-[22px] mt-0 max-w-[520px]">{ui.sub}</p>
    <div class="flex gap-[8px] flex-wrap mb-[26px]">
      {#each ui.meta as m}<span class="font-mono text-[11px] tracking-[0.6px] text-ink-soft border border-hair rounded-pill py-[6px] px-[12px]">{m}</span>{/each}
    </div>
    <button
      class="inline-flex items-center gap-[10px] py-[13px] px-[22px] bg-accent text-accent-fg border-none rounded-pill font-sans text-[15px] font-medium cursor-pointer transition duration-[180ms] not-disabled:hover:bg-accent-deep not-disabled:hover:-translate-y-px not-disabled:hover:shadow-[0_5px_14px_rgba(47,82,70,0.22)] not-disabled:active:translate-y-0 not-disabled:active:shadow-[0_2px_6px_rgba(47,82,70,0.2)]"
      onclick={start}
    >{ui.startCta} →</button>
    <div class="mt-[30px] pt-[24px] border-t border-[var(--color-hair-soft)]">
      <div class="font-mono text-[10.5px] tracking-[1.4px] uppercase text-ink-muted mb-[16px]">{ui.howLabel}</div>
      <div class="grid grid-cols-3 gap-[24px] max-[640px]:grid-cols-1 max-[640px]:gap-[14px]">
        {#each ui.how as [n, h, b]}
          <div>
            <div class="font-serif text-[24px] text-accent leading-[1] mb-[8px]">{n}</div>
            <div class="text-[14px] font-semibold text-ink mb-[4px]">{h}</div>
            <p class="text-[13px] leading-[1.55] text-ink-soft m-0">{b}</p>
          </div>
        {/each}
      </div>
    </div>
  {:else if stage === 'q'}
    <div class="flex justify-between items-center mb-[14px] font-mono text-[11px] text-ink-muted tracking-[0.8px] uppercase">
      <span>{ui.progressLabel} <span class="text-ink">{idx + 1}</span> {ui.of} {total}</span>
      <span class="inline-flex items-center gap-[7px]"><span class="w-[6px] h-[6px] rounded-[1px] bg-accent"></span>{fmt(secs)}</span>
    </div>
    <div class="flex gap-[4px]" role="progressbar" aria-valuenow={idx + 1} aria-valuemin="1" aria-valuemax={total}>
      {#each Array(total) as _, i}
        <span
          class={`flex-1 h-[5px] transition-colors duration-[250ms] ${i === idx ? 'bg-accent' : answers[i] != null ? 'bg-accent-hair' : 'bg-hair-soft'}`}
        ></span>
      {/each}
    </div>
    <h2 class="font-serif font-normal text-[26px] leading-[1.3] text-ink my-[24px] mb-[20px] tracking-[-0.2px] max-[640px]:text-[22px]">{questions[idx].text}</h2>
    <div class="flex flex-col gap-[10px]" role="radiogroup" aria-label={questions[idx].text}>
      {#each questions[idx].options as opt, i}
        <button
          class={`flex gap-[14px] py-[14px] px-[16px] cursor-pointer text-left border rounded-sm items-center font-sans text-[15px] text-ink leading-[1.4] transition-colors duration-150 hover:border-accent ${answers[idx] === i ? 'border-accent bg-accent-soft' : 'border-hair bg-bg'}`}
          role="radio"
          aria-checked={answers[idx] === i}
          onclick={() => select(i)}
        >
          <span
            class={`w-[27px] h-[27px] shrink-0 rounded-sm border flex items-center justify-center font-mono text-[12px] transition-all duration-150 ${answers[idx] === i ? 'border-accent bg-accent text-accent-fg' : 'border-hair bg-transparent text-ink-muted'}`}
          >{letters[i] ?? i + 1}</span>
          <span>{opt}</span>
        </button>
      {/each}
    </div>
    <div class="flex justify-between items-center mt-[26px] pt-[20px] border-t border-[var(--color-hair-soft)] gap-[12px] flex-wrap">
      <button
        class="inline-flex items-center gap-[8px] py-[10px] px-[18px] rounded-pill font-sans text-[13.5px] font-medium cursor-pointer bg-transparent text-ink border border-hair transition duration-[180ms] not-disabled:hover:border-accent not-disabled:hover:bg-[rgba(63,107,94,0.07)] not-disabled:hover:text-accent-deep disabled:opacity-50 disabled:cursor-default"
        onclick={back}
        disabled={idx === 0}
      >
        <span class="inline-block rotate-180">→</span>{ui.back}
      </button>
      <span class="font-sans text-[11.5px] text-ink-muted">{ui.timerNote}</span>
      <button
        class="inline-flex items-center gap-[8px] py-[11px] px-[20px] rounded-pill font-sans text-[14px] font-medium cursor-pointer bg-accent text-accent-fg border-none transition duration-[180ms] not-disabled:hover:bg-accent-deep not-disabled:hover:-translate-y-px not-disabled:hover:shadow-[0_5px_14px_rgba(47,82,70,0.22)] disabled:opacity-50 disabled:cursor-default disabled:bg-[var(--color-hair-soft)] disabled:text-ink-muted"
        onclick={next}
        disabled={!canNext}
      >
        {last ? ui.finish : ui.next} →
      </button>
    </div>
  {:else}
    <div class="font-mono text-[11px] tracking-[1.6px] uppercase text-accent font-medium">{ui.resultKicker}</div>
    <h2 class="font-serif font-normal text-[32px] leading-[1.2] text-ink mt-[12px] mb-[14px] tracking-[-0.4px] max-[640px]:text-[26px]">{result.title}</h2>
    <p class="text-[15.5px] leading-[1.65] text-ink-soft mb-[24px] mt-0 max-w-[540px]">{result.body}</p>
    <div class="font-mono text-[10.5px] tracking-[1.2px] uppercase text-ink-muted mb-[10px]">{ui.resultStart}</div>
    <ol class="mb-[26px] mt-0 p-0 list-none">
      {#each result.recommended as link, i}
        <li>
          <a
            class="grid grid-cols-[34px_1fr_auto] gap-[10px] items-center py-[14px] px-0 border-t border-[var(--color-hair-soft)] no-underline font-serif text-[16.5px] text-ink leading-[1.35] transition-colors duration-[180ms] hover:text-accent"
            href={link.href}
          >
            <span class="font-mono text-[11px] text-accent">0{i + 1}</span>
            <span>{link.title}</span>
            <span class="text-accent">→</span>
          </a>
        </li>
      {/each}
    </ol>
    <button
      class="inline-flex items-center gap-[8px] py-[10px] px-[18px] rounded-pill font-sans text-[13.5px] font-medium cursor-pointer bg-transparent text-ink border border-hair transition duration-[180ms] not-disabled:hover:border-accent not-disabled:hover:bg-[rgba(63,107,94,0.07)] not-disabled:hover:text-accent-deep disabled:opacity-50 disabled:cursor-default"
      onclick={retake}
    >{ui.resultRetake}</button>

    <div class="bg-[var(--color-surface-soft)] border border-hair p-[24px_26px] mt-[28px] max-[640px]:p-[20px]">
      {#if mailSent}
        <div class="font-mono text-[11px] tracking-[1.6px] uppercase text-ink-muted font-medium">{ui.resultMailKicker}</div>
        <h3 class="font-serif text-[22px] font-normal text-ink my-[8px] tracking-[-0.2px] leading-[1.3]">{ui.resultMailSentTitle}</h3>
        <p class="text-[13.5px] leading-[1.6] text-ink-soft mb-[16px] mt-0 max-w-[460px]">{ui.resultMailSentSub}</p>
      {:else}
        <div class="font-mono text-[11px] tracking-[1.6px] uppercase text-ink-muted font-medium">{ui.resultMailKicker}</div>
        <h3 class="font-serif text-[22px] font-normal text-ink my-[8px] tracking-[-0.2px] leading-[1.3]">{ui.resultMailTitle}</h3>
        <p class="text-[13.5px] leading-[1.6] text-ink-soft mb-[16px] mt-0 max-w-[460px]">{ui.resultMailSub}</p>
        <form class="flex gap-[8px] flex-wrap max-w-[460px]" onsubmit={(e) => { e.preventDefault(); mailSent = true; }}>
          <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true" class="absolute left-[-9999px] w-px h-px opacity-0" />
          <input
            type="email"
            required
            placeholder={ui.resultMailPh}
            aria-label={ui.resultMailPh}
            class="flex-[1_1_200px] py-[12px] px-[14px] text-[14px] font-sans border border-hair bg-bg rounded-md text-ink outline-none"
          />
          <button
            type="submit"
            class="inline-flex items-center gap-[10px] py-[12px] px-[18px] bg-accent text-accent-fg border-none rounded-md font-sans text-[14px] font-medium cursor-pointer transition duration-[180ms] not-disabled:hover:bg-accent-deep not-disabled:hover:-translate-y-px not-disabled:hover:shadow-[0_5px_14px_rgba(47,82,70,0.22)] not-disabled:active:translate-y-0 not-disabled:active:shadow-[0_2px_6px_rgba(47,82,70,0.2)]"
          >{ui.resultMailCta}</button>
        </form>
        <div class="text-[12px] text-ink-muted mt-[12px]">{ui.resultMailSkip}</div>
      {/if}
    </div>
  {/if}
</div>
