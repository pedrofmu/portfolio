/**
 * Datos del sitio en un solo sitio: los usan los metadatos, el sitemap,
 * el robots.txt y el JSON-LD, y así no se desincronizan entre ficheros.
 * Solo lo que no depende del idioma: título, descripción y demás textos están
 * en los diccionarios (`src/i18n/dictionaries`).
 *
 * Enfoque: pymes que se digitalizan, con Alcoy (Alicante) como base y señal
 * local, y los sectores de los casos reales como verticales. El público de
 * cada idioma, en `src/i18n/config.ts`.
 */
export const SITE = {
  url: "https://pedrofm.dev",
  name: "pedrofm",
  legalName: "Pedro Fernández Muñoz",

  /** Partes del nombre y variantes: las consume el nodo Person del JSON-LD. */
  givenName: "Pedro",
  familyName: "Fernández Muñoz",
  alternateNames: ["Pedro Fernández Muñoz", "Pedro Fernández", "pedrofm.dev"],

  /**
   * Última vez que cambió el contenido de verdad, para el `lastModified` del
   * sitemap. Se actualiza a mano: un `new Date()` por build le enseñaría a
   * Google a ignorar el dato.
   */
  contentUpdated: "2026-10-23",

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
   * Zona en la que se trabaja en persona: las comarcas de alrededor de Alcoy,
   * a unos 60 km como mucho (`serviceRadius`). Es la señal local del JSON-LD
   * para las búsquedas de la zona; el título no lleva ciudad porque se trabaja
   * con toda España. Ciudades de más cercana a más lejana, luego comarcas y
   * regiones. Cada lugar con su nombre en castellano y en valenciano: se busca
   * de las dos formas («Alcoy» y «Alcoi», «Elche» y «Elx»). Por encima de
   * todas, el país y la UE (con su nombre en el diccionario): en remoto.
   */
  areaServed: [
    // L'Alcoià y el Comtat
    { type: "City", es: "Alcoy", ca: "Alcoi" },
    { type: "City", es: "Cocentaina", ca: "Cocentaina" },
    { type: "City", es: "Muro de Alcoy", ca: "Muro d'Alcoi" },
    { type: "City", es: "Banyeres de Mariola", ca: "Banyeres de Mariola" },
    { type: "City", es: "Ibi", ca: "Ibi" },
    { type: "City", es: "Onil", ca: "Onil" },
    { type: "City", es: "Castalla", ca: "Castalla" },
    // La Vall d'Albaida
    { type: "City", es: "Onteniente", ca: "Ontinyent" },
    { type: "City", es: "Bocairente", ca: "Bocairent" },
    { type: "City", es: "Albaida", ca: "Albaida" },
    // L'Alacantí
    { type: "City", es: "Jijona", ca: "Xixona" },
    { type: "City", es: "Alicante", ca: "Alacant" },
    { type: "City", es: "San Vicente del Raspeig", ca: "Sant Vicent del Raspeig" },
    { type: "City", es: "San Juan de Alicante", ca: "Sant Joan d'Alacant" },
    { type: "City", es: "Muchamiel", ca: "Mutxamel" },
    // El Vinalopó
    { type: "City", es: "Villena", ca: "Villena" },
    { type: "City", es: "Elda", ca: "Elda" },
    { type: "City", es: "Petrel", ca: "Petrer" },
    { type: "City", es: "Novelda", ca: "Novelda" },
    { type: "City", es: "Elche", ca: "Elx" },
    // Comarcas y regiones
    { type: "AdministrativeArea", es: "Hoya de Alcoy", ca: "l'Alcoià" },
    { type: "AdministrativeArea", es: "Condado de Cocentaina", ca: "el Comtat" },
    { type: "AdministrativeArea", es: "Valle de Albaida", ca: "la Vall d'Albaida" },
    { type: "AdministrativeArea", es: "Campo de Alicante", ca: "l'Alacantí" },
    { type: "AdministrativeArea", es: "Alto Vinalopó", ca: "l'Alt Vinalopó" },
    { type: "AdministrativeArea", es: "Medio Vinalopó", ca: "el Vinalopó Mitjà" },
    { type: "AdministrativeArea", es: "Bajo Vinalopó", ca: "el Baix Vinalopó" },
    { type: "AdministrativeArea", es: "Provincia de Alicante", ca: "Província d'Alacant" },
    { type: "AdministrativeArea", es: "Comunidad Valenciana", ca: "Comunitat Valenciana" },
  ],
  /** Radio del trabajo en persona alrededor de `geo`, en metros: de Alcoy a Elche hay unos 52 km. */
  serviceRadius: 60000,

  /**
   * URL de Google Maps de la ficha de Google Business Profile. Todavía no
   * existe; cuando exista, el JSON-LD la enlaza (`sameAs` y `hasMap`) para que
   * Google asocie la ficha con la web. Nombre, teléfono y zona, iguales que aquí.
   */
  googleBusinessProfile: null as string | null,

  /** Idiomas de trabajo (BCP-47), declarados como atributo profesional. */
  languages: ["es", "ca", "en", "fr"],
} as const;
