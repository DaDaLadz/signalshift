import { useState } from 'react';

const SERVICE_OPTIONS = [
  'Narrative Strategy', 'Media Relations', 'Content', 'Community',
  'Social', 'Brand Identity', 'KOL', 'Advisory',
];

export default function ContactForm() {
  const [selected, setSelected] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  function toggleService(svc) {
    setSelected(prev =>
      prev.includes(svc) ? prev.filter(s => s !== svc) : [...prev, svc]
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div style={{ padding: 'var(--space-2xl) 0' }}>
        <p style={{ color: 'var(--green)', fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 24, textTransform: 'uppercase', marginBottom: 'var(--space-md)' }}>
          Message Sent.
        </p>
        <p style={{ color: 'var(--mid)' }}>We typically respond within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <label className="form-label">Name <span className="form-required">*</span></label>
        <input className="form-input" type="text" placeholder="Your name" required />
      </div>

      <div className="form-row">
        <label className="form-label">Email <span className="form-required">*</span></label>
        <input className="form-input" type="email" placeholder="you@project.xyz" required />
      </div>

      <div className="form-row">
        <label className="form-label">Project URL</label>
        <input className="form-input" type="url" placeholder="https://" />
      </div>

      <div className="form-row">
        <label className="form-label">Services</label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)', marginTop: 'var(--space-sm)' }}>
          {SERVICE_OPTIONS.map(svc => (
            <button
              key={svc}
              type="button"
              className={`chip-btn${selected.includes(svc) ? ' selected' : ''}`}
              onClick={() => toggleService(svc)}
            >
              {svc}
            </button>
          ))}
        </div>
      </div>

      <div className="form-row">
        <label className="form-label">Message</label>
        <textarea
          className="form-input"
          rows="4"
          placeholder="Tell us about your project..."
          style={{ resize: 'vertical' }}
        />
      </div>

      <div style={{ marginTop: 'var(--space-lg)' }}>
        <button type="submit" className="btn-submit">Send Message</button>
      </div>
    </form>
  );
}
