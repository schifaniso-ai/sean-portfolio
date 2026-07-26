import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animateContact, initMagneticButtons } from '../animations/contact';
import useReducedMotion from '../hooks/useReducedMotion';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const scopeRef = useRef(null);
  const reducedMotion = useReducedMotion();

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

  return (
    <section id="contact" className="contact-section" ref={scopeRef}>
      <div className="contact-container">
        <div className="contact-box">
          <div className="contact-bg-glow" />
          <h2 className="contact-heading">Let's build something.</h2>
          <p className="contact-subtext">
            Open to junior developer roles, freelance work, and teams that value design sense
            and clear communication as much as clean code.
          </p>
          <div className="contact-links">
            <a href="mailto:schifaniso@gmail.com" className="contact-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13 2 4" />
              </svg>
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/sean-chifaniso-b426a53a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/schifaniso-ai?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
