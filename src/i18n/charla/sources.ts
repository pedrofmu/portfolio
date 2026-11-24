/**
 * Fuentes de la charla: lo que no depende del idioma (diapositivas en que
 * sale cada una y enlaces). El título y el dato, en cada diccionario.
 * Numeradas como en las notas del ponente (F1, F2…).
 */

type Source = {
  /** Diapositivas del deck en que sale; vacío si solo se cuenta de palabra. */
  slides: number[];
  links: { label: string; url: string }[];
};

export const SOURCES = {
  F1: {
    slides: [],
    links: [
      { label: "INE", url: "https://www.ine.es/dyngs/Prensa/ETICCE20251T2026.htm" },
      { label: "PDF", url: "https://ine.es/dyngs/Prensa/ETICCE20251T2026.pdf" },
    ],
  },
  F2: {
    slides: [4, 33],
    links: [{ label: "NBER", url: "https://www.nber.org/papers/w31161" }],
  },
  F3: {
    slides: [],
    links: [
      { label: "SSRN", url: "https://ssrn.com/abstract=4573321" },
      {
        label: "Harvard Business School",
        url: "https://www.library.hbs.edu/working-knowledge/humans-vs-machines-untangling-the-tasks-ai-can-and-cant-handle",
      },
    ],
  },
  F4: {
    slides: [6, 32],
    links: [
      {
        label: "Gallup",
        url: "https://news.gallup.com/poll/713222/americans-aren-sold-businesses-using-ai-advertising.aspx",
      },
    ],
  },
  F5: {
    slides: [6],
    links: [
      { label: "Gallup", url: "https://www.gallup.com/analytics/512066/bentley-business-in-society.aspx" },
    ],
  },
  F6: {
    slides: [],
    links: [
      { label: "OpenAI", url: "https://openai.com/index/sycophancy-in-gpt-4o/" },
      { label: "OpenAI (2)", url: "https://openai.com/index/expanding-on-sycophancy/" },
    ],
  },
  F7: {
    slides: [],
    links: [{ label: "OpenAI", url: "https://openai.com/index/why-language-models-hallucinate/" }],
  },
  F8: {
    slides: [],
    links: [
      { label: "METR", url: "https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/" },
      { label: "arXiv", url: "https://arxiv.org/abs/2507.09089" },
    ],
  },
  F32: {
    slides: [7],
    links: [
      {
        label: "PONT Data&Privacy",
        url: "https://privacy-web.nl/en/nieuws/let-op-gebruik-ai-chatbot-kan-leiden-tot-datalekken/",
      },
      { label: "NOS", url: "https://nos.nl/l/2532234" },
      {
        label: "Pinsent Masons",
        url: "https://pinsentmasons.com/out-law/news/dutch-dpa-warns-employers-of-ai-data-breaches",
      },
      {
        label: "Accountant.nl (2025)",
        url: "https://www.accountant.nl/nieuws/2025/12/ap-slaat-alarm-over-datalekken-door-ai/",
      },
      {
        label: "Euronews (OpenAI, Italia)",
        url: "https://www.euronews.com/2024/12/20/italys-privacy-watchdog-fines-openai-15-million-after-probe-into-chatgpt-data-collection",
      },
    ],
  },
  F29: {
    slides: [7],
    links: [
      {
        label: "American Bar Association",
        url: "https://www.americanbar.org/groups/business_law/resources/business-law-today/2024-february/bc-tribunal-confirms-companies-remain-liable-information-provided-ai-chatbot/",
      },
    ],
  },
  F28: {
    slides: [],
    links: [
      {
        label: "Goodwin",
        url: "https://www.goodwinlaw.com/en/insights/publications/2026/08/alerts-technology-dpc-eu-ai-act-transparency-obligations-now-in-force",
      },
      {
        label: "Lewis Silkin",
        url: "https://www.lewissilkin.com/insights/2026/07/27/the-digital-omnibus-on-ai-enters-into-force-today-102nedo",
      },
      {
        label: "Data Protection Report",
        url: "https://www.dataprotectionreport.com/2026/07/the-eu-ai-act-when-does-it-become-enforceable-now/",
      },
    ],
  },
  F9: {
    slides: [9, 10],
    links: [{ label: "Anthropic", url: "https://www.anthropic.com/research/tracing-thoughts-language-model" }],
  },
  F10: {
    slides: [10],
    links: [{ label: "ACM", url: "https://doi.org/10.1145/3442188.3445922" }],
  },
  F11: {
    slides: [],
    links: [
      { label: "PDF", url: "https://www.aepd.es/guias/decalogo-usuarios-asistentes-agentes-ia.pdf" },
      {
        label: "AEPD",
        url: "https://www.aepd.es/prensa-y-comunicacion/notas-de-prensa/la-aepd-publica-un-decalogo-para-delegar-tareas-en-asistentes",
      },
    ],
  },
  F12: {
    slides: [25, 27],
    links: [{ label: "EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" }],
  },
  F13: {
    slides: [25],
    links: [{ label: "BOE", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673" }],
  },
  F14: {
    slides: [27],
    links: [
      {
        label: "AEPD",
        url: "https://www.aepd.es/prensa-y-comunicacion/notas-de-prensa/aepd-publica-decalogo-recomendaciones-proteger-privacidad-al-usar-ia",
      },
      { label: "PDF", url: "https://www.aepd.es/guias/recomendaciones-ia-aepd.pdf" },
    ],
  },
  F15: {
    slides: [25],
    links: [
      { label: "OpenAI", url: "https://help.openai.com/en/articles/7730893-data-controls-faq" },
      { label: "OpenAI (empresas)", url: "https://openai.com/enterprise-privacy/" },
    ],
  },
  F16: {
    slides: [25],
    links: [
      { label: "Google", url: "https://support.google.com/gemini/answer/13594961" },
      { label: "Google (historial)", url: "https://support.google.com/gemini/answer/13278892" },
      { label: "Google Workspace", url: "https://support.google.com/a/answer/15706919" },
    ],
  },
  F17: {
    slides: [25],
    links: [
      { label: "Anthropic", url: "https://www.anthropic.com/news/updates-to-our-consumer-terms" },
      {
        label: "Anthropic (ayuda)",
        url: "https://privacy.claude.com/en/articles/12109829-how-do-i-change-my-model-improvement-privacy-settings",
      },
      {
        label: "Tom's Guide",
        url: "https://www.tomsguide.com/ai/claude/claude-ai-will-start-training-on-your-data-soon-heres-how-to-opt-out-before-the-deadline",
      },
    ],
  },
  F18: {
    slides: [26],
    links: [
      {
        label: "TechCrunch",
        url: "https://techcrunch.com/2025/07/31/your-public-chatgpt-queries-are-getting-indexed-by-google-and-other-search-engines",
      },
      {
        label: "The Register",
        url: "https://www.theregister.com/2025/08/01/openai_removes_chatgpt_selfdoxing_option/",
      },
    ],
  },
  F19: {
    slides: [28],
    links: [
      { label: "Fast Company", url: "https://www.fastcompany.com/91417492/deloitte-ai-report-australian-government" },
      { label: "The Register", url: "https://www.theregister.com/2025/10/06/deloitte_ai_report_australia/" },
    ],
  },
  F20: {
    slides: [7, 28],
    links: [
      {
        label: "Abogacía Española (TC, 2024)",
        url: "https://www.abogacia.es/publicaciones/blogs/blog-comunicacion-y-marketing-juridicos/convencer-al-juez-citando-jurisprudencia-con-lealtad/",
      },
      {
        label: "Xataka (TSJ de Canarias)",
        url: "https://www.xataka.com/magnet/tribunal-superior-justicia-canarias-multa-a-abogado-citar-48-sentencias-falsas-se-habia-sugerido-ia",
      },
      {
        label: "Economist & Jurist (TSJ de Galicia)",
        url: "https://www.economistjurist.es/actualidad-juridica/jurisprudencia/el-tsxg-fija-un-antes-y-un-despues-en-el-uso-de-la-ia-por-los-abogados-multa-de-1-800-euros-por-presentar-un-recurso-con-jurisprudencia-inventada/",
      },
    ],
  },
  F21: {
    slides: [7, 31],
    links: [{ label: "EUR-Lex", url: "https://eur-lex.europa.eu/eli/dir/2024/825/oj" }],
  },
  F22: {
    slides: [],
    links: [
      {
        label: "Ineria Management",
        url: "https://ineriamanagement.com/greenwashing-directiva-2024-825-27-septiembre-2026/",
      },
      {
        label: "CEC",
        url: "https://www.cec.es/greenwashing-que-cambia-para-las-empresas-a-partir-del-27-de-septiembre-de-2026/",
      },
      {
        label: "Pacto Mundial",
        url: "https://www.pactomundial.org/leyes-directivas-normativas-sostenibilidad/directiva-ecoblanqueo-greenwashing/",
      },
    ],
  },
  F23: {
    slides: [30],
    links: [
      {
        label: "Comisión Europea",
        url: "https://www.eeas.europa.eu/delegations/montenegro/consumer-protection-enabling-sustainable-choices-and-ending-greenwashing_en",
      },
    ],
  },
  F24: {
    slides: [],
    links: [
      {
        label: "AESAN",
        url: "https://aesan.gob.es/seguridad-alimentaria/informacion-alimentaria/declaraciones-nutricionales",
      },
      { label: "Reglamento (UE) 432/2012", url: "https://eur-lex.europa.eu/eli/reg/2012/432/oj/spa" },
    ],
  },
  F30: {
    slides: [],
    links: [
      {
        label: "Ministerio para la Transformación Digital",
        url: "https://digital.gob.es/comunicacion/notas-prensa/mtdfp/2026/05/el-gobierno-aprueba-el-proyecto-de-ley-que-garantizara-una-super.html",
      },
      {
        label: "CMS",
        url: "https://cms.law/en/esp/publication/claves-del-proyecto-de-ley-organica-de-inteligencia-artificial",
      },
    ],
  },
  F31: {
    slides: [],
    links: [
      {
        label: "Google Cloud",
        url: "https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference",
      },
      { label: "arXiv", url: "https://arxiv.org/abs/2508.15734" },
      {
        label: "DCD",
        url: "https://www.datacenterdynamics.com/en/news/google-median-gemini-prompt-uses-024-watt-hours-of-power-and-consumes-026ml-of-water/",
      },
    ],
  },
  F25: {
    slides: [],
    links: [
      {
        label: "Microsoft",
        url: "https://www.microsoft.com/en-us/worklab/work-trend-index/ai-at-work-is-here-now-comes-the-hard-part",
      },
    ],
  },
  F26: {
    slides: [],
    links: [
      { label: "EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },
      { label: "Cuatrecasas", url: "https://www.cuatrecasas.com/es/spain/intellectual-property/art/digital-omnibus-ai-has-been-published" },
    ],
  },
  F27: {
    slides: [],
    links: [
      {
        label: "AEPD",
        url: "https://www.aepd.es/prensa-y-comunicacion/notas-de-prensa/agencia-publica-politica-interna-uso-inteligencia-artificial",
      },
      { label: "PDF", url: "https://www.aepd.es/documento/politica-iag-aepd.pdf" },
    ],
  },
} satisfies Record<string, Source>;

export type SourceId = keyof typeof SOURCES;
