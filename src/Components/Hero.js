import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <header className="hero">
      <svg className="badge" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 6 L88 26 V70 L50 94 L12 70 V26 Z" stroke="url(#gbig)" strokeWidth="1.8" />
        <path
          d="M50 30 L50 6 M50 94 L50 70 M25 34 L12 26 M75 34 L88 26 M25 66 L12 70 M75 66 L88 70"
          stroke="url(#gbig)"
          strokeWidth="1"
        />
        <circle cx="50" cy="50" r="15" stroke="url(#gbig)" strokeWidth="1.6" />
        <path d="M50 40 L50 60 M40 50 L60 50" stroke="url(#gbig)" strokeWidth="1.4" />
        <defs>
          <linearGradient id="gbig" x1="0" y1="0" x2="100" y2="100">
            <stop offset="0" stopColor="#f1f2f4" />
            <stop offset="0.5" stopColor="#8a909a" />
            <stop offset="1" stopColor="#f1f2f4" />
          </linearGradient>
        </defs>
      </svg>
      <h1 className="name">
        Sean Junior<br />Chifaniso
      </h1>
      <p className="tagline">
        Software developer with <strong>one year of hands-on build experience</strong>,
        shaped first by <strong>product design and digital marketing</strong>, and forged
        long before that in rooms where leadership was earned, not given.
      </p>
      <div className="hero-meta">
        <span>SOFTWARE DEVELOPER</span>
        <span>1 YR EXPERIENCE</span>
        <span>DESIGN-LED</span>
        <span>MARKETING-TRAINED</span>
      </div>
      <div className="scroll-cue"></div>
    </header>
  );
}
