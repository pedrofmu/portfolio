"use client";

import Image, { type StaticImageData } from "next/image";
import Reveal from "./Reveal";
import { Section, SectionHeading, containerClass } from "./ui";
import { useCarousel } from "./useCarousel";
import ponenciaBioCultura from "../../public/assets/presentacion-biocultura.jpg";
import mediumPosts from "../../public/assets/medium-posts.jpg";

type Aparicion = {
  image: StaticImageData;
  alt: string;
  imagePosition?: string;
  category: string;
  title: string;
  linkLabel: string;
  href: string;
};

const apariciones: Aparicion[] = [
  {
    image: ponenciaBioCultura,
    alt: "Ponencia de Pedro Fernández en BioCultura Madrid 2025",
    imagePosition: "top left",
    category: "Ponencia",
    title: "BioCultura Madrid 2025 · La IA en los procesos de certificación",
    linkLabel: "Ver la ponencia en LinkedIn",
    href: "",
  },
  {
    image: mediumPosts,
    alt: "Pedro Fernández, autor de los artículos publicados en Medium",
    category: "Artículos",
    title: "Escribo sobre informática en Medium",
    linkLabel: "Leer en medium.com/@pedrofm",
    href: "https://medium.com/@pedrofm",
  },
];

export default function DondeMeHasVisto() {
  const {
    trackRef,
    index,
    goTo,
    next,
    prev,
    atStart,
    atEnd,
    isDragging,
    canScroll,
    dragProps,
    suppressClick,
  } = useCarousel(apariciones.length);

  return (
    <Section id="donde-me-has-visto" white labelledBy="donde-me-has-visto-title">
      <Reveal className={containerClass}>
        <SectionHeading
          index="05 — Dónde me has visto"
          title="Charlas, artículos y otras apariciones"
          titleId="donde-me-has-visto-title"
        />

        <div>
          <div
            ref={trackRef}
            role="region"
            aria-roledescription="carrusel"
            aria-label="Dónde me has visto"
            tabIndex={0}
            {...dragProps}
            className={`flex gap-6 overflow-x-auto overscroll-x-contain [scrollbar-width:none] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#55a77e] [&::-webkit-scrollbar]:hidden ${
              canScroll ? "" : "justify-center"
            } ${
              isDragging
                ? "cursor-grabbing select-none [scroll-snap-type:none]"
                : `snap-x snap-mandatory ${canScroll ? "cursor-grab" : ""}`
            }`}
          >
            {apariciones.map((aparicion) => (
              <a
                key={aparicion.href}
                href={aparicion.href}
                target="_blank"
                rel="noopener"
                onClick={suppressClick}
                className="group relative flex h-[420px] flex-[0_0_520px] snap-start flex-col justify-end overflow-hidden rounded-lg border border-line bg-[#e9e7e1] no-underline transition duration-200 hover:border-[rgba(30,107,75,0.7)] hover:shadow-soft max-[820px]:flex-[0_0_calc(100vw-96px)] max-[620px]:h-[300px] max-[620px]:flex-[0_0_calc(100vw-64px)]"
              >
                <Image
                  src={aparicion.image}
                  alt={aparicion.alt}
                  fill
                  quality={90}
                  sizes="(max-width: 620px) 100vw, 520px"
                  style={{ objectPosition: aparicion.imagePosition }}
                  className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="relative p-7 max-[620px]:p-5">
                  <p className="mb-[10px] text-[12px] font-semibold tracking-[0.1em] text-green-light uppercase">
                    {aparicion.category}
                  </p>
                  <h3 className="mb-[10px] font-display text-[clamp(20px,2.4vw,25px)] leading-[1.25] font-semibold tracking-[-0.015em] text-balance text-white">
                    {aparicion.title}
                  </h3>
                  <span className="inline-flex items-center gap-[6px] text-[15px] font-semibold text-white/90 transition-colors duration-200 group-hover:text-white">
                    {aparicion.linkLabel} <span aria-hidden="true">↗</span>
                  </span>
                </div>
                <span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            ))}
          </div>

          <div
            className={`mt-[30px] items-center justify-center gap-[14px] max-[620px]:mt-6 max-[620px]:gap-[10px] ${
              canScroll ? "flex" : "hidden"
            }`}
          >
            <button
              type="button"
              aria-label="Aparición anterior"
              disabled={atStart}
              onClick={prev}
              className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink transition-colors duration-200 hover:not-disabled:border-[rgba(30,107,75,0.7)] hover:not-disabled:text-green disabled:cursor-default disabled:opacity-[0.35]"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M12.5 4 6.5 10l6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="flex">
              {apariciones.map((aparicion, i) => (
                <button
                  key={aparicion.href}
                  type="button"
                  aria-label={`Ir a la aparición ${i + 1}: ${aparicion.title}`}
                  aria-current={i === index ? "true" : undefined}
                  onClick={() => goTo(i)}
                  className="h-11 w-11 cursor-pointer border-0 bg-transparent p-0 after:mx-auto after:block after:h-[7px] after:w-[7px] after:rounded-full after:bg-[#cbc7bb] after:transition-[width,background-color] after:duration-200 hover:after:bg-muted aria-[current=true]:after:w-[18px] aria-[current=true]:after:bg-green"
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Aparición siguiente"
              disabled={atEnd}
              onClick={next}
              className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink transition-colors duration-200 hover:not-disabled:border-[rgba(30,107,75,0.7)] hover:not-disabled:text-green disabled:cursor-default disabled:opacity-[0.35]"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="m7.5 4 6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
