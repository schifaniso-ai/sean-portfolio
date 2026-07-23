import React from 'react';
import './Work.css';

const projects = [
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
];

export default function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">Selected Work</div>
          <h2 className="title">A few things I've built.</h2>
        </div>
        <div className="work-grid reveal">
          {projects.map((project) => (
            <a
              className="work-card"
              key={project.num}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="num">{project.num}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
              <span className="view-project">View Project &rarr;</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
