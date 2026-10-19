import { Section, containerClass } from "./ui";

const services = [
  {
    title: "Programas a medida",
    lead: "Una herramienta que encaje con tu forma de trabajar.",
    body: "Desarrollo aplicaciones internas para gestionar inventario, tareas y proyectos. Los datos que hoy tienes repartidos en Excels pasan a un sitio donde todo el equipo puede trabajar.",
  },
  {
    title: "Inteligencia artificial",
    lead: "Ayuda con las consultas, los datos y el trabajo repetitivo.",
    body: "Creo chatbots para atender a tus clientes y asistentes que analizan datos, ordenan información y preparan trabajo para tu equipo. Partimos de una tarea concreta que quieras resolver.",
  },
];

export default function Servicios() {
  return (
    <Section id="servicios" labelledBy="servicios-title">
      <div className={containerClass}>
        <div className="mb-12 grid grid-cols-[1fr_1.15fr] items-start gap-x-20 gap-y-5 max-[820px]:grid-cols-1 max-[620px]:mb-8">
          <h2
            id="servicios-title"
            className="font-display text-[clamp(38px,5vw,56px)] leading-[1.05] font-bold tracking-[-0.035em]"
          >
            Servicios
          </h2>
          <p className="max-w-[48ch] text-[18px] leading-[1.6] text-pretty">
            Software a medida e inteligencia artificial para pymes. Cuéntame qué le quita tiempo a tu equipo y vemos cómo resolverlo.
          </p>
        </div>

        <div className="flex flex-col gap-3 max-[620px]:gap-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="-mx-8 px-8 py-10 even:bg-green-wash max-[820px]:-mx-6 max-[820px]:px-6 max-[620px]:-mx-5 max-[620px]:px-5 max-[620px]:py-8"
            >
              <div className="grid grid-cols-[1fr_1.15fr] items-baseline gap-x-20 gap-y-5 max-[820px]:grid-cols-1 max-[620px]:gap-y-4">
                <h3 className="max-w-[15ch] font-display text-[clamp(28px,3.2vw,36px)] leading-[1.12] font-semibold tracking-[-0.025em] text-balance">
                  {service.title}
                </h3>
                <div className="max-w-[54ch] text-[17px] leading-[1.65]">
                  <p className="mb-3 font-semibold text-green-dark text-pretty">
                    {service.lead}
                  </p>
                  <p className="text-pretty">{service.body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
