/**
 * Datos del sitio en un solo sitio: los usan los metadatos, el sitemap,
 * el robots.txt y el JSON-LD, y así no se desincronizan entre ficheros.
 *
 * Enfoque: SEO local (Alcoy · Alicante · Comunitat Valenciana) para pymes
 * que se digitalizan, con los sectores de los casos reales como verticales.
 */
export const SITE = {
  url: "https://pedrofm.dev",
  name: "pedrofm",
  legalName: "Pedro Fernández Muñoz",

  /**
   * `<title>` completo, ya con el nombre propio delante: para una búsqueda de
   * nombre es la señal más fuerte que tiene Google. 55 caracteres, así que
   * entra entero en el SERP y ni el nombre ni "Alcoy" se cortan.
   *
   * Variante larga, si algún día se prefiere aceptar el recorte (~75 car.):
   * "Pedro Fernández Muñoz · Desarrollo de software a medida en Alcoy y Alicante"
   */
  title: "Pedro Fernández Muñoz · Desarrollo de software en Alcoy",
  description:
    "Pedro Fernández Muñoz, desarrollador de software freelance en Alcoy (Alicante). Software a medida para pymes: programas internos, automatizaciones e IA. Primera llamada gratis.",

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
  contentUpdated: "2026-08-04",

  email: "hola@pedrofm.dev",
  phone: "+34673314676",
  linkedin:
    "https://www.linkedin.com/in/pedro-fern%C3%A1ndez-mu%C3%B1oz-4148a9287/",
  medium: "https://medium.com/@pedrofm",

  /** Dirección y coordenadas de Alcoy: base del bloque LocalBusiness. */
  address: {
    locality: "Alcoy",
    region: "Alicante",
    postalCode: "03801",
    country: "ES",
  },
  geo: { latitude: 38.6985, longitude: -0.4735 },

  /** Zonas que se declaran servidas, de más cercana a más amplia. */
  areaServed: [
    "Alcoy",
    "Alcoi",
    "Alicante",
    "Comunidad Valenciana",
    "Comarca de l'Alcoià",
    "Comarca del Comtat",
  ],

  /** Idiomas de trabajo (BCP-47), declarados como atributo profesional. */
  languages: ["es", "ca", "en", "fr"],
} as const;
