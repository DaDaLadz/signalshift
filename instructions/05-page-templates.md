# 05 — Page Templates

Populate each `<section>` in `index.html` with the HTML below. Use components from `04-component-library.md`.

---

## Section 1: Navigation

Place inside `<nav id="main-nav"><div class="container nav-inner">`:

```html
<a href="#hero" class="nav-logo">Signal Shift</a>
<div class="desktop-only" style="display:flex;align-items:center;gap:8px;">
  <a href="#services" class="nav-link">Services</a>
  <a href="#story" class="nav-link">Story</a>
  <a href="#team" class="nav-link">Team</a>
  <a href="#contact" class="nav-link">Contact</a>
</div>
<div class="desktop-only">
  <a href="#contact" class="nav-cta">
    <span>Start</span>
    <svg class="btn-arrow" width="20" height="8" viewBox="0 0 28 10" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M0 5h26m-4-4l4 4-4 4"/></svg>
  </a>
</div>
<button class="mobile-only" aria-label="Open menu" id="nav-toggle" style="background:none;border:none;color:var(--mid);cursor:pointer;padding:8px;">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
</button>
```

MobileNav React component — append as `<script type="text/babel">` at bottom of `<body>`:

```jsx
function MobileNav() {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const btn = document.getElementById('nav-toggle');
    if (!btn) return;
    const handler = () => setOpen(o => !o);
    btn.addEventListener('click', handler);
    return () => btn.removeEventListener('click', handler);
  }, []);
  if (!open) return null;
  const links = [['#services','Services'],['#story','Story'],['#team','Team'],['#contact','Contact']];
  return React.createElement('div', {
    style: { position:'fixed', top:60, left:0, right:0, bottom:0, background:'rgba(8,8,8,0.97)', backdropFilter:'blur(20px)', zIndex:999, padding:'32px 24px', display:'flex', flexDirection:'column', gap:4 }
  },
    ...links.map(([href, label]) =>
      React.createElement('a', { href, key:label, onClick:()=>setOpen(false), style:{ display:'block', padding:'14px 0', color:'var(--white)', fontFamily:'var(--font-body)', fontSize:'15px', fontWeight:400, textTransform:'uppercase', letterSpacing:'0.16em', textDecoration:'none', borderBottom:'1px solid var(--rule)' } }, label)
    ),
    React.createElement('a', { href:'#contact', onClick:()=>setOpen(false), className:'btn-primary', style:{marginTop:24, textAlign:'center', textDecoration:'none'} },
      React.createElement('span', null, 'Start'),
      React.createElement('svg', { className:'btn-arrow', width:20, height:8, viewBox:'0 0 28 10', fill:'none', stroke:'currentColor', strokeWidth:'1.5' },
        React.createElement('path', { d:'M0 5h26m-4-4l4 4-4 4' })
      )
    )
  );
}
ReactDOM.createRoot(document.getElementById('mobile-nav')).render(React.createElement(MobileNav));
```

---

## Section 2: Hero

<!-- CONTEXT: Full-viewport hero with stacked uppercase headline, animated reveal. Stats inline in hero. No hero image — typography IS the visual. Eyebrow sets context. CTA below stats. The headline creates a visual landmark that is the primary first impression. -->

```html
<section id="hero" class="section section--snap" style="padding-top:80px;">
  <div class="container" style="position:relative;z-index:2;">

    <p class="eyebrow" style="margin-bottom:var(--space-xl);">— Crypto Native. Market Proven.</p>

    <h1 class="hero-headline" id="hero-headline">
      <span class="hero-headline__line"><span class="hero-headline__text" data-delay="0">Every</span></span>
      <span class="hero-headline__line"><span class="hero-headline__text" data-delay="1">Breakthrough</span></span>
      <span class="hero-headline__line"><span class="hero-headline__text" data-delay="2">Starts With</span></span>
      <span class="hero-headline__line"><span class="hero-headline__text stroke-text" data-delay="3">The Right Story.</span></span>
    </h1>

    <div class="stats-row" style="margin-top:var(--space-3xl);margin-bottom:var(--space-xl);">
      <div class="stat">
        <div class="stat__number" data-target="30" data-suffix="+"><span>0</span><span class="stat__suffix">+</span></div>
        <div class="stat__label">Years Combined</div>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <div class="stat__number" data-target="100" data-suffix="+"><span>0</span><span class="stat__suffix">+</span></div>
        <div class="stat__label">Projects Launched</div>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <div class="stat__number" data-target="8" data-suffix="+"><span>0</span><span class="stat__suffix">+</span></div>
        <div class="stat__label">Years in Space</div>
      </div>
    </div>

    <a href="#contact" class="btn-primary" style="text-decoration:none;">
      <span>START THE SIGNAL</span>
      <svg class="btn-arrow" width="28" height="10" viewBox="0 0 28 10" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M0 5h26m-4-4l4 4-4 4"/></svg>
    </a>

  </div>
</section>
```

