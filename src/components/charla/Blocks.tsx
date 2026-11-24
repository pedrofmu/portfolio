import type { ReactNode } from "react";

import type { Locale } from "../../i18n/config";
import { SKILLS } from "../../i18n/charla/skills";
import { SOURCES } from "../../i18n/charla/sources";
import type { Block, Download, TalkDictionary } from "../../i18n/charla/types";
import { talkPath } from "../../lib/charla";
import { readTalkFile } from "../../lib/charlaFiles";
import { ExternalArrow } from "../ui";
import CopyButton from "./CopyButton";
import Rich, { linkClass } from "./Rich";

type Ctx = { lang: Locale; t: TalkDictionary; newTab: string };

const bodyText = "text-[17px] leading-[1.68] text-ink-soft text-pretty";
const slip = "rounded-[6px] border border-[#D6CFBF] bg-[#FFFDF8] shadow-soft";
/** Fila de una lista rayada (definiciones, índice, preguntas). */
const ruled = "border-t border-line py-5 first:border-t-0 first:pt-0";

/** Guion a pincel: marca de lista. */
function BrushDash() {
  return (
    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true" className="mt-[11px] shrink-0 text-brand/70">
      <path d="M1.2 4.6c3.6-.9 7.4-1.2 11.6-.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Flecha a pincel hacia abajo: descargas. */
function BrushDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M8.2 1.8c-.3 3.6-.2 7 .1 10.3" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <path
        d="M3.9 8.4c1.5 1.4 2.8 2.7 4.2 4.3 1.3-1.6 2.6-3 4.1-4.5M2.6 14.6c3.6-.3 7.2-.3 10.9 0"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Sello de las tres ideas: el mismo hanko que marca resultados en la home. */
function Seal() {
  return (
    <span className="grid h-8 w-8 shrink-0 -rotate-3 place-items-center rounded-[5px] border-[1.5px] border-brand/70 bg-[#E3EEE7] text-brand">
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M2.6 8.6c1.3.5 2.4 1.6 3.5 3.3C7.6 8.4 10 5.6 13.6 3.4"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function Downloads({ items }: { items: Download[] }) {
  return (
    <ul className="m-0 flex list-none flex-col gap-1 p-0">
      {items.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            download
            className="group inline-flex min-h-11 items-center gap-3 text-[16px] font-semibold text-green no-underline transition-colors duration-200 hover:text-green-dark"
          >
            <BrushDown />
            <span className="underline decoration-transparent underline-offset-4 group-hover:decoration-current">
              {item.label}
            </span>
            <span className="text-[14px] font-normal text-muted">{item.meta}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Texto para copiar: prompt corto o plantilla larga. */
function CopySheet({
  title,
  text,
  ctx,
  children,
}: {
  title?: string;
  text: string;
  ctx: Ctx;
  children?: ReactNode;
}) {
  return (
    <figure className={`${slip} m-0 overflow-hidden print:shadow-none`}>
      <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3 max-[620px]:px-4">
        <figcaption className="text-[15px] font-semibold text-charcoal">{title}</figcaption>
        <CopyButton text={text} label={ctx.t.ui.copy} done={ctx.t.ui.copied} name={title} />
      </div>
      <pre className="m-0 px-5 py-4 font-body text-[15.5px] leading-[1.62] whitespace-pre-wrap text-[#2E3A35] max-[620px]:px-4">
        {text}
      </pre>
      {children}
    </figure>
  );
}

function renderBlock(block: Block, key: number, ctx: Ctx) {
  const { lang, t, newTab } = ctx;
  const rich = (text: string) => <Rich text={text} lang={lang} newTab={newTab} />;

  switch (block.type) {
    case "p":
      return (
        <p key={key} className={`m-0 max-w-[68ch] ${bodyText}`}>
          {rich(block.text)}
        </p>
      );

    case "list":
      return (
        <ul key={key} className={`m-0 flex max-w-[68ch] list-none flex-col gap-2.5 p-0 ${bodyText}`}>
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <BrushDash />
              <span>{rich(item)}</span>
            </li>
          ))}
        </ul>
      );

    case "steps":
      return (
        <ol key={key} className={`m-0 flex max-w-[68ch] list-none flex-col gap-3 p-0 ${bodyText}`}>
          {block.items.map((item, i) => (
            <li key={item} className="flex gap-4">
              <span className="w-5 shrink-0 font-display text-[19px] leading-[1.5] font-bold text-brand-dark" aria-hidden="true">
                {i + 1}
              </span>
              <span>{rich(item)}</span>
            </li>
          ))}
        </ol>
      );

    case "defs":
      return (
        <dl key={key} className="m-0 max-w-[720px]">
          {block.items.map((item) => (
            <div key={item.term} className={ruled}>
              <dt className="font-display text-[20px] leading-[1.25] font-semibold tracking-[-0.015em] text-[#171915]">
                {item.term}
              </dt>
              <dd className={`m-0 mt-1.5 ${bodyText}`}>{rich(item.body)}</dd>
            </div>
          ))}
        </dl>
      );

    case "prompt":
      return (
        <div key={key} className="flex max-w-[760px] flex-col gap-3">
          <CopySheet title={block.title} text={block.text} ctx={ctx} />
          {block.note ? <p className="m-0 text-[15px] leading-[1.6] text-muted text-pretty">{rich(block.note)}</p> : null}
        </div>
      );

    case "file":
      return (
        <div key={key} className="flex max-w-[760px] flex-col gap-4">
          <CopySheet title={block.title} text={readTalkFile(lang, block.file)} ctx={ctx} />
          {block.downloads ? <Downloads items={block.downloads} /> : null}
        </div>
      );

    case "table":
      return (
        <div key={key} className="max-w-[880px]">
          {/* Escritorio: tabla. Móvil: cada fila es una ficha con sus etiquetas. */}
          <table className="hidden w-full border-collapse text-left text-[15.5px] leading-[1.55] md:table print:table">
            <thead>
              <tr>
                {block.head.map((cell) => (
                  <th key={cell} scope="col" className="border-b-[1.5px] border-[#D6CFBF] py-3 pr-5 align-bottom font-semibold text-charcoal">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row.join("|")} className="border-b border-line align-top">
                  {row.map((cell, i) => (
                    <td key={i} className={`py-3.5 pr-5 ${i === 0 ? "font-semibold text-charcoal" : "text-ink-soft"}`}>
                      {rich(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <ul className="m-0 flex list-none flex-col p-0 md:hidden print:hidden">
            {block.rows.map((row) => (
              <li key={row.join("|")} className={ruled}>
                <p className="m-0 font-display text-[18px] leading-[1.3] font-semibold text-[#171915]">{rich(row[0])}</p>
                <dl className="m-0 mt-2 flex flex-col gap-2">
                  {row.slice(1).map((cell, i) => (
                    <div key={i}>
                      <dt className="text-[13.5px] font-semibold text-muted">{block.head[i + 1]}</dt>
                      <dd className="m-0 text-[16px] leading-[1.55] text-ink-soft">{rich(cell)}</dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>
        </div>
      );

    case "note":
      return (
        <p
          key={key}
          className="m-0 max-w-[720px] rounded-[6px] border border-green-light bg-green-wash px-5 py-4 text-[15.5px] leading-[1.62] text-[#2E3A35] text-pretty"
        >
          {rich(block.text)}
        </p>
      );

    case "resources":
      return (
        <ul key={key} aria-label={t.ui.resourcesLabel} className="m-0 max-w-[760px] list-none border-b border-line p-0">
          {block.items.map((item) => (
            <li key={item.resource} className="border-t border-line">
              <a href={talkPath(lang, item.resource)} className="group flex min-h-11 flex-col gap-1 py-4 no-underline">
                <span className="font-display text-[clamp(20px,2.2vw,24px)] leading-[1.2] font-semibold tracking-[-0.02em] text-[#171915] transition-colors duration-200 group-hover:text-brand">
                  {t.ui.resourceNames[item.resource]}
                </span>
                <span className="text-[16px] leading-[1.5] text-ink-soft text-pretty">{item.body}</span>
              </a>
            </li>
          ))}
        </ul>
      );

    case "downloads":
      return <Downloads key={key} items={block.items} />;

    case "posters": {
      const posters = [
        { src: "/assets/charla/cartel-mal.webp", alt: t.ui.posters.badAlt, caption: t.ui.posters.badCaption, tilt: "-rotate-[1.2deg]" },
        { src: "/assets/charla/cartel-bien.webp", alt: t.ui.posters.goodAlt, caption: t.ui.posters.goodCaption, tilt: "rotate-[0.8deg]" },
      ];
      return (
        <div key={key} className="grid max-w-[820px] grid-cols-2 gap-8 max-[620px]:grid-cols-1 max-[620px]:gap-10">
          {posters.map((poster) => (
            <figure key={poster.src} className="m-0 flex flex-col gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element -- export estático: sin optimizador */}
              <img
                src={poster.src}
                alt={poster.alt}
                width={720}
                height={1022}
                loading="lazy"
                decoding="async"
                className={`${poster.tilt} h-auto w-full rounded-[6px] border-[6px] border-[#FFFDF8] shadow-soft ring-1 ring-[#D6CFBF] max-[620px]:mx-auto max-[620px]:max-w-[340px]`}
              />
              <figcaption className="text-[15.5px] leading-[1.6] text-ink-soft text-pretty">{rich(poster.caption)}</figcaption>
            </figure>
          ))}
        </div>
      );
    }

    case "skill": {
      const skill = SKILLS[block.id];
      const text = t.skills[block.id];
      return (
        <article key={key} id={`skill-${block.id}`} className="max-w-[760px] scroll-mt-6 border-t border-line pt-6">
          <h3 className="m-0 font-display text-[clamp(21px,2.3vw,25px)] leading-[1.25] font-bold tracking-[-0.02em] text-[#171915] text-balance">
            <span translate="no">{skill.name}</span>
            <span className="font-semibold text-ink-soft">: {text.title}</span>
          </h3>
          <p className={`mt-2 mb-0 max-w-[68ch] ${bodyText}`}>{rich(text.body)}</p>
          <p className="mt-2 mb-3 text-[14.5px] leading-[1.55] text-muted">
            {t.ui.skillBy(skill.author, skill.repo.name, skill.repo.starsK)}
          </p>
          <div className="flex flex-wrap items-center gap-x-6">
            {"zip" in skill && skill.zip ? (
              <Downloads items={[{ href: skill.zip, label: t.ui.downloadZip, meta: t.ui.zipMeta }]} />
            ) : null}
            <a href={skill.url} target="_blank" rel="noopener" className={`${linkClass} group inline-flex min-h-11 items-center text-[16px]`}>
              {t.ui.viewSource}
              <ExternalArrow className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span className="sr-only"> {newTab}</span>
            </a>
          </div>
        </article>
      );
    }

    case "faq":
      return (
        <div key={key} className="max-w-[760px]">
          {block.items.map((item) => (
            <div key={item.q} className={ruled}>
              <h3 className="m-0 font-display text-[20px] leading-[1.3] font-semibold tracking-[-0.015em] text-[#171915] text-balance">
                {item.q}
              </h3>
              <div className="mt-2 flex flex-col gap-3">
                {item.a.map((paragraph) => (
                  <p key={paragraph} className={`m-0 ${bodyText}`}>
                    {rich(paragraph)}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      );

    case "ideas":
      return (
        <ol key={key} className="m-0 flex max-w-[760px] list-none flex-col gap-4 p-0">
          {block.items.map((item, i) => (
            <li
              key={item}
              className={`${slip} flex items-start gap-4 px-5 py-4 ${["-rotate-[0.6deg]", "rotate-[0.5deg]", "-rotate-[0.3deg]"][i % 3]}`}
            >
              <Seal />
              <span className="font-display text-[clamp(18px,2vw,21px)] leading-[1.35] font-semibold tracking-[-0.015em] text-[#171915]">
                {rich(item)}
              </span>
            </li>
          ))}
        </ol>
      );

    case "sources":
      return (
        <ol key={key} className="m-0 max-w-[760px] list-none p-0">
          {block.ids.map((id) => {
            const source = SOURCES[id];
            const text = t.sources[id];
            return (
              <li key={id} id={id.toLowerCase()} className={`${ruled} scroll-mt-6`}>
                <h3 className="m-0 text-[17px] leading-[1.45] font-semibold text-charcoal text-pretty">{text.title}</h3>
                <p className={`mt-1.5 mb-0 ${bodyText}`}>{rich(text.claim)}</p>
                <p className="mt-2 mb-0 text-[14.5px] text-muted">
                  {t.ui.where}: {source.slides.length ? t.ui.slides(source.slides) : t.ui.notOnScreen}
                </p>
                <ul className="m-0 mt-1 flex list-none flex-wrap gap-x-5 p-0">
                  {source.links.map((link) => (
                    <li key={link.url}>
                      <a href={link.url} target="_blank" rel="noopener" className={`${linkClass} group inline-flex min-h-11 items-center text-[15px]`}>
                        {link.label}
                        <ExternalArrow className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        <span className="sr-only"> {newTab}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      );
  }
}

export default function Blocks({ blocks, ...ctx }: { blocks: Block[] } & Ctx) {
  return <div className="flex flex-col gap-7">{blocks.map((block, i) => renderBlock(block, i, ctx))}</div>;
}
