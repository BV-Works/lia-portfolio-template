import { createServer } from "vite";

const vite = await createServer({
  configFile: "./vite.config.ts",
  server: {
    middlewareMode: true,
  },
  appType: "custom",
  logLevel: "error",
});

try {
  const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");

  const result = render({
    pathname: "/filmes/saltar",
  });

  console.log("\n--- METADATOS SEO ---");
  console.log(JSON.stringify(result.metadata, null, 2));

  console.log("\n--- RESULTADO HTML ---");
  console.log("Longitud:", result.html.length);
  console.log("Contiene contenido SALTAR:", result.html.toLowerCase().includes("saltar"));
  console.log("Primeros 1000 caracteres:");
  console.log(result.html.slice(0, 1000));
} catch (error) {
  console.error("\nError durante el prerenderizado:");
  console.error(error);
  process.exitCode = 1;
} finally {
  await vite.close();
}