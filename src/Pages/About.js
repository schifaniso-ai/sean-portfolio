import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">About</div>
          <h2 className="title">Not a typical junior developer.</h2>
        </div>
        <div className="about-grid">
          <div className="reveal">
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
          <div className="facts reveal">
            <div className="row">
              <span className="k">ROLE</span>
              <span className="v">Software Developer</span>
            </div>
            <div className="row">
              <span className="k">EXPERIENCE</span>
              <span className="v">1 Year, Professional</span>
            </div>
            <div className="row">
              <span className="k">BACKGROUND</span>
              <span className="v">Product Design & Digital Marketing</span>
            </div>
            <div className="row">
              <span className="k">LEADERSHIP</span>
              <span className="v">Head Boy &middot; Junior Council</span>
            </div>
            <div className="row">
              <span className="k">MENTORSHIP</span>
              <span className="v">Uncommon.org</span>
            </div>
            <div className="row">
              <span className="k">STATUS</span>
              <span className="v">Open to opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
