"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Reveal from "./Reveal";
import { Section, SectionHeading, containerClass } from "./ui";
import { useCarousel } from "./useCarousel";
import casoApcoatings from "../../public/assets/caso-apcoatings.webp";
import casoBiocultura from "../../public/assets/caso-intranet-biocultura.webp";
import casoIris from "../../public/assets/caso-iris.jpg";

type Caso = {
  image: StaticImageData;
  alt: string;
  imagePosition?: string;
  tag: string;
  title: string;
  /** Párrafos que se despliegan al pulsar «Leer más». */
  detalle: string[];
  result: string;
  linkHref: string;
  linkLabel: string;
};

const casos: Caso[] = [
  {
    image: casoBiocultura,
    alt: "Interfaz de gestión de BioCultura B2B",
    imagePosition: "top left",
    tag: "Intranet de gestión",
    title: "Intranet BioCultura · VidaSana",
    detalle: [
      "Las propuestas de actividades se gestionaban por correo y a través de una web anticuada en la que nadie encontraba nada: la interfaz no guiaba, y cada tarea empezaba por averiguar dónde estaba cada cosa y cómo se usaba.",
      "Por debajo el problema era peor. Los usuarios estaban escritos en el propio código y todo el equipo compartía una única cuenta. La base de datos no exigía unicidad, así que registros como los ponentes aparecían duplicados y filtrar era imposible. Tampoco había forma de exportar a Excel.",
      "La intranet lo reordena de arriba abajo: un formulario público para recibir las propuestas y un panel privado para revisarlas, validarlas y publicarlas, con una cuenta por persona, registros únicos, filtros que funcionan y exportación a Excel.",
    ],
    result: "Toda la gestión del evento en un solo sitio.",
    linkHref:
      "https://www.linkedin.com/posts/pedro-fern%C3%A1ndez-mu%C3%B1oz-4148a9287_saas-intranet-gestiaejndeeventos-ugcPost-7480987992707284992-JmTG/",
    linkLabel: "Ver el proyecto en LinkedIn",
  },
  {
    image: casoApcoatings,
    alt: "Chatbot de inteligencia artificial integrado en APCoatings",
    imagePosition: "50% 25%",
    tag: "Chatbot con IA",
    title: "Chatbot APCoatings · Abad Pinturas S.L.",
    detalle: [
      "Quien entra en la web de APCoatings suele llegar con una duda muy concreta: qué producto usar para una superficie o una situación determinada. La respuesta existe, pero está repartida entre el catálogo y las fichas técnicas, y escrita en un lenguaje que no todo el mundo maneja.",
      "El chatbot cruza el catálogo de la web con esas fichas técnicas y recomienda producto según el caso de uso, explicándolo en lenguaje llano. Funciona a cualquier hora, también cuando no hay nadie al otro lado.",
      "Así una visita que se habría ido sin respuesta se convierte en un lead cualificado, y el equipo recibe la consulta ya encauzada.",
    ],
    result: "Las visitas a la web se convierten en leads cualificados.",
    linkHref: "https://apcoatings.net",
    linkLabel: "apcoatings.net",
  },
  {
    image: casoIris,
    alt: "Iris, el módulo de SoloDB que organiza archivos y eventos de usuario",
    tag: "Herramienta SaaS",
    title: "Iris · SoloDB (JieldBV)",
    detalle: [
      "Iris es uno de los módulos de SoloDB, el producto de JieldBV. Se ocupa del material que suben los usuarios: imágenes, vídeos y entregables de proyecto que llegan sin orden y en cantidad. Antes alguien tenía que abrirlos, revisarlos y colocarlos en su sitio uno a uno.",
      "Iris recibe esos archivos y los organiza automáticamente, dejando registrados los eventos de cada usuario para saber en todo momento qué ha entrado y cuándo.",
      "Es la pieza más visible de mi trabajo en SoloDB, pero no la única: también he intervenido en otras partes del producto. El resultado es que el trabajo manual desaparece, se cometen menos errores y el cliente final solo tiene que subir su archivo.",
    ],
    result: "Menos errores, cero fricción para el cliente final.",
    linkHref: "https://solodb.net",
    linkLabel: "solodb.net",
  },
];

