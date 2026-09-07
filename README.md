````md
# Lía Lugilde — Portfolio

Portfolio web de **Lía Lugilde**, filmmaker y creadora audiovisual.

El proyecto reproduce la estructura, lenguaje visual y comportamiento editorial del sitio de referencia, adaptándolo al contenido profesional real de Lía Lugilde.

El objetivo no es crear un portfolio genérico, sino mantener una experiencia **cinematográfica, editorial, minimalista y centrada en la imagen**.

---

# Project Profile

**Name:** Lía Lugilde

**Profession:** Filmmaker / Audiovisual Creator

**Location:** Asturias, Spain

## Focus

- Documentary filmmaking
- Fiction filmmaking
- Audiovisual creation
- Cinematography
- Editing
- Sound / visual storytelling

## Positioning

- Author-driven
- Cinematic
- Documentary and fiction
- Human and observational
- Independent audiovisual creator

## Tone of voice

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
- Responsive behavior preserves the hierarchy of the reference design
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
- Otros Proyectos
- Bio
- Contacto

## Behavior

- Fixed while scrolling
- Transparent overlay treatment on pages with a visual hero
- Solid background on pages without a hero
- Becomes solid after scrolling on hero-based pages
- Responsive
- Desktop and mobile navigation share the same hierarchy
- Mobile navigation uses a full-screen overlay
- Navigation closes automatically when the route changes
- Background scrolling is prevented while the mobile menu is open
- Keyboard accessible
- Visible `focus-visible` states

## Navbar variants

The `Navbar` component accepts an optional overlay mode:

```tsx
<Navbar overlay />
```
````

This mode is used on pages where the navigation sits above a hero image:

```text
/
├── /filmes/:slug
└── /otros-proyectos/:slug
```

Pages without a hero use the default solid navigation:

```text
/filmes
/otros-proyectos
/bio
/contacto
/politica-de-privacidad
/politica-de-cookies
/aviso-legal
/accesibilidad
```

This prevents the navigation from becoming visually invisible when placed over a plain page background.

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

The current React Router architecture uses semantic category-based project URLs and dedicated informational/legal pages:

```text
/

├── /filmes
├── /filmes/:slug
├── /otros-proyectos
├── /otros-proyectos/:slug
├── /bio
├── /contacto
├── /politica-de-privacidad
├── /politica-de-cookies
├── /aviso-legal
├── /accesibilidad
└── *
```

Routes:

| Route                     | Page                     | Purpose                    |
| ------------------------- | ------------------------ | -------------------------- |
| `/`                       | `Index.tsx`              | Homepage / cinematic hero  |
| `/filmes`                 | `Filmes.tsx`             | Main films listing         |
| `/filmes/:slug`           | `ProjectDetail.tsx`      | Individual film            |
| `/otros-proyectos`        | `OtrosProyectos.tsx`     | Other audiovisual projects |
| `/otros-proyectos/:slug`  | `ProjectDetail.tsx`      | Individual other project   |
| `/bio`                    | `About.tsx`              | Biography                  |
| `/contacto`               | `Contact.tsx`            | Contact                    |
| `/politica-de-privacidad` | `PoliticaPrivacidad.tsx` | Privacy policy             |
| `/politica-de-cookies`    | `PoliticaCookies.tsx`    | Cookie policy              |
| `/aviso-legal`            | `AvisoLegal.tsx`         | Legal notice               |
| `/accesibilidad`          | `Accesibilidad.tsx`      | Accessibility statement    |
| `*`                       | `NotFound.tsx`           | 404 page                   |

The project detail page is intentionally shared between both project categories.

The current URL structure keeps the project category visible in the URL while allowing the same `ProjectDetail` component to render both types of project.

Legal and informational pages use the same editorial layout system as the rest of the portfolio and share the global `Navbar` and `Footer`.

---

# PROJECT NAVIGATION

Project detail pages include a **Next Project** navigation element.

The sequence is intentionally global rather than restricted to the current category.

Current sequence:

```text
/filmes/saltar
        ↓
/filmes/los-trazos-que-quedan-de-ti
        ↓
/filmes/breves-anotaciones-sobre-una-ruptura
        ↓
/otros-proyectos/una-mujer-que-conoci-llamada-yudita
        ↓
/otros-proyectos/soleda
        ↓
/otros-proyectos/in-migracion
        ↓
/filmes/saltar
```

