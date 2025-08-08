
# AllAsked.ai — Next.js Starter (Ready for Vercel)

## Quick Deploy (GitHub → Vercel)
1) Create a **new GitHub repo** named `allasked`.
2) Upload this folder’s contents to the repo.
3) In **Vercel** → **Add New Project** → Import the repo → **Deploy**.
4) In **Settings → Domains**, attach `www.allasked.ai` (primary) and `allasked.ai` (redirect).

## Writing Posts
- Add markdown files to `/posts` with frontmatter:
```
---
title: "My Post Title"
date: 2025-08-08
excerpt: One-line description.
---
Content here...
```
- Commit + push → Vercel auto-builds.
- Sitemap and robots.txt are generated at build.

## Customize
- Logo: `/public/logo.svg`
- Colors/typography: `styles/globals.css`
- Meta tags: `pages/_app.js`
- Static pages: `pages/about.js`, `pages/contact.js`, `pages/privacy.js`, `pages/terms.js`
