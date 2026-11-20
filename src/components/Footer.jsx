import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return undefined;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    let inView = false;
    let rafId = 0;

    const update = () => {
      rafId = 0;
      if (!inView || !track || !wrapper) return;
      const rect = wrapper.getBoundingClientRect();
      const h = window.innerHeight || 800;
      const p = Math.min(1, Math.max(0, (h - rect.top) / (h + rect.height)));
      const maxShift = Math.max(0, track.scrollWidth - window.innerWidth);
      track.style.transform = `translate3d(${-p * maxShift}px, 0, 0)`;
    };

    const requestUpdate = () => {
      if (!inView) return;
      if (!rafId) {
        rafId = requestAnimationFrame(update);
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView) {
          update();
        }
      },
      { threshold: 0 }
    );
    io.observe(wrapper);

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });

    // Also bind directly to global Lenis instance for seamless smooth scroll response
    let lenisBound = false;
    const bindLenis = () => {
      if (window.__lenis && !lenisBound) {
        window.__lenis.on('scroll', requestUpdate);
        lenisBound = true;
      }
    };
    bindLenis();
    const lenisTimer = setTimeout(bindLenis, 300);

    return () => {
      clearTimeout(lenisTimer);
      io.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (window.__lenis && lenisBound && typeof window.__lenis.off === 'function') {
        window.__lenis.off('scroll', requestUpdate);
      }
    };
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <>
      <div className="big" aria-hidden="true" ref={wrapperRef}>
        <div id="big" ref={trackRef}>
          <span>Let's build</span>
          <span>something</span>
          <span>great</span>
          <span>Let's build</span>
          <span>something</span>
          <span>great</span>
          <span>Let's build</span>
          <span>something</span>
          <span>great</span>
          <span>Let's build</span>
          <span>something</span>
          <span>great</span>
        </div>
      </div>

      <footer>
        <div className="wrap">
          <div className="fg">
            <div>
              <div className="logo">
                <img src="/logo.png" alt="Smartamigos" width="49" height="56" />
                <span>SMARTAMIGOS</span>
              </div>
              <p style={{ marginTop: '14px', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                Full-funnel digital marketing, AI-driven SEO and web engineering for ambitious modern brands.
              </p>
            </div>

            <nav aria-label="Footer Quick Links">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/#portfolio">Portfolio</Link></li>
                <li><Link to="/blog">Blog &amp; Playbooks</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>

            <div>
              <h4>Core Services</h4>
              <ul>
                <li><Link to="/services">SEO Optimization</Link></li>
                <li><Link to="/services">Web &amp; App Development</Link></li>
                <li><Link to="/services">Social Media Growth</Link></li>
                <li><Link to="/services">Email &amp; Automation</Link></li>
                <li><Link to="/services">Google &amp; Meta Ads</Link></li>
                <li><Link to="/services">Creative &amp; Brand Design</Link></li>
              </ul>
            </div>

            <div>
              <h4>Growth Newsletter</h4>
              <form className="nl" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  name="newsletter-email"
                  aria-label="Email Address"
                  placeholder="Your work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" aria-label="Subscribe">
                  &rarr;
                </button>
              </form>
              {subscribed && (
                <span className="formmsg" style={{ display: 'block', marginTop: '8px', color: '#38bdf8', fontSize: '0.85rem' }}>
                  ✓ Subscribed! Welcome to the growth circle.
                </span>
              )}
              <p style={{ marginTop: '20px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> &middot;{' '}
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> &middot;{' '}
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a> &middot;{' '}
                <a href="https://wa.me/0000000000" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </p>
            </div>
          </div>

          <p className="copy">
            &copy; {new Date().getFullYear()} Smartamigos Digital Agency. All Rights Reserved. Built with React &amp; Modern Velocity.
          </p>
        </div>
      </footer>
    </>
  );
}
