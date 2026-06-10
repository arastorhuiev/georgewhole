import { getEntry } from 'astro:content';
import type { QuizQuestion, Archetype } from '@quiz/scoring';

export interface QuizUi {
  kicker: string;
  title: string;
  sub: string;
  startCta: string;
  optionLetters: string;
  meta: string[];
  howLabel: string;
  how: Array<[string, string, string]>;
  progressLabel: string;
  of: string;
  back: string;
  next: string;
  finish: string;
  timerNote: string;
  resultKicker: string;
  resultStart: string;
  resultRetake: string;
  resultMailKicker: string;
  resultMailTitle: string;
  resultMailSub: string;
  resultMailCta: string;
  resultMailPh: string;
  resultMailSkip: string;
  resultMailSentTitle: string;
  resultMailSentSub: string;
}

export interface QuizBundle {
  questions: QuizQuestion[];
  ui: QuizUi;
  archetypes: Archetype[];
}

/**
 * Per-locale quiz content from the `quiz` collection (id = "<quizId>/<locale>").
 * Falls back to RU (the launch locale) when a locale is not yet translated.
 */
export async function quizData(
  locale: string,
  quizId = 'old-code',
): Promise<QuizBundle> {
  const entry =
    (await getEntry('quiz', `${quizId}/${locale}`)) ??
    (await getEntry('quiz', `${quizId}/ru`));
  return entry!.data as unknown as QuizBundle;
}
