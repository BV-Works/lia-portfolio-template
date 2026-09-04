# Lía Lugilde — Portfolio

Portfolio web de **Lía Lugilde**, filmmaker y creadora audiovisual.

El proyecto reproduce la estructura, lenguaje visual y comportamiento editorial del sitio de referencia, adaptándolo al contenido profesional real de Lía Lugilde.

El objetivo no es crear un portfolio genérico, sino mantener una experiencia **cinematográfica, editorial, minimalista y centrada en la imagen**.

---

## Project Profile

**Name:** Lía Lugilde

**Profession:** Filmmaker / Audiovisual Creator

**Location:** Asturias, Spain

### Focus

- Documentary filmmaking
- Fiction filmmaking
- Audiovisual creation
- Cinematography
- Editing
- Sound / visual storytelling

### Positioning

- Author-driven
- Cinematic
- Documentary and fiction
- Human and observational
- Independent audiovisual creator

### Tone of voice

- Human
- Direct
- Intimate
- Editorial
- Cinematic
- Non-corporate

---

# GLOBAL DESIGN SYSTEM

## Layout

- Max-width, centered content where appropriate
- Generous white space
- Strong vertical rhythm
- Clear section separation through spacing and lines
- Large editorial compositions
- Images are a primary part of the visual experience
- Responsive behavior must preserve the hierarchy of the reference design
- Avoid unnecessary application-like UI patterns

## Typography

- Editorial serif for large expressive headlines
- Clean sans-serif for metadata, navigation and supporting information
- Large display typography for hero and section headings
- Tight leading on large headlines
- Calm, readable body text
- Editorial rather than corporate character

## Color

- Predominantly black and white
- High-contrast sections
- Project imagery provides the main visual color
- Minimal decorative UI
- Typography, spacing and imagery carry the visual experience

---

# NAVIGATION

The portfolio uses a floating editorial navigation system inspired by the reference site.

## Current structure

### Left

- Lía Lugilde / wordmark

### Right

- Filmes
- Otros proyectos
- Bio
- Contacto

## Behavior

- Fixed while scrolling
- Rounded pill container
- Responsive
- Navigation hierarchy preserved across desktop and mobile
- Visual treatment adapts where necessary to the underlying content
- Keyboard accessible
- Visible `focus-visible` states

The `Navbar` component is currently being reviewed as part of the final production-readiness pass.

---

# CONTENT ARCHITECTURE

The portfolio is organized into two main project categories:

```text
filmes
otros-proyectos
```

Current projects:

## Filmes

1. **Saltar**

   - Cortometraje documental — 18 min

2. **Los trazos que quedan de ti**

   - Cortometraje documental — 24 min

3. **Breves anotaciones sobre una ruptura**

   - Cortometraje de ficción — 9 min

## Otros proyectos

4. **Una mujer que conocí llamada Yudita**

   - Cortometraje documental — 19 min

5. **Soledá**

   - Cortometraje de ficción — 15 min

6. **In-migración**

   - Cabecera para el festival MUSOC edición 2025

---

# ROUTING

The current React Router architecture uses:

```text
/
├── /filmes
├── /otros-proyectos
├── /bio
├── /contacto
└── /work/:slug
```

Routes:

| Route              | Page                 | Purpose                    |
| ------------------ | -------------------- | -------------------------- |
| `/`                | `Index.tsx`          | Homepage / cinematic hero  |
| `/filmes`          | `Filmes.tsx`         | Main films listing         |
| `/otros-proyectos` | `OtrosProyectos.tsx` | Other audiovisual projects |
| `/bio`             | `About.tsx`          | Biography                  |
| `/contacto`        | `Contact.tsx`        | Contact                    |
| `/work/:slug`      | `ProjectDetail.tsx`  | Individual project         |
| `*`                | `NotFound.tsx`       | 404 page                   |

The project detail route is intentionally generic so the same component can render projects from both categories.

---

# PAGE 1 — HOME

The homepage is intentionally minimal and image-led.

## Current structure

```text
Navbar
   ↓
Full-screen hero
   ↓
Footer
```

The hero displays the portfolio projects as a cinematic carousel.

Each slide contains:

- Project image
- Project type / duration
- Project title
- Project counter
- Link to the corresponding project detail

The hero is implemented as the primary `<h1>` context of the homepage.

## Image behavior

The homepage supports an optional dedicated image:

```ts
homeImage?: {
  publicId: string;
  sizes?: string;
}
```

If no dedicated `homeImage` exists, the project automatically falls back to:

```text
heroImage
```

This allows the homepage to work even when dedicated homepage assets have not yet been uploaded for every project.

