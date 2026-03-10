import type { Metadata } from "next";
import { About } from "@/components/about";
import { CaseStudies } from "@/components/case-studies";
import { ContactCta } from "@/components/contact-cta";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Solutions } from "@/components/solutions";
import { caseStudies, solutions } from "@/lib/data";
import { absoluteUrl, createPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Sistemas internos e IA para empresas | Pedro FM",
  description:
    "Pedro Fernandez Munoz desarrolla sistemas internos, automatizaciones e integraciones con IA para empresas que necesitan eliminar tareas manuales y crecer con orden.",
  path: "/",
  keywords: [
    "automatizacion e IA para empresas",
    "integraciones con IA",
    "desarrollo de sistemas internos",
  ],
});

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#pedro-fm`,
        name: siteConfig.author,
        url: siteConfig.url,
        image: absoluteUrl("/assets/pedro-fernandez.jpg"),
        jobTitle: "Desarrollador de sistemas empresariales",
        email: `mailto:${siteConfig.email}`,
        sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#servicios`,
        name: siteConfig.name,
        url: siteConfig.url,
        description:
          "Servicios de desarrollo de software interno, integraciones y automatizacion con IA para empresas.",
        email: siteConfig.email,
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
          "@id": `${siteConfig.url}/#pedro-fm`,
        },
        sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
        contactPoint: {
          "@type": "ContactPoint",
          email: siteConfig.email,
          contactType: "sales",
          areaServed: "ES",
          availableLanguage: ["es", "en"],
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios de Pedro FM",
          itemListElement: solutions.map((solution) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: solution.title.replace(/\n/g, " "),
              description: solution.description,
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: "es-ES",
        publisher: {
          "@id": `${siteConfig.url}/#pedro-fm`,
        },
        potentialAction: {
          "@type": "ContactAction",
          target: `mailto:${siteConfig.email}`,
          name: "Solicitar una consultoria inicial",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: "Sistemas internos, automatizacion e IA para empresas",
        description:
          "Landing page de Pedro FM para servicios de software interno, integraciones empresariales y automatizacion con IA.",
        inLanguage: "es-ES",
        isPartOf: {
          "@id": `${siteConfig.url}/#website`,
        },
        about: {
          "@id": `${siteConfig.url}/#servicios`,
        },
        primaryImageOfPage: {
          "@id": `${siteConfig.url}/#primaryimage`,
        },
      },
      {
        "@type": "ImageObject",
        "@id": `${siteConfig.url}/#primaryimage`,
        url: absoluteUrl("/assets/pedro-fernandez.jpg"),
        contentUrl: absoluteUrl("/assets/pedro-fernandez.jpg"),
        caption: "Pedro Fernandez Munoz",
      },
      {
        "@type": "ItemList",
        "@id": `${siteConfig.url}/#casos-de-exito`,
        name: "Casos de exito destacados",
        itemListElement: caseStudies.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.title,
          url: item.link,
          description: item.description,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: siteConfig.url,
          },
        ],
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
