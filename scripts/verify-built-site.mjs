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
  'public/og-image.jpg'
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
  'href="/myportfolio/favicon.svg"',
  'href="/myportfolio/Bassel_Alshayeb_CV_EN.pdf"',
  'href="/myportfolio/Bassel_Alshayeb_CV_RU.pdf"',
  'href="#contact"',
  'href="https://github.com/Basselalshayeb2"',
  'href="https://linkedin.com/in/bassel-alshayeb"',
  'href="https://t.me/bassel_alshayeb"',
  'href="mailto:basl.alshayeb@gmail.com"'
];

const requiredAssetReferences = [
  'href="/myportfolio/_astro/',
  '--systems-art: url(&quot;/myportfolio/systems-ledger-hero.webp&quot;)',
  'content="#0d1011"',
  'application/ld+json',
  'content="https://basselalshayeb2.github.io/myportfolio/og-image.jpg"'
];

const requiredEnglishReferences = [
  'lang="en"',
  'content="https://basselalshayeb2.github.io/myportfolio/"',
  'rel="alternate" hreflang="en" href="https://basselalshayeb2.github.io/myportfolio/"',
  'rel="alternate" hreflang="ru" href="https://basselalshayeb2.github.io/myportfolio/ru/"',
  'rel="alternate" hreflang="x-default" href="https://basselalshayeb2.github.io/myportfolio/"'
];

const requiredRussianReferences = [
  'lang="ru"',
  'content="https://basselalshayeb2.github.io/myportfolio/ru/"',
  'rel="alternate" hreflang="en" href="https://basselalshayeb2.github.io/myportfolio/"',
  'rel="alternate" hreflang="ru" href="https://basselalshayeb2.github.io/myportfolio/ru/"',
  'href="/myportfolio/"',
  'href="/myportfolio/ru/"'
];

const forbiddenText = [
  '/mywebsite/',
  'https://basselalshayeb2.github.io/mywebsite/',
  'src="/myportfolio/systems-ledger-hero.webp"',
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
