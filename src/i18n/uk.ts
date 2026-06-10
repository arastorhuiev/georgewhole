// UK UI dictionary — chrome + singular page copy. Repeatable content (articles,
// books) lives in Content Collections; quiz questions/archetypes live in
// src/quiz/. Vocabulary is fixed: «статті» = texts ON the site; «лист/розсилка»
// = the weekly email. The brand line never calls site content «листи».
// NOTE: copy is the design's placeholder/demo text — real book copy is swapped
// in later by the author.

import type { UI } from '@i18n';

export const uk: UI = {
  brand: 'georgewhole',
  brandTagline: 'книги і статті про їжу та тіло',
  nav: { articles: 'Статті', books: 'Книги', about: 'Про автора', newsletter: 'Розсилка' },
  mobileNav: { lang: 'Мова сайту', menu: 'Меню' },

  hero: {
    kicker: 'georgewhole · автор · з 2024',
    title: 'Книги про правила, яких ми не обирали — але за якими живемо.',
    sub: 'Кілька книг і лист раз на тиждень — про тіло, про правила, що дісталися нам у спадок, і про те, що лишається, коли стає тихіше.',
    primary: 'Дивитися книги',
    ghost: 'Про автора',
  },

  authorStripe: {
    kicker: 'Автор',
    line: 'georgewhole · книги і статті про їжу, тіло та правила, яких ми не обирали.',
    name: 'georgewhole',
    mobileSummary: 'книги і статті про їжу, тіло та правила, яких ми не обирали.',
    link: 'Читати історію',
  },

  shelf: {
    kicker: 'Цикл · п’ять книг',
    title: 'П’ять книг, одна лінія.',
    sub: 'Цикл іде від складних стосунків з їжею — крізь тіло, красу й дієти — до Нового Коду. Кожну книгу можна читати окремо; разом вони складаються в одну історію.',
    all: 'Усі книги',
    statusOut: 'Вийшла',
    statusSoon: 'Готується',
  },

  reading: {
    title: 'Якщо не знаєте, з чого почати.',
    all: 'Усі статті',
    tags: ['Усі', 'Старий Код', 'Чоловікам 40+', 'Батькам', 'Після дієт', 'Особистий досвід'],
  },

  quizUi: {
    progressLabel: 'Питання',
    of: 'з',
    back: 'Назад',
    next: 'Далі',
    finish: 'Дізнатися результат',
    startCta: 'Почати тест',
    timerNote: 'Часу немає. Таймер — просто орієнтир.',
    howLabel: 'Як це працює',
    resultKicker: 'Ваш результат',
    resultStart: 'З цих текстів варто почати:',
    resultRetake: 'Пройти знову',
    resultMailKicker: 'За бажанням',
    resultMailTitle: 'Надсилати лист раз на тиждень?',
    resultMailSub: 'Email лише для листа. Без нього результат уже у вас. Відписатися — в один клік.',
    resultMailCta: 'Підписатися',
    resultMailPh: 'ваш@email',
    resultMailSkip: 'Достатньо результату, дякую',
  },

  quizHome: {
    kicker: 'Тест до «Нового Коду» · 4 хвилини',
    title: 'Який у вас Старий Код?',
    sub: 'Дванадцять спокійних питань, щоб почути правила, які ми засвоїли й більше не помічаємо. Результат можна отримати без підписки.',
    submit: 'Почати тест',
    note: 'Можна пройти без вказання пошти.',
    placeholder: 'ваш@email',
  },

  newsletter: {
    title: 'Лист раз на тиждень.',
    sub: 'Стаття, уривок і питання, над яким варто подумати без поспіху. Жодних акцій і «встигніть сьогодні». Відписатися — в один клік.',
    submit: 'Підписатися',
    note: 'Адреса не передається третім особам. Близько 4 200 читачів.',
    placeholder: 'ваш@email',
    sentTitle: 'Дякуємо, що підписалися.',
    sentBody: 'Перший лист прийде найближчої неділі вранці. Можна закрити цю вкладку.',
  },

  footer: {
    deskTitle: 'Стіл автора',
    deskBlurb: 'Статті і книги про правила, за якими ми живемо, не обираючи їх, — і про ті, що ми можемо обрати.',
    // Each link is [label, locale-less path]; the Footer prefixes /<locale>/.
    cols: [
      ['Читати', [['Усі статті', 'articles'], ['Тест', 'quiz']]],
      ['Книги', [['Складні стосунки з їжею', 'books/slozhnye'], ['Незабаром', 'books'], ['Про автора', 'about']]],
      ['Зв’язок', [['Контакти', 'contact'], ['Преса', 'contact'], ['Розсилка', 'newsletter']]],
    ] as Array<[string, Array<[string, string]>]>,
    copy: '© 2026 · georgewhole',
  },

  idea: {
    kicker: 'Ідея',
    oldK: 'Старий Код',
    oldBody: 'Успадковане правило: тіло — це проблема, яку треба вирішувати. Голод — слабкість, ситість — провал. Ви цього не писали й під цим не підписувалися.',
    newK: 'Новий Код',
    newBody: 'Кілька правил, які пишеш собі сам, своїми словами. Не план і не «полюбіть себе». А право відкласти стару книгу — і відкрити нову.',
    oldHead: 'Старий код каже',
    newHead: 'Новий код каже',
    pairs: [
      ['Заслужити наступний прийом їжі', 'Годувати себе без умов'],
      ['Менше — завжди краще', 'Достатньо — вже добре'],
      ['Дисципліна = твоя цінність', 'Твоя цінність не залежить від тіла'],
      ['Дискомфорт — це небезпека', 'Дискомфорт — це просто дискомфорт'],
    ] as Array<[string, string]>,
  },

  articlesIndex: {
    crumb: ['Головна', 'Статті'],
    kicker: 'Статті',
    title: 'Усе, що написано — в одному місці.',
    sub: 'Тут немає нескінченної стрічки. Кілька серій і окремі тексти — читайте по одному.',
    count: '23 тексти · оновлюється в неділю',
    featuredLabel: 'Вибране',
    seriesLabel: 'Серії',
    filterAria: 'Фільтр за темами',
  },

  booksIndex: {
    crumb: ['Головна', 'Книги'],
    kicker: 'Книги',
    title: 'Усі книги в одному місці.',
    sub: 'Кожну можна прочитати за вечір. Жодних планів, цифр на вагах і «до/після». Одна вийшла, решта пишуться.',
    publishedLabel: 'Вийшла',
    forthcomingLabel: 'Готуються',
    forthcomingNote: 'Дати з’являться, коли книги будуть готові. Не раніше.',
  },

  bookDetail: {
    factsLabel: 'Факти',
    langLabel: 'Мови',
    retailLabel: 'Де купити',
    aboutLabel: 'Про що книга',
    tocLabel: 'Зміст',
    excerptLabel: 'Уривок',
    praiseLabel: 'Про книгу говорять',
    ideaKicker: 'Головна ідея',
    ideaTitle: 'Старий код — і новий, негучний, під ним.',
    crossLabel: 'Решта книг циклу',
  },

  newsletterPage: {
    crumb: ['Головна', 'Розсилка'],
    kicker: 'Розсилка',
    title: 'Лист у неділю.',
    sub: 'Стаття, уривок і питання, над яким можна подумати без поспіху. Без акцій і «встигніть сьогодні».',
    points: [
      ['Раз на тиждень', 'Один лист у неділю вранці — і нічого між.'],
      ['Без шуму', 'Жодних акцій, «порад» і тиску. Лише текст.'],
      ['Один клік', 'Відписатися можна будь-коли, без запитань.'],
    ] as Array<[string, string]>,
  },

  contactPage: {
    crumb: ['Головна', 'Зворотний зв’язок'],
    kicker: 'Зворотний зв’язок',
    title: 'Пишіть — я читаю все сам.',
    sub: 'Можна написати про текст, про книгу або просто відгукнутися.',
  },

  contact: {
    kicker: 'Зворотний зв’язок',
    title: 'Написати автору.',
    sub: 'Це маленький стіл, а не редакція. Відповідаю не одразу — але відповідаю сам.',
    topicsLabel: 'Про що лист',
    topics: ['Питання', 'Преса', 'Співавторство'],
    nameLabel: 'Як до вас звертатися',
    namePh: 'Ім’я',
    emailLabel: 'Пошта для відповіді',
    emailPh: 'ваш@email',
    msgLabel: 'Повідомлення',
    msgPh: 'Коротко, своїми словами…',
    submit: 'Надіслати лист',
    fine: 'Лист надходить на особисту пошту автора. Адреса не передається третім особам.',
    sentTitle: 'Лист надіслано.',
    sentBody: 'Дякую. Відповідаю не одразу, але відповідаю сам — на вказану пошту.',
    sentAgain: 'Написати ще один',
    elsewhereLabel: 'Де ще читати',
    // [label, note, href] — href is an external URL or a locale-less path.
    elsewhere: [
      ['Розсилка', 'лист у неділю', 'newsletter'],
      ['Goodreads', 'нотатки на полях книг', 'https://www.goodreads.com'],
    ] as Array<[string, string, string]>,
  },


  booksPromo: {
    kicker: 'Книги автора',
    title: 'Якщо статті відгукуються — є і книга.',
    sub: 'Ті самі правила, але по порядку й повністю. Одна вийшла, наступні пишуться.',
    cta: 'Усі книги',
  },

  articleFigure: {
    caption: 'Кухня на півночі Іспанії, де написано більшу частину книги.',
    credit: 'Ілюстрація',
  },

  sourcesLabel: 'Джерела та подальше читання',

  notFound: {
    code: '404',
    title: 'Цієї сторінки немає.',
    sub: 'Можливо, вона ще пишеться. Буває. Поверніться до читання.',
    ctas: ['На головну', 'Усі статті', 'Пройти тест'],
  },

  // Decorative captions for the placeholder atmospheric images.
  atmos: {
    heroMorning: 'ранкове світло · нікого в кадрі',
    newsletterPaper: 'післяобіднє світло · стіл з паперами',
    aboutDusk: 'автор за столом',
    articleFallback: 'ранкове світло · північ Іспанії',
  },

  // Article-page chrome (table of contents, related block).
  articleDetail: {
    tocLabel: 'Зміст',
    tocNote: '— прокрутіть —',
    relatedLabel: 'По темі',
    readNext: 'Читати далі',
  },

  common: {
    getBook: 'Купити книгу',
    openBook: 'Відкрити книгу',
    readArticle: 'Читати',
    allArticles: 'Усі статті',
    backHome: 'На головну',
    breadcrumbHome: 'Головна',
    skipToContent: 'Перейти до вмісту',
  },
};
