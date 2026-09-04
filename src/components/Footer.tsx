import { ArrowUp, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const linkClasses =
    "font-sans text-sm text-background/70 transition-colors hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-foreground";

  return (
    <footer className="relative overflow-hidden bg-foreground text-background">
      {/* Footer navigation */}
      <div className="px-6 pt-12 md:px-12 md:pt-16 lg:px-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-12">
          {/* Contact */}
          <div>
            <h2 className="mb-3 font-sans text-xs font-semibold uppercase tracking-wider">
              Contacto
            </h2>

            <a href="mailto:lia@flugilde.es" className={linkClasses}>
              lia@flugilde.es
            </a>
          </div>

          {/* Social */}
          <div>
            <h2 className="mb-3 font-sans text-xs font-semibold uppercase tracking-wider">
              Social
            </h2>

            <nav aria-label="Redes sociales">
              <ul className="space-y-1">
                <li>
                  <a
                    href="https://www.instagram.com/lachicacheca_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClasses}
                  >
                    Instagram
                    <span className="sr-only">
                      {" "}
                      (abre en una nueva pestaña)
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/lía-fernández-lugilde-156aaa130/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClasses}
                  >
                    LinkedIn
                    <span className="sr-only">
                      {" "}
                      (abre en una nueva pestaña)
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Work */}
          <div>
            <h2 className="mb-3 font-sans text-xs font-semibold uppercase tracking-wider">
              Trabajos
            </h2>

            <a
              href="https://vimeo.com/lialugilde"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
            >
              Vimeo
              <span className="sr-only"> (abre en una nueva pestaña)</span>
            </a>
          </div>

          {/* Newsletter
          <div>
            <h2 className="mb-3 font-sans text-xs font-semibold uppercase tracking-wider">
              Newsletter
            </h2>

            <form
              action="#"
              method="post"
              className="flex items-center border-b border-background/30 pb-2"
            >
              <label htmlFor="footer-email" className="sr-only">
                Tu dirección de email
              </label>

              <input
                id="footer-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Tu email"
                required
                className="min-w-0 flex-1 bg-transparent font-sans text-sm text-background placeholder:text-background/50 outline-none focus-visible:ring-0"
              />

              <button
                type="submit"
                aria-label="Suscribirse al newsletter"
                className="ml-3 shrink-0 text-background/70 transition-colors hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
              >
                <ArrowUp
                  size={20}
                  strokeWidth={1.5}
                  className="rotate-45"
                  aria-hidden="true"
                />
              </button>
            </form>
          </div> */}
        </div>
      </div>

      {/* Brand / Back to top */}
      <div className="relative px-6 pt-10 md:px-12 md:pt-12 lg:px-16">
        <div className="flex items-end justify-between">
          <p
            aria-hidden="true"
            className="select-none font-logo font-bold leading-none text-background"
            style={{
              fontSize: "clamp(4rem, 20vw, 22rem)",
              letterSpacing: "-0.02em",
              lineHeight: "0.85",
            }}
          >
            LIA.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Volver al principio de la página"
            className="mb-2 flex h-12 w-12 shrink-0 items-center justify-center bg-background text-foreground transition-colors hover:bg-background/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-foreground md:mb-6 md:h-14 md:w-14 lg:mb-8 lg:h-16 lg:w-16"
          >
            <ArrowUp size={24} strokeWidth={1.75} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="flex flex-col gap-3 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-12 lg:px-16">
        <p className="font-sans text-xs text-background/50">
          © {currentYear} Lía Fernández Lugilde.
        </p>

        <p className="font-sans text-xs text-background/50">
          Website design by{" "}
          <a
            href="https://bajovigilancia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition-colors hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
          >
            Bajo Vigilancia
            <span className="sr-only"> (abre en una nueva pestaña)</span>
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
