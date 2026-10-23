import { ca } from "./dictionaries/ca";
import { en } from "./dictionaries/en";
import { es, type Dictionary } from "./dictionaries/es";
import { fr } from "./dictionaries/fr";
import type { Locale } from "./config";

export type { Dictionary };

/**
 * Solo para componentes de servidor: los de cliente reciben sus textos por
 * props y nunca importan este módulo, para no cargar los cuatro idiomas en JS.
 */
const DICTIONARIES: Record<Locale, Dictionary> = { es, ca, en, fr };

export const getDictionary = (locale: Locale) => DICTIONARIES[locale];
