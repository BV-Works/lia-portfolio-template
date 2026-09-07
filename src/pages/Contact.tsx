import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_FORM_ID";

interface FormData {
  name: string;
  email: string;
  message: string;
  privacy: boolean;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  message: "",
  privacy: false,
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));

    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          privacy: "accepted",
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setFormData(initialFormData);
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section
        aria-labelledby="contact-title"
        className="pt-32 pb-12 md:pt-28 md:pb-16"
      >
        <div className="px-6 md:px-12 lg:px-16">
          <AnimatedSection>
            <h1
              id="contact-title"
              className="max-w-4xl font-serif text-4xl font-normal leading-tight md:text-5xl lg:text-6xl"
            >
              Contacto
            </h1>

            <p
              id="contact-description"
              className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Si quieres hablar sobre un proyecto, una colaboración o
              simplemente ponerte en contacto, puedes escribirme a través de
              este formulario.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact content */}
      <section aria-labelledby="contact-form-title" className="py-12 md:py-16">
        <div className="px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Form */}
            <AnimatedSection className="lg:col-span-7">
              <h2 id="contact-form-title" className="sr-only">
                Formulario de contacto
              </h2>

              <form
                onSubmit={handleSubmit}
                aria-describedby="contact-description"
                aria-busy={isSubmitting}
                className="space-y-8"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-3 block font-sans text-xs font-semibold uppercase tracking-wider"
                  >
                    Nombre *
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    placeholder="Tu nombre"
                    className="
                      w-full border-0 border-b border-foreground/20
                      bg-transparent px-0 py-3
                      font-sans text-base
                      outline-none
                      transition-colors
                      placeholder:text-muted-foreground/60
                      focus:border-foreground
                      focus-visible:ring-2
                      focus-visible:ring-foreground
                      focus-visible:ring-offset-4
                      focus-visible:ring-offset-background
                    "
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-3 block font-sans text-xs font-semibold uppercase tracking-wider"
                  >
                    Email *
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    inputMode="email"
                    placeholder="tu@email.com"
                    className="
                      w-full border-0 border-b border-foreground/20
                      bg-transparent px-0 py-3
                      font-sans text-base
                      outline-none
                      transition-colors
                      placeholder:text-muted-foreground/60
                      focus:border-foreground
                      focus-visible:ring-2
                      focus-visible:ring-foreground
                      focus-visible:ring-offset-4
                      focus-visible:ring-offset-background
                    "
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-3 block font-sans text-xs font-semibold uppercase tracking-wider"
                  >
                    Mensaje *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={7}
                    placeholder="Cuéntame sobre tu proyecto..."
                    className="
                      w-full resize-none border-0 border-b border-foreground/20
                      bg-transparent px-0 py-3
                      font-sans text-base
                      outline-none
                      transition-colors
                      placeholder:text-muted-foreground/60
                      focus:border-foreground
                      focus-visible:ring-2
                      focus-visible:ring-foreground
                      focus-visible:ring-offset-4
                      focus-visible:ring-offset-background
                    "
                  />
                </div>

                {/* Privacy consent */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    required
                    className="
                      mt-1 h-4 w-4 shrink-0
                      cursor-pointer
                      accent-foreground
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-foreground
                      focus-visible:ring-offset-2
                      focus-visible:ring-offset-background
                    "
                  />

                  <label
                    htmlFor="privacy"
                    className="font-sans text-sm leading-relaxed text-muted-foreground"
                  >
                    He leído y acepto la información básica sobre protección de
                    datos contenida en la{" "}
                    <Link
                      to="/politica-de-privacidad"
                      className="
                        underline underline-offset-2
                        transition-colors
                        hover:text-foreground
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-foreground
                        focus-visible:ring-offset-2
                        focus-visible:ring-offset-background
                      "
                    >
                      política de privacidad
                    </Link>
                    .
                  </label>
                </div>

                {/* Submit */}
                <div className="flex flex-col items-start gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                      inline-flex items-center gap-3
                      bg-foreground px-8 py-4
                      font-sans text-sm font-semibold text-background
                      transition-opacity
                      hover:opacity-80
                      disabled:cursor-not-allowed
                      disabled:opacity-50
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-foreground
                      focus-visible:ring-offset-4
                      focus-visible:ring-offset-background
                    "
                  >
                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}

                    {!isSubmitting && <span aria-hidden="true">→</span>}
                  </button>

                  <div aria-live="polite" aria-atomic="true">
                    {isSubmitting && (
                      <p className="font-sans text-sm text-muted-foreground">
                        Enviando mensaje...
                      </p>
                    )}

                    {status === "success" && (
                      <p
                        role="status"
                        className="font-sans text-sm text-foreground"
                      >
                        Mensaje enviado correctamente. Gracias por escribir.
                      </p>
                    )}

                    {status === "error" && (
                      <p
                        role="alert"
                        className="font-sans text-sm text-foreground"
                      >
                        No se ha podido enviar el mensaje. Inténtalo de nuevo en
                        unos minutos.
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </AnimatedSection>

            {/* Contact information */}
            <AnimatedSection delay={0.1} className="lg:col-span-5">
              <div className="space-y-10 lg:pl-8">
                <div>
                  <h2 className="mb-3 font-sans text-xs font-semibold uppercase tracking-wider">
                    Email
                  </h2>

                  <a
                    href="mailto:lia@flugilde.es"
                    className="
                      font-sans text-base
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

                <div>
                  <h2 className="mb-3 font-sans text-xs font-semibold uppercase tracking-wider">
                    Ubicación
                  </h2>

                  <p className="font-sans text-base leading-relaxed text-muted-foreground">
                    Asturias, España
                    <br />
                    Disponible para proyectos y colaboraciones.
                  </p>
                </div>

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

                <div className="border-t border-foreground/10 pt-6">
                  <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                    Abierta a nuevos proyectos, colaboraciones y propuestas.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
