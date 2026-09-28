import { SITE } from "../lib/site";

/**
 * Datos estructurados del sitio en un único @graph. Cuatro nodos enlazados:
 *
 * - ProfessionalService: el negocio local (dirección, geo, zonas servidas y
 *   catálogo de servicios). Es lo que alimenta las búsquedas locales.
 * - Person: Pedro, como profesional detrás del negocio.
 * - WebSite: la web en sí, para asociar nombre y editor.
 * - WebPage: la home, que ata los tres anteriores. Su `mainEntity` apunta a
 *   Person: es la declaración de que esta página trata sobre Pedro, y la señal
 *   directa para quien busca su nombre.
 *
 * No se marcan opiniones: Google no admite reseñas autopublicadas sobre el
 * propio negocio para resultados enriquecidos. Tampoco hay FAQPage: no existe
 * el contenido visible que lo respalde, y marcarlo sin él lo incumple.
 */

const businessId = `${SITE.url}/#business`;
const personId = `${SITE.url}/#pedro`;
const websiteId = `${SITE.url}/#website`;
const webpageId = `${SITE.url}/#webpage`;

/** Zonas locales de más cercana a más amplia, y al final el país entero. */
const areaServed = [
  ...SITE.areaServed.map((name) => ({ "@type": "AdministrativeArea", name })),
  { "@type": "Country", name: SITE.country },
];

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
      alternateName: SITE.legalName,
      legalName: SITE.legalName,
      url: SITE.url,
      email: SITE.email,
      telephone: SITE.phone,
      image: `${SITE.url}/opengraph-image.png`,
      description: SITE.description,
      serviceType: "Desarrollo de software a medida",
      priceRange: "€€",
      founder: { "@id": personId },
      employee: { "@id": personId },
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.address.locality,
        addressRegion: SITE.address.region,
        addressCountry: SITE.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: SITE.geo.latitude,
        longitude: SITE.geo.longitude,
      },
      areaServed,
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
            areaServed,
          },
        })),
      },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: SITE.legalName,
      // Mucha gente busca solo con el primer apellido.
      alternateName: "Pedro Fernández",
      givenName: SITE.givenName,
      familyName: SITE.familyName,
      url: SITE.url,
      mainEntityOfPage: { "@id": webpageId },
      email: SITE.email,
      telephone: SITE.phone,
      image: `${SITE.url}/assets/pedro-fernandez.webp`,
      jobTitle: SITE.jobTitle,
      description:
        "Desarrollador de software freelance en Alcoy (Alicante). Ayuda a pymes de toda España a digitalizar sus operaciones con programas internos, automatizaciones e IA.",
      knowsLanguage: SITE.languages,
      // Persona + profesión + Alcoy en un solo nodo: justo la intersección de
      // las dos búsquedas que interesan.
      hasOccupation: {
        "@type": "Occupation",
        name: SITE.jobTitle,
        occupationLocation: {
          "@type": "City",
          name: SITE.address.locality,
        },
      },
      workLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.address.locality,
          addressRegion: SITE.address.region,
          addressCountry: SITE.address.country,
        },
      },
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
      // Ata el dominio con el nombre propio y sus variantes.
      alternateName: SITE.alternateNames,
      inLanguage: "es-ES",
      description: SITE.description,
      publisher: { "@id": businessId },
    },
    {
      "@type": "WebPage",
      "@id": webpageId,
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
      inLanguage: "es-ES",
      // La misma fecha que el `lastModified` del sitemap: una sola fuente.
      dateModified: SITE.contentUpdated,
      isPartOf: { "@id": websiteId },
      about: { "@id": businessId },
      mainEntity: { "@id": personId },
      primaryImageOfPage: `${SITE.url}/opengraph-image.png`,
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
