import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    let lastScrolled = false;
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== lastScrolled) {
        lastScrolled = isScrolled;
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
    document.body.classList.remove('no-scroll');
  }, [pathname]);

  const toggleMobile = () => {
    const next = !mobileOpen;
    setMobileOpen(next);
    if (next) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  const navItems = [
    { name: 'Home', path: '/', num: '01' },
    { name: 'About', path: '/about', num: '02' },
    { name: 'Services', path: '/services', num: '03' },
    { name: 'Blog', path: '/blog', num: '04' },
    { name: 'Contact', path: '/contact', num: '05' }
  ];

  return (
    <>
      <header id="hd" className={scrolled ? 's' : ''}>
        <div className="wrap">
          <nav aria-label="Main Navigation">
            <Link to="/" className="logo" aria-label="Smartamigos Home">
              <img src="/logo.png" alt="Smartamigos logo mark" width="49" height="56" />
              <span>SMARTAMIGOS</span>
            </Link>

            <ul className="links">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => (isActive ? 'on' : '')}
                    end={item.path === '/'}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <Link to="/contact" className="talk">
              Let's Talk
            </Link>

            <button
              type="button"
              className={`burger ${mobileOpen ? 'open' : ''}`}
              id="bg"
              aria-label="Menu"
              aria-expanded={mobileOpen}
              onClick={toggleMobile}
            >
              <i style={{ transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></i>
              <i style={{ opacity: mobileOpen ? 0 : 1 }}></i>
              <i style={{ transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></i>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`mob ${mobileOpen ? 'o' : ''}`} id="mob">
        <nav className="mob-nav" aria-label="Mobile Navigation">
          <ul className="mob-links">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) => (isActive ? 'on' : '')}
                  end={item.path === '/'}
                >
                  <span className="mob-num">{item.num}</span>
                  <span className="mob-txt">{item.name}</span>
                  <span className="mob-arr">&rarr;</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mob-footer">
          <Link
            to="/contact"
            className="mob-talk"
            onClick={() => setMobileOpen(false)}
          >
            Let's Talk &rarr;
          </Link>
          <div className="mob-meta">
            <a href="https://wa.me/0000000000" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
            <span>&middot;</span>
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              Send a Message
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
