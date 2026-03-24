# 08 — Quality Checklist

Run every check. Fix failures before delivery.

## Structure
- [ ] `index.html`, `styles.css`, `main.js` are the only files
- [ ] Page opens in browser with no console errors
- [ ] All React components render without errors
- [ ] All section `id` attrs match nav anchor `href` values
- [ ] Clicking each nav link scrolls to correct section
- [ ] One `<h1>` (hero only). No skipped heading levels.
- [ ] Skip-to-content link present, visible on focus
- [ ] Scroll-snap container works on desktop (sections snap to viewport)
- [ ] Scroll-snap relaxes on mobile (free scrolling)

## Design Tokens
- [ ] No hardcoded color values — every color uses `var(--*)`
- [ ] No hardcoded font-family — every font uses `var(--font-*)`
- [ ] No hardcoded font-weight — uses `var(--weight-*)` tokens
- [ ] `:root` block + global `html`/`body` rules are first content in `styles.css`
- [ ] **No `#ffffff` anywhere in CSS or inline styles** — warmest text is `--white` (#F0EDE8)
- [ ] **No colors outside the monochrome + green system** — all derived via opacity

## Brand Identity
- [ ] **All headings use `text-transform: uppercase`** — no exceptions
- [ ] **All labels use `text-transform: uppercase`** — no exceptions
- [ ] Green (#A8FF3E) appears ONLY on interactive/active/attention elements
- [ ] Green never appears as a large background fill
- [ ] Archivo used ONLY for headlines, stat numbers, CTAs
- [ ] IBM Plex Mono used for ALL body copy, labels, nav links, form inputs
- [ ] Syne used ONLY for the logo
- [ ] No border-radius larger than 8px — brand is angular
- [ ] CTA buttons use dark text on green background (not white on blue)

## Dark Theme Readability
- [ ] Body `font-weight` is `var(--weight-body)` (300) — not 400
- [ ] Headline `font-weight` is `var(--weight-display)` (900)
- [ ] Body `line-height` is `1.9`
- [ ] Headline `line-height` is `0.88`–`0.92`
- [ ] Body `font-size` uses `clamp(16px, ...)` — never below 16px
- [ ] All `<p>` elements have `max-width: 65ch`
- [ ] `-webkit-font-smoothing: antialiased` applied on `html`
- [ ] Warmest text is `var(--white)` (`#F0EDE8`), NOT `#fff`
- [ ] Headline `letter-spacing` is negative (-0.03em)
- [ ] Label `letter-spacing` is wide (0.16–0.2em)
- [ ] Section borders use `--rule` (1px solid at 10% opacity)

## Contrast Ratios (verify with browser devtools)
- [ ] `--white` (#F0EDE8) on `--bg` (#0E0E0E) ≥ 14:1
- [ ] `--mid` (rgba white 0.65) on `--bg` (#0E0E0E) ≥ 7:1
- [ ] `--dim` (rgba white 0.45) on `--bg` (#0E0E0E) ≥ 4:1 (large text only)
- [ ] `--green` (#A8FF3E) on `--bg` (#0E0E0E) ≥ 10:1
- [ ] `--bg` (#0E0E0E) text on `--green` (#A8FF3E) background ≥ 10:1

## Responsive
- [ ] Page renders correctly at 375px (iPhone SE)
- [ ] Page renders correctly at 768px (tablet)
- [ ] Page renders correctly at 1280px (desktop)
- [ ] No horizontal overflow at any width
- [ ] Nav hamburger visible below 768px, links visible at 768px+
- [ ] Services grid: 1-col at 375px, 2-col at 480px, 3-col at 768px
- [ ] Team grid: 1-col below 768px, 3-col at 768px+
- [ ] Situation stages: 2-col below 768px, 4-col at 768px+
- [ ] Split grids (story, contact) stack below 768px
- [ ] Footer grid collapses to 1-column below 768px
- [ ] Scroll-snap active on desktop, relaxed on mobile

## Components
- [ ] `.btn-primary` uses solid green bg, dark text, Archivo 900
- [ ] `.btn-primary` has arrow SVG that shifts right on hover
- [ ] `.btn-primary` letter-spacing widens on hover (0.1em → 0.16em)
- [ ] Service cards have: number, name (Archivo), description (Plex Mono)
- [ ] Situation Selector has 4 stage buttons in a grid
- [ ] Selected stage button gets green border + tinted bg
- [ ] Service cards highlight/dim based on situation selection
- [ ] Terminal output appears after situation selection (scan → CTA)
- [ ] Ticker marquee scrolls client names, pauses on hover
- [ ] Ticker has gradient fade masks on left and right edges
- [ ] Contact form uses borderless inputs with bottom borders
- [ ] Contact form labels are green uppercase
- [ ] Contact form chip buttons highlight on selection
- [ ] Stroke text renders with green outline on transparent fill
- [ ] Hero headline uses stacked multi-line uppercase Archivo

## Social Proof
- [ ] Stats in hero: 3 metrics with Archivo numbers + green suffixes
- [ ] Stats in story section: stacked list with 1px rule dividers
- [ ] Client ticker at bottom with scrolling names
- [ ] Narrative authority in story copy (Cointelegraph, Forbes references)
- [ ] No static logo grid anywhere

## Animation
- [ ] Page fade-in on load (opacity 0→1, 0.9s)
- [ ] Hero headline lines reveal with staggered translateY
- [ ] Stat numbers count up when entering viewport
- [ ] Typewriter effect fires when quote section enters viewport
- [ ] Quote headline reveals after typewriter completes
- [ ] Situation Selector highlights/dims cards on click
- [ ] FLIP animation positions cards smoothly (700ms)
- [ ] Closing section copy fades and updates on situation selection
- [ ] Scroll progress bar fills 0–100% with green gradient
- [ ] Nav gets `.scrolled` frosted-glass at scrollY > 40
- [ ] Back to top button appears after 50vh scroll
- [ ] `prefers-reduced-motion: reduce` disables all animation
- [ ] No decorative animations (no floating, bouncing, pulsing icons)

## Accessibility
- [ ] Focus-visible states on all interactives
- [ ] `aria-label` on hamburger button
- [ ] `aria-label` on back-to-top button
- [ ] `aria-label` on ticker
- [ ] All form inputs have labels
- [ ] Team photo placeholders have `aria-label`
- [ ] Skip-to-content link functional

## SEO
- [ ] `<title>` includes primary keyword ("crypto-native marketing agency")
- [ ] `<meta description>` includes 2+ target keywords
- [ ] `<link rel="canonical">` present
- [ ] OG tags present
- [ ] Twitter Card tags present
- [ ] JSON-LD: Organization, WebSite, ProfessionalService
- [ ] Each keyword appears 2–3 times naturally
- [ ] No keyword stuffing

## Performance
- [ ] No external JS besides React 18, ReactDOM 18, Babel
- [ ] No external CSS frameworks
- [ ] Google Fonts loaded with `display=swap`
- [ ] No images required. Team photos use placeholder divs.
- [ ] Ticker uses CSS animation (no JS)
- [ ] Progress bar uses lightweight JS scroll listener

## Code Quality
- [ ] Valid HTML (no unclosed tags, no duplicate IDs)
- [ ] No unused CSS selectors
- [ ] `main.js` uses `'use strict'` and IIFE wrapper
- [ ] No `console.log` in production
- [ ] React: functional components + hooks only
- [ ] No `localStorage`/`sessionStorage`
