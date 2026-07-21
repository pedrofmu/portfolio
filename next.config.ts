import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // Next 16 exige declarar las calidades permitidas (por defecto solo [75]).
    // Las capturas de pantalla llevan texto pequeño y a 75 se ven pastosas.
    qualities: [75, 90],
  },
};

export default nextConfig;