---

# PAGE 2 — FILMES

Route:

```text
/filmes
```

Displays the three main films:

### SALTAR

**Cortometraje documental — 18 min**

### LOS TRAZOS QUE QUEDAN DE TI

**Cortometraje documental — 24 min**

### BREVES ANOTACIONES SOBRE UNA RUPTURA

**Cortometraje de ficción — 9 min**

Each project listing includes:

- Project image
- Project title
- Listing description
- Link to the project detail page

The listing uses the reusable `ProjectCard` component.

The current layout uses a responsive two-column editorial grid on medium and larger screens and a single column on mobile.

---

# PAGE 3 — OTROS PROYECTOS

Route:

```text
/otros-proyectos
```

Projects:

### Una mujer que conocí llamada Yudita

**Cortometraje documental — 19 min**

### Soledá

**Cortometraje de ficción — 15 min**

### In-migración

**Cabecera para el festival MUSOC edición 2025.**

The same visual system and project-detail architecture are reused.

---

# PAGE 4 — PROJECT DETAIL

Every project opens through:

```text
/work/:slug
```

Examples:

```text
/work/saltar
/work/los-trazos-que-quedan-de-ti
/work/breves-anotaciones-sobre-una-ruptura
/work/una-mujer-que-conoci-llamada-yudita
/work/soleda
/work/in-migracion
```

The detail page follows the established editorial composition:

```text
Project hero
      ↓
Project title / metadata
      ↓
Poster + project information
      ↓
Trailer
      ↓
Gallery
      ↓
Next project
      ↓
Footer
```

Not every project necessarily contains every section.

## Project Hero

- Large hero image
- Strong visual impact
- Responsive Cloudinary delivery
- High-priority image loading
- Editorial presentation

## Project Information

Depending on the project, the page can contain:

- Project title
- Type / duration
- Synopsis
- Credits
- Screenings / awards
- Funding
- Production
- External links
- Trailer
- Gallery

The component renders sections conditionally according to the available project data.

---

# PROJECT INFORMATION

Each project can contain:

## Synopsis

Long-form project description.

## Credits

Structured role / person pairs:

```ts
{
  role: "Dirección",
  people: "Lía Lugilde"
}
```

## Screenings

Festivals, awards and screenings.

## External Links

Relevant external articles, interviews or project pages.

## Trailer

Optional Vimeo or YouTube trailer.

Example:

```ts
{
  platform: "vimeo",
  url: "https://vimeo.com/..."
}
```

The project detail implementation converts supported Vimeo and YouTube URLs into the appropriate embed URL.

## Gallery

Project stills served dynamically through Cloudinary.

---

# SPECIAL PROJECT METADATA

Some projects contain additional image groups.

For example, **Saltar** includes:

- Funding
- Production

These are represented independently from the main gallery:

```ts
funding?: ResponsiveImage[];
production?: ResponsiveImage[];
```

This allows project-specific sections without introducing hardcoded project exceptions into the general rendering architecture.

---

# DATA MODEL

Project content is centralized in:

```text
src/data/projects.ts
```

The project model contains:

- `id`
- `slug`
- `category`
- `title`
- `listingDescription`
- `heroImage`
- `poster`
- `synopsis`
- `credits`
- `screenings`
- `funding`
- `production`
- `links`
- `trailer`
- `gallery`
- optional `homeImage`

The project data is intentionally separated from presentation logic.

Components should consume structured project data rather than containing hardcoded project-specific content.

---

# IMAGE ARCHITECTURE

Project images are hosted through **Cloudinary**.

The application does not maintain manually generated responsive image URLs inside `projects.ts`.

Instead, image objects contain a Cloudinary `publicId`.

Example:

```ts
{
  publicId: "hero-saltar",
  sizes: "100vw"
}
```

Cloudinary is responsible for dynamic image delivery and transformations.

## Cloudinary configuration

Cloudinary assets are organized by project:

```text
lia-lugilde/

├── 1 SALTAR/
├── 2 TRAZOS/
├── 3 RUPTURA/
├── 4 YUDITA/
├── 5 SOLEDA/
└── 6 INMIGRACION/
```

Naming follows a predictable convention:

```text
hero-[project]
cartel-[project]
fotograma-1-[project]
fotograma-2-[project]
```

Additional project-specific assets can follow the same pattern:

```text
funding-saltar
production-saltar
```

---

# RESPONSIVE IMAGES

The frontend generates optimized Cloudinary delivery URLs dynamically.

Current transformations include:

```text
w_768
w_1536
q_auto
f_auto
```

