// ES UI dictionary — chrome + singular page copy. Mirrors ru.ts key-for-key.
// Vocabulary is fixed: "articles" = texts ON the site; "carta/boletín" = the
// weekly email. Repeatable content (articles, books) lives in Content
// Collections; quiz questions/archetypes live in src/quiz/.
// NOTE: copy is the design's placeholder/demo text — real book copy is swapped
// in later by the author.

import type { UI } from '@i18n';

export const es: UI = {
  brand: 'georgewhole',
  brandTagline: 'libros y artículos sobre la comida y el cuerpo',
  nav: { articles: 'Artículos', books: 'Libros', about: 'El autor', newsletter: 'Boletín' },
  mobileNav: { lang: 'Idioma del sitio', menu: 'Menú' },

  hero: {
    kicker: 'georgewhole · autor · desde 2024',
    title: 'Libros sobre las reglas que nunca elegimos — pero por las que vivimos.',
    sub: 'Unos pocos libros y una carta semanal — sobre el cuerpo, las reglas que heredamos y lo que queda cuando todo se aquieta.',
    primary: 'Ver los libros',
    ghost: 'El autor',
  },

  authorStripe: {
    kicker: 'Autor',
    line: 'georgewhole · libros y artículos sobre la comida, el cuerpo y las reglas que no elegimos.',
    name: 'georgewhole',
    mobileSummary: 'libros y artículos sobre la comida, el cuerpo y las reglas que no elegimos.',
    link: 'Leer la historia',
  },

  shelf: {
    kicker: 'Serie · cinco libros',
    title: 'Cinco libros, una sola línea.',
    sub: 'La serie va desde una relación complicada con la comida — a través del cuerpo, la belleza y las dietas — hasta el Nuevo Código. Cada libro se sostiene solo; juntos forman una sola historia.',
    all: 'Todos los libros',
    statusOut: 'Publicado',
    statusSoon: 'Próximamente',
  },

  reading: {
    title: 'Si no sabes por dónde empezar.',
    all: 'Todos los artículos',
    tags: ['Todos', 'Viejo Código', 'Hombres 40+', 'Para padres', 'Después de las dietas', 'Personal'],
  },

  quizUi: {
    progressLabel: 'Pregunta',
    of: 'de',
    back: 'Atrás',
    next: 'Siguiente',
    finish: 'Ver mi resultado',
    startCta: 'Hacer el test',
    timerNote: 'Sin límite de tiempo. El temporizador es solo una referencia.',
    howLabel: 'Cómo funciona',
    resultKicker: 'Tu resultado',
    resultStart: 'Empieza por estos textos:',
    resultRetake: 'Repetir el test',
    resultMailKicker: 'Opcional',
    resultMailTitle: '¿Recibir una carta una vez a la semana?',
    resultMailSub: 'El correo es solo para la carta. Tu resultado ya es tuyo sin él. Date de baja con un clic.',
    resultMailCta: 'Suscribirse',
    resultMailPh: 'tu@email',
    resultMailSkip: 'El resultado es suficiente, gracias',
  },

  quizHome: {
    kicker: 'Test para «El Nuevo Código» · 4 minutos',
    title: '¿Cuál es tu Viejo Código?',
    sub: 'Doce preguntas tranquilas para escuchar las reglas que absorbimos y dejamos de notar. Puedes ver tu resultado sin suscribirte.',
    submit: 'Hacer el test',
    note: 'No se requiere correo electrónico.',
    placeholder: 'tu@email',
  },

  newsletter: {
    title: 'Una carta a la semana.',
    sub: 'Un artículo, un fragmento y una pregunta con la que quedarse. Sin promociones ni falsas urgencias. Date de baja con un clic.',
    submit: 'Suscribirse',
    note: 'Tu dirección no se comparte nunca. Alrededor de 4 200 lectores.',
    placeholder: 'tu@email',
    sentTitle: 'Gracias por suscribirte.',
    sentBody: 'La primera carta llega este domingo por la mañana. Puedes cerrar esta pestaña.',
  },

  footer: {
    deskTitle: 'El escritorio del autor',
    deskBlurb: 'Artículos y libros sobre las reglas por las que vivimos sin elegirlas — y las que sí podemos elegir.',
    // Each link is [label, locale-less path]; the Footer prefixes /<locale>/.
    cols: [
      ['Leer', [['Todos los artículos', 'articles'], ['Test', 'quiz']]],
      ['Libros', [['Una relación difícil con la comida', 'books/slozhnye'], ['Próximamente', 'books'], ['El autor', 'about']]],
      ['Contacto', [['Contacto', 'contact'], ['Prensa', 'contact'], ['Boletín', 'newsletter']]],
    ] as Array<[string, Array<[string, string]>]>,
    copy: '© 2026 · georgewhole',
  },

  idea: {
    kicker: 'La idea',
    oldK: 'Viejo Código',
    oldBody: 'Una regla heredada: el cuerpo es un problema que hay que resolver. El hambre es debilidad, la saciedad es un fracaso. Tú no escribiste esto ni te apuntaste a ello.',
    newK: 'Nuevo Código',
    newBody: 'Un conjunto tranquilo de reglas que escribes con tus propias palabras. No es un plan ni «quiérete a ti mismo». Es el permiso de dejar el libro viejo — y empezar otro.',
    oldHead: 'El viejo código dice',
    newHead: 'El nuevo código dice',
    pairs: [
      ['Merecer la próxima comida', 'Alimentarte sin condiciones'],
      ['Menos siempre es mejor', 'Suficiente ya es bueno'],
      ['La disciplina es tu valor', 'Tu valor no depende de tu cuerpo'],
      ['El malestar es peligro', 'El malestar es solo malestar'],
    ] as Array<[string, string]>,
  },

  articlesIndex: {
    crumb: ['Inicio', 'Artículos'],
    kicker: 'Artículos',
    title: 'Todo lo escrito, en un solo lugar.',
    sub: 'Aquí no hay un feed interminable. Unas pocas series y textos sueltos — léelos de uno en uno.',
    count: '23 textos · se actualiza los domingos',
    featuredLabel: 'Destacados',
    seriesLabel: 'Series',
    filterAria: 'Filtrar por tema',
  },

  booksIndex: {
    crumb: ['Inicio', 'Libros'],
    kicker: 'Libros',
    title: 'Todos los libros en un solo lugar.',
    sub: 'Cada uno se lee en una tarde. Sin planes, sin números en la báscula, sin antes/después. Uno publicado; el resto, en proceso.',
    publishedLabel: 'Publicado',
    forthcomingLabel: 'Próximamente',
    forthcomingNote: 'Las fechas aparecerán cuando los libros estén listos. No antes.',
  },

  bookDetail: {
    factsLabel: 'Datos',
    langLabel: 'Idiomas',
    retailLabel: 'Dónde comprarlo',
    aboutLabel: 'De qué trata',
    tocLabel: 'Contenido',
    excerptLabel: 'Fragmento',
    praiseLabel: 'Lo que dicen',
    ideaKicker: 'La idea principal',
    ideaTitle: 'El viejo código — y el nuevo, silencioso, debajo.',
    crossLabel: 'Otros libros de la serie',
  },

  newsletterPage: {
    crumb: ['Inicio', 'Boletín'],
    kicker: 'Boletín',
    title: 'Una carta los domingos.',
    sub: 'Un artículo, un fragmento y una pregunta con la que quedarse. Sin promociones ni falsas urgencias.',
    points: [
      ['Una vez a la semana', 'Una carta el domingo por la mañana — nada en medio.'],
      ['Sin ruido', 'Sin promociones, sin «consejos», sin presión. Solo texto.'],
      ['Un clic', 'Date de baja cuando quieras, sin preguntas.'],
    ] as Array<[string, string]>,
  },

  contactPage: {
    crumb: ['Inicio', 'Contacto'],
    kicker: 'Contacto',
    title: 'Escribe — lo leo todo yo mismo.',
    sub: 'Escribe sobre un texto, un libro o simplemente para decir algo.',
  },

  contact: {
    kicker: 'Contacto',
    title: 'Escribir al autor.',
    sub: 'Esto es una mesa pequeña, no una redacción. No respondo de inmediato — pero respondo yo mismo.',
    topicsLabel: 'Asunto',
    topics: ['Pregunta', 'Prensa', 'Colaboración'],
    nameLabel: '¿Cómo debo llamarte?',
    namePh: 'Nombre',
    emailLabel: 'Correo para la respuesta',
    emailPh: 'tu@email',
    msgLabel: 'Mensaje',
    msgPh: 'Brevemente, con tus propias palabras…',
    submit: 'Enviar',
    fine: 'La carta llega al correo personal del autor. Tu dirección no se comparte nunca.',
    sentTitle: 'Carta enviada.',
    sentBody: 'Gracias. No respondo de inmediato, pero respondo yo mismo — a la dirección que indicaste.',
    sentAgain: 'Escribir otra',
    elsewhereLabel: 'Dónde más leer',
    // [label, note, href] — href is an external URL or a locale-less path.
    elsewhere: [
      ['Boletín', 'una carta los domingos', 'newsletter'],
      ['Goodreads', 'notas al margen de los libros', 'https://www.goodreads.com'],
    ] as Array<[string, string, string]>,
  },


  booksPromo: {
    kicker: 'Los libros del autor',
    title: 'Si los artículos te resuenan — también hay un libro.',
    sub: 'Las mismas ideas, pero en orden y completas. Uno publicado; los siguientes, en proceso.',
    cta: 'Todos los libros',
  },

  articleFigure: {
    caption: 'Una cocina en el norte de España, donde se escribió gran parte del libro.',
    credit: 'Ilustración',
  },

  sourcesLabel: 'Fuentes y lecturas adicionales',

  notFound: {
    code: '404',
    title: 'Esta página no existe.',
    sub: 'Quizás todavía se está escribiendo. Pasa. Vuelve a leer.',
    ctas: ['Inicio', 'Todos los artículos', 'Hacer el test'],
  },

  // Decorative captions for the placeholder atmospheric images.
  atmos: {
    heroMorning: 'luz de mañana · nadie en el encuadre',
    newsletterPaper: 'luz de tarde · una mesa con papeles',
    aboutDusk: 'el autor en su mesa',
    articleFallback: 'luz de mañana · norte de España',
  },

  // Article-page chrome (table of contents, related block).
  articleDetail: {
    tocLabel: 'Contenido',
    tocNote: '— desplázate —',
    relatedLabel: 'Relacionado',
    readNext: 'Leer siguiente',
  },

  common: {
    getBook: 'Comprar el libro',
    openBook: 'Abrir el libro',
    readArticle: 'Leer',
    allArticles: 'Todos los artículos',
    backHome: 'Inicio',
    breadcrumbHome: 'Inicio',
    skipToContent: 'Ir al contenido',
  },
};
