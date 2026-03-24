# Signal Shift — Claude Code Build Prompt

You are building a conversion-focused landing page for Signal Shift, a crypto-native marketing agency positioned at the intersection of journalism credibility and Web3 marketing execution. The complete specification is in a 10-document pipeline in this directory. Follow it exactly.

## Three Design Principles That Override Everything

These are derived from the existing Signal Shift brand identity. Do not deviate.

**1. Dark-theme readability is engineered through warm off-white and light font weights.**
The brand uses a warm off-white (#F0EDE8), never pure #ffffff. Body copy is IBM Plex Mono at weight 300 with 1.9 line-height — light weight + generous spacing prevents the density monospace fonts typically create on dark backgrounds. Headlines are Archivo at weight 900 with tight negative letter-spacing (-0.03em) and ultra-tight line-height (0.88–0.92) to create typographic blocks that function as visual landmarks. Antialiased font smoothing is mandatory. Do not override these values.

**2. Typography IS the visual design — no hero images or illustrations.**
Stacked uppercase headlines in Archivo 900, stroke/fill text variations, and green-accented keyword lines replace traditional hero images. The type hierarchy creates two distinct visual lanes: Archivo for all impact text (headlines, stats, CTAs) and IBM Plex Mono for everything else (body, labels, UI). This separation must be maintained.

**3. Monochrome + one accent. Green means "active."**
The entire palette is black/warm-off-white plus a single electric green (#A8FF3E). Every additional color is derived via opacity, never by introducing new hues. Green is exclusively reserved for interactive, selected, or attention-demanding elements: CTAs, labels, active states, highlights. It never appears as a background fill for large areas. This creates instant brand recognizability.

## Step 0: Read the Pipeline

Before writing any code, read these files in order. Do not skim.

```
00-pipeline-instructions.md   → Build sequence + rules
01-design-philosophy.md       → Decision framework + readability principles
02-design-tokens.md           → CSS custom properties (implement first)
03-layout-system.md           → Page skeleton + scroll-snap + grids + responsive
04-component-library.md       → All reusable UI elements
05-page-templates.md          → Section-by-section content + HTML + React
06-interaction-animation.md   → Scroll reveals, typewriter, FLIP, progress bar, main.js
07-content-strategy.md        → Meta tags, JSON-LD, SEO, copy rules
08-quality-checklist.md       → Validation before delivery
09-workflow.md                → Conflict resolution + troubleshooting
```

`00-pipeline-instructions.md` specifies the exact build order. Follow it.

## Step 1: Initialize

```bash
mkdir -p signal-shift
touch signal-shift/index.html signal-shift/styles.css signal-shift/main.js
```

## Step 2: Execute the Pipeline

Work through documents in sequence (steps 2–7 per `00-pipeline-instructions.md`):

1. Open the document for the current step.
2. Read it fully before writing code.
3. Write the code it specifies into the correct file.
4. Do not deviate from the document's instructions. Complete code blocks are verbatim.
5. Move to the next document only after completing the current one.

`<!-- CONTEXT: ... -->` comments explain audience psychology. Read them for intent. Do not output them in final HTML.

## Step 3: Validate

Open `08-quality-checklist.md`. Run every check. Pay special attention to:
- The "Dark Theme Readability" section (warm off-white, weight 300 body, antialiased)
- The "Brand Identity" section (confirms green-only accent, no additional colors)
- The "Typography" section (Archivo/Plex Mono separation, uppercase headings)

Fix all failures before delivery.

## Step 4: Deliver

```
signal-shift/
├── index.html    ← All HTML + inline React components
├── styles.css    ← All CSS (tokens → base → layout → components → animation)
└── main.js       ← Vanilla JS (observer, nav, progress bar, counters, typewriter, FLIP)
```

Verify:
- Opens in browser, no console errors
- All sections render with correct content
- Scroll-snap sections fill viewport on desktop
- Services grid shows 3-column layout on desktop, collapses on mobile
- Situation Selector highlights matching service cards with FLIP animation
- Scroll progress bar tracks position with green gradient
- Hero headline reveal animation fires on load
- Typewriter effect fires in quote section
- Contact form chip selection works
- Ticker marquee scrolls client names
- Nav gets frosted-glass effect on scroll
- Text is readable without squinting at any viewport width
- Responsive from 375px to 1440px+

## Rules

- **No build step.** Opens in browser.
- **No external dependencies** beyond Google Fonts CDN, React 18 CDN, ReactDOM 18 CDN, Babel CDN.
- **No hardcoded color values.** Every color uses a CSS variable.
- **No `#ffffff` for text.** Warmest text is `var(--white)` (`#F0EDE8`). Exception: none — even CTAs use dark text on green background.
- **Body font-weight is 300.** Heading font-weight is 900. Label weight is 400–500. Do not change these.
- **All headings and labels are uppercase.** `text-transform: uppercase` is a core brand decision.
- **Green is for active/interactive elements only.** Never use it as a large background fill.
- **No stock photos.** Team section uses placeholder blocks. Icons are inline SVGs only.
- **No emoji.** No decorative illustrations.
- **Border-based separation.** 1px rules at 10% opacity divide sections — never spacing alone or drop shadows.
- When ambiguous: **choose the option that feels like a high-end production studio, not a typical agency website.**
