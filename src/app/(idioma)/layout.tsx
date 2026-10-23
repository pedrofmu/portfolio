import type { Metadata } from "next";
import "../globals.css";
import { fontVariables } from "../fonts";
import { DEFAULT_LOCALE, LANGUAGE_ALTERNATES, detectLocaleJs } from "../../i18n/config";
import { INDEXABLE, localeMetadata } from "../../i18n/metadata";

export { viewport } from "../../i18n/metadata";

/**
 * `/` es el x-default: sin servidor (GitHub Pages) no hay `Accept-Language`,
 * así que este script elige el idioma en el navegador, antes de pintar, y
 * redirige conservando el ancla (`/#contacto` → `/es/#contacto`). Las páginas
 * de cada idioma nunca redirigen: un enlace compartido abre lo que se compartió.
 */
const redirectScript = `(function(){${detectLocaleJs()}location.replace("/"+p+"/"+location.search+location.hash)})()`;

/** Habla en el idioma por defecto: es lo que leen quien no tiene JS y los scrapers. */
export const metadata: Metadata = {
  ...localeMetadata(DEFAULT_LOCALE, "/"),
  alternates: {
    canonical: "/",
    languages: LANGUAGE_ALTERNATES,
  },
  robots: INDEXABLE,
};

export default function LanguageRootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={DEFAULT_LOCALE} className={fontVariables}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: redirectScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
