import type { Metadata } from "next";
import { About } from "@/components/about";
import { CaseStudies } from "@/components/case-studies";
import { ContactCta } from "@/components/contact-cta";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Solutions } from "@/components/solutions";

const siteUrl = "https://pedrofm.dev";

export const metadata: Metadata = {
  title: "Sistemas internos y automatizacion para empresas",
  description:
    "Desarrollo de sistemas internos, herramientas con IA e integraciones para empresas en Espana, Comunidad Valenciana, Alicante y Alcoy.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#pedro-fm`,
        name: "Pedro Fernandez Munoz",
        url: siteUrl,
        image: `${siteUrl}/assets/pedro-fernandez.jpg`,
        jobTitle: "Desarrollador de sistemas empresariales",
        email: "mailto:hola@pedrofm.dev",
        sameAs: [
          "https://github.com/pedrofmu",
          "https://www.linkedin.com/in/pedro-fern%C3%A1ndez-mu%C3%B1oz-4148a9287/",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#servicios`,
        name: "Pedro FM",
        url: siteUrl,
        description:
          "Servicios de desarrollo de software interno, integraciones y automatizacion con IA para empresas.",
        areaServed: [
          {
            "@type": "Country",
            name: "Spain",
          },
          {
            "@type": "AdministrativeArea",
            name: "Comunidad Valenciana",
          },
          {
            "@type": "AdministrativeArea",
            name: "Alicante",
          },
          {
            "@type": "City",
            name: "Alcoy",
          },
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Alcoy",
          addressRegion: "Alicante",
          addressCountry: "ES",
        },
        serviceType: [
          "Sistemas internos",
          "Integraciones de software",
          "Automatizacion de procesos",
          "Herramientas con inteligencia artificial",
        ],
        founder: {
          "@id": `${siteUrl}/#pedro-fm`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Pedro FM",
        inLanguage: "es-ES",
        publisher: {
          "@id": `${siteUrl}/#pedro-fm`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <CaseStudies />
        <About />
        <ContactCta />
      </main>
    </>
  );
}
