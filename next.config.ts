import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exportación estática: GitHub Pages solo sirve ficheros, sin servidor Node.
  output: "export",
  reactCompiler: true,
  images: {
    // Sin servidor no hay optimizador de imágenes: se sirven tal cual están
    // en public/. Por eso ya no aplica `qualities`.
    unoptimized: true,
  },
};

export default nextConfig;
