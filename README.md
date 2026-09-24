# NOVAstudio
A responsive, animated marketing website for a fictional digital product and creative studio, built as a front-end internship submission. React.js + Tailwind CSS + Framer Motion, front-end only.
# Nova — Digital Product & Creative Studio

A responsive, animated marketing website for a fictional digital product and
creative studio, built as a front-end internship submission. React.js +
Tailwind CSS + Framer Motion, front-end only.

## Tech stack

- **React 19** — component-based UI, built with Vite
- **React Router 7** — multi-page SPA navigation and a dynamic project-detail route
- **Tailwind CSS 3** — utility-first responsive styling
- **Framer Motion** — entrance, scroll-reveal, hover/tap, and route-transition animations
- **Lucide React** — icon set used across services, contact, and results sections

No backend, database, or paid APIs are used anywhere in the project.

## Key features

- Six pages: Home, About, Services, Projects, a dynamic Project Detail page
  (`/projects/:slug`), and Contact
- Fully responsive from 375px mobile up to large desktop, with no horizontal
  overflow at any breakpoint
- Reusable, data-driven components — services, projects, stats, and process
  steps are all rendered from plain data files via `.map()`, not hard-coded
  per page
- Animated, accessible mobile navigation menu with an active-route indicator
- Scroll-triggered reveal animations on every major section, staggered hero
  entrance, card hover/tap states, and a route-level page transition
- `prefers-reduced-motion` is respected globally via CSS
- A front-end-only contact form with inline validation states (required
  fields, email format, minimum message length) and a success state
- Abstract SVG artwork generated per project (no external image
  dependencies, so nothing can 404)

## Project structure

```
src/
├── assets/
├── components/
│   ├── common/       # Button, Reveal, SectionHeading, Tag, Icon, OrbArt
│   ├── layout/       # Navbar, Footer, PageTransition, ScrollToTop
│   └── sections/      # Hero, ServicesPreview, FeaturedProjects, etc.
├── data/              # services.js, projects.js, stats.js, nav.js
├── pages/             # Home, About, Services, Projects, ProjectDetail, Contact, NotFound
├── App.jsx
├── main.jsx
└── index.css
```

## Installation & setup

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Opens at `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview   # serve the production build locally to check it
```

## Live demo

_Add your deployed link here once deployed (e.g. Vercel/Netlify)._

## GitHub repository

_Add your repository link here._

## Screenshots

_Add screenshots of Home, Projects, and Project Detail here once deployed._
