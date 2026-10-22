import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import JsonLd from "../components/JsonLd";
import MotionProvider from "../components/MotionProvider";
import { SITE } from "../lib/site";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f7263",
};

export const metadata: Metadata = {
  // Necesario para que las URLs relativas de OG/canonical se resuelvan absolutas.
  metadataBase: new URL(SITE.url),
  // `SITE.title` ya incluye el nombre propio: no se le concatena la marca.
  title: {
    default: SITE.title,
    template: `%s | ${SITE.legalName}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName, url: SITE.url }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  // `alternates.canonical` y `robots` viven en `page.tsx`: puestos aquí los
  // heredaba también el 404, que acababa con `index, follow` y canonical a la home.
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // `suppressHydrationWarning`: el script de la espera cambia un atributo de
    // `<html>` antes de hidratar.
    <html
      lang="es"
      className={`${bricolage.variable} ${instrument.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: heroWaitScript }} />
      </head>
      <body>
        <a
          href="#contenido"
          className="sr-only z-[100] rounded-[10px] bg-brand font-semibold text-cream no-underline focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:px-5 focus:py-3 hover:text-cream"
        >
          Saltar al contenido
        </a>
        <MotionProvider>{children}</MotionProvider>
        <JsonLd />
      </body>
    </html>
  );
}
