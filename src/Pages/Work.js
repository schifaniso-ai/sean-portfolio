import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animateProjects, initCardHover } from '../animations/projects';
import useReducedMotion from '../hooks/useReducedMotion';
import './Work.css';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    num: '01',
    title: 'Jump Start',
    description:
      'A React-based web application built with modern front-end practices and component-driven architecture.',
    tags: ['React', 'JavaScript'],
    url: 'https://jump-start-ashy.vercel.app/',
  },
  {
    num: '02',
    title: 'Lunyalalo Trust',
    description:
      'Non-profit charity website empowering underprivileged youth in Zimbabwe through education, mentorship, and sustainable community programs.',
    tags: ['HTML', 'CSS', 'Non-Profit'],
    url: 'https://lunyalalo.vercel.app/',
  },
  {
    num: '03',
    title: 'Patience N. Portfolio',
    description:
      'Digital marketing portfolio showcasing strategic campaigns, content creation, and brand storytelling across multiple platforms.',
    tags: ['Portfolio', 'Digital Marketing'],
    url: 'https://patience-pf.vercel.app/',
  },
  {
    num: '04',
    title: 'Ashley Blackson Portfolio',
    description:
      'Digital marketing specialist portfolio featuring SEO, SEM, and social media campaign strategies for brand growth.',
    tags: ['Portfolio', 'SEO', 'Marketing'],
    url: 'https://ashely-pf.vercel.app/',
  },
  {
    num: '05',
    title: 'Alumbwe Cherish Muleya',
    description:
      'Product designer portfolio showcasing UX/UI design, prototyping, and design systems for mobile and web applications.',
    tags: ['Portfolio', 'Product Design', 'UI/UX'],
    url: 'https://alumbwe-pf.vercel.app/',
  },
  {
    num: '06',
    title: 'Digital Marketing Strategy for Emergo',
    description:
      'Comprehensive digital marketing strategy outlining target audience analysis, channel selection, and campaign frameworks for Emergo.',
    tags: ['Digital Marketing', 'Strategy', 'Canva'],
    url: 'https://canva.link/u75smu33ps66jga',
  },
  {
    num: '07',
    title: 'Customer Journey Map for WhatsApp',
    description:
      'End-to-end customer journey map visualizing key touchpoints, pain points, and opportunities across the WhatsApp user experience.',
    tags: ['Customer Journey', 'UX Research', 'Canva'],
    url: 'https://canva.link/f7r4hru0u17nbm3',
  },
  {
    num: '08',
    title: 'Website Wireframe Design',
    description:
      'Low-fidelity wireframes defining page layout, content hierarchy, and navigation flow for a responsive website design.',
    tags: ['Wireframing', 'UI/UX', 'Figma'],
    url: 'https://www.figma.com/proto/bZW7ahJVjnaAhrmVhngdfo/Untitled?node-id=1-117&t=vOiotcjApUezhlwg-1',
  },
];

export default function Work() {
  const scopeRef = useRef(null);
  const reducedMotion = useReducedMotion();

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
    <section id="work" className="projects-section" ref={scopeRef}>
      <div className="projects-container">
        <div className="projects-header">
          <div className="projects-eyebrow eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">Selected Work</span>
          </div>
          <h2 className="projects-heading title">
            A few things I've built.
          </h2>
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
                  <span className="project-tag" key={i}>{tag}</span>
                ))}
              </div>
              <span className="project-link">
                View Project
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
