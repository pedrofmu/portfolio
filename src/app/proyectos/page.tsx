import type { Metadata } from "next";
import { CtaButton } from "@/components/cta-button";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Proyectos",
  description:
    "La pagina de proyectos detallados de Pedro FM estara disponible proximamente.",
  path: "/proyectos",
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
});

export default function ProyectosPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-[77rem] flex-col items-center justify-center px-6 py-16 text-center sm:px-8">
      <h1 className="font-display text-text text-[clamp(2.2rem,6vw,4rem)] leading-[1.05] font-light uppercase">
        EN CONSTRUCCION
      </h1>
      <p className="text-text mt-5 max-w-xl text-[1.05rem] leading-[1.5]">
        Estoy preparando una version ampliada con mas contexto de los proyectos
        y resultados conseguidos.
      </p>
      <div className="mt-8">
        <CtaButton href="/">VOLVER</CtaButton>
      </div>
    </main>
  );
}
