import { CtaButton } from "@/components/cta-button";

export default function CertificadosPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-[77rem] flex-col items-center justify-center px-6 py-16 text-center sm:px-8">
      <h2 className="font-display text-text text-[clamp(2.2rem,6vw,4rem)] leading-[1.05] font-light uppercase">
        EN CONSTRUCCION
      </h2>
      <div className="mt-8">
        <CtaButton href="/">VOLVER</CtaButton>
      </div>
    </main>
  );
}
