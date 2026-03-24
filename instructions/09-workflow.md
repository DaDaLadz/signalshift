# 09 — Workflow & Decision Heuristics

Reference when stuck, when making a judgment call, or when documents conflict.

## Conflict Resolution

Higher-numbered document wins (later = more specific). Exception: `01-design-philosophy.md` overrides visual/tone decisions in any document.

## Decision Heuristics

| # | Question | Action |
|---|----------|--------|
| 1 | Does this add to the 10-second comprehension test? | If no, it's below-fold reinforcement. Deprioritize. |
| 2 | Is this text readable at a glance on the dark background? | If you have to squint, increase font size, reduce weight, or increase line-height. Never brighten past `--white`. |
| 3 | Would the Enterprise persona consider this immature or hype-driven? | If yes, remove or simplify. Journalistic authority, always. |
| 4 | Would a project founder mistake this for a generic agency template? | If yes, add intentionality (better spacing, typography, restraint). |
| 5 | Does this look at home on a Bloomberg Terminal more than a WordPress theme? | If yes, proceed. If it looks generic, reconsider. |
| 6 | Am I adding this for visual impact or for comprehension? | If visual impact only, remove. |
| 7 | Am I introducing a new color? | Only if it's derived via opacity from `--white` or `--green`. No new hues. |
| 8 | Can I accomplish the same thing with less? | Use less. |
| 9 | Does this animation serve a function (earn attention, reward interaction, build anticipation)? | If not functional, remove it. |
| 10 | Am I using a shadow where a border would work? | Replace with a 1px border. Shadows fail on dark themes. |

## Readability Troubleshooting

| Problem | Solution |
|---------|----------|
| Body text looks too bold/thick on dark bg | Verify `font-weight: var(--weight-body)` (300). IBM Plex Mono at 300 is the proven formula. |
| Text has visible halation (blooming at edges) | Verify `-webkit-font-smoothing: antialiased` on `html`. Verify no `#ffffff` text. Use `--white` (#F0EDE8). |
| Service card descriptions hard to scan | Verify cards use `--bg-card` (#080808). Verify font-size ≥ 17px, line-height 1.9. |
| Form labels feel invisible | Use `--green` for form labels, not `--dim`. Labels should be green uppercase. |
| Long paragraphs feel like walls of text | Verify `max-width: 65ch` on `<p>`. Keep to 1–2 sentences. Increase `line-height` to 1.9 if needed. |
| Headlines look too similar to body text | Verify headlines use Archivo 900 with negative letter-spacing (-0.03em) and uppercase. Body uses IBM Plex Mono 300. These must be visually distinct lanes. |
| Monospace body feels too dense | Increase line-height. 1.85–1.9 is correct for IBM Plex Mono. Generous spacing compensates for monospace density. |

## Build Troubleshooting

| Problem | Solution |
|---------|----------|
| React component doesn't render | CDN scripts must load before `<script type="text/babel">`. Mount `<div id="...">` must exist. Check console for Babel errors. |
| Scroll-snap isn't working | Verify `#page-wrap` has `scroll-snap-type: y mandatory` and `overflow-y: auto; height: 100dvh`. Each `.section--snap` needs `scroll-snap-align: start; min-height: 100dvh`. |
| Hero headline doesn't reveal | Verify `.hero-headline__text` has `transform: translateY(110%)` in CSS and `.revealed` class sets `translateY(0)`. JS must fire after 300ms delay. |
| Typewriter doesn't start | Verify `#typewriter-target` element exists. Observer threshold is 0.5 — section must be at least half visible. |
| FLIP animation jumps instead of sliding | Verify `getBoundingClientRect()` is called BEFORE class changes. Verify `requestAnimationFrame` wraps the transition reset. |
| Situation Selector doesn't highlight cards | Verify `data-stages` attribute on each `.svc-card` contains comma-separated stage names matching `data-stage` on buttons. |
| Ticker pauses permanently | Verify `:hover` only sets `animation-play-state: paused`. Content must be duplicated for seamless loop. |
| Nav doesn't get frosted glass | Verify `#main-nav.scrolled` sets `backdrop-filter: blur(16px)` and `background: rgba(8,8,8,0.9)`. Scroll listener must be on correct element (page-wrap or window). |
| Progress bar doesn't track on desktop | If using scroll-snap container, scroll listener must be on `#page-wrap`, not `window`. |

## File Delivery

```
/signal-shift/
├── index.html
├── styles.css
└── main.js
```

Verify: open `index.html` in browser. Full render, no errors, responsive 375–1440px. Scroll-snap works on desktop. All interactions functional.

## Post-Delivery Replacements

1. Team photo placeholders → real headshot images
2. `hello@signalshift.io` → real email
3. `https://www.signalshift.io` in OG/canonical → real domain
4. Add `og-image.png` (1200×630) and `favicon.ico`
5. Client ticker names → real client list
6. Connect form submit to backend (Formspree, Netlify Forms, or API)
7. Add real social links to footer if desired
8. Team bios → real names, titles, credentials
