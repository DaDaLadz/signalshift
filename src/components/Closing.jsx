const CLOSING_DATA = {
  default: {
    headline: ['Ready to', 'Create'],
    stroke: 'Your Signal?',
    desc: 'The right story at the right time changes everything. Let\u2019s build yours.',
    cta: 'START THE SIGNAL',
  },
  prelaunch: {
    headline: ['Ready to', 'Launch'],
    stroke: 'Your Signal?',
    desc: 'You\u2019re building something real. Let\u2019s make sure the market knows it before day one.',
    cta: 'LAUNCH THE SIGNAL',
  },
  traction: {
    headline: ['Ready to', 'Amplify'],
    stroke: 'Your Signal?',
    desc: 'Traction is a starting point, not a ceiling. Let\u2019s turn attention into momentum.',
    cta: 'AMPLIFY THE SIGNAL',
  },
  growing: {
    headline: ['Ready to', 'Scale'],
    stroke: 'Your Signal?',
    desc: 'Growth compounds when the narrative is right. Let\u2019s make sure yours stays ahead of the market.',
    cta: 'SCALE THE SIGNAL',
  },
  rebrand: {
    headline: ['Ready to', 'Shift'],
    stroke: 'Your Signal?',
    desc: 'The market\u2019s perception of you is about to change. Let\u2019s control the narrative.',
    cta: 'SHIFT THE SIGNAL',
  },
};

const ARROW = (
  <svg className="btn-arrow" width="28" height="10" viewBox="0 0 28 10" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M0 5h26m-4-4l4 4-4 4" />
  </svg>
);

export default function Closing({ activeStage }) {
  const data = CLOSING_DATA[activeStage] || CLOSING_DATA.default;

  return (
    <section id="closing" className="section section--snap" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <h2 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 72px)', marginBottom: 'var(--space-xl)' }}>
          {data.headline[0]}<br />{data.headline[1]}<br /><span className="stroke-text">{data.stroke}</span>
        </h2>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 19, fontWeight: 'var(--weight-body)',
          color: 'var(--mid)', marginBottom: 'var(--space-2xl)', maxWidth: 500,
          marginLeft: 'auto', marginRight: 'auto'
        }}>
          {data.desc}
        </p>
        <a href="#contact" className="btn-primary" style={{ textDecoration: 'none' }}>
          <span>{data.cta}</span>
          {ARROW}
        </a>
      </div>
    </section>
  );
}
