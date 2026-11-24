/**
 * Skills públicas que se recomiendan en la charla: lo que no depende del
 * idioma. Solo skills muy usadas y mantenidas (revisadas en noviembre de
 * 2026); no se redistribuyen: se enlaza a su origen. Las de marketingskills
 * publican en cada versión un ZIP por skill listo para claude.ai
 * (`<nombre>-claude-web.zip`, con la carpeta y la descripción que pide
 * Claude); `releases/latest/download` apunta siempre a la última.
 */

const MARKETING = "https://github.com/coreyhaines31/marketingskills";

type PublicSkill = {
  /** `name` de la skill, tal como aparece al instalarla. */
  name: string;
  author: string;
  /** Repositorio y estrellas aproximadas en GitHub, en miles (nov. 2026). */
  repo: { name: string; url: string; starsK: number };
  /** Página de la skill en GitHub. */
  url: string;
  /** ZIP listo para subir a Claude o Gemini, si el autor lo publica. */
  zip?: string;
};

const marketing = (name: string): PublicSkill => ({
  name,
  author: "Corey Haines",
  repo: { name: "marketingskills", url: MARKETING, starsK: 60 },
  url: `${MARKETING}/tree/main/skills/${name}`,
  zip: `${MARKETING}/releases/latest/download/${name}-claude-web.zip`,
});

export const SKILLS = {
  copywriting: marketing("copywriting"),
  "copy-editing": marketing("copy-editing"),
  humanizer: {
    name: "humanizer",
    author: "blader",
    repo: { name: "humanizer", url: "https://github.com/blader/humanizer", starsK: 70 },
    url: "https://github.com/blader/humanizer",
  },
  "customer-research": marketing("customer-research"),
  social: marketing("social"),
  emails: marketing("emails"),
  "seo-audit": marketing("seo-audit"),
  "ai-seo": marketing("ai-seo"),
} satisfies Record<string, PublicSkill>;

export type SkillId = keyof typeof SKILLS;
