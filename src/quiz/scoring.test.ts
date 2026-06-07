import { describe, it, expect } from 'vitest';
// sibling unit-under-test — relative import (test files are the one exception
// to the project's alias-everywhere rule; keeps vitest config-free).
import { scoreQuiz, tally } from './scoring';

describe('tally', () => {
  it('counts answers per tendency, ignoring null & out-of-range', () => {
    expect(tally([0, 1, 1, null, 5, 2])).toEqual([1, 2, 1, 0]);
  });
});

describe('scoreQuiz', () => {
  it('returns the dominant tendency index', () => {
    expect(scoreQuiz([0, 0, 0, 1, 2, 1])).toBe(0);
    expect(scoreQuiz([1, 1, 1, 0, 2])).toBe(1);
    expect(scoreQuiz([3, 3, 3, 2])).toBe(3);
  });

  it('breaks ties toward the lower index (А>Б>В>Г)', () => {
    expect(scoreQuiz([0, 1, 2, 3])).toBe(0); // all 1 → А
    expect(scoreQuiz([2, 2, 3, 3])).toBe(2); // В vs Г tie → В
    expect(scoreQuiz([1, 1, 0, 0])).toBe(0); // А vs Б tie → А
  });

  it('ignores unanswered questions', () => {
    expect(scoreQuiz([null, null, 1, 1])).toBe(1);
    expect(scoreQuiz([null, null, null])).toBe(0); // empty → defaults to А
  });

  it('computes deterministically for a full 12-answer vector', () => {
    // counts: 0→1, 1→3, 2→6, 3→2 → dominant = index 2
    expect(scoreQuiz([1, 2, 3, 2, 1, 0, 2, 2, 1, 3, 2, 2])).toBe(2);
  });
});
