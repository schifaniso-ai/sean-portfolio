import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '../lib/gsap';
import { animateCertificates } from '../animations/certificates';
import useReducedMotion from '../hooks/useReducedMotion';
import './Certificates.css';

const CERTIFICATES = [
  {
    title: 'Product Design Foundations',
    issuer: 'Coursera',
    date: '2024',
    description: 'Core principles of UX/UI design, user research, wireframing, and prototyping.',
    url: '#',
  },
  {
    title: 'Digital Marketing Specialization',
    issuer: 'Google / Coursera',
    date: '2024',
    description: 'SEO, SEM, social media marketing, analytics, and campaign strategy.',
    url: '#',
  },
  {
    title: 'JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    date: '2025',
    description: 'ES6+, recursion, algorithmic thinking, and fundamental data structures.',
    url: '#',
  },
];

export default function Certificates() {
  const scopeRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      const ctx = animateCertificates(scopeRef.current, reducedMotion);
      return () => ctx.revert();
    },
    { scope: scopeRef }
  );

  return (
    <section id="certificates" className="certs-section" ref={scopeRef}>
      <div className="certs-container">
        <div className="certs-header">
          <div className="certs-eyebrow eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">Credentials</span>
          </div>
          <h2 className="certs-heading title">
            Proof of commitment.
          </h2>
        </div>

        <div className="certs-grid">
          {CERTIFICATES.map((cert, i) => (
            <a
              className="cert-card"
              key={i}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="cert-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
                </svg>
              </div>
              <div className="cert-info">
                <span className="cert-date">{cert.date}</span>
                <h3 className="cert-title">{cert.title}</h3>
                <span className="cert-issuer">{cert.issuer}</span>
                <p className="cert-desc">{cert.description}</p>
              </div>
              <span className="cert-arrow">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
