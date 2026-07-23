import React from 'react';
import './Nav.css';

export default function Nav() {
  return (
    <nav>
      <div className="wrap">
        <div className="logo">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3 L35 11 V29 L20 37 L5 29 V11 Z" stroke="url(#g1)" strokeWidth="1.6" />
            <path
              d="M20 12 L20 3 M20 37 L20 28 M9 15 L5 11 M31 15 L35 11 M9 25 L5 29 M31 25 L35 29"
              stroke="url(#g1)"
              strokeWidth="1"
            />
            <circle cx="20" cy="20" r="5" stroke="url(#g1)" strokeWidth="1.4" />
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="40" y2="40">
                <stop stopColor="#f1f2f4" />
                <stop offset="1" stopColor="#7b818c" />
              </linearGradient>
            </defs>
          </svg>
          SJC
        </div>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#journey">Journey</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
