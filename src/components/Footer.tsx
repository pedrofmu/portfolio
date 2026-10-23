import { SITE } from "../lib/site";
import { LOCALES, LOCALE_NAMES, type Locale } from "../i18n/config";
import type { Dictionary } from "../i18n";
import LanguageLink from "./LanguageLink";

type FooterProps = {
  lang: Locale;
  t: Dictionary["footer"];
  /** «Idioma», para nombrar la lista de idiomas. */
  language: string;
  /** «(se abre en una pestaña nueva)» para los enlaces externos. */
  newTab: string;
};

export default function Footer({ lang, t, language, newTab }: FooterProps) {
  return (
    <footer className="border-t border-[#E7E0D2] bg-[#F3EDE1] px-6 pt-[clamp(48px,7vw,72px)] pb-8 max-[620px]:px-5">
      <div className="mx-auto flex max-w-[1080px] flex-col gap-9">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-8">
          <div className="flex flex-col gap-[10px]">
            <div className="font-display text-[22px] font-extrabold">
              pedrofm<span className="text-brand">.</span>
            </div>
            <p className="m-0 max-w-[280px] text-[14.5px] leading-[1.6] text-[#5C6B64]">
              {t.tagline}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="m-0 text-[14px] font-semibold text-[#5C6B64]">
              {t.contact}
            </h2>
            <a href={`mailto:${SITE.email}`} className="text-[14.5px] font-semibold no-underline">
              {SITE.email}
            </a>
            <a href="tel:+34673314676" className="text-[14.5px] font-semibold no-underline">
              +34 673 31 46 76
            </a>
            <a
              href="https://pedrofm.dev"
              target="_blank"
              rel="noopener"
              className="text-[14.5px] font-semibold no-underline"
            >
              pedrofm.dev
              <span className="sr-only"> {newTab}</span>
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener"
              className="text-[14.5px] font-semibold no-underline"
            >
              LinkedIn
              <span className="sr-only"> {newTab}</span>
            </a>
            {/* Los idiomas de trabajo son también los de la web: cada uno lleva a
                su versión, con el actual marcado en tinta. */}
            <nav aria-label={language} className="mt-1">
              <ul className="m-0 flex list-none flex-wrap gap-x-4 p-0">
                {LOCALES.map((locale) => (
                  <li key={locale}>
                    <LanguageLink
                      locale={locale}
                      current={locale === lang}
                      className="inline-flex min-h-11 items-center text-[13.5px] font-semibold text-green underline decoration-transparent underline-offset-4 transition-colors duration-200 hover:text-green-dark hover:decoration-current aria-[current=page]:text-[#5F6E67]"
                    >
                      {LOCALE_NAMES[locale]}
                    </LanguageLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="m-0 text-[14px] font-semibold text-[#5C6B64]">
              {t.legalTitle}
            </h2>
            <p className="m-0 text-[12.5px] leading-[1.65] text-[#5F6E67]">
              {t.legal}{" "}
              <a href={`mailto:${SITE.email}`} className="font-semibold">
                {SITE.email}
              </a>
              .
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-[10px] border-t border-[#E2DAC9] pt-5 text-[13px] text-[#5F6E67] max-[620px]:flex-col max-[620px]:items-start">
          <div>© 2026 {SITE.legalName} · {t.place}</div>
          <a href="#inicio" className="font-semibold no-underline">
            {t.backToTop} <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
