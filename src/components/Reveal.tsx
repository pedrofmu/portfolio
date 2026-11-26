"use client";

import { m, useReducedMotion, type HTMLMotionProps } from "motion/react";

type RevealProps = HTMLMotionProps<"div"> & {
  /** Initial vertical offset in px (18 for section containers, 26 for hero-style reveals). */
  y?: number;
  /** Delay in milliseconds before the reveal starts. */
  delay?: number;
};

const SHOWN = { opacity: 1, y: 0 };

export default function Reveal({
  y = 18,
  delay = 0,
  children,
  ...props
}: RevealProps) {
  const reduce = useReducedMotion();

  // Siempre el mismo `m.div` con el mismo `initial`: el HTML del servidor sale
  // oculto y React no corrige el `style` al hidratar. Si con movimiento
  // reducido se pintara otro elemento sin `initial`, el `opacity: 0` del
  // servidor se quedaría para siempre. Así es Motion quien lo muestra: de
  // golpe al montar, sin desplazarse ni esperar al scroll.
  return (
    <m.div
      initial={{ opacity: 0, y }}
      animate={reduce ? SHOWN : undefined}
      whileInView={reduce ? undefined : SHOWN}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -7% 0px" }}
      transition={
        reduce
          ? { duration: 0 }
          : { duration: 0.6, delay: delay / 1000, ease: [0.22, 0.61, 0.21, 1] }
      }
      {...props}
    >
      {children}
    </m.div>
  );
}
