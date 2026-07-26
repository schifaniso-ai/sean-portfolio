import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animateSkills, initTagHover } from '../animations/skills';
import useReducedMotion from '../hooks/useReducedMotion';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

const BUILD_SKILLS = [
  'HTML / CSS / JavaScript',
  'Front-End Development',
  'Responsive Interfaces',
  'Git & Version Control',
  'API Integration',
  'Product Design (UI/UX)',
  'Wireframing & Prototyping',
  'Digital Marketing & Content',
];

const CARRY_SKILLS = [
  'Team Leadership',
  'Public Speaking',
  'Conflict Resolution',
  'Accountability',
  'Active Listening',
  'Adaptability',
  'Mentorship',
  'Clear Communication',
];

export default function Skills() {
  const scopeRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      const animCtx = animateSkills(scopeRef.current, reducedMotion);
      const cleanupHover = initTagHover(scopeRef.current);
      return () => {
        animCtx.revert();
        cleanupHover();
      };
    },
    { scope: scopeRef }
  );

  return (
    <section id="skills" className="skills-section" ref={scopeRef}>
      <div className="skills-container">
        <div className="skills-header">
          <div className="skills-eyebrow eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">Capabilities</span>
          </div>
          <h2 className="skills-heading title">
            What I build, and what I carry.
          </h2>
        </div>

        <div className="skills-grid">
          <div className="skill-col">
            <h3 className="skill-col-title">What I Build</h3>
            <p className="skill-col-sub">Technical & design capability</p>
            <div className="tag-list">
              {BUILD_SKILLS.map((skill) => (
                <div className="skill-tag" key={skill}>
                  <span className="skill-tag-spotlight" />
                  <span className="skill-tag-text">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-col">
            <h3 className="skill-col-title">What I Carry</h3>
            <p className="skill-col-sub">Leadership & soft skills</p>
            <div className="tag-list">
              {CARRY_SKILLS.map((skill) => (
                <div className="skill-tag" key={skill}>
                  <span className="skill-tag-spotlight" />
                  <span className="skill-tag-text">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
