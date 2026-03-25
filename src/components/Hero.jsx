import { useEffect } from 'react';
import StatNumber from './StatNumber';

const ARROW = (
  <svg className="btn-arrow" width="28" height="10" viewBox="0 0 28 10" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M0 5h26m-4-4l4 4-4 4" />
  </svg>
);

const LINES = [
  { text: 'Every', delay: 0 },
  { text: 'Breakthrough', delay: 1 },
  { text: 'Starts With', delay: 2 },
  { text: 'The Right Story.', delay: 3, stroke: true },
];

export default function Hero() {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll('.hero-headline__text').forEach((line) => {
        const d = parseInt(line.getAttribute('data-delay') || '0', 10);
        setTimeout(() => line.classList.add('revealed'), d * 100);
      });
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="section section--snap" style={{ paddingTop: 80 }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <p className="eyebrow" style={{ marginBottom: 'var(--space-xl)' }}>
          — Crypto Native. Market Proven.
        </p>

        <h1 className="hero-headline" id="hero-headline">
          {LINES.map((l) => (
            <span key={l.delay} className="hero-headline__line">
              <span
                className={`hero-headline__text${l.stroke ? ' stroke-text' : ''}`}
                data-delay={l.delay}
              >
                {l.text}
              </span>
            </span>
          ))}
        </h1>

        <div className="stats-row" style={{ marginTop: 'var(--space-3xl)', marginBottom: 'var(--space-xl)' }}>
          <div className="stat">
            <StatNumber target={30} />
            <div className="stat__label">Years Combined</div>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <StatNumber target={100} />
            <div className="stat__label">Projects Launched</div>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <StatNumber target={8} />
            <div className="stat__label">Years in Space</div>
          </div>
        </div>

        <a href="#contact" className="btn-primary" style={{ textDecoration: 'none' }}>
          <span>START THE SIGNAL</span>
          {ARROW}
        </a>
      </div>
    </section>
  );
}
