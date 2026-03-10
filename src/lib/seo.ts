import type { Metadata } from "next";

export const siteConfig = {
  name: "Pedro FM",
  author: "Pedro Fernandez Munoz",
  url: "https://pedrofm.dev",
  locale: "es_ES",
  language: "es-ES",
  email: "hola@pedrofm.dev",
  description:
    "Desarrollo sistemas internos, automatizaciones e integraciones con IA para empresas de Espana. Software a medida para reducir tareas manuales y escalar operaciones.",
  keywords: [
    "desarrollo de software para empresas",
    "sistemas internos",
    "automatizacion de procesos",
    "integraciones empresariales",
    "software a medida b2b",
    "inteligencia artificial para empresas",
    "desarrollo web b2b",
    "Espana",
    "Comunidad Valenciana",
    "Alicante",
    "Alcoy",
  ],
  social: {
    github: "https://github.com/pedrofmu",
    linkedin:
      "https://www.linkedin.com/in/pedro-fern%C3%A1ndez-mu%C3%B1oz-4148a9287/",
  },
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

type CreatePageMetadataParams = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  robots?: Metadata["robots"];
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  robots,
}: CreatePageMetadataParams): Metadata {
  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots,
  };
}
