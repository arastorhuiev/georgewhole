// screen-design-system.jsx — Дизайн-система «Новый Код».
// Один акцент — шалфей. Только русский язык.

const T = window.TOKENS;
const V = window.V;

function DSScreen() {
  return (
    <div style={{
      background: T.bg, color: T.ink, fontFamily: T.sans, padding: '64px 72px',
      minHeight: '100%', boxSizing: 'border-box',
    }}>
      <DSHeader/>
      <DSColors/>
      <DSType/>
      <DSSpacingShadow/>
      <DSComponents/>
    </div>
  );
}

function DSHeader() {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'flex-end',
      paddingBottom: 32, borderBottom: `1px solid ${T.hair}`, marginBottom: 56,
    }}>
      <div>
        <div style={{
          fontFamily: T.mono, fontSize: 11, letterSpacing: 1.6, textTransform: 'uppercase',
          color: T.inkMuted, marginBottom: 14,
        }}>Дизайн-система · v0.2 · авторская платформа</div>
        <h1 style={{
          fontFamily: T.serif, fontSize: 56, lineHeight: 1.05, margin: 0,
          fontWeight: 400, letterSpacing: -0.8, color: T.ink, maxWidth: 980,
        }}>«Новый Код» — тихая редакторская система для автора, который не продаёт хайп.</h1>
        <p style={{
          fontFamily: T.serif, fontSize: 19, lineHeight: 1.6, color: T.inkSoft,
          maxWidth: 720, margin: '20px 0 0',
        }}>
          Тёплые нейтральные тона, кремовая страница, Georgia с поддержкой кириллицы
          в паре с нативным сан-серифом. Один сдержанный акцент — шалфей — отмечает голос
          автора, а не продаёт. Те же токены масштабируются от 65-символьной колонки
          статьи до платформы из нескольких книг.
        </p>
      </div>
      <div style={{
        fontFamily: T.mono, fontSize: 11, color: T.inkMuted, lineHeight: 1.7, textAlign: 'right',
      }}>
        ДОВЕРИЕ ВАЖНЕЕ ХАЙПА<br/>
        EN · UK · RU · (ES)<br/>
        РЕДАКТОРСКАЯ, НЕ SAAS
      </div>
    </div>
  );
}

