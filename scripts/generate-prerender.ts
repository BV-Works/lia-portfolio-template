import {
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { createServer } from "vite";
import { projects } from "../src/data/projects";

const mode = process.argv[2] || "production";

const staticRoutes = [
  "/",
  "/filmes",
  "/otros-proyectos",
  "/bio",
  "/contacto",
  "/politica-de-privacidad",
  "/aviso-legal",
  "/politica-de-cookies",
  "/accesibilidad",
];

const projectRoutes = projects.map(
  (project) => `/${project.category}/${project.slug}`,
);

const routes = [...staticRoutes, ...projectRoutes];

const outputDir = path.resolve(process.cwd(), "dist");
const templatePath = path.join(outputDir, "index.html");

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const setMeta = (
  html: string,
  attribute: "name" | "property",
  key: string,
  content: string,
) => {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const pattern = new RegExp(
    `<meta\\b(?=[^>]*\\b${attribute}\\s*=\\s*["']${escapedKey}["'])[^>]*>`,
    "i",
  );

  const tag = `<meta ${attribute}="${escapeHtml(key)}" content="${escapeHtml(content)}" />`;

  if (pattern.test(html)) {
    return html.replace(pattern, tag);
  }

  return html.replace("</head>", `    ${tag}\n  </head>`);
};

const setCanonical = (html: string, url: string | null) => {
  const pattern = /<link\b(?=[^>]*\brel\s*=\s*["']canonical["'])[^>]*>/i;

  if (!url) {
    return html.replace(pattern, "");
  }

  const tag = `<link rel="canonical" href="${escapeHtml(url)}" />`;

  if (pattern.test(html)) {
    return html.replace(pattern, tag);
  }

  return html.replace("</head>", `    ${tag}\n  </head>`);
};

const setTitle = (html: string, title: string) => {
  return html.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(title)}</title>`,
  );
};

const applyMetadata = (
  template: string,
  metadata: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    robots: string;
    canonicalUrl: string | null;
  },
) => {
  let html = setTitle(template, metadata.title);

  html = setMeta(
    html,
    "name",
    "description",
    metadata.description,
  );

  html = setMeta(
    html,
    "property",
    "og:site_name",
    "Lía Lugilde",
  );

  html = setMeta(html, "property", "og:type", "website");
  html = setMeta(html, "property", "og:title", metadata.title);
  html = setMeta(
    html,
    "property",
    "og:description",
    metadata.description,
  );
  html = setMeta(html, "property", "og:image", metadata.image);
  html = setMeta(
    html,
    "property",
    "og:image:alt",
    metadata.imageAlt,
  );

  html = setMeta(
    html,
    "name",
    "twitter:card",
    "summary_large_image",
  );
  html = setMeta(html, "name", "twitter:title", metadata.title);
  html = setMeta(
    html,
    "name",
    "twitter:description",
    metadata.description,
  );
  html = setMeta(html, "name", "twitter:image", metadata.image);
  html = setMeta(
    html,
    "name",
    "twitter:image:alt",
    metadata.imageAlt,
  );

  html = setMeta(html, "name", "robots", metadata.robots);
  html = setCanonical(html, metadata.canonicalUrl);

  // Las dimensiones de la imagen de portada no deben heredarse
  // en páginas que utilizan imágenes diferentes.
  html = html.replace(
    /<meta\b(?=[^>]*\bproperty\s*=\s*["']og:image:(?:width|height)["'])[^>]*>\s*/gi,
    "",
  );

  return html;
};

const vite = await createServer({
  configFile: "./vite.config.ts",
  mode,
  server: {
    middlewareMode: true,
  },
  appType: "custom",
  logLevel: "error",
});

try {
  if (!readFileSync(templatePath, "utf-8").includes('id="root"')) {
    throw new Error("No se ha encontrado el contenedor #root en index.html.");
  }

  const template = readFileSync(templatePath, "utf-8");
  const rootPattern = /<div id="root"><\/div>/;

  if (!rootPattern.test(template)) {
    throw new Error(
      "No se ha encontrado el contenedor #root vacío en la plantilla de build.",
    );
  }

  const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");

  console.log("\n--- GENERACIÓN DE HTML PRERRENDERIZADO ---\n");

  for (const pathname of routes) {
    const result = render({ pathname });

    const pageHtml = applyMetadata(template, result.metadata).replace(
      rootPattern,
      `<div id="root">${result.html}</div>`,
    );

    const relativePath =
      pathname === "/"
        ? "index.html"
        : path.join(pathname.slice(1), "index.html");

    const outputPath = path.join(outputDir, relativePath);

    mkdirSync(path.dirname(outputPath), { recursive: true });
    writeFileSync(outputPath, pageHtml, "utf-8");

    console.log(`OK ${pathname}`);
    console.log(`  ${relativePath}`);
  }

  console.log("\n--- RESUMEN ---");
  console.log(`Páginas generadas: ${routes.length}`);
  console.log(`Directorio: ${outputDir}`);
} catch (error) {
  console.error("\nError durante el prerenderizado:");
  console.error(error);
  process.exitCode = 1;
} finally {
  await vite.close();
}