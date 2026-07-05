# Bassel Alshayeb Portfolio

Personal portfolio website for Bassel Alshayeb, built with Astro, TypeScript, and Tailwind CSS.

## Local Development

```powershell
npm install
npm run dev
```

Open the local URL printed by Astro. With the current GitHub Pages base path, it is usually:

```text
http://localhost:4321/mywebsite/
```

## Production Build

```powershell
npm run build
npm run verify:site
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

If the repository name changes, update `base` to `/<repo-name>`. If deploying as a user page at `https://basselalshayeb2.github.io/`, remove the `base` setting and update the canonical URL in `src/pages/index.astro`.

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
