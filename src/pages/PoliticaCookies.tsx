import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const PoliticaCookies = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section
        aria-labelledby="cookies-title"
        className="pt-24 pb-20 md:pt-28 md:pb-28"
      >
        <div className="px-6 md:px-12 lg:px-16">
          <AnimatedSection>
            <div
              aria-hidden="true"
              className="mb-8 h-px w-full bg-foreground/20"
            />

            <h1
              id="cookies-title"
              className="max-w-4xl font-serif text-4xl font-normal leading-tight md:text-5xl lg:text-6xl"
            >
              Política de cookies
            </h1>
          </AnimatedSection>

          <div className="mt-16 max-w-3xl space-y-12 md:mt-20">
            {/* Introducción */}
            <AnimatedSection>
              <p className="font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
                Esta Política de Cookies explica qué son las cookies y otras
                tecnologías similares, cómo pueden utilizarse en este sitio web
                y cómo pueden gestionarse desde el navegador.
              </p>
            </AnimatedSection>

            {/* Qué son las cookies */}
            <AnimatedSection>
              <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider">
                ¿Qué son las cookies?
              </h2>

              <p className="font-sans text-base leading-relaxed text-muted-foreground">
                Las cookies son pequeños archivos de texto que los sitios web
                pueden almacenar en el dispositivo desde el que se accede a
                ellos. Permiten, entre otras funciones, recordar determinada
                información, facilitar la navegación y mantener el correcto
                funcionamiento de determinados servicios.
              </p>

              <p className="mt-4 font-sans text-base leading-relaxed text-muted-foreground">
                También pueden utilizarse tecnologías similares, como
                identificadores almacenados en el navegador u otros mecanismos
                técnicos necesarios para prestar determinados servicios.
              </p>
            </AnimatedSection>

            {/* Cookies utilizadas */}
            <AnimatedSection>
              <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider">
                Cookies utilizadas en este sitio web
              </h2>

              <p className="font-sans text-base leading-relaxed text-muted-foreground">
                Este sitio web puede utilizar cookies y tecnologías similares
                necesarias para su funcionamiento, la navegación y la prestación
                de los servicios integrados en la web.
              </p>

              <p className="mt-4 font-sans text-base leading-relaxed text-muted-foreground">
                La relación concreta de cookies utilizadas puede variar en
                función de la configuración y de los servicios activos en cada
                momento. Por este motivo, la información sobre las cookies se
                revisará y actualizará cuando se incorporen nuevos servicios o
                funcionalidades que puedan utilizarlas.
              </p>

              <p className="mt-4 font-sans text-base leading-relaxed text-muted-foreground">
                Actualmente no se incorporan de forma intencionada cookies
                destinadas a publicidad comportamental o a la elaboración de
                perfiles publicitarios.
              </p>
            </AnimatedSection>

            {/* Cookies técnicas */}
            <AnimatedSection>
              <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider">
                Cookies técnicas y necesarias
              </h2>

              <p className="font-sans text-base leading-relaxed text-muted-foreground">
                Algunas cookies o tecnologías similares pueden ser necesarias
                para permitir la navegación, garantizar determinadas funciones
                técnicas o prestar servicios solicitados expresamente por la
                persona usuaria.
              </p>

              <p className="mt-4 font-sans text-base leading-relaxed text-muted-foreground">
                Este tipo de tecnologías se utilizan únicamente cuando resultan
                necesarias para el funcionamiento del sitio web o de los
                servicios asociados.
              </p>
            </AnimatedSection>

            {/* Servicios de terceros */}
            <AnimatedSection>
              <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider">
                Servicios de terceros
              </h2>

              <p className="font-sans text-base leading-relaxed text-muted-foreground">
                El sitio web puede integrar servicios proporcionados por
                terceros para determinadas funcionalidades, como la
                visualización y distribución de contenidos multimedia o la
                gestión técnica de formularios de contacto.
              </p>

              <p className="mt-4 font-sans text-base leading-relaxed text-muted-foreground">
                Estos servicios pueden utilizar sus propias tecnologías de
                almacenamiento o identificación. La configuración concreta de
                estos servicios será revisada para determinar, en su caso, las
                cookies o tecnologías utilizadas y su finalidad.
              </p>
            </AnimatedSection>

            {/* Gestión desde el navegador */}
            <AnimatedSection>
              <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider">
                Gestión de las cookies
              </h2>

              <p className="font-sans text-base leading-relaxed text-muted-foreground">
                La persona usuaria puede configurar su navegador para aceptar,
                bloquear o eliminar las cookies instaladas en su dispositivo.
              </p>

              <p className="mt-4 font-sans text-base leading-relaxed text-muted-foreground">
                La desactivación de determinadas cookies puede afectar al
                funcionamiento de algunas características del sitio web,
                especialmente cuando se trate de tecnologías necesarias para
                prestar un servicio solicitado.
              </p>
            </AnimatedSection>

            {/* Actualización */}
            <AnimatedSection>
              <div className="border-t border-foreground/10 pt-6">
                <p className="font-sans text-base leading-relaxed text-muted-foreground">
                  Esta Política de Cookies podrá actualizarse cuando se
                  produzcan cambios en las cookies, tecnologías o servicios
                  utilizados en el sitio web.
                </p>
              </div>
            </AnimatedSection>

            {/* Contacto */}
            <AnimatedSection>
              <div className="border-t border-foreground/10 pt-6">
                <p className="font-sans text-base leading-relaxed text-muted-foreground">
                  Para cualquier cuestión relacionada con el uso de cookies o
                  tecnologías similares en este sitio web, puede ponerse en
                  contacto con:
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

export default PoliticaCookies;
