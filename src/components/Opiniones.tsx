"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "../i18n";
import Reveal from "./Reveal";
import { Section, SectionHeading, containerClass } from "./ui";

type OpinionesProps = {
  t: Dictionary["opiniones"];
  /** Fecha de la opinión (ISO) y su texto, ya formateado con `Intl` en el servidor. */
  date: string;
  dateLabel: string;
};

export default function Opiniones({ t, date, dateLabel }: OpinionesProps) {
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
        <SectionHeading title={t.title} titleId="opiniones-title" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-5">
          <figure className="group relative m-0 flex min-h-[270px] max-w-[720px] flex-col justify-between rounded-md border border-[#D6CFBF] bg-[#FFFDF8] p-[29px] shadow-[0_1px_0_rgba(36,49,44,0.05)] transition duration-200 before:font-[Georgia,serif] before:text-[74px] before:leading-[0.65] before:text-green-light before:transition-colors before:duration-200 hover:border-[rgba(30,107,75,0.7)] hover:shadow-soft hover:before:text-green-dark before:content-['“']">
            <blockquote
              ref={quoteRef}
              id="testimonial-quote-1"
              lang={t.quoteLang ?? undefined}
              className={`mt-[18px] mb-0 text-[16.5px] leading-[1.65] text-ink italic ${
                expanded ? "" : "line-clamp-5"
              }`}
            >
              {t.quote.map((text, i) => (
                <span key={i}>
                  {text}
                  {i < t.quote.length - 1 ? (
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
              <span>{expanded ? t.less : t.more}</span>
              <span className="sr-only">{t.toggleSuffix}</span>
            </button>
            <figcaption className="mt-auto flex flex-col gap-[3px] border-t border-line pt-5 text-[15px]">
              <strong>Antonio Miralles Abad</strong>
              <span className="text-[13.5px] text-muted">{t.role}</span>
              <time dateTime={date} className="mt-[2px] text-[12.5px] text-muted">
                {t.client} · {dateLabel}
              </time>
              {t.translatedNote ? (
                <span className="mt-[2px] text-[12.5px] text-muted">{t.translatedNote}</span>
              ) : null}
            </figcaption>
          </figure>
        </div>
      </Reveal>
    </Section>
  );
}
