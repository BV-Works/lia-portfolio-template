const SITE_NAME = "Lía Lugilde";

const DEFAULT_DESCRIPTION =
  "Portfolio oficial de Lía Lugilde, directora, guionista y montadora audiovisual afincada en Gijón, Asturias. Filmografía, proyectos y trayectoria profesional.";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/dwi9l26qx/image/upload/c_fill,g_auto,w_1200,h_630,q_auto,f_jpg/v1788198967/hero-saltar.webp";

// Se configurará cuando tengamos el dominio definitivo.
const SITE_URL = (import.meta.env.VITE_SITE_URL || "").replace(/\/+$/, "");

export const siteConfig = {
  name: SITE_NAME,
  title: `${SITE_NAME} — Directora`,
  description: DEFAULT_DESCRIPTION,
  defaultImage: DEFAULT_IMAGE,
  defaultImageAlt: "SALTAR, cortometraje de Lía Lugilde",
  url: SITE_URL,
};
