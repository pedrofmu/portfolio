import Image from "next/image";
import { CtaButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies } from "@/lib/data";

export function CaseStudies() {
  return (
    <section
      id="casos"
      className="mx-auto min-h-[40rem] max-w-[77rem] px-6 pt-12 pb-20 sm:px-8 lg:min-h-[44rem] lg:pt-14 lg:pb-16"
      aria-labelledby="casos-title"
    >
      <SectionHeading
        id="casos-title"
        title="CASOS DE EXITO"
        className="text-center"
        decoration={
          <Image
            src="/border-decorations/cases-decorative-motiv.svg"
            alt=""
            aria-hidden="true"
            width={1453}
            height={207}
            className="h-6 w-32"
          />
        }
      />

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {caseStudies.map((item) => (
          <article key={item.title} className="flex h-full flex-col">
            <div className="border-border overflow-hidden rounded-[2.2rem] border">
              <Image
                src={item.image}
                alt={item.imageAlt}
                width={480}
                height={340}
                className="aspect-[4/2.7] h-auto w-full object-cover"
              />
            </div>
            <h3 className="font-display text-text mt-4 text-[2rem] font-bold">
              {item.title}
            </h3>
            <p className="text-text mt-1 text-[1.08rem] italic">
              {item.client}
            </p>
            <p className="text-text mt-3 text-[1rem] leading-[1.32] tracking-[-0.01em]">
              {item.description}
            </p>
            <div className="mt-5">
              <CtaButton
                target="_blank"
                href={item.link}
                aria-label={`Ver detalles de ${item.title}`}
              >
                VER
              </CtaButton>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <CtaButton href="/proyectos">MAS PROYECTOS</CtaButton>
      </div>
    </section>
  );
}
