const stats = [
  { label: "городов в сети", value: "18" },
  { label: "тиров под управлением", value: "42" },
  { label: "инструкторов в штате", value: "320" },
  { label: "лет опыта", value: "12" }
];

const services = [
  {
    title: "Операционное управление",
    description:
      "Регламенты, стандарты безопасности и ежедневный контроль. Внедряем цифровую отчетность и прозрачные KPI для каждого объекта.",
    points: ["24/7 мониторинг", "Сертификация персонала", "Проверки Росгвардии"]
  },
  {
    title: "Маркетинг и загрузка",
    description:
      "Формируем поток клиентов: корпоративы, тактические тренинги, спортивные сборы. Запускаем федеральные рекламные кампании и партнерские программы.",
    points: ["Digital-воронки", "Лояльность и клубы", "B2B контракты"]
  },
  {
    title: "Инвестиционные проекты",
    description:
      "Сопровождаем открытие новых тиров под ключ: аналитика локаций, проектирование, бизнес-план, запуск и вывод на окупаемость.",
    points: ["Анализ рынка", "Конструктор форматов", "Финансовое моделирование"]
  }
];

const differentiators = [
  {
    title: "Единая цифровая платформа",
    description:
      "BI-панель с данными по загрузке, выручке, инвентарю и соблюдению норм. Решения принимаются на основе фактов, а не догадок."
  },
  {
    title: "Фокус на безопасности",
    description:
      "Обучаем и аттестуем персонал, внедряем видеоконтроль, ведём электронные журналы. Уровень инцидентов в 4 раза ниже отрасли."
  },
  {
    title: "Федеральная экспертиза",
    description:
      "Работаем с региональными властями и федерациями. Знаем специфику законодательства и адаптируем бизнес под локальные требования."
  }
];

const programs = [
  {
    title: "Спортивные клубы",
    subtitle: "Федеральные сборные и детские секции",
    description:
      "Организуем учебно-тренировочные сборы, предоставляем тренерский штаб, составляем индивидуальные планы подготовки спортсменов."
  },
  {
    title: "Корпоративные отряды",
    subtitle: "Командные мероприятия и тимбилдинг",
    description:
      "Разрабатываем сценарии и курсы повышения стрессоустойчивости для бизнеса, служб безопасности и госструктур."
  },
  {
    title: "Тактический клуб",
    subtitle: "Программы PRO-уровня",
    description:
      "Продвинутая огневая подготовка, курс медицинской помощи, работа в команде и ночные стрельбы."
  }
];

const testimonials = [
  {
    quote:
      "Сеть тиров вернулась к росту за 6 месяцев: изменили клиентскую линейку, внедрили CRM и удержание. Загрузка будней выросла на 38%.",
    author: "Ирина Морозова",
    title: "Собственник стрелкового центра в Екатеринбурге"
  },
  {
    quote:
      "Коллеги из управляющей компании оперативно вывели проект на плановые показатели. Отдельное спасибо за работу с лицензиями и Росгвардией.",
    author: "Алексей Королёв",
    title: "Инвестор, сеть тиров «Стальной рубеж»",
  }
];

const partners = [
  "Федерация практической стрельбы",
  "Союз ДОСААФ",
  "Тактические школы регионов",
  "Корпоративные клиенты",
  "Производители оружия"
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-brand-dark">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <DifferentiatorsSection />
      <ProgramsSection />
      <TestimonialsSection />
      <PartnersSection />
      <CTASection />
      <Footer />
    </main>
  );
}

