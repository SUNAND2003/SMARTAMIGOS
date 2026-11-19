import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable cursor glow for non-touch devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        width: '380px',
        height: '380px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(47, 107, 255, 0.15) 0%, rgba(139, 92, 246, 0.08) 40%, transparent 70%)',
        filter: 'blur(30px)',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
        transition: 'transform 0.08s ease-out, opacity 0.3s ease',
        willChange: 'transform, left, top'
      }}
    />
  );
}
