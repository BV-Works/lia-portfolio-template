import { createContext } from "react";

export interface SEOMetadata {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  robots: string;
  canonicalUrl: string | null;
}

interface SEOContextValue {
  setMetadata: (metadata: SEOMetadata) => void;
}

export const SEOContext = createContext<SEOContextValue | null>(null);