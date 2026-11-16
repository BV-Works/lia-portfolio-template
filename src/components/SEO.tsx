import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { siteConfig } from "@/config/site";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
}

const setMeta = (
  selector: string,
  attribute: "name" | "property",
  key: string,
  content: string,
) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
};

const setCanonical = (url: string | null) => {
  let element = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );

  if (!url) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }

  element.href = url;
};

const SEO = ({
  title,
  description = siteConfig.description,
  image = siteConfig.defaultImage,
  imageAlt = siteConfig.defaultImageAlt,
  noindex = false,
}: SEOProps) => {
  const location = useLocation();
  const normalizedDescription = description.replace(/\s+/g, " ").trim();

  const metaDescription =
    normalizedDescription.length > 160
      ? `${normalizedDescription.slice(0, 157).replace(/\s+\S*$/, "")}…`
      : normalizedDescription;
  useEffect(() => {
    const pageTitle = title
      ? `${title} | ${siteConfig.name}`
      : siteConfig.title;

    const canonicalUrl = siteConfig.url
      ? `${siteConfig.url}${location.pathname}`
      : null;

    document.title = pageTitle;

    setMeta('meta[name="description"]', "name", "description", metaDescription);
    setMeta(
      'meta[property="og:site_name"]',
      "property",
      "og:site_name",
      siteConfig.name,
    );
    setMeta('meta[property="og:type"]', "property", "og:type", "website");
    setMeta('meta[property="og:title"]', "property", "og:title", pageTitle);
    setMeta(
      'meta[property="og:description"]',
      "property",
      "og:description",
      metaDescription,
    );
    setMeta('meta[property="og:image"]', "property", "og:image", image);
    setMeta(
      'meta[property="og:image:alt"]',
      "property",
      "og:image:alt",
      imageAlt,
    );

    setMeta(
      'meta[name="twitter:card"]',
      "name",
      "twitter:card",
      "summary_large_image",
    );
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", pageTitle);
    setMeta(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      metaDescription,
    );
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", image);
    setMeta(
      'meta[name="twitter:image:alt"]',
      "name",
      "twitter:image:alt",
      imageAlt,
    );

    setMeta(
      'meta[name="robots"]',
      "name",
      "robots",
      noindex ? "noindex, nofollow" : "index, follow",
    );

    setCanonical(canonicalUrl);
  }, [title, metaDescription, image, imageAlt, noindex, location.pathname]);

  return null;
};

export default SEO;
