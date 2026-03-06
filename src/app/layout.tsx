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

export const metadata: Metadata = {
  title: "Pedro FM | Sistemas internos y automatizacion para empresas",
  description:
    "Portfolio B2B de Pedro Fernandez Munoz para desarrollo de sistemas internos, integraciones y automatizacion con IA.",
  openGraph: {
    title: "Pedro FM | Soluciones B2B para automatizar procesos",
    description:
      "Optimiza, automatiza y agiliza tu empresa con software interno, IA aplicada e integraciones.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${signatureFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