Navigation is circular.

The destination URL is always generated from the destination project's own category, so crossing from `filmes` to `otros-proyectos` does not produce an incorrect route.

The project helpers are centralized in:

```text
src/data/projects.ts
```

Relevant helpers include:

```ts
getProjectBySlug();

getProjectsByCategory();

getNextProject();

getPreviousProject();
```

---

# PAGE 1 — HOME

Route:

```text
/
```

The homepage is intentionally minimal and image-led.

## Current structure

```text
Navbar
   ↓
Cinematic hero
   ↓
Footer
```

The current homepage hero uses **Saltar** as the featured project.

The architecture remains compatible with multiple featured projects and a future cinematic carousel, but the current design intentionally presents a single static hero.

## Hero content

The hero contains:

- Project image
- Project type / duration
- Project title
- Link to the corresponding project detail

The project title provides the primary `h1` context of the homepage.

## Home image

Projects can optionally define a dedicated homepage image:

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

This allows the homepage to work even when dedicated homepage assets have not been uploaded for every project.

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

The current layout uses:

- Single column on mobile
- Two-column editorial grid on medium and larger screens

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

Project detail pages use category-aware URLs:

```text
/filmes/:slug
/otros-proyectos/:slug
```

Examples:

```text
/filmes/saltar

/filmes/los-trazos-que-quedan-de-ti

/filmes/breves-anotaciones-sobre-una-ruptura

/otros-proyectos/una-mujer-que-conoci-llamada-yudita

/otros-proyectos/soleda

/otros-proyectos/in-migracion
```

The detail page follows the established editorial composition:

```text
Project hero
      ↓
Project title
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
- Responsive behavior based on viewport aspect ratio

### Hero responsive behavior

On narrow or vertically oriented screens, the hero preserves the complete image:

```text
w-full
h-auto
object-contain
```

On sufficiently panoramic screens, the hero can occupy the viewport:

```text
h-screen
object-cover
```

The transition is based on the viewport **aspect ratio** rather than solely on a conventional device-width breakpoint.

This prevents panoramic cinematic frames from being unnecessarily cropped on tablets and vertically oriented displays.

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

External links open in a new browser tab and include appropriate accessibility context.

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

Trailer iframes use lazy loading.

## Gallery

Project stills served dynamically through Cloudinary.

Gallery images are loaded lazily and use responsive image sources.

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

## Current model

```ts
export interface ResponsiveImage {
  publicId: string;
  sizes?: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  slug: string;
  category: "filmes" | "otros-proyectos";
  title: string;
  listingDescription: string;
  heroImage: ResponsiveImage;
  homeImage?: ResponsiveImage;
  poster: ResponsiveImage;
  synopsis: string;
  credits: {
    role: string;
    people: string;
  }[];
  screenings: string[];
  funding?: ResponsiveImage[];
  production?: ResponsiveImage[];
  links?: ProjectLink[];
  trailer?: {
    platform: "vimeo" | "youtube";
    url: string;
  };
  gallery: ResponsiveImage[];
}
```

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

Current responsive delivery uses multiple widths and automatic quality/format transformations.

Conceptually:

```text
publicId

    ↓

Cloudinary URL builder

    ↓

width / quality / format transformations

    ↓

optimized image
```

The frontend uses responsive `srcSet` generation where appropriate.

Typical widths include:

```text
768
1024
1536
1920
```

Cloudinary handles:

```text
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

This keeps project data clean and makes future image changes easier.

---

# PERFORMANCE

The current implementation follows a production-oriented image loading strategy.

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

## Responsive image delivery

Project detail heroes and galleries use responsive `srcSet` values generated from Cloudinary transformations.

## Video embeds

Trailer iframes use:

```html
loading="lazy"
```

The goal is to prioritize the visual content that is immediately visible without loading all project assets at once.

---

# ACCESSIBILITY

Accessibility is being incorporated throughout the production-readiness pass.

Current practices include:

