# Lía Lugilde — Portfolio

Portfolio web de **Lía Lugilde**, directora, guionista, montadora y programadora audiovisual.

El proyecto reproduce la estructura, lenguaje visual y comportamiento editorial del sitio de referencia, adaptándolo al contenido profesional real de Lía Lugilde.

El objetivo no es crear un portfolio genérico, sino mantener una experiencia **cinematográfica, editorial, minimalista y centrada en la imagen**.

---

# Project Profile

**Name:** Lía Lugilde

**Profession:** Directora / Guionista / Montadora / Programadora audiovisual

**Location:** Gijón, Asturias, Spain

## Focus

- Dirección cinematográfica
- Guion
- Montaje
- Dirección de fotografía
- Creación audiovisual
- Programación y gestión cultural
- Documental
- Ficción
- Cine y memoria

## Positioning

- Author-driven
- Cinematic
- Documentary and fiction
- Human and observational
- Independent audiovisual creator
- Cultural programming

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

Project assets are organized by project:

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

foto
```
