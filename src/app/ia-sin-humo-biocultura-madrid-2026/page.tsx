import type { Metadata } from "next";

import { TalkHome } from "../../components/charla/TalkPages";
import { talkMetadata } from "../../i18n/charla";

export const metadata: Metadata = talkMetadata("es");

export default function Page() {
  return <TalkHome lang="es" />;
}