function DSColors() {
  const neutrals = [
    ['Фон',          T.bg],
    ['Поверхность',  T.surface],
    ['Мягкая пов.',  T.surfaceSoft],
    ['Чернила',      T.ink],
    ['Чернила мягк.',T.inkSoft],
    ['Чернила прим.',T.inkMuted],
  ];
  return (
    <DSSection number="01" title="Цвет" subtitle="Тёплые нейтралы несут систему. Акцент — украшение, а не несущая конструкция.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12, marginBottom: 28 }}>
        {neutrals.map(([name, c]) => (
          <Swatch key={name} name={name} color={c} dark={['Чернила','Чернила мягк.','Чернила прим.'].includes(name)}/>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 32, alignItems: 'flex-start' }}>
        <div style={{ border: `1px solid ${T.hair}`, padding: 18, background: T.surfaceSoft }}>
          <div style={{ fontFamily: T.mono, fontSize: 11, color: T.inkMuted, letterSpacing: 0.8, marginBottom: 12, textTransform: 'uppercase' }}>Акцент · шалфей</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8 }}>
            <Swatch name="Основной" color={V.accent} dark/>
            <Swatch name="Глубокий" color={V.accentDeep} dark/>
            <Swatch name="Заливка" color={V.accentSoft} bordered/>
            <Swatch name="Линия"   color={V.accentHair} bordered/>
          </div>
        </div>
        <div>
          <p style={{
            fontFamily: T.serif, fontSize: 18, color: T.ink, lineHeight: 1.55,
            margin: '0 0 16px', maxWidth: '60ch',
          }}>
            Шалфей читается как спокойствие — приближается к настроению «книжного издателя».
            Сильнее всего работает с мужской и гендерно-нейтральной аудиторией. Никогда не используется
            на самом себе: сидит только на фоне или на поверхности.
          </p>
          <ul style={{
            margin: 0, padding: 0, listStyle: 'none', maxWidth: '60ch',
          }}>
            {[
              <>Контраст основного текста по фону: <strong style={{ color: T.ink, fontFamily: T.mono }}>11.6 : 1</strong>.</>,
              <>Акцент на фоне проходит WCAG AA для текста ≥ 14&nbsp;px.</>,
              <>Поверхности и линии — тёплый нейтральный ряд, без чистого чёрного.</>,
            ].map((item, i) => (
              <li key={i} style={{
                fontFamily: T.sans, fontSize: 13.5, lineHeight: 1.6, color: T.inkSoft,
                padding: '10px 0', borderTop: `1px solid ${T.hairSoft}`,
                display: 'grid', gridTemplateColumns: '20px 1fr', gap: 8,
              }}>
                <span style={{ fontFamily: T.mono, color: T.inkMuted, fontSize: 11 }}>—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DSSection>
  );
}

function Swatch({ name, color, dark = false, bordered = false }) {
  // rgba(...) labels are too long for the narrow swatch column — convert
  // to a short "α 10%" form so they don't overflow into adjacent columns.
  const m = typeof color === 'string' && color.match(/rgba?\([^)]*,\s*([\d.]+)\s*\)/i);
  const label = m ? `α ${Math.round(parseFloat(m[1]) * 100)}%` : color;
  return (
    <div style={{ minWidth: 0 }}>
      <div style={{
        height: 64, background: color, border: bordered ? `1px solid ${T.hair}` : 'none',
      }}/>
      <div style={{ fontSize: 12, color: T.ink, marginTop: 6, fontFamily: T.sans, fontWeight: 500 }}>{name}</div>
      <div style={{
        fontFamily: T.mono, fontSize: 10.5, color: T.inkMuted, letterSpacing: 0.4,
        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
      }}>{label}</div>
    </div>
  );
}

function DSType() {
  return (
    <DSSection number="02" title="Типографика" subtitle="Literata (латиница + кириллица) — дисплей и длинная форма. Source Sans 3 — UI/мета. Source Code Pro — kicker’ы. Веб-шрифты, едины на всех ОС; по локали — чуть разные серифы.">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 48 }}>
        <div>
          <TypeRow size={64} lh={1.05} family={T.serif} ls={-0.8} label="Дисплей / hero · 64 / 67 · Literata">
            Дело не в силе воли.
          </TypeRow>
          <TypeRow size={44} lh={1.1} family={T.serif} ls={-0.5} label="Дисплей small · 44 / 48 · Literata">
            Старый Код, на который мы не подписывались.
          </TypeRow>
          <TypeRow size={32} lh={1.2} family={T.serif} ls={-0.3} label="H1 · заголовок статьи · 32 / 38">
            Что тело помнит, когда ум спорит.
          </TypeRow>
          <TypeRow size={24} lh={1.3} family={T.serif} ls={-0.2} label="H2 · секция · 24 / 32">
            Более тихий способ кормить себя.
          </TypeRow>
          <TypeRow size={20} lh={1.7} family={T.serif} ls={0} label="Тело / чтение · 20 / 34 · 65–75ch">
            Для читателя, который попробовал всё, это не очередной план.
            Это разрешение положить планы. Письмо звучит так, будто
            кто-то сел рядом и говорит спокойно. The body reads in Latin too.
          </TypeRow>
          <TypeRow size={15} lh={1.6} family={T.sans} ls={0} label="UI / мета · 15 / 24 · Source Sans 3">
            Автор: georgewhole · 8 мин · 14 апреля 2026
          </TypeRow>
          <TypeRow size={11} lh={1.5} family={T.mono} ls={1.6} label="Kicker · 11 / 16 · моноширинный · ВЕРХН. 1.6 ls" upper>
            Статьи · старый код · 02
          </TypeRow>
        </div>
        <div style={{ background: T.surfaceSoft, padding: 22, border: `1px solid ${T.hair}` }}>
          <div style={{ fontFamily: T.mono, fontSize: 10.5, color: T.inkMuted, letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 14 }}>Стеки</div>
          <StackRow label="Serif (дисплей / тело)" stack={'"Literata" · ru/uk — Source Serif 4 · en/es'}/>
          <StackRow label="Sans (UI / мета)" stack={'"Source Sans 3", -apple-system, sans-serif'}/>
          <StackRow label="Mono (kicker / код)" stack={'"Source Code Pro", ui-monospace, monospace'}/>
          <div style={{ fontFamily: T.mono, fontSize: 10.5, color: T.inkMuted, letterSpacing: 1.2, textTransform: 'uppercase', margin: '18px 0 10px' }}>Правила</div>
          <ul style={{ margin: 0, paddingLeft: 16, fontSize: 12.5, lineHeight: 1.7, color: T.inkSoft }}>
            <li>Тело: 18–20 px, line-height 1.7, мера 65–75&nbsp;ch.</li>
            <li>Без переносов; <code style={{ fontFamily: T.mono, fontSize: 11 }}>text-wrap: pretty</code> на заголовках.</li>
            <li>Курсив — только для рамки и цитат.</li>
            <li>Капс — только в моно-kicker'ах.</li>
          </ul>
        </div>
      </div>

      {/* Шрифты по локалям — один data-locale меняет сериф всему поддереву */}
      <div style={{ marginTop: 40 }}>
        <div style={{ fontFamily: T.mono, fontSize: 10.5, color: T.inkMuted, letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 16 }}>
          Шрифты по локалям · data-locale
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, background: T.hair, border: `1px solid ${T.hair}` }}>
          {[['ru', 'Русский', 'Literata', 'Дело не в силе воли. Дело в коде.'],
            ['uk', 'Українська', 'Literata', 'Справа не в силі волі. Справа в коді.'],
            ['en', 'English', 'Source Serif 4', 'It isn’t willpower. It’s the code.'],
            ['es', 'Español', 'Source Serif 4', 'No es fuerza de voluntad. Es el código.']].map(([loc, name, font, txt]) =>
            <div key={loc} data-locale={loc} style={{ background: T.bg, padding: '20px 22px' }}>
              <div style={{ fontFamily: T.mono, fontSize: 10, color: T.inkMuted, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 10, display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                <span>{name}</span><span style={{ color: V.accent }}>{font}</span>
              </div>
              <div style={{ fontFamily: T.serif, fontSize: 24, lineHeight: 1.25, color: T.ink, letterSpacing: -0.3 }}>{txt}</div>
            </div>
          )}
        </div>
        <p style={{ fontFamily: T.sans, fontSize: 12.5, color: T.inkMuted, margin: '12px 0 0', lineHeight: 1.6, maxWidth: '70ch' }}>
          Один атрибут <code style={{ fontFamily: T.mono, fontSize: 11 }}>data-locale="xx"</code> на обёртке меняет сериф всему поддереву: кириллица (ru/uk) — Literata, латиница (en/es) — Source Serif 4. Все наборы читаемы на любом языке.
        </p>
      </div>
    </DSSection>
  );
}
function TypeRow({ size, lh, family, ls, label, children, upper }) {
  return (
    <div style={{ borderTop: `1px solid ${T.hairSoft}`, padding: '20px 0' }}>
      <div style={{
        fontFamily: T.mono, fontSize: 10.5, letterSpacing: 1, color: T.inkMuted,
        textTransform: 'uppercase', marginBottom: 10,
      }}>{label}</div>
      <div style={{
        fontFamily: family, fontSize: size, lineHeight: lh, letterSpacing: ls,
        color: T.ink, textTransform: upper ? 'uppercase' : 'none',
        maxWidth: '100%', textWrap: 'pretty',
      }}>{children}</div>
    </div>
  );
}
function StackRow({ label, stack }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ fontSize: 12, color: T.ink, fontWeight: 600, marginBottom: 2 }}>{label}</div>
      <div style={{ fontFamily: T.mono, fontSize: 10.5, color: T.inkSoft, lineHeight: 1.5, wordBreak: 'break-word' }}>{stack}</div>
    </div>
  );
}

