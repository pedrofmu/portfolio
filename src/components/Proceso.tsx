import Reveal from "./Reveal";
import { Section, SectionHeading, containerClass } from "./ui";

const steps = [
  {
    step: "Paso 1",
    title: "Llamada inicial gratuita",
    body: "30 minutos para entender tu problema. Si no te puedo ayudar, te lo digo claro.",
  },
  {
    step: "Paso 2",
    title: "Propuesta clara",
    body: "Qué se hace, en cuánto tiempo y por cuánto. Presupuesto cerrado: sabes el precio antes de empezar, sin sorpresas.",
  },
  {
    step: "Paso 3",
    title: "Desarrollo con avances",
    body: "Vas viendo el progreso en versiones que puedes probar. Nada de desaparecer tres meses.",
  },
  {
    step: "Paso 4",
    title: "Entrega y soporte",
    body: "Te entrego la herramienta funcionando, con formación para tu equipo y soporte después.",
  },
];

export default function Proceso() {
  return (
    <Section id="proceso" white labelledBy="proceso-title">
      <Reveal className={containerClass}>
        <SectionHeading
          index="06 — Cómo trabajo"
          title="Sencillo de principio a fin"
          titleId="proceso-title"
          copy="Trabajar con un freelance no debería dar vértigo. Por eso el proceso es corto, claro y sin letra pequeña."
        />
        <ol className="m-0 grid list-none grid-cols-4 gap-[18px] p-0 max-[960px]:grid-cols-2 max-[620px]:grid-cols-1">
          {steps.map((item) => (
            <li
              key={item.step}
              className="group min-h-[245px] rounded-md border border-line bg-paper px-[23px] py-[25px] transition duration-200 hover:border-[rgba(30,107,75,0.7)] hover:shadow-soft max-[960px]:min-h-[210px] max-[620px]:min-h-0"
            >
              <span className="mb-[15px] inline-block font-display text-[14px] font-bold text-[rgba(30,107,75,0.5)] transition-colors duration-200 group-hover:text-green">
                {item.step}
              </span>
              <h3 className="mb-3 text-[19px] leading-[1.28] font-semibold">
                {item.title}
              </h3>
              <p className="mb-0 text-[15px] leading-[1.62] text-ink-soft">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
