import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';
import { animateProjects, initCardHover } from '../animations/projects';
import useReducedMotion from '../hooks/useReducedMotion';
import '../sections/Work.css';
import { getRemainingProjects } from '../data/projects';

export default function WorkPage() {
  const scopeRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const PROJECTS = getRemainingProjects();

  useGSAP(
    () => {
      const animCtx = animateProjects(scopeRef.current, reducedMotion);
      const cleanupHover = initCardHover(scopeRef.current);
      return () => {
        animCtx.revert();
        cleanupHover();
      };
    },
    { scope: scopeRef }
  );

  return (
    <section id="work" className="projects-section" ref={scopeRef} style={{ paddingTop: '140px' }}>
      <div className="projects-container">
        <div className="projects-header">
          <div className="projects-eyebrow eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">All Work</span>
          </div>
          <h2 className="projects-heading title">More projects I've done.</h2>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <a
              className="project-card"
              key={project.num}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="card-spotlight" />
              <span className="card-glow" />
              <span className="project-num">{project.num}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span className="project-tag" key={i}>
                    {tag}
                  </span>
                ))}
              </div>
              <span className="project-link">
                View Project
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 7h12M8 2l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}