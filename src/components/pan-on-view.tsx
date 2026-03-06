"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type PanOnViewProps = {
  children: ReactNode;
  className?: string;
  direction: "left" | "right";
  delay?: number;
  amount?: number;
};

export function PanOnView({
  children,
  className,
  direction,
  delay = 0,
  amount = 0.3,
}: PanOnViewProps) {
  const prefersReducedMotion = useReducedMotion();
  const offset = direction === "left" ? -84 : 84;

  if (prefersReducedMotion) {
    return <article className={className}>{children}</article>;
  }

  return (
    <motion.article
      className={cn(className)}
      initial={{ opacity: 0, x: offset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: 1,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.article>
  );
}
