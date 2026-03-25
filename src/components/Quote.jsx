import { useEffect, useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';

const TYPEWRITER_TEXT = "We didn\u2019t start in marketing. We started in newsrooms \u2014 covering the projects that were building something real, and watching the ones that weren\u2019t get all the attention. Signal Shift exists to fix that.";

export default function Quote() {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [typed, setTyped] = useState('');
  const [done, setDone] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    let i = 0;
    function typeChar() {
      if (i < TYPEWRITER_TEXT.length) {
        setTyped(TYPEWRITER_TEXT.slice(0, i + 1));
        i++;
        const delay = TYPEWRITER_TEXT[i - 1] === '.' || TYPEWRITER_TEXT[i - 1] === '\u2014' ? 80 : 25;
        setTimeout(typeChar, delay);
      } else {
        setTimeout(() => setDone(true), 400);
      }
    }
    typeChar();
  }, [inView]);

  return (
    <section id="quote" className="section section--snap" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <p
          ref={ref}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(18px, 2.2vw, 22px)',
            fontWeight: 'var(--weight-body)',
            lineHeight: 1.9,
            color: 'var(--mid)',
            minHeight: '3em',
          }}
        >
          {typed}
          {!done && <span className="typewriter-cursor" />}
        </p>
        <div
          id="quote-headline"
          className={done ? 'visible' : ''}
          style={{ marginTop: 'var(--space-2xl)', opacity: done ? 1 : 0 }}
        >
          <h2 className="section-title" style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 0.92 }}>
            For the<br />Projects<br />That Deserve<br /><span className="stroke-text">to Win.</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
