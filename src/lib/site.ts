/**
 * Datos del sitio en un solo sitio: los usan los metadatos, el sitemap,
 * el robots.txt y el JSON-LD, y así no se desincronizan entre ficheros.
 *
 * Enfoque: pymes de toda España que se digitalizan, con Alcoy (Alicante) como
 * base y señal local, y los sectores de los casos reales como verticales.
 */
export const SITE = {
  url: "https://pedrofm.dev",
  name: "pedrofm",
  legalName: "Pedro Fernández Muñoz",

  /**
   * `<title>` completo: primero el servicio, que es lo que busca quien no te
   * conoce, y el nombre detrás para las búsquedas de marca. Sin ciudad: se
   * trabaja con pymes de toda España, y Alcoy ya está en la descripción, el
   * contenido y el JSON-LD. 60 caracteres, así que entra entero en el SERP.
   */
  title: "Desarrollo de software a medida para pymes · Pedro Fernández",
  /** 153 caracteres: por debajo del corte del SERP, con la llamada gratis dentro. */
  description:
    "Desarrollador de software freelance para pymes de toda España, desde Alcoy (Alicante). Programas internos, automatizaciones e IA. Primera llamada gratis.",

  /** Partes del nombre y variantes: las consume el nodo Person del JSON-LD. */
  givenName: "Pedro",
  familyName: "Fernández Muñoz",
  alternateNames: ["Pedro Fernández Muñoz", "Pedro Fernández", "pedrofm.dev"],
  jobTitle: "Desarrollador de software freelance",

  /**
   * Última vez que cambió el contenido de verdad, para el `lastModified` del
   * sitemap. Se actualiza a mano: un `new Date()` por build le enseñaría a
   * Google a ignorar el dato.
   */
  contentUpdated: "2026-09-28",

  email: "hola@pedrofm.dev",
  phone: "+34673314676",
  linkedin:
    "https://www.linkedin.com/in/pedro-fern%C3%A1ndez-mu%C3%B1oz-4148a9287/",
  medium: "https://medium.com/@pedrofm",

  /**
   * Dirección y coordenadas de Alcoy: base del bloque LocalBusiness. Sin código
   * postal: es un negocio sin local abierto al público y no aparece en la web.
   */
  address: {
    locality: "Alcoy",
    region: "Alicante",
    country: "ES",
  },
  geo: { latitude: 38.6985, longitude: -0.4735 },

  /**
   * Zonas que se declaran servidas, de más cercana a más amplia. Por encima de
   * todas, `country`: se trabaja en remoto con pymes de cualquier parte.
   */
  areaServed: [
    "Alcoy",
    "Alcoi",
    "Alicante",
    "Comunidad Valenciana",
    "Comarca de l'Alcoià",
    "Comarca del Comtat",
  ],
  country: "España",

  /** Idiomas de trabajo (BCP-47), declarados como atributo profesional. */
  languages: ["es", "ca", "en", "fr"],
} as const;
