import React, { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../lib/gsap';
import useReducedMotion from '../../hooks/useReducedMotion';
import './Nav.css';

export default function Nav() {
  const navRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState('');

  useGSAP(
    () => {
      if (reducedMotion) {
        gsap.set(navRef.current, { opacity: 1, y: 0, filter: 'blur(0px)' });
        return;
      }

      gsap.fromTo(
        navRef.current,
        { opacity: 0, y: -20, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.6, ease: 'power3.out', delay: 0.1 }
      );
    },
    { scope: navRef }
  );

  useEffect(() => {
    const sections = ['about', 'skills', 'journey', 'work', 'contact'];
    const observers = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="nav" ref={navRef}>
      <div className="nav-inner">
        <a href="#hero" className="logo">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3 L35 11 V29 L20 37 L5 29 V11 Z" stroke="url(#navGrad)" strokeWidth="1.6" />
            <path
              d="M20 12 L20 3 M20 37 L20 28 M9 15 L5 11 M31 15 L35 11 M9 25 L5 29 M31 25 L35 29"
              stroke="url(#navGrad)"
              strokeWidth="1"
            />
            <circle cx="20" cy="20" r="5" stroke="url(#navGrad)" strokeWidth="1.4" />
            <defs>
              <linearGradient id="navGrad" x1="0" y1="0" x2="40" y2="40">
                <stop stopColor="#00D4FF" />
                <stop offset="1" stopColor="#f1f2f4" />
              </linearGradient>
            </defs>
          </svg>
          <span>SJC</span>
        </a>

        <ul className="nav-links">
          {['about', 'skills', 'journey', 'work', 'contact'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={activeSection === section ? 'active' : ''}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
