"use client";

import { useId, useState } from "react";

import { SECTIONS } from "./sections";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((isOpen) => !isOpen)}
        className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-[#D8D0C2] bg-white/70 text-charcoal transition-colors duration-200 hover:border-brand hover:text-brand"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          {open ? (
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

      {open ? (
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
