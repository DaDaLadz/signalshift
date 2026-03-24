# 03 — Layout System

## Page Skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#0E0E0E">
  <!-- Font loading (from 02-design-tokens.md) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@900&family=IBM+Plex+Mono:wght@300;400;500&family=Syne:wght@800&display=swap" rel="stylesheet">
  <!-- SEO meta, OG tags, JSON-LD: added in step 7 -->
  <title>Signal Shift</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="scroll-progress" aria-hidden="true"></div>

  <a href="#main-content" class="skip-link">Skip to content</a>

  <header>
    <nav id="main-nav"><div class="container nav-inner"></div></nav>
    <div id="mobile-nav"></div>
  </header>

  <div id="page-wrap">
    <main id="main-content">
      <section id="hero" class="section section--snap"></section>
      <section id="situation" class="section section--snap"></section>
      <section id="services" class="section section--snap"></section>
      <section id="quote" class="section section--snap"></section>
      <section id="story" class="section section--snap"></section>
      <section id="team" class="section section--snap"></section>
      <section id="contact" class="section section--snap"></section>
      <section id="closing" class="section section--snap"></section>
    </main>

    <div id="ticker" aria-label="Client list"></div>

    <footer id="footer"></footer>
  </div>

  <button class="back-to-top" id="back-to-top" aria-label="Back to top">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>
  </button>

  <script src="main.js"></script>
  <script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</body>
</html>
```

## Base CSS

Append after the `:root` + global rules from `02-design-tokens.md`:

```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
::selection { background: var(--green); color: var(--bg); }
img { max-width: 100%; display: block; }
a { color: var(--green); text-decoration: none; transition: color var(--duration-hover); }
a:hover { color: var(--green-hover); }
```

## Skip Link

```css
.skip-link {
  position: absolute; top: -100px; left: 16px;
  background: var(--green); color: var(--bg);
  padding: 8px 16px; border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 0.85rem; font-weight: var(--weight-bold);
  z-index: 10000; transition: top 0.2s;
}
.skip-link:focus { top: 8px; }
```

## Container

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: var(--section-pad-h);
  padding-right: var(--section-pad-h);
}
@media (max-width: 767px) {
  .container { padding-left: var(--space-lg); padding-right: var(--space-lg); }
}
```

## Scroll-Snap Container

```css
#page-wrap {
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  height: 100dvh;
}
@media (max-width: 767px) {
  /* Relax snap on mobile — allow free scrolling */
  #page-wrap {
    scroll-snap-type: none;
    height: auto;
    overflow: visible;
  }
}
```

## Section Base

```css
.section {
  position: relative;
  padding: var(--section-pad-v) 0;
  border-bottom: 1px solid var(--rule);
}
.section--snap {
  scroll-snap-align: start;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@media (max-width: 767px) {
  .section {
    padding: 80px 0;
    min-height: auto;
  }
  .section--snap {
    min-height: 100dvh; /* Still full viewport on mobile, just no snap */
  }
}
```

## Section Label (Eyebrow)

Consistent component at the top of every major section:

```css
.section-label {
  display: block;
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: var(--weight-label);
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--green);
  margin-bottom: var(--space-lg);
  position: relative;
}
/* Fading green rule after label */
.section-label::after {
  content: '';
  display: block;
  margin-top: var(--space-sm);
  height: 1px;
  width: 100%;
  max-width: 200px;
  background: linear-gradient(to right, rgba(168, 255, 62, 0.3), transparent);
}
```

## Section Title

```css
.section-title {
  font-family: var(--font-display);
  font-weight: var(--weight-display);
  font-size: clamp(36px, 4vw, 62px);
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 0.92;
  margin-bottom: var(--space-lg);
}
```

## Grid Systems

### 2-Column Asymmetric (Story, Contact)
```css
.grid-split {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-2xl);
}
@media (min-width: 768px) {
  .grid-split {
    grid-template-columns: 1fr 1.2fr;
    gap: var(--grid-gap-wide);
  }
}
```

### 3-Column Equal (Services)
```css
.grid-services {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--grid-gap-cards);
}
@media (min-width: 480px) {
  .grid-services { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (min-width: 768px) {
  .grid-services { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
```

### 3-Column Tight (Team)
```css
.grid-team {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--grid-gap-tight);
}
@media (min-width: 768px) {
  .grid-team { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
```

### 4-Column Tight (Situation Stages)
```css
.grid-situation {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--grid-gap-tight);
}
@media (min-width: 768px) {
  .grid-situation { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}
```

### 2x2 Grid
```css
.grid-2x2 {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);
}
@media (min-width: 640px) {
  .grid-2x2 { grid-template-columns: 1fr 1fr; }
}
```

## Nav Layout

```css
#main-nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0;
  transition: background var(--duration-hover), border-color var(--duration-hover);
  border-bottom: 1px solid transparent;
}
#main-nav.scrolled {
  background: rgba(8, 8, 8, 0.9);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom-color: var(--rule);
}
.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
```

## Scroll Progress Bar

```css
.scroll-progress {
  position: fixed;
  top: 0; left: 0;
  height: 2px;
  width: 0%;
  background: linear-gradient(to right, var(--green), var(--green-hover));
  box-shadow: 0 0 8px var(--green-glow);
  z-index: 9999;
  transition: width 0.05s linear;
}
```

## Back to Top Button

```css
.back-to-top {
  position: fixed;
  bottom: var(--space-xl);
  right: var(--space-xl);
  background: rgba(8, 8, 8, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--rule);
  border-radius: var(--radius-md);
  color: var(--mid);
  padding: 12px;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease, color var(--duration-hover), border-color var(--duration-hover);
  z-index: 500;
}
.back-to-top.visible {
  opacity: 1;
  pointer-events: auto;
}
.back-to-top:hover {
  color: var(--white);
  border-color: var(--border-hover);
}
```

## Utility Classes

```css
.desktop-only { display: none; }
@media (min-width: 768px) { .desktop-only { display: flex; } }
.mobile-only { display: flex; }
@media (min-width: 768px) { .mobile-only { display: none; } }
.sr-only {
  position: absolute; width: 1px; height: 1px;
  padding: 0; margin: -1px; overflow: hidden;
  clip: rect(0,0,0,0); white-space: nowrap; border: 0;
}
```

## Responsive Breakpoints

| Breakpoint | Target |
|-----------|--------|
| Base (0px) | Mobile — single column, no scroll-snap |
| `max-width: 480px` | Small mobile — services single column |
| `min-width: 480px` | Services 2-column |
| `min-width: 640px` | Situation stages 2-col (already default), form rows 2-col |
| `min-width: 768px` | Tablet — services 3-col, team 3-col, situation 4-col, split grids, nav links visible, scroll-snap active |
| `min-width: 1024px` | Desktop — split grids widen, full horizontal spacing |
