import { Link } from 'react-router-dom';
import { ScrollReveal, StaggerContainer, StaggerItem, TiltCard } from '../components/ScrollReveal';
import StatsCounter from '../components/StatsCounter';
import { servicesData } from '../data/servicesData';

export default function ServicesPage() {
  const steps = [
    { num: "01", title: "Growth Audit", desc: "We deconstruct your analytics, competitors, site speed, and conversion bottlenecks." },
    { num: "02", title: "Strategy Blueprint", desc: "A tailored 90-day roadmap with specific channel goals, deliverables, and KPIs." },
    { num: "03", title: "Sprint Setup", desc: "Tracking tags, pixels, campaign architecture, and landing assets created in 48 hours." },
    { num: "04", title: "Launch & Drive", desc: "Campaigns and high-velocity experiments go live across search, social, and web." },
    { num: "05", title: "Conversion CRO", desc: "Continuous A/B testing of headlines, hooks, forms, and UI to lower acquisition cost." },
    { num: "06", title: "Scale & Dominate", desc: "Reinvest winning revenue channels to capture market share and compound returns." }
  ];

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
            <div className="lbl" style={{ justifyContent: 'center' }}>Services</div>
            <h1>Everything growth <span className="g">needs.</span></h1>
            <p className="sub">
              Six synchronized services, one unified growth system — built so every dollar of budget compounds
              instead of competing.
            </p>
            <div className="cta">
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn pri mag"
              >
                Browse Services
              </a>
              <Link to="/contact" className="btn sec mag">
                Get a Custom Quote
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services">
        <div className="wrap">
          <ScrollReveal>
            <div className="lbl">What we do</div>
            <h2>Six ways to <span className="g">grow.</span></h2>
          </ScrollReveal>

          <StaggerContainer className="cards" staggerDelay={0.08}>
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
                  <Link to="/contact">Explore Service &rarr;</Link>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Example Results & Case Metrics Panel */}
      <section className="alt">
        <div className="wrap two">
          <ScrollReveal>
            <div className="lbl">Example Results</div>
            <h2>How we helped a brand <span className="g">grow online.</span></h2>
            <p style={{ marginTop: '20px', color: 'var(--mut)', lineHeight: 1.7 }}>
              By pairing technical SEO architecture with high-intent Google Search campaigns and conversion-optimized
              landing pages, we turned stagnant traffic into an enterprise acquisition pipeline.
            </p>
            <div style={{ marginTop: '28px' }}>
              <Link to="/contact" className="btn pri mag">
                Book a Strategy Call &rarr;
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="panel glass gb">
              <small style={{ color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '14px' }}>
                90-Day Transformation Metrics
              </small>
              <div className="mets">
                <div>
                  <small>Traffic Growth</small>
                  <StatsCounter target="340" suffix="%" />
                </div>
                <div>
                  <small>Cost Per Acquisition</small>
                  <StatsCounter target="-42" suffix="%" />
                </div>
                <div>
                  <small>Pipeline Value</small>
                  <StatsCounter target="1.2" prefix="$" suffix="M" decimals={1} />
                </div>
                <div>
                  <small>Conversion Rate</small>
                  <StatsCounter target="6.8" suffix="%" decimals={1} />
                </div>
              </div>

              <div
                style={{
                  marginTop: '24px',
                  padding: '16px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)'
                }}
              >
                <b style={{ color: '#fff', fontSize: '0.95rem' }}>Core Execution Stack</b>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>
                  Next.js headless front-end &middot; Schema markup &middot; Google Ads smart bidding &middot; Automated email flows
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How We Work: 6 Steps Roadmap */}
      <section>
        <div className="wrap">
          <ScrollReveal style={{ maxWidth: '720px' }}>
            <div className="lbl">Process</div>
            <h2>From audit to <span className="g">compounding scale.</span></h2>
            <p style={{ marginTop: '16px', color: 'var(--mut)' }}>
              A disciplined agile execution sprint cycle repeated every two weeks with direct reporting.
            </p>
          </ScrollReveal>

          <StaggerContainer className="steps" staggerDelay={0.08} style={{ marginTop: '48px' }}>
            {steps.map((st) => (
              <StaggerItem key={st.num}>
                <div className="dot">{st.num}</div>
                <h3>{st.title}</h3>
                <p>{st.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA */}
      <section className="fin">
        <div className="grid"></div>
        <ScrollReveal className="wrap">
          <h2>Ready to accelerate<br />your market growth?</h2>
          <p>Get a comprehensive channel audit and tailored proposal within 12 hours.</p>
          <div className="cta">
            <Link to="/contact" className="btn pri mag">Get Your Proposal</Link>
            <a href="https://wa.me/0000000000" target="_blank" rel="noopener noreferrer" className="btn sec mag">
              WhatsApp Us
            </a>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
