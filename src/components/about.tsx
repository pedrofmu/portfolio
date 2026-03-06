import Image from "next/image";
import { PanOnView } from "@/components/pan-on-view";
import { SectionHeading } from "@/components/section-heading";
import { about } from "@/lib/data";
import type { ReactNode } from "react";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.68c-2.77.61-3.35-1.18-3.35-1.18-.45-1.15-1.1-1.45-1.1-1.45-.9-.62.07-.6.07-.6 1 .07 1.52 1.02 1.52 1.02.88 1.52 2.3 1.08 2.86.83.1-.64.34-1.08.62-1.33-2.21-.25-4.54-1.1-4.54-4.9 0-1.08.39-1.97 1.02-2.66-.1-.25-.44-1.28.1-2.68 0 0 .83-.26 2.73 1.01a9.3 9.3 0 0 1 4.96 0c1.9-1.27 2.73-1.01 2.73-1.01.54 1.4.2 2.43.1 2.68.63.69 1.02 1.58 1.02 2.66 0 3.81-2.33 4.65-4.55 4.9.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.98 3.5a2.5 2.5 0 1 0 0 5.01 2.5 2.5 0 0 0 0-5.01M3 8.98h3.97V21H3zM9.36 8.98h3.8v1.64h.05c.53-1 1.82-2.06 3.74-2.06 4 0 4.74 2.63 4.74 6.05V21h-3.96v-5.7c0-1.36-.03-3.1-1.9-3.1-1.9 0-2.2 1.47-2.2 3V21H9.37z"
      />
    </svg>
  );
}

/**
 * Render a paragraph with <strong> for text between ** markers
 * and underline + bold for text between __ markers.
 */
function RichParagraph({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const regex = /\*\*(.+?)\*\*|__(.+?)__/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[1] !== undefined) {
      parts.push(<strong key={match.index}>{match[1]}</strong>);
    } else if (match[2] !== undefined) {
      parts.push(
        <strong key={match.index} className="underline">
          {match[2]}
        </strong>,
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <p className="m-0">{parts}</p>;
}

export function About() {
  return (
    <section
      id="quien-soy"
      className="mx-auto min-h-[40rem] max-w-[77rem] pb-14 sm:px-8 lg:min-h-[44rem] lg:pt-14 lg:pb-16"
      aria-labelledby="quien-title"
    >
      <SectionHeading
        id="quien-title"
        title="QUIEN SOY"
        className="mt-15 text-center"
      />

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.7fr] lg:items-center">
        <PanOnView
          direction="left"
          className="relative mx-auto aspect-[760/1030] w-full max-w-[27rem] lg:h-full"
        >
          <Image
            src="/border-decorations/about-picture-border.svg"
            alt=""
            aria-hidden="true"
            fill
            className="pointer-events-none object-contain select-none"
          />

          <div className="absolute top-[11.5%] right-[4.5%] bottom-[6.5%] left-[4.5%] flex flex-col overflow-hidden">
            <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-4 pt-0 pb-2">
              <Image
                src={about.photo}
                alt={about.photoAlt}
                width={300}
                height={300}
                className="mb-5"
              />
              <h3 className="font-display text-text text-center text-[clamp(1.4rem,5.5cqi,2.5rem)] leading-[1] font-medium">
                Pedro Fernández
                <span className="block">Muñoz</span>
              </h3>

              <div className="text-text mt-4 flex shrink-0 items-center justify-center gap-3">
                <a
                  href="https://github.com/pedrofmu"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Perfil de GitHub"
                  className="border-border hover:text-accent rounded-full border transition-colors"
                >
                  <GithubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/pedro-fern%C3%A1ndez-mu%C3%B1oz-4148a9287/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Perfil de LinkedIn"
                  className="hover:text-accent rounded-sm transition-colors"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>
        </PanOnView>

        <PanOnView
          direction="right"
          className="relative mx-auto aspect-[1200/1074] w-full max-w-[44rem] lg:h-full"
        >
          <Image
            src="/border-decorations/about-text-border.svg"
            alt=""
            aria-hidden="true"
            fill
            className="pointer-events-none object-contain select-none"
          />

          <div className="absolute top-[14%] right-[7%] bottom-[10%] left-[7%] overflow-auto">
            <div className="text-text space-y-5 text-[1.06rem] leading-[1.45] tracking-[-0.01em] sm:text-[1.15rem]">
              {about.paragraphs.map((paragraph) => (
                <RichParagraph key={paragraph} text={paragraph} />
              ))}
            </div>
          </div>
        </PanOnView>
      </div>
    </section>
  );
}
