import { useRef } from 'react';
import { motion } from 'framer-motion';

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.7,
  y = 28,
  scale = 0.98,
  className = '',
  style = {}
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  className = '',
  style = {}
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
  style = {}
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 26, scale: 0.98 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1]
          }
        }
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedWords({ text, className = '', gradient = false }) {
  const words = text.split(' ');

  return (
    <span className={className} style={{ display: 'inline-block' }}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            marginRight: '0.28em',
            verticalAlign: 'top'
          }}
        >
          <motion.span
            style={{
              display: 'inline-block',
              ...(gradient ? {} : {})
            }}
            initial={{ y: '110%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true }}
            transition={{
              duration: 0.75,
              delay: i * 0.04,
              ease: [0.16, 1, 0.3, 1]
            }}
            className={gradient ? 'g' : ''}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function TiltCard({ children, className = '', style = {} }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotX = (0.5 - y / rect.height) * 10;
    const rotY = (x / rect.width - 0.5) * 10;

    card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease',
        ...style
      }}
    >
      {children}
    </div>
  );
}
