import { useEffect, useState } from 'react';

export function useCounter(target, started, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [target, started, duration]);

  return value;
}
