import type { MetadataRoute } from "next";

import { SITE } from "../lib/site";
import { LANGUAGE_ALTERNATES, LOCALES, localePath } from "../i18n/config";

// `output: export` exige que las rutas de metadatos se resuelvan en el build.
export const dynamic = "force-static";

/** Los `hreflang` de la página, con URL absoluta como pide el sitemap. */
const languages = Object.fromEntries(
  Object.entries(LANGUAGE_ALTERNATES).map(([locale, path]) => [locale, `${SITE.url}${path}`]),
);

export default function sitemap(): MetadataRoute.Sitemap {
  // Una home por idioma, cada una con sus alternativas (y `/` como x-default,
  // que no se lista: solo elige idioma y redirige). `lastModified` sale de una
  // fecha fija en `site.ts` que se actualiza a mano cuando el contenido cambia
  // de verdad: un `new Date()` por build le enseñaría a Google a ignorar el dato.
  // Sin `images`: la imagen OG no aparece en la página como <img>, y las que sí
  // aparecen ya las encuentra Google rastreando el HTML.
  return LOCALES.map((locale) => ({
    url: `${SITE.url}${localePath(locale)}`,
    lastModified: SITE.contentUpdated,
    alternates: { languages },
  }));
}
