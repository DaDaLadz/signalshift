import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="section section--snap">
      <div className="container">
        <div className="grid-split">
          <div>
            <span className="section-label">— Let's Talk</span>
            <h2 className="section-title" style={{ marginBottom: 'var(--space-lg)' }}>
              Tell Us<br />What You're<br /><span className="stroke-text">Building.</span>
            </h2>
            <p style={{ color: 'var(--mid)', marginBottom: 'var(--space-xl)', maxWidth: 380 }}>
              We typically respond within 24 hours. No commitment, no pressure — just a conversation about what's possible.
            </p>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
