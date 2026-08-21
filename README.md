# Surya Portfolio

A modern, animation-rich portfolio for a Data Science & AI graduate, built as a fast dependency-free static app with modular JavaScript, Tailwind browser utilities, and custom scroll/entry animations.

## Features

- Dark-mode-first AI/Data Science aesthetic with a consistent electric-cyan accent.
- Animated hero, scroll-triggered section reveals, skill bars, responsive project cards, and contact CTAs.
- Centralized content in `src/data.js` for easy updates.
- Mobile-first layout with a lightweight static production build.

## Setup

```bash
npm install
npm run dev
```

Open the printed local URL to preview the site.

If `http://localhost:5173` shows `ERR_CONNECTION_REFUSED`, the dev server is not reachable from the browser you are using. Keep `npm run dev` running, then open the port-forwarded URL for port `5173` from your editor or cloud workspace Ports/Preview panel. If you are running the project directly on your computer, open a new terminal in this repo and run `npm run dev` again.

## Build

```bash
npm run build
npm run preview
```

## Deployment

### Vercel

1. Import the GitHub repository in Vercel.
2. Use `npm run build` as the build command.
3. Use `dist` as the output directory.

### Netlify

1. Create a new site from Git.
2. Set build command to `npm run build`.
3. Set publish directory to `dist`.

## Before deploying

Replace placeholders in `src/data.js` with real GitHub, LinkedIn, email, project URLs, and add `public/resume.pdf` for the resume download button.
