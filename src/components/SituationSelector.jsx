import { useState } from 'react';

const STAGES = [
  { id: 'prelaunch', label: 'Pre-Launch', desc: 'Building. No token or mainnet yet. Need narrative before market entry.' },
  { id: 'traction', label: 'Limited Traction', desc: 'Live but not growing. Community exists but hasn\'t caught fire.' },
  { id: 'growing', label: 'Growing', desc: 'Momentum is real. Need to scale messaging across channels.' },
  { id: 'rebrand', label: 'Rebranding', desc: 'Established but evolving. Market perception needs to shift.' },
];

const ARROW = (
  <svg className="btn-arrow" width="20" height="8" viewBox="0 0 28 10" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M0 5h26m-4-4l4 4-4 4" />
  </svg>
);

export default function SituationSelector({ onStageChange }) {
  const [active, setActive] = useState(null);
  const [scanning, setScanning] = useState(false);
  const [showLink, setShowLink] = useState(false);

  function handleClick(stageId) {
    setActive(stageId);
    setScanning(true);
    setShowLink(false);
    onStageChange(stageId);

    setTimeout(() => {
      setScanning(false);
      setShowLink(true);
    }, 1200);
  }

  return (
    <section id="situation" className="section section--snap">
      <div className="container">
        <span className="section-label">— Where Are You Right Now?</span>
        <h2 className="section-title" style={{ marginBottom: 'var(--space-2xl)' }}>Select Your Stage</h2>

        <div className="grid-situation" id="situation-grid">
          {STAGES.map((s) => (
            <button
              key={s.id}
              className={`stage-btn${active === s.id ? ' active' : ''}`}
              onClick={() => handleClick(s.id)}
            >
              <div className="stage-btn__label">{s.label}</div>
              <p className="stage-btn__desc">{s.desc}</p>
            </button>
          ))}
        </div>

        <div id="situation-terminal" style={{ marginTop: 'var(--space-2xl)', minHeight: 48 }}>
          {scanning && (
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--dim)',
              animation: 'pulse-opacity 1.2s ease infinite'
            }}>
              scanning for recommendations...
            </p>
          )}
          {showLink && (
            <a href="#services" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-flex' }}>
              <span>VIEW RECOMMENDED SERVICES</span>
              {ARROW}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
