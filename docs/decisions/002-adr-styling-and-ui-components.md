# ADR 002 | Styling and UI Components

Status: Accepted

## Context (The Problem)
The site needs a consistent, accessible, responsive UI across roughly ten pages, plus one custom interactive component (the impact selector). Constraints:
- I'm building it solo and want to move quickly on the shell and layout
- Design polish is not the main goal; the priority is a clean, trustworthy look
- Common patterns are needed: navbar with mobile menu, buttons, cards, forms, footer, modals
- Colours and branding should be easy to change later, ideally from one place, because the charity may want to rebrand
- The charity won't have a designer, so the defaults need to look decent
- Output CSS should stay small, to fit the performance goal in ADR 001

## Options Considered
- **Tailwind CSS + DaisyUI**
- **Tailwind CSS only**
- **Plain CSS with custom design tokens**
- **Component library (e.g. Bootstrap, shadcn/ui, MUI)**

## Decision (The Solution)
Use **Tailwind CSS with the DaisyUI plugin**.

Tailwind provides utility classes and the build-time purge of unused CSS. DaisyUI adds semantic component classes (`btn`, `card`, `navbar`, `modal`) and a theme system. Brand colours are defined as a custom DaisyUI theme, so a rebrand means editing one theme definition rather than touching every component.

DaisyUI components are used as the default. Tailwind utilities are used for layout and one-off adjustments. The impact selector is built on DaisyUI primitives (range, toggle, card) with custom behaviour in React.

## Consequences (The Trade-offs)

### Positives
- Fast to build the shell: most common components exist as class names
- Theming is centralised, so changing colours or switching light and dark themes is cheap
- No JavaScript runtime for styling, so it fits the Astro approach: CSS only, and it works in plain `.astro` files without React
- Unused CSS is removed at build time, keeping output small
- Reasonable accessibility and responsive defaults out of the box
- Tailwind is widely used, so the skills transfer to other projects and jobs

### Negatives
- Adds a dependency on two packages (Tailwind and DaisyUI), and DaisyUI's major versions are tied to Tailwind's, so upgrades need care
- Markup gets cluttered with long class lists, which hurts readability, especially in components
- Sites built with DaisyUI can look generic unless the theme and spacing are customised
- DaisyUI hides some of the underlying CSS, so I learn less about hand-written CSS and token architecture than with a plain-CSS approach
- Some DaisyUI components (such as the dropdown and modal) have accessibility and keyboard behaviour that needs checking, not assuming
- If I later want a heavily custom design, I'll be fighting the library's conventions

## Revisit if
The charity wants a bespoke brand design that the DaisyUI theme can't express, or DaisyUI's upkeep or Tailwind compatibility becomes a problem.