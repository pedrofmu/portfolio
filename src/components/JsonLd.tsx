import { SITE } from "../lib/site";
import { localePath, type Locale } from "../i18n/config";
import type { Dictionary } from "../i18n";

/**
 * Datos estructurados del sitio en un único @graph. Cuatro nodos enlazados:
 *
 * - ProfessionalService: el negocio local (dirección, geo, zonas servidas y
 *   catálogo de servicios). Es lo que alimenta las búsquedas locales.
 * - Person: Pedro, como profesional detrás del negocio.
 * - WebSite: la web en sí, para asociar nombre y editor.
 * - WebPage: la home del idioma, que ata los tres anteriores. Su `mainEntity`
 *   apunta a Person: es la declaración de que esta página trata sobre Pedro, y
 *   la señal directa para quien busca su nombre.
 *
 * Negocio, persona y web son los mismos en los cuatro idiomas (mismo `@id`);
 * solo cambian sus textos y la WebPage, que es una por idioma.
 *
 * No se marcan opiniones: Google no admite reseñas autopublicadas sobre el
 * propio negocio para resultados enriquecidos. Tampoco hay FAQPage: no existe
 * el contenido visible que lo respalde, y marcarlo sin él lo incumple.
 */

const businessId = `${SITE.url}/#business`;
const personId = `${SITE.url}/#pedro`;
const websiteId = `${SITE.url}/#website`;

function buildGraph(lang: Locale, t: Dictionary) {
  const { jsonLd } = t;
  const pageUrl = `${SITE.url}${localePath(lang)}`;
  const webpageId = `${pageUrl}#webpage`;

  /**
   * Zona local de más cercana a más amplia, con el nombre en el idioma de la
   * página (valenciano en `ca`, castellano en el resto) y el otro como
   * `alternateName`; el radio del trabajo en persona; y en remoto, el país y la UE.
   */
  const areaServed = [
    ...SITE.areaServed.map((place) => {
      const [name, other] = lang === "ca" ? [place.ca, place.es] : [place.es, place.ca];
      return { "@type": place.type, name, ...(other !== name ? { alternateName: other } : {}) };
    }),
    {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: SITE.geo.latitude,
        longitude: SITE.geo.longitude,
      },
      geoRadius: SITE.serviceRadius,
    },
    { "@type": "Country", name: jsonLd.country },
    { "@type": "Place", name: jsonLd.europe },
  ];

  /** Perfiles del negocio; la ficha de Google, en cuanto exista. */
  const sameAs = [
    SITE.linkedin,
    SITE.medium,
    ...(SITE.googleBusinessProfile ? [SITE.googleBusinessProfile] : []),
  ];

  return {
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
        description: t.meta.description,
        serviceType: jsonLd.serviceType,
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
        ...(SITE.googleBusinessProfile ? { hasMap: SITE.googleBusinessProfile } : {}),
        knowsLanguage: SITE.languages,
        sameAs,
        knowsAbout: jsonLd.knowsAbout,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: jsonLd.catalogName,
          itemListElement: jsonLd.services.map((service) => ({
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
        jobTitle: jsonLd.jobTitle,
        description: jsonLd.personDescription,
        knowsLanguage: SITE.languages,
        // Persona + profesión + Alcoy en un solo nodo: justo la intersección de
        // las dos búsquedas que interesan.
        hasOccupation: {
          "@type": "Occupation",
          name: jsonLd.jobTitle,
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
        inLanguage: lang,
        description: t.meta.description,
        publisher: { "@id": businessId },
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: pageUrl,
        name: t.meta.title,
        description: t.meta.description,
        inLanguage: lang,
        // La misma fecha que el `lastModified` del sitemap: una sola fuente.
        dateModified: SITE.contentUpdated,
        isPartOf: { "@id": websiteId },
        about: { "@id": businessId },
        mainEntity: { "@id": personId },
        primaryImageOfPage: `${SITE.url}/opengraph-image.png`,
      },
    ],
  };
}

export default function JsonLd({ lang, t }: { lang: Locale; t: Dictionary }) {
  return (
    <script
      type="application/ld+json"
      // El JSON es estático y lo generamos nosotros: no hay entrada de usuario.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildGraph(lang, t)) }}
    />
  );
}
