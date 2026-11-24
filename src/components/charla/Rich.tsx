import { Fragment, type ReactNode } from "react";

import type { Locale } from "../../i18n/config";
import { isTalkResource, talkPath } from "../../lib/charla";
import { ExternalArrow } from "../ui";

/** `**negrita**` o `[texto](destino)`: ver `Rich` en `i18n/charla/types.ts`. */
const TOKEN = /\*\*(.+?)\*\*|\[([^[\]]+)\]\(([^)\s]+)\)/g;

export const linkClass =
  "font-semibold text-green underline decoration-transparent underline-offset-4 transition-colors duration-200 hover:text-green-dark hover:decoration-current";

/** Resuelve `@`, `@recurso` y `@recurso#ancla` a la ruta del idioma. */
function resolve(href: string, lang: Locale) {
  if (!href.startsWith("@")) return href;
  const [name, anchor] = href.slice(1).split("#");
  const path = name && isTalkResource(name) ? talkPath(lang, name) : talkPath(lang);
  return anchor ? `${path}#${anchor}` : path;
}

type RichProps = {
  text: string;
  lang: Locale;
  /** «(se abre en una pestaña nueva)». */
  newTab: string;
};

export default function Rich({ text, lang, newTab }: RichProps) {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(TOKEN)) {
    const index = match.index ?? 0;
    if (index > last) parts.push(text.slice(last, index));
    const [, bold, label, href] = match;
    if (bold !== undefined) {
      parts.push(
        <strong key={index} className="font-semibold text-charcoal">
          {bold}
        </strong>,
      );
    } else if (href.startsWith("http")) {
      parts.push(
        <a key={index} href={href} target="_blank" rel="noopener" className={`${linkClass} group`}>
          {label}
          <ExternalArrow className="ml-1 inline align-[-1px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          <span className="sr-only"> {newTab}</span>
        </a>,
      );
    } else {
      parts.push(
        <a key={index} href={resolve(href, lang)} className={linkClass}>
          {label}
        </a>,
      );
    }
    last = index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <Fragment>{parts}</Fragment>;
}
