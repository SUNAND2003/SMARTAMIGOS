import { useState } from 'react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import { faqData } from '../data/testimonialsData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const steps = [
    { num: '01', title: 'Free Call', desc: 'We discuss your business, goals and current challenges.' },
    { num: '02', title: 'Growth Plan', desc: 'You receive a clear scope, timeline and custom quote.' },
    { num: '03', title: 'Onboarding', desc: 'Access, assets and KPIs are locked in within 48 hours.' },
    { num: '04', title: 'Execution', desc: 'Work starts, with weekly updates and monthly reporting.' }
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
            <div className="lbl" style={{ justifyContent: 'center' }}>Contact</div>
            <h1>Let's <span className="g">talk.</span></h1>
            <p className="sub">
              Tell us where you want to grow. Book a free 30-minute consultation &mdash; no jargon, no obligation,
              just a clear plan for your next 90 days.
            </p>
            <div className="cta">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn pri mag"
              >
                Start the Conversation
              </a>
              <a
                href="https://wa.me/0000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn sec mag"
              >
                WhatsApp Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Contact Section */}
      <section id="contact" className="alt">
        <div className="wrap ct">
          {/* Left Column: Contact Details & Office Hours */}
          <ScrollReveal className="rv">
            <div className="lbl">Get in touch</div>
            <h2>Contact <span className="g">details.</span></h2>

            <ul className="ci" style={{ marginTop: '32px' }}>
              <li>
                <a href="mailto:hello@example.com" style={{ color: 'inherit' }}>
                  hello@example.com
                </a>
              </li>
              <li>+00 000 000 0000</li>
              <li>Your City, Country</li>
              <li>
                <a
                  href="https://wa.me/0000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--blue)' }}
                >
                  WhatsApp Us &rarr;
                </a>
              </li>
            </ul>

            <div className="office">
              <div>
                <small>Office hours</small>
                <b>Mon – Sat</b>
                <span>10:00 – 19:00</span>
              </div>
              <div>
                <small>Typical reply</small>
                <b>Under 12 hrs</b>
                <span>Business days</span>
              </div>
              <div>
                <small>Consultation</small>
                <b>Free</b>
                <span>30 minutes, online</span>
              </div>
              <div>
                <small>Working with</small>
                <b>Worldwide</b>
                <span>Remote-first team</span>
              </div>
            </div>

            <div className="map glass" style={{ marginTop: '28px', height: '160px', display: 'grid', placeItems: 'center', borderRadius: '16px' }}>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem' }}>
                Map placeholder &mdash; embed Google Map here
              </span>
            </div>
          </ScrollReveal>

          {/* Right Column: Inquiry Form */}
          <ScrollReveal delay={0.15}>
            <form className="fm glass gb" onSubmit={handleSubmit}>
              <input
                type="text"
                aria-label="Name"
                name="name"
                autoComplete="name"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                aria-label="Email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <input
                aria-label="Phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <input
                type="text"
                aria-label="Company"
                name="company"
                autoComplete="organization"
                placeholder="Company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />

              <select
                aria-label="Service"
                name="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="">Service Required</option>
                <option value="SEO">SEO</option>
                <option value="Web Development">Web Development</option>
                <option value="Social Media">Social Media</option>
                <option value="Email Marketing">Email Marketing</option>
                <option value="Google Ads">Google Ads</option>
                <option value="Creative Design">Creative Design</option>
              </select>

              <select
                aria-label="Budget"
                name="budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              >
                <option value="">Budget</option>
                <option value="Starter">Starter</option>
                <option value="Growth">Growth</option>
                <option value="Premium">Premium</option>
              </select>

              <textarea
                className="full"
                aria-label="Message"
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>

              <button className="btn pri full" type="submit">
                {submitted ? 'Thank you - we will be in touch!' : 'Send Project Request'}
              </button>

              {submitted && (
                <p
                  className="formmsg"
                  role="status"
                  aria-live="polite"
                  style={{ color: '#38bdf8', fontSize: '0.9rem', textAlign: 'center', marginTop: '12px' }}
                >
                  ✓ Thank you! Your request has been sent &mdash; we will reply within 12 hours.
                </p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </section>

      {/* From Hello to Launch: Steps */}
      <section>
        <div className="wrap">
          <ScrollReveal>
            <div className="lbl">What happens next</div>
            <h2>From hello to <span className="g">launch.</span></h2>
          </ScrollReveal>

          <StaggerContainer className="steps four" id="steps" staggerDelay={0.08} style={{ marginTop: '40px' }}>
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

      {/* FAQ Section */}
      <section className="alt">
        <div className="wrap two">
          <ScrollReveal>
            <div className="lbl">FAQ</div>
            <h2>Questions, <span className="g">answered.</span></h2>
            <p style={{ marginTop: '24px', color: 'var(--mut)', maxWidth: '420px', lineHeight: 1.7 }}>
              Still unsure? Message us on WhatsApp and a strategist will reply personally.
            </p>
            <div style={{ marginTop: '28px' }}>
              <a
                href="https://wa.me/0000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn sec mag"
              >
                Chat on WhatsApp &rarr;
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="why">
              {faqData.map((faq, idx) => (
                <button
                  key={faq.num}
                  type="button"
                  className={activeFaq === idx ? 'a' : ''}
                  onClick={() => setActiveFaq(idx)}
                >
                  <b>
                    <i>{faq.num}</i>
                    {faq.question}
                  </b>
                  <div
                    className="ans"
                    style={{
                      maxHeight: activeFaq === idx ? '110px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height 0.4s ease'
                    }}
                  >
                    {faq.answer}
                  </div>
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
