# Bassel Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and verify a one-page Astro + TypeScript + Tailwind CSS portfolio for Bassel Alshayeb, using the supplied CV PDFs as the content source and preparing GitHub Pages deployment.

**Architecture:** This is a static Astro site with one page, one global stylesheet, static CV assets in `public/`, and GitHub Pages documentation. Content will be modeled as typed arrays inside `src/pages/index.astro` to keep repeated metrics, experience, skills, and links consistent without overbuilding a data layer for a one-page site.

**Tech Stack:** Astro, TypeScript, Tailwind CSS, CSS custom properties, static GitHub Pages output.

---

## File Structure

- Create `package.json`: npm scripts, dependencies, and dev dependencies.
- Create `astro.config.mjs`: static Astro config with `site: 'https://basselalshayeb2.github.io'`, `base: '/mywebsite'`, and Tailwind through the Vite plugin.
- Create `tsconfig.json`: strict Astro TypeScript preset.
- Tailwind v4 will be configured through `@tailwindcss/vite`; no separate Tailwind config is required for this one-page site.
- Create `src/env.d.ts`: Astro type references.
- Create `src/styles/global.css`: Tailwind imports, design tokens, base styles, focus states, responsive helpers, motion, and print-safe defaults.
- Create `src/pages/index.astro`: full one-page portfolio, typed content arrays, SEO metadata, links, and semantic sections.
- Copy `Bassel_Alshayeb_CV_EN.pdf` to `public/Bassel_Alshayeb_CV_EN.pdf`.
- Copy `Альшаеб_Басель_CV_RU.pdf` to `public/Альшаеб_Басель_CV_RU.pdf`.
- Create `.github/workflows/deploy.yml`: optional GitHub Pages Actions deployment workflow.
- Create `.gitignore`: Node, build output, local Astro, and `.superpowers/` companion artifacts.
- Create `README.md`: setup, local commands, GitHub Pages deployment commands, and URL/base notes.

## Task 1: Scaffold Astro/Tailwind Project

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `src/env.d.ts`
- Create: `.gitignore`

- [ ] **Step 1: Create package and config files**

Create `package.json`:

```json
{
  "name": "bassel-alshayeb-portfolio",
  "version": "1.0.0",
  "type": "module",
  "private": true,
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview"
  },
  "dependencies": {
    "@astrojs/check": "latest",
    "@tailwindcss/vite": "latest",
    "astro": "latest",
    "tailwindcss": "latest",
    "typescript": "latest"
  }
}
```

Create `astro.config.mjs`:

```js
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://basselalshayeb2.github.io',
  base: '/mywebsite',
  vite: {
    plugins: [tailwindcss()]
  }
});
```

Create `tsconfig.json`:

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": "."
  }
}
```

Create `src/env.d.ts`:

```ts
/// <reference types="astro/client" />
```

Create `.gitignore`:

```gitignore
node_modules/
dist/
.astro/
.vercel/
.netlify/
.DS_Store
*.log
.superpowers/
```

- [ ] **Step 2: Install dependencies**

Run:

```powershell
npm install
```

Expected: `package-lock.json` is created and npm exits successfully.

- [ ] **Step 3: Run a baseline build check**

Run:

```powershell
npm run build
```

Expected initially: fails because `src/pages/index.astro` does not exist yet. This confirms scripts execute.

## Task 2: Add Public CV Assets

**Files:**
- Create: `public/Bassel_Alshayeb_CV_EN.pdf`
- Create: `public/Альшаеб_Басель_CV_RU.pdf`

- [ ] **Step 1: Create public directory and copy PDFs**

Run:

```powershell
New-Item -ItemType Directory -Force -Path public
Copy-Item -LiteralPath 'Bassel_Alshayeb_CV_EN.pdf' -Destination 'public\Bassel_Alshayeb_CV_EN.pdf' -Force
Copy-Item -LiteralPath 'Альшаеб_Басель_CV_RU.pdf' -Destination 'public\Альшаеб_Басель_CV_RU.pdf' -Force
```

Expected: both PDFs exist under `public/` with non-zero file sizes.

- [ ] **Step 2: Verify asset paths**

Run:

```powershell
Get-ChildItem -LiteralPath public -Filter *.pdf | Select-Object Name,Length
```

Expected: `Bassel_Alshayeb_CV_EN.pdf` and `Альшаеб_Басель_CV_RU.pdf` are listed.

## Task 3: Implement Global Design System

**Files:**
- Create: `src/styles/global.css`

- [ ] **Step 1: Create Tailwind and base CSS**

Create `src/styles/global.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,650&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600;700&display=swap');

