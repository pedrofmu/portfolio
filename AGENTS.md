<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Design system

Before creating or changing any page, section, component or visual style, read `DESIGN.md` and follow it: tokens, components, motion, copy and the "Never" list.

If a request, or the approach you are about to take, does not comply with `DESIGN.md` (a new colour, `rounded-full` buttons, gradients, all-caps labels, new decorative motion, a layout pattern it doesn't cover, and so on), **stop and ask the user for the correct direction before writing code**. Explain the conflict briefly and offer the closest compliant option. Don't silently bend the rules, and don't silently ignore the request.

If the user approves a deviation that should become the new norm, update `DESIGN.md` in the same change.
