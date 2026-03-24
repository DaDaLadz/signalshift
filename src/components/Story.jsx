import StatNumber from './StatNumber';

export default function Story() {
  return (
    <section id="story" className="section section--snap">
      <div className="container">
        <div className="grid-split">
          <div>
            <span className="section-label">— Our Story</span>
            <h2 className="section-title" style={{ marginBottom: 'var(--space-2xl)' }}>
              From the<br />Newsroom<br />to the<br /><span className="stroke-text">Front Lines.</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
              <div style={{ borderBottom: '1px solid var(--rule)', paddingBottom: 'var(--space-lg)' }}>
                <StatNumber target={30} fontSize="42px" />
                <div className="stat__label">Years Combined Experience</div>
              </div>
              <div style={{ borderBottom: '1px solid var(--rule)', paddingBottom: 'var(--space-lg)' }}>
                <StatNumber target={100} fontSize="42px" />
                <div className="stat__label">Projects Delivered</div>
              </div>
              <div>
                <StatNumber target={8} fontSize="42px" />
                <div className="stat__label">Years in Crypto</div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ marginBottom: 'var(--space-lg)' }}>
              Signal Shift was founded by a team that led newsrooms at Cointelegraph and Forbes Digital Assets — covering the projects that were changing the industry, and watching countless others fail to communicate what made them different.
            </p>
            <p style={{ marginBottom: 'var(--space-lg)' }}>
              We saw the gap firsthand. Great technology buried under bad messaging. Genuine innovation lost in a sea of hype. The projects that deserved attention weren't getting it — because they were building, not marketing.
            </p>
            <p style={{ marginBottom: 'var(--space-2xl)' }}>
              So we built an agency around a single premise: every breakthrough starts with the right story. We bring the editorial rigor of a newsroom to the execution speed of a growth team.
            </p>
            <p className="section-closer">
              We're not here to add noise.<br />We're here to create signal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
