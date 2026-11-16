import { createServer } from "vite";
import { projects } from "../src/data/projects";

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

const routes = [
  ...staticRoutes,
  ...projectRoutes,
  "/__prerender_test_404__",
];

const vite = await createServer({
  configFile: "./vite.config.ts",
  server: {
    middlewareMode: true,
  },
  appType: "custom",
  logLevel: "error",
});

let errors = 0;

try {
  const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");

  console.log("\n--- PRUEBA SSR DE TODAS LAS RUTAS ---\n");

  for (const pathname of routes) {
    try {
      const result = render({ pathname });

      const validHtml = result.html.length > 0;
      const validTitle = Boolean(result.metadata.title);
      const validDescription = Boolean(result.metadata.description);

      const valid = validHtml && validTitle && validDescription;

      if (!valid) {
        errors++;
      }

      console.log(`${valid ? "OK" : "ERROR"} ${pathname}`);
      console.log(`  Título: ${result.metadata.title}`);
      console.log(`  Robots: ${result.metadata.robots}`);
      console.log(`  HTML: ${result.html.length} caracteres`);

      if (!valid) {
        console.log("  Faltan datos o contenido.");
      }
    } catch (error) {
      errors++;
      console.error(`\nERROR ${pathname}`);
      console.error(error);
    }
  }

  console.log("\n--- RESUMEN ---");
  console.log(`Rutas comprobadas: ${routes.length}`);
  console.log(`Errores: ${errors}`);

  if (errors > 0) {
    process.exitCode = 1;
  }
} finally {
  await vite.close();
}