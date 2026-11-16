
import { mkdirSync, writeFileSync, existsSync, rmSync } from "node:fs";
import path from "node:path";
import { loadEnv } from "vite";
import { projects } from "../src/data/projects";

const mode = process.argv[2] || "production";
const env = loadEnv(mode, process.cwd(), "");
const siteUrl = env.VITE_SITE_URL?.replace(/\/+$/, "");

const outputDir = path.resolve(process.cwd(), "dist");
const outputFile = path.join(outputDir, "sitemap.xml");

if (!siteUrl) {
  if (existsSync(outputFile)) {
    rmSync(outputFile);
  }

  console.log(
    "Sitemap omitido: configura VITE_SITE_URL cuando esté disponible el dominio definitivo.",
  );

  process.exit(0);
}

let parsedUrl: URL;

try {
  parsedUrl = new URL(siteUrl);

  if (!["http:", "https:"].includes(parsedUrl.protocol)) {
    throw new Error("El dominio debe utilizar HTTP o HTTPS.");
  }
} catch {
  throw new Error(`VITE_SITE_URL no es una URL válida: ${siteUrl}`);
}

const staticRoutes = [
  "/",
  "/filmes",
  "/otros-proyectos",
  "/bio",
  "/contacto",
];

const projectRoutes = projects.map(
  (project) => `/${project.category}/${project.slug}`,
);

const routes = [...staticRoutes, ...projectRoutes];

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const urls = routes
  .map(
    (route) => `  <url>
    <loc>${escapeXml(`${siteUrl}${route}`)}</loc>
  </url>`,
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, sitemap, "utf-8");

console.log(`Sitemap generado correctamente: ${routes.length} URLs.`);