"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

import { SECTIONS } from "./sections";
import MobileNavigation from "./MobileNavigation";

const trustItems = [
  "Primera llamada gratuita",
  "Presupuesto cerrado, sin sorpresas",
  "Respuesta en 24 h",
];

const results = [
  {
    title: "Toda la gestión del evento en un solo sitio",
    project: "Intranet BioCultura",
    rotation: -1.2,
  },
  {
    title: "Archivos organizados automáticamente",
    project: "SoloDB",
    rotation: 0.8,
  },
  {
    title: "Nuevos leads desde el chatbot",
    project: "APCoatings",
    rotation: -0.6,
  },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.72, delay, ease: [0.22, 0.61, 0.21, 1] as const },
});

function Check() {
  return (
    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#DFECE5] text-brand">
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M3 8.5 6.5 12 13 4.5"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const backgroundRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [pointerSeen, setPointerSeen] = useState(false);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rawGlowX = useMotionValue(0);
  const rawGlowY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 45, damping: 18, mass: 1 });
  const y = useSpring(rawY, { stiffness: 45, damping: 18, mass: 1 });
  const glowX = useSpring(rawGlowX, { stiffness: 90, damping: 18, mass: 1 });
  const glowY = useSpring(rawGlowY, { stiffness: 90, damping: 18, mass: 1 });

  useMotionValueEvent(scrollY, "change", (y) => {
    const next = y > 70;
    if (next !== scrolled) setScrolled(next);
  });

  const heroY = useTransform(scrollY, (y) => y * 0.18);
  const heroOpacity = useTransform(scrollY, [0, 720], [1, 0.08], { clamp: true });
  const backgroundY = useTransform(scrollY, (y) => y * 0.08);
  const lightA = useTransform(
    [x, y],
    ([mouseX, mouseY]: number[]) => `translate(${mouseX * 46}px, ${mouseY * 34}px)`,
  );
  const lightB = useTransform(
    [x, y],
    ([mouseX, mouseY]: number[]) => `translate(${mouseX * -64}px, ${mouseY * -46}px)`,
  );
  const lightC = useTransform(
    [x, y],
    ([mouseX, mouseY]: number[]) => `translate(${mouseX * 30}px, ${mouseY * 54}px)`,
  );
  const pointerGlow = useTransform(
    [glowX, glowY],
    ([pointerX, pointerY]: number[]) => `translate(${pointerX}px, ${pointerY}px)`,
  );

  useEffect(() => {
    if (reduce || scrolled || !window.matchMedia?.("(pointer: fine)").matches) return;

    const moveGlow = (event: PointerEvent) => {
      const rect = backgroundRef.current?.getBoundingClientRect();
      if (!rect) return;
      rawX.set(event.clientX / window.innerWidth - 0.5);
      rawY.set(event.clientY / window.innerHeight - 0.5);
      rawGlowX.set(event.clientX - rect.left);
      rawGlowY.set(event.clientY - rect.top);
      setPointerSeen(true);
    };

    window.addEventListener("pointermove", moveGlow, { passive: true });
    return () => window.removeEventListener("pointermove", moveGlow);
  }, [rawGlowX, rawGlowY, rawX, rawY, reduce, scrolled]);

  const backgroundPlayState = scrolled ? "paused" : "running";

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[linear-gradient(180deg,#FDFBF6_0%,#F5EFE3_100%)]"
    >
      <motion.div
        ref={backgroundRef}
        aria-hidden="true"
        style={{ y: backgroundY }}
        animate={{ opacity: scrolled ? 0.35 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pointer-events-none absolute inset-[-12%_0_0] z-0 overflow-hidden will-change-transform"
      >
        <motion.div
          style={{ transform: lightA }}
          className="absolute top-[-14%] left-[-12%] h-[56vw] max-h-none min-h-[420px] w-[56vw] min-w-[420px] will-change-transform"
        >
          <div
            style={{ animationPlayState: backgroundPlayState }}
            className="animate-drift-a h-full w-full rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(63,185,162,0.42),rgba(63,185,162,0)_66%)] blur-[46px]"
          />
        </motion.div>
        <motion.div
          style={{ transform: lightB }}
          className="absolute top-[-6%] right-[-16%] h-[48vw] min-h-[380px] w-[48vw] min-w-[380px] will-change-transform"
        >
          <div
            style={{ animationPlayState: backgroundPlayState }}
            className="animate-drift-b h-full w-full rounded-full bg-[radial-gradient(circle_at_60%_40%,rgba(240,196,120,0.4),rgba(240,196,120,0)_64%)] blur-[50px]"
          />
        </motion.div>
        <motion.div
          style={{ transform: lightC }}
          className="absolute bottom-[-20%] left-[22%] h-[52vw] min-h-[400px] w-[52vw] min-w-[400px] will-change-transform"
        >
          <div
            style={{ animationPlayState: backgroundPlayState }}
            className="animate-drift-c h-full w-full rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(173,206,182,0.5),rgba(173,206,182,0)_65%)] blur-[48px]"
          />
        </motion.div>
        <motion.div
          style={{ transform: pointerGlow }}
          animate={{ opacity: pointerSeen && !scrolled ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute top-0 left-0 -mt-[180px] -ml-[180px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(63,185,162,0.32),rgba(63,185,162,0)_68%)] blur-[28px] opacity-0 will-change-transform"
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(36,49,44,0.055)_1px,transparent_1.6px)] bg-[length:26px_26px]" />
      </motion.div>

      <motion.header
        {...fadeUp(0)}
        transition={{ duration: 0.65, ease: [0.22, 0.61, 0.21, 1] }}
        className="relative z-[2] mx-auto flex w-full max-w-[1320px] items-center justify-between px-[clamp(20px,5vw,68px)] py-[clamp(18px,2.2vw,26px)]"
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
      </motion.header>

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-[1] mx-auto grid w-full max-w-[1320px] flex-1 grid-cols-[minmax(0,1.42fr)_minmax(310px,0.58fr)] items-center gap-[clamp(48px,7vw,104px)] px-[clamp(20px,5vw,68px)] pt-[clamp(42px,8vh,92px)] pb-[clamp(72px,10vh,128px)] will-change-transform max-[900px]:grid-cols-1 max-[900px]:gap-12 max-[900px]:pt-12 max-[620px]:pt-10 max-[620px]:pb-16"
      >
        <div className="min-w-0 max-w-[860px]">
          <motion.p
            {...fadeUp(0.08)}
            className="mb-[22px] flex items-center gap-3 text-[13px] font-bold tracking-[0.105em] text-brand uppercase max-[620px]:text-[12px]"
          >
            <span className="block h-px w-8 bg-brand" aria-hidden="true" />
            Software a medida · Alcoy, Alicante
          </motion.p>

          <motion.h1
            id="hero-title"
            {...fadeUp(0.16)}
            className="m-0 max-w-[820px] font-display text-[clamp(3.25rem,5.45vw,5.45rem)] leading-[0.99] font-bold tracking-[-0.052em] text-[#171915] text-balance max-[620px]:text-[clamp(2.55rem,12vw,3.75rem)]"
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
                <motion.path
                  d="M4 9.5C91 4.2 241 3.5 416 7.4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  initial={{ pathLength: reduce ? 1 : 0, opacity: reduce ? 1 : 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.85, delay: 0.72, ease: [0.22, 0.61, 0.21, 1] }}
                />
              </svg>
            </span>{" "}
            cada semana.
          </motion.h1>

          <motion.p
            {...fadeUp(0.26)}
            className="mt-7 max-w-[700px] text-[clamp(1.05rem,1.5vw,1.27rem)] leading-[1.58] text-[#4F5852] text-balance max-[620px]:mt-6"
          >
            Desarrollo sistemas internos, automatizaciones e integraciones con IA para que tu
            equipo utilice el tiempo en lo que realmente importa.
          </motion.p>

          <motion.div
            {...fadeUp(0.36)}
            className="mt-7 flex flex-wrap gap-3.5 max-[620px]:mt-6 max-[620px]:flex-col max-[620px]:gap-3"
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-[13px] bg-brand px-7 py-[15px] text-[16px] font-bold text-cream no-underline shadow-[0_12px_30px_rgba(15,114,99,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-brand-dark hover:text-cream max-[620px]:w-full"
            >
              Cuéntame tu caso
            </a>
            <a
              href="#casos"
              className="inline-flex items-center justify-center rounded-[13px] border border-[#CFC9BC] bg-white/55 px-7 py-[15px] text-[16px] font-bold text-charcoal no-underline transition duration-200 hover:-translate-y-0.5 hover:border-brand hover:bg-white/80 hover:text-brand max-[620px]:w-full"
            >
              Ver casos de éxito
            </a>
          </motion.div>

          <motion.div
            {...fadeUp(0.46)}
            className="mt-[26px] flex flex-wrap items-center gap-x-3 gap-y-2 text-[13.5px] text-[#68716B] max-[620px]:hidden [@media(max-width:900px)_and_(max-height:500px)]:hidden"
          >
            {trustItems.map((item, index) => (
              <span key={item} className="inline-flex items-center gap-3">
                {index > 0 && <span className="text-brand" aria-hidden="true">·</span>}
                {item}
              </span>
            ))}
          </motion.div>

        </div>

        <motion.aside
          {...fadeUp(0.3)}
          aria-label="Resultados de proyectos recientes"
          className="relative w-full max-w-[390px] justify-self-end max-[900px]:max-w-none max-[900px]:justify-self-stretch max-[620px]:hidden [@media(max-width:900px)_and_(max-height:500px)]:hidden"
        >
          <div className="space-y-4">
            {results.map((result, index) => (
              <div
                key={result.project}
                style={{ animationDelay: `${420 + index * 100}ms` }}
                className={`animate-card-in ${
                  index === 1 ? "ml-5" : index === 2 ? "ml-2" : "mr-3"
                }`}
              >
                <div
                  style={{ "--rot": `${result.rotation}deg` } as CSSProperties}
                  className="flex items-start gap-4 rotate-[var(--rot)] rounded-[18px] border border-[#DED9CE] bg-[rgba(255,255,255,0.74)] px-5 py-[19px] shadow-[0_18px_45px_rgba(54,61,54,0.07)] backdrop-blur-[8px] transition-[translate,scale,rotate,box-shadow] duration-300 ease-out motion-safe:hover:-translate-y-1.5 motion-safe:hover:scale-[1.015] motion-safe:hover:[rotate:0deg] motion-safe:hover:shadow-[0_24px_55px_rgba(54,61,54,0.13)]"
                >
                  <Check />
                  <div>
                    <p className="m-0 text-[15px] leading-[1.35] font-bold text-[#20241F]">
                      {result.title}
                    </p>
                    <p className="mt-1.5 mb-0 text-[13.5px] text-[#788078]">{result.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.aside>
      </motion.div>

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
    </section>
  );
}
