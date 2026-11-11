import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import JsonLd from "../../components/JsonLd";
import MotionProvider from "../../components/MotionProvider";
import { bricolage, fontVariables, instrument } from "../fonts";
import { LOCALES, hasLocale } from "../../i18n/config";
import { getDictionary } from "../../i18n";
import { localeMetadata } from "../../i18n/metadata";
import { heroWaitScript } from "../../lib/heroWait";

export { viewport } from "../../i18n/metadata";

/** Fuentes que necesita el hero antes de mostrarse: titular y texto. */
const HERO_FONTS = [
  `700 1em ${bricolage.style.fontFamily}`,
  `400 1em ${instrument.style.fontFamily}`,
  `700 1em ${instrument.style.fontFamily}`,
];

/** Pantalla de carga hasta que el hero está listo: ver `lib/heroWait.ts`. */
const waitScript = heroWaitScript(HERO_FONTS);

// Un HTML estático por idioma; cualquier otro segmento es un 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return localeMetadata(lang);
}

export default async function LangLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    // `suppressHydrationWarning`: el script de la espera cambia un atributo de
    // `<html>` antes de hidratar.
    <html lang={lang} className={fontVariables} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: waitScript }} />
      </head>
      <body>
        <a
          href="#contenido"
          className="sr-only z-[100] rounded-[10px] bg-brand font-semibold text-cream no-underline focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:px-5 focus:py-3 hover:text-cream"
        >
          {t.skipLink}
        </a>
        <MotionProvider>{children}</MotionProvider>
        <JsonLd lang={lang} t={t} />
      </body>
    </html>
  );
}