function DSSpacingShadow() {
  const scale = [4, 8, 12, 16, 24, 32, 48, 64, 96];
  return (
    <DSSection number="03" title="Ритм, отступы, радиусы" subtitle="База — 4 px. Редакторский ритм держится на воздухе, а не на количестве токенов.">
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12 }}>
        {scale.map(n => (
          <div key={n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 28, height: n, background: T.ink, opacity: 0.85 }}/>
            <div style={{ fontFamily: T.mono, fontSize: 10.5, color: T.inkMuted }}>{n}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 28, marginTop: 32, flexWrap: 'wrap' }}>
        <RadiusChip name="sm · поля / инпуты" r={3}/>
        <RadiusChip name="md · карточки / лотки" r={6}/>
        <RadiusChip name="pill · таблетки / кнопки" r={999}/>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 110, height: 60, background: '#fff', boxShadow: T.paper,
            border: `1px solid ${T.hair}`,
          }}/>
          <div>
            <div style={{ fontSize: 12.5, color: T.ink, fontWeight: 500 }}>Бумажная тень</div>
            <div style={{ fontFamily: T.mono, fontSize: 10.5, color: T.inkMuted }}>0 1 0 / 0 1 2 · мягкая тёплая</div>
          </div>
        </div>
      </div>
    </DSSection>
  );
}
function RadiusChip({ name, r }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{ width: 56, height: 36, background: T.surface, border: `1px solid ${T.hair}`, borderRadius: r === 999 ? 999 : r }}/>
      <div>
        <div style={{ fontFamily: T.mono, fontSize: 10.5, color: T.inkMuted }}>r={r === 999 ? '999' : r}</div>
        <div style={{ fontSize: 12.5, color: T.ink }}>{name}</div>
      </div>
    </div>
  );
}

