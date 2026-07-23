import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-box reveal">
          <h2>Let's build something.</h2>
          <p>
            Open to junior developer roles, freelance work, and teams that value design sense
            and clear communication as much as clean code.
          </p>
          <div className="contact-links">
            <a href="mailto:schifaniso@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/sean-chifaniso-b426a53a5/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/schifaniso-ai?tab=repositories" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
