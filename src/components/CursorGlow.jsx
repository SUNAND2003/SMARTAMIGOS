import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    // Only enable cursor glow for mouse pointers (not touch)
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    if (isTouch) return;

    const glow = glowRef.current;
    if (!glow) return;

    let rafId = null;
    let targetX = -300;
    let targetY = -300;
    let currentX = -300;
    let currentY = -300;
    let isVisible = false;

    // 120Hz smooth exponential damping loop (zero React state updates)
    const render = () => {
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;
      glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        glow.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      glow.style.opacity = '0';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '380px',
        height: '380px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(47, 107, 255, 0.14) 0%, rgba(139, 92, 246, 0.07) 40%, transparent 70%)',
        filter: 'blur(30px)',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0,
        transition: 'opacity 0.3s ease',
        willChange: 'transform',
        transform: 'translate3d(-300px, -300px, 0) translate(-50%, -50%)'
      }}
      aria-hidden="true"
    />
  );
}
