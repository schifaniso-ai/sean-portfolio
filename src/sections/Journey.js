import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '../lib/gsap';
import { animateJourney } from '../animations/journey';
import useReducedMotion from '../hooks/useReducedMotion';
import './Journey.css';

const STAGES = [
  {
    role: 'HIGH SCHOOL',
    title: 'Head Boy',
    description:
      'Given accountability for an entire student body before most peers had any formal responsibility at all. Learned to lead by example, set the tone for others, and carry authority without losing approachability.',
  },
  {
    role: 'STUDENT GOVERNANCE',
    title: 'Junior Council',
    description:
      'Represented the views of others in structured, deliberative settings. Sharpened negotiation, public speaking, and the discipline of building consensus among people who don\'t automatically agree.',
  },
  {
    role: 'MENTORSHIP PROGRAM',
    title: 'Uncommon.org',
    description:
      'Refined earlier instincts into deliberate skill \u2014 structured mentorship that pushed adaptability, self-direction, and the confidence to operate outside familiar territory.',
  },
  {
    role: 'TODAY',
    title: 'Software Developer',
    description:
      'Now channeling all of it \u2014 leadership, design sense, communication \u2014 into writing software with intent. One year in, building at pace, still leading wherever the room needs it.',
  },
];

function StageMarker() {
  return (
    <svg className="stage-marker" viewBox="0 0 40 40" fill="none">
      <path
        d="M20 4 L34 12 V28 L20 36 L6 28 V12 Z"
        stroke="url(#stageGrad)"
        strokeWidth="1.5"
      />
      <circle cx="20" cy="20" r="3.5" fill="url(#stageGrad)" />
      <defs>
        <linearGradient id="stageGrad" x1="0" y1="0" x2="40" y2="40">
          <stop stopColor="#00D4FF" />
          <stop offset="1" stopColor="#f1f2f4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Journey() {
  const scopeRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      const ctx = animateJourney(scopeRef.current, reducedMotion);
      return () => ctx.revert();
    },
    { scope: scopeRef }
  );

  return (
    <section id="journey" className="journey-section" ref={scopeRef}>
      <div className="journey-container">
        <div className="journey-header">
          <div className="journey-eyebrow eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">Formation</span>
          </div>
          <h2 className="journey-heading title">
            The leadership that came before the code.
          </h2>
        </div>

        <div className="timeline">
          <div className="timeline-line">
            <div className="timeline-line-fill" />
          </div>

          {STAGES.map((stage, i) => (
            <div className="stage" key={i}>
              <StageMarker />
              <div className="stage-content">
                <span className="stage-role">{stage.role}</span>
                <h3 className="stage-title">{stage.title}</h3>
                <p className="stage-description">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
