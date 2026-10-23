"use client";

import { useId, useRef, useState } from "react";

import { LOCALES, LOCALE_NAMES, type Locale } from "../i18n/config";
import LanguageLink from "./LanguageLink";
import { useDismiss } from "./useDismiss";

type LanguageSwitcherProps = {
  lang: Locale;
  /** «Idioma» en el idioma de la página: precede al nombre para el lector de pantalla. */
  label: string;
};

/**
 * Selector de idioma discreto: el nombre del idioma actual y una flecha a
 * pincel, que despliega una ficha con los cuatro, cada uno escrito en sí
 * mismo. Con 44 px de alto, cabe junto al botón de menú en móvil.
 */
export default function LanguageSwitcher({ lang, label }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  useDismiss(open, setOpen, rootRef, buttonRef);

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen(!open)}
        className="inline-flex min-h-11 cursor-pointer items-center gap-1.5 rounded-[10px] border-0 bg-transparent px-2.5 text-[14px] font-semibold text-[#5E6B64] transition-colors duration-200 hover:text-brand aria-expanded:text-brand"
      >
        <span className="sr-only">{label}: </span>
        <span translate="no">{LOCALE_NAMES[lang]}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M4.4 7.2c2 1.8 3.7 3.7 5.7 5.9 1.9-2.3 3.7-4.2 5.6-6.1"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open ? (
        <ul
          id={listId}
          className="absolute top-[calc(100%+8px)] right-0 z-50 m-0 w-44 list-none rounded-[8px] border border-[#D6CFBF] bg-cream p-2 shadow-soft"
        >
          {LOCALES.map((locale) => (
            <li key={locale}>
              <LanguageLink
                locale={locale}
                current={locale === lang}
                className="flex min-h-11 items-center justify-between gap-3 rounded-[6px] px-3 text-[15px] font-semibold text-charcoal no-underline transition-colors duration-200 hover:bg-green-wash hover:text-brand aria-[current=page]:text-brand"
              >
                {LOCALE_NAMES[locale]}
                {locale === lang ? (
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.6 8.6c1.3.5 2.4 1.6 3.5 3.3C7.6 8.4 10 5.6 13.6 3.4"
                      stroke="currentColor"
                      strokeWidth="2.1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : null}
              </LanguageLink>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
