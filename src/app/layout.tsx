import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import JsonLd from "../components/JsonLd";
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
    <html lang="es" className={`${bricolage.variable} ${instrument.variable}`}>
      <body>
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