- Semantic `<h1>` / `<h2>` / `<h3>` hierarchy
- `aria-labelledby` where useful
- `aria-label` where appropriate
- Decorative elements marked with `aria-hidden`
- Meaningful project links
- Semantic React Router `<Link>` navigation
- Keyboard-accessible navigation
- Visible `focus-visible` states
- Appropriate image `alt` behavior
- External-link context for new tabs
- Mobile navigation with `aria-expanded`
- Mobile navigation with `aria-controls`
- Prevention of background scrolling while the mobile menu is open
- Sufficient text/background contrast
- Responsive layouts for mobile, tablet and desktop
- Decorative visual elements prevented from intercepting pointer interaction where appropriate

The project avoids adding ARIA where native HTML semantics already provide the required behavior.

Decorative imagery can use:

```html
alt=""
```

when the visible content already provides the semantic context.

React Router `<Link>` components remain the preferred mechanism for internal navigation. They render standard anchor elements while providing client-side routing behavior.

## Accessibility statement

A dedicated accessibility statement is available at:

```text
/accesibilidad
```

The current statement is a V1 declaration describing the accessibility measures incorporated into the site.

It intentionally does **not** claim full WCAG or UNE-EN 301 549 conformity before the final accessibility review has been completed.

The statement will be reviewed again after the production accessibility audit.

---

# LEGAL AND INFORMATIONAL PAGES

The project includes dedicated pages for the main legal and informational requirements of the portfolio:

```text
/aviso-legal
/politica-de-privacidad
/politica-de-cookies
/accesibilidad
```

## Aviso legal

Contains the site's identifying information, ownership, responsibility, intellectual property and applicable legal framework.

## Política de privacidad

Describes the processing of personal data and the rights of users.

The privacy policy is aligned with the current contact functionality and will be reviewed again if additional data-processing services are introduced.

## Política de cookies

A V1 cookie policy is currently implemented.

The final cookie inventory is intentionally postponed until the website is fully deployed in production.

The production audit will verify:

- Actual cookies
- Third-party cookies
- Cookie purposes
- Cookie duration
- Cloudinary behavior
- Form/contact service behavior
- Analytics, if eventually introduced
- Other third-party services
- Whether any non-essential cookies require a consent mechanism

The current policy therefore avoids inventing specific cookie names or providers before they have been verified in the final production environment.

## Accessibility

A dedicated accessibility statement is available at:

```text
/accesibilidad
```

It documents the accessibility approach and current implementation without claiming an external certification or full audited conformity.

---

# FOOTER

The global `Footer` component provides:

- Contact information
- Social links
- Vimeo
- Copyright
- Legal navigation
- Back-to-top control
- Website attribution

Current legal links:

```text
Aviso legal
Política de privacidad
Política de cookies
Accesibilidad
```

Internal legal navigation uses React Router `<Link>` components.

The decorative `LIA.` footer wordmark is marked as non-interactive so that it cannot intercept pointer interaction with the legal links on smaller viewports.

---

# CONTACT

Route:

```text
/contacto
```

The contact page provides:

- Contact email
- Contact form
- Name field
- Email field
- Message field
- Privacy acknowledgement
- Social links
- Vimeo
- Location information

The form is designed with accessibility in mind, including:

- Explicit labels
- Validation messaging
- Accessible status feedback
- Focus states
- Keyboard navigation
- `aria-describedby` where appropriate
- `aria-busy` during submission

The form uses an external form-processing service rather than a custom backend.

The final production configuration and privacy/cookie implications of the form service will be reviewed during the production audit.

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
    ├── PoliticaPrivacidad.tsx
    ├── PoliticaCookies.tsx
    ├── AvisoLegal.tsx
    ├── Accesibilidad.tsx
    └── NotFound.tsx
