import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';
import { animateContact, initMagneticButtons } from '../animations/contact';
import useReducedMotion from '../hooks/useReducedMotion';
import '../sections/Contact.css';
import { FAQS } from '../data/faqs';

export default function ContactPage() {
  const scopeRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState(null);

  useGSAP(
    () => {
      const animCtx = animateContact(scopeRef.current, reducedMotion);
      const cleanupMagnetic = initMagneticButtons(scopeRef.current);
      return () => {
        animCtx.revert();
        cleanupMagnetic();
      };
    },
    { scope: scopeRef }
  );

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div ref={scopeRef}>
      <section id="faqs" className="contact-section" style={{ paddingTop: '140px' }}>
        <div className="contact-container">
          <div className="contact-header">
            <div className="contact-eyebrow eyebrow">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">FAQs</span>
            </div>
            <h2 className="contact-heading title">Frequently Asked Questions</h2>
          </div>

          <div className="contact-body">
            <div className="contact-details contact-reveal">
              {FAQS.map((faq, index) => (
                <div
                  key={index}
                  className="contact-card"
                  style={{ marginBottom: '16px' }}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-button-${index}`}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'inherit',
                      width: '100%',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: 0,
                      font: 'inherit',
                    }}
                  >
                    <h3 className="contact-label" style={{ margin: 0 }}>
                      {faq.question}
                    </h3>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      style={{
                        transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    >
                      <path
                        d="M5 7.5l5 5 5-5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {openIndex === index && (
                    <div
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-button-${index}`}
                      className="contact-text"
                      style={{
                        marginTop: '16px',
                      }}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <div className="contact-eyebrow eyebrow">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">Get In Touch</span>
            </div>
            <h2 className="contact-heading title">Let's build something together.</h2>
          </div>

          <div className="contact-body">
            <div className="contact-details contact-reveal">
              <div className="contact-card">
                <h3 className="contact-label">Contact</h3>
                <a href="mailto:schinfanoseanjunior@gmail.com" className="contact-link">
                  schinfanoseanjunior@gmail.com
                </a>
              </div>

              <div className="contact-card">
                <h3 className="contact-label">Social</h3>
                <div className="contact-social">
                  <a
                    href="https://github.com/schifaniso-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="GitHub (opens in a new tab)"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/sean-junior-chifaniso-0015a824a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="LinkedIn (opens in a new tab)"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="contact-card">
                <h3 className="contact-label">Location</h3>
                <p className="contact-text">Available for remote opportunities worldwide.</p>
              </div>
            </div>

            <form
              className="contact-form contact-reveal"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');
                window.location.href = `mailto:schinfanoseanjunior@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${name} (${email})`;
              }}
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required />
              </div>
              <button type="submit" className="hero-cta form-submit">
                Send Message
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M2 8h12M10 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}