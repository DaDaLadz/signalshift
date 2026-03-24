const MEMBERS = [
  { name: 'Alex Moreno', title: 'Founder & Narrative Lead — Ex-Cointelegraph' },
  { name: 'Sarah Chen', title: 'Head of Media — Ex-Forbes Digital Assets' },
  { name: 'Marcus Webb', title: 'Growth Director — 8 Years in DeFi Marketing' },
];

export default function Team() {
  return (
    <section id="team" className="section section--snap">
      <div className="container">
        <span className="section-label">— The Team</span>
        <h2 className="section-title" style={{ marginBottom: 'var(--space-2xl)' }}>
          Built by Operators,<br />Not Observers.
        </h2>

        <div className="grid-team">
          {MEMBERS.map((m) => (
            <div key={m.name} className="team-card">
              <div className="team-card__photo" aria-label="Team member photo placeholder" />
              <h4 className="team-card__name">{m.name}</h4>
              <p className="team-card__title">{m.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
