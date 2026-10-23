import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import JsonLd from "../../components/JsonLd";
import MotionProvider from "../../components/MotionProvider";
import { bricolage, fontVariables, instrument } from "../fonts";
import { LOCALES, hasLocale } from "../../i18n/config";
import { getDictionary } from "../../i18n";
import { localeMetadata } from "../../i18n/metadata";

export { viewport } from "../../i18n/metadata";

/** Fuentes que necesita el hero antes de mostrarse: titular y texto. */
const HERO_FONTS = [
  `700 1em ${bricolage.style.fontFamily}`,
  `400 1em ${instrument.style.fontFamily}`,
  `700 1em ${instrument.style.fontFamily}`,
];

/**
 * Espera del hero: mientras `<html>` tenga `data-hero-wait`, el hero no se ve
 * y sus animaciones esperan en el primer fotograma (ver globals.css). Con mala
 * conexión el HTML llega a trozos y el navegador pinta lo que tiene: sin esto,
 * cada cresta y cada bloque de texto arrancaba al llegar el suyo, a saltos.
 * Se quita cuando el hero está entero (ya existe lo que va detrás) y sus
 * fuentes han cargado, o a los 3 s como mucho, y todo arranca a la vez. Sin JS
 * no se pone y el hero se ve como siempre.
 */
const heroWaitScript = `(function(){var r=document.documentElement,show=function(){r.removeAttribute("data-hero-wait")};r.setAttribute("data-hero-wait","");setTimeout(show,3000);(function wait(){var h=document.getElementById("inicio");if(!h||!(h.nextElementSibling||document.readyState!=="loading"))return requestAnimationFrame(wait);try{Promise.all(${JSON.stringify(HERO_FONTS)}.map(function(f){return document.fonts.load(f)})).then(show,show)}catch(e){show()}})()})()`;

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
        <script dangerouslySetInnerHTML={{ __html: heroWaitScript }} />
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
