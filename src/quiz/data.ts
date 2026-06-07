import * as ru from '@quiz/data.ru';
import * as en from '@quiz/data.en';

export interface QuizBundle {
  quizQuestions: typeof ru.quizQuestions;
  quizUi: typeof ru.quizUi;
  quizArchetypes: typeof ru.quizArchetypes;
}

const bundles: Record<string, QuizBundle> = { ru, en };

/** Per-locale quiz data; falls back to RU (the launch locale). */
export function quizData(locale: string): QuizBundle {
  return bundles[locale] ?? ru;
}
