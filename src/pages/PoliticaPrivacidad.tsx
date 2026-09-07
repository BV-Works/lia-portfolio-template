import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const PoliticaPrivacidad = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section
        aria-labelledby="privacy-title"
        className="pt-32 pb-20 md:pt-28 md:pb-28"
      >
        <div className="px-6 md:px-12 lg:px-16">
          <AnimatedSection>
            <div
              aria-hidden="true"
              className="mb-8 h-px w-full bg-foreground/20"
            />

            <h1
              id="privacy-title"
              className="max-w-4xl font-serif text-4xl font-normal leading-tight md:text-5xl lg:text-6xl"
            >
              Política de privacidad
            </h1>
          </AnimatedSection>

          <div className="mt-16 max-w-3xl space-y-12 md:mt-20">
            {/* Introduction */}
            <AnimatedSection>
              <p className="font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
                A los efectos del cumplimiento del Reglamento General de
                Protección de Datos (RGPD), se establece la siguiente
                información:
              </p>
            </AnimatedSection>

            {/* Responsable */}
            <AnimatedSection>
              <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider">
                Responsable
              </h2>

              <p className="font-sans text-base leading-relaxed text-muted-foreground">
                <strong className="font-semibold text-foreground">
                  Lía Fernández Lugilde
                </strong>
                , con domicilio social en Avda. Príncipe de Asturias, 29, 4ºD,
                Gijón, Asturias, C.P. 33213.
                <br />
                CIF / NIF: 58430099W
              </p>
            </AnimatedSection>

            {/* Finalidad */}
            <AnimatedSection>
              <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider">
                Finalidad
              </h2>

              <p className="font-sans text-base leading-relaxed text-muted-foreground">
                Se trata la información que nos facilitan las personas
                interesadas con el fin de gestionar el envío de la información
                que nos soliciten, facilitar al interesado ofertas de productos
                y servicios de su interés y mejorar su experiencia de usuario,
                pudiendo elaborarse, de ser necesario, un perfil comercial, en
                base a la información facilitada.
              </p>

              <p className="mt-4 font-sans text-base leading-relaxed text-muted-foreground">
                No se tomarán decisiones automatizadas en base a dicho perfil.
              </p>

              <p className="mt-4 font-sans text-base leading-relaxed text-muted-foreground">
                Los datos personales proporcionados se conservarán mientras se
                mantenga la relación mercantil, y no se solicite su supresión
                por el interesado.
              </p>
            </AnimatedSection>

            {/* Legitimación */}
            <AnimatedSection>
              <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider">
                Legitimación
              </h2>

              <p className="font-sans text-base leading-relaxed text-muted-foreground">
                Se solicita el consentimiento del interesado para el tratamiento
                de sus datos y la oferta prospectiva de productos y servicios.
              </p>
            </AnimatedSection>

            {/* Destinatarios */}
            <AnimatedSection>
              <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider">
                Destinatarios
              </h2>

              <p className="font-sans text-base leading-relaxed text-muted-foreground">
                Los datos personales no se cederán a terceros, salvo en su caso,
                otras empresas de grupo para fines administrativos internos y
                los proveedores tecnológicos necesarios para gestionar el
                funcionamiento y envío del formulario de contacto.
              </p>
            </AnimatedSection>

            {/* Derechos */}
            <AnimatedSection>
              <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider">
                Derechos
              </h2>

              <p className="font-sans text-base leading-relaxed text-muted-foreground">
                Las personas interesadas tienen derecho a acceder a sus datos
                personales, así como a solicitar la rectificación de los datos
                inexactos o, en su caso, solicitar su supresión cuando los datos
                ya no sean necesarios para los fines que fueron recogidos.
              </p>

              <p className="mt-4 font-sans text-base leading-relaxed text-muted-foreground">
                También los interesados, en determinadas circunstancias, podrán
                oponerse al tratamiento de sus datos. También tendrán derecho a
                retirar el consentimiento prestado y a reclamar ante la
                Autoridad de Control.
              </p>

              <p className="mt-4 font-sans text-base leading-relaxed text-muted-foreground">
                Para ejercer sus derechos deberá ponerse en contacto con el
                Responsable en la dirección que aparece en el apartado
                correspondiente, acompañado de copia del documento de identidad
                del interesado.
              </p>
            </AnimatedSection>

            {/* Contact */}
            <AnimatedSection>
              <div className="border-t border-foreground/10 pt-6">
                <p className="font-sans text-base leading-relaxed text-muted-foreground">
                  Para cualquier cuestión relacionada con el tratamiento de
                  datos personales o para ejercer sus derechos, puede ponerse en
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

            {/* Update date */}
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

export default PoliticaPrivacidad;
