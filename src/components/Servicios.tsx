import Reveal from "./Reveal";
import { Section, SectionHeading, containerClass } from "./ui";

const services = [
  {
    number: "01",
    title: "Programas internos",
    outcome: "Menos errores, menos horas perdidas",
    body: (
      <>
        Apps a medida para inventario, tareas y proyectos. Sustituyen los Excels y
        procesos manuales por una herramienta pensada para cómo trabaja <em>tu</em>{" "}
        empresa.
      </>
    ),
  },
  {
    number: "02",
    title: "Herramientas con IA",
    outcome: "Más productividad sin ampliar plantilla",
    body: "Chatbots de atención al cliente, análisis de datos y asistentes inteligentes que responden, ordenan y preparan el trabajo mientras tu equipo se centra en lo importante.",
  },
  {
    number: "03",
    title: "Automatizaciones",
    outcome: "Tus herramientas, por fin conectadas",
    body: "Conecto lo que ya usas — CRM, facturación, email, pagos, APIs — para que los datos se muevan solos y el trabajo manual desaparezca del día a día.",
  },
];

export default function Servicios() {
  return (
    <Section id="servicios" labelledBy="servicios-title">
      <Reveal className={containerClass}>
        <SectionHeading
          index="02 — Servicios"
          title="Tres formas de quitarte trabajo de encima"
          titleId="servicios-title"
        />
        <div className="grid grid-cols-3 gap-5 max-[960px]:grid-cols-2 max-[620px]:grid-cols-1">
          {services.map((service, i) => {
            const isLast = i === services.length - 1;
            return (
              <article
                key={service.number}
                className={`group flex min-h-[360px] flex-col rounded-md border border-line bg-white p-7 transition duration-200 hover:border-[rgba(30,107,75,0.7)] hover:shadow-soft max-[620px]:min-h-0 ${
                  isLast
                    ? "max-[960px]:col-span-2 max-[960px]:min-h-0 max-[620px]:col-span-1"
                    : ""
                }`}
              >
                <p
                  aria-hidden="true"
                  className="mb-4 font-display text-[44px] leading-none font-bold tracking-[-0.02em] text-[rgba(30,107,75,0.3)] transition-colors duration-200 group-hover:text-green"
                >
                  {service.number}
                </p>
                <h3 className="mb-[10px] text-[22px] leading-[1.25] font-semibold tracking-[-0.015em]">
                  {service.title}
                </h3>
                <p className="mb-[13px] leading-[1.45] font-semibold text-green">
                  {service.outcome}
                </p>
                <p className="mb-0 text-[15.5px] leading-[1.65] text-ink-soft">
                  {service.body}
                </p>
              </article>
            );
          })}
        </div>
      </Reveal>
    </Section>
  );
}
