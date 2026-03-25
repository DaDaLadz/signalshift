import { useState, useEffect } from 'react';

const ARROW = (
  <svg className="btn-arrow" width="20" height="8" viewBox="0 0 28 10" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M0 5h26m-4-4l4 4-4 4" />
  </svg>
);

const NAV_LINKS = [
  ['#services', 'Services'],
  ['#story', 'Story'],
  ['#team', 'Team'],
  ['#contact', 'Contact'],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const pageWrap = document.getElementById('page-wrap');
    const scrollSource = pageWrap && getComputedStyle(pageWrap).overflowY !== 'visible' ? pageWrap : window;

    function onScroll() {
      const y = scrollSource === window ? window.scrollY : pageWrap.scrollTop;
      setScrolled(y > 40);
    }

    const target = scrollSource === window ? window : pageWrap;
    target.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => target.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header>
      <nav id="main-nav" className={scrolled ? 'scrolled' : ''}>
        <div className="container nav-inner">
          <a href="#hero" className="nav-logo">Signal Shift</a>

          <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {NAV_LINKS.map(([href, label]) => (
              <a key={label} href={href} className="nav-link">{label}</a>
            ))}
          </div>

          <div className="desktop-only">
            <a href="#contact" className="nav-cta">
              <span>Start</span>
              {ARROW}
            </a>
          </div>

          <button
            className="mobile-only"
            aria-label="Open menu"
            onClick={() => setMobileOpen(o => !o)}
            style={{ background: 'none', border: 'none', color: 'var(--mid)', cursor: 'pointer', padding: 8 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mobile-nav-overlay">
          {NAV_LINKS.map(([href, label]) => (
            <a key={label} href={href} className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{ marginTop: 24, textAlign: 'center', textDecoration: 'none' }} onClick={() => setMobileOpen(false)}>
            <span>Start</span>
            {ARROW}
          </a>
        </div>
      )}
    </header>
  );
}
