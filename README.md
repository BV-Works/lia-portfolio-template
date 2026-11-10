# Lía Lugilde — Portfolio

Portfolio profesional de **Lía Lugilde**, directora, guionista, montadora y programadora audiovisual, con sede en Gijón, Asturias.

Un espacio digital de carácter cinematográfico y editorial, diseñado para presentar su filmografía, proyectos audiovisuales, trayectoria y datos de contacto.

## Overview

El portfolio está organizado en dos categorías principales:

- **Filmes:** cortometrajes documentales y de ficción.
- **Otros proyectos:** trabajos audiovisuales y proyectos culturales.

Incluye páginas dedicadas a la biografía, contacto y documentación legal.

El diseño prioriza la imagen, la tipografía y el espacio en blanco, manteniendo una estética minimalista y editorial adaptada a dispositivos móviles.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- Lucide React
- Cloudinary

## Features

- Responsive editorial layout.
- Cinematic homepage hero.
- Project listings and reusable project detail pages.
- Category-aware project URLs.
- Circular navigation between projects, including cross-category navigation.
- Responsive images delivered through Cloudinary.
- Vimeo and YouTube video embeds.
- Responsive desktop and mobile navigation.
- Page transitions and scroll management.
- Biography and contact pages.
- Legal and accessibility information.
- Semantic HTML and keyboard-accessible navigation.

## Project Structure

```text
src/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   ├── AnimatedSection.tsx
│   ├── PageTransition.tsx
│   └── ScrollToTop.tsx
├── data/
│   └── projects.ts
├── lib/
│   └── cloudinary.ts
├── pages/
│   ├── Index.tsx
│   ├── Filmes.tsx
│   ├── OtrosProyectos.tsx
│   ├── ProjectDetail.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── [Legal and informational pages]
├── App.tsx
└── index.css
```

## Project Data

All audiovisual project information is centralized in:

`src/data/projects.ts`

The shared project model supports:

- Project metadata and categories.
- Titles and descriptions.
- Synopsis and credits.
- Screenings and external links.
- Posters, hero images and galleries.
- Optional trailers and project-specific image groups.

Content remains separate from presentation logic, allowing projects to be maintained without duplicating page components.

## Image Delivery

Project imagery is hosted on **Cloudinary**.

The application stores Cloudinary public IDs rather than manually maintaining image URLs. A centralized utility generates optimized delivery URLs and responsive image sources.

Image delivery uses automatic format and quality transformations, responsive sizing and lazy loading where appropriate.

## Routing

The application uses React Router with the following route structure:

| Route | Page |
|---|---|
| `/` | Homepage |
| `/filmes` | Films |
| `/filmes/:slug` | Film detail |
| `/otros-proyectos` | Other projects |
| `/otros-proyectos/:slug` | Project detail |
| `/bio` | Biography |
| `/contacto` | Contact |
| `/politica-de-privacidad` | Privacy policy |
| `/politica-de-cookies` | Cookie policy |
| `/aviso-legal` | Legal notice |
| `/accesibilidad` | Accessibility statement |

Project detail pages share a single reusable component and preserve the project category in their URLs.

## Development

### Requirements

- Node.js 22.13.0 (see `.nvmrc`)
- npm

### Installation

```bash
npm install
```

### Development server

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Quality checks

```bash
npm run typecheck
npm run lint
```

## Deployment

The project is deployed through **GitHub Pages**.

Production builds use a dedicated Vite mode to configure the deployment base path:

```bash
npm run build -- --mode github-pages
```

The application uses `import.meta.env.BASE_URL` as the React Router basename to support both local development and deployment.

A GitHub Actions workflow handles the build and deployment process.

## Production Readiness

The main portfolio pages and project architecture are implemented.

Remaining tasks:

- [ ] Final contact form service configuration.
- [ ] Global visual refinement and CSS cleanup.
- [ ] SEO implementation and metadata.
- [ ] Sitemap and social sharing previews.
- [ ] Production cookie audit.
- [ ] Final accessibility and performance audits.
- [ ] Legal content verification.
- [ ] Responsive and cross-browser QA.
- [ ] Final GitHub Pages production verification.

## Development Principles

- Preserve the cinematic and editorial identity of the portfolio.
- Use real project information; never invent content or credits.
- Keep data separate from presentation.
- Prefer reusable components over duplicated markup.
- Prioritize accessibility and performance.
- Keep legal and privacy information aligned with the actual production implementation.
- Prefer focused improvements over unnecessary architectural complexity.

---

**Built by [Bajo Vigilancia](https://bajovigilancia.com)**