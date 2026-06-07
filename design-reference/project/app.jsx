// app.jsx — entry point. Холст со всеми артбордами.
// Один акцент — шалфей. Только русский язык.

const T = window.TOKENS;
const V = window.V; // единственный вариант — шалфей

function App() {
  return (
    <DesignCanvas>
      {/* 00 — дизайн-система */}
      <DCSection
        id="ds"
        title="00 · Дизайн-система"
        subtitle="Одна основа, один сдержанный акцент. Доверие важнее хайпа, редакторское важнее SaaS."
      >        <DCArtboard id="ds-core" label="Токены · типографика · компоненты" width={1480} height={5360}>
          <DSScreen/>
        </DCArtboard>
      </DCSection>

      {/* 01 — Главная */}
      <DCSection
        id="home"
        title="01 · Главная"
        subtitle="Дом автора georgewhole. Геро представляет автора и корпус книг; «полка» из нескольких книг — центр. Слева десктоп, справа мобайл."
      >
        <DCArtboard id="home-d" label="Главная · десктоп · 1280" width={1280} height={4360}>
          <HomeDesktopRU v={V}/>
        </DCArtboard>
        <DCArtboard id="home-m" label="Главная · мобайл · 390" width={390} height={4930}>
          <HomeMobileRU v={V}/>
        </DCArtboard>
      </DCSection>

      {/* 02 — Статья */}
      <DCSection
        id="article"
        title="02 · Статья"
        subtitle="Оптимизирована для чтения. Колонка 70ch, sticky-оглавление и сайдбар книги. Шапка с картинкой, рамка, pull-quote, фигура в теле, email-захват внутри текста."
      >
        <DCArtboard id="article-d" label="Статья · десктоп · 1280" width={1280} height={5120}>
          <ArticleDesktopRU v={V}/>
        </DCArtboard>
        <DCArtboard id="article-m" label="Статья · мобайл · 390" width={390} height={4320}>
          <ArticleMobileRU v={V}/>
        </DCArtboard>
      </DCSection>

      {/* 03 — Об авторе */}
      <DCSection
        id="about"
        title="03 · Об авторе"
        subtitle="Второй столб доверия. История — с достоинством и сдержанностью. Этаж доверия, мягкие CTA без давления."
      >
        <DCArtboard id="about-d" label="Об авторе · десктоп · 1280" width={1280} height={3740}>
          <AboutDesktopRU v={V}/>
        </DCArtboard>
        <DCArtboard id="about-m" label="Об авторе · мобайл · 390" width={390} height={3890}>
          <AboutMobileRU v={V}/>
        </DCArtboard>
      </DCSection>

      {/* 04 — Статьи · список */}
      <DCSection
        id="articles-index"
        title="04 · Статьи — список"
        subtitle="Без бесконечной ленты. Featured-текст, фильтры, серии тонкой типографикой. Внизу — переход к книгам."
      >
        <DCArtboard id="articles-d" label="Статьи · десктоп · 1280" width={1280} height={3340}>
          <ArticlesIndexRU v={V}/>
        </DCArtboard>
        <DCArtboard id="articles-m" label="Статьи · мобайл · 390" width={390} height={3060}>
          <ArticlesIndexMobileRU v={V}/>
        </DCArtboard>
      </DCSection>

      {/* 05 — Книги · список */}
      <DCSection
        id="books-index"
        title="05 · Книги — список"
        subtitle="Настоящая библиотека: «полка» из всех книг автора (статус «вышла / готовится»), затем развёрнутый блок вышедшей книги."
      >
        <DCArtboard id="books-d" label="Книги · десктоп · 1280" width={1280} height={1800}>
          <BooksIndexRU v={V}/>
        </DCArtboard>
        <DCArtboard id="books-m" label="Книги · мобайл · 390" width={390} height={2040}>
          <BooksIndexMobileRU v={V}/>
        </DCArtboard>
      </DCSection>

      {/* 06 — Книга · детальная */}
      <DCSection
        id="book-detail"
        title="06 · Книга — детальная"
        subtitle="Обложка, факты, языки, магазины, содержание, главная идея книги («Старый/Новый код») и отзывы. Кросс-промо других книг внизу."
      >
        <DCArtboard id="book-d" label="Книга · десктоп · 1280" width={1280} height={2860}>
          <BookDetailRU v={V}/>
        </DCArtboard>
        <DCArtboard id="book-m" label="Книга · мобайл · 390" width={390} height={4540}>
          <BookDetailMobileRU v={V}/>
        </DCArtboard>
      </DCSection>

      {/* 07 — Рассылка */}
      <DCSection
        id="newsletter"
        title="07 · Рассылка"
        subtitle="Просто подписка: форма и спокойное подтверждение «спасибо, что подписались». Справа — что внутри."
      >
        <DCArtboard id="news-d" label="Рассылка · десктоп · 1280" width={1280} height={1160}>
          <NewsletterRU v={V}/>
        </DCArtboard>
        <DCArtboard id="news-m" label="Рассылка · мобайл · 390" width={390} height={1380}>
          <NewsletterMobileRU v={V}/>
        </DCArtboard>
      </DCSection>

      {/* 08 — Обратная связь */}
      <DCSection
        id="contact"
        title="08 · Обратная связь"
        subtitle="Простая форма: тема, имя, почта, сообщение. После отправки — подтверждение. Рядом — где ещё читать."
      >
        <DCArtboard id="contact-d" label="Обратная связь · десктоп · 1280" width={1280} height={1480}>
          <ContactRU v={V}/>
        </DCArtboard>
        <DCArtboard id="contact-m" label="Обратная связь · мобайл · 390" width={390} height={1980}>
          <ContactMobileRU v={V}/>
        </DCArtboard>
      </DCSection>

      {/* 09 — Тест · 12 вопросов · три состояния, парами десктоп + мобайл */}
      <DCSection
        id="quiz"
        title="09 · Тест — 12 вопросов"
        subtitle="Три состояния парами (десктоп + мобайл): интро «как это работает» → прохождение (сегментный прогресс, назад, таймер) → результат без email, письмо по желанию."
      >
        <DCArtboard id="quiz-d" label="Тест · интро · десктоп" width={1280} height={1520}>
          <QuizPageRU v={V}/>
        </DCArtboard>
        <DCArtboard id="quiz-m" label="Тест · интро · мобайл" width={390} height={1680}>
          <QuizPageMobileRU v={V}/>
        </DCArtboard>
        <DCArtboard id="quiz-d-q" label="Тест · прохождение · десктоп" width={1280} height={1280}>
          <QuizPageRU v={V} demo={{ initialStage: 'q', initialIdx: 4, initialAnswers: [1, 2, 3, 2, 1, null, null, null, null, null, null, null], initialSecs: 78 }}/>
        </DCArtboard>
        <DCArtboard id="quiz-m-q" label="Тест · прохождение · мобайл" width={390} height={1320}>
          <QuizPageMobileRU v={V} demo={{ initialStage: 'q', initialIdx: 4, initialAnswers: [1, 2, 3, 2, 1, null, null, null, null, null, null, null], initialSecs: 78 }}/>
        </DCArtboard>
        <DCArtboard id="quiz-d-r" label="Тест · результат · десктоп" width={1280} height={1620}>
          <QuizPageRU v={V} demo={{ initialStage: 'result', initialAnswers: [1, 2, 3, 2, 1, 0, 2, 2, 1, 3, 2, 2] }}/>
        </DCArtboard>
        <DCArtboard id="quiz-m-r" label="Тест · результат · мобайл" width={390} height={1820}>
          <QuizPageMobileRU v={V} demo={{ initialStage: 'result', initialAnswers: [1, 2, 3, 2, 1, 0, 2, 2, 1, 3, 2, 2] }}/>
        </DCArtboard>
      </DCSection>

      {/* 09 — 404 */}
      <DCSection
        id="notfound"
        title="10 · 404 — пусто"
        subtitle="Тихая страница ошибки: спокойный знак и мягкие пути назад к чтению."
      >
        <DCArtboard id="nf-d" label="404 · десктоп · 1280" width={1280} height={980}>
          <NotFoundRU v={V}/>
        </DCArtboard>
        <DCArtboard id="nf-m" label="404 · мобайл · 390" width={390} height={1160}>
          <NotFoundMobileRU v={V}/>
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
