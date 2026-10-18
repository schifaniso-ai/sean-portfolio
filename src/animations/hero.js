import { gsap, ScrollTrigger, SplitText } from '../lib/gsap';
import { DURATION, STAGGER, EASE } from './tokens';

export function animateHeroEntrance(scope, reducedMotion) {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: EASE.REVEAL } });

    const nav = scope.querySelector('.nav');
    const logo = scope.querySelector('.logo');
    const logoSvg = scope.querySelector('.logo svg');
    const badge = scope.querySelector('.hero-badge');
    const headline = scope.querySelector('.hero-headline');
    const tagline = scope.querySelector('.hero-tagline');
    const badges = scope.querySelectorAll('.hero-pill');
    const cta = scope.querySelectorAll('.hero-cta');
    const scrollCue = scope.querySelector('.scroll-cue');

    if (reducedMotion) {
      gsap.set([nav, badge, headline, tagline, ...badges, ...cta, scrollCue], {
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
      });
      if (logo) gsap.set(logo, { opacity: 1, y: 0 });
      if (logoSvg) gsap.set(logoSvg, { scale: 1, rotate: 0 });
      return;
    }

    let headlineSplit = null;
    if (headline) {
      headlineSplit = new SplitText(headline, {
        type: 'lines',
        linesClass: 'split-line',
      });
    }

    tl.set(scope.querySelectorAll('.hero-pill'), { opacity: 0, y: 20, scale: 0.9 });

    if (nav) {
      tl.fromTo(nav,
        { opacity: 0, y: -20, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: DURATION.NORMAL },
        0
      );
    }

    if (logo) {
      tl.fromTo(logo,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: DURATION.NORMAL },
        0
      );
    }

    if (logoSvg) {
      tl.fromTo(logoSvg,
        { scale: 0.8, rotate: -10 },
        {
          scale: 1,
          rotate: 0,
          duration: DURATION.LONG,
          ease: EASE.ENTER,
        },
        0
      );
    }

    if (badge) {
      tl.fromTo(badge,
        { opacity: 0, scale: 0.6, rotateY: -15 },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: DURATION.XL,
          ease: EASE.ENTER,
        },
        0.1
      );
    }

    if (headlineSplit) {
      tl.set(headline, { opacity: 1 }, 0.3);

      tl.fromTo(headlineSplit.lines,
        { opacity: 0, y: 60, clipPath: 'inset(0 0 100% 0)' },
        {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0 0 0% 0)',
          duration: DURATION.XL,
          ease: EASE.ENTER,
          stagger: STAGGER.MEDIUM,
        },
        0.3
      );
    }

    if (tagline) {
      tl.fromTo(tagline,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: DURATION.LONG,
          ease: EASE.REVEAL,
        },
        0.7
      );
    }

    if (badges.length) {
      tl.to(badges, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: DURATION.NORMAL,
        ease: EASE.REVEAL,
        stagger: STAGGER.MEDIUM,
      }, 0.9);
    }

    if (cta.length) {
      tl.fromTo(cta,
        { opacity: 0, scale: 0.85, y: 15 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: DURATION.NORMAL,
          ease: EASE.REVEAL,
          stagger: STAGGER.MEDIUM,
        },
        1.1
      );
    }

    if (scrollCue) {
      tl.fromTo(scrollCue,
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          duration: DURATION.NORMAL,
          ease: EASE.REVEAL,
        },
        1.3
      );
    }

    return () => {
      if (headlineSplit) headlineSplit.revert();
    };
  }, scope);

  return ctx;
}

export function animateHeroScrollOut(scope) {
  const ctx = gsap.context(() => {
    const heroContent = scope.querySelector('.hero-content');
    const badge = scope.querySelector('.hero-badge');
    const scrollCue = scope.querySelector('.scroll-cue');

    if (!heroContent) return;

    gsap.to(heroContent, {
      y: -80,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: scope,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    if (badge) {
      gsap.to(badge, {
        scale: 0.7,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: scope,
          start: 'top top',
          end: '60% top',
          scrub: 1,
        },
      });
    }

    if (scrollCue) {
      gsap.to(scrollCue, {
        opacity: 0,
        y: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: scope,
          start: '5% top',
          end: '15% top',
          scrub: 1,
        },
      });
    }
  }, scope);

  return ctx;
}

export function animateHeroMicroInteractions(scope, reducedMotion) {
  const ctx = gsap.context(() => {
    if (reducedMotion) return;

    const badge = scope.querySelector('.hero-badge');
    const globeInner = scope.querySelector('.hero-globe-inner');
    const ctaPrimary = scope.querySelector('.hero-cta');

    if (badge) {
      gsap.to(badge, {
        y: -8,
        duration: 3.2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1.6,
      });

      gsap.to(badge, {
        filter: 'drop-shadow(0 0 60px rgba(0, 212, 255, 0.35))',
        duration: 2.6,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1.6,
      });
    }

    if (globeInner) {
      gsap.to(globeInner, {
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: scope,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }

    if (ctaPrimary) {
      gsap.to(ctaPrimary, {
        boxShadow: '0 0 50px rgba(0, 212, 255, 0.35)',
        duration: 2.2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1.8,
      });
    }
  }, scope);

  return ctx;
}