function HeroSection() {
  return (
    <header className="relative isolate overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-90" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "120px 120px"
        }}
      />
      <div className="section-container relative pt-28 pb-24 md:pt-36 md:pb-28">
        <span className="badge">Управляющая компания стрелковых тиров</span>
        <div className="mt-10 grid gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-center">
          <div className="space-y-8">
            <h1 className="font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              Федеральная сеть стрелковых тиров с едиными стандартами качества
            </h1>
            <p className="text-lg text-white/75 md:text-xl">
              Мы объединяем стрелковые клубы и инвестиционные проекты по всей России: берём на себя безопасность, операционное управление и маркетинг, чтобы вы могли развивать бизнес и инфраструктуру спорта.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="rounded-full bg-white px-6 py-3 text-base font-semibold text-brand-dark transition hover:bg-brand-light"
              >
                Решения для тиров
              </a>
              <a
                href="#cta"
                className="rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Запросить диагностику
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
              <div className="flex items-center justify-between text-sm text-white/70">
                <span>Цифровой контроль</span>
                <span>Online 24/7</span>
              </div>
              <div className="mt-6 space-y-4 text-sm">
                <div className="rounded-2xl bg-black/30 p-4">
                  <div className="flex items-center justify-between text-xs uppercase text-white/60">
                    <span>Загрузка площадок</span>
                    <span>Неделя</span>
                  </div>
                  <div className="mt-3 h-20 rounded-xl bg-gradient-to-r from-brand-blue/80 via-brand-accent/70 to-white/80" />
                  <div className="mt-3 flex justify-between text-xs text-white/60">
                    <span>Санкт-Петербург</span>
                    <span>Ростов-на-Дону</span>
                    <span>Казань</span>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-black/30 p-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-brand-light/80">Инциденты</p>
                    <p className="mt-2 text-2xl font-semibold text-white">0 за 180 дней</p>
                  </div>
                  <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-medium text-emerald-200">
                    ISO 9001
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function StatsSection() {
  return (
    <section className="section-container grid gap-8 rounded-[48px] border border-white/10 bg-white/5 backdrop-blur md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col gap-3 border-white/10 md:border-l md:pl-6 first:md:border-l-0 first:md:pl-0">
          <span className="stat-label">{stat.label}</span>
          <span className="stat-value">{stat.value}</span>
        </div>
      ))}
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="section-container">
      <div className="title-section">
        <h2>Комплексное управление стрелковым объектом</h2>
        <p>
          Наша команда берёт на себя полный цикл: от лицензирования и обучения персонала до маркетинга, финансового контроля и развития стрелкового сообщества.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="card group">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl text-white">{service.title}</h3>
              <span className="rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-semibold text-brand-accent opacity-0 transition group-hover:opacity-100">
                Подробнее
              </span>
            </div>
            <p className="mt-4 text-base text-white/70">{service.description}</p>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              {service.points.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="inline-flex h-2 w-2 rounded-full bg-brand-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function DifferentiatorsSection() {
  return (
    <section className="section-container">
      <div className="title-section">
        <h2>Почему выбирают нас</h2>
        <p>
          Управляющая компания, которая объединяет стандарты безопасности, высокие требования к сервису и цифровой контроль над каждым объектом.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {differentiators.map((item) => (
          <article key={item.title} className="card">
            <h3 className="font-display text-xl text-white">{item.title}</h3>
            <p className="mt-3 text-base text-white/70">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProgramsSection() {
  return (
    <section className="section-container">
      <div className="title-section">
        <h2>Программы для разных аудиторий</h2>
        <p>
          Мы выстраиваем продуктовую линейку тиров: спорт, обучение, корпоративные мероприятия и продвинутые курсы для силовых подразделений.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {programs.map((program) => (
          <article key={program.title} className="card">
            <div className="text-sm uppercase tracking-[0.3em] text-brand-light/80">
              {program.subtitle}
            </div>
            <h3 className="mt-4 font-display text-2xl text-white">{program.title}</h3>
            <p className="mt-4 text-base text-white/70">{program.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="section-container">
      <div className="title-section">
        <h2>Результаты партнёров</h2>
        <p>
          Бизнесы из разных регионов доверяют нам свои стрелковые объекты. Вот как изменились их показатели после подключения к управляющей компании.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((item) => (
          <blockquote key={item.author} className="card h-full space-y-4">
            <p className="text-lg text-white/80">“{item.quote}”</p>
            <footer className="text-sm text-white/60">
              <div className="font-semibold text-white">{item.author}</div>
              <div>{item.title}</div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

function PartnersSection() {
  return (
    <section className="section-container">
      <div className="title-section">
        <h2>Партнёрская экосистема</h2>
        <p>
          Объединяем стрелковые сообщества, государственные структуры и бренды, чтобы развивать культуру безопасной стрельбы по всей стране.
        </p>
      </div>
      <div className="grid gap-4 rounded-[32px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur md:grid-cols-5">
        {partners.map((partner) => (
          <div key={partner} className="flex h-24 items-center justify-center rounded-2xl border border-white/5 bg-white/5 px-4 text-center text-sm font-medium text-white/70">
            {partner}
          </div>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section
      id="cta"
      className="section-container relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-brand-blue/30 via-brand-dark to-brand-dark p-12"
    >
      <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brand-accent/30 blur-3xl" />
      <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl space-y-4">
          <span className="badge">Старт сотрудничества</span>
          <h3 className="font-display text-3xl text-white md:text-4xl">
            Проведём аудит тира и представим план развития за 10 дней
          </h3>
          <p className="text-base text-white/70">
            Команда экспертов анализирует операционные процессы, финансы и безопасность. Вы получите roadmap по модернизации и росту дохода.
          </p>
        </div>
        <form className="w-full max-w-md space-y-4">
          <input
            type="text"
            placeholder="Имя и фамилия"
            className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:border-white focus:outline-none"
          />
          <input
            type="email"
            placeholder="Рабочая почта"
            className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:border-white focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Телефон"
            className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:border-white focus:outline-none"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-dark transition hover:bg-white"
          >
            Получить аудит
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="section-container pb-12 pt-0 text-sm text-white/50">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="font-display text-lg text-white">Сеть «Стрелковая Федерация»</span>
          <p className="mt-2 max-w-xl text-white/60">
            Управляем стрелковыми объектами в крупнейших регионах России, повышаем безопасность и создаём устойчивую экономику для владельцев.
          </p>
        </div>
        <div className="flex gap-6">
          <a href="mailto:partner@shootingfed.ru" className="hover:text-white">
            partner@shootingfed.ru
          </a>
          <a href="tel:+74951234567" className="hover:text-white">
            +7 (495) 123-45-67
          </a>
        </div>
      </div>
      <div className="mt-8 text-xs text-white/40">
        © {new Date().getFullYear()} Управляющая компания стрелковых тиров. Все права защищены. Лицензия Росгвардии № 123456.
      </div>
    </footer>
  );
}
