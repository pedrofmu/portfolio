import type { Dictionary } from "../i18n";
import { containerClass } from "./ui";

export default function Proceso({ t }: { t: Dictionary["proceso"] }) {
  return (
    <section
      id="proceso"
      aria-labelledby="proceso-title"
      className="border-t border-line bg-[#FFFDF8] pt-[100px] pb-[112px] text-ink max-[820px]:pt-[76px] max-[820px]:pb-[88px] max-[620px]:py-14"
    >
      <div
        className={`${containerClass} grid grid-cols-[1fr_1.15fr] items-start gap-x-20 gap-y-12 max-[820px]:grid-cols-1 max-[620px]:gap-y-10`}
      >
        <div>
          <h2
            id="proceso-title"
            className="mb-7 font-display text-[clamp(38px,5vw,56px)] leading-[1.05] font-bold tracking-[-0.035em] text-balance"
          >
            {t.title}
          </h2>
          <p className="max-w-[26ch] text-[clamp(22px,2.3vw,28px)] leading-[1.35] font-medium tracking-[-0.015em] text-pretty">
            {t.lead}
          </p>
          <a
            href="#contacto"
            className="mt-6 inline-flex min-h-11 items-center text-[17px] font-semibold text-green underline decoration-green/40 decoration-2 underline-offset-[6px] transition-colors duration-200 hover:text-green-dark hover:decoration-green-dark active:translate-y-px"
          >
            {t.cta}
          </a>
        </div>

        <ol
          role="list"
          className="m-0 flex list-none flex-col gap-10 p-0 max-[620px]:gap-8"
        >
          {t.steps.map((item) => (
            <li key={item.title}>
              <h3 className="mb-3 font-display text-[24px] leading-[1.2] font-semibold tracking-[-0.02em] text-balance">
                {item.title}
              </h3>
              <p className="max-w-[54ch] text-[17px] leading-[1.65] text-pretty">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