function DSComponents() {
  return (
    <DSSection number="04" title="Компоненты" subtitle="Каждый — в одном варианте, шалфей.">
      <CompRow title="Основная CTA + ghost + ссылка" desc="Мягкая «таблетка» — основная. Ghost-outline — вторичная. Подчёркнутая ссылка — третичная. На сайте никогда не используется «Купить» как основной глагол.">
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <PrimaryBtn v={V}>С чего начать</PrimaryBtn>
          <GhostBtn v={V}>История автора</GhostBtn>
          <TextLink v={V}>Пройти тест</TextLink>
        </div>
      </CompRow>

      <CompRow title="Подпись автора · мебель доверия" desc="Имя + одна строка о личном опыте + дата + время чтения.">
        <BylineRU/>
      </CompRow>

      <CompRow title="Рамка-переосмысление" desc="Маркирует центральный ход «дело не в силе воли». Курсив, акцент сверху, нейтральная заливка.">
        <ReframeCalloutRU v={V}>
          Дело не в силе воли. Это код — унаследованный, в основном невысказанный — говорит,
          что считать хорошим днём, хорошей тарелкой, хорошим телом.
        </ReframeCalloutRU>
      </CompRow>

      <CompRow title="Pull-quote" desc="Голос читателя или автора — никогда не используется как маркетинговый текст.">
        <PullQuoteRU v={V} attribution="Читательница, 47 лет, в письме">
          Я думала, проблема в громких правилах. Оказалось — в тихих.
        </PullQuoteRU>
      </CompRow>

      <CompRow title="Блок книги · переиспользуемый" desc="Платформенный паттерн. Сейчас — флагман, дальше — другие книги.">
        <BookBlockRUSmall/>
      </CompRow>

      <CompRow title="Email-захват · тест как лид-магнит" desc="Через любопытство, а не через вес. Email берётся в конце, не на входе.">
        <div style={{ maxWidth: 560 }}>
          <EmailCaptureRU v={V} variant="quiz" compact/>
        </div>
      </CompRow>

      <CompRow title="Email-захват · мягкая рассылка" desc="Встраивается без фанфар. Одно письмо в неделю.">
        <div style={{ maxWidth: 560 }}>
          <EmailCaptureRU v={V} variant="newsletter" compact/>
        </div>
      </CompRow>

      <CompRow title="Переключатель локалей" desc="Один паттерн в шапке и в подвале. Неактивные локали остаются тихими. uk, не ua.">
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <LocaleSwitcher v={V} current="EN"/>
          <LocaleSwitcher v={V} current="UK"/>
          <LocaleSwitcher v={V} current="RU"/>
          <LocaleSwitcher v={V} current="ES"/>
        </div>
      </CompRow>

      <CompRow title="Карточка статьи" desc="Изображение опционально. Тематический kicker. Время чтения — моноширинно.">
        <div style={{ maxWidth: 380 }}>
          <ArticleCardRU v={V}
            card={{
              kicker: 'Серия «Старый код» · 02',
              title: 'Что мы имеем в виду, когда говорим «сила воли»',
              summary: 'Возвращение к правилу, что тело — что-то, чем надо управлять. И к более тихому правилу под ним.',
              meta: 'СТАТЬЯ · 9 МИН · АПРЕЛЬ',
              image: 'утренний свет', imageTone: 'morning',
            }}
            width="100%"
          />
        </div>
      </CompRow>
    </DSSection>
  );
}

