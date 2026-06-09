// EN UI dictionary — chrome + singular page copy. Mirrors ru.ts key-for-key.
// Vocabulary is fixed: "articles" = texts ON the site; "letter/newsletter" = the
// weekly email. Repeatable content (articles, books) lives in Content
// Collections; quiz questions/archetypes live in src/quiz/.
// NOTE: copy is the design's placeholder/demo text — real book copy is swapped
// in later by the author.

export const en = {
  brand: 'georgewhole',
  brandTagline: 'books and articles on food and the body',
  nav: { articles: 'Articles', books: 'Books', about: 'About', newsletter: 'Newsletter' },
  mobileNav: { lang: 'Site language', menu: 'Menu' },

  hero: {
    kicker: 'georgewhole · author · since 2024',
    title: 'Books about the rules we never chose — but live by anyway.',
    sub: "A few books and a weekly letter — about the body, the rules we inherited, and what's left when things get quieter.",
    primary: 'See the books',
    ghost: 'About the author',
  },

  authorStripe: {
    kicker: 'Author',
    line: 'georgewhole · writes slowly — five books about one thing.',
    name: 'georgewhole',
    mobileSummary: 'writes slowly — five books about one thing.',
    link: 'Read the story',
  },

  shelf: {
    kicker: 'Series · five books',
    title: 'Five books, one line.',
    sub: 'The series moves from a complicated relationship with food — through the body, beauty, and diets — to the New Code. Each book stands alone; together they tell one story.',
    all: 'All books',
    statusOut: 'Out now',
    statusSoon: 'Coming soon',
  },

  reading: {
    title: "If you don't know where to start.",
    all: 'All articles',
    tags: ['All', 'Old Code', 'Men 40+', 'For parents', 'After the diets', 'Personal'],
  },

  quizUi: {
    progressLabel: 'Question',
    of: 'of',
    back: 'Back',
    next: 'Next',
    finish: 'See my result',
    startCta: 'Take the quiz',
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
    sub: 'Twelve calm questions to hear the rules we absorbed and stopped noticing. You can get your result without subscribing.',
    submit: 'Take the quiz',
    note: 'No email required.',
    placeholder: 'your@email',
  },

  newsletter: {
    title: 'A letter once a week.',
    sub: 'An article, an excerpt, and a question to sit with. No promotions, no false urgency. Unsubscribe in one click.',
    submit: 'Subscribe',
    note: 'Your address is never shared. Around 4,200 readers.',
    placeholder: 'your@email',
    sentTitle: 'Thank you for subscribing.',
    sentBody: 'The first letter arrives this Sunday morning. You can close this tab.',
  },

  footer: {
    deskTitle: "The author's desk",
    deskBlurb: 'Articles and books about the rules we live by without choosing them — and the ones we can choose. Written slowly, deliberately.',
    // Each link is [label, locale-less path]; the Footer prefixes /<locale>/.
    cols: [
      ['Read', [['All articles', 'articles'], ['Quiz', 'quiz']]],
      ['Books', [['The New Code', 'books/novy-kod'], ['Coming soon', 'books'], ['About the author', 'about']]],
      ['Contact', [['Contact', 'contact'], ['Press', 'contact'], ['Newsletter', 'newsletter']]],
    ] as Array<[string, Array<[string, string]>]>,
    copy: '© 2026 · georgewhole · written slowly',
  },

  idea: {
    kicker: 'The idea',
    oldK: 'Old Code',
    oldBody: 'An inherited rule: the body is a problem to be solved. Hunger is weakness, fullness is failure. You did not write this or sign up for it.',
    newK: 'New Code',
    newBody: 'A quiet set of rules you write slowly, in your own words. Not a plan, not "love yourself." Permission to put the old book down — and start another.',
    oldHead: 'The old code says',
    newHead: 'The new code says',
    pairs: [
      ['Earn the next meal', 'Feed yourself without conditions'],
      ['Less is always better', 'Enough is already good'],
      ['Discipline equals your worth', "Your worth doesn't depend on your body"],
      ['Discomfort is danger', 'Discomfort is just discomfort'],
    ] as Array<[string, string]>,
  },

  articlesIndex: {
    crumb: ['Home', 'Articles'],
    kicker: 'Articles',
    title: 'Everything written, and written slowly.',
    sub: 'No endless feed here. A few series and standalone pieces — read one at a time.',
    count: '23 pieces · updated on Sundays',
    featuredLabel: 'Featured',
    seriesLabel: 'Series',
    filterAria: 'Filter by topic',
  },

  booksIndex: {
    crumb: ['Home', 'Books'],
    kicker: 'Books',
    title: 'All the books in one place.',
    sub: 'Each one reads in an evening. No plans, no numbers on a scale, no before/after. One is out; the rest are being written.',
    publishedLabel: 'Out now',
    forthcomingLabel: 'Coming soon',
    forthcomingNote: 'Dates will appear when the books are ready. Not before.',
  },

  bookDetail: {
    factsLabel: 'Facts',
    langLabel: 'Languages',
    retailLabel: 'Where to buy',
    aboutLabel: "What it's about",
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
    sub: 'An article, an excerpt, and a question to sit with. No promotions, no false urgency.',
    points: [
      ['Once a week', 'One letter on Sunday morning — nothing in between.'],
      ['No noise', 'No promotions, no "tips", no pressure. Just writing.'],
      ['One click', 'Unsubscribe any time, no questions asked.'],
    ] as Array<[string, string]>,
  },

  contactPage: {
    crumb: ['Home', 'Contact'],
    kicker: 'Contact',
    title: 'Write — I read everything myself.',
    sub: 'Write about a piece, a book, or just to say something.',
  },

  contact: {
    kicker: 'Contact',
    title: 'Write to the author.',
    sub: 'This is a small desk, not an editorial office. I do not reply instantly — but I reply myself.',
    topicsLabel: 'Subject',
    topics: ['Question', 'Press', 'Collaboration'],
    nameLabel: 'What should I call you?',
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
    // [label, note, href] — href is an external URL or a locale-less path.
    elsewhere: [
      ['Newsletter', 'a letter on Sundays', 'newsletter'],
      ['Goodreads', 'notes in the margins of books', 'https://www.goodreads.com'],
    ] as Array<[string, string, string]>,
  },

  about: {
    crumb: ['Home', 'About'],
    kicker: 'About the author',
    title: "I'm sixty-four. I stopped counting at fifty-four. Here's what I learned in those years.",
    sub: 'Not a doctor or a trainer. Just a man who kept quiet about a disorder for years — and has lived more calmly for the last ten.',
    timelineLabel: 'A short timeline',
    timeline: [
      ['1962', 'Born in Kharkiv'],
      ['1978', 'The first rule about food'],
      ['1991', 'The diet years begin'],
      ['1995', 'My daughter is born'],
      ['2016', 'I stop counting'],
      ['2024', 'I start writing publicly'],
      ['2026', 'First book'],
    ] as Array<[string, string]>,
    h2_1: 'Why this book, and not another.',
    p1: 'The books about food that I needed at thirty-five did not exist. The ones I came across at fifty were not written for me — they were for women, for the very young, or for people for whom shame was a fashionable problem rather than the air I had been breathing since childhood.',
    p2: "I'm not the only one. There are many of us — men near sixty, carrying rules about food we never said out loud. I wrote this book first for them, and then for everyone tired of the loud version of this story.",
    pull: "I don't want to make this a neat, tidy story. It wasn't. But it's quieter now — and that, it turns out, is enough.",
    pullBy: 'From the introduction',
    h2_2: 'What my daughter taught me without trying.',
    p3: "Irina is thirty-one. She eats without argument. She didn't learn that from me — but because by the time she was old enough to notice, I'd stopped performing the fight in front of her. That's the whole of it.",
    p4: "I can say the rule changed in my generation — and that a quieter one can pass to the next. I can't prove it. I can only say I watched it happen, in my own kitchen, in my own family.",
    h2_3: 'What I will not write about.',
    p5: 'To save us both time: this book has no weight numbers, no before-and-after, no calorie counts, no plan. It does not promise a transformation. It does not promise much. Mostly, it offers company.',
    nots: [
      'No promises to lose weight, and no counting it.',
      'No before / after photos. Ever.',
      'No calories or macros.',
      'No "today only," "almost gone," or countdowns.',
      'No tough love — there is none here. A lot of the slow kind, though.',
    ],
    nextKicker: 'Where to go next',
    nextTitle: 'No need to decide today.',
    nextSub: "Take the quiz, start with an article or a book — there's no right answer. The right one is whichever leaves you a little less alone.",
    nextCtas: ['Take the quiz', 'Start with an article', 'Get the book'],
    credKicker: 'Credibility',
    credTitle: 'Why you can trust this.',
    credBody: "Not because I'm an expert. Because I've been through it, I cite my sources, and I'm honest about what this book doesn't do.",
    credCards: [
      ['Lived experience', 'Ten years now', 'Written from the far side of recovery — no distance, no ready answers.'],
      ['Sources', 'Backed by research', 'Links to the work and the data itself — not "expert tips," but what I lean on.'],
      ["What it isn't", 'Not therapy, not a plan', 'These are books and texts. If things are hard right now, please reach out for professional help.'],
    ] as Array<[string, string, string]>,
  },

  booksPromo: {
    kicker: "The author's books",
    title: 'If the articles resonate — there is a book too.',
    sub: 'The same ideas, but slower and in order. One is out; the next ones are being written.',
    cta: 'All books',
  },

  articleFigure: {
    caption: 'A kitchen in northern Spain, where most of the book was written.',
    credit: 'Illustration',
  },

  sourcesLabel: 'Sources and further reading',

  crisis: {
    label: 'If you need support',
    note: 'These are books and texts, not treatment. If things are hard right now — please reach out for professional help.',
    // RU diaspora: find verified local resources before launch.
    resources: [
      { name: 'National Alliance for Eating Disorders', contact: '+1-866-662-1235', href: 'https://www.allianceforeatingdisorders.com/' },
    ],
  },

  notFound: {
    code: '404',
    title: "This page isn't here.",
    sub: "Maybe it's still being written. It happens. Go back to reading.",
    ctas: ['Home', 'All articles', 'Take the quiz'],
  },

  // Decorative captions for the placeholder atmospheric images.
  atmos: {
    heroMorning: 'morning light · no one in frame',
    newsletterPaper: 'afternoon light · a desk of papers',
    aboutDusk: 'the author at his desk',
    articleFallback: 'morning light · northern Spain',
  },

  // Article-page chrome (table of contents, related block).
  articleDetail: {
    tocLabel: 'Contents',
    tocNote: '— scroll —',
    relatedLabel: 'Related',
    readNext: 'Read next',
  },

  common: {
    getBook: 'Get the book',
    openBook: 'Open the book',
    readArticle: 'Read',
    allArticles: 'All articles',
    backHome: 'Home',
    breadcrumbHome: 'Home',
    skipToContent: 'Skip to content',
  },
};
