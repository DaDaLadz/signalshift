# 04 — Component Library

Append all CSS below to `styles.css` after the layout CSS from step 3.

---

## Buttons

### `.btn-primary` — Solid Green CTA

Use for: hero CTA, closing CTA, and primary actions. All CTAs include a right-pointing arrow SVG.

```html
<a href="#contact" class="btn-primary">
  <span>START THE SIGNAL</span>
  <svg class="btn-arrow" width="28" height="10" viewBox="0 0 28 10" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M0 5h26m-4-4l4 4-4 4"/></svg>
</a>
```

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  background: var(--green);
  color: var(--bg);
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: var(--weight-display);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 14px 28px;
  border: none;
  border-radius: 0;
  cursor: pointer;
  text-decoration: none;
  transition: background var(--duration-hover), letter-spacing var(--duration-hover);
}
.btn-primary:hover {
  background: var(--green-hover);
  letter-spacing: 0.16em;
  color: var(--bg);
}
.btn-arrow { transition: transform 0.25s ease; }
.btn-primary:hover .btn-arrow { transform: translateX(6px); }
```

### `.btn-outline` — Secondary CTA (Border Only)

```css
.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  background: transparent;
  color: var(--white);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: var(--weight-label);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 12px 24px;
  border: 1px solid var(--rule);
  border-radius: 0;
  cursor: pointer;
  text-decoration: none;
  transition: border-color var(--duration-hover), color var(--duration-hover);
}
.btn-outline:hover {
  border-color: var(--green-border);
  color: var(--green);
}
.btn-outline:hover .btn-arrow { transform: translateX(6px); }
```

### `.btn-submit` — Full-Width Form Submit

```css
.btn-submit {
  width: 100%;
  background: var(--green);
  color: var(--bg);
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: var(--weight-display);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 16px;
  border: none;
  border-radius: 0;
  cursor: pointer;
  transition: background var(--duration-hover), letter-spacing var(--duration-hover);
}
.btn-submit:hover { background: var(--green-hover); letter-spacing: 0.16em; }
.btn-submit:disabled { opacity: 0.4; cursor: not-allowed; }
```

---

## Navigation

```css
.nav-logo {
  font-family: var(--font-logo);
  font-size: 17px;
  font-weight: var(--weight-logo);
  color: var(--white);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
@media (max-width: 767px) { .nav-logo { font-size: 14px; } }

.nav-link {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: var(--weight-label);
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--mid);
  text-decoration: none;
  padding: 8px 12px;
  position: relative;
  transition: color var(--duration-hover);
  background: none; border: none; cursor: pointer;
}
.nav-link:hover { color: var(--white); }

.nav-cta {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  background: var(--green);
  color: var(--bg);
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: var(--weight-display);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 10px 20px;
  text-decoration: none;
  transition: background var(--duration-hover);
}
.nav-cta:hover { background: var(--green-hover); color: var(--bg); }
```

---

## Service Card

```css
.svc-card {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  padding: 24px;
  position: relative;
  transition: border-color var(--duration-hover), opacity var(--duration-flip) ease;
}
.svc-card:hover { border-color: var(--border-hover); }

/* Highlighted state (via Situation Selector) */
.svc-card.highlighted {
  border-color: var(--green-border);
  background: #0A0F07;
  box-shadow: 0 0 20px var(--green-dim);
}
.svc-card.highlighted .svc-card__name { color: var(--green); }

/* Dimmed state (non-matching cards) */
.svc-card.dimmed { opacity: 0.65; }

