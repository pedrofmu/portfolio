# Design system: ink on paper

pedrofm.dev looks like a **sumi-e ink painting on washi paper**: warm paper,
grey-green ink washes and mist, one pine-green accent. Hand-made marks (brush
strokes, a square seal, slightly tilted paper slips) take the place of
generic UI chrome. It should read as calm, crafted and specific. It should
never read as a SaaS template.

The hero (`src/components/Hero.tsx` + `src/components/InkLandscape.tsx`) is the
reference implementation. When in doubt, match it.

## Principles

1. **Paper, not screens.** Surfaces are sheets of paper: warm cream, almost
   square corners, a hairline edge and a long soft shadow when they lift. No
   glassmorphism, no backdrop blur, no pure white panels, no gradient washes.
2. **Ink, not colour.** Everything besides the accent is ink: charcoal text,
   grey-green washes. The brand green is the only colour, and it is used for
   action and emphasis, not decoration.
3. **One memorable thing per view.** The landscape is the hero's moment.
   Other sections stay quiet: one accent at most (a seal, a brush stroke, a
   tilted print, the contact ridge).
4. **Hand-made over generic.** If an icon or mark is needed, draw it as a
   brush stroke (uneven length, slightly curved, round caps) rather than a
   perfectly geometric glyph.
5. **Less copy.** Remove noise instead of styling it. No eyebrow labels above
   headings, no meta strings joined with middle dots, no trust-badge rows.

## Tokens

Defined in `src/app/globals.css` (`@theme`). Use the Tailwind names and never
hard-code a new colour without adding it here first.

### Colour

| Role | Token / value | Use |
|---|---|---|
| Paper | `cream` / `paper` `#FBF8F2` | Page and section background |
| Sheet | `#FFFDF8` | "White" sections, cards, quote sheets, print borders |
| Footer paper | `#F3EDE1` | Footer only |
| Ink | `charcoal` `#24312C`, headings `#171915` / `ink` `#16150F` | Text |
| Soft ink | `ink-soft` `#5C5850`, `#4F5852` | Body copy on paper |
| Muted | `muted` `#7B766B`, `#6B746E` | Secondary text |
| Accent | `brand` = `green` `#0F7263` | Buttons, links, seals, emphasis |
| Accent dark | `brand-dark` = `green-dark` `#0A5548` | Hover |
| Accent tints | `green-light` `#D4E7E0`, `green-wash` `#EEF4F0`, seal fill `#E3EEE7` | Quiet fills |
| Paper edge | `line` `#E4E1D8`, slip border `#D6CFBF`, control border `#CBC4B4` | Borders |
| Focus | `#3F9C8A` | `:focus-visible` outline (3px, offset 4px) |

Landscape ink (far → near): `#7D8C87`, `#5F6F69`, `#3D4B45`, `#1F2A26`.
Birds and brush marks: `#26312C` at ~0.8 opacity.

There is **one green**. Don't reintroduce `#1E6B4B` or any other green, and
don't add a second accent colour (no vermilion, no gold).

### Type

- **Display:** Bricolage Grotesque (`font-display`): headings, logo. Bold,
  tight tracking (`-0.035em` to `-0.052em` on large sizes), `text-balance`.
- **Body:** Instrument Sans (`font-body`): everything else, `text-pretty`,
  line-height 1.58–1.72, lines under ~70ch.
- Sentence case everywhere. **No all-caps labels and no tracked-out
  eyebrows.** A small label is 13.5–15px semibold in sentence case.
- The only highlighted phrase on the page is the hero's brush-underlined
  "recupera horas". Don't add more single-word colour/italic accents to
  headings.

### Shape and depth

| Element | Radius |
|---|---|
| Paper slips (cards, menus, quote sheets) | `rounded-[6px]`–`rounded-md` (8px) |
| Image cards | `rounded-lg` (10px) |
| Primary/secondary buttons | `rounded-[13px]` (`rounded-[11px]` in compact bars) |
| Icon buttons (menu, carousel arrows) | `rounded-[10px]`–`rounded-[12px]` |
| Seal | `rounded-[5px]` |

Don't use `rounded-full` on buttons or icon buttons. Dots and tiny markers
may stay round.

Shadow: `shadow-soft` = hairline edge `0 1px 0 rgba(36,49,44,.05)` + long
drop `0 26px 40px -26px rgba(31,42,38,.45)`. It is the only card shadow. A
resting sheet may use only the hairline.

Paper slips may tilt slightly (`-1.2deg` to `+0.8deg`), alternating, and
straighten on hover (`hover:[rotate:0deg]`, a lift of `-translate-y-1`).

## Components and patterns

Reuse these before inventing new ones.

- **Section shell:** `Section` / `SectionHeading` / `containerClass` in
  `src/components/ui.tsx`. Alternate `paper` and `white` (= sheet `#FFFDF8`
  with a top `border-line`).
- **Buttons:** primary = `bg-brand text-cream rounded-[13px] px-7 py-[15px]
  font-bold` with a `shadow-[0_12px_30px_rgba(15,114,99,0.2)]` and
  `hover:-translate-y-0.5 hover:bg-brand-dark`. Secondary = `border
  border-[#CBC4B4] bg-cream/70` with brand on hover. On green backgrounds,
  invert: cream fill, or a cream outline at 55% opacity.
- **Text links:** `text-green font-semibold`, underline appears on hover
  (`decoration-transparent → decoration-current`). External links use
  `ExternalArrow` plus an sr-only "(se abre en una pestaña nueva)".
- **Paper slip card:** `rounded-[6px] border border-[#D6CFBF]
  bg-[rgba(251,248,242,0.93)] shadow-soft`, optional tilt. See the hero
  result cards.
