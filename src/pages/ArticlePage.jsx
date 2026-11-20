import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { blogData } from '../data/blogData';

export default function ArticlePage() {
  const related = blogData.slice(1, 4);

  return (
    <main id="main">
      {/* Article Header */}
      <section className="phero" style={{ paddingBottom: '30px' }}>
        <div className="grid"></div>
        <div className="wrap" style={{ maxWidth: '860px' }}>
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ padding: '4px 14px', borderRadius: '99px', background: 'rgba(47,107,255,0.15)', color: 'var(--blue)', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase' }}>
                SEO Playbook
              </span>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>
                18 Jan 2026 &middot; 6 min read
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.1 }}>
              Local SEO in 2026: owning your city's <span className="g">map pack.</span>
            </h1>

            <p className="sub" style={{ fontSize: '1.1rem', marginTop: '20px' }}>
              A proven tactical guide to dominating Google's top 3 map positions, outranking legacy local competitors,
              and capturing high-intent phone calls and store visits.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Header Banner Image */}
      <section style={{ padding: '0 0 50px' }}>
        <div className="wrap" style={{ maxWidth: '960px' }}>
          <ScrollReveal>
            <div
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                height: 'clamp(280px, 45vw, 460px)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 24px 60px -12px rgba(0,0,0,0.6)'
              }}
            >
              <img
                src="/images/blog/local-seo.jpg"
                alt="Local SEO Map Pack Optimization Strategy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Article Body Content */}
      <section style={{ padding: '0 0 80px' }}>
        <div className="wrap" style={{ maxWidth: '820px' }}>
          <ScrollReveal>
            {/* Key Takeaways Callout Box */}
            <div
              className="panel glass gb"
              style={{
                borderRadius: '20px',
                padding: '28px 32px',
                marginBottom: '44px'
              }}
            >
              <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--blue)' }}>⚡</span> Key Takeaways
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.92rem', color: 'rgba(255,255,255,0.85)' }}>
                <li>&bull; Google Business Profile relevance signals now weigh primary category alignment higher than keyword stuffing.</li>
                <li>&bull; Consistent NAP (Name, Address, Phone) citations across Tier-1 directories prevent algorithm demotions.</li>
                <li>&bull; Reviews containing specific keywords &amp; city landmarks drastically improve localized proximity rankings.</li>
                <li>&bull; Dedicated geo-landing pages must include hyper-local Schema.org LocalBusiness structured data.</li>
              </ul>
            </div>

            {/* Prose Content */}
            <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: '1.85' }}>
              <h2 style={{ fontSize: '1.8rem', color: '#fff', margin: '36px 0 16px' }}>
                1. Audit and Align Your Primary Category
              </h2>
              <p>
                The single largest ranking factor for the Google Local 3-Pack remains your primary business category.
                Many companies choose broad categories like "Marketing Consultant" when their actual customer search volume
                is concentrated in "Digital Marketing Agency" or "Internet Marketing Service".
              </p>
              <p style={{ marginTop: '16px' }}>
                Use category comparison tools to analyze the top 3 ranking competitors in your metropolitan area. Align your
                primary category with the market consensus, and use secondary categories for specialty services like SEO,
                Web Design, and Google Ads.
              </p>

              <h2 style={{ fontSize: '1.8rem', color: '#fff', margin: '44px 0 16px' }}>
                2. Build Geographic Relevance on Your Website
              </h2>
              <p>
                Google doesn't just rank your profile in isolation; it cross-references the authority and geo-relevance of your
                linked website. A generic homepage with no localized context will struggle against neighborhood-level competitors.
              </p>
              <p style={{ marginTop: '16px' }}>
                Embed a clean Google Map to your physical office, list the specific neighborhoods and zip codes you serve, and ensure
                your footer displays an exact matching Schema markup for <code>addressLocality</code> and <code>postalCode</code>.
              </p>

              <h2 style={{ fontSize: '1.8rem', color: '#fff', margin: '44px 0 16px' }}>
                3. The Velocity Review Flywheel
              </h2>
              <p>
                Having fifty 5-star reviews from three years ago won't protect you from a competitor gaining four verified reviews
                every week. Review recency and velocity signal active customer satisfaction to Google's ranking algorithms.
              </p>
              <p style={{ marginTop: '16px' }}>
                Implement an automated post-project SMS or email sequence that requests feedback within 24 hours of successful service
                delivery. Encourage clients to mention the specific service provided in their review copy.
              </p>
            </div>

            {/* Author Card */}
            <div
              style={{
                marginTop: '56px',
                padding: '28px',
                borderRadius: '18px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                gap: '20px',
                alignItems: 'center'
              }}
            >
              <img
                src="/images/testimonials/marcus-vance.jpg"
                alt="Marcus Vance"
                style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--blue)' }}
              />
              <div>
                <b style={{ color: '#fff', fontSize: '1.1rem', display: 'block' }}>Written by Marcus Vance</b>
                <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)' }}>
                  Head of Search &amp; Growth Performance at Smartamigos
                </span>
                <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', marginTop: '6px' }}>
                  Specializing in search algorithms, local entity graph optimization, and technical conversion funnels.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="alt">
        <div className="wrap">
          <ScrollReveal>
            <div className="lbl">Keep Reading</div>
            <h2>Related <span className="g">articles.</span></h2>
          </ScrollReveal>

          <div className="bl" style={{ marginTop: '36px' }}>
            {related.map((post) => (
              <article key={post.id}>
                <div className="im">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <small><b>{post.category}</b> &middot; {post.date}</small>
                <h3>{post.title}</h3>
                <Link to="/article">Read Article &rarr;</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="fin">
        <div className="grid"></div>
        <ScrollReveal className="wrap">
          <h2>Ready to rank your business<br />at the top of search?</h2>
          <p>Request a free local SEO and performance media audit for your brand.</p>
          <div className="cta">
            <Link to="/contact" className="btn pri mag">Claim Your Audit</Link>
            <Link to="/contact" className="btn sec mag">Talk to a Strategist</Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
