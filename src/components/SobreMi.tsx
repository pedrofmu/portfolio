import Image from "next/image";
import Reveal from "./Reveal";
import { Section, containerClass } from "./ui";
import retrato from "../../public/assets/pedro-fernandez.jpg";

export default function SobreMi() {
  return (
    <Section id="sobre-mi" labelledBy="sobre-mi-title">
      <Reveal
        className={`${containerClass} grid grid-cols-[minmax(280px,0.8fr)_minmax(320px,1.2fr)] items-center gap-[clamp(42px,7vw,76px)] max-[820px]:grid-cols-1`}
      >
        <div className="relative aspect-[4/5] max-w-[380px] overflow-hidden rounded-[18px] bg-green-wash shadow-[18px_18px_0_var(--color-green-light)] after:absolute after:inset-0 after:rounded-[inherit] after:border after:border-[rgba(22,21,15,0.09)] after:content-[''] max-[820px]:w-[min(100%,430px)] max-[620px]:shadow-[10px_10px_0_var(--color-green-light)]">
          <Image
            src={retrato}
            alt="Retrato de Pedro Fernández Muñoz"
            fill
            sizes="(max-width: 820px) 430px, 380px"
            style={{ objectPosition: "53% center" }}
            className="object-cover"
          />
        </div>

        <div>
          <p className="mb-[13px] text-[13px] font-semibold tracking-[0.1em] text-muted uppercase">
            07 — Quién soy
          </p>
          <h2
            id="sobre-mi-title"
            className="mb-[21px] font-display text-[clamp(30px,4vw,42px)] leading-[1.12] font-bold tracking-[-0.025em] text-balance max-[620px]:text-[30px]"
          >
            Pedro Fernández Muñoz
          </h2>
          <p className="mb-[15px] text-[17px] leading-[1.72] text-ink-soft">
            Soy desarrollador de software freelance en Alcoy, Alicante. Ayudo a pymes de
            toda España a digitalizar sus operaciones: menos trabajo manual, menos errores
            y herramientas que de verdad se usan.
          </p>
          <p className="mb-[15px] text-[17px] leading-[1.72] text-ink-soft">
            Cuando trabajas conmigo, hablas siempre con la misma persona: quien entiende tu
            problema es quien lo programa. Sin comerciales de por medio, sin proyectos que
            pasan por cinco manos.
          </p>
          <p className="mt-[22px] mb-[18px] border-t border-line pt-[19px] text-[14.5px] leading-[1.67] text-muted">
            <strong className="text-ink-soft">Garantía técnica:</strong> titulado en
            Administración de Sistemas y certificado por AWS. Desarrollo con Next.js, React,
            Laravel, Go, TypeScript y Node.js, con infraestructura en AWS o en tus propios
            servidores.
          </p>
          <a
            href="https://www.linkedin.com/in/pedro-fern%C3%A1ndez-mu%C3%B1oz-4148a9287/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-[6px] text-[15px] font-semibold text-green underline decoration-transparent underline-offset-4 transition-colors duration-200 hover:text-green-dark hover:decoration-current"
          >
            LinkedIn <span aria-hidden="true">↗</span>
            <span className="sr-only"> (se abre en una pestaña nueva)</span>
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