---

## Section 3: Situation Selector

<!-- CONTEXT: Interactive self-identification tool. Visitor picks their project stage (Pre-launch, Limited Traction, Growing, Rebranding). This drives dynamic highlighting of service cards in the next section via FLIP animation. Creates conversation, not broadcast. -->

```html
<section id="situation" class="section section--snap">
  <div class="container">
    <span class="section-label">— Where Are You Right Now?</span>
    <h2 class="section-title" style="margin-bottom:var(--space-2xl);">Select Your Stage</h2>

    <div class="grid-situation" id="situation-grid">
      <button class="stage-btn" data-stage="prelaunch">
        <div class="stage-btn__label">Pre-Launch</div>
        <p class="stage-btn__desc">Building. No token or mainnet yet. Need narrative before market entry.</p>
      </button>
      <button class="stage-btn" data-stage="traction">
        <div class="stage-btn__label">Limited Traction</div>
        <p class="stage-btn__desc">Live but not growing. Community exists but hasn't caught fire.</p>
      </button>
      <button class="stage-btn" data-stage="growing">
        <div class="stage-btn__label">Growing</div>
        <p class="stage-btn__desc">Momentum is real. Need to scale messaging across channels.</p>
      </button>
      <button class="stage-btn" data-stage="rebrand">
        <div class="stage-btn__label">Rebranding</div>
        <p class="stage-btn__desc">Established but evolving. Market perception needs to shift.</p>
      </button>
    </div>

    <div id="situation-terminal" style="margin-top:var(--space-2xl);min-height:48px;">
      <!-- Terminal-style output rendered by JS after selection -->
    </div>
  </div>
</section>
```

---

## Section 4: Services (3-Column Grid)

<!-- CONTEXT: 8 service cards in 3-column grid. Cards highlight/dim based on Situation Selector via FLIP animation. Each card has: number, name (Archivo), description (Plex Mono), optional "Recommended" badge. Highlighting adds green border, green name, tinted bg. Non-matching cards dim to 65% opacity. -->

```html
<section id="services" class="section section--snap">
  <div class="container">
    <span class="section-label">— What We Build</span>
    <h2 class="section-title" style="margin-bottom:var(--space-2xl);">Services</h2>

    <div class="grid-services" id="services-grid">

      <div class="svc-card" data-service="narrative" data-stages="prelaunch,traction,rebrand">
        <div class="svc-card__number">01</div>
        <h3 class="svc-card__name">Narrative Strategy</h3>
        <p class="svc-card__desc">Positioning, messaging frameworks, and media angles that define how the market sees you.</p>
      </div>

      <div class="svc-card" data-service="media" data-stages="prelaunch,traction,growing">
        <div class="svc-card__number">02</div>
        <h3 class="svc-card__name">Media Relations</h3>
        <p class="svc-card__desc">Earned coverage in Tier 1 crypto and mainstream outlets. Journalist relationships, not blast emails.</p>
      </div>

      <div class="svc-card" data-service="content" data-stages="traction,growing,rebrand">
        <div class="svc-card__number">03</div>
        <h3 class="svc-card__name">Content Production</h3>
        <p class="svc-card__desc">Longform, threads, newsletters, video scripts. Built around your voice and narrative arc.</p>
      </div>

      <div class="svc-card" data-service="community" data-stages="prelaunch,traction,growing">
        <div class="svc-card__number">04</div>
        <h3 class="svc-card__name">Community Growth</h3>
        <p class="svc-card__desc">Discord and Telegram strategy, ambassador programs, event activations that build real loyalty.</p>
      </div>

      <div class="svc-card" data-service="social" data-stages="traction,growing,rebrand">
        <div class="svc-card__number">05</div>
        <h3 class="svc-card__name">Social Strategy</h3>
        <p class="svc-card__desc">Platform-native content calendars for X, Farcaster, LinkedIn. Engagement that compounds.</p>
      </div>

      <div class="svc-card" data-service="brand" data-stages="prelaunch,rebrand">
        <div class="svc-card__number">06</div>
        <h3 class="svc-card__name">Brand Identity</h3>
        <p class="svc-card__desc">Visual systems, naming, tone of voice. The foundation everything else is built on.</p>
        <span class="svc-card__badge">Recommended for rebrand</span>
      </div>

      <div class="svc-card" data-service="kol" data-stages="prelaunch,growing">
        <div class="svc-card__number">07</div>
        <h3 class="svc-card__name">KOL Partnerships</h3>
        <p class="svc-card__desc">Influencer campaigns with verified reach. No bots, no fake engagement. Tracked attribution.</p>
      </div>

      <div class="svc-card" data-service="advisory" data-stages="growing,rebrand">
        <div class="svc-card__number">08</div>
        <h3 class="svc-card__name">Advisory & Consulting</h3>
        <p class="svc-card__desc">Strategic guidance from operators who've led marketing at top-tier crypto media and projects.</p>
      </div>

    </div>
  </div>
</section>
```