```

## Responsibilities

### `Navbar`

Global navigation and responsive navigation behavior.

Supports both normal and hero-overlay modes.

### `Footer`

Global footer, legal navigation and final site information.

### `ProjectCard`

Reusable project preview used by project listing pages.

### `ProjectDetail`

Generic project detail renderer consuming centralized project data.

Handles projects from both `filmes` and `otros-proyectos`.

### `AnimatedSection`

Reusable entrance animation wrapper.

### `PageTransition`

Page-level route transition.

### `ScrollToTop`

Ensures route changes return to the correct scroll position.

### `cloudinary.ts`

Centralized Cloudinary URL generation and responsive image delivery.

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

# DEPLOYMENT

The project is deployed through **GitHub Pages**.

The Vite configuration uses a GitHub Pages-specific base path:

```ts
base: mode === "github-pages" ? "/lia-portfolio-template/" : "/";
```

The GitHub Actions workflow builds using:

```sh
npm run build -- --mode github-pages
```

The generated `index.html` is also copied to:

```text
dist/404.html
```

This allows client-side React Router routes to continue working correctly on GitHub Pages.

The application uses:

```tsx
<BrowserRouter basename={import.meta.env.BASE_URL}>
```

so local development and the GitHub Pages deployment share the same routing architecture.

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
- Legal links
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

Use Cloudinary transformations, responsive images, lazy loading and appropriate resource priorities.

## 9. No invented content

All project descriptions, credits, screenings, links and audiovisual metadata must come from the real portfolio material.

## 10. Fix before refactoring

During the production-readiness pass, prefer focused corrections over unnecessary architectural changes.

The project should remain simple, explicit and maintainable while the final pages are completed.

## 11. Legal pages should reflect the real implementation

Privacy, cookies, legal and accessibility content should describe the actual production website.

Do not copy generic legal templates or third-party service assumptions without verifying that they apply to the current implementation.

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
- [x] Homepage cinematic hero
- [x] Dedicated `homeImage` support with `heroImage` fallback
- [x] Filmes page implemented
- [x] Otros proyectos page implemented
- [x] Project detail page implemented
- [x] All six project detail routes tested
- [x] Reusable `ProjectCard`
- [x] Responsive project grids
- [x] Responsive Cloudinary `srcSet`
- [x] Basic image loading optimization
- [x] Basic accessibility improvements
- [x] Page transitions
- [x] Scroll restoration between routes
- [x] Category-aware project URLs
- [x] Global circular Next Project navigation
- [x] Cross-category project navigation
- [x] Hero responsive behavior based on viewport aspect ratio
- [x] Navbar overlay mode for hero pages
- [x] Solid Navbar mode for non-hero pages
- [x] Responsive mobile navigation
- [x] Keyboard focus states in navigation and project links
- [x] Contact page structure and accessible contact form
- [x] Aviso legal page
- [x] Política de privacidad page
- [x] Política de cookies V1
- [x] Accesibilidad V1
- [x] Legal/informational routes
- [x] Footer legal navigation
- [x] Footer decorative interaction fix
- [x] Global legal/informational page layout consistency

---

# CURRENT WORK — PROD READY PASS

The project is now moving from **functional implementation** into the final production-readiness and refinement phase.

## 1. Remaining content pages

### Bio

- [ ] Implement/finalize final `Bio` page
- [ ] Add/verify real biography content
- [ ] Define final editorial composition
- [ ] Responsive QA
- [ ] Accessibility QA

### Contacto

- [x] Contact page implemented
- [x] Contact form structure implemented
- [x] Accessibility-focused form implementation
- [ ] Final form service configuration
- [ ] Final privacy/data-processing verification
- [ ] Responsive QA
- [ ] Accessibility QA

---

## 2. Global shell

- [x] Review `Navbar.tsx`
- [x] Review fixed/floating behavior
- [x] Hero overlay behavior
- [x] Solid behavior on non-hero pages
- [x] Desktop navigation
- [x] Mobile navigation
- [x] Keyboard accessibility
- [x] Focus states
- [x] Footer legal navigation
- [x] Footer decorative interaction behavior
- [ ] Final responsive spacing review

---

## 3. Legal and informational pages

- [x] Aviso legal
- [x] Política de privacidad
- [x] Política de cookies V1
- [x] Declaración de accesibilidad V1
- [x] Footer links
- [ ] Final production cookie audit
- [ ] Final privacy review against actual production services
- [ ] Final accessibility audit
- [ ] Update legal pages if production services change

---

## 4. Global styles

- [x] Review `main.tsx`
- [x] Review `App.tsx`
- [ ] Finalize `index.css`
- [ ] Remove obsolete `App.css`
- [x] Preserve original CSS temporarily as `index.backup.css`
- [ ] Audit unused design tokens/utilities

---

## 5. Visual refinement

After all pages are functionally complete:

- [ ] Typography scale
- [ ] Font weights
- [ ] Line heights
- [ ] Section spacing
- [ ] Horizontal padding
- [ ] Image proportions
- [ ] Mobile spacing
- [ ] Tablet spacing
- [ ] Desktop spacing
- [ ] Navigation proportions
- [ ] Footer proportions
- [ ] Cross-page visual consistency

Visual refinement should remain faithful to the established reference rather than introducing a new design direction.

---

## 6. SEO

SEO is intentionally postponed until the page structure is finalized.

Planned work:

- [ ] Reusable SEO component
- [ ] Document title
- [ ] Meta description
- [ ] Canonical URLs
- [ ] Open Graph metadata
- [ ] Twitter/X metadata where appropriate
- [x] Per-project metadata foundation
- [ ] Global metadata strategy
- [ ] Legal/informational page metadata
- [ ] Semantic heading audit
- [ ] `robots.txt`
- [ ] Sitemap
- [ ] Structured metadata where justified
- [ ] Social sharing previews

SEO should be implemented as a reusable strategy rather than through isolated metadata logic duplicated across individual pages.

---

## 7. Production cookie audit

This audit is intentionally postponed until the site is fully deployed.

Final production inspection should verify:

- Cookies actually set by the website
- Third-party requests
- Cloudinary behavior
- Form-processing service behavior
- Analytics, if introduced
- Local/session storage where relevant
- Cookie duration
- Cookie purpose
- Whether any cookies are non-essential
- Whether a consent mechanism is required

The cookie policy should then be updated to match the actual production behavior.

---

## 8. Final accessibility audit

The site already incorporates accessibility practices during development.

The final audit should verify:

- Keyboard navigation
- Focus order
- Focus visibility
- Heading hierarchy
- Accessible names
- Form labels and errors
- Image alternatives
- Contrast
- Responsive text
- Reflow
- Interactive controls
- Mobile navigation
- External links
- Motion/transition behavior
- Screen-reader behavior
- Route transitions
- Legal/informational pages

The accessibility statement should be updated after this review if necessary.

---

## 9. Final QA

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
- [ ] Cookie audit
- [ ] Privacy/legal review
- [ ] Final visual comparison against reference
- [ ] GitHub Pages production verification

---

# IMPORTANT DEVELOPMENT RULE

The project should progress in the following order:

```text
Functional completeness

        ↓

