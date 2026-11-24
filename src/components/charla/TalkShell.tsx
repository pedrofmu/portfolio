import type { ReactNode } from "react";

import Footer from "../Footer";
import LanguageSwitcher from "../LanguageSwitcher";
import { containerClass } from "../ui";
import { localePath, type Locale } from "../../i18n/config";
import { getDictionary } from "../../i18n";
import { getTalkDictionary } from "../../i18n/charla";
import { talkPath, talkPaths, type TalkResource } from "../../lib/charla";

type TalkShellProps = {
  lang: Locale;
  /** Recurso que se está viendo; sin él, la página principal de la charla. */
  resource?: TalkResource;
  children: ReactNode;
};

/**
 * Cabecera, contenido y pie de las páginas de la charla. La cabecera es
 * estática y sencilla (la marca, el nombre de la charla y el idioma): quien
 * llega desde el QR quiere leer, no navegar por la web.
 */
export default function TalkShell({ lang, resource, children }: TalkShellProps) {
  const site = getDictionary(lang);
  const t = getTalkDictionary(lang);
  const hrefs = talkPaths(resource);

  return (
    <>
      {/* `#inicio`: destino del «Volver arriba» del pie. */}
      <header id="inicio" className="border-b border-line bg-paper print:hidden">
        <div className={`${containerClass} flex min-h-16 items-center justify-between gap-4 py-2`}>
          <div className="flex min-w-0 items-center gap-3">
            <a
              href={localePath(lang)}
              className="font-display text-[20px] font-extrabold whitespace-nowrap text-charcoal no-underline"
            >
              pedrofm<span className="text-brand">.</span>
            </a>
            <span aria-hidden="true" className="h-5 w-px shrink-0 bg-[#D6CFBF]" />
            <a
              href={talkPath(lang)}
              aria-current={resource ? undefined : "page"}
              className="inline-flex min-h-11 items-center truncate text-[15px] font-semibold text-[#5E6B64] no-underline transition-colors duration-200 hover:text-brand"
            >
              {t.ui.talkTitle}
            </a>
          </div>
          <LanguageSwitcher lang={lang} label={site.nav.language} hrefs={hrefs} />
        </div>
      </header>
      <main id="contenido" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <Footer lang={lang} t={site.footer} language={site.nav.language} newTab={site.newTab} hrefs={hrefs} />
    </>
  );
}
