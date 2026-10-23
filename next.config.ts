import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exportación estática: GitHub Pages solo sirve ficheros, sin servidor Node.
  output: "export",
  // Cada idioma es una carpeta (`out/es/index.html`): GitHub Pages sirve
  // `/es/` y redirige `/es` a `/es/`. Sin esto saldría `es.html` y `/es/` daría 404.
  trailingSlash: true,
  reactCompiler: true,
  experimental: {
    // Varios layouts raíz (`/` y `/[lang]`): el 404 es `app/global-not-found.tsx`.
    globalNotFound: true,
  },
  turbopack: {
    // Fija la raíz: si hay un `package-lock.json` en una carpeta superior,
    // Turbopack la toma por raíz y el HMR entra en pánico ("needs to be on
    // project filesystem").
    root: path.resolve(__dirname),
  },
  images: {
    // Sin servidor no hay optimizador de imágenes: se sirven tal cual están
    // en public/. Por eso ya no aplica `qualities`.
    unoptimized: true,
  },
};

export default nextConfig;
