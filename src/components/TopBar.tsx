"use client";

import { useState } from "react";
import { m, useMotionValueEvent, useScroll } from "motion/react";

import type { Locale } from "../i18n/config";
import type { Dictionary } from "../i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileNavigation from "./MobileNavigation";
import { SECTION_IDS } from "./sections";

export default function TopBar({ lang, nav }: { lang: Locale; nav: Dictionary["nav"] }) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const next = y > 70;
    if (next !== scrolled) setScrolled(next);
  });

  return (
    <m.div
      initial={{ y: "-110%" }}
      animate={{
        y: scrolled ? "0%" : "-110%",
        boxShadow: scrolled ? "0 8px 30px rgba(30,45,40,0.08)" : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.5, ease: [0.22, 0.61, 0.21, 1] }}
      // Escondida fuera de pantalla duplica la cabecera del hero: sin `inert`,
      // el tabulador se perdería por enlaces invisibles.
      inert={!scrolled}
      className="fixed inset-x-0 top-0 z-50 border-b border-[#E9E2D2] bg-[rgba(251,248,242,0.97)]"
    >
      <div className="mx-auto flex max-w-[1080px] items-center justify-between gap-4 px-[clamp(16px,4vw,24px)] py-[10px]">
        <a
          href="#inicio"
          className="font-display text-[20px] font-extrabold text-charcoal no-underline"
        >
          pedrofm<span className="text-brand">.</span>
        </a>
        {/* De 1024 a 1280 px la barra va justa con el selector de idioma y las
            etiquetas largas (en/fr): el hueco entre enlaces se estrecha. */}
        <nav aria-label={nav.label} className="hidden items-center gap-[18px] lg:flex xl:gap-[22px]">
          {SECTION_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-[14.5px] font-medium whitespace-nowrap text-charcoal/75 no-underline transition-colors duration-200 hover:text-brand"
            >
              {nav.sections[id]}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 lg:gap-1 xl:gap-3">
          <LanguageSwitcher lang={lang} label={nav.language} />
          <a
            href="#contacto"
            className="hidden items-center gap-2 rounded-[11px] bg-brand px-[18px] py-[10px] text-[14.5px] font-semibold whitespace-nowrap text-cream no-underline transition-colors duration-200 hover:bg-brand-dark hover:text-cream lg:inline-flex"
          >
            {nav.cta}
          </a>
          <MobileNavigation t={nav} />
        </div>
      </div>
    </m.div>
  );
}
