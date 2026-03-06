import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CtaButtonProps = ComponentPropsWithoutRef<"a"> & {
  children: ReactNode;
};

export function CtaButton({ children, className, ...props }: CtaButtonProps) {
  return (
    <a
      {...props}
      className={cn(
        "border-button-border text-button-text hover:bg-button-hover focus-visible:ring-accent inline-flex items-center justify-center rounded-full border-2 px-6 py-1.5 text-[0.95rem] font-bold tracking-[0.05em] transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
        className,
      )}
    >
      {children}
    </a>
  );
}
