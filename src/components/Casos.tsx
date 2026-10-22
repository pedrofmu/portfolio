"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties } from "react";
import Image, { type StaticImageData } from "next/image";
import Reveal from "./Reveal";
import { ExternalArrow, Section, SectionHeading, containerClass } from "./ui";
import casoApcoatings from "../../public/assets/caso-apcoatings.webp";
import casoBiocultura from "../../public/assets/caso-intranet-biocultura.webp";
import casoSignatureRecognition from "../../public/assets/caso-signature-recognition.webp";

/** Identificador estable de cada caso: sostiene el ancla `#caso-<id>`. */
export type CasoId = "biocultura" | "apcoatings" | "signature-recognition";

/** Ancla que lleva a la sección Casos con ese caso abierto. */
export const casoHref = (id: CasoId) => `#caso-${id}`;

/** Por debajo, una sola columna: la lámina va dentro del caso abierto. */
const UNA_COLUMNA = "(width < 900px)";
const REDUCIR_MOVIMIENTO = "(prefers-reduced-motion: reduce)";

const suscribirReducir = (onChange: () => void) => {
  const query = window.matchMedia(REDUCIR_MOVIMIENTO);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
};

/** Como `useReducedMotion`, pero hidrata con `false`, igual que el HTML del
 * servidor, y se corrige justo después: de ello depende el texto del botón. */
function useReducirMovimiento() {
  return useSyncExternalStore(
    suscribirReducir,
    () => window.matchMedia(REDUCIR_MOVIMIENTO).matches,
    () => false,
  );
}

type Caso = {
  id: CasoId;
  nombre: string;
  result: string;
  antes: string;
  ahora: string;
  /** Párrafos que se despliegan con «Leer el caso completo». */
  detalle: string[];
  /** Demo sin sonido, cuadrada, en `public/assets/casos/`. */
  video: string;
  videoLabel: string;
  /** Portada: se ve mientras el vídeo no se reproduce. */
  image: StaticImageData;
  /** La captura es apaisada y la lámina cuadrada: recorte o captura entera sobre su fondo. */
  imageFit?: "cover" | "contain";
  imagePosition?: string;
  imageBackground?: string;
  rotation: number;
  linkHref: string;
  linkLabel: string;
};

