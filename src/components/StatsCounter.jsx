import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function StatsCounter({
  target,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 1800
}) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = parseFloat(target);
    if (isNaN(end)) return;

    const startTime = performance.now();

    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // smooth easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = start + (end - start) * ease;
      setVal(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setVal(end);
      }
    };

    requestAnimationFrame(update);
  }, [inView, target, duration]);

  const display = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString();

  return (
    <b ref={ref}>
      {prefix}
      {display}
      {suffix}
    </b>
  );
}
