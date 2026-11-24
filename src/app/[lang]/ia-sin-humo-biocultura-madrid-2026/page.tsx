import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { TalkHome } from "../../../components/charla/TalkPages";
import { talkMetadata } from "../../../i18n/charla";
import { hasLocale } from "../../../i18n/config";

/**
 * Valenciano e inglés. La de `es` también se genera (el segmento `[lang]` da
 * los tres idiomas), pero su canónica es la URL sin idioma y Firebase la
 * redirige allí: ver `lib/charla.ts`.
 */
export async function generateMetadata({ params }: PageProps<"/[lang]/ia-sin-humo-biocultura-madrid-2026">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return talkMetadata(lang);
}

export default async function Page({ params }: PageProps<"/[lang]/ia-sin-humo-biocultura-madrid-2026">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <TalkHome lang={lang} />;
}
