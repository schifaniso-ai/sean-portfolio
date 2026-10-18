import { gsap, ScrollTrigger, SplitText } from '../lib/gsap';
import { DURATION, STAGGER, EASE } from './tokens';

export function animateJourney(scope, reducedMotion) {
  const ctx = gsap.context(() => {
    if (reducedMotion) {
      gsap.set(scope.querySelectorAll('.journey-reveal'), {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      });
      const line = scope.querySelector('.timeline-line-fill');
      if (line) gsap.set(line, { scaleY: 1 });
      return;
    }

    const eyebrow = scope.querySelector('.journey-eyebrow');
    const heading = scope.querySelector('.journey-heading');
    const timelineLine = scope.querySelector('.timeline-line-fill');
    const stages = scope.querySelectorAll('.stage');

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

      if (line) {
        sectionTl.fromTo(line,
          { scaleX: 0 },
          { scaleX: 1, duration: DURATION.NORMAL, ease: EASE.REVEAL },
          0
        );
      }
      if (text) {
        sectionTl.fromTo(text,
          { opacity: 0, x: -10 },
          { opacity: 1, x: 0, duration: DURATION.NORMAL, ease: EASE.REVEAL },
          0.1
        );
      }
    }

    if (heading) {
      const headingSplit = new SplitText(heading, {
        type: 'lines,words',
        linesClass: 'split-line',
        wordsClass: 'split-word',
      });

      sectionTl.fromTo(headingSplit.lines,
        { opacity: 0, y: 40, clipPath: 'inset(0 0 100% 0)' },
        {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0 0 0% 0)',
          duration: DURATION.LONG,
          ease: EASE.ENTER,
          stagger: STAGGER.MEDIUM,
        },
        0.2
      );
    }

    if (timelineLine) {
      gsap.fromTo(timelineLine,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: scope.querySelector('.timeline'),
            start: 'top 70%',
            end: 'bottom 50%',
            scrub: 1,
          },
        }
      );
    }

    if (stages.length) {
      stages.forEach((stage, i) => {
        const marker = stage.querySelector('.stage-marker');
        const content = stage.querySelector('.stage-content');
        const isEven = i % 2 === 0;

        const stageTl = gsap.timeline({
          scrollTrigger: {
            trigger: stage,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });

        if (marker) {
          stageTl.fromTo(marker,
            { opacity: 0, scale: 0, rotate: -45 },
            {
              opacity: 1,
              scale: 1,
              rotate: 0,
              duration: DURATION.NORMAL,
              ease: EASE.ENTER,
            },
            0
          );
        }

        if (content) {
          stageTl.fromTo(content,
            {
              opacity: 0,
              x: isEven ? -40 : 40,
              y: 20,
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: DURATION.XL,
              ease: EASE.ENTER,
            },
            0.15
          );
        }
      });
    }
  }, scope);

  return ctx;
}