@import "tailwindcss";

:root {
  --ink: #f8f1dc;
  --muted: #c9c2b3;
  --quiet: #8f8a7f;
  --brass: #d6a85b;
  --brass-deep: #a87328;
  --night: #0d1011;
  --panel: rgba(255, 255, 255, 0.052);
  --panel-strong: rgba(255, 255, 255, 0.086);
  --rule: rgba(248, 241, 220, 0.13);
  --rule-strong: rgba(214, 168, 91, 0.42);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  background: var(--night);
}

body {
  margin: 0;
  min-width: 320px;
  color: var(--ink);
  background:
    radial-gradient(circle at 78% 8%, rgba(214, 168, 91, 0.18), transparent 28rem),
    linear-gradient(90deg, rgba(214, 168, 91, 0.08) 0 1px, transparent 1px 100%),
    linear-gradient(180deg, rgba(214, 168, 91, 0.055) 0 1px, transparent 1px 100%),
    var(--night);
  background-size: auto, 44px 44px, 44px 44px, auto;
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  text-rendering: geometricPrecision;
}

a {
  color: inherit;
  text-decoration: none;
}

a:focus-visible,
button:focus-visible {
  outline: 2px solid var(--brass);
  outline-offset: 4px;
}

::selection {
  background: rgba(214, 168, 91, 0.32);
  color: #fff8df;
}

.shell {
  width: min(1160px, calc(100% - 32px));
  margin: 0 auto;
}

.panel {
  border: 1px solid var(--rule);
  background: var(--panel);
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(14px);
}

.reveal {
  animation: reveal-up 700ms ease both;
}

.reveal-delay-1 {
  animation-delay: 90ms;
}

.reveal-delay-2 {
  animation-delay: 180ms;
}

