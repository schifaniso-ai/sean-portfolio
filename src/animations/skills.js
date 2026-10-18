import { gsap, ScrollTrigger, SplitText } from '../lib/gsap';
import { DURATION, STAGGER, EASE } from './tokens';

export function animateSkills(scope, reducedMotion) {
  const ctx = gsap.context(() => {
    if (reducedMotion) {
      gsap.set(scope.querySelectorAll('.skills-reveal'), {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      });
      return;
    }

    const eyebrow = scope.querySelector('.skills-eyebrow');
    const heading = scope.querySelector('.skills-heading');
    const columns = scope.querySelectorAll('.skill-col');
    const tags = scope.querySelectorAll('.skill-tag');

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

    if (columns.length) {
      sectionTl.fromTo(columns,
        { opacity: 0, y: 30, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: DURATION.XL,
          ease: EASE.ENTER,
          stagger: STAGGER.MEDIUM,
        },
        0.4
      );
    }

    if (tags.length) {
      sectionTl.fromTo(tags,
        { opacity: 0, y: 15, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: DURATION.NORMAL,
          ease: EASE.REVEAL,
          stagger: {
            each: STAGGER.SMALL,
            from: 'start',
          },
        },
        0.7
      );
    }
  }, scope);

  return ctx;
}

export function initTagHover(scope) {
  const tags = scope.querySelectorAll('.skill-tag');
  if (!tags.length) return () => {};

  const handlers = [];

  tags.forEach((tag) => {
    const handleMove = (e) => {
      const rect = tag.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      gsap.to(tag, {
        rotateX,
        rotateY,
        scale: 1.04,
        duration: 0.3,
        ease: 'power2.out',
        transformPerspective: 600,
      });

      tag.style.setProperty('--spotlight-x', `${x}px`);
      tag.style.setProperty('--spotlight-y', `${y}px`);
    };

    const handleLeave = () => {
      gsap.to(tag, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    tag.addEventListener('mousemove', handleMove);
    tag.addEventListener('mouseleave', handleLeave);
    handlers.push({ tag, handleMove, handleLeave });
  });

  return () => {
    handlers.forEach(({ tag, handleMove, handleLeave }) => {
      tag.removeEventListener('mousemove', handleMove);
      tag.removeEventListener('mouseleave', handleLeave);
    });
  };
}
