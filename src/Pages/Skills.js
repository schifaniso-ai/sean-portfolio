import React from 'react';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">Capabilities</div>
          <h2 className="title">What I build, and what I carry.</h2>
        </div>
        <div className="skills-grid reveal">
          <div className="skill-col">
            <h3>What I Build</h3>
            <div className="sub">Technical & design capability</div>
            <div className="tag-list">
              <span>HTML / CSS / JavaScript</span>
              <span>Front-End Development</span>
              <span>Responsive Interfaces</span>
              <span>Git & Version Control</span>
              <span>API Integration</span>
              <span>Product Design (UI/UX)</span>
              <span>Wireframing & Prototyping</span>
              <span>Digital Marketing & Content</span>
            </div>
          </div>
          <div className="skill-col">
            <h3>What I Carry</h3>
            <div className="sub">Leadership & soft skills</div>
            <div className="tag-list">
              <span>Team Leadership</span>
              <span>Public Speaking</span>
              <span>Conflict Resolution</span>
              <span>Accountability</span>
              <span>Active Listening</span>
              <span>Adaptability</span>
              <span>Mentorship</span>
              <span>Clear Communication</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
