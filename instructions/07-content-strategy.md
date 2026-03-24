# 07 — Content Strategy

After building the page (steps 2–6), audit and finalize all content.

## Meta Tags

```html
<title>Signal Shift | Crypto-Native Marketing Agency</title>
<meta name="description" content="Signal Shift is a crypto-native marketing agency built by former Cointelegraph and Forbes editors. Narrative strategy, media relations, and community growth for Web3 projects.">
<meta name="keywords" content="crypto marketing agency, web3 marketing, blockchain marketing, crypto PR, web3 narrative strategy">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://www.signalshift.io/">
```

## Open Graph

```html
<meta property="og:type" content="website">
<meta property="og:title" content="Signal Shift | Crypto-Native Marketing Agency">
<meta property="og:description" content="From newsroom to front lines. Marketing for Web3 projects that deserve to win.">
<meta property="og:url" content="https://www.signalshift.io/">
<meta property="og:image" content="https://www.signalshift.io/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:site_name" content="Signal Shift">
```

## Twitter Card

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Signal Shift | Crypto-Native Marketing Agency">
<meta name="twitter:description" content="From newsroom to front lines. Marketing for Web3 projects that deserve to win.">
<meta name="twitter:image" content="https://www.signalshift.io/og-image.png">
```

## JSON-LD

### Organization
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Signal Shift",
  "url": "https://www.signalshift.io",
  "description": "Crypto-native marketing agency built by former Cointelegraph and Forbes editors. Narrative strategy, media, and community growth for Web3 projects.",
  "email": "hello@signalshift.io",
  "sameAs": []
}
```

### WebSite
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Signal Shift",
  "url": "https://www.signalshift.io",
  "description": "Crypto-native marketing for projects that deserve to win."
}
```

### ProfessionalService
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Signal Shift",
  "url": "https://www.signalshift.io",
  "description": "Crypto-native marketing agency specializing in narrative strategy, media relations, content production, and community growth for Web3 projects.",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Marketing Services",
    "itemListElement": [
      { "@type": "Offer", "name": "Narrative Strategy", "description": "Positioning, messaging frameworks, and media angles." },
      { "@type": "Offer", "name": "Media Relations", "description": "Earned coverage in Tier 1 crypto and mainstream outlets." },
      { "@type": "Offer", "name": "Content Production", "description": "Longform, threads, newsletters, video scripts." },
      { "@type": "Offer", "name": "Community Growth", "description": "Discord and Telegram strategy, ambassador programs." },
      { "@type": "Offer", "name": "Social Strategy", "description": "Platform-native content calendars." },
      { "@type": "Offer", "name": "Brand Identity", "description": "Visual systems, naming, tone of voice." },
      { "@type": "Offer", "name": "KOL Partnerships", "description": "Influencer campaigns with verified reach." },
      { "@type": "Offer", "name": "Advisory & Consulting", "description": "Strategic guidance from industry operators." }
    ]
  }
}
```

## SEO Keyword Placement

| Keyword | Required placement |
|---------|-------------------|
| `crypto marketing agency` | `<title>`, `<meta description>`, story section body |
| `web3 marketing` | `<meta description>`, services section label or body |
| `blockchain marketing` | `<meta keywords>`, story or services body copy |
| `crypto PR` | `<meta keywords>`, media relations card description |
| `web3 narrative strategy` | `<meta keywords>`, narrative strategy card, story section |

2–3 appearances each across the page. Natural context only.

## Copy Tone Rules

| Do | Don't |
|----|-------|
| "We build narrative frameworks for crypto projects." | "We revolutionize how blockchain brands tell their stories!" |
| "Earned coverage in Tier 1 outlets." | "We supercharge your media presence!" |
| "Every breakthrough starts with the right story." | "Unleash the power of narrative marketing!" |
| "Built by operators, not observers." | "We're passionate about helping crypto projects succeed." |
| "Journalist relationships, not blast emails." | "Our cutting-edge PR strategy will moonshot your brand!" |

## Readability Copy Rules

- **All headings and labels are uppercase.** This is core brand identity, not optional.
- **Headlines use stacked multi-line format.** 3–4 lines, last line (or accented line) in green or stroke style.
- **Body copy: 1–2 sentences max per paragraph.** Weight 300, line-height 1.9.
- **Eyebrows use dash prefix:** "— Crypto Native. Market Proven."
- **Section closers:** Final sentence in Archivo 900 uppercase as a pull-quote thesis.
- **No exclamation marks.** No questions as headlines. No "we're passionate about."
- **No crypto hype language.** No "moonshot," "WAGMI," "to the moon," "LFG," "alpha."
- Declarative sentences throughout. State what it does and what the outcome is.

## Heading Hierarchy

```
<h1> — Hero headline (1 per page)
  <h2> — Section titles (Situation, Services, Quote, Story, Team, Contact, Closing)
    <h3> — Service card names
      <h4> — Team member names, solution card titles
```
One `<h1>`. Never skip levels. All uppercase.