function CompRow({ title, desc, children }) {
  return (
    <div style={{
      borderTop: `1px solid ${T.hair}`, padding: '32px 0', display: 'grid',
      gridTemplateColumns: '260px 1fr', gap: 36, alignItems: 'flex-start',
    }}>
      <div>
        <div style={{ fontFamily: T.serif, fontSize: 19, color: T.ink, lineHeight: 1.3, marginBottom: 8 }}>{title}</div>
        <div style={{ fontSize: 13, color: T.inkSoft, lineHeight: 1.55 }}>{desc}</div>
      </div>
      <div>{children}</div>
    </div>
  );
}

function BylineRU() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontFamily: T.sans }}>
        <AuthorPortrait v={V} size={48}/>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: T.ink }}>georgewhole</div>
          <div style={{ fontSize: 13, color: T.inkSoft, lineHeight: 1.4 }}>
            Пишет из личного опыта восстановления (р. 1962).
          </div>
        </div>
      </div>
      <div style={{
        marginTop: 14, paddingTop: 14, borderTop: `1px dashed ${T.hairSoft}`,
        display: 'flex', gap: 16, fontFamily: T.mono, fontSize: 11, color: T.inkMuted,
        letterSpacing: 0.6, flexWrap: 'wrap',
      }}>
        <span>14 АПРЕЛЯ 2026</span>
        <span>8 МИН ЧТЕНИЯ</span>
      </div>
    </div>
  );
}

function BookBlockRUSmall() {
  const r = window.RU.books;
  return (
    <article style={{
      display: 'grid', gridTemplateColumns: '140px 1fr', gap: 24, alignItems: 'flex-start',
      fontFamily: T.sans, padding: '8px 0',
    }}>
      <BookCover v={V} title={r.bookTitle} w={140} h={200}/>
      <div>
        <div style={{
          fontFamily: T.mono, fontSize: 11, letterSpacing: 1.6, textTransform: 'uppercase',
          color: T.inkMuted, fontWeight: 500,
        }}>{r.bookKicker}</div>
        <h3 style={{
          fontFamily: T.serif, fontWeight: 400, fontSize: 24, lineHeight: 1.2,
          color: T.ink, margin: '8px 0 6px', letterSpacing: -0.3,
        }}>{r.bookTitle}</h3>
        <p style={{ fontSize: 15, lineHeight: 1.5, color: T.inkSoft, margin: '0 0 14px', fontStyle: 'italic', fontFamily: T.serif }}>
          {r.bookSub}
        </p>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
          <PrimaryBtn v={V} size="sm">{r.bookCta}</PrimaryBtn>
          <span style={{ fontSize: 12, color: T.inkMuted, fontFamily: T.mono, letterSpacing: 0.4 }}>
            AMAZON · GUMROAD
          </span>
        </div>
      </div>
    </article>
  );
}

function DSSection({ number, title, subtitle, children }) {
  return (
    <section style={{ marginBottom: 80 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 24, marginBottom: 28, alignItems: 'baseline' }}>
        <div style={{ fontFamily: T.mono, fontSize: 11, color: T.inkMuted, letterSpacing: 1.6, fontWeight: 500 }}>
          §&nbsp;{number}
        </div>
        <div>
          <h2 style={{
            fontFamily: T.serif, fontSize: 32, fontWeight: 400, color: T.ink, margin: 0,
            letterSpacing: -0.4, lineHeight: 1.2,
          }}>{title}</h2>
          {subtitle && <p style={{
            fontSize: 14.5, color: T.inkSoft, margin: '8px 0 0', lineHeight: 1.55, maxWidth: 720,
          }}>{subtitle}</p>}
        </div>
      </div>
      <div style={{ marginLeft: 104 }}>{children}</div>
    </section>
  );
}

window.DSScreen = DSScreen;
