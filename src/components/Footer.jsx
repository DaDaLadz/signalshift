export default function Footer() {
  return (
    <footer id="footer" style={{ borderTop: '1px solid var(--rule)', padding: 'var(--space-3xl) 0 var(--space-xl)' }}>
      <div className="container">
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 'var(--space-xl)', marginBottom: 'var(--space-2xl)' }}>
          <div>
            <a href="#hero" className="nav-logo" style={{ display: 'inline-block', marginBottom: 'var(--space-md)' }}>Signal Shift</a>
            <p style={{ fontSize: 14, color: 'var(--dim)', lineHeight: 1.8, maxWidth: 300, marginBottom: 'var(--space-md)' }}>
              Crypto-native marketing for projects that deserve to win.
            </p>
            <a href="mailto:hello@signalshift.io" style={{ fontSize: 14, color: 'var(--mid)' }}>hello@signalshift.io</a>
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--dim)', fontWeight: 400, marginBottom: 'var(--space-md)' }}>Services</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li><a href="#services" style={{ fontSize: 14, color: 'var(--mid)' }}>Narrative Strategy</a></li>
              <li><a href="#services" style={{ fontSize: 14, color: 'var(--mid)' }}>Media Relations</a></li>
              <li><a href="#services" style={{ fontSize: 14, color: 'var(--mid)' }}>Content Production</a></li>
              <li><a href="#services" style={{ fontSize: 14, color: 'var(--mid)' }}>Community Growth</a></li>
            </ul>
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--dim)', fontWeight: 400, marginBottom: 'var(--space-md)' }}>Company</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li><a href="#story" style={{ fontSize: 14, color: 'var(--mid)' }}>Our Story</a></li>
              <li><a href="#team" style={{ fontSize: 14, color: 'var(--mid)' }}>Team</a></li>
              <li><a href="#contact" style={{ fontSize: 14, color: 'var(--mid)' }}>Contact</a></li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--rule)', paddingTop: 'var(--space-lg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
          <p style={{ fontSize: 13, color: 'var(--dim)' }}>&copy; 2026 Signal Shift. All rights reserved.</p>
          <div style={{ display: 'flex', gap: 'var(--space-lg)' }}>
            <a href="#" style={{ fontSize: 13, color: 'var(--dim)' }}>Privacy</a>
            <a href="#" style={{ fontSize: 13, color: 'var(--dim)' }}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
