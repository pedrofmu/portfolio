import type { Metadata } from "next";
import "../globals.css";
import { fontVariables } from "../fonts";
import { getDictionary } from "../../i18n";
import { SITE } from "../../lib/site";

export { viewport } from "../../i18n/metadata";

/** El resto de metadatos, en cada página (`i18n/charla`). */
export const metadata: Metadata = { metadataBase: new URL(SITE.url) };

/**
 * `/ia-sin-humo-biocultura-madrid-2026/`: la URL del QR de la charla. Sirve el
 * castellano sin redirigir (ver `lib/charla.ts`), así que tiene su propio
 * layout raíz, sin la espera del hero de la home.
 */
export default function TalkRootLayout({ children }: LayoutProps<"/ia-sin-humo-biocultura-madrid-2026">) {
  const t = getDictionary("es");
  return (
    <html lang="es" className={fontVariables}>
      <body>
        <a
          href="#contenido"
          className="sr-only z-[100] rounded-[10px] bg-brand font-semibold text-cream no-underline focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:px-5 focus:py-3 hover:text-cream"
        >
          {t.skipLink}
        </a>
        {children}
      </body>
    </html>
  );
}
