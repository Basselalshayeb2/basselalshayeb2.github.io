export const siteOrigin = 'https://basselalshayeb2.github.io';

export const supportedLocales = ['en', 'ru'] as const;
export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = 'en';

export const cvFiles = {
  en: 'Bassel_Alshayeb_CV_EN.pdf',
  ru: 'Bassel_Alshayeb_CV_RU.pdf'
} as const;

export const localeMeta: Record<Locale, { label: string; shortLabel: string; htmlLang: string; ogLocale: string }> = {
  en: {
    label: 'English',
    shortLabel: 'EN',
    htmlLang: 'en',
    ogLocale: 'en_US'
  },
  ru: {
    label: 'Русский',
    shortLabel: 'RU',
    htmlLang: 'ru',
    ogLocale: 'ru_RU'
  }
};

type LinkItem = {
  label: string;
  href: string;
  ariaLabel?: string;
  download?: boolean | string;
  external?: boolean;
  variant?: 'primary' | 'secondary' | 'quiet';
};

type Metric = {
  value: string;
  label: string;
  detail: string;
};

type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  stack: string;
};

type SkillGroup = {
  title: string;
  items: string[];
};

type OwnershipRow = {
  system: string;
  scope: string;
  proof: string;
};

export type PortfolioContent = {
  pageTitle: string;
  pageDescription: string;
  author: string;
  siteName: string;
  name: string;
  localizedName?: string;
  jobTitle: string;
  nav: {
    ariaLabel: string;
    brandRole: string;
    links: Array<{ label: string; href: string }>;
    cvLabel: string;
    cvAriaLabel: string;
    languageSwitcherLabel: string;
  };
  hero: {
    identityLine: string;
    title: string;
    lead: string;
    support: string;
    actionsAriaLabel: string;
    proofAriaLabel: string;
    actions: LinkItem[];
  };
  metrics: Metric[];
  heroProofIndexes: number[];
  ownership: {
    title: string;
    intro: string;
    rows: OwnershipRow[];
  };
  sections: {
    experience: {
      label: string;
      heading: string;
      items: Experience[];
    };
    project: {
      label: string;
      heading: string;
      flow: string;
      paragraphs: string[];
    };
    skills: {
      label: string;
      heading: string;
      intro: string;
      groups: SkillGroup[];
    };
    contact: {
      label: string;
      heading: string;
      links: LinkItem[];
    };
  };
  schemaKnowsAbout: string[];
};

const commonKnowsAbout = [
  'Node.js',
  'TypeScript',
  'Laravel',
  'Go',
  'Java Spring Boot',
  'Microservices',
  'PostgreSQL',
  'MongoDB',
  'RabbitMQ',
  'Kafka',
  'NATS'
];

