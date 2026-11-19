import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';

export default function SmoothScroll({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    // Make lenis globally accessible for anchor clicks
    window.__lenis = lenis;

    let rfId;
    function raf(time) {
      lenis.raf(time);
      rfId = requestAnimationFrame(raf);
    }
    rfId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rfId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  // Reset scroll to top smoothly when route changes
  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return children;
}
