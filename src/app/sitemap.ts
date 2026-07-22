import type { MetadataRoute } from "next";

import { SITE } from "../lib/site";

// `output: export` exige que las rutas de metadatos se resuelvan en el build.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Sitio de una sola página: una única URL. Sin `lastModified`, porque un
  // `new Date()` en cada build le enseña a Google a ignorar el dato; se añade
  // a mano cuando el contenido cambie de verdad.
  return [
    {
      url: SITE.url,
      images: [`${SITE.url}/opengraph-image.png`],
    },
  ];
}
