import Image from "next/image";
import type { Dictionary } from "../i18n";
import Reveal from "./Reveal";
import { ExternalArrow, Section, containerClass } from "./ui";
import retrato from "../../public/assets/pedro-fernandez.webp";

type SobreMiProps = {
  t: Dictionary["sobreMi"];
  /** «(se abre en una pestaña nueva)» para el enlace a LinkedIn. */
  newTab: string;
};

export default function SobreMi({ t, newTab }: SobreMiProps) {
  return (
    <Section id="sobre-mi" labelledBy="sobre-mi-title">
      <Reveal
        className={`${containerClass} grid grid-cols-[minmax(280px,0.8fr)_minmax(320px,1.2fr)] items-center gap-[clamp(42px,7vw,76px)] max-[820px]:grid-cols-1`}
      >
        <div className="relative aspect-[4/5] max-w-[380px] overflow-hidden rounded-[6px] border-[6px] border-[#FFFDF8] bg-green-wash shadow-[0_0_0_1px_#D6CFBF,0_30px_44px_-28px_rgba(31,42,38,0.55)] -rotate-[1.2deg] max-[820px]:w-[min(100%,430px)]">
          <Image
            src={retrato}
            alt={t.portraitAlt}
            fill
            sizes="(max-width: 820px) 430px, 380px"
            style={{ objectPosition: "53% center" }}
            className="object-cover"
          />
        </div>

        <div>
          <h2
            id="sobre-mi-title"
            className="mb-[21px] font-display text-[clamp(30px,4vw,42px)] leading-[1.12] font-bold tracking-[-0.025em] text-balance max-[620px]:text-[30px]"
          >
            Pedro Fernández Muñoz
          </h2>
          {t.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mb-[15px] text-[17px] leading-[1.72] text-ink-soft">
              {paragraph}
            </p>
          ))}
          <p className="mt-[22px] mb-[18px] border-t border-line pt-[19px] text-[14.5px] leading-[1.67] text-muted">
            <strong className="text-ink-soft">{t.credentialsLabel}</strong> {t.credentials}
          </p>
          <a
            href="https://www.linkedin.com/in/pedro-fern%C3%A1ndez-mu%C3%B1oz-4148a9287/"
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center gap-[6px] text-[15px] font-semibold text-green underline decoration-transparent underline-offset-4 transition-colors duration-200 hover:text-green-dark hover:decoration-current"
          >
            LinkedIn
            <ExternalArrow className="group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
            <span className="sr-only"> {newTab}</span>
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
