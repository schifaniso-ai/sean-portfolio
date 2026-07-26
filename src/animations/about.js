import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { DURATION, STAGGER, EASE } from './tokens';

gsap.registerPlugin(ScrollTrigger, SplitText);

export function animateAbout(scope, reducedMotion) {
  const ctx = gsap.context(() => {
    if (reducedMotion) {
      gsap.set(scope.querySelectorAll('.about-reveal'), {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      });
      return;
    }

    const eyebrow = scope.querySelector('.about-eyebrow');
    const heading = scope.querySelector('.about-heading');
    const paragraphs = scope.querySelectorAll('.about-text p');
    const factsCard = scope.querySelector('.about-facts');
    const factRows = scope.querySelectorAll('.fact-row');

    const sectionTl = gsap.timeline({
      scrollTrigger: {
        trigger: scope,
        start: 'top 75%',
        end: 'top 20%',
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

    if (paragraphs.length) {
      sectionTl.fromTo(paragraphs,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: DURATION.LONG,
          ease: EASE.REVEAL,
          stagger: STAGGER.MEDIUM,
        },
        0.5
      );
    }

    if (factsCard) {
      sectionTl.fromTo(factsCard,
        { opacity: 0, x: 40, scale: 0.97 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: DURATION.XL,
          ease: EASE.ENTER,
        },
        0.4
      );
    }

    if (factRows.length) {
      sectionTl.fromTo(factRows,
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: DURATION.NORMAL,
          ease: EASE.REVEAL,
          stagger: STAGGER.SMALL,
        },
        0.7
      );
    }
  }, scope);

  return ctx;
}
