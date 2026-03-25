import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const pageWrap = document.getElementById('page-wrap');
    const scrollSource = pageWrap && getComputedStyle(pageWrap).overflowY !== 'visible' ? pageWrap : window;

    function update() {
      const y = scrollSource === window ? window.scrollY : pageWrap.scrollTop;
      const threshold = (scrollSource === window ? window.innerHeight : pageWrap.clientHeight) * 0.5;
      setVisible(y > threshold);
    }

    const target = scrollSource === window ? window : pageWrap;
    target.addEventListener('scroll', update, { passive: true });
    return () => target.removeEventListener('scroll', update);
  }, []);

  function scrollTop() {
    const pageWrap = document.getElementById('page-wrap');
    const scrollSource = pageWrap && getComputedStyle(pageWrap).overflowY !== 'visible' ? pageWrap : window;
    if (scrollSource === window) window.scrollTo({ top: 0, behavior: 'smooth' });
    else pageWrap.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button className={`back-to-top${visible ? ' visible' : ''}`} onClick={scrollTop} aria-label="Back to top">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
