"use client";

import { useId, useRef, useState } from "react";

import type { Dictionary } from "../i18n";
import { SECTION_IDS } from "./sections";
import { useDismiss } from "./useDismiss";

export default function MobileNavigation({ t }: { t: Dictionary["nav"] }) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  useDismiss(open, setOpen, rootRef, buttonRef);

  return (
    <div ref={rootRef} className="relative lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((isOpen) => !isOpen)}
        className="grid h-11 w-11 cursor-pointer place-items-center rounded-[12px] border border-[#CBC4B4] bg-cream/80 text-charcoal shadow-[0_1px_0_rgba(36,49,44,0.05)] transition-colors duration-200 hover:border-brand hover:text-brand aria-expanded:border-brand aria-expanded:text-brand"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          {open ? (
            <>
              <path d="M5.2 5.4c3.4 2.9 6.4 6 9.6 9.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M14.8 5.2c-3.6 3-6.5 6.2-9.5 9.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </>
          ) : (
            <>
              <path d="M3.4 6.6c4.2-.5 8.6-.6 13.2-.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M3.4 10.2c3-.3 6.2-.3 9.4 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M3.4 13.8c3.8-.4 7.4-.4 11 .1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </>
          )}
        </svg>
        <span className="sr-only">{open ? t.closeMenu : t.openMenu}</span>
      </button>

      {open ? (
        <nav
          id={menuId}
          aria-label={t.label}
          className="absolute top-[calc(100%+8px)] right-0 z-50 max-h-[calc(100svh-78px)] w-[min(20rem,calc(100vw-40px))] overflow-y-auto rounded-[8px] border border-[#D6CFBF] bg-cream p-2 shadow-soft"
        >
          <div className="flex flex-col">
            {SECTION_IDS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-[6px] px-3 text-[15px] font-semibold text-charcoal no-underline transition-colors duration-200 hover:bg-green-wash hover:text-brand"
              >
                {t.sections[id]}
              </a>
            ))}
          </div>
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 flex min-h-11 items-center justify-center rounded-[10px] bg-brand px-4 text-[15px] font-bold text-cream no-underline transition-colors duration-200 hover:bg-brand-dark hover:text-cream"
          >
            {t.cta}
          </a>
        </nav>
      ) : null}
    </div>
  );
}
