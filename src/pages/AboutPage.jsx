import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import StatsCounter from '../components/StatsCounter';
import { valuesData, testimonialsData } from '../data/testimonialsData';

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <main id="main">
      {/* Page Hero */}
      <section className="phero">
        <div className="grid"></div>
        <div
          className="blob"
          style={{
            left: '-150px',
            top: '20px',
            width: '460px',
            height: '460px',
            background: 'rgba(47,107,255,0.25)'
          }}
        ></div>
        <div
          className="blob"
          style={{
            right: '-150px',
            bottom: '-60px',
            width: '420px',
            height: '420px',
            background: 'rgba(139,92,246,0.25)'
          }}
        ></div>

        <div className="wrap">
          <ScrollReveal>
            <div className="lbl" style={{ justifyContent: 'center' }}>About Smartamigos</div>
            <h1>We are <span className="g">Smartamigos.</span></h1>
            <p className="sub">
              A multidisciplinary collective of designers, engineers, copywriters, data analysts and media buyers
              who care about one thing above all else: your bottom line.
            </p>
            <div className="cta">
              <Link to="/contact" className="btn pri mag">Work With Us</Link>
              <Link to="/services" className="btn sec mag">Explore Services</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Culture Visual Banner */}
      <section style={{ padding: '0 0 clamp(40px, 6vw, 70px)' }}>
        <div className="wrap">
          <ScrollReveal>
            <div
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                position: 'relative',
                maxHeight: '440px',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 24px 60px -12px rgba(0,0,0,0.7)'
              }}
            >
              <img
                src="/images/about/team-collaboration.jpg"
                alt="Smartamigos Team Strategy &amp; Collaboration"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(5,6,15,0.85) 100%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: 'clamp(20px, 4vw, 36px)'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--blue)', fontWeight: 700 }}>
                    Our Culture
                  </span>
                  <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', fontWeight: 700, margin: '6px 0 0' }}>
                    Speed, precision, and relentless experimentation.
                  </h3>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Five Core Principles / Accordion */}
      <section className="alt">
        <div className="wrap two">
          <ScrollReveal>
            <div className="lbl">Values</div>
            <h2>Built on <span className="g">five principles.</span></h2>
            <p style={{ marginTop: '24px', color: 'var(--mut)', maxWidth: '420px', lineHeight: 1.7 }}>
              These aren't empty wall slogans. They are the decision filters we use every day to hire, optimize,
              write code, and deliver ROI for ambitious founders.
            </p>
            <div style={{ marginTop: '32px' }}>
              <Link to="/contact" className="btn pri mag">
                Start a Conversation &rarr;
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="why">
              {valuesData.map((val, idx) => (
                <button
                  key={val.num}
                  type="button"
                  className={activeValue === idx ? 'a' : ''}
                  onClick={() => setActiveValue(idx)}
                >
                  <b>
                    <i>{val.num}</i>
                    {val.title}
                  </b>
                  <div
                    className="ans"
                    style={{
                      maxHeight: activeValue === idx ? '120px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height 0.4s ease'
                    }}
                  >
                    {val.desc}
                  </div>
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Agency Stats */}
      <section>
        <div className="wrap">
          <ScrollReveal style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px' }}>
            <div className="lbl" style={{ justifyContent: 'center' }}>Track Record</div>
            <h2>Numbers that tell <span className="g">the story.</span></h2>
          </ScrollReveal>

          <StaggerContainer className="stats" staggerDelay={0.08} style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <StaggerItem style={{ textAlign: 'center', padding: '36px 20px' }}>
              <StatsCounter target="120" suffix="+" />
              <span style={{ display: 'block', marginTop: '6px', color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem' }}>
                Brands Scaled
              </span>
            </StaggerItem>
            <StaggerItem style={{ textAlign: 'center', padding: '36px 20px' }}>
              <StatsCounter target="4.2" suffix="x" decimals={1} />
              <span style={{ display: 'block', marginTop: '6px', color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem' }}>
                Average ROAS
              </span>
            </StaggerItem>
            <StaggerItem style={{ textAlign: 'center', padding: '36px 20px' }}>
              <StatsCounter target="98" suffix="%" />
              <span style={{ display: 'block', marginTop: '6px', color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem' }}>
                Client Retention
              </span>
            </StaggerItem>
            <StaggerItem style={{ textAlign: 'center', padding: '36px 20px' }}>
              <StatsCounter target="18" suffix="+" />
              <span style={{ display: 'block', marginTop: '6px', color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem' }}>
                Countries Served
              </span>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Client Testimonials Slider */}
      <section
        id="testimonials"
        className="alt"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="wrap">
          <ScrollReveal style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px' }}>
            <div className="lbl" style={{ justifyContent: 'center' }}>Social Proof</div>
            <h2>Trusted by <span className="g">visionary founders.</span></h2>
          </ScrollReveal>

          <ScrollReveal>
            <div
              className="panel glass gb"
              style={{
                maxWidth: '820px',
                margin: '0 auto',
                padding: 'clamp(28px, 5vw, 48px)',
                position: 'relative',
                borderRadius: '24px'
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35 }}
                  style={{ textAlign: 'center' }}
                >
                  <p
                    style={{
                      font: 'italic 500 clamp(1.1rem, 2vw, 1.4rem)/1.6 var(--font-heading)',
                      color: 'rgba(255,255,255,0.95)',
                      marginBottom: '28px'
                    }}
                  >
                    &ldquo;{testimonialsData[activeTestimonial].quote}&rdquo;
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px' }}>
                    <img
                      src={testimonialsData[activeTestimonial].image}
                      alt={testimonialsData[activeTestimonial].name}
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '2px solid var(--blue)'
                      }}
                    />
                    <div style={{ textAlign: 'left' }}>
                      <b style={{ display: 'block', color: '#fff', fontSize: '1rem' }}>
                        {testimonialsData[activeTestimonial].name}
                      </b>
                      <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)' }}>
                        {testimonialsData[activeTestimonial].role}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Dots */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '8px',
                  marginTop: '28px'
                }}
              >
                {testimonialsData.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveTestimonial(idx)}
                    style={{
                      width: activeTestimonial === idx ? '28px' : '10px',
                      height: '10px',
                      borderRadius: '99px',
                      background: activeTestimonial === idx ? 'var(--blue)' : 'rgba(255,255,255,0.2)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="fin">
        <div className="grid"></div>
        <ScrollReveal className="wrap">
          <h2>Ready to work with<br />a dedicated growth team?</h2>
          <p>Book a free 30-minute consultation. No pitch decks, just actionable clarity.</p>
          <div className="cta">
            <Link to="/contact" className="btn pri mag">Start a Project</Link>
            <a href="https://wa.me/0000000000" target="_blank" rel="noopener noreferrer" className="btn sec mag">
              Chat on WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