const casos: Caso[] = [
  {
    id: "biocultura",
    nombre: "Intranet BioCultura",
    result: "Toda la gestión del evento en un solo sitio.",
    antes:
      "En VidaSana, las propuestas de actividades llegaban por correo y a una web anticuada. Todo el equipo compartía una cuenta y los ponentes salían duplicados.",
    ahora:
      "Un formulario público recoge las propuestas y un panel privado sirve para revisarlas, validarlas y publicarlas, con una cuenta por persona, filtros y exportación a Excel.",
    detalle: [
      "Las propuestas de actividades se gestionaban por correo y a través de una web anticuada en la que nadie encontraba nada: la interfaz no guiaba, y cada tarea empezaba por averiguar dónde estaba cada cosa y cómo se usaba.",
      "Por debajo el problema era peor. Los usuarios estaban escritos en el propio código y todo el equipo compartía una única cuenta. La base de datos no exigía unicidad, así que registros como los ponentes aparecían duplicados y filtrar era imposible. Tampoco había forma de exportar a Excel.",
      "La intranet lo reordena de arriba abajo: un formulario público para recibir las propuestas y un panel privado para revisarlas, validarlas y publicarlas, con una cuenta por persona, registros únicos, filtros que funcionan y exportación a Excel.",
    ],
    video: "/assets/casos/biocultura.mp4",
    videoLabel:
      "Vídeo sin sonido: una actividad pasa de la propuesta al programa de BioCultura.",
    image: casoBiocultura,
    imagePosition: "left top",
    rotation: -1,
    linkHref:
      "https://www.linkedin.com/posts/pedro-fern%C3%A1ndez-mu%C3%B1oz-4148a9287_saas-intranet-gestiaejndeeventos-ugcPost-7480987992707284992-JmTG/",
    linkLabel: "Ver el proyecto en LinkedIn",
  },
  {
    id: "apcoatings",
    nombre: "Chatbot APCoatings",
    result: "Las visitas a la web se convierten en leads cualificados.",
    antes:
      "En la web de Abad Pinturas, quien tenía una duda concreta debía buscar la respuesta entre el catálogo y unas fichas técnicas que no todo el mundo entiende.",
    ahora:
      "El chatbot cruza el catálogo con las fichas técnicas y recomienda el producto en lenguaje llano, a cualquier hora. El equipo recibe la consulta ya encauzada.",
    detalle: [
      "Quien entra en la web de APCoatings suele llegar con una duda muy concreta: qué producto usar para una superficie o una situación determinada. La respuesta existe, pero está repartida entre el catálogo y las fichas técnicas, y escrita en un lenguaje que no todo el mundo maneja.",
      "El chatbot cruza el catálogo de la web con esas fichas técnicas y recomienda producto según el caso de uso, explicándolo en lenguaje llano. Funciona a cualquier hora, también cuando no hay nadie al otro lado.",
      "Así una visita que se habría ido sin respuesta se convierte en un lead cualificado, y el equipo recibe la consulta ya encauzada.",
    ],
    video: "/assets/casos/apcoatings.mp4",
    videoLabel:
      "Vídeo sin sonido: el chatbot de APCoatings recomienda un sistema de pintura a un cliente.",
    image: casoApcoatings,
    imageFit: "contain",
    imageBackground: "#171D2A",
    rotation: 0.8,
    linkHref: "https://apcoatings.net",
    linkLabel: "apcoatings.net",
  },
  {
    id: "signature-recognition",
    nombre: "Signature recognition",
    result: "Firmas comprobadas desde una foto, sin revisión manual.",
    antes:
      "En el gestor de permisos de Jield BV, que se usa en laboratorios, los permisos se firman a mano en papel. Saber qué firmas faltaban obligaba a revisarlos uno a uno.",
    ahora:
      "Basta una foto del papel firmado, aunque tenga sombras o esté en ángulo: el servicio encuentra cada casilla y comprueba si está firmada. Si no puede leer una, pide otra foto.",
    detalle: [
      "Jield BV tiene un gestor de permisos que se usa en laboratorios. Los permisos se firman a mano en papel, y saber quién ha firmado y qué firmas faltan requería revisar cada uno.",
      "Desarrollé un servicio con FastAPI y OpenCV que añade a cada casilla de firma del PDF dos marcadores ArUco y un código DataMatrix con su identificador. Al recibir una foto del papel firmado, el servicio localiza las casillas, corrige la perspectiva de cada una y compara la tinta con el papel de alrededor para detectar si está firmada.",
      "Así, el gestor de permisos sabe qué firmas están y cuáles faltan, sin revisión manual ni escáner. La comparación con el papel permite trabajar con sombras y fotos tomadas en ángulo, incluso desde móviles básicos. Si no se puede leer el identificador de una casilla, el servicio pide otra foto en lugar de atribuir la firma a una persona equivocada.",
    ],
    video: "/assets/casos/signature-recognition.mp4",
    videoLabel:
      "Vídeo sin sonido: el servicio detecta qué casillas de un permiso están firmadas a partir de una foto.",
    image: casoSignatureRecognition,
    imagePosition: "left top",
    rotation: -0.6,
    linkHref: "https://jield.dev",
    linkLabel: "jield.dev",
  },
];

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="m4 7.5 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Demo del caso como una lámina de papel. Solo se reproduce la del caso
 * abierto y mientras está en pantalla; parada, se ve la captura de portada.
 */
