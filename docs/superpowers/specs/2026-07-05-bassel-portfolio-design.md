# Bassel Alshayeb Portfolio Design

Date: 2026-07-05

## Goal

Build a one-page English portfolio website for Bassel Alshayeb using Astro, TypeScript, and Tailwind CSS, ready for GitHub Pages deployment. The site should position Bassel for senior backend-heavy roles with international remote employers, UAE/GCC/EU/UK companies, and recruiters who value production ownership, architecture, integrations, and measurable impact.

The two CV PDFs in the project root are the source of truth:

- `Bassel_Alshayeb_CV_EN.pdf`
- `Bassel_Alshayeb_CV_RU.pdf`

## Content Positioning

The headline remains:

`Senior Backend / Backend-heavy Fullstack Engineer`

This title must be supported immediately with frontend evidence, not left as a vague claim. The hero stack will separate backend, frontend, and data/messaging:

- Backend: Node.js / TypeScript, PHP / Laravel, Go, Java / Spring Boot
- Frontend where needed: Angular, React, Vue.js
- Data & messaging: PostgreSQL, MongoDB, MySQL/MariaDB, Redis, RabbitMQ, Kafka, NATS

The summary should be confident and CV-derived: 6+ years of commercial experience, often as sole backend engineer, across GovTech, iGaming, FinTech, POS/SaaS, and IoT, with proven frontend delivery where the product required it.

## Visual Direction

Use the approved "Systems Ledger" direction:

- Dark architectural background with subtle grid/rule texture.
- Brass/gold accent for primary actions, labels, and proof highlights.
- Editorial serif display typography for the hero name and section headlines.
- Monospace utility text for stack, labels, metrics, and technical evidence.
- Restrained glass or translucent surfaces only where they clarify structure.
- No purple blob gradients, fake illustrations, decorative bento clutter, or childish colors.

The site should feel like an engineering dossier rather than a generic portfolio template.

## Page Sections

### Hero

Content:

- Bassel Alshayeb
- Senior Backend / Backend-heavy Fullstack Engineer
- Backend stack line
- Frontend evidence line: Angular, React, Vue.js
- Data & messaging line
- Short summary based on the CV
- CTA buttons: Download CV EN, Download CV RU, GitHub, LinkedIn, Telegram

Desktop layout: large editorial name and text on the left, proof metrics panel on the right.

Mobile layout: hero text first, CTAs next, proof metrics stacked below.

### Proof Metrics

Order matters. Prioritize business impact before scale:

1. 95-97% ASR/LLM cost reduction in the AI medical assistant.
2. 12 microservices owned end-to-end on UAE GovTech platform.
3. 10,000+ active iGaming players on Slotaxy.
4. 14,000+ registered users on Tahkeem.
5. 6+ years commercial backend-heavy experience.

### Experience Timeline

Use concise, achievement-focused rows:

- Larsa / Tahkeem: sole backend engineer for 12 microservices on UAE Government awards and competition workflows. Stack: Node.js, TypeScript, Go, MongoDB, NATS.
- Sigma Digital / 1xbet group: Slotaxy provider integrations for 10,000+ active players; Vektor Java / Spring Cloud FinTech microservices. Stack: Laravel, Node.js, Java, PostgreSQL, RabbitMQ, WebSocket.
- BeInMedia / Wiyak: real-time order delivery subsystem for 1,000+ restaurants in Kuwait. Stack: Laravel, Vue.js, MariaDB, Laravel Echo, WebSocket.
- PlanA Agency: crypto exchange dashboard, Binance API, Amadeus Flight API, UAE client applications. Stack: Laravel, Vue.js, Node.js, MySQL, Nginx.
- Disrupt-x / Unifi Solutions: IoT security services integrating sensors with Dubai Police APIs via SIA protocol. Stack: Node.js, Express.js, MySQL/MariaDB, AWS, IoT sensors.

### Featured Project

Title: `AI Voice Assistant for Dentists - STOMMIS Integration`

Emphasize:

- Browser-side VAD
- Yandex SpeechKit ASR
- Command classifier
- Qwen LLM
- JSON Schema validation
- REST API write to MIS
- Clinical pilot at SPb GBUZ SP No. 8
- Signed institutional adoption agreement
- TF-IDF + logistic regression classifier trained on 8,000 synthetic transcriptions
- 95-97% ASR/LLM cost reduction
- Strict intent + slots JSON contract
- Fail-safe writes: no medical record modification unless the full pipeline validates
- 2-3 second command latency

### Skills

Group skills by the requested categories:

- Languages: Node.js, TypeScript, PHP, Java, Go, Python
- Backend: Laravel, NestJS, Express.js, Spring Boot 3.x, Spring Cloud, REST API, WebSocket, microservices, distributed systems
- Databases & Messaging: PostgreSQL, MongoDB, MySQL, MariaDB, Redis, RabbitMQ, Apache Kafka, NATS
- DevOps: Docker, CI/CD, Nginx, Linux, AWS, Ubuntu
- Tools: Git, Elasticsearch, Postman, Agile/Scrum, GitHub Copilot, Claude, ChatGPT/Codex

Frontend evidence should also appear in the hero and/or experience text: Angular for Gymesis, React for TradinosUG, Vue.js for Wiyak/PlanA.

### Contact

Use a strong closing contact band with:

- Email: `basl.alshayeb@gmail.com`
- GitHub: `github.com/Basselalshayeb2`
- LinkedIn: `linkedin.com/in/bassel-alshayeb`
- Telegram: `t.me/bassel_alshayeb`

## Technical Implementation

Use Astro with TypeScript and Tailwind CSS.

Expected file structure:

- `src/pages/index.astro` for the one-page portfolio.
- `src/styles/global.css` for Tailwind imports and custom base styles.
- `public/Bassel_Alshayeb_CV_EN.pdf`
- `public/Bassel_Alshayeb_CV_RU.pdf`
- `README.md` with GitHub Pages deployment instructions.

Use static output suitable for GitHub Pages. Include SEO and Open Graph metadata:

- Title: `Bassel Alshayeb - Senior Backend Engineer`
- Description based on the CV summary.
- Canonical URL defaults to `https://basselalshayeb2.github.io/mywebsite/`, with README instructions to change it if the final GitHub repository name differs.
- Open Graph title, description, type, and URL.
- Twitter card metadata.

## Accessibility And Quality

- Semantic HTML sections and headings.
- Real links with accessible labels.
- Keyboard-visible focus states.
- Good contrast on dark background.
- No clipped text, horizontal mobile overflow, or fragile hardcoded dimensions.
- Respect `prefers-reduced-motion`.
- Subtle CSS animations only: section reveal, hover lift, or low-cost background movement.
- CV buttons must use direct downloadable links from `public/`.

## Verification

After implementation:

- Run local dev server.
- Check desktop layout.
- Check mobile layout.
- Verify CTA links and CV downloads.
- Run production build.
- Fix overflow, clipping, spacing, and broken links before handoff.
- Provide deployment commands for GitHub Pages.

## Deployment Documentation

README should include:

- Install command.
- Dev command.
- Build command.
- Preview command.
- GitHub Pages deployment path using GitHub Actions.
- Reminder to set Astro `site` to the final GitHub Pages URL.
- Notes for repo naming:
  - User/organization page: `https://<username>.github.io/`
  - Project page: `https://<username>.github.io/<repo>/`
