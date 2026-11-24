import { LOCALES, type Locale } from "../i18n/config";

/**
 * Charla «IA sin humo» (BioCultura Madrid 2026). La URL sin idioma es la del
 * QR de las diapositivas y sirve el castellano, sin redirigir: es el idioma de
 * la charla y de su público. Valenciano e inglés cuelgan de su idioma
 * (`/ca/…`, `/en/…`). `/es/…` no se enlaza nunca: Firebase la redirige a la
 * URL sin idioma (ver `firebase.json`).
 */
export const TALK_SLUG = "ia-sin-humo-biocultura-madrid-2026";

/** Subpáginas, en el orden en que salen en la charla. Mismo slug en los tres idiomas. */
export const TALK_RESOURCES = [
  "contexto-de-empresa",
  "encargos",
  "skills",
  "conectores",
  "privacidad",
  "greenwashing",
  "politica-de-uso",
  "fuentes",
] as const;
export type TalkResource = (typeof TALK_RESOURCES)[number];

export const isTalkResource = (value: string): value is TalkResource =>
  (TALK_RESOURCES as readonly string[]).includes(value);

/** Ruta de la página principal de la charla o de un recurso, con barra final. */
export function talkPath(lang: Locale, resource?: TalkResource) {
  const base = lang === "es" ? `/${TALK_SLUG}/` : `/${lang}/${TALK_SLUG}/`;
  return resource ? `${base}${resource}/` : base;
}

/** La misma página en los tres idiomas: para el selector y los `hreflang`. */
export function talkPaths(resource?: TalkResource) {
  return Object.fromEntries(LOCALES.map((locale) => [locale, talkPath(locale, resource)])) as Record<
    Locale,
    string
  >;
}

/** Descargas (PDF, ZIP de skills, .docx), generadas por `scripts/charla-downloads.sh`. */
export const TALK_DOWNLOADS = "/descargas/ia-sin-humo";

/** Fecha de la última revisión del contenido (datos legales incluidos). */
export const TALK_UPDATED = "2026-11-24";
