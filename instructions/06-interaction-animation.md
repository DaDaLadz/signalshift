# 06 — Interaction & Animation

## Animation CSS

Append to `styles.css`:

```css
/* --- Scroll Reveal (for non-hero elements) --- */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s var(--ease-out),
              transform 0.5s var(--ease-out);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
.reveal[data-delay="0"] { transition-delay: 0s; }
.reveal[data-delay="1"] { transition-delay: 0.1s; }
.reveal[data-delay="2"] { transition-delay: 0.15s; }
.reveal[data-delay="3"] { transition-delay: 0.2s; }
.reveal[data-delay="4"] { transition-delay: 0.25s; }

/* --- Page Fade In --- */
body {
  opacity: 0;
  animation: page-fade 0.9s ease forwards;
}
@keyframes page-fade {
  to { opacity: 1; }
}

/* --- Quote Headline Reveal --- */
#quote-headline {
  transition: opacity 0.6s var(--ease-out);
}
#quote-headline.visible { opacity: 1 !important; }

/* --- Reduced Motion --- */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  body { opacity: 1; }
  .reveal { opacity: 1; transform: none; }
  .hero-headline__text { transform: none !important; }
  #quote-headline { opacity: 1 !important; }
}
```

## main.js

Complete file:

```js
(function () {
  'use strict';

  // --- Hero Headline Reveal ---
  // Staggered translateY reveal on page load
  var heroLines = document.querySelectorAll('.hero-headline__text');
  setTimeout(function () {
    heroLines.forEach(function (line, i) {
      var delay = parseInt(line.getAttribute('data-delay') || '0', 10);
      setTimeout(function () {
        line.classList.add('revealed');
      }, delay * 100);
    });
  }, 300); // Wait for page fade-in to start

  // --- Scroll Reveal (non-hero elements) ---
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { revealObserver.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }

  // --- Nav Scroll State ---
  var nav = document.getElementById('main-nav');
  var pageWrap = document.getElementById('page-wrap');
  var scrollSource = pageWrap && getComputedStyle(pageWrap).overflowY !== 'visible' ? pageWrap : window;

  function getScrollY() {
    return scrollSource === window ? window.scrollY : pageWrap.scrollTop;
  }

  function updateNav() {
    if (getScrollY() > 40) { nav.classList.add('scrolled'); }
    else { nav.classList.remove('scrolled'); }
  }
  (scrollSource === window ? window : pageWrap).addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // --- Scroll Progress Bar ---
  var progressBar = document.querySelector('.scroll-progress');
  function updateProgress() {
    var el = scrollSource === window ? document.documentElement : pageWrap;
    var scrolled = scrollSource === window ? window.scrollY : pageWrap.scrollTop;
    var total = el.scrollHeight - (scrollSource === window ? window.innerHeight : pageWrap.clientHeight);
    progressBar.style.width = (total > 0 ? (scrolled / total) * 100 : 0) + '%';
  }
  (scrollSource === window ? window : pageWrap).addEventListener('scroll', updateProgress, { passive: true });

  // --- Back to Top Button ---
  var backToTop = document.getElementById('back-to-top');
  function updateBackToTop() {
    var threshold = (scrollSource === window ? window.innerHeight : pageWrap.clientHeight) * 0.5;
    if (getScrollY() > threshold) { backToTop.classList.add('visible'); }
    else { backToTop.classList.remove('visible'); }
  }
  (scrollSource === window ? window : pageWrap).addEventListener('scroll', updateBackToTop, { passive: true });
  backToTop.addEventListener('click', function () {
    if (scrollSource === window) { window.scrollTo({ top: 0, behavior: 'smooth' }); }
    else { pageWrap.scrollTo({ top: 0, behavior: 'smooth' }); }
  });

  // --- Stat Counter Animation ---
  var statNumbers = document.querySelectorAll('.stat__number[data-target]');
  if (statNumbers.length > 0 && 'IntersectionObserver' in window) {
    var countedSets = new Set();
    statNumbers.forEach(function (el) {
      var statsObserver = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting && !countedSets.has(el)) {
          countedSets.add(el);
          animateCounter(el);
          statsObserver.disconnect();
        }
      }, { threshold: 0.5 });
      statsObserver.observe(el);
    });
  }

  function animateCounter(el) {
    var target = parseFloat(el.getAttribute('data-target'));
    var suffix = el.getAttribute('data-suffix') || '';
    var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    var duration = 1500;
    var start = performance.now();
    var numberSpan = el.querySelector('span:first-child') || el;

    function step(now) {
      var elapsed = now - start;
      var progress = Math.min(elapsed / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = eased * target;
      numberSpan.textContent = (decimals > 0 ? current.toFixed(decimals) : Math.floor(current));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  // --- Typewriter Effect (Quote Section) ---
  var typewriterTarget = document.getElementById('typewriter-target');
  var typewriterText = "We didn\u2019t start in marketing. We started in newsrooms \u2014 covering the projects that were building something real, and watching the ones that weren\u2019t get all the attention. Signal Shift exists to fix that.";
  var typewriterStarted = false;

  if (typewriterTarget && 'IntersectionObserver' in window) {
    var twObserver = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting && !typewriterStarted) {
        typewriterStarted = true;
        startTypewriter();
        twObserver.disconnect();
      }
    }, { threshold: 0.5 });
    twObserver.observe(typewriterTarget);
  }

  function startTypewriter() {
    var i = 0;
    var cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    typewriterTarget.textContent = '';
    typewriterTarget.appendChild(cursor);

    function typeChar() {
      if (i < typewriterText.length) {
        var textNode = document.createTextNode(typewriterText[i]);
        typewriterTarget.insertBefore(textNode, cursor);
        i++;
        var delay = typewriterText[i - 1] === '.' || typewriterText[i - 1] === '\u2014' ? 80 : 25;
        setTimeout(typeChar, delay);
      } else {
        // Typewriter done — reveal the headline
        setTimeout(function () {
          var quoteHeadline = document.getElementById('quote-headline');
          if (quoteHeadline) quoteHeadline.classList.add('visible');
        }, 400);
      }
    }
    typeChar();
  }

  // --- Situation Selector + FLIP Animation ---
  var stageBtns = document.querySelectorAll('.stage-btn');
  var svcCards = document.querySelectorAll('.svc-card');
  var terminal = document.getElementById('situation-terminal');
  var closingHeadline = document.getElementById('closing-headline');
  var closingDesc = document.getElementById('closing-desc');
  var closingCta = document.getElementById('closing-cta');
  var currentStage = null;

  var closingData = {
    'default': { headline: 'Ready to<br>Create<br><span class="stroke-text">Your Signal?</span>', desc: 'The right story at the right time changes everything. Let\u2019s build yours.', cta: 'START THE SIGNAL' },
    'prelaunch': { headline: 'Ready to<br>Launch<br><span class="stroke-text">Your Signal?</span>', desc: 'You\u2019re building something real. Let\u2019s make sure the market knows it before day one.', cta: 'LAUNCH THE SIGNAL' },
    'traction': { headline: 'Ready to<br>Amplify<br><span class="stroke-text">Your Signal?</span>', desc: 'Traction is a starting point, not a ceiling. Let\u2019s turn attention into momentum.', cta: 'AMPLIFY THE SIGNAL' },
    'growing': { headline: 'Ready to<br>Scale<br><span class="stroke-text">Your Signal?</span>', desc: 'Growth compounds when the narrative is right. Let\u2019s make sure yours stays ahead of the market.', cta: 'SCALE THE SIGNAL' },
    'rebrand': { headline: 'Ready to<br>Shift<br><span class="stroke-text">Your Signal?</span>', desc: 'The market\u2019s perception of you is about to change. Let\u2019s control the narrative.', cta: 'SHIFT THE SIGNAL' }
  };

  stageBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var stage = btn.getAttribute('data-stage');

      // Toggle active state
      stageBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      currentStage = stage;

      // Terminal output
      if (terminal) {
        terminal.innerHTML = '<p style="font-family:var(--font-body);font-size:14px;color:var(--dim);animation:pulse-opacity 1.2s ease infinite;">scanning for recommendations...</p>';
        setTimeout(function () {
          terminal.innerHTML = '<a href="#services" class="btn-outline" style="text-decoration:none;display:inline-flex;"><span>VIEW RECOMMENDED SERVICES</span><svg class="btn-arrow" width="20" height="8" viewBox="0 0 28 10" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M0 5h26m-4-4l4 4-4 4"/></svg></a>';
        }, 1200);
      }

      // FLIP: Record positions
      var firstPositions = [];
      svcCards.forEach(function (card) {
        firstPositions.push(card.getBoundingClientRect());
      });

      // Highlight matching cards, dim non-matching
      svcCards.forEach(function (card) {
        var stages = (card.getAttribute('data-stages') || '').split(',');
        if (stages.indexOf(stage) !== -1) {
          card.classList.add('highlighted');
          card.classList.remove('dimmed');
        } else {
          card.classList.remove('highlighted');
          card.classList.add('dimmed');
        }
      });

      // FLIP: Animate from old to new positions
      svcCards.forEach(function (card, i) {
        var last = card.getBoundingClientRect();
        var deltaX = firstPositions[i].left - last.left;
        var deltaY = firstPositions[i].top - last.top;
        if (deltaX !== 0 || deltaY !== 0) {
          card.style.transform = 'translate(' + deltaX + 'px, ' + deltaY + 'px)';
          card.style.transition = 'none';
          requestAnimationFrame(function () {
            card.style.transition = 'transform ' + (700) + 'ms cubic-bezier(0.16, 1, 0.3, 1)';
            card.style.transform = '';
          });
        }
      });

      // Update closing section
      var data = closingData[stage] || closingData['default'];
      fadeText(closingHeadline, data.headline);
      fadeText(closingDesc, data.desc);
      if (closingCta) {
        var ctaSpan = closingCta.querySelector('span');
        if (ctaSpan) ctaSpan.textContent = data.cta;
      }
    });
  });

  function fadeText(el, newHTML) {
    if (!el) return;
    el.style.transition = 'opacity 0.3s ease';
    el.style.opacity = '0';
    setTimeout(function () {
      el.innerHTML = newHTML;
      el.style.opacity = '1';
    }, 300);
  }

})();
```

