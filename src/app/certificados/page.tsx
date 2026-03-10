import type { Metadata } from "next";
import { CtaButton } from "@/components/cta-button";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Certificados",
  description:
    "La pagina de certificados de Pedro FM estara disponible proximamente con el detalle completo.",
  path: "/certificados",
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
});

export default function CertificadosPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-[77rem] flex-col items-center justify-center px-6 py-16 text-center sm:px-8">
      <h1 className="font-display text-text text-[clamp(2.2rem,6vw,4rem)] leading-[1.05] font-light uppercase">
        EN CONSTRUCCION
      </h1>
      <p className="text-text mt-5 max-w-xl text-[1.05rem] leading-[1.5]">
        En breve publicare una pagina con certificaciones y formacion relevante
        para el trabajo con software, cloud e infraestructura.
      </p>
      <div className="mt-8">
        <CtaButton href="/">VOLVER</CtaButton>
      </div>
    </main>
  );
}