.svc-card__number {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: var(--weight-label);
  color: var(--dim);
  margin-bottom: var(--space-md);
}
.svc-card__name {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: var(--weight-display);
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: var(--white);
  margin-bottom: var(--space-md);
  transition: color 0.3s ease;
}
.svc-card__desc {
  font-family: var(--font-body);
  font-size: 17px;
  font-weight: var(--weight-body);
  color: var(--mid);
  line-height: 1.9;
}
.svc-card__badge {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: var(--weight-bold);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--green);
  border: 1px solid var(--green-border);
  padding: 3px 10px;
  margin-top: var(--space-md);
}
```

---

## Situation Selector Stage Button

```css
.stage-btn {
  background: var(--bg-elevated);
  border: 1px solid var(--rule);
  padding: var(--space-lg);
  cursor: pointer;
  text-align: left;
  transition: border-color 0.3s ease, background 0.3s ease;
}
.stage-btn:hover { border-color: var(--border-hover); }
.stage-btn.active {
  border-color: var(--green-border);
  background: var(--green-dim);
}
.stage-btn__label {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: var(--weight-display);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--white);
  margin-bottom: var(--space-xs);
  transition: color 0.3s ease;
}
.stage-btn.active .stage-btn__label { color: var(--green); }
.stage-btn__desc {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: var(--weight-body);
  color: var(--dim);
  line-height: 1.6;
}
```

---

## Stats

```css
.stat { display: flex; flex-direction: column; }
.stat__number {
  font-family: var(--font-display);
  font-size: clamp(32px, 4vw, 46px);
  font-weight: var(--weight-display);
  color: var(--white);
  line-height: 1;
  letter-spacing: -0.04em;
}
.stat__number .stat__suffix { color: var(--green); }
.stat__label {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: var(--weight-label);
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--dim);
  margin-top: var(--space-xs);
}
.stats-row {
  display: flex;
  align-items: center;
  gap: var(--space-xl);
}
.stat-divider {
  width: 1px; height: 28px;
  background: var(--rule);
  align-self: center;
}
```

---

## Team Card

```css
.team-card {
  background: var(--bg-elevated);
  border: 1px solid var(--rule);
  padding: var(--space-xl);
}
.team-card__photo {
  width: 100%;
  aspect-ratio: 1 / 1;
  background: var(--bg-card);
  border: 1px solid var(--rule);
  margin-bottom: var(--space-md);
}
.team-card__name {
  font-family: var(--font-display);
  font-size: 15px;
  font-weight: var(--weight-display);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: var(--white);
  margin-bottom: var(--space-xs);
}
.team-card__title {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: var(--weight-body);
  color: var(--dim);
}
```

---

## Ticker / Marquee

```css
.ticker {
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
  height: 48px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
}
.ticker::before, .ticker::after {
  content: '';
  position: absolute;
  top: 0; bottom: 0;
  width: 80px;
  z-index: 2;
  pointer-events: none;
}
.ticker::before { left: 0; background: linear-gradient(to right, var(--bg), transparent); }
.ticker::after { right: 0; background: linear-gradient(to left, var(--bg), transparent); }

.ticker__track {
  display: flex;
  gap: var(--space-2xl);
  animation: ticker-scroll 28s linear infinite;
  white-space: nowrap;
}
.ticker__track:hover { animation-play-state: paused; }

.ticker__item {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: var(--weight-label);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--mid);
  flex-shrink: 0;
}

@keyframes ticker-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@media (max-width: 767px) { .ticker { height: 40px; } }
```

---

## Form Elements

```css
.form-row {
  border-bottom: 1px solid var(--rule);
  padding: var(--space-md) 0;
  transition: border-color 0.3s ease;
}
.form-row:focus-within { border-color: var(--green); }

.form-label {
  display: block;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: var(--weight-label);
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--green);
  margin-bottom: var(--space-sm);
}
.form-required { color: var(--green); }

.form-input {
  width: 100%;
  background: transparent;
  border: none;
  font-family: var(--font-body);
  font-size: 21px;
  font-weight: var(--weight-body);
  color: var(--white);
  caret-color: var(--green);
  outline: none;
  padding: var(--space-sm) 0;
}
.form-input::placeholder { color: var(--dim); }

/* Service selection chips */
.chip-btn {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid var(--rule);
  border-radius: 0;
  background: transparent;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: var(--weight-label);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--mid);
  cursor: pointer;
  transition: all var(--duration-hover);
}
.chip-btn.selected {
  border-color: var(--green-border);
  color: var(--green);
  background: var(--green-dim);
}
.chip-btn:hover:not(.selected) {
  border-color: var(--border-hover);
  color: var(--white);
}
```

---

## Stroke Text (Headline Accent)

```css
.stroke-text {
  -webkit-text-stroke: 1.5px var(--green);
  -webkit-text-fill-color: transparent;
  color: var(--green); /* Fallback */
}
```

---

## Hero Headline (Stacked Block)

```css
.hero-headline {
  font-family: var(--font-display);
  font-weight: var(--weight-display);
  font-size: clamp(48px, 6.8vw, 100px);
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 0.88;
  color: var(--white);
}
.hero-headline__line {
  display: block;
  overflow: hidden;
}
.hero-headline__text {
  display: block;
  transform: translateY(110%);
  transition: transform var(--duration-reveal) var(--ease-out);
}
.hero-headline__text.revealed { transform: translateY(0); }
/* Stagger delays applied via inline style or data-delay attr */
```

---

## Eyebrow / Dash Prefix

```css
.eyebrow {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: var(--weight-label);
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--dim);
}
.eyebrow em {
  font-style: normal;
  color: var(--green);
}
```

---

## Section Closer (Pull Quote)

```css
.section-closer {
  font-family: var(--font-display);
  font-weight: var(--weight-display);
  font-size: clamp(18px, 2vw, 24px);
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: var(--white);
  margin-top: var(--space-2xl);
}
```

---

## Typewriter Cursor

```css
.typewriter-cursor {
  display: inline-block;
  width: 2px;
  height: 1em;
  background: var(--green);
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: cursor-blink 0.8s step-end infinite;
}
@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
```
