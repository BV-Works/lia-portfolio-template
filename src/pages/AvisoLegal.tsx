import { Link } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const AvisoLegal = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section
        aria-labelledby="legal-title"
        className="pt-24 pb-20 md:pt-28 md:pb-28"
      >
        <div className="px-6 md:px-12 lg:px-16">
          <AnimatedSection>
            <div
              aria-hidden="true"
              className="mb-8 h-px w-full bg-foreground/20"
            />

            <h1
              id="legal-title"
              className="max-w-4xl font-serif text-4xl font-normal leading-tight md:text-5xl lg:text-6xl"
            >
              Aviso legal
            </h1>
          </AnimatedSection>

          <div className="mt-16 max-w-3xl space-y-12 md:mt-20">
            {/* Identificación */}
            <AnimatedSection>
              <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider">
                Datos identificativos
              </h2>

              <div className="space-y-2 font-sans text-base leading-relaxed text-muted-foreground">
                <p>
                  <strong className="font-semibold text-foreground">
                    Denominación social:
                  </strong>{" "}
                  Lía Fernández Lugilde
                </p>

                <p>
                  <strong className="font-semibold text-foreground">
                    Nombre comercial:
                  </strong>{" "}
                  Lía Fernández Lugilde
                </p>

                <p>
                  <strong className="font-semibold text-foreground">
                    CIF / NIF:
                  </strong>{" "}
                  58430099W
                </p>

                <p>
                  <strong className="font-semibold text-foreground">
                    Teléfono:
                  </strong>{" "}
                  679509344
                </p>

                <p>
                  <strong className="font-semibold text-foreground">
                    Inscrita en el Registro:
                  </strong>{" "}
                  Tomo 257, Folio 108, Inscripción 1ª, Hoja SA-7.422
                </p>

                <p>
                  <strong className="font-semibold text-foreground">
                    Email:
                  </strong>{" "}
                  <a
                    href="mailto:lia@flugilde.es"
                    className="
                      text-foreground
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
                </p>
              </div>
            </AnimatedSection>

            {/* Objeto */}
            <AnimatedSection>
              <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider">
                Objeto
              </h2>

              <div className="space-y-4 font-sans text-base leading-relaxed text-muted-foreground">
                <p>
                  Lía Fernández Lugilde, en adelante la titular, responsable del
                  sitio web, pone a disposición de los usuarios el presente
                  documento con el objeto de informar sobre las condiciones de
                  uso del sitio web y dar cumplimiento a las obligaciones
                  establecidas en la normativa aplicable.
                </p>

                <p>
                  Toda persona que acceda a este sitio web asume el papel de
                  usuario, comprometiéndose a observar y cumplir las
                  disposiciones aquí establecidas, así como cualquier otra
                  disposición legal que resulte de aplicación.
                </p>

                <p>
                  La titular se reserva el derecho a modificar la información
                  publicada en el sitio web cuando lo considere necesario,
                  procurando mantenerla actualizada.
                </p>
              </div>
            </AnimatedSection>

            {/* Responsabilidad */}
            <AnimatedSection>
              <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider">
                Responsabilidad
              </h2>

              <div className="space-y-4 font-sans text-base leading-relaxed text-muted-foreground">
                <p>
                  La titular no se hace responsable de los posibles errores u
                  omisiones que pudieran existir en los contenidos del sitio
                  web, ni de los daños o perjuicios que pudieran derivarse de su
                  utilización, salvo en aquellos casos en que legalmente
                  corresponda.
                </p>

                <p>
                  Este sitio web puede contener enlaces a sitios web de
                  terceros. La titular no controla ni garantiza la
                  disponibilidad, exactitud o contenidos de dichos sitios y no
                  asume responsabilidad por ellos.
                </p>

                <p>
                  La titular procurará retirar o corregir cualquier contenido
                  que resulte contrario a la legislación aplicable cuando tenga
                  conocimiento efectivo de ello.
                </p>

                <p>
                  El acceso al sitio web puede verse interrumpido ocasionalmente
                  por tareas de mantenimiento, problemas técnicos, causas de
                  fuerza mayor u otras circunstancias ajenas al control de la
                  titular.
                </p>
              </div>
            </AnimatedSection>

            {/* Protección de datos */}
            <AnimatedSection>
              <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider">
                Protección de datos personales
              </h2>

              <div className="space-y-4 font-sans text-base leading-relaxed text-muted-foreground">
                <p>
                  El tratamiento de los datos personales realizado a través de
                  este sitio web se lleva a cabo de acuerdo con la normativa
                  aplicable en materia de protección de datos personales.
                </p>

                <p>
                  La información relativa al responsable del tratamiento, las
                  finalidades, la legitimación, los destinatarios, los plazos de
                  conservación y los derechos de las personas interesadas se
                  encuentra disponible en la{" "}
                  <Link
                    to="/politica-de-privacidad"
                    className="
                      text-foreground
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
                    Política de privacidad
                  </Link>
                  .
                </p>
              </div>
            </AnimatedSection>

            {/* Propiedad intelectual */}
            <AnimatedSection>
              <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider">
                Propiedad intelectual e industrial
              </h2>

              <div className="space-y-4 font-sans text-base leading-relaxed text-muted-foreground">
                <p>
                  Los contenidos de este sitio web, incluyendo a título
                  enunciativo y no limitativo, textos, fotografías,
                  audiovisuales, diseños, logotipos, elementos gráficos,
                  programación y código, están protegidos por la normativa
                  aplicable en materia de propiedad intelectual e industrial.
                </p>

                <p>
                  Salvo que se indique expresamente lo contrario, los derechos
                  sobre dichos contenidos corresponden a sus respectivos
                  titulares.
                </p>

                <p>
                  Queda prohibida la reproducción, distribución, comunicación
                  pública, transformación o cualquier otra forma de explotación
                  de los contenidos del sitio web sin la autorización previa de
                  sus correspondientes titulares, salvo en los casos permitidos
                  por la legislación aplicable.
                </p>

                <p>
                  Las marcas, nombres comerciales, logotipos y demás elementos
                  identificativos que puedan aparecer en el sitio web pertenecen
                  a sus respectivos titulares.
                </p>
              </div>
            </AnimatedSection>

            {/* Ley aplicable */}
            <AnimatedSection>
              <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider">
                Ley aplicable
              </h2>

              <p className="font-sans text-base leading-relaxed text-muted-foreground">
                El presente sitio web se regirá por la legislación española.
                Para la resolución de cualquier controversia relacionada con el
                mismo serán competentes los juzgados y tribunales que
                correspondan conforme a la legislación aplicable.
              </p>
            </AnimatedSection>

            {/* Contacto */}
            <AnimatedSection>
              <div className="border-t border-foreground/10 pt-6">
                <p className="font-sans text-base leading-relaxed text-muted-foreground">
                  Para cualquier consulta relacionada con este aviso legal o con
                  los contenidos del sitio web, puede ponerse en contacto a
                  través de:
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

            {/* Actualización */}
            <AnimatedSection>
              <p className="border-t border-foreground/10 pt-6 font-sans text-xs leading-relaxed text-muted-foreground">
                Última actualización: septiembre de 2026.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AvisoLegal;
