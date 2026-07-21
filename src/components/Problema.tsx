import Reveal from "./Reveal";

const problems = [
  {
    title: "Excels infinitos que solo entiende una persona",
    body: "Los convierto en una herramienta interna sencilla, donde cada dato está en su sitio y cualquiera del equipo puede trabajar sin miedo a romper nada.",
  },
  {
    title: "Tareas repetitivas que comen horas cada semana",
    body: "Las automatizo: informes, avisos, copiar datos de un sitio a otro… lo que hoy hace una persona a mano, mañana ocurre solo.",
  },
  {
    title: "CRM, facturación y email que no se hablan entre sí",
    body: "Conecto tus herramientas actuales para que los datos fluyan solos: sin duplicar, sin errores de copiado, sin «¿cuál era la versión buena?».",
  },
];

export default function Problema() {
  return (
    <section
      id="problema"
      className="px-6 py-[clamp(64px,10vw,112px)] max-[620px]:px-5 max-[620px]:py-14"
    >
      <div className="mx-auto max-w-[1080px]">
        <Reveal y={26} className="max-w-[620px]">
          <div className="text-[13px] font-bold tracking-[0.14em] text-brand uppercase">
            El problema
          </div>
          <h2 className="mt-3 font-display text-[clamp(1.7rem,4.4vw,2.5rem)] leading-[1.12] font-bold tracking-[-0.01em] text-balance">
            ¿Te suena algo de esto?
          </h2>
        </Reveal>
        <div className="mt-5 flex flex-col">
          {problems.map((problem, i) => (
            <Reveal
              key={problem.title}
              y={26}
              delay={i * 90}
              className={`grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-x-[48px] gap-y-[10px] py-[30px] ${
                i < problems.length - 1 ? "border-b border-[#EAE3D4]" : ""
              }`}
            >
              <h3 className="m-0 font-display text-[19px] leading-[1.35] font-bold">
                {problem.title}
              </h3>
              <p className="m-0 text-[15.5px] leading-[1.6] text-[#55645C]">
                {problem.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
