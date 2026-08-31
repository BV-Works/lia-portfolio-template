# Remix of 07.01 Portfolio

You are creating a **pixel-perfect portfolio website for a premium freelance generalist designer**.

This website must **faithfully replicate the structure, layout logic, spacing, hierarchy, and interaction patterns** of the reference site provided (Wolff Olins).

This is NOT an inspiration exercise.
This is a **structural and visual copy**, with content adapted to a single designer.

---

## Designer Profile (Invented)

Name: **Julien Moreau**  
Role: **Independent Designer**  
Focus: Brand, Digital Products, Visual Systems  
Location: **Paris, France**

Positioning:
- Execution-led
- Craft-focused
- Premium freelance designer
- Works end-to-end, hands-on

Tone of voice:
- Human
- Direct
- Confident
- Editorial, not corporate

---

## GLOBAL DESIGN SYSTEM (CRITICAL)

### Layout
- Max-width, centered content
- Generous white space
- Strong vertical rhythm
- Clear section separation using lines, spacing, and background shifts

### Typography
- **Primary type:** Editorial serif (large, expressive, high contrast)
- **Secondary type:** Clean sans-serif for metadata and UI
- Very large headline sizes (hero + section headers)
- Tight leading on large headlines
- Calm, readable body text

### Color
- Predominantly white and black
- High-contrast moments
- Use **bold color blocks** inside projects when relevant
- Occasional full-bleed color sections (footer / project hero)

---

## NAVIGATION (Exact Copy)

### Floating Pill Navbar
- Rounded pill container
- Fixed to top
- Semi-transparent background
- Smooth appearance over content

**Left**
- Logo / wordmark: “Julien Moreau”

**Right**
- Work
- About
- Contact
- Search icon (visual only, no real search)

Navbar behavior:
- Stays visible while scrolling
- Adapts color (light/dark) depending on background section

---

## PAGE 1 — HOME / WORK

### Hero Section (Exact Structure)

- Large editorial headline aligned left
- Small eyebrow label above headline

**Eyebrow**
“Designer Portfolio”

**Headline**
“I design clear, functional and expressive digital experiences.”

- Use underline or subtle emphasis on select words (as per reference)
- No CTA button
- White background
- Minimal, calm opening

---

### Selected Work Section

Title:
“Selected Work”

- Horizontal divider line above section
- Grid structure identical to reference

#### Projects Grid
- 6 projects total
- Mixed layout:
  - Some full-width
  - Some two-column
- Each project includes:
  - Large visual thumbnail
  - Project title
  - One-line description
  - Metadata tags (outlined pills)

**Example Projects (Invented)**

1. **Atlas**
   Reimagining a B2B analytics platform  
   Tags: Product Design, UI Systems, SaaS

2. **Maison Noir**
   Visual identity for a contemporary fashion brand  
   Tags: Brand Identity, Art Direction

3. **Flux**
   Designing a personal finance mobile app  
   Tags: Product Design, UX, Mobile

4. **Écho**
   Website and visual system for a cultural magazine  
   Tags: Web Design, Editorial

5. **North**
   Design system for a logistics startup  
   Tags: Design Systems, UI

6. **Horizon**
   Portfolio and digital presence for a VC firm  
   Tags: Web, Brand, Digital

- Use large, high-quality imagery (editorial, abstract, brand-like)
- Images should feel premium, not stocky

---

## PAGE 2 — PROJECT DETAIL PAGE

Each project opens into a **long-form editorial case study**, following the reference exactly.

### Project Hero
- Full-width or large image
- Dark or high-contrast background
- Floating navbar adapts color

### Project Header Block

**Left column**
- Project name
- Industry
- Role
- What I did (comma-separated list)

**Right column**
- Short editorial intro paragraph (2–3 lines)

---

### Case Study Body

Structure:
- Alternating text blocks and large visuals
- Calm pacing
- No flashy UI components

Sections example:
- Context
- Challenge
- Design approach
- Outcome

Rules:
- Minimal bullets
- Mostly paragraphs
- Images dominate the experience
- Occasional full-width image sections

Optional:
- “Download project images” button (visual only)

---

## PAGE 3 — ABOUT

### Hero Text Section
- Black background
- Large serif headline

Text:
“I work independently,

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1f620b92-1e95-43b7-871d-de1d557f68a7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
