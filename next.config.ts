import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exportación estática: GitHub Pages solo sirve ficheros, sin servidor Node.
  output: "export",
  reactCompiler: true,
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
