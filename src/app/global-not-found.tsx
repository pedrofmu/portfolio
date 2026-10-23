import type { Metadata } from "next";
import "./globals.css";
import { fontVariables } from "./fonts";
import {
  DEFAULT_LOCALE,
  LOCALES,
  detectLocaleJs,
  localePath,
  type Locale,
} from "../i18n/config";
import { getDictionary } from "../i18n";
import { SITE } from "../lib/site";

/**
 * 404 de todo el sitio (GitHub Pages sirve `404.html` para cualquier ruta que
 * no existe). Hay varios layouts raíz, así que Next pide este fichero en lugar
 * de un `not-found.tsx`. Lleva el texto en los cuatro idiomas y un script elige
 * cuál se ve antes de pintar: el de la URL (`/fr/…`), el elegido o el del
 * navegador. Sin JS se ve el idioma por defecto.
 */

const pickScript = `(function(){${detectLocaleJs({ fromPath: true })}var r=document.documentElement;r.setAttribute("data-lang",p);r.lang=p})()`;

/**
 * Muestra el bloque del idioma elegido; sin `data-lang`, solo el del idioma por
 * defecto (`DEFAULT_LOCALE`). Clases literales: Tailwind no ve las que se montan.
 */
const visibility: Record<Locale, string> = {
  es: "grid [html[data-lang]:not([data-lang=es])_&]:hidden",
  ca: "hidden [html[data-lang=ca]_&]:grid",
  en: "hidden [html[data-lang=en]_&]:grid",
  fr: "hidden [html[data-lang=fr]_&]:grid",
};

export const metadata: Metadata = {
  // Hereda la imagen OG de `app/`: sin esto su URL saldría con localhost.
  metadataBase: new URL(SITE.url),
  // Next ya añade `noindex` a la página de error: repetirlo duplicaría la etiqueta.
  // Título sin idioma: al hidratar, React repone el del HTML aunque el script
  // lo cambie, y «404» se entiende en los cuatro.
  title: `404 · ${SITE.name}`,
};

export default function GlobalNotFound() {
  return (
    // `suppressHydrationWarning`: el script cambia `lang` y `data-lang` antes de hidratar.
    <html lang={DEFAULT_LOCALE} className={fontVariables} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: pickScript }} />
      </head>
      <body>
        {LOCALES.map((locale) => {
          const t = getDictionary(locale).notFound;
          return (
            <main
              key={locale}
              lang={locale}
              className={`${visibility[locale]} min-h-[100svh] place-items-center bg-cream px-6 text-center`}
            >
              <div className="max-w-[520px]">
                <p className="mb-4 text-[15px] font-semibold text-brand">{t.label}</p>
                <h1 className="m-0 font-display text-[clamp(2.2rem,6vw,3.4rem)] leading-[1.05] font-bold tracking-[-0.04em] text-[#171915] text-balance">
                  {t.title}
                </h1>
                <p className="mt-5 text-[17px] leading-[1.6] text-[#4F5852]">{t.body}</p>
                <a
                  href={localePath(locale)}
                  className="mt-8 inline-flex items-center justify-center rounded-[13px] bg-brand px-7 py-[15px] text-[16px] font-bold text-cream no-underline shadow-[0_12px_30px_rgba(15,114,99,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-brand-dark hover:text-cream"
                >
                  {t.cta}
                </a>
              </div>
            </main>
          );
        })}
      </body>
    </html>
  );
}
