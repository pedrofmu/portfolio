"use client";

import { LazyMotion, domAnimation } from "motion/react";

/**
 * Carga solo las funciones de Motion que usa el sitio (animaciones, gestos e
 * `inView`), no el paquete completo con layout y drag. `strict` hace fallar
 * cualquier `motion.*` que se cuele: usa siempre `m.*`.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
