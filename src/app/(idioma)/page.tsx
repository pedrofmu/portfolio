import LanguageLink from "../../components/LanguageLink";
import { LOCALES, LOCALE_NAMES } from "../../i18n/config";
import { getDictionary } from "../../i18n";

/**
 * Lo que se ve en `/` si el script del layout no redirige (sin JS): los cuatro
 * idiomas, cada uno escrito en sí mismo y con una línea de lo que encontrará.
 */
export default function LanguagePicker() {
  return (
    <main className="grid min-h-[100svh] place-items-center bg-cream px-5 py-14">
      <div className="w-full max-w-[560px]">
        <h1 className="m-0 font-display text-[clamp(2.2rem,6vw,3.2rem)] leading-[1.05] font-bold tracking-[-0.04em] text-[#171915] text-balance">
          pedrofm<span className="text-brand">.</span>
        </h1>
        <ul className="mt-9 mb-0 list-none border-b border-line p-0">
          {LOCALES.map((locale) => (
            <li key={locale} className="border-t border-line">
              <LanguageLink
                locale={locale}
                className="group flex min-h-11 flex-col gap-1 py-5 no-underline"
              >
                <span className="font-display text-[clamp(24px,2.6vw,30px)] leading-[1.15] font-semibold tracking-[-0.025em] text-[#171915] transition-colors duration-200 group-hover:text-brand">
                  {LOCALE_NAMES[locale]}
                </span>
                <span className="text-[16px] leading-[1.5] text-ink-soft text-pretty">
                  {getDictionary(locale).footer.tagline}
                </span>
              </LanguageLink>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
