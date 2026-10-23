import { Fragment } from "react";
import Reveal from "./Reveal";
import { ridgePoints, toPath, type RidgeShape } from "../lib/inkRidge";
import { SITE } from "../lib/site";
import { LOCALES, LOCALE_NAMES, type Locale } from "../i18n/config";
import type { Dictionary } from "../i18n";

// Remate de la página: dos crestas bajas en tinta verde oscura, con el mismo
// trazo que el paisaje del hero, para cerrar el recorrido como empezó.
const CANVAS = { width: 1600, height: 160 };
const RIDGES: (RidgeShape & { opacity: number })[] = [
  {
    base: 120,
    rough: 2.4,
    seed: 71,
    opacity: 0.16,
    peaks: [
      { x: 160, h: 46, w: 140 },
      { x: 520, h: 70, w: 110 },
      { x: 930, h: 54, w: 150 },
      { x: 1260, h: 78, w: 105 },
      { x: 1540, h: 40, w: 150 },
    ],
  },
  {
    base: 150,
    rough: 2.8,
    seed: 89,
    opacity: 0.24,
    peaks: [
      { x: 40, h: 34, w: 170 },
      { x: 380, h: 26, w: 190 },
      { x: 740, h: 48, w: 110 },
      { x: 1080, h: 30, w: 180 },
      { x: 1420, h: 44, w: 130 },
    ],
  },
];
const SILHOUETTES = RIDGES.map((ridge) => ({
  d: toPath(ridgePoints(ridge, CANVAS), true, CANVAS),
  opacity: ridge.opacity,
}));

type ContactoProps = {
  lang: Locale;
  t: Dictionary["contacto"];
  /** «(se abre en una pestaña nueva)» para el enlace a WhatsApp. */
  newTab: string;
};

export default function Contacto({ lang, t, newTab }: ContactoProps) {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="focus-light relative overflow-hidden bg-brand px-6 pt-[clamp(64px,10vw,112px)] pb-[clamp(96px,13vw,150px)] max-[620px]:px-5 max-[620px]:pt-14 max-[620px]:pb-24"
    >
      <svg
        viewBox={`0 0 ${CANVAS.width} ${CANVAS.height}`}
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[clamp(72px,9vw,130px)] w-full"
      >
        {SILHOUETTES.map((ridge) => (
          <path key={ridge.d} d={ridge.d} fill="#04231E" fillOpacity={ridge.opacity} />
        ))}
      </svg>
      <div className="relative mx-auto flex max-w-[760px] flex-col items-center gap-[18px] text-center">
        <Reveal
          y={26}
          className="m-0 font-display text-[clamp(1.9rem,5.5vw,3rem)] leading-[1.1] font-extrabold tracking-[-0.01em] text-cream text-balance"
        >
          <h2 id="contacto-title">{t.title}</h2>
        </Reveal>
        <Reveal
          y={26}
          delay={70}
          className="m-0 max-w-[480px] text-[clamp(1rem,2.3vw,1.15rem)] leading-[1.6] text-[#DCEDE7] text-balance"
        >
          <p>{t.lead}</p>
        </Reveal>
        <Reveal
          y={26}
          delay={140}
          className="mt-[14px] flex flex-wrap justify-center gap-[14px] max-[620px]:w-full max-[620px]:flex-col max-[620px]:items-stretch"
        >
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-[10px] rounded-[13px] bg-cream px-[26px] py-[15px] text-[16px] font-bold text-brand-dark no-underline transition-transform duration-200 hover:-translate-y-0.5 hover:text-brand-dark max-[620px]:justify-center"
          >
            {t.email} {SITE.email}
          </a>
          <a
            href="https://wa.me/34673314676"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-[10px] rounded-[13px] border-[1.5px] border-[rgba(251,248,242,0.55)] bg-transparent px-[26px] py-[15px] text-[16px] font-bold text-cream no-underline transition duration-200 hover:-translate-y-0.5 hover:border-cream hover:text-cream max-[620px]:justify-center"
          >
            WhatsApp
            <span className="sr-only"> {newTab}</span>
          </a>
        </Reveal>
        <Reveal y={26} delay={210} className="mt-[6px] max-w-[300px] text-[13.5px] text-[#D3E8E1]">
          {t.reply}
          {/* Idiomas de trabajo, cada uno en sí mismo (y marcado para el lector de pantalla). */}
          {LOCALES.map((locale) => (
            <Fragment key={locale}>
              {" · "}
              <span lang={locale === lang ? undefined : locale} translate="no">
                {LOCALE_NAMES[locale]}
              </span>
            </Fragment>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