function CasoVideo({ caso, activo }: { caso: Caso; activo: boolean }) {
  const reduce = useReducirMovimiento();
  const figureRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  /** Lo que ha pedido el visitante; en `auto` decide «reducir movimiento». */
  const [eleccion, setEleccion] = useState<"auto" | "pausa" | "play">("auto");
  const [reproduciendo, setReproduciendo] = useState(false);
  const quiere = eleccion === "play" || (eleccion === "auto" && !reduce);

  useEffect(() => {
    const video = videoRef.current;
    const figure = figureRef.current;
    if (!video || !figure) return;
    if (!activo || !quiere) {
      video.pause();
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          video.pause();
          return;
        }
        video.play().catch((error: DOMException) => {
          // El navegador no deja reproducir sin un gesto (p. ej. ahorro de
          // batería en iOS): se queda la portada con el botón de reproducir.
          if (error.name === "NotAllowedError") setEleccion("pausa");
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(figure);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [activo, quiere]);

  const alternar = () => {
    if (quiere) {
      setEleccion("pausa");
      return;
    }
    setEleccion("play");
    // Dentro del gesto del visitante, que es cuando iOS deja empezar.
    videoRef.current?.play().catch(() => {});
  };

  return (
    <figure
      ref={figureRef}
      className="m-0 mb-7 w-full max-w-[520px] max-[900px]:order-first min-[900px]:absolute min-[900px]:top-0 min-[900px]:right-0 min-[900px]:mb-0 min-[900px]:w-[47%] min-[900px]:max-w-none"
    >
      <div
        style={
          { "--rot": `${caso.rotation}deg`, backgroundColor: caso.imageBackground } as CSSProperties
        }
        className="animate-print-in relative aspect-square rotate-[var(--rot)] overflow-hidden rounded-[6px] border-[6px] border-[#FFFDF8] bg-green-wash shadow-[0_0_0_1px_#D6CFBF,0_30px_44px_-28px_rgba(31,42,38,0.55)]"
      >
        <video
          ref={videoRef}
          src={caso.video}
          muted
          loop
          playsInline
          preload="none"
          disablePictureInPicture
          aria-label={caso.videoLabel}
          onPlaying={() => setReproduciendo(true)}
          onPause={() => setReproduciendo(false)}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <Image
          src={caso.image}
          alt=""
          fill
          sizes="(width < 900px) min(100vw, 520px), 510px"
          style={{ objectFit: caso.imageFit ?? "cover", objectPosition: caso.imagePosition }}
          className={`transition-opacity duration-300 ${reproduciendo ? "opacity-0" : ""}`}
        />
      </div>
      <button
        type="button"
        onClick={alternar}
        className="mt-4 inline-flex min-h-11 cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-[14.5px] font-semibold text-ink-soft transition-colors duration-200 hover:text-green"
      >
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          {quiere ? (
            <path
              d="M6.6 4.4c.3 3.8.2 7.4-.2 11.1M13.5 4.1c.3 3.9.3 7.7-.1 11.5"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M6.2 4.2c3.3 1.6 6.3 3.6 8.6 5.9-2.4 2.1-5.3 3.9-8.4 5.6-.4-3.8-.5-7.6-.2-11.5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
        {quiere ? "Pausar vídeo" : "Reproducir vídeo"}
      </button>
    </figure>
  );
}

export default function Casos() {
  /** Siempre hay un caso abierto: en escritorio su lámina llena la columna derecha. */
  const [activo, setActivo] = useState<CasoId>(casos[0].id);
  const [completo, setCompleto] = useState<CasoId | null>(null);

  // Anclas `#caso-<id>` (las usa el hero): el hash no apunta a ningún elemento,
  // así que el navegador no salta y abrimos el caso y hacemos scroll nosotros.
  useEffect(() => {
    const irAlCaso = () => {
      const id = window.location.hash.match(/^#caso-(.+)$/)?.[1];
      const caso = casos.find((caso) => caso.id === id);
      if (!caso) return;
      setActivo(caso.id);
      // En una columna el caso puede quedar lejos del título: se va a él.
      const destino = window.matchMedia(UNA_COLUMNA).matches
        ? document.getElementById(`caso-boton-${caso.id}`)
        : document.getElementById("casos");
      const behavior = window.matchMedia(REDUCIR_MOVIMIENTO).matches ? "auto" : "smooth";
      // En el siguiente frame, con el caso ya abierto y el resto plegado.
      requestAnimationFrame(() => destino?.scrollIntoView({ behavior }));
    };

    irAlCaso();
    window.addEventListener("hashchange", irAlCaso);
    return () => window.removeEventListener("hashchange", irAlCaso);
  }, []);

  const abrir = (id: CasoId, boton: HTMLElement) => {
    setActivo(id);
    // Al plegarse el caso de arriba la cabecera pulsada sube; si se sale por
    // debajo de la barra fija (Safari no ancla el scroll), se vuelve a traer.
    requestAnimationFrame(() => {
      if (boton.getBoundingClientRect().top < 72) boton.scrollIntoView({ block: "start" });
    });
  };

  return (
    <Section id="casos" white labelledBy="casos-title">
      <Reveal className={containerClass}>
        <SectionHeading
          title="Casos reales de digitalización de pymes"
          titleId="casos-title"
        />

        {/* La lámina vive dentro de su caso (en móvil sale ahí, sobre el texto)
            y en escritorio se coloca en la columna derecha con `absolute`. */}
        <div className="relative min-[900px]:grid min-[900px]:grid-cols-[minmax(0,1fr)_47%] min-[900px]:gap-x-16">
          <div className="border-b border-line">
            {casos.map((caso) => {
              const abierto = caso.id === activo;
              const verCompleto = completo === caso.id;
              const botonId = `caso-boton-${caso.id}`;
              const panelId = `caso-panel-${caso.id}`;
              const completoId = `caso-completo-${caso.id}`;
              return (
                <article key={caso.id} className="border-t border-line">
                  <h3 className="m-0">
                    <button
                      id={botonId}
                      type="button"
                      aria-expanded={abierto}
                      aria-controls={panelId}
                      aria-disabled={abierto || undefined}
                      onClick={(event) => {
                        if (!abierto) abrir(caso.id, event.currentTarget);
                      }}
                      className={`group flex w-full scroll-mt-4 items-start justify-between gap-5 border-0 bg-transparent py-6 text-left max-[620px]:py-5 ${
                        abierto ? "cursor-default" : "cursor-pointer"
                      }`}
                    >
                      <span className="min-w-0">
                        <span
                          className={`block font-display text-[clamp(24px,2.6vw,30px)] leading-[1.15] font-semibold tracking-[-0.025em] text-balance transition-colors duration-200 ${
                            abierto ? "text-[#171915]" : "text-muted group-hover:text-[#171915]"
                          }`}
                        >
                          {caso.nombre}
                        </span>
                        <span
                          className={`mt-2 block text-[16px] leading-[1.5] text-pretty ${
                            abierto ? "text-ink-soft" : "text-muted"
                          }`}
                        >
                          {caso.result}
                        </span>
                      </span>
                      {abierto ? null : (
                        <Chevron className="mt-2.5 shrink-0 text-muted transition-colors duration-200 group-hover:text-green" />
                      )}
                    </button>
                  </h3>

                  {/* Siempre en el HTML y solo oculto: si se montase al abrir, los
                      buscadores y los rastreadores de IA nunca verían el caso. */}
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={botonId}
                    hidden={!abierto}
                    className="flex flex-col pb-9 max-[620px]:pb-8"
                  >
                    <dl className="m-0 grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-x-5 gap-y-3.5 text-[16px] leading-[1.62]">
                      <dt className="text-[14.5px] font-semibold text-muted">Antes</dt>
                      <dd className="m-0 max-w-[60ch] text-pretty text-ink-soft">{caso.antes}</dd>
                      <dt className="text-[14.5px] font-semibold text-green-dark">Ahora</dt>
                      <dd className="m-0 max-w-[60ch] text-pretty text-charcoal">{caso.ahora}</dd>
                    </dl>

                    <div className="mt-5 flex flex-wrap items-center gap-x-7 gap-y-1">
                      <button
                        type="button"
                        aria-expanded={verCompleto}
                        aria-controls={completoId}
                        onClick={() => setCompleto(verCompleto ? null : caso.id)}
                        className="inline-flex min-h-11 cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-[15px] font-semibold text-green transition-colors duration-200 hover:text-green-dark"
                      >
                        {verCompleto ? "Ocultar el caso completo" : "Leer el caso completo"}
                        <Chevron
                          className={`transition-transform duration-200 ${verCompleto ? "rotate-180" : ""}`}
                        />
                      </button>
                      <a
                        href={caso.linkHref}
                        target="_blank"
                        rel="noopener"
                        className="group/link inline-flex min-h-11 items-center gap-[6px] text-[15px] font-semibold text-green underline decoration-transparent underline-offset-4 transition-colors duration-200 hover:text-green-dark hover:decoration-current"
                      >
                        {caso.linkLabel}
                        <ExternalArrow className="group-hover/link:translate-x-[2px] group-hover/link:-translate-y-[2px]" />
                        <span className="sr-only"> (se abre en una pestaña nueva)</span>
                      </a>
                    </div>

                    <div id={completoId} hidden={!verCompleto} className="mt-4">
                      {caso.detalle.map((parrafo) => (
                        <p
                          key={parrafo}
                          className="mb-[13px] max-w-[62ch] text-[15.5px] leading-[1.65] text-ink-soft text-pretty last:mb-0"
                        >
                          {parrafo}
                        </p>
                      ))}
                    </div>

                    {/* Se monta de nuevo al abrir el caso: el vídeo empieza de
                        cero y vuelve a la reproducción automática. */}
                    <CasoVideo key={abierto ? "abierto" : "cerrado"} caso={caso} activo={abierto} />
                  </div>
                </article>
              );
            })}
          </div>

          {/* Reserva en la rejilla el alto de la lámina (absoluta) y su botón. */}
          <div aria-hidden="true" className="mb-[60px] hidden aspect-square min-[900px]:block" />
        </div>
      </Reveal>
    </Section>
  );
}