const slug = (title: string) =>
  title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function Casos() {
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
  } = useCarousel(casos.length);
  /** Solo un detalle abierto a la vez: las tarjetas ocupan el ancho completo. */
  const [detalleAbierto, setDetalleAbierto] = useState<string | null>(null);

  return (
    <Section id="casos" white labelledBy="casos-title">
      <Reveal className={containerClass}>
        <SectionHeading
          index="03 — Casos de éxito"
          title="Proyectos reales, resultados reales"
          titleId="casos-title"
        />

        <div>
          <div
            ref={trackRef}
            role="region"
            aria-roledescription="carrusel"
            aria-label="Casos de éxito"
            tabIndex={0}
            {...dragProps}
            className={`flex items-start gap-6 overflow-x-auto overscroll-x-contain [scrollbar-width:none] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#55a77e] [&::-webkit-scrollbar]:hidden ${
              canScroll ? "" : "justify-center"
            } ${
              isDragging
                ? "cursor-grabbing select-none [scroll-snap-type:none]"
                : `snap-x snap-mandatory ${canScroll ? "cursor-grab" : ""}`
            }`}
          >
            {casos.map((caso) => {
              const abierto = detalleAbierto === caso.title;
              const detalleId = `caso-detalle-${slug(caso.title)}`;
              return (
                <article
                  key={caso.title}
                  className="group relative flex w-full flex-[0_0_100%] min-w-0 snap-start flex-col overflow-hidden rounded-lg border border-line bg-paper transition duration-200 hover:border-[rgba(30,107,75,0.7)] hover:shadow-soft"
                >
                  <div className="relative flex h-[460px] flex-col justify-end overflow-hidden bg-[#e9e7e1] max-[820px]:h-[400px] max-[620px]:h-[320px]">
                    <Image
                      src={caso.image}
                      alt={caso.alt}
                      fill
                      quality={90}
                      sizes="(max-width: 1128px) 100vw, 1080px"
                      style={{ objectPosition: caso.imagePosition }}
                      className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.025]"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                    <div className="pointer-events-none relative z-10 p-8 max-[620px]:p-5">
                      <p className="mb-[10px] text-[12px] font-semibold tracking-[0.1em] text-green-light uppercase">
                        {caso.tag}
                      </p>
                      <h3 className="mb-[10px] max-w-[720px] font-display text-[clamp(21px,2.6vw,28px)] leading-[1.25] font-semibold tracking-[-0.015em] text-balance text-white">
                        {caso.title}
                      </h3>
                      <p className="max-w-[640px] text-[15.5px] font-semibold text-white/90">
                        {caso.result}
                      </p>
                    </div>
                    {/* Enlace extendido sobre la imagen: deja el «Leer más» fuera, como botón real. */}
                    <a
                      href={caso.linkHref}
                      target="_blank"
                      rel="noopener"
                      onClick={suppressClick}
                      className="absolute inset-0 z-20 focus-visible:outline-3 focus-visible:-outline-offset-3 focus-visible:outline-[#55a77e]"
                    >
                      <span className="sr-only">
                        {caso.linkLabel} (se abre en una pestaña nueva)
                      </span>
                    </a>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 px-8 py-[18px] max-[620px]:px-5">
                    <button
                      type="button"
                      aria-expanded={abierto}
                      aria-controls={detalleId}
                      onClick={() => setDetalleAbierto(abierto ? null : caso.title)}
                      className="inline-flex min-h-11 cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-[15px] font-semibold text-green transition-colors duration-200 hover:text-green-dark"
                    >
                      {abierto ? "Leer menos" : "Leer más"}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                        className={`transition-transform duration-200 ${abierto ? "rotate-180" : ""}`}
                      >
                        <path
                          d="m4 7.5 6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <a
                      href={caso.linkHref}
                      target="_blank"
                      rel="noopener"
                      onClick={suppressClick}
                      className="inline-flex min-h-11 items-center gap-[6px] text-[15px] font-semibold text-green underline decoration-transparent underline-offset-4 transition-colors duration-200 hover:text-green-dark hover:decoration-current"
                    >
                      {caso.linkLabel} <span aria-hidden="true">↗</span>
                      <span className="sr-only"> (se abre en una pestaña nueva)</span>
                    </a>
                  </div>

                  {abierto ? (
                    <div
                      id={detalleId}
                      className="border-t border-line px-8 py-6 max-[620px]:px-5"
                    >
                      {caso.detalle.map((parrafo) => (
                        <p
                          key={parrafo}
                          className="mb-[13px] max-w-[720px] text-[15.5px] leading-[1.65] text-ink-soft last:mb-0"
                        >
                          {parrafo}
                        </p>
                      ))}
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>

          <div
            className={`mt-[30px] items-center justify-center gap-[14px] max-[620px]:mt-6 max-[620px]:gap-[10px] ${
              canScroll ? "flex" : "hidden"
            }`}
          >
            <button
              type="button"
              aria-label="Caso anterior"
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
              {casos.map((caso, i) => (
                <button
                  key={caso.title}
                  type="button"
                  aria-label={`Ir al caso ${i + 1}: ${caso.title}`}
                  aria-current={i === index ? "true" : undefined}
                  onClick={() => goTo(i)}
                  className="h-11 w-11 cursor-pointer border-0 bg-transparent p-0 after:mx-auto after:block after:h-[7px] after:w-[7px] after:rounded-full after:bg-[#cbc7bb] after:transition-[width,background-color] after:duration-200 hover:after:bg-muted aria-[current=true]:after:w-[18px] aria-[current=true]:after:bg-green"
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Caso siguiente"
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

        <Reveal
          y={26}
          className="mt-[clamp(48px,7vw,72px)] flex flex-col items-center gap-4 text-center"
        >
          <div className="font-display text-[clamp(1.2rem,3vw,1.5rem)] font-bold text-balance">
            ¿Tienes un proceso parecido en tu empresa?
          </div>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-[26px] py-[14px] text-[16px] font-bold text-cream no-underline shadow-[0_10px_26px_rgba(15,114,99,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-brand-dark hover:text-cream"
          >
            Cuéntame tu caso
          </a>
        </Reveal>
      </Reveal>
    </Section>
  );
}
