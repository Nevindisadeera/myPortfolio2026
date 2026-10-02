# Nevindi Sadeera - Portfolio

Personal portfolio built with **React 19 + Vite + Tailwind CSS v4**.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Build for production

```bash
npm run build     # outputs to dist/
npm run preview   # serves the built site
```

## Editing content

| What | Where |
| --- | --- |
| Name, contact, socials, summary, services, projects, experience, education | `src/data/portfolio.js` |
| Profile photo (About card) | add `public/profile.jpg` (falls back to initials if missing) |
| CV download | `public/Nevindi_Sadeera_CV.pdf` |
| Colours, fonts, custom utilities | `src/index.css` (`@theme` block) |
| Project card links | add a `link: 'https://...'` field to a project in `src/data/portfolio.js` |

## Structure

```
src/
  components/   Navbar, Hero, About, Services, TechStack, Projects,
                ProjectPreview, Stats, Experience, Contact, Footer
  data/         portfolio.js (all page content)
  hooks/        useReveal.js (scroll-in animation)
  index.css     Tailwind theme + custom utilities
```
