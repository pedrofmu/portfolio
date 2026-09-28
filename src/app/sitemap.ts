import type { MetadataRoute } from "next";

import { SITE } from "../lib/site";

// `output: export` exige que las rutas de metadatos se resuelvan en el build.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Sitio de una sola página: una única URL. `lastModified` sale de una fecha
  // fija en `site.ts` que se actualiza a mano cuando el contenido cambia de
  // verdad: un `new Date()` por build le enseñaría a Google a ignorar el dato.
  // Sin `images`: la imagen OG no aparece en la página como <img>, y las que sí
  // aparecen ya las encuentra Google rastreando el HTML.
  return [
    {
      url: SITE.url,
      lastModified: SITE.contentUpdated,
    },
  ];
}