export const portfolioContent: Record<Locale, PortfolioContent> = {
  en: {
    pageTitle: 'Bassel Alshayeb | Senior Backend Engineer',
    pageDescription:
      'Senior Backend Engineer with 6+ years of production ownership across GovTech, iGaming, FinTech, POS/SaaS, IoT, microservices, and AI clinical systems.',
    author: 'Bassel Alshayeb',
    siteName: 'Bassel Alshayeb Portfolio',
    name: 'Bassel Alshayeb',
    jobTitle: 'Senior Backend Engineer',
    nav: {
      ariaLabel: 'Primary navigation',
      brandRole: 'Senior Backend Engineer',
      links: [
        { label: 'Experience', href: '#experience' },
        { label: 'Project', href: '#project' },
        { label: 'Skills', href: '#skills' },
        { label: 'Contact', href: '#contact' }
      ],
      cvLabel: 'CV',
      cvAriaLabel: 'Download English CV',
      languageSwitcherLabel: 'Choose language'
    },
    hero: {
      identityLine: 'Bassel Alshayeb',
      title: 'Senior Backend Engineer',
      lead: 'Production backend ownership across GovTech, iGaming, FinTech, POS/SaaS, and IoT.',
      support:
        '6+ years building and supporting production systems, often as the sole backend owner across microservices, integrations, real-time workflows, and data-heavy platforms. Backend-heavy fullstack delivery when the product needs it.',
      actionsAriaLabel: 'Primary actions',
      proofAriaLabel: 'Career proof summary',
      actions: [
        {
          label: 'Download CV EN',
          ariaLabel: 'Download English CV',
          href: cvFiles.en,
          download: cvFiles.en,
          variant: 'primary'
        },
        {
          label: 'Download CV RU',
          ariaLabel: 'Download Russian CV',
          href: cvFiles.ru,
          download: cvFiles.ru,
          variant: 'secondary'
        },
        { label: 'Contact', href: '#contact', variant: 'secondary' },
        { label: 'GitHub', href: 'https://github.com/Basselalshayeb2', external: true, variant: 'quiet' }
      ]
    },
    metrics: [
      {
        value: '95-97%',
        label: 'ASR/LLM cost reduction',
        detail: 'Browser VAD and command filtering reduced processed audio from about 600s to 18-30s per 10-minute clinical session.'
      },
      {
        value: '12',
        label: 'microservices owned',
        detail: 'End-to-end backend architecture for Tahkeem, a live UAE Government awards and competition platform.'
      },
      {
        value: '10k+',
        label: 'active iGaming players',
        detail: 'Slotaxy provider integrations and real-time game flows across BGaming, Slotegrator, and Pragmatic Play.'
      },
      {
        value: '14k+',
        label: 'GovTech users',
        detail: 'Registered users on Tahkeem with 2,000+ submitted applications across evaluation cycles.'
      },
      {
        value: '6+',
        label: 'commercial years',
        detail: 'Backend-heavy production delivery across GovTech, iGaming, FinTech, POS/SaaS, and IoT.'
      }
    ],
    heroProofIndexes: [4, 1, 2, 3],
    ownership: {
      title: 'Proof recruiters can scan',
      intro: 'Production systems, named domains, and scale signals.',
      rows: [
        {
          system: 'Tahkeem GovTech',
          scope: 'Often the sole backend owner for 12 microservices',
          proof: '14k+ users and 2,000+ submitted applications'
        },
        {
          system: 'Slotaxy iGaming',
          scope: 'Provider integrations and real-time game flows',
          proof: '10k+ active players across live providers'
        },
        {
          system: 'STOMMIS clinical AI',
          scope: 'Voice-to-MIS command pipeline with strict validation',
          proof: '95-97% ASR/LLM cost reduction'
        },
        {
          system: 'Wiyak POS/SaaS',
          scope: 'Real-time order delivery and payment state',
          proof: '1,000+ restaurants in a Kuwait POS ecosystem'
        }
      ]
    },
    sections: {
      experience: {
        label: 'Experience',
        heading: 'Production ownership across government, gaming, POS, agency, and IoT systems.',
        items: [
          {
            company: 'Larsa / Tahkeem',
            role: 'Senior Backend Developer',
            period: 'Jun 2025 - Present',
            summary:
              'Sole backend engineer for 12 microservices powering UAE Government awards and competition workflows, including evaluation pipelines, jury stages, notifications, and service APIs.',
            stack: 'Node.js / TypeScript / Go / MongoDB / NATS / Docker'
          },
          {
            company: 'Sigma Digital / 1xbet group',
            role: 'Senior Backend Developer',
            period: 'Oct 2023 - Mar 2025',
            summary:
              'Built Slotaxy provider integrations for 10,000+ active players and designed Vektor as a Java / Spring Cloud FinTech microservice system with RabbitMQ and PostgreSQL.',
            stack: 'Laravel / Node.js / Java / Spring Boot / PostgreSQL / RabbitMQ / WebSocket'
          },
          {
            company: 'BeInMedia / Wiyak',
            role: 'Senior Fullstack Developer',
            period: 'Oct 2022 - Oct 2023',
            summary:
              'Enhanced real-time order delivery for a Kuwait POS ecosystem serving 1,000+ restaurants, managing WebSocket state across drivers, restaurants, orders, and payment states.',
            stack: 'Laravel / Vue.js / MariaDB / Laravel Echo / WebSocket / CI/CD'
          },
          {
            company: 'PlanA Agency',
            role: 'Fullstack Engineer',
            period: 'Jul 2021 - Oct 2022',
            summary:
              'Delivered crypto exchange dashboards with Binance API integration, precise decimal commission logic, Amadeus flight search/reservation, and UAE client applications.',
            stack: 'Laravel / Vue.js / Node.js / MySQL / Nginx'
          },
          {
            company: 'Disrupt-x / Unifi Solutions',
            role: 'Backend Engineer',
            period: 'Aug 2020 - Mar 2021',
            summary:
              'Developed IoT security services for Dubai, integrating physical sensors with Dubai Police law-enforcement APIs through the SIA protocol and AWS deployments.',
            stack: 'Node.js / Express.js / MySQL / MariaDB / AWS / IoT Sensors'
          }
        ]
      },
      project: {
        label: 'Featured project',
        heading: 'AI Voice Assistant for Dentists - STOMMIS Integration.',
        flow: 'Browser VAD -> Yandex SpeechKit ASR -> command classifier -> Qwen LLM -> JSON Schema validation -> REST API write to MIS',
        paragraphs: [
          'Built a hands-free clinical voice assistant integrated with the STOMMIS dental MIS, piloted at SPb GBUZ SP No. 8 with a signed institutional adoption agreement.',
          'A TF-IDF + logistic regression command classifier trained on 8,000 synthetic transcriptions gates LLM invocation, reducing ASR and LLM cost by 95-97%.',
          'Qwen output is constrained to a strict intent + slots JSON contract, validated with JSON Schema and an intent whitelist before any MIS write. No medical record is modified unless the full pipeline validates cleanly. End-to-end command latency is about 2-3 seconds.'
        ]
      },
      skills: {
        label: 'Skills',
        heading: 'Backend-heavy stack, with frontend evidence where it matters.',
        intro:
          'Frontend proof: Angular in Gymesis, React in TradinosUG, and Vue.js in Wiyak and PlanA delivery work. The center of gravity remains backend architecture, integrations, data flow, and production support.',
        groups: [
          { title: 'Languages', items: ['Node.js', 'TypeScript', 'PHP', 'Java', 'Go', 'Python'] },
          { title: 'Backend', items: ['Laravel', 'NestJS', 'Express.js', 'Spring Boot 3.x', 'Spring Cloud', 'REST API', 'WebSocket', 'Microservices'] },
          { title: 'Databases & Messaging', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'MariaDB', 'Redis', 'RabbitMQ', 'Apache Kafka', 'NATS'] },
          { title: 'DevOps', items: ['Docker', 'CI/CD', 'Nginx', 'Linux', 'AWS', 'Ubuntu'] },
          { title: 'Tools', items: ['Git', 'Elasticsearch', 'Postman', 'Agile/Scrum', 'GitHub Copilot', 'Claude', 'ChatGPT/Codex'] }
        ]
      },
      contact: {
        label: 'Contact',
        heading: 'Available for senior backend-heavy roles.',
        links: [
          { label: 'basl.alshayeb@gmail.com', href: 'mailto:basl.alshayeb@gmail.com' },
          { label: 'Download CV EN', href: cvFiles.en, download: cvFiles.en },
          { label: 'Download CV RU', href: cvFiles.ru, download: cvFiles.ru },
          { label: 'github.com/Basselalshayeb2', href: 'https://github.com/Basselalshayeb2', external: true },
          { label: 'linkedin.com/in/bassel-alshayeb', href: 'https://linkedin.com/in/bassel-alshayeb', external: true },
          { label: 't.me/bassel_alshayeb', href: 'https://t.me/bassel_alshayeb', external: true }
        ]
      }
    },
    schemaKnowsAbout: commonKnowsAbout
  },
  ru: {
    pageTitle: 'Басель Альшаеб | Senior Backend Engineer',
    pageDescription:
      'Senior Backend Engineer с 6+ годами опыта в production-системах: GovTech, iGaming, FinTech, POS/SaaS, IoT, микросервисы и AI-решения для медицины.',
    author: 'Басель Альшаеб',
    siteName: 'Портфолио Баселя Альшаеба',
    name: 'Bassel Alshayeb',
    localizedName: 'Басель Альшаеб',
    jobTitle: 'Senior Backend Engineer',
    nav: {
      ariaLabel: 'Основная навигация',
      brandRole: 'Senior Backend Engineer',
      links: [
        { label: 'Опыт', href: '#experience' },
        { label: 'Проект', href: '#project' },
        { label: 'Навыки', href: '#skills' },
        { label: 'Контакты', href: '#contact' }
      ],
      cvLabel: 'CV',
      cvAriaLabel: 'Скачать резюме на русском',
      languageSwitcherLabel: 'Выбор языка'
    },
    hero: {
      identityLine: 'Басель Альшаеб',
      title: 'Senior Backend Engineer',
      lead: 'Backend-разработка для production-систем в GovTech, iGaming, FinTech, POS/SaaS и IoT.',
      support:
        '6+ лет строю и поддерживаю нагруженные backend-системы: микросервисы, интеграции, real-time workflows и data-heavy платформы. Часто отвечал за backend end-to-end: от архитектуры и API до эксплуатации и интеграций.',
      actionsAriaLabel: 'Основные действия',
      proofAriaLabel: 'Краткое подтверждение опыта',
      actions: [
        {
          label: 'Скачать CV RU',
          ariaLabel: 'Скачать резюме на русском',
          href: cvFiles.ru,
          download: cvFiles.ru,
          variant: 'primary'
        },
        {
          label: 'Скачать CV EN',
          ariaLabel: 'Скачать резюме на английском',
          href: cvFiles.en,
          download: cvFiles.en,
          variant: 'secondary'
        },
        { label: 'Контакты', href: '#contact', variant: 'secondary' },
        { label: 'GitHub', href: 'https://github.com/Basselalshayeb2', external: true, variant: 'quiet' }
      ]
    },
    metrics: [
      {
        value: '95-97%',
        label: 'снижение затрат ASR/LLM',
        detail: 'Browser VAD и фильтрация команд сократили объем обрабатываемого аудио примерно с 600 до 18-30 секунд на 10-минутную клиническую сессию.'
      },
      {
        value: '12',
        label: 'микросервисов в зоне ответственности',
        detail: 'End-to-end backend-архитектура для Tahkeem, платформы государственных премий и конкурсов в ОАЭ.'
      },
      {
        value: '10k+',
        label: 'активных игроков iGaming',
        detail: 'Интеграции Slotaxy с игровыми провайдерами и real-time game flows для BGaming, Slotegrator и Pragmatic Play.'
      },
      {
        value: '14k+',
        label: 'пользователей GovTech',
        detail: '14k+ зарегистрированных пользователей Tahkeem и 2,000+ заявок в оценочных циклах.'
      },
      {
        value: '6+',
        label: 'лет коммерческого опыта',
        detail: 'Production backend delivery в GovTech, iGaming, FinTech, POS/SaaS и IoT.'
      }
    ],
    heroProofIndexes: [4, 1, 2, 3],
    ownership: {
      title: 'Ключевые факты',
      intro: 'Production-системы, домены и измеримый масштаб.',
      rows: [
        {
          system: 'Tahkeem GovTech',
          scope: 'Отвечал за 12 микросервисов',
          proof: '14k+ пользователей и 2,000+ поданных заявок'
        },
        {
          system: 'Slotaxy iGaming',
          scope: 'Интеграции провайдеров и real-time игровые потоки',
          proof: '10k+ активных игроков на live-провайдерах'
        },
        {
          system: 'STOMMIS clinical AI',
          scope: 'Voice-to-MIS pipeline со строгой валидацией команд',
          proof: 'снижение затрат ASR/LLM на 95-97%'
        },
        {
          system: 'Wiyak POS/SaaS',
          scope: 'Real-time доставка заказов и платежные состояния',
          proof: '1,000+ ресторанов в Kuwait POS ecosystem'
        }
      ]
    },
    sections: {
      experience: {
        label: 'Опыт',
        heading: 'Production-опыт в GovTech, iGaming, POS/SaaS, агентской разработке и IoT.',
        items: [
          {
            company: 'Larsa / Tahkeem',
            role: 'Senior Backend Developer',
            period: 'Jun 2025 - Present',
            summary:
              'Единственный backend engineer для 12 микросервисов платформы UAE Government awards: оценочные пайплайны, этапы жюри, уведомления и сервисные API.',
            stack: 'Node.js / TypeScript / Go / MongoDB / NATS / Docker'
          },
          {
            company: 'Sigma Digital / 1xbet group',
            role: 'Senior Backend Developer',
            period: 'Oct 2023 - Mar 2025',
            summary:
              'Разрабатывал интеграции Slotaxy с игровыми провайдерами для 10,000+ активных игроков и проектировал Vektor - FinTech-систему на Java / Spring Cloud с RabbitMQ и PostgreSQL.',
            stack: 'Laravel / Node.js / Java / Spring Boot / PostgreSQL / RabbitMQ / WebSocket'
          },
          {
            company: 'BeInMedia / Wiyak',
            role: 'Senior Fullstack Developer',
            period: 'Oct 2022 - Oct 2023',
            summary:
              'Улучшал real-time доставку заказов в Kuwait POS ecosystem на 1,000+ ресторанов; отвечал за WebSocket-состояния водителей, ресторанов, заказов и платежей.',
            stack: 'Laravel / Vue.js / MariaDB / Laravel Echo / WebSocket / CI/CD'
          },
          {
            company: 'PlanA Agency',
            role: 'Fullstack Engineer',
            period: 'Jul 2021 - Oct 2022',
            summary:
              'Разрабатывал crypto exchange dashboards с Binance API, точную decimal-логику комиссий, Amadeus flight search/reservation и приложения для клиентов из ОАЭ.',
            stack: 'Laravel / Vue.js / Node.js / MySQL / Nginx'
          },
          {
            company: 'Disrupt-x / Unifi Solutions',
            role: 'Backend Engineer',
            period: 'Aug 2020 - Mar 2021',
            summary:
              'Разрабатывал IoT security services для Дубая: интеграция физических датчиков с Dubai Police law-enforcement APIs через SIA protocol и AWS deployments.',
            stack: 'Node.js / Express.js / MySQL / MariaDB / AWS / IoT Sensors'
          }
        ]
      },
      project: {
        label: 'Ключевой проект',
        heading: 'AI Voice Assistant for Dentists - интеграция со STOMMIS.',
        flow: 'Browser VAD -> Yandex SpeechKit ASR -> классификатор команд -> Qwen LLM -> JSON Schema validation -> REST API запись в MIS',
        paragraphs: [
          'Разработал hands-free clinical voice assistant для стоматологической MIS STOMMIS. Пилот прошел в СПб ГБУЗ СП № 8, есть подписанное соглашение о внедрении.',
          'Классификатор команд на TF-IDF + logistic regression, обученный на 8,000 synthetic transcriptions, решает, когда вызывать LLM, и снижает затраты ASR/LLM на 95-97%.',
          'Вывод Qwen ограничен строгим JSON-контрактом intent + slots, проходит JSON Schema validation и проверку intent whitelist перед записью в MIS. Медицинская запись не меняется, пока вся цепочка не проходит валидацию. End-to-end latency команды - около 2-3 секунд.'
        ]
      },
      skills: {
        label: 'Навыки',
        heading: 'Backend-heavy стек с подтвержденным frontend-опытом.',
        intro:
          'Frontend-опыт есть: Angular в Gymesis, React в TradinosUG, Vue.js в Wiyak и PlanA. Основной фокус - backend-архитектура, интеграции, data flow и production support.',
        groups: [
          { title: 'Языки', items: ['Node.js', 'TypeScript', 'PHP', 'Java', 'Go', 'Python'] },
          { title: 'Backend', items: ['Laravel', 'NestJS', 'Express.js', 'Spring Boot 3.x', 'Spring Cloud', 'REST API', 'WebSocket', 'Microservices'] },
          { title: 'Базы данных & Messaging', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'MariaDB', 'Redis', 'RabbitMQ', 'Apache Kafka', 'NATS'] },
          { title: 'DevOps', items: ['Docker', 'CI/CD', 'Nginx', 'Linux', 'AWS', 'Ubuntu'] },
          { title: 'Инструменты', items: ['Git', 'Elasticsearch', 'Postman', 'Agile/Scrum', 'GitHub Copilot', 'Claude', 'ChatGPT/Codex'] }
        ]
      },
      contact: {
        label: 'Контакты',
        heading: 'Рассматриваю Senior Backend и backend-heavy fullstack роли.',
        links: [
          { label: 'basl.alshayeb@gmail.com', href: 'mailto:basl.alshayeb@gmail.com' },
          { label: 'Скачать CV RU', href: cvFiles.ru, download: cvFiles.ru },
          { label: 'Скачать CV EN', href: cvFiles.en, download: cvFiles.en },
          { label: 'github.com/Basselalshayeb2', href: 'https://github.com/Basselalshayeb2', external: true },
          { label: 'linkedin.com/in/bassel-alshayeb', href: 'https://linkedin.com/in/bassel-alshayeb', external: true },
          { label: 't.me/bassel_alshayeb', href: 'https://t.me/bassel_alshayeb', external: true }
        ]
      }
    },
    schemaKnowsAbout: commonKnowsAbout
  }
};