Remaining content pages

        ↓

Global shell

        ↓

Global styles

        ↓

Visual refinement

        ↓

SEO

        ↓

Production cookie audit

        ↓

Accessibility / performance audit

        ↓

Final legal review

        ↓

Final QA

        ↓

Production
```

Do not introduce large visual redesigns while the underlying page architecture is still being finalized.

The goal is to finish the complete portfolio first and then perform a controlled global refinement pass.

---

# CURRENT STATE SUMMARY

The core portfolio architecture is functional.

The six projects are represented through a centralized data model, images are delivered through Cloudinary, the main listing and detail pages are implemented, and the project navigation correctly handles both categories.

The global navigation adapts its visual treatment depending on whether the page contains a hero, while project detail heroes respond to the viewport aspect ratio to preserve cinematic imagery on mobile and tablet displays.

The global legal/informational layer is now also in place:

```text
Aviso legal
Política de privacidad
Política de cookies
Accesibilidad
```

The Footer exposes these pages through accessible internal navigation.

The cookie policy is intentionally a V1 implementation. The definitive cookie inventory will be performed against the fully deployed production website after all external services, SEO and contact functionality are finalized.

The accessibility statement is also a V1 declaration. It documents the accessibility work already incorporated without claiming full external certification or audited WCAG/UNE-EN 301 549 conformity.

The remaining functional work is now primarily concentrated on:

```text
Bio
Final Contact configuration
```

After that, the project moves into the final refinement stage:

```text
Bio
   +
Final Contact configuration

        ↓

Footer / global shell final review

        ↓

Global CSS cleanup

        ↓

Visual consistency

        ↓

SEO

        ↓

Production cookie audit

        ↓

Accessibility / performance audit

        ↓

Legal review

        ↓

Production QA

        ↓

Production
```

The project should remain **editorial, cinematic, minimal and content-driven** throughout the remaining development.

```

**Nota:** he dejado la auditoría de cookies explícitamente para producción, que es justo lo que hemos decidido. Y la declaración de accesibilidad no afirma una conformidad que todavía no hayamos auditado; eso nos evita tener que respaldar ahora una lista enorme de criterios WCAG/UNE-EN 301 549.
```
