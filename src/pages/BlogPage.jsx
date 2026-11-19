import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../components/ScrollReveal';
import { blogData, blogCategories } from '../data/blogData';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPosts = activeCategory === 'all'
    ? blogData
    : blogData.filter((post) => post.category === activeCategory);

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
            <div className="lbl" style={{ justifyContent: 'center' }}>Blog &amp; Playbooks</div>
            <h1>Thinking &amp; <span className="g">playbooks.</span></h1>
            <p className="sub">
              Actionable SEO, Google Ads, web engineering and community growth insights from our studio team &mdash;
              practical frameworks tested on real client budgets.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured / Hero Article Banner */}
      <section style={{ padding: '0 0 clamp(40px, 6vw, 60px)' }}>
        <div className="wrap">
          <ScrollReveal>
            <div
              className="panel glass gb"
              style={{
                borderRadius: '24px',
                padding: 'clamp(28px, 4vw, 44px)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '32px',
                alignItems: 'center'
              }}
            >
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  height: '280px',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <img
                  src="/images/blog/local-seo.jpg"
                  alt="Local SEO in 2026"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: '99px',
                    background: 'rgba(47,107,255,0.15)',
                    color: 'var(--blue)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '12px'
                  }}
                >
                  Featured Guide &middot; 8 min read
                </span>
                <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, lineHeight: 1.2 }}>
                  Local SEO in 2026: owning your city's map pack
                </h2>
                <p style={{ marginTop: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  Google's latest algorithm updates prioritize geo-proximity, entity consistency, and verified review velocity.
                  Here is the step-by-step master playbook to rank #1 locally.
                </p>
                <Link to="/article" className="btn pri mag" style={{ marginTop: '22px' }}>
                  Read Full Masterclass &rarr;
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filterable Articles Grid */}
      <section id="posts">
        <div className="wrap">
          <ScrollReveal>
            <div className="lbl">All articles</div>
            <h2>Latest <span className="g">articles.</span></h2>
          </ScrollReveal>

          {/* Filter Pills */}
          <div className="filters" role="group" aria-label="Filter blog posts">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={activeCategory === cat ? 'a' : ''}
                aria-pressed={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <motion.div layout className="bl" id="blg">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post) => (
                <motion.article
                  layout
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="im">
                    <i
                      className={post.classIdx}
                      style={{
                        backgroundImage: `url('${post.image}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                  </div>
                  <small>
                    <b>{post.category}</b> &middot; {post.date} &middot; {post.readTime}
                  </small>
                  <h3>{post.title}</h3>
                  <p style={{ color: 'var(--mut)', fontSize: '0.85rem', margin: '8px 0 16px', lineHeight: 1.5 }}>
                    {post.excerpt}
                  </p>
                  <Link to="/article">Read Article &rarr;</Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredPosts.length === 0 && (
            <p className="note" style={{ display: 'block', padding: '40px 0' }}>
              No articles found in this category. Try another filter!
            </p>
          )}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="fin">
        <div className="grid"></div>
        <ScrollReveal className="wrap">
          <h2>Want these frameworks<br />applied to <span className="g">your website?</span></h2>
          <p>Turn these playbooks into qualified pipeline, traffic and revenue with an experienced team.</p>
          <div className="cta">
            <Link to="/contact" className="btn pri mag">Start a Project</Link>
            <Link to="/contact" className="btn sec mag">Book a Free Consultation</Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