---

## Section 5: Quote

<!-- CONTEXT: Full-viewport statement section. Typewriter animation builds the manifesto line character-by-character, earning the reader's attention. After typewriter completes, a stacked headline reveals below. Creates a cinematic beat between services and story. -->

```html
<section id="quote" class="section section--snap" style="text-align:center;display:flex;align-items:center;justify-content:center;">
  <div class="container" style="max-width:900px;">
    <p id="typewriter-target" style="font-family:var(--font-body);font-size:clamp(18px,2.2vw,22px);font-weight:var(--weight-body);line-height:1.9;color:var(--mid);min-height:3em;"></p>
    <div id="quote-headline" style="margin-top:var(--space-2xl);opacity:0;">
      <h2 class="section-title" style="font-size:clamp(32px,4vw,56px);line-height:0.92;">
        For the<br>Projects<br>That Deserve<br><span class="stroke-text">to Win.</span>
      </h2>
    </div>
  </div>
</section>
```

Typewriter text content (set in `main.js`):
```
"We didn't start in marketing. We started in newsrooms — covering the projects that were building something real, and watching the ones that weren't get all the attention. Signal Shift exists to fix that."
```

---

## Section 6: Our Story

<!-- CONTEXT: 2-column asymmetric layout. Left: headline + stacked stat list. Right: narrative body copy. Stats use Archivo numbers with green suffixes. Narrative establishes journalistic credentials (Cointelegraph, Forbes). -->

```html
<section id="story" class="section section--snap">
  <div class="container">
    <div class="grid-split">

      <!-- Left column: headline + stats -->
      <div>
        <span class="section-label">— Our Story</span>
        <h2 class="section-title" style="margin-bottom:var(--space-2xl);">From the<br>Newsroom<br>to the<br><span class="stroke-text">Front Lines.</span></h2>

        <div style="display:flex;flex-direction:column;gap:var(--space-lg);">
          <div style="border-bottom:1px solid var(--rule);padding-bottom:var(--space-lg);">
            <div class="stat__number" style="font-size:42px;" data-target="30" data-suffix="+"><span>0</span><span class="stat__suffix">+</span></div>
            <div class="stat__label">Years Combined Experience</div>
          </div>
          <div style="border-bottom:1px solid var(--rule);padding-bottom:var(--space-lg);">
            <div class="stat__number" style="font-size:42px;" data-target="100" data-suffix="+"><span>0</span><span class="stat__suffix">+</span></div>
            <div class="stat__label">Projects Delivered</div>
          </div>
          <div>
            <div class="stat__number" style="font-size:42px;" data-target="8" data-suffix="+"><span>0</span><span class="stat__suffix">+</span></div>
            <div class="stat__label">Years in Crypto</div>
          </div>
        </div>
      </div>

      <!-- Right column: narrative -->
      <div style="display:flex;flex-direction:column;justify-content:center;">
        <p style="margin-bottom:var(--space-lg);">Signal Shift was founded by a team that led newsrooms at Cointelegraph and Forbes Digital Assets — covering the projects that were changing the industry, and watching countless others fail to communicate what made them different.</p>

        <p style="margin-bottom:var(--space-lg);">We saw the gap firsthand. Great technology buried under bad messaging. Genuine innovation lost in a sea of hype. The projects that deserved attention weren't getting it — because they were building, not marketing.</p>

        <p style="margin-bottom:var(--space-2xl);">So we built an agency around a single premise: every breakthrough starts with the right story. We bring the editorial rigor of a newsroom to the execution speed of a growth team.</p>

        <p class="section-closer">We're not here to add noise.<br>We're here to create signal.</p>
      </div>

    </div>
  </div>
</section>
```

