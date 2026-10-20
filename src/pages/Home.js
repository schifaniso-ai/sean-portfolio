import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Journey from '../sections/Journey';
import Skills from '../sections/Skills';
import Certificates from '../sections/Certificates';
import { getFeaturedProjects } from '../data/projects';

function Home() {
  const FEATURED_PROJECTS = getFeaturedProjects();

  return (
    <>
      <Hero />
      <About />
      <Journey />
      <Skills />
      <section id="featured-work" className="projects-section">
        <div className="projects-container">
          <div className="projects-header">
            <div className="projects-eyebrow eyebrow">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">Selected Work</span>
            </div>
            <h2 className="projects-heading title">A few things I've built.</h2>
          </div>
          <div className="projects-grid">
            {FEATURED_PROJECTS.map((project) => (
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
          <div style={{ marginTop: '64px', textAlign: 'center' }}>
            <Link to="/work" className="hero-cta">
              <span>View More Projects</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M8 3v10M3 8l5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <Certificates />
    </>
  );
}

export default Home;