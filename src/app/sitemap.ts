import type { MetadataRoute } from "next";

import { SITE } from "../lib/site";

// `output: export` exige que las rutas de metadatos se resuelvan en el build.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Sitio de una sola página: una única URL. `lastModified` sale de una fecha
  // fija en `site.ts` que se actualiza a mano cuando el contenido cambia de
  // verdad: un `new Date()` por build le enseñaría a Google a ignorar el dato.
  return [
    {
      url: SITE.url,
      lastModified: SITE.contentUpdated,
      images: [`${SITE.url}/opengraph-image.png`],
    },
  ];
}
