import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Accesibilidad = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section
        aria-labelledby="accessibility-title"
        className="pt-24 pb-20 md:pt-28 md:pb-28"
      >
        <div className="px-6 md:px-12 lg:px-16">
          <AnimatedSection>
            <div
              aria-hidden="true"
              className="mb-8 h-px w-full bg-foreground/20"
            />

            <h1
              id="accessibility-title"
              className="max-w-4xl font-serif text-4xl font-normal leading-tight md:text-5xl lg:text-6xl"
            >
              Accesibilidad
            </h1>
          </AnimatedSection>

          <div className="mt-16 max-w-3xl space-y-12 md:mt-20">
            {/* Declaración */}
            <AnimatedSection>
              <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider">
                Declaración de accesibilidad
              </h2>

              <p className="font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
                Lía Fernández Lugilde se compromete a procurar que este sitio
                web sea accesible para el mayor número posible de personas,
                independientemente de sus capacidades o del dispositivo y
                tecnología utilizados para acceder a sus contenidos.
              </p>

              <p className="mt-4 font-sans text-base leading-relaxed text-muted-foreground">
                Durante el diseño y desarrollo del sitio se han tenido en cuenta
                criterios de accesibilidad basados en las{" "}
                <strong className="font-semibold text-foreground">
                  Pautas de Accesibilidad para el Contenido Web (WCAG)
                </strong>{" "}
                y en los principios establecidos en la norma{" "}
                <strong className="font-semibold text-foreground">
                  UNE-EN 301 549
                </strong>
                .
              </p>
            </AnimatedSection>

            {/* Situación */}
            <AnimatedSection>
              <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider">
                Situación de cumplimiento
              </h2>

              <p className="font-sans text-base leading-relaxed text-muted-foreground">
                El sitio web se encuentra en un proceso continuo de revisión y
                mejora de su accesibilidad. En el momento de publicación de esta
                declaración, no se ha realizado todavía una auditoría externa
                formal que permita afirmar una conformidad total con WCAG o
                UNE-EN 301 549.
              </p>

              <p className="mt-4 font-sans text-base leading-relaxed text-muted-foreground">
                Por este motivo, la presente declaración debe entenderse como
                una descripción del compromiso y de las medidas de accesibilidad
                incorporadas durante el desarrollo, y no como una certificación
                independiente de conformidad.
              </p>
            </AnimatedSection>

            {/* Medidas */}
            <AnimatedSection>
              <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider">
                Medidas de accesibilidad implementadas
              </h2>

              <p className="font-sans text-base leading-relaxed text-muted-foreground">
                Entre las medidas incorporadas en el desarrollo del sitio se
                encuentran:
              </p>

              <ul className="mt-4 space-y-3 font-sans text-base leading-relaxed text-muted-foreground">
                <li className="pl-1">
                  <span aria-hidden="true">— </span>
                  Uso de una estructura semántica de encabezados y contenidos.
                </li>

                <li className="pl-1">
                  <span aria-hidden="true">— </span>
                  Navegación mediante teclado en los elementos interactivos.
                </li>

                <li className="pl-1">
                  <span aria-hidden="true">— </span>
                  Indicadores de foco visibles para los elementos que reciben
                  interacción.
                </li>

                <li className="pl-1">
                  <span aria-hidden="true">— </span>
                  Uso de etiquetas y nombres accesibles en controles y
                  formularios cuando resulta necesario.
                </li>

                <li className="pl-1">
                  <span aria-hidden="true">— </span>
                  Uso de textos alternativos en las imágenes relevantes para la
                  comprensión del contenido.
                </li>

                <li className="pl-1">
                  <span aria-hidden="true">— </span>
                  Identificación mediante tecnologías de asistencia de
                  determinados contenidos decorativos o no informativos.
                </li>

                <li className="pl-1">
                  <span aria-hidden="true">— </span>
                  Diseño adaptable a diferentes tamaños de pantalla y
                  dispositivos.
                </li>

                <li className="pl-1">
                  <span aria-hidden="true">— </span>
                  Atención a la legibilidad, contraste y separación visual de
                  los elementos interactivos.
                </li>
              </ul>
            </AnimatedSection>

            {/* Contenido no accesible */}
            <AnimatedSection>
              <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider">
                Contenido potencialmente no accesible
              </h2>

              <p className="font-sans text-base leading-relaxed text-muted-foreground">
                Algunos contenidos audiovisuales o materiales procedentes de
                terceros pueden presentar limitaciones de accesibilidad que no
                dependan directamente del desarrollo técnico de este sitio.
              </p>

              <p className="mt-4 font-sans text-base leading-relaxed text-muted-foreground">
                Asimismo, determinados contenidos publicados en el sitio pueden
                requerir una revisión adicional para garantizar el cumplimiento
                de todos los criterios de accesibilidad aplicables.
              </p>

              <p className="mt-4 font-sans text-base leading-relaxed text-muted-foreground">
                Estos aspectos serán revisados progresivamente dentro del
                proceso de mejora continua de la accesibilidad del sitio web.
              </p>
            </AnimatedSection>

            {/* Tecnologías */}
            <AnimatedSection>
              <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider">
                Tecnologías utilizadas
              </h2>

              <p className="font-sans text-base leading-relaxed text-muted-foreground">
                La accesibilidad del sitio se apoya en tecnologías web estándar,
                incluyendo HTML, CSS y JavaScript, así como en tecnologías y
                atributos de accesibilidad como WAI-ARIA cuando resultan
                necesarios.
              </p>
            </AnimatedSection>

            {/* Observaciones y contacto */}
            <AnimatedSection>
              <div className="border-t border-foreground/10 pt-6">
                <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider">
                  Observaciones y contacto
                </h2>

                <p className="font-sans text-base leading-relaxed text-muted-foreground">
                  Si encuentra alguna barrera de acceso, dificultad de
                  navegación o problema relacionado con la accesibilidad de este
                  sitio web, puede comunicarlo para que pueda ser revisado.
                </p>

                <p className="mt-4 font-sans text-base leading-relaxed text-muted-foreground">
                  Para comunicar cualquier incidencia relacionada con la
                  accesibilidad, puede ponerse en contacto en:
                </p>

                <a
                  href="mailto:lia@flugilde.es"
                  className="
                    mt-3 inline-block
                    font-sans text-base text-foreground
                    underline underline-offset-2
                    transition-opacity
                    hover:opacity-60
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-foreground
                    focus-visible:ring-offset-4
                    focus-visible:ring-offset-background
                  "
                >
                  lia@flugilde.es
                </a>
              </div>
            </AnimatedSection>

            {/* Fecha */}
            <AnimatedSection>
              <p className="border-t border-foreground/10 pt-6 font-sans text-xs leading-relaxed text-muted-foreground">
                Fecha de preparación: septiembre de 2026.
                <br />
                Última revisión: septiembre de 2026.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Accesibilidad;
