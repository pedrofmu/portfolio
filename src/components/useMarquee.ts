"use client";

import { useEffect, useRef, type MouseEvent as ReactMouseEvent } from "react";

/** Velocidad del desplazamiento automático, en px por segundo. */
const SPEED = 28;
/** Tras soltar la tira, cuánto espera antes de volver a moverse sola. */
const RESUME_DELAY = 2200;
/** Movimiento mínimo (px) para considerar que se ha arrastrado y no clicado. */
const DRAG_THRESHOLD = 5;

/**
 * Tira horizontal que avanza sola hacia la izquierda y da la vuelta sin fin.
 * La lista se pinta `copies` veces seguidas; el scroll se mantiene siempre en
 * la copia central y, al salir de ella, salta una copia entera (invisible,
 * porque el contenido es idéntico). Sigue siendo un scroll nativo: se puede
 * deslizar con el dedo o arrastrar con el ratón, y se para mientras el
 * usuario interactúa, con el foco dentro o con el puntero encima.
 *
 * Solo se activa por debajo de `query`, y nunca con `prefers-reduced-motion`.
 */
export function useMarquee<T extends HTMLElement>(query: string, copies: number) {
  const scrollerRef = useRef<T>(null);
  const dragged = useRef(false);
  useEffect(() => {
    const scroller = scrollerRef.current;
    const track = scroller?.firstElementChild as HTMLElement | null;
    if (!scroller || !track) return;

    const media = window.matchMedia(query);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    let frame = 0;
    let last = 0;
    let pos = 0;
    let written = -1;
    let holds = 0;
    let resumeAt = 0;
    let visible = true;
    let drag: { x: number; scrollLeft: number; id: number } | null = null;

    /** Ancho de una copia completa de la lista. */
    const setWidth = () => {
      const items = track.children;
      const perCopy = items.length / copies;
      if (perCopy < 1 || !items[perCopy]) return 0;
      return (items[perCopy] as HTMLElement).offsetLeft - (items[0] as HTMLElement).offsetLeft;
    };

    /** Devuelve el scroll a la copia central si se ha salido de ella. */
    const wrap = () => {
      const width = setWidth();
      if (!width) return;
      const middle = Math.floor(copies / 2) * width;
      if (scroller.scrollLeft < middle - width / 2 || scroller.scrollLeft >= middle + width) {
        const offset = (((scroller.scrollLeft - middle) % width) + width) % width;
        scroller.scrollLeft = middle + offset;
      }
      pos = scroller.scrollLeft;
      written = scroller.scrollLeft;
    };

    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);
      const dt = last ? Math.min(now - last, 64) : 0;
      last = now;
      if (holds > 0 || now < resumeAt || !visible) return;

      const width = setWidth();
      if (!width) return;
      const middle = Math.floor(copies / 2) * width;
      // `pos` acumula los decimales: `scrollLeft` se redondea en algunos
      // navegadores y a poca velocidad el avance se quedaría atascado.
      pos += (SPEED * dt) / 1000;
      if (pos >= middle + width) pos -= width;
      scroller.scrollLeft = pos;
      written = scroller.scrollLeft;
    };

    // Un scroll que no hemos escrito nosotros es del usuario (dedo, rueda,
    // inercia): adoptamos su posición y mantenemos el bucle.
    const onScroll = () => {
      if (Math.abs(scroller.scrollLeft - written) < 1.5) return;
      resumeAt = performance.now() + RESUME_DELAY;
      wrap();
    };

    const hold = () => {
      holds += 1;
    };
    const release = () => {
      holds = Math.max(0, holds - 1);
      resumeAt = performance.now() + RESUME_DELAY;
    };

    const onPointerDown = (event: PointerEvent) => {
      dragged.current = false;
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      drag = { x: event.clientX, scrollLeft: scroller.scrollLeft, id: event.pointerId };
    };
    const onPointerMove = (event: PointerEvent) => {
      if (!drag) return;
      const dx = event.clientX - drag.x;
      if (!dragged.current && Math.abs(dx) < DRAG_THRESHOLD) return;
      if (!dragged.current) scroller.setPointerCapture(drag.id);
      dragged.current = true;
      scroller.scrollLeft = drag.scrollLeft - dx;
    };
    const onPointerUp = () => {
      drag = null;
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });

    const start = () => {
      if (frame || !media.matches || reduced.matches) return;
      wrap();
      // Arranca en la copia central para poder deslizar en ambos sentidos.
      const width = setWidth();
      if (width && scroller.scrollLeft < width / 2) {
        scroller.scrollLeft = Math.floor(copies / 2) * width;
        pos = written = scroller.scrollLeft;
      }
      last = 0;
      frame = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };
    const sync = () => (media.matches && !reduced.matches ? start() : stop());

    scroller.addEventListener("scroll", onScroll, { passive: true });
    scroller.addEventListener("pointerdown", onPointerDown);
    scroller.addEventListener("pointermove", onPointerMove);
    scroller.addEventListener("pointerup", onPointerUp);
    scroller.addEventListener("pointercancel", onPointerUp);
    // Mientras el usuario toca, apunta o navega con el teclado, quieta.
    const pauses = [
      ["pointerenter", hold],
      ["pointerleave", release],
      ["touchstart", hold],
      ["touchend", release],
      ["touchcancel", release],
      ["focusin", hold],
      ["focusout", release],
    ] as const;
    for (const [type, fn] of pauses) {
      scroller.addEventListener(type, fn, { passive: true });
    }
    media.addEventListener("change", sync);
    reduced.addEventListener("change", sync);
    window.addEventListener("resize", wrap);
    observer.observe(scroller);
    sync();

    return () => {
      stop();
      observer.disconnect();
      media.removeEventListener("change", sync);
      reduced.removeEventListener("change", sync);
      window.removeEventListener("resize", wrap);
      scroller.removeEventListener("scroll", onScroll);
      scroller.removeEventListener("pointerdown", onPointerDown);
      scroller.removeEventListener("pointermove", onPointerMove);
      scroller.removeEventListener("pointerup", onPointerUp);
      scroller.removeEventListener("pointercancel", onPointerUp);
      for (const [type, fn] of pauses) {
        scroller.removeEventListener(type, fn);
      }
    };
  }, [query, copies]);

  /** Evita que soltar un arrastre con el ratón abra la tarjeta. */
  const onClickCapture = (event: ReactMouseEvent) => {
    if (!dragged.current) return;
    event.preventDefault();
    event.stopPropagation();
    dragged.current = false;
  };

  return { scrollerRef, onClickCapture };
}
