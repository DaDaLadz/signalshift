import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function update() {
      const pageWrap = document.getElementById('page-wrap');
      const scrollSource = pageWrap && getComputedStyle(pageWrap).overflowY !== 'visible' ? pageWrap : window;
      const el = scrollSource === window ? document.documentElement : pageWrap;
      const scrolled = scrollSource === window ? window.scrollY : pageWrap.scrollTop;
      const total = el.scrollHeight - (scrollSource === window ? window.innerHeight : pageWrap.clientHeight);
      setWidth(total > 0 ? (scrolled / total) * 100 : 0);
    }

    const pageWrap = document.getElementById('page-wrap');
    const scrollSource = pageWrap && getComputedStyle(pageWrap).overflowY !== 'visible' ? pageWrap : window;
    const target = scrollSource === window ? window : pageWrap;

    target.addEventListener('scroll', update, { passive: true });
    return () => target.removeEventListener('scroll', update);
  }, []);

  return <div className="scroll-progress" aria-hidden="true" style={{ width: `${width}%` }} />;
}
