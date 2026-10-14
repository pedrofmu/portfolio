import { containerClass } from "./ui";

const steps = [
  {
    title: "Me cuentas qué necesitas",
    body: "Empezamos con una llamada gratuita de 30 minutos para entender cómo trabajáis y dónde está el problema. Si no te puedo ayudar, te lo digo.",
  },
  {
    title: "Acordamos alcance y precio",
    body: "Te paso una propuesta con lo que voy a hacer, los plazos y un presupuesto cerrado. Lo dejamos acordado antes de empezar a programar.",
  },
  {
    title: "Pruebas los avances",
    body: "Durante el desarrollo te enseño versiones que puedes usar. Las revisamos juntos para comprobar que la herramienta encaja con vuestro trabajo.",
  },
  {
    title: "Lo ponemos en marcha",
    body: "Te entrego la herramienta funcionando y enseño a tu equipo a usarla. Después de la entrega, sigo disponible para daros soporte.",
  },
];

export default function Proceso() {
  return (
    <section
      id="proceso"
      aria-labelledby="proceso-title"
      className="bg-white pt-[100px] pb-[112px] text-ink max-[820px]:pt-[76px] max-[820px]:pb-[88px] max-[620px]:py-14"
    >
      <div
        className={`${containerClass} grid grid-cols-[1fr_1.15fr] items-start gap-x-20 gap-y-12 max-[820px]:grid-cols-1 max-[620px]:gap-y-10`}
      >
        <div>
          <h2
            id="proceso-title"
            className="mb-7 font-display text-[clamp(38px,5vw,56px)] leading-[1.05] font-bold tracking-[-0.035em] text-balance"
          >
            Cómo trabajo
          </h2>
          <p className="max-w-[26ch] text-[clamp(22px,2.3vw,28px)] leading-[1.35] font-medium tracking-[-0.015em] text-pretty">
            Hablas directamente conmigo, desde la primera llamada hasta la entrega.
          </p>
          <a
            href="#contacto"
            className="mt-6 inline-flex min-h-11 items-center text-[17px] font-semibold text-green underline decoration-green/40 decoration-2 underline-offset-[6px] transition-colors duration-200 hover:text-green-dark hover:decoration-green-dark active:translate-y-px"
          >
            Cuéntame tu caso
          </a>
        </div>

        <ol
          role="list"
          className="m-0 flex list-none flex-col gap-10 p-0 max-[620px]:gap-8"
        >
          {steps.map((item) => (
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
