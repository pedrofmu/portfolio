"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { solutions } from "@/lib/data";

function SolutionIcon({ type }: { type: "speech" | "smile" | "plant" }) {
  const iconByType = {
    speech: {
      src: "/border-decorations/services-internal-programs-decorative-motiv.svg",
      width: 1489,
      height: 965,
      className: "mx-auto mb-5 h-14 w-20",
    },
    smile: {
      src: "/border-decorations/services-ai-decorative-motiv.svg",
      width: 927,
      height: 931,
      className: "mx-auto mb-5 h-16 w-16",
    },
    plant: {
      src: "/border-decorations/services-automations-decorative-motiv.svg",
      width: 759,
      height: 1107,
      className: "mx-auto mb-5 h-16 w-11",
    },
  } as const;

  const icon = iconByType[type];

  return (
    <Image
      src={icon.src}
      alt=""
      aria-hidden="true"
      width={icon.width}
      height={icon.height}
      className={icon.className}
    />
  );
}

export function Solutions() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="soluciones"
      className="mx-auto mt-28 max-w-6xl px-6 sm:mt-36"
      aria-labelledby="soluciones-title"
    >
      <MotionReveal>
        <SectionHeading
          id="soluciones-title"
          title="SOLUCIONES"
          className="text-center"
        />
      </MotionReveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {solutions.map((solution, index) => (
          <MotionReveal key={solution.title} delay={index * 0.08}>
            <motion.article
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : { y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.08)" }
              }
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="border-border flex min-h-[25rem] flex-col border px-6 pt-8 pb-6 text-center"
            >
              <SolutionIcon type={solution.icon} />
              <h3 className="font-display text-text text-[2.2rem] leading-[0.9] font-medium tracking-[-0.03em] uppercase">
                {solution.title.split("\n").map((line) => (
                  <span key={`${solution.title}-${line}`} className="block">
                    {line}
                  </span>
                ))}
              </h3>
              <p className="text-text mt-5 text-[1.06rem] leading-[1.28] tracking-[-0.01em]">
                {solution.description}
              </p>
              <p className="font-display text-accent mt-auto pt-6 text-[1.25rem] leading-[0.95] font-bold tracking-[-0.02em] uppercase">
                {solution.outcome}
              </p>
            </motion.article>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}
