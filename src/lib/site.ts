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
  title: "Desarrollo de software a medida para pymes en Alcoy y Alicante",
  description:
    "Desarrollador freelance en Alcoy (Alicante). Software a medida para pymes: programas internos, automatizaciones e IA. Presupuesto cerrado y primera llamada gratis.",
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