---

## Section 7: Team

```html
<section id="team" class="section section--snap">
  <div class="container">
    <span class="section-label">— The Team</span>
    <h2 class="section-title" style="margin-bottom:var(--space-2xl);">Built by Operators,<br>Not Observers.</h2>

    <div class="grid-team">
      <div class="team-card">
        <div class="team-card__photo" aria-label="Team member photo placeholder"></div>
        <h4 class="team-card__name">Alex Moreno</h4>
        <p class="team-card__title">Founder & Narrative Lead — Ex-Cointelegraph</p>
      </div>
      <div class="team-card">
        <div class="team-card__photo" aria-label="Team member photo placeholder"></div>
        <h4 class="team-card__name">Sarah Chen</h4>
        <p class="team-card__title">Head of Media — Ex-Forbes Digital Assets</p>
      </div>
      <div class="team-card">
        <div class="team-card__photo" aria-label="Team member photo placeholder"></div>
        <h4 class="team-card__name">Marcus Webb</h4>
        <p class="team-card__title">Growth Director — 8 Years in DeFi Marketing</p>
      </div>
    </div>
  </div>
</section>
```

---

## Section 8: Contact

<!-- CONTEXT: 2-column asymmetric. Left: headline. Right: form with borderless inputs, chip-based service selection. Inputs use bottom-border style that shifts to green on focus. Labels are green uppercase. Keep fields minimal — name, email, project URL, services (chips), message. -->

```html
<section id="contact" class="section section--snap">
  <div class="container">
    <div class="grid-split">

      <!-- Left column: headline -->
      <div>
        <span class="section-label">— Let's Talk</span>
        <h2 class="section-title" style="margin-bottom:var(--space-lg);">Tell Us<br>What You're<br><span class="stroke-text">Building.</span></h2>
        <p style="color:var(--mid);margin-bottom:var(--space-xl);max-width:380px;">We typically respond within 24 hours. No commitment, no pressure — just a conversation about what's possible.</p>
      </div>

      <!-- Right column: form -->
      <div id="contact-form-app"></div>

    </div>
  </div>
</section>
```

ContactForm React component — renders inside `#contact-form-app`:

Fields:
- Row 1: Name (required) — borderless input with bottom border
- Row 2: Email (required) — borderless input with bottom border
- Row 3: Project URL (optional) — borderless input with bottom border
- Row 4: "Services" label + flex row of `.chip-btn`. Options: "Narrative Strategy", "Media Relations", "Content", "Community", "Social", "Brand Identity", "KOL", "Advisory"
- Row 5: Message (textarea, borderless)
- Submit: `.btn-submit` "Send Message"

---

## Section 9: Closing

<!-- CONTEXT: Full-viewport final CTA. Dynamic copy that changes based on Situation Selector choice. Default shows generic version. After selection, copy personalizes (e.g., "Ready to launch your signal?" for pre-launch). -->

```html
<section id="closing" class="section section--snap" style="text-align:center;display:flex;align-items:center;justify-content:center;">
  <div class="container" style="max-width:900px;">
    <h2 class="section-title" style="font-size:clamp(36px,5vw,72px);margin-bottom:var(--space-xl);" id="closing-headline">
      Ready to<br>Create<br><span class="stroke-text">Your Signal?</span>
    </h2>
    <p id="closing-desc" style="font-family:var(--font-body);font-size:19px;font-weight:var(--weight-body);color:var(--mid);margin-bottom:var(--space-2xl);max-width:500px;margin-left:auto;margin-right:auto;">The right story at the right time changes everything. Let's build yours.</p>
    <a href="#contact" class="btn-primary" id="closing-cta" style="text-decoration:none;">
      <span>START THE SIGNAL</span>
      <svg class="btn-arrow" width="28" height="10" viewBox="0 0 28 10" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M0 5h26m-4-4l4 4-4 4"/></svg>
    </a>
  </div>
</section>
```

Dynamic closing copy (set in `main.js` based on situation selection):