@keyframes reveal-up {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 2: Check CSS import path later**

The page implementation must import:

```astro
import '../styles/global.css';
```

Expected: Astro build includes Tailwind and custom CSS without duplicate base styles.

## Task 4: Implement Portfolio Page

**Files:**
- Create: `src/pages/index.astro`

- [ ] **Step 1: Create typed content and SEO metadata**

Create `src/pages/index.astro` with frontmatter defining constants:

```astro
---
import '../styles/global.css';

const siteUrl = 'https://basselalshayeb2.github.io/mywebsite/';
const pageTitle = 'Bassel Alshayeb - Senior Backend Engineer';
const pageDescription =
  'Senior Backend / Backend-heavy Fullstack Engineer with 6+ years across GovTech, iGaming, FinTech, POS/SaaS, IoT, microservices, and AI clinical systems.';

type LinkItem = {
  label: string;
  href: string;
  download?: boolean | string;
  external?: boolean;
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

const links: LinkItem[] = [
  { label: 'Download CV EN', href: '/Bassel_Alshayeb_CV_EN.pdf', download: 'Bassel_Alshayeb_CV_EN.pdf' },
  { label: 'Download CV RU', href: '/Альшаеб_Басель_CV_RU.pdf', download: 'Альшаеб_Басель_CV_RU.pdf' },
  { label: 'GitHub', href: 'https://github.com/Basselalshayeb2', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bassel-alshayeb', external: true },
  { label: 'Telegram', href: 'https://t.me/bassel_alshayeb', external: true }
];

const metrics: Metric[] = [
  {
    value: '95-97%',
    label: 'ASR/LLM cost reduction',
    detail: 'Browser VAD and command filtering reduced processed audio from ~600s to 18-30s per 10-minute clinical session.'
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
];

const experiences: Experience[] = [
  {
    company: 'Larsa / Tahkeem',
    role: 'Senior Backend Developer',
    period: 'Jun 2025 - Present',
    summary:
      'Sole backend engineer for 12 microservices powering UAE Government awards and competition workflows, including evaluation pipelines, jury stages, notifications, and service APIs.',
    stack: 'Node.js · TypeScript · Go · MongoDB · NATS · Docker'
  },
  {
    company: 'Sigma Digital / 1xbet group',
    role: 'Senior Backend Developer',
    period: 'Oct 2023 - Mar 2025',
    summary:
      'Built Slotaxy provider integrations for 10,000+ active players and designed Vektor as a Java / Spring Cloud FinTech microservice system with RabbitMQ and PostgreSQL.',
    stack: 'Laravel · Node.js · Java · Spring Boot · PostgreSQL · RabbitMQ · WebSocket'
  },
  {
    company: 'BeInMedia / Wiyak',
    role: 'Senior Fullstack Developer',
    period: 'Oct 2022 - Oct 2023',
    summary:
      'Enhanced real-time order delivery for a Kuwait POS ecosystem serving 1,000+ restaurants, managing WebSocket state across drivers, restaurants, orders, and payment states.',
    stack: 'Laravel · Vue.js · MariaDB · Laravel Echo · WebSocket · CI/CD'
  },
  {
    company: 'PlanA Agency',
    role: 'Fullstack Engineer',
    period: 'Jul 2021 - Oct 2022',
    summary:
      'Delivered crypto exchange dashboards with Binance API integration, precise decimal commission logic, Amadeus flight search/reservation, and UAE client applications.',
    stack: 'Laravel · Vue.js · Node.js · MySQL · Nginx'
  },
  {
    company: 'Disrupt-x / Unifi Solutions',
    role: 'Backend Engineer',
    period: 'Aug 2020 - Mar 2021',
    summary:
      'Developed IoT security services for Dubai, integrating physical sensors with Dubai Police law-enforcement APIs through the SIA protocol and AWS deployments.',
    stack: 'Node.js · Express.js · MySQL · MariaDB · AWS · IoT Sensors'
  }
];

const skillGroups: SkillGroup[] = [
  { title: 'Languages', items: ['Node.js', 'TypeScript', 'PHP', 'Java', 'Go', 'Python'] },
  { title: 'Backend', items: ['Laravel', 'NestJS', 'Express.js', 'Spring Boot 3.x', 'Spring Cloud', 'REST API', 'WebSocket', 'Microservices'] },
  { title: 'Databases & Messaging', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'MariaDB', 'Redis', 'RabbitMQ', 'Apache Kafka', 'NATS'] },
  { title: 'DevOps', items: ['Docker', 'CI/CD', 'Nginx', 'Linux', 'AWS', 'Ubuntu'] },
  { title: 'Tools', items: ['Git', 'Elasticsearch', 'Postman', 'Agile/Scrum', 'GitHub Copilot', 'Claude', 'ChatGPT/Codex'] }
];
---
```

- [ ] **Step 2: Add semantic HTML layout**

Below the frontmatter, implement the full document:

```astro
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{pageTitle}</title>
    <meta name="description" content={pageDescription} />
    <link rel="canonical" href={siteUrl} />
    <meta property="og:title" content={pageTitle} />
    <meta property="og:description" content={pageDescription} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={siteUrl} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={pageTitle} />
    <meta name="twitter:description" content={pageDescription} />
  </head>
  <body>
    <main>
      <section class="shell min-h-screen pb-14 pt-6 sm:pb-20 sm:pt-8">
        <nav class="flex items-center justify-between gap-4 border-b border-[var(--rule)] pb-5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
          <a href="#top" class="transition hover:text-[var(--ink)]">Bassel Alshayeb</a>
          <div class="hidden items-center gap-5 md:flex">
            <a href="#experience" class="transition hover:text-[var(--brass)]">Experience</a>
            <a href="#project" class="transition hover:text-[var(--brass)]">Project</a>
            <a href="#skills" class="transition hover:text-[var(--brass)]">Skills</a>
            <a href="#contact" class="text-[var(--brass)] transition hover:text-[var(--ink)]">Contact</a>
          </div>
        </nav>

        <div id="top" class="grid gap-10 py-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)] lg:items-end lg:py-20">
          <div class="reveal">
            <p class="mb-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--brass)]">Production backend ownership</p>
            <h1 class="font-display text-[clamp(4.1rem,13vw,9.8rem)] font-medium leading-[0.78] tracking-[-0.065em] text-[#fff8df]">
              Bassel<br />Alshayeb
            </h1>
            <div class="mt-7 grid gap-2 font-mono text-sm font-bold leading-6 text-[var(--muted)]">
              <p class="text-[var(--brass)]">Senior Backend / Backend-heavy Fullstack Engineer</p>
              <p>Backend: Node.js / TypeScript · PHP / Laravel · Go · Java / Spring Boot</p>
              <p>Frontend where needed: Angular · React · Vue.js</p>
              <p>Data & messaging: PostgreSQL · MongoDB · MySQL/MariaDB · Redis · RabbitMQ · Kafka · NATS</p>
            </div>
            <p class="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              Senior Backend Engineer with 6+ years of commercial experience, frequently operating as the sole backend engineer on production systems across GovTech, iGaming, FinTech, POS/SaaS, and IoT, with proven frontend delivery when the product needs it.
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
              {links.map((link, index) => (
                <a
                  href={link.href}
                  download={link.download}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                  class:list={[
                    'rounded-full border px-4 py-3 font-mono text-xs font-extrabold uppercase tracking-[0.08em] transition',
                    index === 0
                      ? 'border-[var(--brass)] bg-[var(--brass)] text-[var(--night)] hover:bg-[#f0c97d]'
                      : 'border-[var(--rule)] text-[var(--ink)] hover:border-[var(--brass)] hover:text-[var(--brass)]'
                  ]}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <aside class="panel reveal reveal-delay-1 rounded-2xl p-5">
            <h2 class="sr-only">Proof metrics</h2>
            <div class="grid divide-y divide-[var(--rule)]">
              {metrics.map((metric) => (
                <article class="grid grid-cols-[6.4rem_1fr] gap-4 py-5 first:pt-1 last:pb-1">
                  <strong class="font-display text-4xl font-semibold leading-none text-[#fff8df]">{metric.value}</strong>
                  <div>
                    <h3 class="font-mono text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--brass)]">{metric.label}</h3>
                    <p class="mt-2 text-sm leading-6 text-[var(--muted)]">{metric.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="experience" class="shell border-t border-[var(--rule)] py-14 sm:py-20">
        <div class="grid gap-7 lg:grid-cols-[180px_1fr]">
          <p class="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--brass)]">Experience</p>
          <div>
            <h2 class="font-display text-4xl font-medium leading-tight tracking-[-0.035em] text-[#fff8df] sm:text-5xl">
              Production ownership across government, gaming, POS, agency, and IoT systems.
            </h2>
            <div class="mt-10 grid gap-4">
              {experiences.map((item) => (
                <article class="grid gap-4 border-t border-[var(--rule)] pt-5 md:grid-cols-[minmax(150px,0.45fr)_1fr_minmax(170px,0.55fr)] md:gap-6">
                  <div>
                    <h3 class="text-lg font-bold text-[#fff8df]">{item.company}</h3>
                    <p class="mt-1 font-mono text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[var(--quiet)]">{item.period}</p>
                  </div>
                  <p class="text-base leading-7 text-[var(--muted)]">{item.summary}</p>
                  <p class="font-mono text-xs font-bold leading-6 text-[var(--brass)]">{item.stack}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="project" class="shell border-t border-[var(--rule)] py-14 sm:py-20">
        <div class="grid gap-7 lg:grid-cols-[180px_1fr]">
          <p class="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--brass)]">Featured project</p>
          <div>
            <h2 class="font-display text-4xl font-medium leading-tight tracking-[-0.035em] text-[#fff8df] sm:text-5xl">
              AI Voice Assistant for Dentists - STOMMIS Integration.
            </h2>
            <div class="mt-9 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
              <div class="panel rounded-2xl border-[var(--rule-strong)] p-6 font-mono text-sm font-bold leading-7 text-[var(--ink)]">
                Browser VAD -> Yandex SpeechKit ASR -> command classifier -> Qwen LLM -> JSON Schema validation -> REST API write to MIS
              </div>
              <div class="grid gap-4 text-base leading-7 text-[var(--muted)]">
                <p>
                  Built a hands-free clinical voice assistant integrated with the STOMMIS dental MIS, piloted at SPb GBUZ SP No. 8 with a signed institutional adoption agreement.
                </p>
                <p>
                  A TF-IDF + logistic regression command classifier trained on 8,000 synthetic transcriptions gates LLM invocation, reducing ASR and LLM cost by 95-97%.
                </p>
                <p>
                  Qwen output is constrained to a strict intent + slots JSON contract, validated with JSON Schema and an intent whitelist before any MIS write. No medical record is modified unless the full pipeline validates cleanly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" class="shell border-t border-[var(--rule)] py-14 sm:py-20">
        <div class="grid gap-7 lg:grid-cols-[180px_1fr]">
          <p class="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--brass)]">Skills</p>
          <div>
            <h2 class="font-display text-4xl font-medium leading-tight tracking-[-0.035em] text-[#fff8df] sm:text-5xl">
              Backend-heavy stack, with frontend evidence where it matters.
            </h2>
            <div class="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {skillGroups.map((group) => (
                <article class="border-t-2 border-[var(--brass)] pt-4">
                  <h3 class="font-mono text-sm font-extrabold uppercase tracking-[0.1em] text-[#fff8df]">{group.title}</h3>
                  <p class="mt-4 text-sm leading-7 text-[var(--muted)]">{group.items.join(', ')}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="shell border-t border-[var(--rule)] py-14 sm:py-20">
        <div class="rounded-2xl bg-[var(--brass)] p-6 text-[var(--night)] sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <p class="font-mono text-xs font-extrabold uppercase tracking-[0.14em]">Contact</p>
            <h2 class="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.035em]">Available for senior backend-heavy roles.</h2>
          </div>
          <address class="mt-7 grid gap-2 not-italic lg:mt-0 lg:text-right">
            <a class="font-mono text-sm font-extrabold" href="mailto:basl.alshayeb@gmail.com">basl.alshayeb@gmail.com</a>
            <a class="font-mono text-sm font-extrabold" href="https://github.com/Basselalshayeb2" target="_blank" rel="noreferrer">github.com/Basselalshayeb2</a>
            <a class="font-mono text-sm font-extrabold" href="https://www.linkedin.com/in/bassel-alshayeb" target="_blank" rel="noreferrer">linkedin.com/in/bassel-alshayeb</a>
            <a class="font-mono text-sm font-extrabold" href="https://t.me/bassel_alshayeb" target="_blank" rel="noreferrer">t.me/bassel_alshayeb</a>
          </address>
        </div>
      </section>
    </main>
  </body>
</html>
```

- [ ] **Step 3: Run type/build check**

Run:

```powershell
npm run build
```

Expected: `astro check` and `astro build` pass. If base-prefixed asset links are needed, replace hardcoded `href` values for PDFs with `import.meta.env.BASE_URL` composition in frontmatter.

## Task 5: Add GitHub Pages Deployment Docs And Workflow

**Files:**
- Create: `.github/workflows/deploy.yml`
- Create: `README.md`

- [ ] **Step 1: Create GitHub Actions workflow**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: Create README**

Create `README.md`:

```markdown
# Bassel Alshayeb Portfolio

Personal portfolio website for Bassel Alshayeb, built with Astro, TypeScript, and Tailwind CSS.

## Local Development

```powershell
npm install
npm run dev
```

Open the local URL printed by Astro.

## Production Build

```powershell
npm run build
npm run preview
```

## GitHub Pages Deployment

The project is configured for a project page at:

```text
https://basselalshayeb2.github.io/mywebsite/
```

For this URL, `astro.config.mjs` uses:

```js
site: 'https://basselalshayeb2.github.io',
base: '/mywebsite'
```

If the repository name changes, update `base` to `/<repo-name>`. If deploying as a user page at `https://basselalshayeb2.github.io/`, remove the `base` setting.

### Deploy With GitHub Actions

1. Create a GitHub repository named `mywebsite`.
2. Push this project to the `main` branch.
3. In GitHub, open Settings -> Pages.
4. Set Source to GitHub Actions.
5. Push to `main` or run the `Deploy to GitHub Pages` workflow manually.

Commands:

```powershell
git init
git add .
git commit -m "feat: build portfolio site"
git branch -M main
git remote add origin https://github.com/Basselalshayeb2/mywebsite.git
git push -u origin main
```

After the workflow finishes, the site will be available at the GitHub Pages URL.
```

- [ ] **Step 3: Verify docs mention deployment commands**

Run:

```powershell
rg -n "npm run build|git init|deploy|GitHub Pages|base" README.md .github/workflows/deploy.yml
```

Expected: README and workflow both contain the relevant setup and deployment instructions.

## Task 6: Browser And Build Verification

**Files:**
- Read/verify: rendered local site
- Potentially modify: `src/pages/index.astro`, `src/styles/global.css`, `astro.config.mjs`

- [ ] **Step 1: Run production build**

Run:

```powershell
npm run build
```

Expected: `astro check` and `astro build` pass.

- [ ] **Step 2: Start local dev server**

Run:

```powershell
npm run dev -- --host 127.0.0.1
```

Expected: Astro reports a localhost URL, usually `http://127.0.0.1:4321/mywebsite/`.

- [ ] **Step 3: Check desktop layout**

Open the local URL at a desktop viewport. Confirm:

- Hero name is not clipped.
- Proof metrics are ordered: `95-97%`, `12`, `10k+`, `14k+`, `6+`.
- Backend, frontend, and data/messaging stack lines are visible.
- Experience rows do not overlap.
- CTAs are reachable and visually distinct.

- [ ] **Step 4: Check mobile layout**

Open the local URL at a mobile viewport around `390x844`. Confirm:

- No horizontal overflow.
- Hero text wraps cleanly.
- CTA buttons wrap without clipping.
- Proof metric panel stacks below the hero.
- Experience and skills cards remain readable.

- [ ] **Step 5: Verify links**

Check these links:

- `/mywebsite/Bassel_Alshayeb_CV_EN.pdf`
- `/mywebsite/Альшаеб_Басель_CV_RU.pdf`
- `https://github.com/Basselalshayeb2`
- `https://www.linkedin.com/in/bassel-alshayeb`
- `https://t.me/bassel_alshayeb`
- `mailto:basl.alshayeb@gmail.com`

Expected: PDFs load/download and external links point to the requested profiles.

- [ ] **Step 6: Fix issues and rerun build**

If visual or link issues are found, patch the relevant file and rerun:

```powershell
npm run build
```

Expected: build passes after fixes.

## Self-Review

- Spec coverage: all requested sections, CV downloads, SEO metadata, accessibility, responsive checks, local run, and deployment instructions are covered.
- Red-flag scan: no task relies on vague markers or unspecified implementation.
- Type consistency: `LinkItem`, `Metric`, `Experience`, and `SkillGroup` are defined before use and match the page loops.
- Git note: this folder is not currently a git repository, so commit steps are documented in README rather than executed in this plan.
