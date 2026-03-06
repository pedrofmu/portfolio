import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  decoration?: ReactNode;
  className?: string;
  id?: string;
};

export function SectionHeading({
  title,
  decoration,
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div className={cn("relative mx-auto w-fit", className)}>
      <h2
        id={id}
        className="font-display text-text text-[clamp(2.2rem,4.8vw,3.2rem)] leading-[0.95] font-medium tracking-[-0.03em] uppercase"
      >
        {title}
      </h2>
      {decoration ? (
        <div className="text-accent pointer-events-none absolute -top-2 -right-28">
          {decoration}
        </div>
      ) : null}
    </div>
  );
}
