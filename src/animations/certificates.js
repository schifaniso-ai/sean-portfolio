import { gsap, ScrollTrigger, SplitText } from '../lib/gsap';
import { DURATION, STAGGER, EASE } from './tokens';

export function animateCertificates(scope, reducedMotion) {
  const ctx = gsap.context(() => {
    if (reducedMotion) {
      gsap.set(scope.querySelectorAll('.certs-reveal'), {
        opacity: 1, y: 0, x: 0, scale: 1,
      });
      return;
    }

    const eyebrow = scope.querySelector('.certs-eyebrow');
    const heading = scope.querySelector('.certs-heading');
    const cards = scope.querySelectorAll('.cert-card');

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
        { opacity: 0, y: 30, scale: 0.95 },
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
