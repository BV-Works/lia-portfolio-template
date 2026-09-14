import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";

const bioImage =
  "https://res.cloudinary.com/dwi9l26qx/image/upload/f_auto,q_auto,w_1200/bio-lia.jpg";

const About = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-24 pb-20 md:pt-28 md:pb-28">
        <div className="px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-start">
            {/* Left column */}
            <AnimatedSection className="lg:col-span-5">
              <figure>
                <img
                  src={bioImage}
                  alt="Lía Lugilde, directora, guionista, montadora y programadora"
                  width={1200}
                  height={1500}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="block w-full h-auto object-cover"
                />

                <figcaption className="mt-6 space-y-8">
                  {/* Location and role */}
                  <div>
                    <p className="font-sans text-base leading-relaxed text-muted-foreground">
                      Gijón, Asturias
                      <br />
                      Directora · Guionista · Montadora · Programadora
                    </p>
                  </div>

                  {/* Social */}
                  <div>
                    <h2 className="mb-3 font-sans text-xs font-semibold uppercase tracking-wider">
                      Social
                    </h2>

                    <nav aria-label="Redes sociales">
                      <ul className="flex flex-col gap-2">
                        <li>
                          <a
                            href="https://www.instagram.com/lachicacheca_/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              inline-flex
                              font-sans text-base text-muted-foreground
                              transition-colors
                              hover:text-foreground
                              focus-visible:outline-none
                              focus-visible:ring-2
                              focus-visible:ring-foreground
                              focus-visible:ring-offset-4
                              focus-visible:ring-offset-background
                            "
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
                            className="
                              inline-flex
                              font-sans text-base text-muted-foreground
                              transition-colors
                              hover:text-foreground
                              focus-visible:outline-none
                              focus-visible:ring-2
                              focus-visible:ring-foreground
                              focus-visible:ring-offset-4
                              focus-visible:ring-offset-background
                            "
                          >
                            LinkedIn
                            <span className="sr-only">
                              {" "}
                              (abre en una nueva pestaña)
                            </span>
                          </a>
                        </li>

                        <li>
                          <a
                            href="https://vimeo.com/lialugilde"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              inline-flex
                              font-sans text-base text-muted-foreground
                              transition-colors
                              hover:text-foreground
                              focus-visible:outline-none
                              focus-visible:ring-2
                              focus-visible:ring-foreground
                              focus-visible:ring-offset-4
                              focus-visible:ring-offset-background
                            "
                          >
                            Vimeo
                            <span className="sr-only">
                              {" "}
                              (abre en una nueva pestaña)
                            </span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>

                  {/* Navigation links — desktop */}
                  <div className="hidden lg:flex border-t border-foreground/10 pt-6">
                    <nav aria-label="Navegación de la biografía">
                      <ul className="flex flex-wrap gap-x-6 gap-y-3">
                        <li>
                          <Link
                            to="/filmes"
                            className="
                              inline-flex items-center gap-2
                              font-sans text-sm font-medium
                              border-b border-foreground/40
                              pb-1
                              transition-colors
                              hover:border-foreground
                              focus-visible:outline-none
                              focus-visible:ring-2
                              focus-visible:ring-foreground
                              focus-visible:ring-offset-4
                              focus-visible:ring-offset-background
                            "
                          >
                            Filmografía
                            <span aria-hidden="true">→</span>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/contacto"
                            className="
                              inline-flex items-center gap-2
                              font-sans text-sm font-medium
                              border-b border-foreground/40
                              pb-1
                              transition-colors
                              hover:border-foreground
                              focus-visible:outline-none
                              focus-visible:ring-2
                              focus-visible:ring-foreground
                              focus-visible:ring-offset-4
                              focus-visible:ring-offset-background
                            "
                          >
                            Contacto
                            <span aria-hidden="true">→</span>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </figcaption>
              </figure>
            </AnimatedSection>

            {/* Right column — Biography */}
            <AnimatedSection delay={0.1} className="lg:col-span-7 lg:pt-1">
              <header className="mb-10 md:mb-12">
                <div
                  aria-hidden="true"
                  className="mb-6 h-px w-full bg-foreground/20"
                />

                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
                  Lía Lugilde
                </h1>

                <p className="mt-4 font-sans text-sm md:text-base text-muted-foreground">
                  Gijón, 1994
                </p>
              </header>

              <div className="space-y-7 font-sans text-base md:text-lg leading-relaxed text-muted-foreground max-w-3xl">
                <p>
                  Lía Lugilde (Gijón, 1994), es directora, guionista, montadora
                  y programadora. Se graduó en Comunicación Audiovisual con
                  especialización en cinematografía por la Universidad de Vigo.
                </p>

                <p>
                  En 2022, estrena su primer cortometraje de ficción{" "}
                  <em>Breves anotaciones sobre una ruptura</em> en el Festival
                  de Cine de Gijón. Un año más tarde, se adentra en la no
                  ficción a partir del reencuentro con unas cartas de familiares
                  que tuvieron que exiliarse en{" "}
                  <em>Los trazos que quedan de ti</em> (2023). Con este proyecto
                  vuelve al Festival de Cine de Gijón donde obtiene la Mención
                  Especial. Empieza un recorrido por diversos festivales
                  nacionales como Sevilla, Oviedo, Bilbao, Memorimage de Reus,
                  entre otros; e internacionales como el Kampala Slum Mobile
                  Cinema de Uganda, o el Ahmmedabad International Film Festival
                  de India.
                </p>

                <p>
                  Su obra audiovisual más reciente, <em>Saltar</em> (2025),
                  reflexiona sobre el suicidio en Asturias a través del acto de
                  saltar. Fue financiada gracias a las Ayudas a la producción de
                  cortometrajes sobre proyecto del ICAA del Ministerio de
                  Cultura y estrenada internacionalmente en Baleine Festival
                  (Francia) y 8th edition of MedFest Egypt Film Festival
                  (Egipto).
                </p>

                <p>
                  Ha colaborado, a su vez, con otros cineastas como directora de
                  fotografía en <em>Soledá</em> (Howi Álvarez, 2024), y
                  productora y montadora en{" "}
                  <em>Una mujer que conocí llamada Yudita</em> (Rodrigo Agüeria,
                  2025).
                </p>

                <p>
                  Compagina su labor artística con la de programación y gestión
                  cultural con talleres y proyectos ligados al territorio
                  asturiano como CortoGijón; el Festival Internacional de
                  Videoclips de Oviedo (FIVO); o el Festival Arcu Atlánticú
                  (ARCU), en el que se realizan actividades artísticas para
                  celebrar la unión cultural de los pueblos atlánticos.
                </p>

                <p>
                  Es directora y programadora del ciclo de cine y conferencias{" "}
                  <em>CIME-Cine, memoria y género</em>, dedicado a la memoria
                  histórica con especial interés en la recuperación de la
                  historia de las mujeres en el contexto de la Segunda
                  República, la Guerra Civil y la postguerra.
                </p>

                <p>
                  Actualmente está desarrollando su nuevo cortometraje{" "}
                  <em>Las Cosas que olvidamos en los libros</em>.
                </p>
              </div>

              {/* Navigation links — mobile */}
              <div className="mt-12 border-t border-foreground/10 pt-6 lg:hidden">
                <nav aria-label="Navegación de la biografía">
                  <ul className="flex flex-wrap gap-x-6 gap-y-3">
                    <li>
                      <Link
                        to="/filmes"
                        className="
                          inline-flex items-center gap-2
                          font-sans text-sm font-medium
                          border-b border-foreground/40
                          pb-1
                          transition-colors
                          hover:border-foreground
                          focus-visible:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-foreground
                          focus-visible:ring-offset-4
                          focus-visible:ring-offset-background
                        "
                      >
                        Filmografía
                        <span aria-hidden="true">→</span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/contacto"
                        className="
                          inline-flex items-center gap-2
                          font-sans text-sm font-medium
                          border-b border-foreground/40
                          pb-1
                          transition-colors
                          hover:border-foreground
                          focus-visible:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-foreground
                          focus-visible:ring-offset-4
                          focus-visible:ring-offset-background
                        "
                      >
                        Contacto
                        <span aria-hidden="true">→</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
