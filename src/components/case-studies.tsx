"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CtaButton } from "@/components/cta-button";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies } from "@/lib/data";

export function CaseStudies() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="casos"
      className="mx-auto mt-28 max-w-6xl px-6 sm:mt-36"
      aria-labelledby="casos-title"
    >
      <MotionReveal>
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
      </MotionReveal>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {caseStudies.map((item, index) => (
          <MotionReveal key={item.title} delay={index * 0.09}>
            <motion.article
              whileHover={prefersReducedMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="flex h-full flex-col"
            >
              <div className="border-border overflow-hidden rounded-[2.2rem] border">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={480}
                  height={340}
                  className="aspect-[4/2.7] h-auto w-full object-cover"
                />
              </div>
              <h3 className="font-display text-text mt-4 text-[2rem] font-bold tracking-[-0.04em]">
                {item.title}
              </h3>
              <p className="text-text mt-1 text-[1.08rem] tracking-[-0.02em] italic">
                {item.client}
              </p>
              <p className="text-text mt-3 text-[1rem] leading-[1.32] tracking-[-0.01em]">
                {item.description}
              </p>
              <div className="mt-5">
                <CtaButton
                  href="#contacto"
                  aria-label={`Ver detalles de ${item.title}`}
                >
                  VER
                </CtaButton>
              </div>
            </motion.article>
          </MotionReveal>
        ))}
      </div>

      <MotionReveal className="mt-8 text-center" delay={0.2}>
        <CtaButton href="#contacto">MAS PROYECTOS</CtaButton>
      </MotionReveal>
    </section>
  );
}
