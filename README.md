# Portfolio B2B - Pedro FM

Recreacion en Next.js App Router + TypeScript + Tailwind CSS del diseno del archivo `web-renderizada.pdf`, con enfoque de conversion B2B para servicios empresariales.

## Stack

- Next.js 16 (App Router)
- TypeScript (strict)
- Tailwind CSS
- Framer Motion
- ESLint + Prettier

## Ejecutar en local

### Con npm

```bash
npm install
npm run dev
```

### Con pnpm

```bash
pnpm install
pnpm dev
```

Abrir `http://localhost:3000`.

## Scripts utiles

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run format
npm run format:check
```

## Decisiones tecnicas

- **Fidelidad visual**: layout de una sola pagina, jerarquia tipografica, bloques en orden identico, bordes y decoracion roja tipo hand-drawn.
- **Fuentes**:
  - Aproximacion de `TT Firs Neue` -> `Space Grotesk` (display y titulos).
  - `Courier Prime` para textos de apoyo y cuerpo (coincide con el PDF).
  - Aproximacion de `Arsenica Antiqua` -> `Alegreya SC` para la firma superior.
- **Design tokens**: definidos en `tailwind.config.ts` para `bg`, `text`, `accent`, `border` y `button`.
- **Animaciones**: scroll reveal y hover discretos con Framer Motion, respetando `prefers-reduced-motion`.
- **A11y/SEO**: estructura semantica (`header`, `main`, `section`, `footer`), `alt` descriptivos, metadata OG en `src/app/layout.tsx`.

## Estructura

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    about.tsx
    case-studies.tsx
    contact-cta.tsx
    cta-button.tsx
    doodles.tsx
    hero.tsx
    motion-reveal.tsx
    navbar.tsx
    section-heading.tsx
  lib/
    data.ts
    utils.ts
public/assets/
  caso-agenda-b2b.jpg
  caso-solodb.png
  caso-iris.jpg
  pedro-fernandez.jpg
```

## Como actualizar assets o copy

1. **Assets**: reemplaza archivos dentro de `public/assets/` respetando nombre y proporcion recomendada.
2. **Textos**: actualiza `src/lib/data.ts`.
3. **Estilo/tokens**: cambia `tailwind.config.ts` y, si hace falta, `src/app/globals.css`.
4. **Composicion por seccion**: edita componentes en `src/components/`.
