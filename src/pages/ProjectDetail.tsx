import { useEffect } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

import { getProjectBySlug, getNextProject } from "@/data/projects";

import type { Project } from "@/data/projects";

import { getCloudinaryUrl } from "@/lib/cloudinary";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();

  const currentSlug = slug || "";

  /*
   * The same detail component is used by both:
   *
   * /filmes/:slug
   * /otros-proyectos/:slug
   *
   * React Router's basename is already handled by BrowserRouter,
   * so location.pathname can be evaluated against the application routes.
   */
  const category: Project["category"] = location.pathname.startsWith(
    "/otros-proyectos",
  )
    ? "otros-proyectos"
    : "filmes";

  /*
   * Resolve the current project using both slug and category.
   *
   * This ensures that the URL always points to a project
   * belonging to the corresponding section.
   */
  const project = getProjectBySlug(currentSlug, category);

  /*
   * Project pagination is intentionally GLOBAL and circular.
   *
   * It can move from "Filmes" to "Otros proyectos" and vice versa.
   */
  const nextProject = getNextProject(currentSlug);

  /*
   * The back link belongs to the section from which the current
   * project URL originates.
   */
  const categoryPath =
    category === "otros-proyectos" ? "/otros-proyectos" : "/filmes";

  /*
   * ============================================================
   * SEO
   * ============================================================
   */

  useEffect(() => {
    if (!project) {
      document.title = "Proyecto no encontrado | Lía Lugilde";
      return;
    }

    const siteName = "Lía Lugilde";
    const title = `${project.title} | ${siteName}`;

    /*
     * Keep the description concise enough for search engines.
     */
    const description =
      project.listingDescription ||
      project.synopsis ||
      `${project.title} — proyecto de Lía Lugilde.`;

    document.title = title;

    const setMeta = (
      selector: string,
      attribute: "name" | "property",
      value: string,
    ) => {
      let element = document.head.querySelector<HTMLMetaElement>(
        `meta[${attribute}="${selector}"]`,
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, selector);
        document.head.appendChild(element);
      }

      element.setAttribute("content", value);
    };

    /*
     * Standard description
     */
    setMeta("description", "name", description);

    /*
     * Open Graph
     */
    setMeta("og:title", "property", title);
    setMeta("og:description", "property", description);
    setMeta(
      "og:image",
      "property",
      getCloudinaryUrl(project.heroImage.publicId, 1536),
    );
    setMeta("og:type", "property", "website");

    /*
     * Twitter / social sharing
     */
    setMeta("twitter:card", "name", "summary_large_image");
    setMeta("twitter:title", "name", title);
    setMeta("twitter:description", "name", description);
    setMeta(
      "twitter:image",
      "name",
      getCloudinaryUrl(project.heroImage.publicId, 1536),
    );

    /*
     * Canonical URL.
     *
     * window.location.pathname contains the real GitHub Pages
     * base path when deployed, so this also works with:
     *
     * /lia-portfolio-template/
     */
    const canonicalUrl = `${window.location.origin}${window.location.pathname}`;

    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = canonicalUrl;
  }, [project]);

  /*
   * ============================================================
   * NOT FOUND
   * ============================================================
   */

  if (!project) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />

        <section
          aria-labelledby="project-not-found-title"
          className="px-6 md:px-12 lg:px-16 pt-32 pb-24"
        >
          <h1
            id="project-not-found-title"
            className="font-serif text-4xl md:text-5xl"
          >
            Proyecto no encontrado
          </h1>

          <Link
            to={categoryPath}
            className="
              inline-block mt-6
              font-sans text-base
              hover:opacity-60
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-foreground
              focus-visible:ring-offset-4
              transition-opacity
            "
          >
            ← Volver a proyectos
          </Link>
        </section>

        <Footer />
      </main>
    );
  }

  /*
   * ============================================================
   * CLOUDINARY RESPONSIVE IMAGES
   * ============================================================
   */

  const responsiveWidths = [768, 1024, 1536, 1920];

  const buildSrcSet = (publicId: string) =>
    responsiveWidths
      .map((width) => `${getCloudinaryUrl(publicId, width)} ${width}w`)
      .join(", ");

  const heroSrcSet = buildSrcSet(project.heroImage.publicId);

  const posterSrcSet = buildSrcSet(project.poster.publicId);

  /*
   * IMPORTANT:
   * The destination URL uses the CATEGORY OF THE NEXT PROJECT,
   * not the category of the current project.
   *
   * This allows pagination to cross between:
   *
   * /filmes/*
   * /otros-proyectos/*
   */
  const nextProjectPath = nextProject
    ? nextProject.category === "otros-proyectos"
      ? `/otros-proyectos/${nextProject.slug}`
      : `/filmes/${nextProject.slug}`
    : null;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar overlay />

      {/* =========================================================
          HERO IMAGE
      ========================================================= */}

      <section
        aria-label={`Imagen principal de ${project.title}`}
        className="w-full overflow-hidden"
      >
        <motion.img
          src={getCloudinaryUrl(project.heroImage.publicId, 1536)}
          srcSet={heroSrcSet}
          sizes={project.heroImage.sizes}
          alt={`Imagen principal de ${project.title}`}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="
            block
            w-full
            h-auto
            object-contain
            [@media(min-aspect-ratio:4/3)]:h-screen
            [@media(min-aspect-ratio:4/3)]:object-cover
          "
          initial={{ scale: 1.02 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      </section>

      {/* =========================================================
          PROJECT TITLE
      ========================================================= */}

      <section
        aria-labelledby="project-title"
        className="px-6 md:px-12 lg:px-16 py-16 md:py-24"
      >
        <AnimatedSection>
          <h1
            id="project-title"
            className="
              font-serif
              text-5xl md:text-7xl lg:text-8xl
              font-medium
              leading-[0.95]
            "
          >
            {project.title}
          </h1>
        </AnimatedSection>
      </section>

      {/* =========================================================
          POSTER + PROJECT INFORMATION
      ========================================================= */}

      <section
        aria-label={`Información sobre ${project.title}`}
        className="px-6 md:px-12 lg:px-16 pb-24 md:pb-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28">
          {/* -----------------------------------------------------
              POSTER
          ----------------------------------------------------- */}

          <AnimatedSection>
            <div className="w-full lg:sticky lg:top-28">
              <img
                src={getCloudinaryUrl(project.poster.publicId, 1536)}
                srcSet={posterSrcSet}
                sizes={project.poster.sizes}
                alt={`Cartel de ${project.title}`}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimatedSection>

          {/* -----------------------------------------------------
              PROJECT INFORMATION
          ----------------------------------------------------- */}

          <AnimatedSection delay={0.1}>
            <div className="space-y-14">
              {/* =================================================
                  SINOPSIS
              ================================================= */}

              <section aria-labelledby="synopsis-title">
                <h2
                  id="synopsis-title"
                  className="
                    font-sans
                    text-sm md:text-base
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    mb-6
                  "
                >
                  Sinopsis
                </h2>

                <p
                  className="
                    font-sans
                    text-lg md:text-xl
                    leading-relaxed
                    text-foreground/80
                    whitespace-pre-line
                    max-w-2xl
                  "
                >
                  {project.synopsis}
                </p>
              </section>

              {/* =================================================
                  EQUIPO
              ================================================= */}

              {project.credits.length > 0 && (
                <section aria-labelledby="credits-title">
                  <h2
                    id="credits-title"
                    className="
                      font-sans
                      text-sm md:text-base
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      mb-6
                    "
                  >
                    Equipo
                  </h2>

                  <div className="space-y-6">
                    {project.credits.map((credit, index) => (
                      <div key={`${credit.role}-${index}`}>
                        <p className="font-sans text-base font-medium">
                          {credit.role}
                        </p>

                        <p className="font-sans text-base text-foreground/60 mt-1 leading-relaxed">
                          {credit.people}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* =================================================
                  PROYECCIONES Y PREMIOS
              ================================================= */}

              {project.screenings.length > 0 && (
                <section aria-labelledby="screenings-title">
                  <h2
                    id="screenings-title"
                    className="
                      font-sans
                      text-sm md:text-base
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      mb-6
                    "
                  >
                    Proyecciones y premios
                  </h2>

                  <ul className="space-y-3">
                    {project.screenings.map((screening, index) => (
                      <li
                        key={index}
                        className="
                            flex gap-3
                            font-sans
                            text-base
                            text-foreground/80
                            leading-relaxed
                          "
                      >
                        <span aria-hidden="true">•</span>

                        <span>{screening}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* =================================================
                  FINANCIACIÓN
              ================================================= */}

              {project.funding && project.funding.length > 0 && (
                <section aria-labelledby="funding-title">
                  <h2
                    id="funding-title"
                    className="
                        font-sans
                        text-sm md:text-base
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        mb-6
                      "
                  >
                    Financiación
                  </h2>

                  <div className="flex flex-wrap items-center gap-8">
                    {project.funding.map((image, index) => (
                      <img
                        key={`${image.publicId}-${index}`}
                        src={getCloudinaryUrl(image.publicId, 300)}
                        alt={`Logotipo de entidad de financiación de ${project.title}`}
                        loading="lazy"
                        decoding="async"
                        className="
                              max-w-[180px]
                              max-h-[100px]
                              w-auto
                              h-auto
                              object-contain
                            "
                      />
                    ))}
                  </div>
                </section>
              )}

              {/* =================================================
                  PRODUCCIÓN
              ================================================= */}

              {project.production && project.production.length > 0 && (
                <section aria-labelledby="production-title">
                  <h2
                    id="production-title"
                    className="
                        font-sans
                        text-sm md:text-base
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        mb-6
                      "
                  >
                    Producción
                  </h2>

                  <div className="flex flex-wrap items-center gap-8">
                    {project.production.map((image, index) => (
                      <img
                        key={`${image.publicId}-${index}`}
                        src={getCloudinaryUrl(image.publicId, 300)}
                        alt={`Logotipo de entidad de producción de ${project.title}`}
                        loading="lazy"
                        decoding="async"
                        className="
                              max-w-[180px]
                              max-h-[100px]
                              w-auto
                              h-auto
                              object-contain
                            "
                      />
                    ))}
                  </div>
                </section>
              )}

              {/* =================================================
                  OTROS ENLACES
              ================================================= */}

              {project.links && project.links.length > 0 && (
                <section aria-labelledby="links-title">
                  <h2
                    id="links-title"
                    className="
                        font-sans
                        text-sm md:text-base
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        mb-6
                      "
                  >
                    Otros enlaces
                  </h2>

                  <div className="space-y-3">
                    {project.links.map((link, index) => (
                      <a
                        key={`${link.label}-${index}`}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                              block w-fit
                              font-sans text-base
                              hover:opacity-50
                              focus-visible:outline-none
                              focus-visible:ring-2
                              focus-visible:ring-foreground
                              focus-visible:ring-offset-4
                              transition-opacity
                            "
                      >
                        {link.label} →
                        <span className="sr-only">
                          {" "}
                          (abre en una nueva pestaña)
                        </span>
                      </a>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* =========================================================
          TRAILER
      ========================================================= */}

      {project.trailer && (
        <section
          aria-labelledby="trailer-title"
          className="px-6 md:px-12 lg:px-16 pb-24 md:pb-32"
        >
          <AnimatedSection>
            <div className="mb-6">
              <h2
                id="trailer-title"
                className="
                  font-sans
                  text-sm md:text-base
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                "
              >
                Trailer
              </h2>
            </div>

            <div className="relative w-full aspect-video bg-black overflow-hidden">
              <iframe
                src={getVideoEmbedUrl(
                  project.trailer.platform,
                  project.trailer.url,
                )}
                title={`Trailer de ${project.title}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </AnimatedSection>
        </section>
      )}

      {/* =========================================================
          GALLERY
      ========================================================= */}

      {project.gallery.length > 0 && (
        <section
          aria-labelledby="gallery-title"
          className="px-6 md:px-12 lg:px-16 pb-24 md:pb-32"
        >
          <AnimatedSection>
            <h2
              id="gallery-title"
              className="
                font-sans
                text-sm md:text-base
                font-semibold
                uppercase
                tracking-[0.12em]
                mb-6
              "
            >
              Galería
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {project.gallery.map((image, index) => {
                const gallerySrcSet = buildSrcSet(image.publicId);

                return (
                  <img
                    key={`${image.publicId}-${index}`}
                    src={getCloudinaryUrl(image.publicId, 1536)}
                    srcSet={gallerySrcSet}
                    sizes={image.sizes}
                    alt={`${project.title} — fotograma ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover"
                  />
                );
              })}
            </div>
          </AnimatedSection>
        </section>
      )}

      {/* =========================================================
          NEXT PROJECT
      ========================================================= */}

      {nextProject && nextProjectPath && (
        <section
          aria-labelledby="next-project-title"
          className="
            border-t
            border-foreground/10
            px-6 md:px-12 lg:px-16
            py-16 md:py-24
          "
        >
          <AnimatedSection>
            <p
              className="
                font-sans
                text-sm
                font-semibold
                uppercase
                tracking-[0.12em]
                text-foreground/50
                mb-5
              "
            >
              Siguiente proyecto
            </p>

            <Link
              to={nextProjectPath}
              className="
                group inline-block
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-foreground
                focus-visible:ring-offset-4
              "
            >
              <h2
                id="next-project-title"
                className="
                  font-serif
                  text-4xl md:text-6xl lg:text-7xl
                  leading-none
                  group-hover:opacity-60
                  transition-opacity
                "
              >
                {nextProject.title}
              </h2>
            </Link>
          </AnimatedSection>
        </section>
      )}

      <Footer />
    </main>
  );
};

/* =============================================================
   VIDEO URL
   ============================================================= */

const getVideoEmbedUrl = (
  platform: "vimeo" | "youtube",
  url: string,
): string => {
  if (platform === "vimeo") {
    const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);

    if (match) {
      return `https://player.vimeo.com/video/${match[1]}`;
    }
  }

  if (platform === "youtube") {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/);

    if (match) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
  }

  return url;
};

export default ProjectDetail;
