"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type DragEvent as ReactDragEvent,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";

/** Movimiento mínimo (px) para considerar que se ha arrastrado y no clicado. */
const DRAG_THRESHOLD = 5;

/**
 * Lógica compartida de los carruseles horizontales con scroll-snap:
 * navegación de una tarjeta en una (con wrap-around), dots, arrastre con
 * ratón y respeto a `prefers-reduced-motion`.
 */
export function useCarousel(count: number) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  /** `false` cuando todas las tarjetas caben en pantalla: los controles sobran. */
  const [canScroll, setCanScroll] = useState(true);
  const dragStart = useRef<{ x: number; scrollLeft: number } | null>(null);
  const dragged = useRef(false);

  const step = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 1;
    const cards = track.children;
    if (cards.length < 2) return track.clientWidth;
    return (
      (cards[1] as HTMLElement).offsetLeft -
        (cards[0] as HTMLElement).offsetLeft || track.clientWidth
    );
  }, []);

  const current = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    return Math.max(0, Math.min(count - 1, Math.round(track.scrollLeft / step())));
  }, [count, step]);

  const goTo = useCallback(
    (i: number, instant = false) => {
      const track = trackRef.current;
      if (!track) return;
      const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
      const target = Math.max(0, Math.min(count - 1, i));
      track.scrollTo({
        left: target * step(),
        behavior: instant || reduced ? "auto" : "smooth",
      });
    },
    [count, step],
  );

  /** Avanza una tarjeta. Se detiene en la última: `goTo` acota el índice. */
  const next = useCallback(() => goTo(current() + 1), [current, goTo]);

  /** Retrocede una tarjeta. Se detiene en la primera. */
  const prev = useCallback(() => goTo(current() - 1), [current, goTo]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const measure = () => {
      setIndex(current());
      // +1px de margen para no encender el scroll por redondeos subpíxel.
      setCanScroll(track.scrollWidth > track.clientWidth + 1);
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        setIndex(current());
      });
    };
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    track.addEventListener("scroll", onScroll, { passive: true });
    measure();
    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [current]);

  // El arrastre se sigue desde `window` y NO con `setPointerCapture`: capturar el
  // puntero hace que el navegador dispare el `click` sobre la pista en vez de sobre
  // la tarjeta, lo que rompe los enlaces.
  useEffect(() => {
    if (!isDragging) return;
    const onMove = (event: PointerEvent) => {
      const track = trackRef.current;
      const start = dragStart.current;
      if (!track || !start) return;
      const delta = event.clientX - start.x;
      if (Math.abs(delta) > DRAG_THRESHOLD) dragged.current = true;
      track.scrollLeft = start.scrollLeft - delta;
    };
    const onUp = () => {
      dragStart.current = null;
      setIsDragging(false);
      goTo(current());
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [isDragging, current, goTo]);

  const dragProps = {
    onPointerDown: (event: ReactPointerEvent<HTMLDivElement>) => {
      // En táctil el scroll nativo ya arrastra; solo interceptamos el ratón.
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      const track = trackRef.current;
      if (!track) return;
      dragStart.current = { x: event.clientX, scrollLeft: track.scrollLeft };
      dragged.current = false;
      setIsDragging(true);
    },
    // Evita el drag nativo de imágenes y texto mientras se arrastra la pista.
    onDragStart: (event: ReactDragEvent) => event.preventDefault(),
  };

  /** En el `onClick` de una tarjeta-enlace: cancela el click si se venía arrastrando. */
  const suppressClick = (event: ReactMouseEvent) => {
    if (!dragged.current) return;
    event.preventDefault();
    dragged.current = false;
  };

  return {
    trackRef,
    index,
    goTo,
    next,
    prev,
    atStart: index === 0,
    atEnd: index === count - 1,
    isDragging,
    canScroll,
    dragProps,
    suppressClick,
  };
}
