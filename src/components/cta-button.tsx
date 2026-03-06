"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CtaButtonProps = ComponentPropsWithoutRef<"a"> & {
  children: ReactNode;
};

export function CtaButton({ children, className, ...props }: CtaButtonProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.span
      whileHover={prefersReducedMotion ? undefined : { y: -1, scale: 1.02 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <a
        {...props}
        className={cn(
          "border-button-border text-button-text hover:bg-button-hover focus-visible:ring-accent inline-flex items-center justify-center rounded-full border-2 px-6 py-1.5 text-[0.95rem] font-bold tracking-[0.05em] transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
          className,
        )}
      >
        {children}
      </a>
    </motion.span>
  );
}
