import { siteConfig } from "@/config/site";
import type { SEOMetadata } from "@/context/SEOContext";

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

export const applySEOMetadata = (metadata: SEOMetadata) => {
  document.title = metadata.title;

  setMeta('meta[name="description"]', "name", "description", metadata.description);
  setMeta('meta[property="og:site_name"]', "property", "og:site_name", siteConfig.name);
  setMeta('meta[property="og:type"]', "property", "og:type", "website");
  setMeta('meta[property="og:title"]', "property", "og:title", metadata.title);
  setMeta('meta[property="og:description"]', "property", "og:description", metadata.description);
  setMeta('meta[property="og:image"]', "property", "og:image", metadata.image);
  setMeta('meta[property="og:image:alt"]', "property", "og:image:alt", metadata.imageAlt);

  setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
  setMeta('meta[name="twitter:title"]', "name", "twitter:title", metadata.title);
  setMeta('meta[name="twitter:description"]', "name", "twitter:description", metadata.description);
  setMeta('meta[name="twitter:image"]', "name", "twitter:image", metadata.image);
  setMeta('meta[name="twitter:image:alt"]', "name", "twitter:image:alt", metadata.imageAlt);

  setMeta('meta[name="robots"]', "name", "robots", metadata.robots);

  setCanonical(metadata.canonicalUrl);
};