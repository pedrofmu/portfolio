import { readFileSync } from "node:fs";
import path from "node:path";

import type { Locale } from "../i18n/config";

/**
 * Plantillas de la charla: ficheros de texto en
 * `src/content/charla/<idioma>/`. Son la única fuente: la página los lee en el
 * build para mostrarlos y copiarlos, y `scripts/charla-downloads.mjs` genera
 * el .docx de la política. Solo servidor.
 */
const ROOT = path.join(process.cwd(), "src/content/charla");

export function readTalkFile(lang: Locale, file: string) {
  return readFileSync(path.join(ROOT, lang, file), "utf8").trimEnd();
}