- **Seal:** a small square hanko (`h-8 w-8 rounded-[5px] border-[1.5px]
  border-brand/70 bg-[#E3EEE7] -rotate-3`) holding a brush check. Use it for
  "done / result" markers instead of round check badges.
- **Brush marks:** inline SVG paths with round caps, uneven lengths and a
  slight curve (see the `MobileNavigation` icons and the hero underline with
  `filter="url(#ink-edge)"`).
- **Ink ridges:** `src/lib/inkRidge.ts` (`ridgePoints` + `toPath`) draws
  deterministic mountain ridges that are safe for SSR. The hero uses four
  animated layers; Contacto uses two static silhouettes. Reuse it for any
  new landscape motif instead of drawing new mountains by hand.
- **Prints (photos of people):** `rounded-[6px]`, a 6px `#FFFDF8` border as
  the paper margin, a hairline `#D6CFBF` ring, `shadow-soft`, slight tilt.
  No offset block shadows.
- **Case index (`Casos`):** the cases as an accordion with exactly one open
  (its header is `aria-disabled`). Closed names in `muted`, the open one in
  ink, each with its one-line result. The open case shows a before/after
  `dl` ("Antes" in `muted`, "Ahora" in `green-dark`), its link and «Leer el
  caso completo», whose full text always stays in the HTML. Its demo print
  sits in the right column on desktop and above the text on phones.
- **Video prints:** a square, muted demo in the print frame. Encode it
  without an audio track (H.264, 720px, in `public/assets/casos/`). The
  project's screenshot is the cover whenever the video isn't playing:
  cropped with `object-cover` + position, or contained on the screenshot's
  own background colour when a crop would cut its text.
- **Horizontal strips on mobile:** `useMarquee` for an auto-drifting loop,
  `useCarousel` for stepped carousels with arrows and dots.

## Motion

- **One orchestrated moment.** The hero landscape brushes in once, far to
  near. Other sections use at most the existing `Reveal` fade. Don't add
  entrance animations to every element or hover effects to every card.
- **Ambient motion is slow and natural:** mist drifting over 50–70s, a
  flock crossing every ~46s, a carousel drifting at ~28px/s. Nothing pulses,
  glows or follows the cursor.
- **Animate `transform` and `opacity` only.** The landscape's SVG filters
  are the most expensive paint on the site: anything that repaints them per
  frame (mask-position, clip-path, SVG attributes, animated SVG children
  over them) makes the hero stutter. The hero sweep moves a masked window
  with `transform`, and each bird wing is its own `<svg>` so its flap is a
  compositor transform.
- **Scroll-linked motion goes through Motion's accelerated path:**
  `useScroll({ target, offset })` with a preset offset, then
  `useTransform(progress, [0, 1], [...])` into `opacity` or a `transform`
  string. That runs on a native `ScrollTimeline`/`ViewTimeline` instead of JS.
- **Use `m.*`, not `motion.*`.** `MotionProvider` wraps the app in
  `LazyMotion` (`domAnimation`, `strict`) to keep the bundle small.
- **Above-the-fold entrances use CSS** (`animate-fade-up`, `animate-card-in`)
  so they run before hydration; Motion `initial` would keep them invisible
  until the JS loads.
- **Start with CSS:** use CSS keyframes in `globals.css`, not SMIL, which
  waits for the `load` event.
- **Always respect `prefers-reduced-motion`.** The global rule in
  `globals.css` stops CSS animation. JS-driven motion (motion/react,
  `requestAnimationFrame`) must check `useReducedMotion` or `matchMedia`.
- **Auto-moving content pauses** on hover, touch and focus, and clones are
  `aria-hidden` and `inert`.
- **Demo videos** play muted and looped, one at a time and only while on
  screen, with a visible «Pausar vídeo» button. With reduced motion they
  don't autoplay: the cover shows with «Reproducir vídeo». Opening another
  case settles its print in with `animate-print-in`, an answer to the click
  and not an entrance.

## Copy

- Spanish, plain, direct, from the client's point of view ("Cuéntame tu
  caso", "Ver casos de éxito"). CTAs say what happens.
- One job per text element. Before adding a line, ask whether removing it
  would lose anything. If not, leave it out.
- No arrows appended to button text, no "WORD — fragment" labels, no middle
  dot meta strings for decoration.

## Layout and responsiveness

- Desktop content is left-aligned. Centring is reserved for the contact block
  and short closing prompts.
- Every new section must work at 360px. Check: 16–20px gutters, no
  horizontal page scroll, tap targets ≥ 44px, buttons that don't wrap
  their label (let them stack instead).
- On phones, show content instead of hiding it: a peeking or drifting strip
  is better than `hidden`.

## Never

- Glassmorphism, backdrop blur, blurred colour blobs, cursor glows.
- Gradient backgrounds or gradient text.
- Pure white (`#FFF`) panels or near-black (`#0B0B0B`/`#111`) backgrounds.
- `rounded-full` buttons, identical rounded cards in a grid, one radius for
  everything.
- All-caps eyebrows, tracked labels, monospace data labels.
- A second accent colour, or a second green.
- Raster images for decoration. Decorative art is SVG generated in code;
  photos are reserved for real people and real projects.

## Checklist for a new page or section

1. Does it only use the tokens above (colour, radius, shadow, type)?
2. Is it paper and ink, with green used only for actions and emphasis?
3. Is there at most one accent element, and is it hand-made (seal, brush,
   tilt, ridge)?
4. Did you reuse `Section`, the buttons, the slips, `inkRidge`,
   `useMarquee` / `useCarousel` before writing new ones?
5. Is the copy cut to the minimum, in sentence case, without eyebrows or dot
   strings?
6. Does it work at 360px and with reduced motion, with visible focus?