The application should avoid manually maintaining:

```text
300px versions
768px versions
1024px versions
1536px versions
WebP versions
AVIF versions
```

Those transformations belong to the image delivery layer.

## Image model

```ts
export interface ResponsiveImage {
  publicId: string;
  sizes?: string;
}
```

Conceptual flow:

```text
publicId
    ↓
Cloudinary URL builder
    ↓
width / quality / format transformations
    ↓
optimized image
```

This keeps project data clean and makes future image changes easier.

---

# PERFORMANCE

The current implementation follows a basic production-oriented image loading strategy.

## Above-the-fold images

Hero images use:

```html
fetchPriority="high" loading="eager" decoding="async"
```

## Below-the-fold images

Project cards, posters and galleries use:

```html
loading="lazy" decoding="async"
```

## Video embeds

Trailer iframes use:

```html
loading="lazy"
```

The goal is to prioritize the visual content that is immediately visible without loading all project assets at once.

---

# ACCESSIBILITY

Accessibility is being incorporated as part of the production-readiness pass.

Current practices include:

- Semantic `<h1>` / `<h2>` / `<h3>` hierarchy
- `aria-labelledby` where useful
- Decorative elements marked with `aria-hidden`
- Meaningful project links
- Keyboard-accessible navigation
- `focus-visible` states
- Appropriate image `alt` behavior
- Sufficient text/background contrast
- Responsive layouts for mobile and desktop

Decorative hero imagery can use:

```html
alt=""
```

when the visible project title already provides the semantic context.

---

# TECHNICAL ARCHITECTURE

The project is built using:

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui where appropriate
- React Router
- Framer Motion
- Cloudinary

The application follows a separation between:

```text
Data
  ↓
Reusable components
  ↓
Pages
  ↓
Presentation
```

Project-specific content belongs in the data model.

Reusable visual behavior belongs in components.

---

# COMPONENT ARCHITECTURE

Current relevant components include:

```text
src/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   ├── AnimatedSection.tsx
│   ├── PageTransition.tsx
│   ├── ScrollToTop.tsx
│   └── ui/
│
├── data/
│   └── projects.ts
│
├── lib/
│   └── cloudinary.ts
│
└── pages/
    ├── Index.tsx
    ├── Filmes.tsx
    ├── OtrosProyectos.tsx
    ├── About.tsx
    ├── Contact.tsx
    ├── ProjectDetail.tsx
    └── NotFound.tsx
```

## Responsibilities

### `Navbar`

Global navigation and responsive navigation behavior.

### `Footer`

Global footer and final site information.

### `ProjectCard`

Reusable project preview used by project listing pages.

### `ProjectDetail`

Generic project detail renderer consuming the centralized project data.

### `AnimatedSection`

Reusable entrance animation wrapper.

### `PageTransition`

Page-level route transition.

### `ScrollToTop`

Ensures route changes return to the correct scroll position.

### `cloudinary.ts`

Centralized Cloudinary URL generation.

---

# GLOBAL STYLES

The main global stylesheet is:

```text
src/index.css
```

It contains:

- Tailwind directives
- Design tokens
- Global typography
- Base styles
- Reusable layout utilities
- Editorial helper classes

The original stylesheet is being preserved temporarily as:

```text
src/index.backup.css
```

This backup exists only as a development/reference copy and should not be imported.

The old Vite template stylesheet:

```text
src/App.css
```

is considered obsolete and should be removed once the current cleanup is finalized.

---

# DEVELOPMENT

Install dependencies:

```sh
npm install
```

Run the development server:

```sh
npm run dev
```

Build the production bundle:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

The project should be tested at multiple viewport sizes.

Before considering a page complete, verify:

- Desktop
- Tablet
- Mobile
- Navigation behavior
- Keyboard navigation
- Image loading
- Cloudinary transformations
- Typography
- Spacing
- Project navigation
- External links
- Trailer behavior
- Responsive layout
- Console errors

---

# PRODUCTION-READINESS PRINCIPLES

## 1. Preserve the reference structure

Do not redesign the reference site into a generic portfolio.

## 2. Content and presentation remain separate

Project data belongs in:

```text
projects.ts
```

## 3. Images remain abstracted

Components should consume `ResponsiveImage` objects rather than manually constructed Cloudinary URLs.

## 4. Prefer reusable components

Avoid duplicating project-specific markup.

## 5. Editorial first

The portfolio should feel like an audiovisual author's website, not a SaaS dashboard or conventional developer portfolio.

## 6. Minimal UI

Avoid unnecessary:

- Cards
- Badges
- Shadows
- Gradients
- Decorative components
- Generic UI patterns

