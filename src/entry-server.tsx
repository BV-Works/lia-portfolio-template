import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import {
  SEOContext,
  type SEOMetadata,
} from "./context/SEOContext";

interface RenderOptions {
  pathname: string;
}

export const render = ({ pathname }: RenderOptions) => {
  let metadata: SEOMetadata | null = null;

  const html = renderToString(
    <SEOContext.Provider
      value={{
        setMetadata: (value) => {
          metadata = value;
        },
      }}
    >
      <StaticRouter location={pathname}>
        <AppRoutes />
      </StaticRouter>
    </SEOContext.Provider>,
  );

  if (!metadata) {
    throw new Error(
      `No se han podido recoger los metadatos SEO de la ruta: ${pathname}`,
    );
  }

  return {
    html,
    metadata,
  };
};