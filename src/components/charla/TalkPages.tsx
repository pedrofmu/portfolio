import Blocks from "./Blocks";
import Rich, { linkClass } from "./Rich";
import TalkShell from "./TalkShell";
import { Section, SectionHeading, containerClass } from "../ui";
import { ridgeFrame, ridgePoints, toPath, type RidgeShape } from "../../lib/inkRidge";
import { SITE } from "../../lib/site";
import { localePath, type Locale } from "../../i18n/config";
import { getDictionary } from "../../i18n";
import { getTalkDictionary } from "../../i18n/charla";
import type { TalkSection } from "../../i18n/charla/types";
import { TALK_RESOURCES, type TalkResource } from "../../lib/charla";

// Cabecera de la página principal: crestas en niebla al pie, como la portada
// de las diapositivas. Estáticas: el momento animado del sitio es el hero.
const CANVAS = { width: 1600, height: 170 };
const RIDGES: (RidgeShape & { color: string; opacity: number })[] = [
  {
    base: 132,
    rough: 2.4,
    seed: 23,
    color: "#7D8C87",
    opacity: 0.18,
    peaks: [
      { x: 820, h: 92, w: 120 },
      { x: 1090, h: 70, w: 110 },
      { x: 1380, h: 84, w: 130 },
      { x: 540, h: 40, w: 160 },
    ],
  },
  {
    base: 162,
    rough: 2.8,
    seed: 47,
    color: "#5F6F69",
    opacity: 0.2,
    peaks: [
      { x: 120, h: 30, w: 170 },
      { x: 700, h: 52, w: 130 },
      { x: 980, h: 38, w: 170 },
      { x: 1260, h: 58, w: 120 },
      { x: 1540, h: 36, w: 150 },
    ],
  },
];
const SILHOUETTES = RIDGES.map((ridge) => ({
  d: toPath(ridgePoints(ridge, CANVAS), true, CANVAS),
  color: ridge.color,
  opacity: ridge.opacity,
}));
/** Altura que crece con el ancho para no recortar las cumbres: ver `ridgeFrame`. */
const FRAME = ridgeFrame(RIDGES, CANVAS);

type PageProps = { lang: Locale };

function Sections({ sections, lang }: { sections: TalkSection[]; lang: Locale }) {
  const t = getTalkDictionary(lang);
  const { newTab } = getDictionary(lang);
  return sections.map((section, i) => (
    <Section key={section.id} id={section.id} white={i % 2 === 0} labelledBy={`${section.id}-title`}>
      <div className={containerClass}>
        <SectionHeading
          title={section.title}
          titleId={`${section.id}-title`}
          copy={section.intro ? <Rich text={section.intro} lang={lang} newTab={newTab} /> : undefined}
        />
        <Blocks blocks={section.blocks} lang={lang} t={t} newTab={newTab} />
      </div>
    </Section>
  ));
}

/**
 * Escribir a Pedro por email (principal) o por WhatsApp (secundario) y, debajo,
 * un enlace a su web. Van en la cabecera de la página principal y en el
 * cierre de todas. En móvil los botones se apilan a todo el ancho.
 */
