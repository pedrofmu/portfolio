/**
 * Generador de crestas de montaña a tinta. Lo usan el paisaje del hero y el
 * remate de la sección de contacto, para que todo el sitio comparta el mismo
 * trazo. Es puro y determinista: servidor y cliente dibujan lo mismo.
 */

export type Peak = { x: number; h: number; w: number };

export type RidgeShape = {
  base: number;
  peaks: Peak[];
  rough: number;
  seed: number;
};

type Canvas = {
  width: number;
  height: number;
  /** Desplazamiento horizontal de los picos dentro del lienzo. */
  pan?: number;
};

/** PRNG determinista: servidor y cliente generan exactamente el mismo trazo. */
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const round = (n: number) => Math.round(n * 10) / 10;

/** Devuelve el contorno superior de la cresta como lista de puntos. */
export function ridgePoints({ base, peaks, rough, seed }: RidgeShape, { width, pan = 0 }: Canvas) {
  const rand = mulberry32(seed);
  const phase = [rand() * 6.28, rand() * 6.28, rand() * 6.28];
  const points: [number, number][] = [];

  for (let x = -40; x <= width + 40; x += 6) {
    let highest = 0;
    let sum = 0;
    for (const peak of peaks) {
      // Exponente < 1: cumbres afiladas con laderas cóncavas, como en la
      // pintura de montaña china.
      const f = peak.h * Math.exp(-Math.pow(Math.abs(x - pan - peak.x) / peak.w, 0.85));
      highest = Math.max(highest, f);
      sum += f;
    }
    const swell =
      Math.sin(x * 0.006 + phase[0]) * 9 +
      Math.sin(x * 0.017 + phase[1]) * 4 +
      Math.sin(x * 0.041 + phase[2]) * 2;
    const jitter = (rand() - 0.5) * rough * 2;
    points.push([x, base - (highest + sum * 0.18) - swell + jitter]);
  }
  return points;
}

/** Contorno abierto (`closed: false`) o silueta rellenable hasta el pie del lienzo. */
export function toPath(points: [number, number][], closed: boolean, { width, height }: Canvas) {
  const line = points
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${round(x)} ${round(y)}`)
    .join("");
  return closed ? `${line}L${width + 40} ${height}L-40 ${height}Z` : line;
}
