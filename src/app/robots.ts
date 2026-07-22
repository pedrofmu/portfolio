import type { MetadataRoute } from "next";

import { SITE } from "../lib/site";

// `output: export` exige que las rutas de metadatos se resuelvan en el build.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Una sola regla: no hay áreas privadas ni API que ocultar, y los bots de
      // IA (OAI-SearchBot, PerplexityBot…) nos interesan para aparecer citados.
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
