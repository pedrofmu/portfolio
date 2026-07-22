"use client";

import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { SECTIONS } from "./sections";

type Variant = "dropdown" | "overlay";

export default function MobileNavigation({
  variant = "dropdown",
}: {
  variant?: Variant;
}) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const isOverlay = variant === "overlay";

  useEffect(() => {
    if (!isOverlay || !open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOverlay, open]);

  return (
    <div className={`${isOverlay ? "" : "relative"} lg:hidden`}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((isOpen) => !isOpen)}
        className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-[#D8D0C2] bg-white/70 text-charcoal transition-colors duration-200 hover:border-brand hover:text-brand"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          {open && !isOverlay ? (
            <>
              <path d="m5 5 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="m15 5-10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </>
          ) : (
            <>
              <path d="M3.5 6.5h13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M3.5 10h13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M3.5 13.5h13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </>
          )}
        </svg>
        <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
      </button>

      {isOverlay ? (
        <AnimatePresence>
          {open ? (
            <motion.div
              id={menuId}
              role="dialog"
              aria-modal="true"
              aria-label="Menú de navegación"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 0.61, 0.21, 1] }}
              className="fixed inset-0 z-[100] flex flex-col bg-[linear-gradient(180deg,#FDFBF6_0%,#F2EBDD_100%)]"
            >
              <div className="flex items-center justify-between px-[clamp(20px,5vw,68px)] py-[clamp(18px,2.2vw,26px)]">
                <a
                  href="#inicio"
                  onClick={() => setOpen(false)}
                  className="font-display text-[22px] font-extrabold text-charcoal no-underline"
                >
                  pedrofm<span className="text-brand">.</span>
                </a>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-[#D8D0C2] bg-white/70 text-charcoal transition-colors duration-200 hover:border-brand hover:text-brand"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="m5 5 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="m15 5-10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span className="sr-only">Cerrar menú</span>
                </button>
              </div>

              <nav
                aria-label="Secciones"
                className="flex flex-1 flex-col justify-center gap-1 overflow-y-auto px-[clamp(20px,5vw,68px)] py-4"
              >
                {SECTIONS.map((section, index) => (
                  <motion.a
                    key={section.href}
                    href={section.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.42,
                      delay: 0.06 + index * 0.045,
                      ease: [0.22, 0.61, 0.21, 1],
                    }}
                    className="flex min-h-[52px] items-center font-display text-[clamp(1.75rem,7.5vw,2.35rem)] leading-[1.15] font-bold tracking-[-0.03em] text-[#171915] no-underline transition-colors duration-200 hover:text-brand"
                  >
                    {section.label}
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: 0.34, ease: [0.22, 0.61, 0.21, 1] }}
                className="px-[clamp(20px,5vw,68px)] pt-2 pb-[max(28px,env(safe-area-inset-bottom))]"
              >
                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="flex min-h-[56px] items-center justify-center rounded-[13px] bg-brand px-7 text-[16px] font-bold text-cream no-underline shadow-[0_12px_30px_rgba(15,114,99,0.2)] transition-colors duration-200 hover:bg-brand-dark hover:text-cream"
                >
                  Cuéntame tu caso
                </a>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      ) : open ? (
        <nav
          id={menuId}
          aria-label="Secciones"
          className="absolute top-[calc(100%+8px)] right-0 z-50 max-h-[calc(100svh-78px)] w-[min(20rem,calc(100vw-40px))] overflow-y-auto rounded-[18px] border border-[#DDD5C7] bg-[#FFFCF6] p-2 shadow-[0_18px_45px_rgba(54,61,54,0.14)]"
        >
          <div className="flex flex-col">
            {SECTIONS.map((section) => (
              <a
                key={section.href}
                href={section.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-[11px] px-3 text-[15px] font-semibold text-charcoal no-underline transition-colors duration-200 hover:bg-[#EDF3EE] hover:text-brand"
              >
                {section.label}
              </a>
            ))}
          </div>
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 flex min-h-11 items-center justify-center rounded-[11px] bg-brand px-4 text-[15px] font-bold text-cream no-underline transition-colors duration-200 hover:bg-brand-dark hover:text-cream"
          >
            Cuéntame tu caso
          </a>
        </nav>
      ) : null}
    </div>
  );
}