Add pulse animation to `styles.css`:

```css
@keyframes pulse-opacity {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}
```

## What Is Animated vs Not

| Animated | How | Trigger |
|----------|-----|---------|
| Page fade-in | CSS keyframe, opacity 0→1 | Page load |
| Hero headline reveal | CSS translateY(110%)→0, staggered | Page load (300ms delay) |
| Scroll reveals | CSS `.reveal` + JS observer | Element enters viewport |
| Nav frosted glass | JS toggles `.scrolled` | scrollY > 40 |
| Progress bar | JS sets width % with green gradient | Scroll position |
| Stat counters | JS counts 0 → target, 1.5s, ease-out | Observer on each `.stat__number` |
| Typewriter (quote) | JS char-by-char with cursor blink | Quote section enters viewport |
| Quote headline reveal | CSS opacity transition | After typewriter completes |
| Service card FLIP | JS record → reorder → animate, 700ms | Situation selector click |
| Card highlight/dim | CSS border-color + opacity + bg | Situation selector click |
| Terminal scan | CSS pulsing opacity | Situation selector click |
| Closing copy update | JS fadeText (opacity out, swap, opacity in) | Situation selector click |
| CTA hover | CSS bg color + letter-spacing shift | :hover |
| Arrow hover | CSS translateX(6px) | :hover |
| Card hover | CSS border-color shift | :hover |
| Back to top | CSS opacity toggle | Scroll > 50vh |
| Cursor blink | CSS keyframe step-end | Continuous (during typewriter) |
| Ticker scroll | CSS keyframe, 28s linear | Continuous |

| NOT Animated |
|--------------|
| Page background (static #0E0E0E) |
| Section borders (static 1px rules) |
| Text (no fade-per-letter on body, no bouncing) |
| Icons (no float, no pulse) |
| Team photos (static) |
| Anything not listed above |
