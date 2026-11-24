import type { TalkResource } from "../../lib/charla";
import type { SkillId } from "./skills";
import type { SourceId } from "./sources";

/**
 * Texto con un marcado mínimo, para que las traducciones no tengan que tocar
 * JSX: `**negrita**` y `[texto](destino)`. El destino puede ser una URL
 * (`https://…`, se abre en otra pestaña), `mailto:…`, `@` (la página de la
 * charla) o `@recurso` / `@recurso#ancla` (un recurso, en el mismo idioma).
 * Lo pinta `components/charla/Rich.tsx`.
 */
export type Rich = string;

/** Plantillas y skills: ficheros de `src/content/charla/<idioma>/`. */
export type TalkFile = string;

export type Block =
  | { type: "p"; text: Rich }
  | { type: "list"; items: Rich[] }
  | { type: "steps"; items: Rich[] }
  /** Lista rayada de término y explicación, como en las diapositivas. */
  | { type: "defs"; items: { term: string; body: Rich }[] }
  /** Texto para copiar y pegar en la IA. */
  | { type: "prompt"; title?: string; text: string; note?: Rich }
  /** Plantilla larga leída de un fichero, con copiar y descargas opcionales. */
  | { type: "file"; file: TalkFile; title: string; downloads?: Download[] }
  | { type: "table"; head: string[]; rows: Rich[][] }
  /** Aviso tranquilo en una ficha verde pálida. */
  | { type: "note"; text: Rich }
  /** Índice de recursos de la página principal. */
  | { type: "resources"; items: { resource: TalkResource; body: string }[] }
  | { type: "downloads"; items: Download[] }
  /** Los dos carteles de MuesliEco, mal y bien. */
  | { type: "posters" }
  /** Skill pública: quién la publica, para qué sirve y cómo conseguirla. */
  | { type: "skill"; id: SkillId }
  | { type: "faq"; items: { q: string; a: Rich[] }[] }
  /** Las tres ideas del cierre, cada una con su sello. */
  | { type: "ideas"; items: Rich[] }
  | { type: "sources"; ids: SourceId[] };

export type Download = { href: string; label: string; meta: string };

export type TalkSection = {
  id: string;
  title: string;
  intro?: Rich;
  blocks: Block[];
};

export type TalkPage = {
  /** `<title>` y titular de la página. */
  title: string;
  description: string;
  lead: Rich;
  sections: TalkSection[];
};

export type TalkDictionary = {
  ui: {
    /** «IA sin humo»: el nombre de la charla, igual en los tres idiomas. */
    talkTitle: string;
    subtitle: string;
    byline: string;
    /** «Actualizado: noviembre de 2026». */
    updated: string;
    copy: string;
    copied: string;
    /** «Descargar la skill (ZIP)» y para qué herramientas sirve el ZIP. */
    downloadZip: string;
    zipMeta: string;
    /** «Ver en GitHub». */
    viewSource: string;
    /** Quién publica una skill: «De Corey Haines, en marketingskills (más de 60.000 estrellas en GitHub).» */
    skillBy: (author: string, repo: string, starsK: number) => string;
    /** «Dónde sale». */
    where: string;
    /** Diapositivas en que sale una fuente: «Diapositivas 4 y 33». */
    slides: (numbers: number[]) => string;
    /** «Solo de palabra o en el turno de preguntas». */
    notOnScreen: string;
    posters: {
      badAlt: string;
      badCaption: Rich;
      goodAlt: string;
      goodCaption: Rich;
    };
    /** Nombres cortos de los recursos: índice, cabecera y enlaces. */
    resourceNames: Record<TalkResource, string>;
    /** «Recursos de la charla», nombre del índice para el lector de pantalla. */
    resourcesLabel: string;
    contactTitle: string;
    contactBody: Rich;
    /** Botones de contacto: por email y por WhatsApp. */
    emailCta: string;
    whatsappCta: string;
    homeCta: string;
  };
  home: TalkPage;
  resources: Record<TalkResource, TalkPage>;
  sources: Record<SourceId, { title: string; claim: Rich }>;
  /** Skills públicas: el nombre corto en el idioma y para qué le sirve a una pyme. */
  skills: Record<SkillId, { title: string; body: Rich }>;
};