| Stage | Headline | Description | CTA |
|-------|----------|-------------|-----|
| Default | Ready to Create Your Signal? | The right story at the right time changes everything. Let's build yours. | START THE SIGNAL |
| prelaunch | Ready to Launch Your Signal? | You're building something real. Let's make sure the market knows it before day one. | LAUNCH THE SIGNAL |
| traction | Ready to Amplify Your Signal? | Traction is a starting point, not a ceiling. Let's turn attention into momentum. | AMPLIFY THE SIGNAL |
| growing | Ready to Scale Your Signal? | Growth compounds when the narrative is right. Let's make sure yours stays ahead of the market. | SCALE THE SIGNAL |
| rebrand | Ready to Shift Your Signal? | The market's perception of you is about to change. Let's control the narrative. | SHIFT THE SIGNAL |

---

## Section 10: Ticker

```html
<div id="ticker" class="ticker" aria-label="Client list">
  <div class="ticker__track">
    <span class="ticker__item">Solana</span>
    <span class="ticker__item">Ripple</span>
    <span class="ticker__item">Kaito</span>
    <span class="ticker__item">Aave</span>
    <span class="ticker__item">Arbitrum</span>
    <span class="ticker__item">Chainlink</span>
    <span class="ticker__item">Polygon</span>
    <span class="ticker__item">Optimism</span>
    <span class="ticker__item">Uniswap</span>
    <span class="ticker__item">Lido</span>
    <!-- Duplicated for seamless loop -->
    <span class="ticker__item">Solana</span>
    <span class="ticker__item">Ripple</span>
    <span class="ticker__item">Kaito</span>
    <span class="ticker__item">Aave</span>
    <span class="ticker__item">Arbitrum</span>
    <span class="ticker__item">Chainlink</span>
    <span class="ticker__item">Polygon</span>
    <span class="ticker__item">Optimism</span>
    <span class="ticker__item">Uniswap</span>
    <span class="ticker__item">Lido</span>
  </div>
</div>
```

---

## Section 11: Footer

```html
<footer id="footer" style="border-top:1px solid var(--rule);padding:var(--space-3xl) 0 var(--space-xl);">
  <div class="container">
    <div style="display:grid;grid-template-columns:2fr 1fr 1fr;gap:var(--space-xl);margin-bottom:var(--space-2xl);">
      <div>
        <a href="#hero" class="nav-logo" style="display:inline-block;margin-bottom:var(--space-md);">Signal Shift</a>
        <p style="font-size:14px;color:var(--dim);line-height:1.8;max-width:300px;margin-bottom:var(--space-md);">Crypto-native marketing for projects that deserve to win.</p>
        <a href="mailto:hello@signalshift.io" style="font-size:14px;color:var(--mid);">hello@signalshift.io</a>
      </div>
      <div>
        <p style="font-family:var(--font-body);font-size:12px;text-transform:uppercase;letter-spacing:0.16em;color:var(--dim);font-weight:400;margin-bottom:var(--space-md);">Services</p>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;">
          <li><a href="#services" style="font-size:14px;color:var(--mid);">Narrative Strategy</a></li>
          <li><a href="#services" style="font-size:14px;color:var(--mid);">Media Relations</a></li>
          <li><a href="#services" style="font-size:14px;color:var(--mid);">Content Production</a></li>
          <li><a href="#services" style="font-size:14px;color:var(--mid);">Community Growth</a></li>
        </ul>
      </div>
      <div>
        <p style="font-family:var(--font-body);font-size:12px;text-transform:uppercase;letter-spacing:0.16em;color:var(--dim);font-weight:400;margin-bottom:var(--space-md);">Company</p>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;">
          <li><a href="#story" style="font-size:14px;color:var(--mid);">Our Story</a></li>
          <li><a href="#team" style="font-size:14px;color:var(--mid);">Team</a></li>
          <li><a href="#contact" style="font-size:14px;color:var(--mid);">Contact</a></li>
        </ul>
      </div>
    </div>
    <div style="border-top:1px solid var(--rule);padding-top:var(--space-lg);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:var(--space-md);">
      <p style="font-size:13px;color:var(--dim);">© 2026 Signal Shift. All rights reserved.</p>
      <div style="display:flex;gap:var(--space-lg);">
        <a href="#" style="font-size:13px;color:var(--dim);">Privacy</a>
        <a href="#" style="font-size:13px;color:var(--dim);">Terms</a>
      </div>
    </div>
  </div>
</footer>
```

Footer responsive override:
```css
@media (max-width: 767px) {
  #footer .container > div:first-child { grid-template-columns: 1fr !important; gap: var(--space-2xl) !important; }
}
```
