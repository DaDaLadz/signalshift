# 02 — Design Tokens

Copy this entire block as the first content in `styles.css`. All other documents reference these tokens by variable name.

## CSS Custom Properties + Global Rules

```css
:root {
  /* ═══ BACKGROUNDS — Monochrome surface system ═══ */
  /* Three depths: page base, card surfaces, elevated surfaces. */
  /* Borders (not shadows) create separation on dark backgrounds. */
  --bg:           #0E0E0E;   /* Page background, section backgrounds, all surfaces */
  --bg-card:      #080808;   /* Service cards, deeper than page bg */
  --bg-elevated:  #111111;   /* Situation bar, team cards, elevated interactive surfaces */

  /* ═══ TEXT — warm off-white, never pure white ═══ */
  /* #F0EDE8 is warm off-white — prevents halation and gives editorial warmth. */
  /* Passes WCAG AAA on --bg. */
  --white:        #F0EDE8;   /* Primary text: headings, body copy, all readable content */

  /* ═══ OPACITY-BASED TEXT EXTENSIONS ═══ */
  /* Derived from --white via alpha. No new hues. */
  --faint:        rgba(240, 237, 232, 0.08);  /* Subtle background tints */
  --rule:         rgba(240, 237, 232, 0.10);   /* Section dividers, default borders */
  --dim:          rgba(240, 237, 232, 0.45);   /* Muted text: labels, captions, timestamps */
  --mid:          rgba(240, 237, 232, 0.65);   /* Secondary text: descriptions, non-active nav */
  --border-card:  rgba(240, 237, 232, 0.10);   /* Card borders (matches --rule) */
  --border-hover: rgba(240, 237, 232, 0.15);   /* Card hover borders */

  /* ═══ ACCENT — single electric green ═══ */
  /* Green is EXCLUSIVELY for active/interactive/attention elements. */
  /* Never use as a large background fill. */
  --green:        #A8FF3E;   /* CTAs, labels, active states, highlights, eyebrows */
  --green-hover:  #C8FF5E;   /* Hover state on green elements — only hover color shift */
  --green-dim:    rgba(168, 255, 62, 0.06);   /* Green background tints (highlighted cards) */
  --green-border: rgba(168, 255, 62, 0.25);   /* Green-tinted borders (active cards) */
  --green-glow:   rgba(168, 255, 62, 0.15);   /* Subtle glow on active elements */

  /* ═══ TYPOGRAPHY ═══ */
  --font-display: 'Archivo', sans-serif;       /* Headlines, stat numbers, CTAs — weight 900 */
  --font-logo:    'Syne', sans-serif;          /* Logo text only — weight 800 */
  --font-body:    'IBM Plex Mono', monospace;  /* Body copy, labels, UI, inputs — weight 300/400/500 */

  /* Font weight tokens */
  --weight-display: 900;   /* Archivo headlines — maximum impact */
  --weight-logo:    800;   /* Syne logo */
  --weight-body:    300;   /* IBM Plex Mono body — light for dark-bg readability */
  --weight-label:   400;   /* Labels, nav links */
  --weight-bold:    500;   /* Emphasis within body, form labels, selected states */

  /* ═══ SPACING ═══ */
  --space-xs:     4px;
  --space-sm:     8px;
  --space-md:     16px;
  --space-lg:     24px;
  --space-xl:     32px;
  --space-2xl:    48px;
  --space-3xl:    64px;
  --space-4xl:    96px;
  --section-pad-v: 100px;  /* Section vertical padding — desktop */
  --section-pad-h: 48px;   /* Section horizontal padding — desktop */
  --grid-gap-tight: 1px;   /* Team grid, situation stages — lines as borders */
  --grid-gap-cards: 8px;   /* Service cards */
  --grid-gap-wide:  80px;  /* Story/contact 2-column gap */

  /* ═══ RADII ═══ */
  /* Minimal — the brand is angular, not rounded */
  --radius-sm:   4px;
  --radius-md:   6px;
  --radius-lg:   8px;
  --radius-full: 9999px;

  /* ═══ TRANSITIONS ═══ */
  --ease-out:        cubic-bezier(0.16, 1, 0.3, 1);  /* Primary easing — snappy deceleration */
  --ease-standard:   ease;
  --duration-reveal:  900ms;   /* Headline reveals */
  --duration-hover:   200ms;   /* Hover states */
  --duration-flip:    700ms;   /* FLIP card animation */
  --duration-expand:  350ms;   /* Accordion/expand */
}

/* ═══ GLOBAL DARK-THEME TYPOGRAPHY FIX ═══ */
html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-body);
  font-size: clamp(16px, 1rem + 0.15vw, 19px);
  font-weight: var(--weight-body);
  line-height: 1.9;
  letter-spacing: 0.01em;
  color: var(--white);
  background: var(--bg);
  overflow-x: hidden;
}

p { max-width: 65ch; }

h1, h2, h3, h4 {
  font-family: var(--font-display);
  font-weight: var(--weight-display);
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 0.92;
  color: var(--white);
}
```

## Font Loading

Place in `<head>` before any stylesheet link. All three font families are loaded.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@900&family=IBM+Plex+Mono:wght@300;400;500&family=Syne:wght@800&display=swap" rel="stylesheet">
```

## Token Usage Rules

| Token | Where it appears | Where it does NOT appear |
|-------|-----------------|------------------------|
| `--white` | All readable text: headings, body, descriptions, form inputs | Never replaced by #ffffff |
| `--dim` | Muted labels, timestamps, captions (large text only, ≥14px) | Body paragraphs, headings |
| `--mid` | Inactive nav links, card descriptions, secondary text | Headlines, primary body copy, CTAs |
| `--green` | CTAs, labels/eyebrows, active states, checkmarks, accented headline words, stat suffixes | Body text, headings (except accented words), background fills |
| `--green-hover` | Hover state on green CTAs only | Any non-hover state |
| `--green-dim` | Highlighted card background tint | Large background areas |
| `--green-border` | Active/highlighted card borders | Default card borders |
| `--bg` | Page background, section backgrounds | Card surfaces |
| `--bg-card` | Service cards, deeper surfaces | Page background, elevated surfaces |
| `--bg-elevated` | Situation bar, team cards, form area, nav (scrolled) | Page background, service cards |
| `--rule` | Section dividers (1px borders), default card borders | Backgrounds, text |
| `--font-display` | Headlines, stat numbers, CTA button text, closers | Body copy, labels, form inputs |
| `--font-body` | Body copy, labels, nav links, form inputs, descriptions | Headlines, stat numbers |
| `--font-logo` | Logo text only | Anything else |

**Do not use `#ffffff` anywhere.** The warmest text value is `--white` (`#F0EDE8`). CTA buttons use dark text (`--bg`) on green background — not white text.

**Do not introduce new colors.** All variations are derived via opacity from `--white` and `--green`.
