import { gsap, SplitText } from '../lib/gsap';
import { DURATION, STAGGER, EASE } from './tokens';

export function animateProjects(scope, reducedMotion) {
  const ctx = gsap.context(() => {
    if (reducedMotion) {
      gsap.set(scope.querySelectorAll('.projects-reveal'), {
        opacity: 1, y: 0, x: 0, scale: 1,
      });
      return;
    }

    const eyebrow = scope.querySelector('.projects-eyebrow');
    const heading = scope.querySelector('.projects-heading');
    const cards = scope.querySelectorAll('.project-card');

    const sectionTl = gsap.timeline({
      scrollTrigger: {
        trigger: scope,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    });

    if (eyebrow) {
      const line = eyebrow.querySelector('.eyebrow-line');
      const text = eyebrow.querySelector('.eyebrow-text');
      if (line) sectionTl.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: DURATION.NORMAL, ease: EASE.REVEAL }, 0);
      if (text) sectionTl.fromTo(text, { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: DURATION.NORMAL, ease: EASE.REVEAL }, 0.1);
    }

    if (heading) {
      const headingSplit = new SplitText(heading, { type: 'lines,words', linesClass: 'split-line', wordsClass: 'split-word' });
      sectionTl.fromTo(headingSplit.lines,
        { opacity: 0, y: 40, clipPath: 'inset(0 0 100% 0)' },
        { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: DURATION.LONG, ease: EASE.ENTER, stagger: STAGGER.MEDIUM },
        0.2
      );
    }

    if (cards.length) {
      sectionTl.fromTo(cards,
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: DURATION.XL, ease: EASE.ENTER,
          stagger: { each: STAGGER.MEDIUM, from: 'start' },
        },
        0.5
      );
    }
  }, scope);

  return ctx;
}

export function initCardHover(scope) {
  const cards = scope.querySelectorAll('.project-card');
  if (!cards.length) return () => {};

  const handlers = [];

  cards.forEach((card) => {
    const spotlight = card.querySelector('.card-spotlight');

    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -2;
      const rotateY = ((x - centerX) / centerX) * 2;

      gsap.to(card, {
        rotateX, rotateY, y: -6, scale: 1.01,
        duration: 0.4, ease: 'power2.out', transformPerspective: 800,
      });

      if (spotlight) {
        card.style.setProperty('--card-spotlight-x', `${x}px`);
        card.style.setProperty('--card-spotlight-y', `${y}px`);
      }
    };

    const handleLeave = () => {
      gsap.to(card, {
        rotateX: 0, rotateY: 0, y: 0, scale: 1,
        duration: 0.5, ease: 'power2.out',
      });
    };

    card.addEventListener('mousemove', handleMove);
    card.addEventListener('mouseleave', handleLeave);
    handlers.push({ card, handleMove, handleLeave });
  });

  return () => {
    handlers.forEach(({ card, handleMove, handleLeave }) => {
      card.removeEventListener('mousemove', handleMove);
      card.removeEventListener('mouseleave', handleLeave);
    });
  };
}
