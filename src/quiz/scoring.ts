// Quiz scoring engine — generic, config-driven, pure, unit-tested.
//
// YMYL MODEL CAVEAT: each answer's option index encodes a "tendency" (0..3).
// The option→tendency ordering used by the RU question set
// (А = earn/control, Б = self-criticism/shame, В = tired/coping,
//  Г = already-quieter) is the design's INFERRED ordering — a PLACEHOLDER that
// MUST be authored and clinician-confirmed before launch (see BUILD_PLAN §6/§14).
// The engine below is mechanical and stable regardless of that copy.

export interface QuizQuestion {
  text: string;
  /** 4 options; their index is the tendency they score toward. */
  options: string[];
}

export interface Archetype {
  key: string;
  title: string;
  body: string;
  /** article transKeys recommended for this archetype */
  recommended: string[];
  /** true while the copy is a draft pending authoring/clinical review */
  placeholder?: boolean;
}

/** Count answers per tendency. Unanswered (null) / out-of-range are ignored. */
export function tally(answers: ReadonlyArray<number | null>, n = 4): number[] {
  const counts = new Array<number>(n).fill(0);
  for (const a of answers) {
    if (a != null && Number.isInteger(a) && a >= 0 && a < n) counts[a]++;
  }
  return counts;
}

/**
 * Tally answers → dominant archetype index. Strict `>` comparison means the
 * FIRST maximum wins, i.e. ties break toward the lower index (А>Б>В>Г).
 */
export function scoreQuiz(
  answers: ReadonlyArray<number | null>,
  archetypeCount = 4,
): number {
  const counts = tally(answers, archetypeCount);
  let best = 0;
  for (let i = 1; i < archetypeCount; i++) {
    if (counts[i] > counts[best]) best = i;
  }
  return best;
}
