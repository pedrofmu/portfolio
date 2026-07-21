import Reveal from "./Reveal";

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="bg-[linear-gradient(145deg,#0F7263_0%,#0A5548_100%)] px-6 py-[clamp(64px,10vw,112px)] max-[620px]:px-5 max-[620px]:py-14"
    >
      <div className="mx-auto flex max-w-[760px] flex-col items-center gap-[18px] text-center">
        <Reveal
          y={26}
          className="m-0 font-display text-[clamp(1.9rem,5.5vw,3rem)] leading-[1.1] font-extrabold tracking-[-0.01em] text-cream text-balance"
        >
          <h2>Cuéntame tu caso</h2>
        </Reveal>
        <Reveal
          y={26}
          delay={70}
          className="m-0 max-w-[480px] text-[clamp(1rem,2.3vw,1.15rem)] leading-[1.6] text-[#CFE5DE] text-balance"
        >
          <p>
            Valoración y presupuesto del proyecto gratuitos y sin compromiso. Te digo claro
            si te puedo ayudar.
          </p>
        </Reveal>
        <Reveal
          y={26}
          delay={140}
          className="mt-[14px] flex flex-wrap justify-center gap-[14px] max-[620px]:w-full max-[620px]:flex-col max-[620px]:items-stretch"
        >
          <a
            href="mailto:hola@pedrofm.dev"
            className="inline-flex items-center gap-[10px] rounded-full bg-cream px-[26px] py-[15px] text-[16px] font-bold text-brand-dark no-underline transition-transform duration-200 hover:-translate-y-0.5 hover:text-brand-dark max-[620px]:justify-center"
          >
            Escríbeme: hola@pedrofm.dev
          </a>
          <a
            href="https://wa.me/34673314676"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-[10px] rounded-full border-[1.5px] border-[rgba(251,248,242,0.55)] bg-transparent px-[26px] py-[15px] text-[16px] font-bold text-cream no-underline transition duration-200 hover:-translate-y-0.5 hover:border-cream hover:text-cream max-[620px]:justify-center"
          >
            WhatsApp
          </a>
        </Reveal>
        <Reveal y={26} delay={210} className="mt-[6px] max-w-[300px] text-[13.5px] text-[#A9CCC2]">
          Respuesta en menos de 24 h · Español · Valencià · English · Français
        </Reveal>
      </div>
    </section>
  );
}
