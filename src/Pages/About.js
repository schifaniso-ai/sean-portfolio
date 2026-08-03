import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animateAbout } from '../animations/about';
import useReducedMotion from '../hooks/useReducedMotion';
import ElectricBorder from '../Components/ElectricBorder';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const FACTS = [
  { key: 'ROLE', value: 'Software Developer' },
  { key: 'EXPERIENCE', value: '1 Year, Professional' },
  { key: 'BACKGROUND', value: 'Product Design & Digital Marketing' },
  { key: 'LEADERSHIP', value: 'Head Boy \u00B7 Junior Council' },
  { key: 'MENTORSHIP', value: 'Uncommon.org' },
  { key: 'STATUS', value: 'Open to opportunities' },
];

export default function About() {
  const scopeRef = useRef(null);
  const reducedMotion = useReducedMotion();

  const factsPanel = (
    <div className="about-facts">
      <div className="facts-glow" />
      {FACTS.map(({ key, value }) => (
        <div className="fact-row" key={key}>
          <span className="fact-key">{key}</span>
          <span className="fact-value">{value}</span>
        </div>
      ))}
    </div>
  );

  useGSAP(
    () => {
      const ctx = animateAbout(scopeRef.current, reducedMotion);
      return () => ctx.revert();
    },
    { scope: scopeRef }
  );

  return (
    <section id="about" className="about-section" ref={scopeRef}>
      <div className="about-container">
        <div className="about-header">
          <div className="about-eyebrow eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">About</span>
          </div>
          <h2 className="about-heading title">
            Not a typical junior developer.
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Most developers arrive at code first. Sean arrived through design and marketing
              &mdash; learning how people perceive a product before he ever learned how to build
              one. That order matters: it means every interface he writes code for, he has
              already thought about as a user, a designer, and someone who has to explain its
              value to someone else.
            </p>
            <p>
              One year into professional software development, that background shows up in the
              details &mdash; in how he structures a feature around the person using it, not
              just the logic behind it, and in how clearly he can communicate progress,
              blockers, and trade-offs to a team.
            </p>
            <p>
              The rest of his approach to work &mdash; steady under pressure, comfortable
              leading, quick to listen before speaking &mdash; wasn't built in a classroom.
              It was built earlier, as head boy of his high school, inside the Junior Council,
              and through the mentorship of Uncommon.org. Code is the newest skill. Leadership
              is the oldest one.
            </p>
          </div>

          {reducedMotion ? (
            factsPanel
          ) : (
            <ElectricBorder color="#00D4FF" speed={1} chaos={0.12} borderRadius={8}>
              {factsPanel}
            </ElectricBorder>
          )}
        </div>
      </div>
    </section>
  );
}
