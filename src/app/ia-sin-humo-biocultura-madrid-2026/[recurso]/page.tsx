import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { TalkResourcePage } from "../../../components/charla/TalkPages";
import { talkMetadata } from "../../../i18n/charla";
import { TALK_RESOURCES, isTalkResource } from "../../../lib/charla";

export const dynamicParams = false;

export function generateStaticParams() {
  return TALK_RESOURCES.map((recurso) => ({ recurso }));
}

export async function generateMetadata({
  params,
}: PageProps<"/ia-sin-humo-biocultura-madrid-2026/[recurso]">): Promise<Metadata> {
  const { recurso } = await params;
  if (!isTalkResource(recurso)) notFound();
  return talkMetadata("es", recurso);
}

export default async function Page({ params }: PageProps<"/ia-sin-humo-biocultura-madrid-2026/[recurso]">) {
  const { recurso } = await params;
  if (!isTalkResource(recurso)) notFound();
  return <TalkResourcePage lang="es" resource={recurso} />;
}
