import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleCanvas from '../components/ParticleCanvas';
import Marquee from '../components/Marquee';
import StatsCounter from '../components/StatsCounter';
import { ScrollReveal, StaggerContainer, StaggerItem, TiltCard } from '../components/ScrollReveal';
import { servicesData } from '../data/servicesData';
import { portfolioData, portfolioCategories } from '../data/portfolioData';
import { blogData } from '../data/blogData';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPortfolio = selectedCategory === 'all'
    ? portfolioData
    : portfolioData.filter((item) => item.category === selectedCategory);

  return (
    <main id="main">
      {/* ===== HERO SECTION ===== */}
      <section id="home">
        <ParticleCanvas />
        <div className="grid"></div>

        {/* Ambient Blobs */}
        <div
          className="blob"
          style={{
            left: '-160px',
            top: '40px',
            width: '540px',
            height: '540px',
            background: 'rgba(47,107,255,0.25)'
          }}
        ></div>
        <div
          className="blob"
          style={{
            right: '-160px',
            bottom: '0',
            width: '480px',
            height: '480px',
            background: 'rgba(139,92,246,0.25)'
          }}
        ></div>

        {/* Floating Metric Badges */}
        <div className="fc glass gb" style={{ top: '24%', left: '3%' }}>
          <small>SEO Growth</small>
          <b>+142%</b>
        </div>
        <div className="fc glass gb" style={{ top: '20%', right: '3%', animationDelay: '-1.5s' }}>
          <small>Google Ads ROAS</small>
          <b>4.8x</b>
        </div>
        <div className="fc glass gb" style={{ bottom: '14%', left: '7%', animationDelay: '-3s' }}>
          <small>Social Reach</small>
          <b>+280%</b>
        </div>
        <div className="fc glass gb" style={{ bottom: '18%', right: '6%', animationDelay: '-4.5s' }}>
          <small>Website Conversion</small>
          <b>7.4%</b>
        </div>

        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <h1>
            <span className="l">
              <span style={{ animationDelay: '0.1s' }}>We build</span>
            </span>
            <span className="l">
              <span className="g" style={{ animationDelay: '0.22s, 0s' }}>Digital</span>
            </span>
            <span className="l">
              <span style={{ animationDelay: '0.34s' }}>experiences that</span>
            </span>
            <span className="l">
              <span className="g" style={{ animationDelay: '0.46s, 0s' }}>Grow businesses.</span>
            </span>
          </h1>

          <p className="sub">
            From high-conversion websites and SEO to social media, Google Ads and email marketing — we architect
            digital engines that turn attention into compounding revenue.
          </p>

          <div className="cta">
            <Link to="/contact" className="btn pri mag">
              Start Your Project
            </Link>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn sec mag"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* ===== INFINITE MARQUEE ===== */}
      <Marquee />

      {/* ===== INTRO SECTION ===== */}
      <section id="intro">
        <div className="wrap two">
          <ScrollReveal>
            <div className="lbl">About Smartamigos</div>
            <h2>One team. <span className="g">One goal.</span></h2>
            <p style={{ marginTop: '24px', color: 'var(--mut)', maxWidth: '460px', lineHeight: 1.7 }}>
              Strategy, creativity, technology, data and performance marketing — fused together as a single
              growth engine. We don't do vanity metrics; we engineer business momentum.
            </p>
            <Link to="/about" className="btn sec mag" style={{ marginTop: '30px' }}>
              More About Us &rarr;
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="lbl">Our Expertise</div>
            <h2>Everything growth <span className="g">needs.</span></h2>
            <div className="svc">
              <Link to="/services">SEO</Link>
              <Link to="/services">Web Development</Link>
              <Link to="/services">Social Media</Link>
              <Link to="/services">Email Marketing</Link>
              <Link to="/services">Google Ads</Link>
              <Link to="/services">Creative Design</Link>
            </div>
            <Link to="/services" className="btn pri mag" style={{ marginTop: '30px' }}>
              Explore All Services &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section id="services">
        <div className="wrap">
          <ScrollReveal>
            <div className="lbl">What we do</div>
            <h2>Six ways to <span className="g">grow.</span></h2>
          </ScrollReveal>

          <StaggerContainer className="cards" staggerDelay={0.09}>
            {servicesData.map((service) => (
              <StaggerItem key={service.id}>
                <TiltCard className="card glass gb">
                  <div className="n">
                    <div className="ic">{service.code}</div>
                    <span style={{ opacity: 0.55 }}>{service.num}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.tagline}</p>
                  <ul>
                    {service.features.map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>
                  <Link to="/services">Explore Service &rarr;</Link>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== PORTFOLIO SECTION ===== */}
      <section id="portfolio" className="alt">
        <div className="wrap">
          <ScrollReveal>
            <div className="lbl">Portfolio</div>
            <h2>Selected <span className="g">work.</span></h2>
          </ScrollReveal>

          {/* Category Filter Pills */}
          <div className="filters" role="group" aria-label="Filter portfolio items">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={selectedCategory === cat ? 'a' : ''}
                aria-pressed={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Portfolio Grid with AnimatePresence */}
          <motion.div layout className="pf all" id="pf">
            <AnimatePresence mode="popLayout">
              {filteredPortfolio.map((item) => (
                <motion.figure
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="pi"
                  tabIndex={0}
                >
                  <div
                    className={`im ${item.classIdx}`}
                    role="img"
                    aria-label={`${item.title} preview`}
                    style={{
                      backgroundImage: `url('${item.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <div className="ov">
                    <small>{item.category}</small>
                    <b>{item.title}</b>
                    <span>View Case Study &rarr;</span>
                  </div>
                </motion.figure>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ===== PERFORMANCE & SERP METRICS SECTION ===== */}
      <section>
        <div className="wrap">
          <ScrollReveal style={{ maxWidth: '820px' }}>
            <div className="lbl">Google Ads &middot; SEO</div>
            <h2>
              Content that stops the scroll.<br />
              Get found. Get chosen. <span className="g">Get growing.</span>
            </h2>
          </ScrollReveal>

          <div className="two" style={{ marginTop: '56px', alignItems: 'start' }}>
            <ScrollReveal delay={0.1}>
              <div className="serp glass">
                <small>www.example.com › digital-marketing-agency</small>
                <h4>Best Digital Marketing Agency — Rank #1</h4>
                <p>Websites, SEO and ads that convert. Free 30-min strategy session.</p>
              </div>
              <div className="mets" style={{ marginTop: '20px' }}>
                <div>
                  <small>Organic Traffic</small>
                  <StatsCounter target="48" suffix="K" />
                </div>
                <div>
                  <small>Keyword Rankings</small>
                  <StatsCounter target="312" />
                </div>
                <div>
                  <small>Backlinks</small>
                  <StatsCounter target="1240" />
                </div>
                <div>
                  <small>Conversions</small>
                  <StatsCounter target="7.4" suffix="%" decimals={1} />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="panel glass gb">
                <small style={{ color: 'rgba(255,255,255,0.5)' }}>Campaign Performance (Live Aggregate Data)</small>
                <div className="mets" style={{ marginTop: '14px' }}>
                  <div>
                    <small>Clicks</small>
                    <StatsCounter target="24892" />
                  </div>
                  <div>
                    <small>Conversions</small>
                    <StatsCounter target="1842" />
                  </div>
                  <div>
                    <small>CTR</small>
                    <StatsCounter target="8.6" suffix="%" decimals={1} />
                  </div>
                  <div>
                    <small>ROAS</small>
                    <StatsCounter target="4.8" suffix="x" decimals={1} />
                  </div>
                </div>

                <svg viewBox="0 0 300 80" style={{ width: '100%', marginTop: '22px' }}>
                  <defs>
                    <linearGradient id="lg" x1="0" y1="0" x2="1" y2="0">
                      <stop stopColor="#2f6bff" />
                      <stop offset="1" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                  <path
                    className="ln"
                    d="M0 70 C40 60 60 65 100 45 S170 40 200 25 S270 15 300 5"
                    fill="none"
                    stroke="url(#lg)"
                    strokeWidth="3.5"
                  />
                </svg>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== LATEST ARTICLES SECTION ===== */}
      <section id="blog" className="alt">
        <div className="wrap">
          <ScrollReveal>
            <div className="lbl">Insights</div>
            <h2>Latest <span className="g">articles.</span></h2>
          </ScrollReveal>

          <StaggerContainer className="bl" staggerDelay={0.1}>
            {blogData.slice(0, 3).map((article) => (
              <StaggerItem key={article.id}>
                <article>
                  <div className="im">
                    <i
                      className={article.classIdx}
                      style={{
                        backgroundImage: `url('${article.image}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                  </div>
                  <small>
                    <b>{article.category}</b> &middot; {article.date}
                  </small>
                  <h3>{article.title}</h3>
                  <Link to="/article">Read Article &rarr;</Link>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <p className="note" style={{ marginTop: '24px' }}>
            <Link to="/blog" style={{ color: 'var(--blue)', fontWeight: 600 }}>
              View all articles &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* ===== FINAL CALL TO ACTION ===== */}
      <section className="fin">
        <div className="grid"></div>
        <ScrollReveal className="wrap">
          <h2>Ready to grow<br />your business?</h2>
          <p>Let's build a digital strategy that turns your online presence into measurable business growth.</p>
          <div className="cta">
            <Link to="/contact" className="btn pri mag">
              Start a Project
            </Link>
            <Link to="/contact" className="btn sec mag">
              Book a Free Consultation
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ===== TALK TO US / METRICS STRIP ===== */}
      <section className="alt">
        <div className="wrap two">
          <ScrollReveal>
            <div className="lbl">Let's Talk</div>
            <h2>Not sure where <span className="g">to start?</span></h2>
            <p style={{ marginTop: '24px', color: 'var(--mut)', maxWidth: '460px', lineHeight: 1.7 }}>
              Send us a quick note and a strategist will reply within 12 hours with a clear next step for your business.
            </p>
            <div className="cta" style={{ justifyContent: 'flex-start' }}>
              <Link to="/contact" className="btn pri mag">
                Contact Our Team
              </Link>
              <a href="https://wa.me/0000000000" target="_blank" rel="noopener noreferrer" className="btn sec mag">
                WhatsApp
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="stats">
              <div>
                <StatsCounter target="12" suffix="h" />
                <span>Average reply time</span>
              </div>
              <div>
                <StatsCounter target="30" suffix="m" />
                <span>Free consultation</span>
              </div>
              <div>
                <StatsCounter target="0" suffix="%" />
                <span>Obligation to buy</span>
              </div>
              <div>
                <StatsCounter target="2" suffix="d" />
                <span>Days to kickoff</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
