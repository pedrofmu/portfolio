#!/usr/bin/env node
/**
 * Descargas de la charla «IA sin humo», en `public/descargas/ia-sin-humo/`:
 *
 * - `<idioma>/<política>.docx`: la plantilla de política de uso en Word.
 * - `ia-sin-humo-diapositivas.pdf`: el PDF del deck, comprimido con Ghostscript
 *   (`gs`). Si no hay `gs` o no está el original, se deja el que haya.
 *
 * Las plantillas son la única fuente: tras cambiar una, `node scripts/charla-downloads.mjs`
 * y se suben los ficheros generados. Solo usa Node (zlib), sin dependencias.
 * Las skills que se recomiendan son públicas y se enlazan a su origen: no se
 * empaquetan aquí (ver `src/i18n/charla/skills.ts`).
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { crc32, deflateRawSync } from "node:zlib";

const ROOT = path.resolve(import.meta.dirname, "..");
const CONTENT = path.join(ROOT, "src/content/charla");
const OUT = path.join(ROOT, "public/descargas/ia-sin-humo");
const SLIDES = path.join(ROOT, "presentacion_contexto/IA sin humo · BioCultura Madrid 2026.pdf");

/** Plantilla de política de cada idioma: se publica con el mismo nombre en .docx. */
const POLICY = { es: "politica-uso-ia", ca: "politica-us-ia", en: "ai-use-policy" };

// ---------------------------------------------------------------------------
// ZIP mínimo (deflate), el contenedor del .docx. Fecha fija: el mismo contenido da el mismo fichero.

const DOS_TIME = 0;
const DOS_DATE = ((2026 - 1980) << 9) | (11 << 5) | 24;

function zip(entries) {
  const locals = [];
  const centrals = [];
  let offset = 0;
  for (const { name, data } of entries) {
    const nameBuf = Buffer.from(name, "utf8");
    const body = deflateRawSync(data, { level: 9 });
    const crc = crc32(data);
    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4);
    local.writeUInt16LE(0x0800, 6); // nombres en UTF-8
    local.writeUInt16LE(8, 8);
    local.writeUInt16LE(DOS_TIME, 10);
    local.writeUInt16LE(DOS_DATE, 12);
    local.writeUInt32LE(crc, 14);
    local.writeUInt32LE(body.length, 18);
    local.writeUInt32LE(data.length, 22);
    local.writeUInt16LE(nameBuf.length, 26);
    locals.push(local, nameBuf, body);

    const central = Buffer.alloc(46);
    central.writeUInt32LE(0x02014b50, 0);
    central.writeUInt16LE(20, 4);
    central.writeUInt16LE(20, 6);
    central.writeUInt16LE(0x0800, 8);
    central.writeUInt16LE(8, 10);
    central.writeUInt16LE(DOS_TIME, 12);
    central.writeUInt16LE(DOS_DATE, 14);
    central.writeUInt32LE(crc, 16);
    central.writeUInt32LE(body.length, 20);
    central.writeUInt32LE(data.length, 24);
    central.writeUInt16LE(nameBuf.length, 28);
    central.writeUInt32LE(offset, 42);
    centrals.push(central, nameBuf);
    offset += 30 + nameBuf.length + body.length;
  }
  const centralSize = centrals.reduce((n, b) => n + b.length, 0);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(entries.length, 8);
  end.writeUInt16LE(entries.length, 10);
  end.writeUInt32LE(centralSize, 12);
  end.writeUInt32LE(offset, 16);
  return Buffer.concat([...locals, ...centrals, end]);
}

// ---------------------------------------------------------------------------
// .docx mínimo a partir del Markdown de la plantilla: `#`, `##`, `- ` y párrafos.

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function paragraph(text, style) {
  const pPr = style ? `<w:pPr><w:pStyle w:val="${style}"/></w:pPr>` : "";
  return `<w:p>${pPr}<w:r><w:t xml:space="preserve">${esc(text)}</w:t></w:r></w:p>`;
}

