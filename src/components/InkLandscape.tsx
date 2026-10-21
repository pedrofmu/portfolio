"use client";

import type { CSSProperties } from "react";
import {
  m,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "motion/react";

import { ridgePoints, toPath, type RidgeShape } from "../lib/inkRidge";

/**
 * Paisaje sumi-e del hero: cuatro crestas de tinta que se pintan de lejos a
 * cerca, bancos de niebla a la deriva y una bandada que cruza de vez en cuando.
 * Todo es SVG generado aquí mismo, sin imágenes.
 */

// El lienzo es el doble de ancho que la composición principal (1600 de
// ancho, centrada): el SVG siempre encaja por altura y en pantallas anchas
// se descubre más cordillera por los lados en lugar de ampliarse y cortar
// las cumbres por arriba.
const VIEW_W = 3200;
const VIEW_H = 700;
const PAN = (VIEW_W - 1600) / 2;

type Ridge = RidgeShape & {
  id: string;
  ink: string;
  opacity: number;
  /** Fracción del scroll que la cresta "arrastra": las lejanas se quedan atrás. */
  lag: number;
  contour?: boolean;
};

// Picos colocados a mano (en coordenadas de la composición central, 0–1600)
// para controlar el encuadre: los altos quedan en el centro-derecha (visibles
// en móvil, donde el SVG se recorta por los lados) y bajo el texto las
// crestas se mantienen bajas. Los de fuera de 0–1600 solo asoman en
// pantallas anchas.
const RIDGES: Ridge[] = [
  {
    id: "far",
    base: 410,
    ink: "#7D8C87",
    opacity: 0.34,
    rough: 2.2,
    seed: 11,
    lag: 0.42,
    peaks: [
      { x: -620, h: 210, w: 130 },
      { x: -330, h: 150, w: 150 },
      { x: 180, h: 70, w: 160 },
      { x: 560, h: 120, w: 150 },
      { x: 820, h: 250, w: 120 },
      { x: 1010, h: 190, w: 110 },
      { x: 1290, h: 230, w: 140 },
      { x: 1520, h: 120, w: 170 },
      { x: 1880, h: 220, w: 120 },
      { x: 2150, h: 160, w: 150 },
    ],
  },
  {
    id: "mid-far",
    base: 470,
    ink: "#5F6F69",
    opacity: 0.46,
    rough: 2.6,
    seed: 23,
    lag: 0.3,
    peaks: [
      { x: -700, h: 120, w: 140 },
      { x: -420, h: 190, w: 105 },
      { x: -150, h: 110, w: 140 },
      { x: 60, h: 80, w: 140 },
      { x: 380, h: 70, w: 160 },
      { x: 700, h: 170, w: 100 },
      { x: 930, h: 120, w: 130 },
      { x: 1160, h: 200, w: 105 },
      { x: 1450, h: 140, w: 150 },
      { x: 1760, h: 110, w: 130 },
      { x: 2020, h: 185, w: 105 },
      { x: 2300, h: 120, w: 140 },
    ],
  },
  {
    id: "mid-near",
    base: 545,
    ink: "#3D4B45",
    opacity: 0.62,
    rough: 3,
    seed: 37,
    lag: 0.17,
    contour: true,
    peaks: [
      { x: -640, h: 110, w: 120 },
      { x: -300, h: 80, w: 160 },
      { x: 0, h: 70, w: 170 },
      { x: 320, h: 50, w: 190 },
      { x: 610, h: 95, w: 130 },
      { x: 860, h: 150, w: 95 },
      { x: 1060, h: 90, w: 140 },
      { x: 1380, h: 120, w: 120 },
      { x: 1600, h: 90, w: 140 },
      { x: 1900, h: 135, w: 100 },
      { x: 2250, h: 85, w: 160 },
    ],
  },
  {
    id: "near",
    base: 625,
    ink: "#1F2A26",
    opacity: 0.8,
    rough: 3.4,
    seed: 53,
    lag: 0.05,
    contour: true,
    peaks: [
      { x: -560, h: 90, w: 130 },
      { x: -230, h: 60, w: 190 },
      { x: 140, h: 55, w: 200 },
      { x: 520, h: 40, w: 220 },
      { x: 760, h: 85, w: 120 },
      { x: 990, h: 115, w: 90 },
      { x: 1240, h: 60, w: 170 },
      { x: 1560, h: 95, w: 160 },
      { x: 1840, h: 70, w: 180 },
      { x: 2200, h: 105, w: 120 },
    ],
  },
];

const CANVAS = { width: VIEW_W, height: VIEW_H, pan: PAN };

const LAYERS = RIDGES.map((ridge) => {
  const points = ridgePoints(ridge, CANVAS);
  const top = Math.min(...points.map(([, y]) => y));
  return {
    ...ridge,
    top,
    fill: toPath(points, true, CANVAS),
    contourPath: toPath(points, false, CANVAS),
  };
});

// Bancos de niebla, intercalados entre crestas (índice = detrás de esa capa).
const MISTS = [
  { before: 1, top: "44%", left: "-10%", width: "75%", height: "16%", duration: 52, delay: -8 },
  { before: 2, top: "56%", left: "35%", width: "80%", height: "14%", duration: 64, delay: -30 },
  { before: 3, top: "66%", left: "-20%", width: "90%", height: "16%", duration: 58, delay: -14 },
  { before: 4, top: "80%", left: "10%", width: "100%", height: "22%", duration: 70, delay: -40 },
];

// Pájaros de la bandada: posición dentro del grupo, tamaño, ritmo de aleteo
// y del vaivén propio, para que no se muevan como un bloque.
const BIRDS = [
  { x: 0, y: 16, s: 1, flap: 0.86, bob: 3.1, d: 0 },
  { x: 30, y: 4, s: 0.86, flap: 0.78, bob: 3.7, d: 0.21 },
  { x: 54, y: 22, s: 0.9, flap: 0.92, bob: 2.8, d: 0.37 },
  { x: 80, y: 0, s: 0.72, flap: 0.74, bob: 4.2, d: 0.12 },
  { x: 102, y: 14, s: 0.78, flap: 0.83, bob: 3.4, d: 0.5 },
  { x: 128, y: 26, s: 0.62, flap: 0.7, bob: 3.9, d: 0.29 },
];

// Cada ala es una media luna que sale del cuerpo (0, 0) hacia la punta, en
// su propio <svg> con la caja ajustada al trazo. El aleteo la gira sobre el
// cuerpo con CSS: al ser un `transform` de una caja HTML lo anima el
// compositor, sin repintar las crestas de debajo en cada batida (y arranca en
// cuanto se pinta el HTML; SMIL espera al evento `load` de toda la página).
const WINGS = [
  ["wing-left", "-14 -6 14 8", "M0 0Q-6 -6 -14 -3Q-7 -1.6 0 2Z", -14],
  ["wing-right", "0 -6 14 8", "M0 0Q6 -6 14 -3Q7 -1.6 0 2Z", 0],
] as const;

function Layer({
  layer,
  index,
  progress,
  reduce,
  playState,
}: {
  layer: (typeof LAYERS)[number];
  index: number;
  progress: MotionValue<number>;
  reduce: boolean;
  playState: CSSProperties["animationPlayState"];
}) {
  // Rango de entrada/salida con valores fijos: Motion lo convierte en una
  // animación de `ScrollTimeline` que corre en el compositor, sin JS por cada
  // evento de scroll. El hero mide ~100svh, así que `lag × 100svh` a lo largo
  // del recorrido equivale a arrastrar `lag` px por cada px de scroll.
  const transform = useTransform(progress, [0, 1], ["translateY(0svh)", `translateY(${layer.lag * 100}svh)`]);
  const gradientId = `ink-${layer.id}`;
  const sweep = { animationDelay: `${index * 240}ms`, animationPlayState: playState };

  return (
    <m.div style={reduce ? undefined : { transform }} className="absolute inset-0 will-change-transform">
      <div style={sweep} className="ink-sweep absolute inset-y-0 left-0">
        <div style={sweep} className="ink-sweep-content absolute inset-y-0 left-0">
          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            preserveAspectRatio="xMidYMax slice"
            className="absolute inset-0 h-full w-full"
          >
            <defs>
              <linearGradient
                id={gradientId}
                gradientUnits="userSpaceOnUse"
                x1="0"
                x2="0"
                y1={layer.top}
                y2={layer.base + 70}
              >
                <stop offset="0" stopColor={layer.ink} stopOpacity={layer.opacity} />
                <stop offset="0.5" stopColor={layer.ink} stopOpacity={layer.opacity * 0.6} />
                <stop offset="1" stopColor={layer.ink} stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={layer.fill} fill={`url(#${gradientId})`} filter="url(#ink-wash)" />
            {layer.contour && (
              <path
                d={layer.contourPath}
                fill="none"
                stroke={layer.ink}
                strokeOpacity={layer.opacity * 0.55}
                strokeWidth="1.6"
                strokeLinejoin="round"
                filter="url(#ink-dry)"
              />
            )}
          </svg>
        </div>
      </div>
    </m.div>
  );
}

export default function InkLandscape({
  progress,
  paused,
}: {
  /** Avance del scroll por el hero, de 0 a 1 (`useScroll` con `target`). */
  progress: MotionValue<number>;
  paused: boolean;
}) {
  const reduce = useReducedMotion() ?? false;
  const playState = paused ? "paused" : "running";

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Filtros compartidos (también los usa el subrayado del titular). No
          puede ir con `display: none` o algunos navegadores ignoran el filtro. */}
      <svg className="absolute h-0 w-0" focusable="false">
        <defs>
          <filter id="ink-wash" x="-5%" y="-20%" width="110%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.011 0.045" numOctaves="3" seed="7" result="warp" />
            <feDisplacementMap in="SourceGraphic" in2="warp" scale="16" xChannelSelector="R" yChannelSelector="G" result="bled" />
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="3" result="grain" />
            <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -0.55 0 0 0 1.08" result="speckle" />
            <feComposite in="bled" in2="speckle" operator="in" />
          </filter>
          <filter id="ink-dry" x="-5%" y="-50%" width="110%" height="200%">
            <feTurbulence type="fractalNoise" baseFrequency="0.02 0.3" numOctaves="2" seed="19" result="streak" />
            <feDisplacementMap in="SourceGraphic" in2="streak" scale="6" xChannelSelector="R" yChannelSelector="G" result="rough" />
            <feColorMatrix in="streak" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 2.4 0 0 -0.7" result="gaps" />
            <feComposite in="rough" in2="gaps" operator="in" />
          </filter>
          <filter id="ink-edge" x="-2%" y="-60%" width="104%" height="220%">
            <feTurbulence type="fractalNoise" baseFrequency="0.05 0.4" numOctaves="2" seed="5" result="warp" />
            <feDisplacementMap in="SourceGraphic" in2="warp" scale="3.5" xChannelSelector="R" yChannelSelector="G" result="rough" />
            <feColorMatrix in="warp" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 1.8 0 0 -0.2" result="dry" />
            <feComposite in="rough" in2="dry" operator="in" />
          </filter>
        </defs>
      </svg>

      <div className="paper-grain absolute inset-0" />

      <div className="absolute inset-x-0 bottom-0 h-[74%] max-[900px]:h-[55%]">
        {LAYERS.map((layer, index) => (
          <div key={layer.id} className="contents">
            {MISTS.filter((mist) => mist.before === index).map((mist) => (
              <Mist key={mist.top} mist={mist} playState={playState} />
            ))}
            <Layer
              layer={layer}
              index={index}
              progress={progress}
              reduce={reduce}
              playState={playState}
            />
          </div>
        ))}
        {MISTS.filter((mist) => mist.before === LAYERS.length).map((mist) => (
          <Mist key={mist.top} mist={mist} playState={playState} />
        ))}
        {/* Funde el pie con el fondo de la sección siguiente: al hacer scroll
            las crestas lejanas bajan y, sin esto, se cortarían en seco. */}
        <div className="absolute inset-x-0 bottom-0 h-[22%] bg-[linear-gradient(180deg,rgba(251,248,242,0)_0%,#FBF8F2_100%)]" />
      </div>

      <div
        style={{ animationPlayState: playState }}
        className="flock absolute top-[10%] left-0 max-[900px]:top-[8%]"
      >
        {/* Mismo encuadre que un viewBox de 172 × 56 a 150 px de ancho (130 en móvil). */}
        <div className="relative h-[56px] w-[172px] origin-top-left scale-[0.872] max-[620px]:scale-[0.756]">
          {BIRDS.map((bird) => (
            <div
              key={bird.x}
              style={{ left: bird.x + 18, top: bird.y + 16, scale: bird.s }}
              className="absolute origin-top-left"
            >
              <div
                className="bird-bob"
                style={{
                  animationDuration: `${bird.bob}s`,
                  animationDelay: `-${bird.d * 4}s`,
                  animationPlayState: playState,
                }}
              >
                {WINGS.map(([side, viewBox, d, left]) => (
                  <svg
                    key={side}
                    viewBox={viewBox}
                    width="14"
                    height="8"
                    style={{
                      left,
                      animationDuration: `${bird.flap}s`,
                      animationDelay: `-${bird.d}s`,
                      animationPlayState: playState,
                    }}
                    className={`${side} absolute -top-1.5 overflow-visible`}
                  >
                    <path d={d} fill="#26312C" fillOpacity="0.82" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Mist({
  mist,
  playState,
}: {
  mist: (typeof MISTS)[number];
  playState: CSSProperties["animationPlayState"];
}) {
  return (
    <div
      style={{
        top: mist.top,
        left: mist.left,
        width: mist.width,
        height: mist.height,
        animationDuration: `${mist.duration}s`,
        animationDelay: `${mist.delay}s`,
        animationPlayState: playState,
      }}
      className="mist absolute rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(251,248,242,0.92)_0%,rgba(251,248,242,0.6)_40%,rgba(251,248,242,0)_70%)]"
    />
  );
}
