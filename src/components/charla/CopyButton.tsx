"use client";

import { useEffect, useState } from "react";

type CopyButtonProps = {
  text: string;
  /** «Copiar» y «Copiado». */
  label: string;
  done: string;
  /** Qué se copia, para el lector de pantalla: «Copiar: Plantilla de contexto». */
  name?: string;
};

/** Copia sin el portapapeles moderno (HTTP, navegadores antiguos o permisos denegados). */
function legacyCopy(text: string) {
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.opacity = "0";
  document.body.append(area);
  area.select();
  const ok = document.execCommand("copy");
  area.remove();
  return ok;
}

/**
 * Botón secundario compacto que copia un texto (plantilla, prompt o skill) y
 * confirma durante dos segundos. El aviso va en una región `aria-live` para que
 * el lector de pantalla también lo oiga.
 */
export default function CopyButton({ text, label, done, name }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  async function copy() {
    let ok = false;
    try {
      await navigator.clipboard.writeText(text);
      ok = true;
    } catch {
      ok = legacyCopy(text);
    }
    if (ok) setCopied(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={copy}
        className="inline-flex min-h-11 shrink-0 cursor-pointer items-center gap-2 rounded-[11px] border border-[#CBC4B4] bg-cream/70 px-4 text-[14.5px] font-semibold whitespace-nowrap text-charcoal transition-colors duration-200 hover:border-brand hover:text-brand print:hidden"
      >
        {copied ? (
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="text-brand">
            <path
              d="M2.6 8.6c1.3.5 2.4 1.6 3.5 3.3C7.6 8.4 10 5.6 13.6 3.4"
              stroke="currentColor"
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M5.4 5.2c0-1.3.4-2.2 1.9-2.3 1.9-.1 3.8-.1 5.6.1.8.1 1.1.6 1.1 1.5.1 1.9.1 3.8 0 5.6-.1.9-.6 1.4-1.6 1.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              d="M2.6 6.9c0-.8.5-1.3 1.4-1.4 1.9-.1 3.7-.1 5.5 0 .9.1 1.4.6 1.4 1.5.1 1.9.1 3.8 0 5.6 0 .9-.5 1.3-1.4 1.4-1.9.1-3.7.1-5.5 0-.9-.1-1.4-.5-1.4-1.4-.1-1.9-.1-3.8 0-5.7Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {copied ? done : label}
        {name ? <span className="sr-only">: {name}</span> : null}
      </button>
      {/* Fuera del botón: dentro, el aviso formaría parte de su nombre. */}
      <span className="sr-only" role="status">
        {copied ? done : ""}
      </span>
    </>
  );
}
