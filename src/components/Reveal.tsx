"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";

type RevealProps = HTMLMotionProps<"div"> & {
  /** Initial vertical offset in px (18 for section containers, 26 for hero-style reveals). */
  y?: number;
  /** Delay in milliseconds before the reveal starts. */
  delay?: number;
};

export default function Reveal({
  y = 18,
  delay = 0,
  children,
  ...props
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <motion.div {...props}>{children}</motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -7% 0px" }}
      transition={{
        duration: 0.6,
        delay: delay / 1000,
        ease: [0.22, 0.61, 0.21, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
