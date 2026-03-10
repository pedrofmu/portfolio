import type { Metadata } from "next";
import { Alegreya_SC, Courier_Prime, Space_Grotesk } from "next/font/google";
import { siteConfig } from "@/lib/seo";
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

const defaultTitle = "Pedro FM";
  "Portfolio B2B de Pedro Fernandez Munoz para desarrollo de sistemas internos, integraciones y automatizacion con IA en Espana, Comunidad Valenciana, Alicante y Alcoy.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultTitle,
    template: "Pedro FM | %s",
  },
  description: siteConfig.description,
  applicationName: `${siteConfig.name} - Portfolio B2B`,
  alternates: {
    canonical: "/",
  },
  keywords: [...siteConfig.keywords],
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  category: "technology",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "geo.region": "ES-VC",
    "geo.placename": "Alcoy, Alicante, Comunidad Valenciana, Spain",
  },
  openGraph: {
    title: defaultTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: siteConfig.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: siteConfig.description,
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
    <html lang={siteConfig.language}>
      <body
        suppressHydrationWarning
        className={`${displayFont.variable} ${bodyFont.variable} ${signatureFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
