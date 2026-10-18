import { gsap, ScrollTrigger, SplitText } from '../lib/gsap';
import { DURATION, STAGGER, EASE } from './tokens';

export function animateContact(scope, reducedMotion) {
  const ctx = gsap.context(() => {
    if (reducedMotion) {
      gsap.set(scope.querySelectorAll('.contact-reveal'), {
        opacity: 1, y: 0, x: 0, scale: 1,
      });
      return;
    }

    const heading = scope.querySelector('.contact-heading');
    const subtext = scope.querySelector('.contact-subtext');
    const links = scope.querySelectorAll('.contact-link');

    const sectionTl = gsap.timeline({
      scrollTrigger: {
        trigger: scope,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    });

    if (heading) {
      const headingSplit = new SplitText(heading, { type: 'lines,words', linesClass: 'split-line', wordsClass: 'split-word' });
      sectionTl.fromTo(headingSplit.lines,
        { opacity: 0, y: 40, clipPath: 'inset(0 0 100% 0)' },
        { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: DURATION.LONG, ease: EASE.ENTER, stagger: STAGGER.MEDIUM },
        0
      );
    }

    if (subtext) {
      sectionTl.fromTo(subtext,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: DURATION.LONG, ease: EASE.REVEAL },
        0.4
      );
    }

    if (links.length) {
      sectionTl.fromTo(links,
        { opacity: 0, y: 15, scale: 0.9 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: DURATION.NORMAL, ease: EASE.REVEAL,
          stagger: STAGGER.MEDIUM,
        },
        0.6
      );
    }
  }, scope);

  return ctx;
}

export function initMagneticButtons(scope) {
  const links = scope.querySelectorAll('.contact-link');
  if (!links.length) return () => {};

  const handlers = [];

  links.forEach((link) => {
    const handleMove = (e) => {
      const rect = link.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(link, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleLeave = () => {
      gsap.to(link, {
        x: 0, y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.4)',
      });
    };

    link.addEventListener('mousemove', handleMove);
    link.addEventListener('mouseleave', handleLeave);
    handlers.push({ link, handleMove, handleLeave });
  });

  return () => {
    handlers.forEach(({ link, handleMove, handleLeave }) => {
      link.removeEventListener('mousemove', handleMove);
      link.removeEventListener('mouseleave', handleLeave);
    });
  };
}
