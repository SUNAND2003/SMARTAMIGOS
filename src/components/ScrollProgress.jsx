import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{
        scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        transformOrigin: '0%',
        background: 'linear-gradient(90deg, #2f6bff, #8b5cf6, #38bdf8)',
        zIndex: 999,
        pointerEvents: 'none',
        boxShadow: '0 0 16px rgba(47, 107, 255, 0.8), 0 0 30px rgba(139, 92, 246, 0.4)'
      }}
    />
  );
}
