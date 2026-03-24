# 00 — Pipeline Instructions

## Output
```
/signal-shift/
├── index.html    ← All HTML + inline React components
├── styles.css    ← All CSS
└── main.js       ← Vanilla JS (scroll observer, counters, nav state, progress bar, typewriter, FLIP, situation selector)
```
No build step. No bundler. Opens in browser. Deploys to any static host.

## Build Sequence

Execute in this exact order. Do not skip steps.

| Step | Read | Action |
|------|------|--------|
| 1 | `01-design-philosophy.md` | Internalize. No code output. Sets decision-making rules and readability principles for all subsequent steps. |
| 2 | `02-design-tokens.md` | Create `styles.css`. Write the `:root` block and global `html`/`body` rules with all custom properties. These tokens are engineered for dark-theme readability with warm off-white — do not override the text colors, font weights, or letter-spacing values. |
| 3 | `03-layout-system.md` | Create `index.html`. Build the page skeleton: `<body>` structure, scroll-snap container, section containers, progress bar. Add base layout CSS including grid systems to `styles.css`. |
| 4 | `04-component-library.md` | Append component CSS to `styles.css`. Do not place components into sections yet. |
| 5 | `05-page-templates.md` | Populate each `<section>` in `index.html` with correct HTML, components, and content. Add React component `<script type="text/babel">` blocks at bottom of `<body>`. |
| 6 | `06-interaction-animation.md` | Create `main.js`. Add scroll observer, nav state, progress bar, counter animation, headline reveal, typewriter, FLIP animations, situation selector logic. Add animation CSS to `styles.css`. |
| 7 | `07-content-strategy.md` | Audit and finalize all copy in `index.html`. Add `<meta>` tags, OG tags, JSON-LD blocks to `<head>`. |
| 8 | `08-quality-checklist.md` | Run every check. Fix failures. |
| 9 | `09-workflow.md` | Reference only if stuck. Contains decision heuristics for ambiguous situations. |

## Rules

- When a document says "use `var(--X)`", reference the token from `02-design-tokens.md`. Do not hardcode values.
- When a document gives a complete code block, use it verbatim unless it conflicts with a later document (later documents win).
- When a choice is ambiguous, apply: **would this feel like a high-end production studio or a generic agency site?** Choose production studio.
- `<!-- CONTEXT: ... -->` comments are audience psychology notes. Read them to understand intent. Do not output them in the final HTML.
- **Never use pure white (#ffffff) for text.** The token system provides a warm off-white (#F0EDE8) that prevents halation and gives the palette editorial warmth.
- **Body text font-weight is 300, heading font-weight is 900.** Body uses IBM Plex Mono; headings use Archivo. This separation creates two distinct visual lanes. Do not mix them.
- **All headings and labels use text-transform: uppercase.** This is a core brand decision, not optional styling.
- **Green (#A8FF3E) is exclusively for active/interactive elements.** Never use it as a background fill for large areas.
