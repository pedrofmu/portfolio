"use client";

import { useRef, useState, type CSSProperties, type MouseEvent as ReactMouseEvent } from "react";
import {
  m,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import { casoHref, type CasoId } from "./Casos";
import InkLandscape from "./InkLandscape";
import { useMarquee } from "./useMarquee";
import { SECTIONS } from "./sections";
import MobileNavigation from "./MobileNavigation";

const results = [
  {
    title: "Toda la gestión del evento en un solo sitio",
    project: "Intranet BioCultura",
    caso: "biocultura",
    rotation: -1.2,
  },
  {
    title: "Archivos organizados automáticamente",
    project: "SoloDB",
    caso: "solodb",
    rotation: 0.8,
  },
  {
    title: "Nuevos leads desde el chatbot",
    project: "APCoatings",
    caso: "apcoatings",
    rotation: -0.6,
  },
] satisfies { title: string; project: string; caso: CasoId; rotation: number }[];

/** Copias de la tira de casos en móvil: la central es la "real", las otras
 * permiten que el bucle infinito nunca se quede sin tarjetas por los lados. */
const MARQUEE_COPIES = 3;
const marqueeItems = Array.from({ length: MARQUEE_COPIES }, (_, copy) =>
  results.map((result, index) => ({ ...result, copy, index })),
).flat();

/** Retraso de `animate-fade-up`. La entrada va con CSS y no con Motion:
 * arranca con el primer pintado, sin esperar a hidratar (en móvil, el texto
 * se quedaba invisible ~2 s). */
const fadeUp = (delay: number) => ({ animationDelay: `${delay}s` });

/** Sello cuadrado tipo hanko, en el verde de la marca, con un visto a pincel. */
function Seal() {
  return (
    <span className="grid h-8 w-8 shrink-0 -rotate-3 place-items-center rounded-[5px] border-[1.5px] border-brand/70 bg-[#E3EEE7] text-brand">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M2.6 8.6c1.3.5 2.4 1.6 3.5 3.3C7.6 8.4 10 5.6 13.6 3.4"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  // Con `target` y este `offset` (la vista de salida), Motion enlaza el
  // parallax a un `ViewTimeline` nativo: corre en el compositor y no en JS.
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const [scrolled, setScrolled] = useState(false);
  /** WCAG 2.2.2: todo lo que se mueve solo (paisaje y tira de casos) se puede parar. */
  const [motionPaused, setMotionPaused] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const next = y > 70;
    if (next !== scrolled) setScrolled(next);
  });

  const heroTransform = useTransform(scrollYProgress, [0, 1], ["translateY(0svh)", "translateY(18svh)"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.08]);
  const { scrollerRef, onClickCapture: onMarqueeClick } = useMarquee<HTMLDivElement>(
    "(max-width: 900px)",
    MARQUEE_COPIES,
    motionPaused,
  );

  // Si el hash ya apunta a ese caso el navegador no emite `hashchange`; lo
  // lanzamos a mano para que Casos vuelva a colocar el carrusel igualmente.
  const goToCaso = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    if (event.currentTarget.hash !== window.location.hash) return;
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  };

  return (
    <section
      ref={heroRef}
      id="inicio"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-cream"
    >
      <InkLandscape progress={scrollYProgress} paused={scrolled || motionPaused} />

      <header
        style={fadeUp(0)}
        className="animate-fade-up relative z-[2] mx-auto flex w-full max-w-[1320px] items-center justify-between px-[clamp(20px,5vw,68px)] py-[clamp(18px,2.2vw,26px)]"
      >
        <a
          href="#inicio"
          aria-label="pedrofm, volver al inicio"
          className="font-display text-[22px] font-extrabold text-charcoal no-underline"
        >
          pedrofm<span className="text-brand">.</span>
        </a>
        <nav
          aria-label="Secciones"
          className="hidden items-center gap-[26px] lg:flex"
        >
          {SECTIONS.map((section) => (
            <a
              key={section.href}
              href={section.href}
              className="text-[13.5px] font-semibold tracking-[0.02em] text-[#5E6B64] no-underline transition-colors duration-200 hover:text-brand"
            >
              {section.label}
            </a>
          ))}
        </nav>
        <MobileNavigation />
      </header>

      <m.div
        style={reduce ? { opacity: heroOpacity } : { transform: heroTransform, opacity: heroOpacity }}
        className="relative z-[1] mx-auto grid w-full max-w-[1320px] flex-1 grid-cols-[minmax(0,1.42fr)_minmax(310px,0.58fr)] content-start items-start gap-[clamp(48px,7vw,104px)] px-[clamp(20px,5vw,68px)] pt-[clamp(28px,7vh,84px)] pb-[clamp(72px,10vh,128px)] will-change-transform max-[900px]:grid-cols-1 max-[900px]:gap-10 max-[900px]:pt-12 max-[900px]:content-stretch max-[900px]:items-center max-[620px]:gap-7 max-[620px]:pt-8 max-[620px]:pb-8"
      >
        <div className="min-w-0 max-w-[860px]">
          {/* Sin `fadeUp`: el h1 es el LCP, y con `opacity: 0` inicial no se
              pintaba hasta hidratar (~2 s en móvil). Lo anima el subrayado. */}
          <h1
            id="hero-title"
            className="m-0 max-w-[820px] font-display text-[clamp(3.25rem,5.8vw,6rem)] leading-[0.99] font-bold tracking-[-0.052em] text-[#171915] text-balance max-[620px]:text-[clamp(2.55rem,12vw,3.75rem)]"
          >
            Digitaliza tu pyme y{" "}
            <span className="relative inline-block text-brand">
              recupera horas
              <svg
                viewBox="0 0 420 15"
                preserveAspectRatio="none"
                className="absolute -bottom-[5px] left-0 h-[11px] w-full overflow-visible"
                aria-hidden="true"
              >
                <path
                  d="M4 9.5C91 4.2 241 3.5 416 7.4"
                  pathLength={1}
                  className="animate-brush"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  filter="url(#ink-edge)"
                />
              </svg>
            </span>{" "}
            cada semana.
          </h1>

          <p
            style={fadeUp(0.08)}
            className="animate-fade-up mt-7 max-w-[700px] text-[clamp(1.05rem,1.5vw,1.27rem)] leading-[1.58] text-[#3E4641] text-balance max-[620px]:mt-6"
          >
            Desarrollo sistemas internos y herramientas con IA para que tu
            equipo utilice el tiempo en lo que realmente importa.
          </p>

          <div
            style={fadeUp(0.14)}
            className="animate-fade-up mt-7 flex flex-wrap gap-3.5 max-[620px]:mt-6 max-[620px]:gap-2.5"
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-[13px] bg-brand px-7 py-[15px] text-[16px] font-bold text-cream no-underline shadow-[0_12px_30px_rgba(15,114,99,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-brand-dark hover:text-cream max-[620px]:flex-[1_1_140px] max-[620px]:px-3.5 max-[620px]:whitespace-nowrap max-[620px]:py-[14px] max-[620px]:text-[15px]"
            >
              Cuéntame tu caso
            </a>
            <a
              href="#casos"
              className="inline-flex items-center justify-center rounded-[13px] border border-[#CBC4B4] bg-cream/70 px-7 py-[15px] text-[16px] font-bold text-charcoal no-underline transition duration-200 hover:-translate-y-0.5 hover:border-brand hover:bg-cream hover:text-brand max-[620px]:flex-[1_1_140px] max-[620px]:px-3.5 max-[620px]:whitespace-nowrap max-[620px]:py-[14px] max-[620px]:text-[15px]"
            >
              Ver casos de éxito
            </a>
          </div>


        </div>

        {/* En escritorio, columna de fichas; en móvil y tablet, una tira que
            avanza sola hacia la izquierda en bucle y que se puede deslizar. */}
        <aside
          style={fadeUp(0.1)}
          aria-label="Resultados de proyectos recientes"
          className="animate-fade-up relative mt-[clamp(16px,6vh,72px)] w-full max-w-[390px] justify-self-end max-[900px]:mt-0 max-[900px]:-mx-[clamp(20px,5vw,68px)] max-[900px]:-mb-7 max-[900px]:w-auto max-[900px]:max-w-none max-[900px]:justify-self-stretch [@media(max-width:900px)_and_(max-height:500px)]:hidden"
        >
          <div
            ref={scrollerRef}
            onClickCapture={onMarqueeClick}
            className="max-[900px]:cursor-grab max-[900px]:overflow-x-auto max-[900px]:overscroll-x-contain max-[900px]:[scrollbar-width:none] max-[900px]:active:cursor-grabbing max-[900px]:[&::-webkit-scrollbar]:hidden"
          >
            <ul className="m-0 list-none space-y-4 p-0 max-[900px]:flex max-[900px]:w-max max-[900px]:gap-3 max-[900px]:space-y-0 max-[900px]:pt-3 max-[900px]:pb-10">
              {marqueeItems.map((result) => {
                // Las copias solo existen para el bucle: fuera del árbol de
                // accesibilidad y del orden de tabulación, y ocultas en escritorio.
                const clone = result.copy !== Math.floor(MARQUEE_COPIES / 2);
                return (
                  <li
                    key={`${result.copy}-${result.project}`}
                    aria-hidden={clone || undefined}
                    inert={clone || undefined}
                    style={{ animationDelay: `${160 + result.index * 70}ms` }}
                    className={`animate-card-in max-[900px]:w-[min(76vw,320px)] max-[900px]:shrink-0 ${
                      clone ? "min-[901px]:hidden" : ""
                    } ${
                      result.index === 1
                        ? "min-[901px]:ml-6"
                        : result.index === 2
                          ? "min-[901px]:ml-2"
                          : "min-[901px]:mr-4"
                    }`}
                  >
                    <a
                      href={casoHref(result.caso)}
                      onClick={goToCaso}
                      draggable={false}
                      style={{ "--rot": `${result.rotation}deg` } as CSSProperties}
                      className="flex h-full items-start gap-4 rotate-[var(--rot)] rounded-[6px] border border-[#D6CFBF] bg-[rgba(251,248,242,0.93)] px-5 py-[18px] no-underline shadow-[0_1px_0_rgba(36,49,44,0.05),0_24px_34px_-24px_rgba(31,42,38,0.5)] transition-[translate,rotate,box-shadow,border-color] duration-300 ease-out select-none hover:border-brand focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand motion-safe:hover:-translate-y-1 motion-safe:hover:[rotate:0deg] motion-safe:hover:shadow-[0_1px_0_rgba(36,49,44,0.05),0_30px_40px_-24px_rgba(31,42,38,0.55)] max-[620px]:gap-3.5 max-[620px]:px-4 max-[620px]:py-4"
                    >
                      <Seal />
                      <div>
                        <span className="sr-only">Caso de éxito: </span>
                        <p className="m-0 text-[15px] leading-[1.35] font-bold text-[#20241F]">
                          {result.title}
                        </p>
                        <p className="mt-1.5 mb-0 text-[13.5px] text-[#6B746E]">{result.project}</p>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </m.div>

      <div className="pointer-events-none absolute right-0 bottom-5 left-0 z-[1] flex justify-center text-[#758078] max-[620px]:hidden [@media(max-width:900px)_and_(max-height:500px)]:hidden">
        <svg
          className="animate-bobble"
          width="19"
          height="19"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 7.5 10 13.5 16 7.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Con `prefers-reduced-motion` no hay nada que pausar. */}
      <button
        type="button"
        onClick={() => setMotionPaused((isPaused) => !isPaused)}
        className="absolute right-[clamp(12px,4vw,52px)] bottom-3 z-[2] inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-[10px] border-0 bg-transparent px-2 text-[13px] font-semibold text-[#4F5852] transition-colors duration-200 hover:text-brand motion-reduce:hidden max-[900px]:bottom-1"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
          {motionPaused ? (
            <path d="M3.5 2.2v9.6L11.6 7z" />
          ) : (
            <>
              <rect x="3" y="2.5" width="2.6" height="9" rx="0.8" />
              <rect x="8.4" y="2.5" width="2.6" height="9" rx="0.8" />
            </>
          )}
        </svg>
        {motionPaused ? "Reanudar animación" : "Pausar animación"}
      </button>
    </section>
  );
}
