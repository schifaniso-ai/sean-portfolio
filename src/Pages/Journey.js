import React from 'react';
import './Journey.css';

function StageMark() {
  return (
    <svg className="stage-mark" viewBox="0 0 40 40" fill="none">
      <path d="M20 4 L34 12 V28 L20 36 L6 28 V12 Z" stroke="url(#gs)" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="3.5" fill="url(#gs)" />
    </svg>
  );
}

const stages = [
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

export default function Journey() {
  return (
    <section id="journey">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">Formation</div>
          <h2 className="title">The leadership that came before the code.</h2>
        </div>
        <div className="timeline reveal">
          {stages.map((stage, i) => (
            <div className="stage" key={i}>
              <StageMark />
              <span className="role">{stage.role}</span>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
