const SERVICES = [
  { id: 'narrative', num: '01', name: 'Narrative Strategy', desc: 'Positioning, messaging frameworks, and media angles that define how the market sees you.', stages: ['prelaunch', 'traction', 'rebrand'] },
  { id: 'media', num: '02', name: 'Media Relations', desc: 'Earned coverage in Tier 1 crypto and mainstream outlets. Journalist relationships, not blast emails.', stages: ['prelaunch', 'traction', 'growing'] },
  { id: 'content', num: '03', name: 'Content Production', desc: 'Longform, threads, newsletters, video scripts. Built around your voice and narrative arc.', stages: ['traction', 'growing', 'rebrand'] },
  { id: 'community', num: '04', name: 'Community Growth', desc: 'Discord and Telegram strategy, ambassador programs, event activations that build real loyalty.', stages: ['prelaunch', 'traction', 'growing'] },
  { id: 'social', num: '05', name: 'Social Strategy', desc: 'Platform-native content calendars for X, Farcaster, LinkedIn. Engagement that compounds.', stages: ['traction', 'growing', 'rebrand'] },
  { id: 'brand', num: '06', name: 'Brand Identity', desc: 'Visual systems, naming, tone of voice. The foundation everything else is built on.', stages: ['prelaunch', 'rebrand'], badge: 'Recommended for rebrand' },
  { id: 'kol', num: '07', name: 'KOL Partnerships', desc: 'Influencer campaigns with verified reach. No bots, no fake engagement. Tracked attribution.', stages: ['prelaunch', 'growing'] },
  { id: 'advisory', num: '08', name: 'Advisory & Consulting', desc: 'Strategic guidance from operators who\'ve led marketing at top-tier crypto media and projects.', stages: ['growing', 'rebrand'] },
];

export default function Services({ activeStage }) {
  return (
    <section id="services" className="section section--snap">
      <div className="container">
        <span className="section-label">— What We Build</span>
        <h2 className="section-title" style={{ marginBottom: 'var(--space-2xl)' }}>Services</h2>

        <div className="grid-services" id="services-grid">
          {SERVICES.map((svc) => {
            let cls = 'svc-card';
            if (activeStage) {
              cls += svc.stages.includes(activeStage) ? ' highlighted' : ' dimmed';
            }
            return (
              <div key={svc.id} className={cls}>
                <div className="svc-card__number">{svc.num}</div>
                <h3 className="svc-card__name">{svc.name}</h3>
                <p className="svc-card__desc">{svc.desc}</p>
                {svc.badge && <span className="svc-card__badge">{svc.badge}</span>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
