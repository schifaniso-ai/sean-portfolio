import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animateHeroEntrance, animateHeroScrollOut } from '../animations/hero';
import useReducedMotion from '../hooks/useReducedMotion';
import Particles from './Particles';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const scopeRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      const entranceCtx = animateHeroEntrance(scopeRef.current, reducedMotion);
      const scrollCtx = animateHeroScrollOut(scopeRef.current);

      return () => {
        entranceCtx?.revert();
        scrollCtx?.revert();
      };
    },
    { scope: scopeRef }
  );

  return (
    <header className="hero" ref={scopeRef}>
      <Particles />
      <div className="hero-grain" />

      <div className="hero-content">
        <div className="hero-badge">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M50 6 L88 26 V70 L50 94 L12 70 V26 Z"
              stroke="url(#heroGrad)"
              strokeWidth="1.5"
            />
            <path
              d="M50 30 L50 6 M50 94 L50 70 M25 34 L12 26 M75 34 L88 26 M25 66 L12 70 M75 66 L88 70"
              stroke="url(#heroGrad)"
              strokeWidth="0.8"
            />
            <circle cx="50" cy="50" r="15" stroke="url(#heroGrad)" strokeWidth="1.2" />
            <path d="M50 40 L50 60 M40 50 L60 50" stroke="url(#heroGrad)" strokeWidth="1.2" />
            <defs>
              <linearGradient id="heroGrad" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0" stopColor="#00D4FF" />
                <stop offset="0.5" stopColor="#f1f2f4" />
                <stop offset="1" stopColor="#00D4FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <h1 className="hero-headline">
          Sean <br />Chifaniso
        </h1>

        <p className="hero-tagline">
          Software developer with <strong>one year of hands-on build experience</strong>,
          shaped first by <strong>product design and digital marketing</strong>, and forged
          long before that in rooms where leadership was earned, not given.
        </p>

        <div className="hero-badges">
          <span className="hero-pill">SOFTWARE DEVELOPER</span>
          <span className="hero-pill">1 YR EXPERIENCE</span>
          <span className="hero-pill">DESIGN-LED</span>
          <span className="hero-pill">MARKETING-TRAINED</span>
        </div>

        <a href="#about" className="hero-cta">
          <span>Explore My Work</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      <div className="scroll-cue">
        <div className="scroll-cue-line" />
      </div>
    </header>
  );
}
