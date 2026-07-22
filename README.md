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

- `src/data/resume.ts` — all resume content (profile, nav links, specializations, process/approach, experience, skills, projects, education). Edit this file to update the site's content.
- `src/components/` — one component per section (Hero, About, Specializations, Approach, Experience, Skills, Projects, Education, Contact, Nav, Footer), plus `Preloader` (name intro splash screen), `ThemeProvider`/`ThemeToggle` for dark/light mode, and `Reveal` for scroll animations.
- `src/lib/motion.ts` — shared framer-motion variant factories (`fadeUp`, `heroItem`, `heroMedia`) reused across `Reveal`, `Hero`, and `Preloader` instead of duplicating transition objects per component.
- `src/lib/initials.ts` — derives nav/preloader initials (e.g. "Rahul Goti" → "RG") from `profile.name`.
- `src/hooks/useScrolled.ts` — small hook tracking scroll position, used by `Nav` to toggle its translucent background.
- `src/app/page.tsx` — assembles the sections into the homepage.
- `src/app/layout.tsx` — fonts, metadata/SEO (Open Graph, Twitter card, JSON-LD `Person` structured data), theme provider, and the `Preloader` mount point.
- `src/app/sitemap.ts` / `src/app/robots.ts` — generated `sitemap.xml` / `robots.txt` for search engines, based on `NEXT_PUBLIC_SITE_URL`.
- `src/app/globals.css` — light + dark color palettes (CSS variables) and global styles.
- `public/profile.jpg` — profile photo used in the hero and nav (currently a placeholder — see below). `public/resume.pdf` — powers the "Resume" download button.

## Adding a real profile photo

`public/profile.jpg` is currently a placeholder initials avatar. To use a real photo, replace that file (keep the same name `profile.jpg`, ideally a square image) — it'll automatically show up in the hero and nav.

The browser tab icon (`src/app/favicon.ico`) is also generated from this photo. If you swap in a real photo, regenerate the favicon from it too:

```bash
python3 -c "
from PIL import Image
img = Image.open('public/profile.jpg').convert('RGB')
w, h = img.size
side = min(w, h)
img = img.crop(((w-side)//2, (h-side)//2, (w-side)//2+side, (h-side)//2+side))
img.save('src/app/favicon.ico', sizes=[(16,16),(32,32),(48,48),(64,64),(128,128),(256,256)])
"
```

(Requires Pillow: `pip install pillow`.)

## Intro / loading animation

`Preloader` (`src/components/Preloader.tsx`) shows a full-screen splash with the name "Rahul Goti" materializing (blur + slide-up reveal), a monogram badge, the job title, and a thin progress bar with a synced percentage counter, then fades out to reveal the page underneath. It plays once per browser session (tracked via `sessionStorage`) so returning visitors aren't shown it on every reload, and it shortens automatically for users with `prefers-reduced-motion` enabled.

## Theming

Theme switching is powered by `next-themes`. The toggle button lives in the nav (top right) and persists the user's choice across visits. Color tokens for both themes are defined in `globals.css` under `.dark` and `.light`.

## Build for production

```bash
npm run build
npm run start
```

## Deploy

Deploys as-is on [Vercel](https://vercel.com/new) (or any Next.js-compatible host) — just push to a git repo and import it. `NEXT_PUBLIC_SITE_URL` (see `.env.example`) can be set post-deploy to resolve the Open Graph preview image correctly.
