# 04b — Ключевые запросы и SEO-механика (для технического ответственного)

**Дата:** 2026-05-26 · **Рынок-база:** США/англоязычный · **Папка:** `03_technical_seo`
**Связанные файлы:** контент-план и заголовки — `02_content/04a_content_strategy.md`; мультиязычная архитектура (hreflang/локали) — `09_multilingual_architecture.md` (эта же папка).
**Метод:** WebSearch + WebFetch по живой выдаче 2026-05-26. **Объёмы поиска — качественные ОЦЕНКИ** (нет доступа к Ahrefs/SEMrush); числа объёма НЕ выдумывались.

---

## ВЫВОДЫ ПЕРВЫМ ДЕЛОМ

- **Head-термины заняты** высоким DA (Mayo, Cleveland Clinic, Healthline, WebMD, Harvard, NHS, ED-клиники) — в лоб не брать.
- **Окно входа — long-tail боли:** `intuitive eating not working`, `why do I always fail my diet`, `diet starts Monday`, `binge eating men`, `food noise` (молодой термин 2024–26). Низкая конкуренция + точная ЦА.
- Тема **YMYL** → без E-E-A-T страницы получают низшую оценку Google. Это технический приоритет №1 наравне с контентом.

---

## А. ТАБЛИЦА КЛЮЧЕВЫХ ЗАПРОСОВ (интент · стадия · спрос · конкуренция)

| Запрос (EN) | Интент | Стадия | Спрос (оценка) | Конкуренция выдачи |
|---|---|---|---|---|
| how to stop binge eating | Info/Impl | Awareness→Impl | Высокий | Очень высокая (Mayo, NHS, NEDA) |
| why can't I stop eating | Info | Awareness | Высокий | Средняя — психол. угол свободен |
| how to stop overeating | Info/Impl | Implementation | Высокий | Высокая |
| food noise | Info | Awareness | Высокий, растёт | Средняя — термин молодой (2024–26) |
| how to stop emotional eating | Info/Impl | Awareness→Impl | Высокий | Очень высокая — весь топ «10 советов» |
| stress eating | Info | Awareness | Высокий | Высокая |
| intuitive eating | Info | Awareness/Consid | Очень высокий | Очень высокая — не брать в лоб |
| how to start intuitive eating | Info/Impl | Consid→Impl | Высокий | Высокая (long-tail мягче) |
| **intuitive eating not working** | Info | Consideration | Средний | **Низкая-средняя — сильный пробел** |
| why do diets never work | Info | Awareness | Высокий | Средняя — нет «живого» объяснения |
| **why do I always fail my diet** | Info | Awareness (emo) | Высокий | Средняя — нет сочувств. ответа |
| diet culture | Info | Awareness | Высокий | Высокая (RD-блогеры, медиа) |
| anti diet / what is anti diet | Info | Awareness | Средний-высокий | Средняя |
| how to have a healthy relationship with food | Info | Awareness→Consid | Высокий | Средняя-высокая |
| food freedom | Info/Consid | Consideration | Высокий | Средняя |
| how to stop obsessing over food | Info | Awareness | Высокий | Средняя |
| joyful movement | Info | Consideration | Средний | Низкая-средняя — хороший вход |
| how to like exercise / exercise without hating it | Info | Awareness | Средний | Низкая-средняя — пробел |
| how to accept my body / stop hating my body | Info | Awareness | Высокий | Средняя — много «10 tips» |
| body neutrality vs body positivity | Info | Awareness/Consid | Высокий | Средняя-высокая (тема «выстрелила» 2024) |
| **binge eating men** | Info | Awareness | Средний | **Низкая — почти пусто** |
| **intuitive eating over 50 / menopause** | Info | Consideration | Средний, растёт | **Низкая-средняя** |
| losing weight in your 50s without dieting | Info/Comm | Consideration | Высокий | Средняя (топ — про диеты) |
| all or nothing eating mentality | Info | Awareness | Средний | Низкая |
| **diet starts Monday** | Info | Awareness | Средний | **Низкая — высокая резонансность** |
| **food noise ozempic** | Info | Consideration | Растёт | **Низкая — ниша 2025–27** |

**Жирным** — приоритетные точки входа (низкая конкуренция × точная ЦА).

---

## Б. БАНК PAA-ВОПРОСОВ И АВТОПОДСКАЗОК (сырьё для FAQ-блоков, H2/H3, схемы FAQ)

Полный банк (60+ вопросов по 8 темам) — в `research/raw/05_seo_search.md`, раздел Б. Ключевые:

