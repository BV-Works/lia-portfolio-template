import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { siteConfig } from "@/config/site";
import { SEOContext, type SEOMetadata } from "@/context/SEOContext";
import { applySEOMetadata } from "@/context/seoMetadata";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
}

const SEO = ({
  title,
  description = siteConfig.description,
  image = siteConfig.defaultImage,
  imageAlt = siteConfig.defaultImageAlt,
  noindex = false,
}: SEOProps) => {
  const location = useLocation();
  const collector = useContext(SEOContext);

  const normalizedDescription = description.replace(/\s+/g, " ").trim();

  const metaDescription =
    normalizedDescription.length > 160
      ? `${normalizedDescription.slice(0, 157).replace(/\s+\S*$/, "")}…`
      : normalizedDescription;

  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;

  const canonicalUrl = siteConfig.url
    ? `${siteConfig.url}${location.pathname}`
    : null;

  const metadata: SEOMetadata = {
    title: pageTitle,
    description: metaDescription,
    image,
    imageAlt,
    robots: noindex ? "noindex, nofollow" : "index, follow",
    canonicalUrl,
  };

  // Recoge los metadatos durante el prerenderizado.
  collector?.setMetadata(metadata);

  // Actualiza los metadatos durante la navegación en el navegador.
  useEffect(() => {
    applySEOMetadata({
      title: pageTitle,
      description: metaDescription,
      image,
      imageAlt,
      robots: noindex ? "noindex, nofollow" : "index, follow",
      canonicalUrl,
    });
  }, [pageTitle, metaDescription, image, imageAlt, noindex, canonicalUrl]);

  return null;
};

export default SEO;
