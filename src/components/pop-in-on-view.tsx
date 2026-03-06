"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type PopInOnViewProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
};

export function PopInOnView({
  children,
  className,
  delay = 0,
  amount = 0.35,
}: PopInOnViewProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("origin-center", className)}
      initial={{ opacity: 0, scale: 0.32 }}
      whileInView={{
        opacity: [0, 1, 1, 1, 1],
        scale: [0.32, 1.1, 0.9, 1.03, 1],
      }}
      viewport={{ once: true, amount }}
      transition={{
        duration: 2,
        delay,
        times: [0, 0.35, 0.6, 0.82, 1],
        ease: [0.2, 0.9, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
