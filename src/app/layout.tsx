import type { Metadata } from "next";
import { Alegreya_SC, Courier_Prime, Space_Grotesk } from "next/font/google";
import "./globals.css";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const bodyFont = Courier_Prime({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const signatureFont = Alegreya_SC({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: ["700"],
});

const siteUrl = "https://pedrofm.dev";
const defaultTitle = "Pedro FM";
const defaultDescription =
  "Portfolio B2B de Pedro Fernandez Munoz para desarrollo de sistemas internos, integraciones y automatizacion con IA en Espana, Comunidad Valenciana, Alicante y Alcoy.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "Pedro FM | %s",
  },
  description: defaultDescription,
  applicationName: "Pedro FM - Portfolio B2B",
  keywords: [
    "desarrollo de software para empresas",
    "automatizacion de procesos",
    "integraciones empresariales",
    "sistemas internos",
    "desarrollo web b2b",
    "inteligencia artificial para negocios",
    "espana",
    "comunidad valenciana",
    "valencia",
    "alicante",
    "alcoy",
  ],
  authors: [
    {
      name: "Pedro Fernandez Munoz",
      url: siteUrl,
    },
  ],
  creator: "Pedro Fernandez Munoz",
  publisher: "Pedro Fernandez Munoz",
  category: "technology",
  other: {
    "geo.region": "ES-VC",
    "geo.placename": "Alcoy, Alicante, Comunidad Valenciana, Spain",
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName: "Pedro FM",
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: "/assets/pedro-fernandez.jpg",
        width: 1200,
        height: 630,
        alt: "Pedro Fernandez Munoz, desarrollo de sistemas internos para empresas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/assets/pedro-fernandez.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-ES">
      <body
        suppressHydrationWarning
        className={`${displayFont.variable} ${bodyFont.variable} ${signatureFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
