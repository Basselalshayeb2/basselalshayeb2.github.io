# Bassel Alshayeb Portfolio

Personal portfolio website for Bassel Alshayeb, built with Astro, TypeScript, and Tailwind CSS.

## Local Development

Astro requires Node.js `>=22.12.0`. This repo includes `.nvmrc` for Node `22.12.0`.

```powershell
nvm use 22.12.0
npm install
npm run dev
```

Open the local URL printed by Astro. It is usually:

```text
http://localhost:4321/
```

## Production Build

```powershell
npm run build
npm run verify:site
npm run preview
```

## Custom Domain + GitHub Pages

The site is configured for the custom domain:

```text
https://bassel-alshayeb.com
```

`astro.config.mjs` uses:

```js
site: 'https://bassel-alshayeb.com'
```

No `base` path is set, because the custom domain serves the site from `/`. `public/CNAME` keeps the GitHub Pages custom domain attached on deploy.

### Deploy With GitHub Actions

The workflow uses Astro's official `withastro/action@v6` on Node `24`, then publishes with `actions/deploy-pages@v5`.

1. Push this project to the `main` branch.
2. In GitHub, open Settings -> Pages.
3. Set Source to GitHub Actions.
4. Under Custom domain, confirm `bassel-alshayeb.com` (and `www` if you use it).
5. Enable Enforce HTTPS after DNS has propagated.
6. Push to `main` or run the `Deploy to GitHub Pages` workflow manually.

After the workflow finishes, CSS and assets should load from `https://bassel-alshayeb.com/_astro/...`.
