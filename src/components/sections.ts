/** Secciones del menú, en orden. El texto de cada una está en el diccionario. */
export const SECTION_IDS = [
  "servicios",
  "casos",
  "opiniones",
  "donde-me-has-visto",
  "proceso",
  "sobre-mi",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];
