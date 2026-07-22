import { SITE } from "../lib/site";

/**
 * Datos estructurados del sitio en un único @graph. Tres nodos enlazados:
 *
 * - ProfessionalService: el negocio local (dirección, geo, zonas servidas y
 *   catálogo de servicios). Es lo que alimenta las búsquedas locales.
 * - Person: Pedro, como profesional detrás del negocio.
 * - WebSite: la web en sí, para asociar nombre y editor.
 *
 * No se marcan opiniones: Google no admite reseñas autopublicadas sobre el
 * propio negocio para resultados enriquecidos.
 */

const businessId = `${SITE.url}/#business`;
const personId = `${SITE.url}/#pedro`;
const websiteId = `${SITE.url}/#website`;

const services = [
  {
    name: "Programas internos a medida",
    description:
      "Aplicaciones de gestión para inventario, tareas y proyectos que sustituyen los Excels y los procesos manuales de la empresa.",
  },
  {
    name: "Herramientas con inteligencia artificial",
    description:
      "Chatbots de atención al cliente, análisis de datos y asistentes que responden y preparan el trabajo del equipo.",
  },
  {
    name: "Automatizaciones e integraciones",
    description:
      "Conexión de CRM, facturación, email, pagos y APIs para que los datos se muevan solos y desaparezca el trabajo manual.",
  },
];

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": businessId,
      name: SITE.name,
      legalName: SITE.legalName,
      url: SITE.url,
      email: SITE.email,
      telephone: SITE.phone,
      image: `${SITE.url}/opengraph-image.png`,
      description: SITE.description,
      priceRange: "€€",
      founder: { "@id": personId },
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.address.locality,
        addressRegion: SITE.address.region,
        postalCode: SITE.address.postalCode,
        addressCountry: SITE.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: SITE.geo.latitude,
        longitude: SITE.geo.longitude,
      },
      areaServed: SITE.areaServed.map((name) => ({
        "@type": "AdministrativeArea",
        name,
      })),
      knowsLanguage: SITE.languages,
      sameAs: [SITE.linkedin, SITE.medium],
      knowsAbout: [
        "Digitalización de pymes",
        "Software de gestión a medida",
        "Automatización de procesos",
        "Integración de sistemas",
        "Inteligencia artificial aplicada a negocio",
        "Desarrollo web",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de desarrollo de software para pymes",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            description: service.description,
            provider: { "@id": businessId },
            areaServed: SITE.areaServed.map((name) => ({
              "@type": "AdministrativeArea",
              name,
            })),
          },
        })),
      },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: SITE.legalName,
      url: SITE.url,
      email: SITE.email,
      telephone: SITE.phone,
      image: `${SITE.url}/assets/pedro-fernandez.jpg`,
      jobTitle: "Desarrollador de software freelance",
      description:
        "Desarrollador de software freelance en Alcoy (Alicante). Ayuda a pymes a digitalizar sus operaciones con programas internos, automatizaciones e IA.",
      knowsLanguage: SITE.languages,
      homeLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.address.locality,
          addressRegion: SITE.address.region,
          addressCountry: SITE.address.country,
        },
      },
      sameAs: [SITE.linkedin, SITE.medium],
      worksFor: { "@id": businessId },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: SITE.url,
      name: SITE.name,
      inLanguage: "es-ES",
      description: SITE.description,
      publisher: { "@id": businessId },
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      // El JSON es estático y lo generamos nosotros: no hay entrada de usuario.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
