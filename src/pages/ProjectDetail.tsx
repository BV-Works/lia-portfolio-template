import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

import { getProjectBySlug, getNextProject } from "@/data/projects";
import { getCloudinaryUrl } from "@/lib/cloudinary";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = getProjectBySlug(slug || "");
  const nextProject = getNextProject(slug || "");

  if (!project) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />

        <section className="px-6 md:px-12 lg:px-16 pt-32 pb-24">
          <h1 className="font-serif text-4xl md:text-5xl">
            Proyecto no encontrado
          </h1>

          <Link
            to="/"
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

  /* =========================================================
     CLOUDINARY RESPONSIVE IMAGES
     ========================================================= */

  const responsiveWidths = [768, 1024, 1536, 1920];

  const buildSrcSet = (publicId: string) =>
    responsiveWidths
      .map((width) => `${getCloudinaryUrl(publicId, width)} ${width}w`)
      .join(", ");

  const heroSrcSet = buildSrcSet(project.heroImage.publicId);
  const posterSrcSet = buildSrcSet(project.poster.publicId);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* =========================================================
          HERO IMAGE
      ========================================================= */}

      <section className="w-full h-[70vh] md:h-screen">
        <motion.img
          src={getCloudinaryUrl(project.heroImage.publicId, 1536)}
          srcSet={heroSrcSet}
          sizes={project.heroImage.sizes}
          alt={project.title}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
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

      <section className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <AnimatedSection>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95]">
            {project.title}
          </h1>
        </AnimatedSection>
      </section>

      {/* =========================================================
          POSTER + PROJECT INFORMATION
      ========================================================= */}

      <section className="px-6 md:px-12 lg:px-16 pb-24 md:pb-32">
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

              <section>
                <h2 className="font-sans text-sm md:text-base font-semibold uppercase tracking-[0.12em] mb-6">
                  Sinopsis
                </h2>

                <div className="font-sans text-lg md:text-xl leading-relaxed text-foreground/80 whitespace-pre-line max-w-2xl">
                  {project.synopsis}
                </div>
              </section>

              {/* =================================================
                  EQUIPO
              ================================================= */}

              {project.credits.length > 0 && (
                <section>
                  <h2 className="font-sans text-sm md:text-base font-semibold uppercase tracking-[0.12em] mb-6">
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
                <section>
                  <h2 className="font-sans text-sm md:text-base font-semibold uppercase tracking-[0.12em] mb-6">
                    Proyecciones y premios
                  </h2>

                  <ul className="space-y-3">
                    {project.screenings.map((screening, index) => (
                      <li
                        key={index}
                        className="flex gap-3 font-sans text-base text-foreground/80 leading-relaxed"
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
                <section>
                  <h2 className="font-sans text-sm md:text-base font-semibold uppercase tracking-[0.12em] mb-6">
                    Financiación
                  </h2>

                  <div className="flex flex-wrap items-center gap-8">
                    {project.funding.map((image, index) => (
                      <img
                        key={`${image.publicId}-${index}`}
                        src={getCloudinaryUrl(image.publicId, 300)}
                        alt={`Entidad de financiación de ${project.title}`}
                        loading="lazy"
                        decoding="async"
                        className="max-w-[180px] max-h-[100px] w-auto h-auto object-contain"
                      />
                    ))}
                  </div>
                </section>
              )}

              {/* =================================================
                  PRODUCCIÓN
              ================================================= */}

              {project.production && project.production.length > 0 && (
                <section>
                  <h2 className="font-sans text-sm md:text-base font-semibold uppercase tracking-[0.12em] mb-6">
                    Producción
                  </h2>

                  <div className="flex flex-wrap items-center gap-8">
                    {project.production.map((image, index) => (
                      <img
                        key={`${image.publicId}-${index}`}
                        src={getCloudinaryUrl(image.publicId, 300)}
                        alt={`Entidad de producción de ${project.title}`}
                        loading="lazy"
                        decoding="async"
                        className="max-w-[180px] max-h-[100px] w-auto h-auto object-contain"
                      />
                    ))}
                  </div>
                </section>
              )}

              {/* =================================================
                  OTROS ENLACES
              ================================================= */}

              {project.links && project.links.length > 0 && (
                <section>
                  <h2 className="font-sans text-sm md:text-base font-semibold uppercase tracking-[0.12em] mb-6">
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
        <section className="px-6 md:px-12 lg:px-16 pb-24 md:pb-32">
          <AnimatedSection>
            <div className="mb-6">
              <h2 className="font-sans text-sm md:text-base font-semibold uppercase tracking-[0.12em]">
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
        <section className="px-6 md:px-12 lg:px-16 pb-24 md:pb-32">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {project.gallery.map((image, index) => {
                const gallerySrcSet = buildSrcSet(image.publicId);

                return (
                  <img
                    key={`${image.publicId}-${index}`}
                    src={getCloudinaryUrl(image.publicId, 1536)}
                    srcSet={gallerySrcSet}
                    sizes={image.sizes}
                    alt={`${project.title} — Fotograma ${index + 1}`}
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

      {nextProject && (
        <section className="border-t border-foreground/10 px-6 md:px-12 lg:px-16 py-16 md:py-24">
          <AnimatedSection>
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.12em] text-foreground/50 mb-5">
              Siguiente proyecto
            </p>

            <Link
              to={`/work/${nextProject.slug}`}
              className="
                group inline-block
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-foreground
                focus-visible:ring-offset-4
              "
            >
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-none group-hover:opacity-60 transition-opacity">
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
    const match = url.match(/vimeo\.com\/(\d+)/);

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
