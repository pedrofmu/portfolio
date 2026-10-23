import type { Metadata } from "next";
import { notFound } from "next/navigation";

import TopBar from "../../components/TopBar";
import Hero from "../../components/Hero";
import Servicios from "../../components/Servicios";
import Casos from "../../components/Casos";
import Opiniones from "../../components/Opiniones";
import DondeMeHasVisto from "../../components/DondeMeHasVisto";
import Proceso from "../../components/Proceso";
import SobreMi from "../../components/SobreMi";
import Contacto from "../../components/Contacto";
import Footer from "../../components/Footer";
import { LANGUAGE_ALTERNATES, hasLocale, localePath } from "../../i18n/config";
import { getDictionary } from "../../i18n";
import { INDEXABLE } from "../../i18n/metadata";

/** Fecha de la opinión, formateada en el build: así no cambia al hidratar. */
const OPINION_DATE = "2026-04-24";

/** Canónica y `hreflang` de cada idioma; el resto de metadatos, en el layout. */
export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return {
    alternates: {
      canonical: localePath(lang),
      languages: LANGUAGE_ALTERNATES,
    },
    robots: INDEXABLE,
  };
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);
  const opinionDate = new Intl.DateTimeFormat(lang, {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(OPINION_DATE));

  return (
    <>
      <TopBar lang={lang} nav={t.nav} />
      <main id="contenido" tabIndex={-1} className="outline-none">
        <Hero lang={lang} t={t.hero} nav={t.nav} />
        <Servicios t={t.servicios} />
        <Casos lang={lang} t={t.casos} newTab={t.newTab} />
        <Opiniones t={t.opiniones} date={OPINION_DATE} dateLabel={opinionDate} />
        <DondeMeHasVisto t={t.apariciones} newTab={t.newTab} />
        <Proceso t={t.proceso} />
        <SobreMi t={t.sobreMi} newTab={t.newTab} />
        <Contacto lang={lang} t={t.contacto} newTab={t.newTab} />
      </main>
      <Footer lang={lang} t={t.footer} language={t.nav.language} newTab={t.newTab} />
    </>
  );
}
