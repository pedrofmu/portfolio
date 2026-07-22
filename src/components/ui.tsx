import type { ReactNode } from "react";

/** Matches the original `.container` (with responsive gutters). */
export const containerClass =
  "mx-auto w-[min(100%-48px,1080px)] max-[620px]:w-[min(100%-40px,1080px)]";

type SectionProps = {
  id?: string;
  white?: boolean;
  labelledBy?: string;
  children: ReactNode;
};

/** Matches the original `.section` / `.section-white`. */
export function Section({ id, white = false, labelledBy, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`bg-paper py-[90px] text-ink max-[820px]:py-[76px] max-[620px]:py-14 ${
        white ? "border-t border-line bg-white" : ""
      }`}
    >
      {children}
    </section>
  );
}

/**
 * External-link arrow. Inline SVG instead of "↗" (U+2197), which iOS renders
 * with the color emoji font.
 */
export function ExternalArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-200 ${className}`}
    >
      <path
        d="M3 9L9 3M9 3H4M9 3v5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type SectionHeadingProps = {
  index: string;
  title: string;
  titleId?: string;
  /** Renders the optional supporting paragraph (matches `.section-heading-copy`). */
  copy?: ReactNode;
};

/** Matches the original `.section-heading` / `.section-index` / heading `h2`. */
export function SectionHeading({ index, title, titleId, copy }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-[620px]:mb-8">
      <p className="mb-[13px] text-[13px] font-semibold tracking-[0.1em] text-muted uppercase">
        {index}
      </p>
      <h2
        id={titleId}
        className="mb-0 font-display text-[clamp(30px,4vw,42px)] leading-[1.12] font-bold tracking-[-0.025em] text-balance max-[620px]:text-[30px]"
      >
        {title}
      </h2>
      {copy ? (
        <p className="mt-[18px] mb-0 max-w-[590px] text-[17px] leading-[1.65] text-ink-soft text-pretty">
          {copy}
        </p>
      ) : null}
    </div>
  );
}
