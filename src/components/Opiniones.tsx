"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { Section, SectionHeading, containerClass } from "./ui";

const paragraphs = [
  "He tenido el placer de trabajar con Pedro en la integración de un chatbot con IA para la web de Abad Pinturas (apcoatings.net), y el resultado ha superado las expectativas.",
  "Lo que distingue a Pedro de otros desarrolladores es que no se limita a entregar código: entiende el negocio del cliente y orienta cada decisión técnica hacia un objetivo real. En nuestro caso, convertir el tráfico web en oportunidades comerciales.",
  "Destaco especialmente su comunicación transparente durante todo el proceso, su capacidad para traducir conceptos técnicos en términos comprensibles, y su compromiso con el resultado final.",
  "Sin duda un partner de confianza para cualquier proyecto de tecnología aplicada a negocio. Lo recomiendo sin reservas.",
];

export default function Opiniones() {
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);

  useEffect(() => {
    const quote = quoteRef.current;
    if (!quote) return;

    const update = () => {
      if (expanded) {
        setShowToggle(true);
        return;
      }
      setShowToggle(quote.scrollHeight > quote.clientHeight + 1);
    };

    let observer: ResizeObserver | undefined;
    if (typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(update);
      observer.observe(quote);
    } else {
      window.addEventListener("resize", update, { passive: true });
    }
    const raf = requestAnimationFrame(update);

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", update);
      cancelAnimationFrame(raf);
    };
  }, [expanded]);

  return (
    <Section id="opiniones" labelledBy="opiniones-title">
      <Reveal className={containerClass}>
        <SectionHeading
          index="04 — Opiniones"
          title="Lo que dicen quienes ya trabajan conmigo"
          titleId="opiniones-title"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-5">
          <figure className="group relative m-0 flex min-h-[270px] max-w-[720px] flex-col justify-between rounded-md border border-line bg-white p-[29px] transition duration-200 before:font-[Georgia,serif] before:text-[74px] before:leading-[0.65] before:text-green-light before:transition-colors before:duration-200 hover:border-[rgba(30,107,75,0.7)] hover:shadow-soft hover:before:text-green-dark before:content-['“']">
            <blockquote
              ref={quoteRef}
              id="testimonial-quote-1"
              className={`mt-[18px] mb-0 text-[16.5px] leading-[1.65] text-ink italic ${
                expanded ? "" : "line-clamp-5"
              }`}
            >
              {paragraphs.map((text, i) => (
                <span key={i}>
                  {text}
                  {i < paragraphs.length - 1 ? (
                    <>
                      <br />
                      <br />
                    </>
                  ) : null}
                </span>
              ))}
            </blockquote>
            <button
              type="button"
              hidden={!showToggle}
              aria-controls="testimonial-quote-1"
              aria-expanded={expanded}
              onClick={() => setExpanded((v) => !v)}
              className="mt-[6px] min-h-[38px] cursor-pointer self-start border-0 bg-transparent py-[6px] text-[14px] font-semibold text-green underline decoration-transparent underline-offset-4 transition-colors duration-200 hover:text-green-dark hover:decoration-current"
            >
              <span>{expanded ? "Leer menos" : "Leer más"}</span>
              <span className="sr-only"> de la opinión de Antonio Miralles Abad</span>
            </button>
            <figcaption className="mt-auto flex flex-col gap-[3px] border-t border-line pt-5 text-[15px]">
              <strong>Antonio Miralles Abad</strong>
              <span className="text-[13.5px] text-muted">Gerente · Abad Pinturas S.L.</span>
              <time dateTime="2026-04-24" className="mt-[2px] text-[12.5px] text-muted">
                Cliente de Pedro · abril de 2026
              </time>
            </figcaption>
          </figure>
        </div>
      </Reveal>
    </Section>
  );
}