The content, typography, spacing and imagery should carry the experience.

## 7. Accessibility is part of the implementation

Semantic HTML, keyboard navigation, focus states, image semantics and contrast should be considered during development rather than added at the end.

## 8. Performance matters

Use Cloudinary transformations, lazy loading and appropriate resource priorities.

## 9. No invented content

All project descriptions, credits, screenings, links and audiovisual metadata must come from the real portfolio material.

---

# CURRENT PROJECT STATUS

## Completed

- [x] React / TypeScript project setup
- [x] React Router architecture
- [x] Real Lía Lugilde project data
- [x] Six projects added
- [x] `filmes` / `otros-proyectos` categories
- [x] Listing descriptions
- [x] Synopsis
- [x] Credits
- [x] Screenings
- [x] External links
- [x] Vimeo / YouTube trailer support
- [x] Cloudinary image assets uploaded
- [x] Cloudinary public IDs added to `projects.ts`
- [x] Responsive image model simplified
- [x] Legacy image URL assumptions removed from project data
- [x] Homepage implemented
- [x] Homepage cinematic hero / carousel
- [x] Dedicated `homeImage` support with `heroImage` fallback
- [x] Filmes page implemented
- [x] Otros proyectos page implemented
- [x] Project detail page implemented
- [x] All six project detail routes tested
- [x] Reusable `ProjectCard`
- [x] Responsive project grids
- [x] Basic image loading optimization
- [x] Basic accessibility improvements
- [x] Page transitions
- [x] Scroll restoration between routes

---

# CURRENT WORK — PROD READY PASS

The project is now moving from **functional implementation** into a production-readiness and refinement phase.

## Current order of work

### 1. Global shell

- [ ] Review `Navbar.tsx`
- [ ] Review `Footer.tsx`
- [ ] Verify desktop navigation
- [ ] Verify mobile navigation
- [ ] Verify keyboard accessibility
- [ ] Verify focus states
- [ ] Verify fixed/floating behavior
- [ ] Verify responsive spacing

### 2. Global styles

- [x] Review `main.tsx`
- [x] Review `App.tsx`
- [ ] Finalize `index.css`
- [ ] Remove obsolete `App.css`
- [ ] Preserve original CSS temporarily as `index.backup.css`
- [ ] Audit unused design tokens/utilities

### 3. Visual refinement

After all pages are functionally complete:

- [ ] Typography scale
- [ ] Font weights
- [ ] Line heights
- [ ] Section spacing
- [ ] Horizontal padding
- [ ] Image proportions
- [ ] Mobile spacing
- [ ] Desktop spacing
- [ ] Navigation proportions
- [ ] Footer proportions

Visual refinement should remain faithful to the established reference rather than introducing a new design direction.

### 4. SEO

SEO is intentionally postponed until the page structure is finalized.

Planned work:

- [ ] Document title
- [ ] Meta description
- [ ] Canonical URLs
- [ ] Open Graph metadata
- [ ] Twitter/X metadata where appropriate
- [ ] Per-project metadata
- [ ] Semantic heading audit
- [ ] `robots.txt`
- [ ] Sitemap
- [ ] Structured metadata where justified
- [ ] Social sharing previews

### 5. Final QA

- [ ] Production build
- [ ] Console error audit
- [ ] Broken link audit
- [ ] Image loading audit
- [ ] Mobile QA
- [ ] Tablet QA
- [ ] Desktop QA
- [ ] Keyboard navigation QA
- [ ] Accessibility review
- [ ] Performance review
- [ ] SEO review
- [ ] Final visual comparison against reference

---

# IMPORTANT DEVELOPMENT RULE

The project should progress in the following order:

```text
Functional completeness
        ↓
Global shell
        ↓
Global styles
        ↓
Visual refinement
        ↓
SEO
        ↓
Performance / accessibility audit
        ↓
Final QA
        ↓
Production
```

Do not introduce large visual redesigns while the underlying page architecture is still being finalized.

The goal is to finish the complete portfolio first and then perform a controlled global refinement pass.

---

# CURRENT STATE SUMMARY

The core portfolio architecture is already functional.

The six projects are represented through a centralized data model, images are delivered through Cloudinary, the main listing and detail pages are implemented, and all six project detail routes have been tested.

The remaining work is primarily:

```text
Navbar + Footer
       ↓
Global CSS cleanup
       ↓
Visual consistency
       ↓
SEO
       ↓
Final accessibility / performance audit
       ↓
Production QA
```

The project should remain **editorial, cinematic, minimal and content-driven** throughout the remaining development.
