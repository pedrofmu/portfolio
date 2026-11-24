import type { Metadata } from "next";

import { SITE } from "../../lib/site";
import { talkPath, talkPaths, type TalkResource } from "../../lib/charla";
import { OG_LOCALES, type Locale } from "../config";
import { INDEXABLE } from "../metadata";
import { ca } from "./ca";
import { en } from "./en";
import { es } from "./es";
import type { TalkDictionary } from "./types";

/**
 * Textos de la charla «IA sin humo», aparte de los de la home: solo los cargan
 * sus páginas. Solo para componentes de servidor.
 */
const DICTIONARIES: Record<Locale, TalkDictionary> = { es, ca, en };

export const getTalkDictionary = (locale: Locale) => DICTIONARIES[locale];

/**
 * Metadatos de una página de la charla. La canónica de `es` es la URL sin
 * idioma (la del QR); `/es/…` existe solo como copia que Firebase redirige.
 */
export function talkMetadata(lang: Locale, resource?: TalkResource): Metadata {
  const t = getTalkDictionary(lang);
  const page = resource ? t.resources[resource] : t.home;
  const title = resource ? `${page.title}: ${t.ui.talkTitle}` : page.title;
  const url = talkPath(lang, resource);
  const paths = talkPaths(resource);
  return {
    metadataBase: new URL(SITE.url),
    title: { absolute: `${title} | ${SITE.legalName}` },
    description: page.description,
    authors: [{ name: SITE.legalName, url: SITE.url }],
    alternates: {
      canonical: url,
      languages: { ...paths, "x-default": paths.es },
    },
    openGraph: {
      type: "article",
      locale: OG_LOCALES[lang],
      url,
      siteName: SITE.name,
      title,
      description: page.description,
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description: page.description },
    robots: INDEXABLE,
  };
}
