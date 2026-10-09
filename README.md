# David Gilbert's portfolio

The source for [sarcdg.dev](https://sarcdg.dev), a portfolio of David's software, applied machine learning and Chemical Engineering work. It distinguishes independent projects from team contributions and labels concepts and work in progress.

## Run locally

Use the Node version compatible with the installed Vite release, then run:

```bash
npm ci
npm run dev
```

Build and lint:

```bash
npm run lint
npm run build
```

The production bundle is in `dist/`. Routing is handled by React Router with a Vercel rewrite in `vercel.json`.

## Content and assets

- Homepage selection: `src/pages/Home.jsx`
- Project records and links: `src/data/projects.js`
- Full project archive: `src/pages/Projects.jsx`
- Interface captures: `public/project-previews/`, taken from public project homepages in October 2026
- Downloadable CV: `public/David_Master_CV.pdf`
- Portrait: `public/david-gilbert-420.webp` and `public/david-gilbert-700.webp`

Project screenshots show public landing pages at capture time. They do not prove authentication flows, results or deployment status of an entire team product. The GraphSense web beta and unfinished NexStore pages are labeled in the project copy.

## Site checks

Open `/` and `/projects` at phone and desktop widths. Verify the five homepage project links, archive filters and jump links, CV download, keyboard focus, reduced-motion layout and external URLs. No application secrets are required for this static portfolio.

## Current limitations

The interactive Three.js scene increases bundle size. The GraphSense web beta is ongoing. Some live demos rely on services maintained in their own repositories and can change independently of this portfolio.
