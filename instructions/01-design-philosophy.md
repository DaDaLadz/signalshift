# 01 — Design Philosophy

No code in this document. Read it fully before starting any implementation.

## Brand Position

Signal Shift is a crypto-native marketing agency at the intersection of journalism credibility and Web3 marketing execution. The brand name encodes the value proposition: transforming a project from market noise into a recognizable signal.

The visual identity projects a dark, editorial, terminal-inspired aesthetic that communicates technical sophistication without crossing into gamer or cyberpunk territory. It reads as a high-end production studio — not a typical agency, not a template, not a startup landing page. Reference points: the authority of Bloomberg Terminal, the restraint of Linear, the density of The Information.

The site's visual quality is itself the first product demo.

## Decision Rules

| If... | Then... |
|-------|---------|
| A design choice feels "crypto-bro" (neon, laser eyes, rocket emojis, cyberpunk aesthetic) | Remove it. The brand is journalistic authority, not hype culture. |
| A design choice feels like a template (stock photos, generic card grids, rounded-everything, colorful gradients) | Redo it. Founders leave immediately when a site looks generic. |
| You're choosing between more visual elements or more whitespace | Choose whitespace. Dense layouts feel amateur on dark backgrounds. |
| You're choosing between explaining more or showing a number | Show the number. Stats build trust faster than copy. |
| Copy includes "revolutionary," "game-changing," "unleash," "supercharge," "moonshot" | Rewrite. Declarative sentences. State what it does and what it produces. The brand avoids ALL hype language. |
| You want to add a color beyond black, warm-off-white, and green | Don't. Derive it via opacity from existing colors. No new hues. |
| You want to add a second "special" animation or canvas effect | Don't. Animations serve function: headline reveal earns attention, FLIP rewards interaction, typewriter builds anticipation. No decoration. |
| Text feels hard to read on the dark background | Increase font size, reduce font weight, add more line-height. Never brighten past #F0EDE8. Monospace at weight 300 with 1.9 line-height is the proven formula. |
| You need social proof | Use outcome metrics with specific numbers, a client ticker (text, not logos), or narrative authority ("led newsrooms at Cointelegraph and Forbes"). |
| A section contains dense text (service descriptions, form labels) | Use 1px rule borders for visual separation. Cards sit on #080808 surfaces — deeper than page background. |
| You're unsure whether something should be animated | Don't animate it. |
| You're choosing between a shadow and a border for separation | Choose the border. Always. Shadows don't work on dark themes. |

## Readability Principles (Dark Theme)

These are research-backed rules that apply to every text element on the page:

1. **No pure white text.** `#ffffff` causes halation (text blooming) for the ~47% of people with astigmatism. Use `--white` (`#F0EDE8`) — a warm off-white that prevents blooming and gives the palette editorial warmth.
2. **Light body weight on dark backgrounds.** Light text on dark backgrounds appears heavier than intended. Body weight is 300 (IBM Plex Mono). This creates an airy, editorial reading rhythm. Do not increase to 400 for body copy.
3. **Headlines are the opposite — maximum weight.** Archivo at 900 with tight negative letter-spacing (-0.03em) creates dense typographic blocks that function as visual landmarks. The contrast between 300 body and 900 headlines IS the visual hierarchy.
4. **Generous line-height on body.** 1.85–1.9 for IBM Plex Mono body text. Monospace fonts are inherently denser than proportional fonts; extra line-height compensates.
5. **Wide letter-spacing on labels and small text.** 0.16–0.2em tracking on uppercase labels creates airy, small-caps-like readability at small sizes.
6. **Tight letter-spacing on headlines.** -0.03 to -0.04em creates visual density and impact. Headlines and body text use opposite tracking strategies.
7. **Ultra-tight headline line-height.** 0.88–0.92 brings headline lines extremely close together, creating stacked typographic blocks. This is intentional — headlines are spatial objects, not just text.
8. **Apply antialiased font smoothing globally.** `-webkit-font-smoothing: antialiased` makes light-on-dark text appear lighter and more refined.
9. **Border-based separation, not shadows.** 1px rules at 10% opacity white divide sections. Never use drop shadows for separation on dark backgrounds — they disappear or look muddy.

## Audience Summary

Three buyers. One page. Three paths through it.

- **Pre-launch Founder** (Building, pre-token/pre-mainnet): Scans hero → hits Situation Selector → sees recommended services highlighted → clicks CTA. Needs: clarity on what they'll get before launch.
- **Growth-Stage Project** (Has traction, needs scale): Feels design quality → scans services → goes to Contact. Needs: proof of expertise, specific service scope.
- **Enterprise / Rebrand** (Established, repositioning): Appreciates restraint → reads Story section for credentials → checks team → books a call. Needs: strategic depth, credibility signals, journalistic authority.

## Social Proof Strategy

Social proof is layered across three mechanisms:

- **Numeric stats:** Bold Archivo numbers (30+ years, 100+ projects, 8+ years). Scattered through hero and story sections.
- **Client ticker:** Scrolling marquee of client names (Solana, Ripple, Kaito, etc.) as text — not logo images. This avoids permission issues and maintains the monospace editorial feel.
- **Narrative authority:** Credential statements embedded in story copy ("led newsrooms at Cointelegraph and Forbes Digital Assets"). This is the most powerful proof for the Executive persona.

Do not add a static logo grid. The ticker + stats + narrative approach is more effective.

## Tone Rules for All Copy

- Declarative sentences. Short paragraphs (1–2 sentences max for body copy).
- Journalistic authority: state what it does, what it has done, what the outcome will be.
- No exclamation marks. No questions as headlines. No "we're passionate about."
- No crypto hype: no "moonshot," "WAGMI," "to the moon," "LFG."
- AI is the method where used. Results are the point.
- Eyebrow labels use dashes as prefix context setters: "— Crypto Native. Market Proven."
- Headline closers: a final sentence in Archivo 900 uppercase acts as a pull-quote thesis.
- All headings and labels are uppercase. This is non-negotiable brand identity.
