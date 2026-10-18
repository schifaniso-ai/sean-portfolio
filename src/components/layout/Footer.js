import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '../../lib/gsap';
import useReducedMotion from '../../hooks/useReducedMotion';
import './Footer.css';

export default function Footer() {
  const footerRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion || !footerRef.current) return;

      gsap.fromTo(footerRef.current,
        { opacity: 0, y: 15 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: footerRef }
  );

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-divider" />
      <p className="footer-text">
        SEAN JUNIOR CHIFANISO &mdash; &copy; 2026 &mdash; DESIGNED FOR IMPACT
      </p>
    </footer>
  );
}
