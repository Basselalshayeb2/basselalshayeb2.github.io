import { existsSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const htmlPath = join(root, 'dist', 'index.html');

const requiredFiles = [
  'public/Bassel_Alshayeb_CV_EN.pdf',
  'public/Альшаеб_Басель_CV_RU.pdf',
  'public/systems-ledger-hero.png'
];

const requiredText = [
  'Bassel Alshayeb',
  'Senior Backend / Backend-heavy Fullstack Engineer',
  'Frontend where needed: Angular',
  'Data &amp; messaging: PostgreSQL',
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

const requiredLinks = [
  'href="/mywebsite/Bassel_Alshayeb_CV_EN.pdf"',
  'href="/mywebsite/Альшаеб_Басель_CV_RU.pdf"',
  'href="https://github.com/Basselalshayeb2"',
  'href="https://linkedin.com/in/bassel-alshayeb"',
  'href="https://t.me/bassel_alshayeb"',
  'href="mailto:basl.alshayeb@gmail.com"'
];

function fail(message) {
  console.error(message);
  process.exitCode = 1;
}

if (!existsSync(htmlPath)) {
  fail(`Missing built HTML: ${htmlPath}`);
} else {
  const html = readFileSync(htmlPath, 'utf8');
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
}

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
