"use client";

import type { ReactNode } from "react";

import { LOCALE_STORAGE_KEY, localePath, type Locale } from "../i18n/config";

/** Altura de la barra fija: lo que queda por debajo es lo que se está leyendo. */
const READING_LINE = 80;

/** Ancla de la sección que se está leyendo, para no perderla al cambiar de idioma. */
function currentAnchor() {
  let anchor = "";
  for (const section of document.querySelectorAll<HTMLElement>("main section[id]")) {
    if (section.getBoundingClientRect().top > READING_LINE) break;
    anchor = `#${section.id}`;
  }
  return anchor === "#inicio" ? "" : anchor;
}

type LanguageLinkProps = {
  locale: Locale;
  /** El idioma de la página: enlaza a sí misma y se marca con `aria-current`. */
  current?: boolean;
  className?: string;
  children: ReactNode;
};

/**
 * Enlace real a otro idioma (funciona sin JS y con Ctrl+clic). Al pulsarlo
 * guarda la elección, que `/` respeta antes que el idioma del navegador, y
 * lleva a la misma sección en el otro idioma.
 */
export default function LanguageLink({ locale, current, className, children }: LanguageLinkProps) {
  return (
    <a
      href={localePath(locale)}
      lang={locale}
      hrefLang={locale}
      // Un traductor automático no debe convertir «Español» en «Spanish».
      translate="no"
      aria-current={current ? "page" : undefined}
      onClick={(event) => {
        try {
          localStorage.setItem(LOCALE_STORAGE_KEY, locale);
        } catch {
          // Sin almacenamiento (modo privado, cookies bloqueadas) se navega igual.
        }
        // Se cambia antes de que el navegador siga el enlace, que lee el `href` después.
        event.currentTarget.href = localePath(locale) + currentAnchor();
      }}
      className={className}
    >
      {children}
    </a>
  );
}
