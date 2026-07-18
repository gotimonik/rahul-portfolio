# Rahul Goti — Portfolio

A personal portfolio site built with Next.js (App Router), TypeScript, and Tailwind CSS, generated from Rahul's resume. Includes a light/dark theme switcher and scroll-reveal animations.

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Structure

- `src/data/resume.ts` — all resume content (profile, specializations, process/approach, experience, skills, projects, education). Edit this file to update the site's content.
- `src/components/` — one component per section (Hero, About, Specializations, Approach, Experience, Skills, Projects, Education, Contact, Nav, Footer), plus `ThemeProvider`/`ThemeToggle` for dark/light mode and `Reveal` for scroll animations.
- `src/app/page.tsx` — assembles the sections into the homepage.
- `src/app/globals.css` — light + dark color palettes (CSS variables) and global styles.
- `public/profile.jpg` — profile photo used in the hero and nav (currently a placeholder — see below). `public/resume.pdf` — powers the "Resume" download button.

## Adding a real profile photo

`public/profile.jpg` is currently a placeholder initials avatar. To use a real photo, replace that file (keep the same name `profile.jpg`, ideally a square image) — it'll automatically show up in the hero and nav.

## Theming

Theme switching is powered by `next-themes`. The toggle button lives in the nav (top right) and persists the user's choice across visits. Color tokens for both themes are defined in `globals.css` under `.dark` and `.light`.

## Build for production

```bash
npm run build
npm run start
```

## Deploy

Deploys as-is on [Vercel](https://vercel.com/new) (or any Next.js-compatible host) — just push to a git repo and import it. `NEXT_PUBLIC_SITE_URL` (see `.env.example`) can be set post-deploy to resolve the Open Graph preview image correctly.
