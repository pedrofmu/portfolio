import type { Metadata, Viewport } from "next";

import { SITE } from "../lib/site";
import { LOCALES, OG_LOCALES, localePath, type Locale } from "./config";
import { getDictionary } from ".";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f7263",
};

/**
 * La imagen OG es un PNG estático en `src/app/` (ver `scripts/opengraph-image.tsx`).
 * Se declara a mano: un `openGraph` en un segmento hijo sustituye entero al del
 * padre, y con él la imagen que Next añade sola. El texto alternativo es el de
 * `opengraph-image.alt.txt`; va en castellano porque describe la imagen, que
 * está en castellano.
 */
const OG_IMAGE = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "Pedro Fernández Muñoz — Desarrollo de software a medida para pymes en Alcoy, Alicante",
};

/**
 * Metadatos comunes de un idioma: los usa su layout y el de `/` (con el
 * castellano, que es el x-default). `alternates` y `robots` van en cada página:
 * puestos aquí los heredaría también el 404.
 */
export function localeMetadata(lang: Locale, path = localePath(lang)): Metadata {
  const { meta } = getDictionary(lang);
  return {
    // Necesario para que las URLs relativas de OG/canonical se resuelvan absolutas.
    metadataBase: new URL(SITE.url),
    // `meta.title` ya incluye el nombre propio: no se le concatena la marca.
    title: {
      default: meta.title,
      template: `%s | ${SITE.legalName}`,
    },
    description: meta.description,
    applicationName: SITE.name,
    authors: [{ name: SITE.legalName, url: SITE.url }],
    creator: SITE.legalName,
    publisher: SITE.legalName,
    openGraph: {
      type: "website",
      locale: OG_LOCALES[lang],
      alternateLocale: LOCALES.filter((locale) => locale !== lang).map(
        (locale) => OG_LOCALES[locale],
      ),
      url: path,
      siteName: SITE.name,
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE],
    },
    category: "technology",
  };
}

/** Solo la home de cada idioma (y `/`) es indexable. */
export const INDEXABLE: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};
