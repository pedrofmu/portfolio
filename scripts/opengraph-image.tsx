/**
 * Generador de la imagen Open Graph. NO se ejecuta en el build.
 *
 * Por qué vive aquí y no en `src/app/`: con `output: export`, la convención
 * `opengraph-image.tsx` emite el fichero como `out/opengraph-image`, sin
 * extensión, y GitHub Pages lo sirve como `application/octet-stream`. Los
 * scrapers de Facebook, LinkedIn y X descartan esa respuesta. Con un PNG
 * estático en `src/app/opengraph-image.png` la URL sale con extensión y con
 * el Content-Type correcto.
 *
 * Para regenerar la imagen tras un cambio de diseño o de copy:
 *   1. cp scripts/opengraph-image.tsx src/app/
 *   2. npm run build
 *   3. cp out/opengraph-image src/app/opengraph-image.png
 *   4. rm src/app/opengraph-image.tsx
 *   5. npm run build   (comprueba que ahora sale out/opengraph-image.png)
 *
 * Al copiarlo a `src/app/`, corrige el import a `../lib/site`. Y si cambia lo
 * que se ve en la imagen, actualiza `src/app/opengraph-image.alt.txt`.
 */
import { ImageResponse } from "next/og";

import { SITE } from "../src/lib/site";

// Con `output: export` la imagen tiene que generarse en el build, no por petición.
export const dynamic = "force-static";

export const alt =
  "pedrofm — Desarrollo de software a medida para pymes en Alcoy, Alicante";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori (el motor de ImageResponse) solo entiende flexbox: nada de grid.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fbf8f2",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#16150f",
              color: "#fbfaf8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            p
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              fontWeight: 700,
              color: "#16150f",
            }}
          >
            <span>pedrofm</span>
            <span style={{ color: "#0f7263" }}>.</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 40,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#0f7263",
              marginBottom: 20,
            }}
          >
            Software a medida · Alcoy, Alicante
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#171915",
              maxWidth: 940,
            }}
          >
            Digitaliza tu pyme y recupera horas cada semana.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid #e4e1d8",
            paddingTop: 28,
            fontSize: 30,
            color: "#5c5850",
          }}
        >
          <div style={{ display: "flex" }}>
            Sistemas internos · Automatizaciones · IA
          </div>
          <div style={{ display: "flex", fontWeight: 600, color: "#0f7263" }}>
            {SITE.url.replace("https://", "")}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