- *Why can't I stop eating even when I'm full?* · *Why do I keep eating when I'm not hungry?* · *Is food noise a sign of an eating disorder?* · *Can you stop food noise without medication?*
- *Why am I still bingeing while doing intuitive eating?* · *How do I start intuitive eating if I've been dieting for years?* · *Why do I feel out of control with intuitive eating?*
- *Why do I always fail my diet?* · *Why does dieting lead to more weight gain?* · *What is the "last supper" eating effect?* · *Why do I start a new diet every Monday?* · *How do I break the restrict-binge cycle?*
- *Is it possible to like your body without losing weight?* · *Why does my self-worth feel tied to my weight?* · *How do I stop using exercise as punishment?*
- *Why don't men talk about binge eating?* · *Can intuitive eating work during menopause?* · *Why is it harder to lose weight after 50 even when I eat the same?*

→ Использовать как точные H2/H3 и FAQ-schema (см. schema-разметку).

---

## В. КТО РАНЖИРУЕТСЯ И ГДЕ ВХОДИТЬ (SERP-анализ)

| Тип сайта в топе | Примеры | Сила | Слабость = наш вход |
|---|---|---|---|
| Мед-порталы | Mayo, Cleveland Clinic, Healthline, WebMD, Harvard, NHS | DA 80+, E-E-A-T, доверие Google | Клинический тон; нет lived experience; не продают трансформацию |
| ED-клиники | Monte Nido, ERC, NEDA, Equip, Within | Авторитет в РПП | Только клиника, не «обычное» сложное отношение |
| RD-блогеры | Alissa Rumsey, Christy Harrison, Rachael Hartley | Доверие + практика | Пишут для коллег; технический язык |
| Wellness-медиа | Calm, Everyday Health, Verywell | Охват, SEO | Поверхностно, «5 tips» |
| Академия | PubMed, ScienceDirect, Psychology Today | Научность | Непрактично, не конвертит |

**Вход «Нового Кода»:** long-tail боли + нарративный psyche-first голос + lived experience (которого нет ни у кого) + двухуровневый продукт. Рост от боль-запросов к pillar-страницам по мере накопления авторитета.

---

## Г. E-E-A-T / YMYL — ТЕХНИЧЕСКИЕ ТРЕБОВАНИЯ (критично)

Тема еды/тела/РПП = **YMYL**; Google применяет максимальные требования. Обязательный чеклист на каждую страницу:

- **Experience:** явная авторская lived-experience атрибуция (история автора/дочери) — особенно ценно в anti-diet нише.
- **Expertise:** соавторство или review-бейдж от RD/психолога/врача; видимые credentials.
- **Authoritativeness:** ссылки на рецензируемые исследования (Tribole & Resch, HAES, академ. работы); внешние упоминания.
- **Trust:** дата публикации/обновления, автор-бокс, контакты, политика редактирования, HTTPS, отсутствие health-claims без источников.
- **Schema:** Article + Author + FAQPage (под PAA-вопросы); MedicalWebPage по применимости.
- **Без обещаний похудения** и триггерного контента (см. редполитику в `04a` раздел Д) — иначе и доверие, и ранжирование падают.

---

## Д. КОНКУРИРУЮЩИЕ СИЛЫ В НИШЕ 2025–2026 (учесть в позиционировании контента)

- **GLP-1 / Ozempic-нарратив** переосмысляет «food noise» через медикаментозную линзу → сайт может занять позицию «психологическая альтернатива/дополнение», а не «вместо лекарства».
- **Критика anti-diet** (The Examination, часть RD) → контент должен отвечать на скептицизм без оборонительности.

---

## Е. ПРИМЕЧАНИЯ И ОГРАНИЧЕНИЯ

- Объёмы и конкурентность — **качественные оценки** по живой выдаче 2026-05-26, не метрики DA по каждому URL. Перед инвестициями — валидировать через Ahrefs/SEMrush/Keyword Planner.
- Запросы — для англ. базы. UA/RU-ключевики собираются в ресерче рынков и лягут отдельными разделами (Украина — в `01_market_and_audience/07_*`; диаспора — `08_*`); свести их в локализованные keyword-карты в этой папке при реализации.
- Мультиязычная техническая часть (hreflang, локали, дубли vs локализация) — `09_multilingual_architecture.md`.

---

## 📖 Расшифровка терминов

- **SEO** — поисковая оптимизация; **SERP** — страница результатов поиска.
- **Intent (интент)** — намерение за запросом: informational (узнать), commercial (выбрать), transactional (купить).
- **Long-tail** — узкий низкочастотный запрос; **head term** — широкий высокочастотный (выше спрос, выше конкуренция).
- **DA (Domain Authority)** — оценка авторитетности домена (0–100); высокий DA у Mayo/Healthline/Harvard.
- **PAA (People Also Ask)** — блок «Похожие вопросы» в выдаче (сырьё для FAQ и H2/H3).
- **E-E-A-T** — Experience/Expertise/Authoritativeness/Trust — критерии качества Google.
- **YMYL (Your Money or Your Life)** — темы про здоровье/деньги; макс. требования к качеству (наш случай).
- **Schema / FAQPage** — микроразметка / её тип для блока вопросов-ответов.
- **GLP-1 / Ozempic** — препараты для снижения веса (контекст запроса «food noise ozempic»).
