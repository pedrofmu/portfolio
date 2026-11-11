import type { Metadata } from "next";
import "../globals.css";
import { fontVariables } from "../fonts";
import { DEFAULT_LOCALE, LANGUAGE_ALTERNATES, detectLocaleJs } from "../../i18n/config";
import { INDEXABLE, localeMetadata } from "../../i18n/metadata";
import { redirectWaitScript } from "../../lib/heroWait";

export { viewport } from "../../i18n/metadata";

/**
 * `/` es el x-default: sin servidor (GitHub Pages) no hay `Accept-Language`,
 * así que este script elige el idioma en el navegador, antes de pintar, y
 * redirige conservando el ancla (`/#contacto` → `/es/#contacto`). Las páginas
 * de cada idioma nunca redirigen: un enlace compartido abre lo que se compartió.
 * Mientras llega la página del idioma se ve la pantalla de carga, la misma
 * que continúa allí; sin JS, el selector de idioma.
 */
const redirectScript = redirectWaitScript(
  `${detectLocaleJs()}location.replace("/"+p+"/"+location.search+location.hash)`,
);

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
    // `suppressHydrationWarning`: el script pone un atributo en `<html>` antes
    // de hidratar.
    <html lang={DEFAULT_LOCALE} className={fontVariables} suppressHydrationWarning>
      <body>
        {/* El script va en `<body>` y no en `<head>`: al pedir la navegación el
            navegador deja de leer el HTML, y sin `<body>` no pinta nada
            (pantalla en blanco hasta la página del idioma). Aquí ya existe y
            con él la pantalla de carga; el script sigue ejecutándose antes
            del primer pintado. */}
        <script dangerouslySetInnerHTML={{ __html: redirectScript }} />
        {children}
      </body>
    </html>
  );
}