function docx(markdown, lang) {
  const body = markdown
    .split("\n")
    .filter((line) => line.trim())
    .map((line) => {
      if (line.startsWith("## ")) return paragraph(line.slice(3), "Heading2");
      if (line.startsWith("# ")) return paragraph(line.slice(2), "Title");
      if (line.startsWith("- ")) return paragraph(line.slice(2), "ListBullet");
      return paragraph(line);
    })
    .join("");
  const ns = 'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"';
  const font = `<w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Calibri"/>`;
  const styles = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles ${ns}>
<w:docDefaults><w:rPrDefault><w:rPr>${font}<w:sz w:val="22"/><w:lang w:val="${lang}"/></w:rPr></w:rPrDefault>
<w:pPrDefault><w:pPr><w:spacing w:after="120" w:line="276" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults>
<w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/></w:style>
<w:style w:type="paragraph" w:styleId="Title"><w:name w:val="Title"/><w:basedOn w:val="Normal"/><w:pPr><w:spacing w:after="240"/></w:pPr><w:rPr><w:b/><w:color w:val="171915"/><w:sz w:val="36"/></w:rPr></w:style>
<w:style w:type="paragraph" w:styleId="Heading2"><w:name w:val="heading 2"/><w:basedOn w:val="Normal"/><w:pPr><w:keepNext/><w:spacing w:before="280" w:after="100"/><w:outlineLvl w:val="1"/></w:pPr><w:rPr><w:b/><w:color w:val="0F7263"/><w:sz w:val="26"/></w:rPr></w:style>
<w:style w:type="paragraph" w:styleId="ListBullet"><w:name w:val="List Bullet"/><w:basedOn w:val="Normal"/><w:pPr><w:numPr><w:ilvl w:val="0"/><w:numId w:val="1"/></w:numPr><w:spacing w:after="60"/></w:pPr></w:style>
</w:styles>`;
  const numbering = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:numbering ${ns}>
<w:abstractNum w:abstractNumId="0"><w:lvl w:ilvl="0"><w:start w:val="1"/><w:numFmt w:val="bullet"/><w:lvlText w:val="–"/><w:lvlJc w:val="left"/><w:pPr><w:ind w:left="360" w:hanging="360"/></w:pPr></w:lvl></w:abstractNum>
<w:num w:numId="1"><w:abstractNumId w:val="0"/></w:num>
</w:numbering>`;
  const document = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document ${ns}><w:body>${body}<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1134" w:right="1134" w:bottom="1134" w:left="1134" w:header="567" w:footer="567" w:gutter="0"/></w:sectPr></w:body></w:document>`;
  const rel = (id, type, target) =>
    `<Relationship Id="${id}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/${type}" Target="${target}"/>`;
  const files = {
    "[Content_Types].xml": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
<Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
<Override PartName="/word/numbering.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml"/>
</Types>`,
    "_rels/.rels": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${rel("rId1", "officeDocument", "word/document.xml")}</Relationships>`,
    "word/_rels/document.xml.rels": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${rel("rId1", "styles", "styles.xml")}${rel("rId2", "numbering", "numbering.xml")}</Relationships>`,
    "word/document.xml": document,
    "word/styles.xml": styles,
    "word/numbering.xml": numbering,
  };
  return zip(Object.entries(files).map(([name, text]) => ({ name, data: Buffer.from(text, "utf8") })));
}

// ---------------------------------------------------------------------------

for (const lang of ["es", "ca", "en"]) {
  const dir = path.join(OUT, lang);
  mkdirSync(dir, { recursive: true });

  const policy = POLICY[lang];
  const markdown = readFileSync(path.join(CONTENT, lang, `${policy}.md`), "utf8");
  writeFileSync(path.join(dir, `${policy}.docx`), docx(markdown, { es: "es-ES", ca: "ca-ES", en: "en-GB" }[lang]));
  console.log(`${lang}/${policy}.docx`);
}

if (existsSync(SLIDES)) {
  try {
    execFileSync("gs", [
      "-q",
      "-sDEVICE=pdfwrite",
      "-dPDFSETTINGS=/ebook",
      "-dCompatibilityLevel=1.6",
      "-dNOPAUSE",
      "-dBATCH",
      `-sOutputFile=${path.join(OUT, "ia-sin-humo-diapositivas.pdf")}`,
      SLIDES,
    ]);
    console.log("ia-sin-humo-diapositivas.pdf");
  } catch {
    console.warn("Sin Ghostscript (gs): no se ha regenerado el PDF de las diapositivas.");
  }
}
