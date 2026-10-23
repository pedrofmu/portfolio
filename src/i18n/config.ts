/**
 * Idiomas del sitio. Sin diccionarios: este fichero lo importan también los
 * componentes de cliente, y los textos no deben acabar en su bundle.
 *
 * Cada idioma tiene su público (ver DESIGN.md, «Copy»): es, pymes de toda
 * España; ca, pymes valencianas, con trato en persona; en y fr, empresas de
 * fuera que contratan en remoto y negocios extranjeros instalados en España.
 */
export const LOCALES = ["es", "ca", "en", "fr"] as const;
export type Locale = (typeof LOCALES)[number];

/** El que se sirve si el navegador no pide ninguno de los nuestros. */
export const DEFAULT_LOCALE: Locale = "en";

export const hasLocale = (value: string): value is Locale =>
  (LOCALES as readonly string[]).includes(value);

/** Cada idioma escrito en sí mismo: así lo reconoce quien lo habla. */
export const LOCALE_NAMES: Record<Locale, string> = {
  es: "Español",
  ca: "Valencià",
  en: "English",
  fr: "Français",
};

/** Open Graph usa `idioma_PAÍS`. El inglés es británico: el público es europeo. */
export const OG_LOCALES: Record<Locale, string> = {
  es: "es_ES",
  ca: "ca_ES",
  en: "en_GB",
  fr: "fr_FR",
};

/** Las demos están grabadas en dos idiomas: castellano para es y ca, inglés para en y fr. */
export const VIDEO_LOCALE: Record<Locale, "es" | "en"> = {
  es: "es",
  ca: "es",
  en: "en",
  fr: "en",
};

/** Con `trailingSlash`, cada idioma es una carpeta: `/es/`, `/ca/`… */
export const localePath = (locale: Locale) => `/${locale}/`;

/** `hreflang` de la home: un idioma por URL y `/` como x-default (elige y redirige). */
export const LANGUAGE_ALTERNATES = {
  ...Object.fromEntries(LOCALES.map((locale) => [locale, localePath(locale)])),
  "x-default": "/",
} as Record<Locale | "x-default", string>;

/** Clave de `localStorage` con el idioma que el visitante eligió a mano. */
export const LOCALE_STORAGE_KEY = "lang";

/**
 * Idiomas de España sin versión propia: quien navega en gallego o euskera
 * lee castellano, y mandarle al inglés por defecto no tendría sentido.
 */
const NEIGHBOURS: Record<string, Locale> = { gl: "es", eu: "es", ast: "es", an: "es" };

/**
 * JS como texto, para un `<script>` en línea antes de pintar, que deja en `p`
 * el idioma del visitante: el que eligió a mano, si no el primero de su
 * navegador que tengamos y, si no, `DEFAULT_LOCALE`. Con `fromPath`, manda
 * antes el idioma de la URL (`/fr/…`): lo usa el 404.
 */
export function detectLocaleJs({ fromPath = false } = {}) {
  const locales = JSON.stringify(LOCALES);
  const path = fromPath
    ? `var m=location.pathname.match(/^\\/(${LOCALES.join("|")})(\\/|$)/);if(m)p=m[1];`
    : "";
  return `var L=${locales},N=${JSON.stringify(NEIGHBOURS)},p;${path}if(L.indexOf(p)<0){try{p=localStorage.getItem(${JSON.stringify(LOCALE_STORAGE_KEY)})}catch(e){}}if(L.indexOf(p)<0){p=${JSON.stringify(DEFAULT_LOCALE)};var ls=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||""];for(var i=0;i<ls.length;i++){var c=String(ls[i]).toLowerCase().split("-")[0];c=N.hasOwnProperty(c)?N[c]:c;if(L.indexOf(c)>=0){p=c;break}}}`;
}
