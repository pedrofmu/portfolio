"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

import MobileNavigation from "./MobileNavigation";
import { SECTIONS } from "./sections";

export default function TopBar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const next = y > 70;
    if (next !== scrolled) setScrolled(next);
  });

  return (
    <motion.div
      initial={{ y: "-110%" }}
      animate={{
        y: scrolled ? "0%" : "-110%",
        boxShadow: scrolled ? "0 8px 30px rgba(30,45,40,0.08)" : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.5, ease: [0.22, 0.61, 0.21, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-[#E9E2D2] bg-[rgba(251,248,242,0.92)] backdrop-blur-[10px]"
    >
      <div className="mx-auto flex max-w-[1080px] items-center justify-between gap-4 px-[clamp(16px,4vw,24px)] py-[10px]">
        <a
          href="#inicio"
          className="font-display text-[20px] font-extrabold text-charcoal no-underline"
        >
          pedrofm<span className="text-brand">.</span>
        </a>
        <nav aria-label="Secciones" className="hidden lg:flex items-center gap-[22px]">
          {SECTIONS.map((section) => (
            <a
              key={section.href}
              href={section.href}
              className="text-[14.5px] font-medium text-charcoal/75 no-underline transition-colors duration-200 hover:text-brand"
            >
              {section.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-[22px] lg:flex">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-[18px] py-[10px] text-[14.5px] font-semibold text-cream no-underline transition-colors duration-200 hover:bg-brand-dark hover:text-cream"
          >
            Cuéntame tu caso
          </a>
        </div>
        <MobileNavigation />
      </div>
    </motion.div>
  );
}