function CtaButtons({ lang, center = false }: { lang: Locale; center?: boolean }) {
  const t = getTalkDictionary(lang);
  const { newTab } = getDictionary(lang);
  return (
    <div className={`flex flex-col gap-4 print:hidden ${center ? "items-center" : "items-start"} max-[620px]:items-stretch`}>
      <div className={`flex flex-wrap gap-3 max-[620px]:flex-col ${center ? "justify-center" : ""}`}>
        <a
          href={`mailto:${SITE.email}`}
          className="inline-flex items-center justify-center rounded-[13px] bg-brand px-7 py-[15px] text-[16px] font-bold whitespace-nowrap text-cream no-underline shadow-[0_12px_30px_rgba(15,114,99,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-brand-dark hover:text-cream"
        >
          {t.ui.emailCta}
        </a>
        <a
          href={`https://wa.me/${SITE.phone.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center rounded-[13px] border border-[#CBC4B4] bg-cream/70 px-7 py-[15px] text-[16px] font-bold whitespace-nowrap text-charcoal no-underline transition duration-200 hover:-translate-y-0.5 hover:border-brand hover:text-brand"
        >
          {t.ui.whatsappCta}
          <span className="sr-only"> {newTab}</span>
        </a>
      </div>
      <a href={localePath(lang)} className={`${linkClass} inline-flex min-h-11 items-center text-[16px] max-[620px]:justify-center`}>
        {t.ui.homeCta}
      </a>
    </div>
  );
}

/** Cierre: a quién escribir. Centrado, como el bloque de contacto de la home. */
function Closing({ lang, current, white }: { lang: Locale; current?: TalkResource; white: boolean }) {
  const t = getTalkDictionary(lang);
  const { newTab } = getDictionary(lang);
  const others = TALK_RESOURCES.filter((resource) => resource !== current);

  return (
    <>
      {current ? (
        <Section white={white} labelledBy="mas-recursos-title">
          <div className={containerClass}>
            <SectionHeading title={t.ui.resourcesLabel} titleId="mas-recursos-title" />
            <Blocks
              blocks={[
                {
                  type: "resources",
                  items: others.map((resource) => ({
                    resource,
                    body: t.home.sections
                      .flatMap((section) => section.blocks)
                      .flatMap((block) => (block.type === "resources" ? block.items : []))
                      .find((item) => item.resource === resource)!.body,
                  })),
                },
              ]}
              lang={lang}
              t={t}
              newTab={newTab}
            />
          </div>
        </Section>
      ) : null}
      <section aria-labelledby="contacto-charla-title" className="border-t border-line bg-paper px-5 py-[clamp(56px,8vw,88px)] print:hidden">
        <div className="mx-auto flex max-w-[560px] flex-col items-center gap-4 text-center">
          <h2
            id="contacto-charla-title"
            className="m-0 font-display text-[clamp(26px,3.4vw,34px)] leading-[1.15] font-bold tracking-[-0.025em] text-[#171915] text-balance"
          >
            {t.ui.contactTitle}
          </h2>
          <p className="m-0 text-[17px] leading-[1.65] text-ink-soft text-pretty">
            <Rich text={t.ui.contactBody} lang={lang} newTab={newTab} />
          </p>
          <div className="mt-3 w-full">
            <CtaButtons lang={lang} center />
          </div>
        </div>
      </section>
    </>
  );
}

function Updated({ lang }: PageProps) {
  return <p className="m-0 text-[14.5px] text-muted">{getTalkDictionary(lang).ui.updated}</p>;
}

/** Página principal de la charla: destino del QR. */
export function TalkHome({ lang }: PageProps) {
  const t = getTalkDictionary(lang);
  const { newTab } = getDictionary(lang);
  return (
    <TalkShell lang={lang}>
      <section
        aria-labelledby="charla-title"
        style={{ paddingBottom: `max(clamp(120px, 14vw, 190px), calc(${FRAME.heightVw}vw + 32px))` }}
        className="relative overflow-hidden bg-paper pt-[clamp(48px,8vw,96px)]"
      >
        <svg
          viewBox={FRAME.viewBox}
          preserveAspectRatio="xMidYMax slice"
          aria-hidden="true"
          style={{ height: `max(clamp(90px, 12vw, 170px), ${FRAME.heightVw}vw)` }}
          className="pointer-events-none absolute inset-x-0 bottom-0 w-full print:hidden"
        >
          {SILHOUETTES.map((ridge) => (
            <path key={ridge.d} d={ridge.d} fill={ridge.color} fillOpacity={ridge.opacity} />
          ))}
        </svg>
        <div className={`${containerClass} relative flex flex-col gap-5`}>
          <h1
            id="charla-title"
            className="m-0 font-display text-[clamp(3rem,10vw,6rem)] leading-[0.98] font-bold tracking-[-0.052em] text-[#171915]"
          >
            {t.ui.talkTitle}
          </h1>
          <p className="m-0 max-w-[30ch] font-display text-[clamp(1.25rem,2.6vw,1.6rem)] leading-[1.3] font-medium tracking-[-0.02em] text-charcoal text-balance">
            {t.ui.subtitle}
          </p>
          <p className="m-0 max-w-[60ch] text-[17px] leading-[1.65] text-ink-soft text-pretty">
            <Rich text={t.home.lead} lang={lang} newTab={newTab} />
          </p>
          <div className="mt-1">
            <CtaButtons lang={lang} />
          </div>
          <div className="mt-1 flex flex-col gap-1">
            <p className="m-0 text-[15px] font-semibold text-[#4F5852]">{t.ui.byline}</p>
            <Updated lang={lang} />
          </div>
        </div>
      </section>
      <Sections sections={t.home.sections} lang={lang} />
      <Closing lang={lang} white={t.home.sections.length % 2 === 0} />
    </TalkShell>
  );
}

/** Página de un recurso. */
export function TalkResourcePage({ lang, resource }: PageProps & { resource: TalkResource }) {
  const t = getTalkDictionary(lang);
  const { newTab } = getDictionary(lang);
  const page = t.resources[resource];
  return (
    <TalkShell lang={lang} resource={resource}>
      <section aria-labelledby="recurso-title" className="bg-paper pt-[clamp(44px,7vw,80px)] pb-[clamp(40px,6vw,64px)]">
        <div className={`${containerClass} flex flex-col gap-5`}>
          <h1
            id="recurso-title"
            className="m-0 font-display text-[clamp(2.3rem,6vw,3.6rem)] leading-[1.04] font-bold tracking-[-0.045em] text-[#171915] text-balance"
          >
            {page.title}
          </h1>
          <p className="m-0 max-w-[62ch] text-[clamp(1.05rem,1.6vw,1.2rem)] leading-[1.62] text-ink-soft text-pretty">
            <Rich text={page.lead} lang={lang} newTab={newTab} />
          </p>
          <Updated lang={lang} />
        </div>
      </section>
      <Sections sections={page.sections} lang={lang} />
      <Closing lang={lang} current={resource} white={page.sections.length % 2 === 0} />
    </TalkShell>
  );
}
