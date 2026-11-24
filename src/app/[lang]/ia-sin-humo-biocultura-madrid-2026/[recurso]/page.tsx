import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { TalkResourcePage } from "../../../../components/charla/TalkPages";
import { talkMetadata } from "../../../../i18n/charla";
import { hasLocale } from "../../../../i18n/config";
import { TALK_RESOURCES, isTalkResource } from "../../../../lib/charla";

export const dynamicParams = false;

export function generateStaticParams() {
  return TALK_RESOURCES.map((recurso) => ({ recurso }));
}

type Props = PageProps<"/[lang]/ia-sin-humo-biocultura-madrid-2026/[recurso]">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, recurso } = await params;
  if (!hasLocale(lang) || !isTalkResource(recurso)) notFound();
  return talkMetadata(lang, recurso);
}

export default async function Page({ params }: Props) {
  const { lang, recurso } = await params;
  if (!hasLocale(lang) || !isTalkResource(recurso)) notFound();
  return <TalkResourcePage lang={lang} resource={recurso} />;
}
