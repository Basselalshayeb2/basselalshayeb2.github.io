import { existsSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const englishHtmlPath = join(root, 'dist', 'index.html');
const russianHtmlPath = join(root, 'dist', 'ru', 'index.html');

const requiredFiles = [
  'public/Bassel_Alshayeb_CV_EN.pdf',
  'public/Bassel_Alshayeb_CV_RU.pdf',
  'public/favicon.svg',
  'public/systems-ledger-hero.webp',
  'public/og-image.jpg',
  'public/robots.txt',
  'public/yandex_5b52a2f9c116ce0c.html'
];

const requiredEnglishText = [
  'Bassel Alshayeb',
  'Senior Backend Engineer',
  'Production backend ownership across GovTech, iGaming, FinTech, POS/SaaS, and IoT.',
  'Often the sole backend owner',
  'Proof recruiters can scan',
  'Backend-heavy fullstack delivery when the product needs it.',
  '95-97%',
  '12',
  '10k+',
  '14k+',
  'AI Voice Assistant for Dentists - STOMMIS Integration',
  'basl.alshayeb@gmail.com',
  'github.com/Basselalshayeb2',
  'linkedin.com/in/bassel-alshayeb',
  't.me/bassel_alshayeb'
];

const requiredRussianText = [
  'Басель Альшаеб',
  'Senior Backend Engineer',
  'Backend-разработка для production-систем в GovTech, iGaming, FinTech, POS/SaaS и IoT.',
  'Ключевые факты',
  'Отвечал за 12 микросервисов',
  'Ключевой проект',
  'Рассматриваю Senior Backend и backend-heavy fullstack роли.',
  'Скачать CV RU',
  'basl.alshayeb@gmail.com'
];

const requiredLinks = [
  'href="/favicon.svg"',
  'href="/Bassel_Alshayeb_CV_EN.pdf"',
  'href="/Bassel_Alshayeb_CV_RU.pdf"',
  'href="#contact"',
  'href="https://github.com/Basselalshayeb2"',
  'href="https://linkedin.com/in/bassel-alshayeb"',
  'href="https://t.me/bassel_alshayeb"',
  'href="mailto:basl.alshayeb@gmail.com"'
];

const requiredAssetReferences = [
  'href="/_astro/',
  '--systems-art: url(&quot;/systems-ledger-hero.webp&quot;)',
  'content="#0d1011"',
  'application/ld+json',
  'name="google-site-verification" content="e5hdA80ZnM0ZJssYy3xXBciSBdCgy4_ga3WNwYyrl0M"',
  'content="https://basselalshayeb2.github.io/og-image.jpg"'
];

const requiredEnglishReferences = [
  'lang="en"',
  'content="https://basselalshayeb2.github.io/"',
  'rel="alternate" hreflang="en" href="https://basselalshayeb2.github.io/"',
  'rel="alternate" hreflang="ru" href="https://basselalshayeb2.github.io/ru/"',
  'rel="alternate" hreflang="x-default" href="https://basselalshayeb2.github.io/"'
];

const requiredRussianReferences = [
  'lang="ru"',
  'content="https://basselalshayeb2.github.io/ru/"',
  'rel="alternate" hreflang="en" href="https://basselalshayeb2.github.io/"',
  'rel="alternate" hreflang="ru" href="https://basselalshayeb2.github.io/ru/"',
  'href="/"',
  'href="/ru/"'
];

const forbiddenText = [
  '/mywebsite/',
  '/myportfolio/',
  'https://basselalshayeb2.github.io/mywebsite/',
  'src="/systems-ledger-hero.webp"',
  'ÐÐ»ÑŒÑˆÐ°ÐµÐ±',
  'Альшаеб_Басель_CV_RU.pdf',
  'Production backend ownership в',
  'лет commercial experience',
  'активных iGaming players',
  'Факты для быстрого скрининга',
  'Built Slotaxy provider integrations для'
];

function fail(message) {
  console.error(message);
  process.exitCode = 1;
}

function verifyHtml(path, requiredText, extraRequiredReferences = []) {
  if (!existsSync(path)) {
    fail(`Missing built HTML: ${path}`);
    return;
  }

  const html = readFileSync(path, 'utf8');

  for (const text of requiredText) {
    if (!html.includes(text)) {
      fail(`Built HTML does not include required text: ${text}`);
    }
  }

  for (const link of requiredLinks) {
    if (!html.includes(link)) {
      fail(`Built HTML does not include required link: ${link}`);
    }
  }

  for (const reference of requiredAssetReferences) {
    if (!html.includes(reference)) {
      fail(`Built HTML does not include required asset reference: ${reference}`);
    }
  }

  for (const reference of extraRequiredReferences) {
    if (!html.includes(reference)) {
      fail(`Built HTML does not include required localized reference: ${reference}`);
    }
  }

  for (const text of forbiddenText) {
    if (html.includes(text)) {
      fail(`Built HTML still references forbidden text: ${text}`);
    }
  }
}

verifyHtml(englishHtmlPath, requiredEnglishText, requiredEnglishReferences);
verifyHtml(russianHtmlPath, requiredRussianText, requiredRussianReferences);

for (const file of requiredFiles) {
  const path = join(root, file);
  if (!existsSync(path)) {
    fail(`Missing required asset: ${file}`);
    continue;
  }

  if (statSync(path).size === 0) {
    fail(`Required asset is empty: ${file}`);
  }
}

if (process.exitCode) {
  process.exit(process.exitCode);
}

console.log('Built site verification passed.');
