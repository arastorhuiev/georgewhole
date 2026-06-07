import type { QuizQuestion, Archetype } from '@quiz/scoring';

// 12 questions, translated from data.ru.ts.
// Option order encodes tendency (see scoring.ts caveat) — preserved exactly.
export const quizQuestions: QuizQuestion[] = [
  { text: 'When you ate something you had not planned to, the loudest voice in your head is…', options: ['«I\'ll work it off later.»', '«What is wrong with me.»', '«I was tired and I needed that.»', '«I don\'t actually have a rule about this.»'] },
  { text: 'A "good day" with food is a day when you…', options: ['Ate very little.', 'Kept everything under control.', 'Just didn\'t think about it.', 'Ate and got on with life.'] },
  { text: 'You most often meet hunger as…', options: ['A weakness to push through.', 'A signal that something is wrong.', 'Ordinary information from the body.', 'A reason to eat.'] },
  { text: 'The phrase "I have no discipline" feels to you like…', options: ['Pure truth.', 'Something I\'ve been telling myself for years.', 'An old rule — not necessarily a fact.', 'Not about me.'] },
  { text: 'Fullness feels like…', options: ['Failure.', 'Something to feel ashamed of later.', 'A neutral state.', 'Normal and calm.'] },
  { text: 'You think about your body most often…', options: ['As a problem I am solving.', 'As something that lets me down.', 'Less than I used to.', 'As the home I live in.'] },
  { text: 'These rules came to you…', options: ['From family, at the table.', 'From the air — I don\'t know where.', 'I only started noticing them recently.', 'I\'ve mostly set them aside.'] },
  { text: 'When discomfort after eating shows up, you…', options: ['Immediately plan to "fix" it.', 'Criticise myself.', 'Notice it and wait for it to pass.', 'Just keep going.'] },
  { text: '"Earning" the next meal is for you…', options: ['A familiar logic.', 'Something I argue with.', 'An old rule that has gotten quieter.', 'Someone else\'s phrase.'] },
  { text: 'Someone eats freely next to you. You feel…', options: ['Envy and the urge to control.', 'Anxiety.', 'Curiosity.', 'Calm.'] },
  { text: 'Most often what you want is…', options: ['A smaller body.', 'For the noise in your head to go quiet.', 'To stop arguing with the plate.', 'Nothing in particular.'] },
  { text: 'What do you need most right now?', options: ['A plan.', 'For people to stop shaming me.', 'Company and quiet.', 'I\'m just reading out of curiosity.'] },
];

export const quizUi = {
  kicker: 'Quiz · no sign-up',
  title: 'What is your Old Code?',
  sub: 'Twelve gentle questions to hear the inherited rules running in the background. No email needed — you will see your result right away.',
  startCta: 'Start the quiz',
  meta: ['12 questions', '≈ 4 minutes', 'No sign-up'],
  howLabel: 'How it works',
  how: [
    ['01', 'Answer', 'Twelve questions, one at a time. You can go back and change an answer.'],
    ['02', 'See your result', 'Right away, no email. A short description of your "code" and where to start reading.'],
    ['03', 'Optional — a letter', 'If you want, leave your email and a letter will arrive once a week. It is not required.'],
  ] as Array<[string, string, string]>,
  progressLabel: 'Question',
  of: 'of',
  back: 'Back',
  next: 'Next',
  finish: 'See my result',
  timerNote: 'No time limit. The timer is just a reference.',
  resultKicker: 'Your result',
  resultStart: 'Start with these:',
  resultRetake: 'Retake the quiz',
  resultMailKicker: 'Optional',
  resultMailTitle: 'Get a letter once a week?',
  resultMailSub: 'Email is only for the letter. Your result is already yours without it. Unsubscribe in one click.',
  resultMailCta: 'Subscribe',
  resultMailPh: 'your@email',
  resultMailSkip: 'The result is enough, thank you',
};

// 4 archetypes. [0] "Earner" uses the design's real result copy; [1..3]
// are clearly-labelled DRAFTS — their copy + the option→tendency mapping are
// YMYL content to be authored & clinician-confirmed before launch (BUILD_PLAN §14).
export const quizArchetypes: Archetype[] = [
  {
    key: 'earner',
    title: 'It looks like your Old Code is the "Earner."',
    body: 'The loudest rule is: food and rest must be earned. This is not about discipline — it is inherited accounting. The good news is that it can be slowly closed.',
    recommended: ['sila-voli', 'horoshiy-den', 'desyat-let'],
  },
  {
    key: 'critic',
    title: 'It looks like your Old Code is the "Self-Critic."',
    body: '[DRAFT — copy pending author & clinical review.] The loudest voice is shame: "what is wrong with me." That is not the truth about you — it is an old rule you can start to hear from the outside.',
    recommended: ['otkuda-kod', 'horoshiy-den'],
    placeholder: true,
  },
  {
    key: 'tired',
    title: 'It looks like your Old Code is the "Tired One."',
    body: '[DRAFT — copy pending author & clinical review.] You are already tired of arguing with the plate and have started to notice the rules from the outside. That is the beginning of a quieter code.',
    recommended: ['desyat-let', 'god-kogda-stalo-tishe'],
    placeholder: true,
  },
  {
    key: 'quieter',
    title: 'It looks like your Old Code is already quieter.',
    body: '[DRAFT — copy pending author & clinical review.] Many of the old rules are ones you have already set aside. You may be reading out of curiosity rather than pain — and that too is a place from which a new code can be written.',
    recommended: ['god-kogda-stalo-tishe', 'tarelka-ottsa'],
    placeholder: true,
  },
];
