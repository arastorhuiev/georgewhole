// EN UI dictionary — chrome + singular page copy. Translated from ru.ts.
// Repeatable content (articles, books) lives in Content Collections; quiz
// questions/archetypes live in src/quiz/.
// NOTE: copy is the design's placeholder/demo text — real book copy is swapped
// in later by the author.

export const en = {
  brand: 'georgewhole',
  brandTagline: 'books & letters',
  nav: { articles: 'Articles', books: 'Books', about: 'About', newsletter: 'Newsletter' },
  mobileNav: { lang: 'Site language', menu: 'Menu' },

  hero: {
    kicker: 'georgewhole · author · since 2024',
    title: 'Quiet books about the rules we live by without ever choosing them.',
    sub: 'A few books and weekly letters — about the body, inheritance, and what remains when you turn the noise off.',
    primary: 'See the books',
    ghost: 'About the author',
  },

  authorStripe: {
    kicker: 'Author',
    line: 'georgewhole · writes slowly — a few books about one thing.',
    name: 'georgewhole',
    mobileSummary: 'writes slowly — a few books about one thing.',
    link: 'Read the story',
  },

  shelf: {
    kicker: 'Series · five books',
    title: 'Five books, one line.',
    sub: 'The series moves from a complicated relationship with food — through the body, beauty, and diets — toward a quieter code. Each can be read on its own; together they form a single arc.',
    all: 'All books',
    statusOut: 'Out now',
    statusSoon: 'Coming soon',
  },

  reading: {
    title: 'A few articles worth starting with.',
    all: 'All articles',
    tags: ['All', 'Old Code', 'Men 40+', 'For parents', 'After "all the plans"', 'Personal'],
  },

  quizUi: {
    progressLabel: 'Question',
    of: 'of',
    back: 'Back',
    next: 'Next',
    finish: 'See my result',
    startCta: 'Start the quiz',
    timerNote: 'No time limit. The timer is just a reference.',
    howLabel: 'How it works',
    resultKicker: 'Your result',
    resultStart: 'Start with these:',
    resultRetake: 'Retake the quiz',
    resultMailKicker: 'Optional',
    resultMailTitle: 'Get a letter once a week?',
    resultMailSub: 'Email is only for the letter. Your result is already yours without it. Unsubscribe in one click.',
    resultMailCta: 'Subscribe',
    resultMailPh: 'your@email',
    resultMailSkip: 'The result is enough, thank you',
  },

  quizHome: {
    kicker: 'Quiz for "The New Code" · 4 minutes',
    title: 'What is your Old Code?',
    sub: 'Twelve gentle questions to hear the inherited rules running in the background. You can get your result without subscribing.',
    submit: 'Start the quiz',
    note: 'No email required.',
    placeholder: 'your@email',
  },

  newsletter: {
    title: 'A letter once a week.',
    sub: 'One article, an excerpt, and a question to sit with. No promotions, no urgency. Unsubscribe in one click.',
    submit: 'Subscribe',
    note: 'Your address is never shared. Around 4,200 readers.',
    placeholder: 'your@email',
    sentTitle: 'Thank you for subscribing.',
    sentBody: 'The first letter arrives this Sunday morning. You can close this tab.',
  },

  footer: {
    deskTitle: "The author's desk",
    deskBlurb: 'Articles and books about the rules we live by without choosing them — and the ones we can choose. Written slowly, deliberately.',
    cols: [
      ['Read', ['All articles', 'By topic', 'Quiz']],
      ['Books', ['The New Code', 'Coming soon', 'About the author']],
      ['Support', ['Contact', 'Press', 'Newsletter']],
    ] as Array<[string, string[]]>,
    copy: '© 2026 · georgewhole · PAPER FIRST',
    legal: ['TERMS'],
  },

  idea: {
    kicker: 'The idea',
    oldK: 'Old Code',
    oldBody: 'An inherited rule: the body is a problem to be solved. Hunger is weakness, fullness is failure. You did not write this or sign up for it.',
    newK: 'New Code',
    newBody: 'A quiet set of rules written slowly in your own hand. Not a plan, not "love yourself." Permission to put the old book down — and start another.',
    oldHead: 'The old code says',
    newHead: 'The new code says',
    pairs: [
      ['Earn the next meal', 'Feed yourself without conditions'],
      ['Less is always better', 'Enough is already good'],
      ['Discipline equals worth', 'Worth is not earned through the body'],
      ['Discomfort is danger', 'Discomfort is just discomfort'],
    ] as Array<[string, string]>,
  },

  articlesIndex: {
    crumb: ['Home', 'Articles'],
    kicker: 'Articles',
    title: 'Everything written, slowly.',
    sub: 'No endless feed here. A few series and standalone letters — read one at a time.',
    count: '23 pieces · updated on Sundays',
    featuredLabel: 'Featured',
    seriesLabel: 'Series',
  },

  booksIndex: {
    crumb: ['Home', 'Books'],
    kicker: 'Books',
    title: 'All the books in one place.',
    sub: 'Each one is short and human. No plans, no numbers, no before/after. One is out; the rest are being written.',
    publishedLabel: 'Out now',
    forthcomingLabel: 'Coming soon',
    forthcomingNote: 'Dates will appear when the books are ready. Not before.',
  },

  bookDetail: {
    factsLabel: 'Facts',
    langLabel: 'Languages',
    retailLabel: 'Where to buy',
    aboutLabel: 'What it is about',
    tocLabel: 'Contents',
    excerptLabel: 'Excerpt',
    praiseLabel: 'What people say',
    ideaKicker: 'The main idea',
    ideaTitle: 'The old code — and the quiet new one beneath it.',
    crossLabel: 'Other books in the series',
  },

  newsletterPage: {
    crumb: ['Home', 'Newsletter'],
    kicker: 'Newsletter',
    title: 'A letter on Sundays.',
    sub: 'An article, an excerpt, and a question to sit with. No promotions, no urgency.',
    points: [
      ['Once a week', 'One letter on Sunday morning — nothing in between.'],
      ['No noise', 'No promotions, no "tips", no pressure. Just writing.'],
      ['One click', 'Unsubscribe any time, no questions asked.'],
    ] as Array<[string, string]>,
  },

  contactPage: {
    crumb: ['Home', 'Contact'],
    kicker: 'Contact',
    title: 'A small desk, an open door.',
    sub: 'Write about a piece, a book, or just to say something. I read everything myself.',
  },

  contact: {
    kicker: 'Contact',
    title: 'Write to the author.',
    sub: 'This is a small desk, not an editorial office. I do not reply instantly — but I reply myself.',
    topicsLabel: 'Subject',
    topics: ['Question', 'Press', 'Collaboration'],
    nameLabel: 'What to call you',
    namePh: 'Name',
    emailLabel: 'Email for a reply',
    emailPh: 'your@email',
    msgLabel: 'Message',
    msgPh: 'Briefly, in your own words…',
    submit: 'Send',
    fine: 'The letter goes to the author personally. Your address is never shared.',
    sentTitle: 'Letter sent.',
    sentBody: 'Thank you. I do not reply instantly, but I reply myself — to the address you provided.',
    sentAgain: 'Write another',
    elsewhereLabel: 'Where else to read',
    elsewhere: [
      ['Newsletter', 'a letter on Sundays'],
      ['Goodreads', 'notes in the margins of books'],
    ] as Array<[string, string]>,
  },

  about: {
    crumb: ['Home', 'About'],
    kicker: 'About the author',
    title: 'I am sixty-four. I stopped counting at fifty-four. This is what I learned in those years.',
    sub: 'I am not a doctor or a trainer. I am a man with a body, a daughter, and ten quiet years on this side of a disorder I never spoke about out loud.',
    timelineLabel: 'A short timeline',
    timeline: [
      ['1962', 'Born in Kharkiv'],
      ['1978', 'The first rule about food'],
      ['1991', 'Forty years of diets begin'],
      ['1995', 'My daughter is born'],
      ['2016', 'I stop counting'],
      ['2024', 'I start writing publicly'],
      ['2026', 'First book'],
    ] as Array<[string, string]>,
    h2_1: 'Why this book, and not another.',
    p1: 'The books about food that I needed at thirty-five did not exist. The ones I came across at fifty were not written for me — they were for women, for the very young, or for an audience for whom shame was a fashionable problem rather than the air I had been breathing since childhood.',
    p2: 'I am not unique. There are many of us — quiet men in their fifties and sixties, with bodies and rules we never named. I wrote this book first for them, and then for everyone tired of the loud version of this story.',
    pull: 'I do not want to make this into a tidy story. It was not tidy. But it is quieter on this side — and that, it turns out, is enough.',
    pullBy: 'From the introduction',
    h2_2: 'What my daughter taught me without trying.',
    p3: 'Irina is thirty-one. She eats without argument. She did not learn this from me. She learned it because by the time she was old enough to watch, I had stopped performing the argument in front of her. That is the whole pedagogy.',
    p4: 'I can say that the rule changed in my generation, and that a different rule — a quieter one — can pass to the next. I cannot prove this. I can only say that I watched it happen, in my kitchen, among my people.',
    h2_3: 'What I will not write about.',
    p5: 'To save us both time: this book has no weight numbers, no before-and-after stories, no calorie counts, no plan. It does not promise transformation. It does not promise much. What it offers is mostly company.',
    nots: [
      'No promises or measurements of weight loss.',
      'No before / after photographs. Ever.',
      'No calorie or macro counting.',
      'No urgency, scarcity, or countdown.',
      'No tough love. A lot of slow love.',
    ],
    nextKicker: 'Where to go next',
    nextTitle: 'No need to decide today.',
    nextSub: 'Take the quiz, start with an article or a book — there is no right answer. The right one is whichever leaves you feeling a little less alone.',
    nextCtas: ['Take the quiz', 'Start with an article', 'Get the book'],
  },

  booksPromo: {
    kicker: "The author's books",
    title: 'If the articles resonate — there is a book too.',
    sub: 'The same ideas, but slower and in order. One is out; the next ones are being written.',
    cta: 'All books',
  },

  articleFigure: {
    caption: 'A kitchen in northern Spain, where most of the book was written.',
    credit: 'IMAGE · PLACEHOLDER',
  },

  sourcesLabel: 'Sources and further reading',

  crisis: {
    label: 'If you need support',
    note: 'This is books and letters, not treatment. If things are hard right now — please reach out for professional help.',
    // RU diaspora: find verified local resources before launch.
    resources: [
      { name: 'National Alliance for Eating Disorders', contact: '+1-866-662-1235', href: 'https://www.allianceforeatingdisorders.com/' },
    ],
  },

  notFound: {
    code: '404',
    title: 'It is quiet here.',
    sub: 'The page does not exist — or is still being written. That is fine. Go back to reading.',
    ctas: ['Home', 'All articles', 'Take the quiz'],
  },

  common: {
    getBook: 'Get the book',
    openBook: 'Open the book',
    readArticle: 'Read',
    allArticles: 'All articles',
    backHome: 'Home',
  },
};
