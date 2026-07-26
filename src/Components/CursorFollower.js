import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import useReducedMotion from '../hooks/useReducedMotion';
import './CursorFollower.css';

export default function CursorFollower() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion || !dotRef.current || !ringRef.current) return;
      if ('ontouchstart' in window) return;

      const dot = dotRef.current;
      const ring = ringRef.current;

      gsap.set(dot, { xPercent: -50, yPercent: -50 });
      gsap.set(ring, { xPercent: -50, yPercent: -50 });

      const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      const mouse = { x: pos.x, y: pos.y };

      const xSet = gsap.quickSetter(dot, 'x', 'px');
      const ySet = gsap.quickSetter(dot, 'y', 'px');
      const xrSet = gsap.quickSetter(ring, 'x', 'px');
      const yrSet = gsap.quickSetter(ring, 'y', 'px');

      window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      });

      gsap.ticker.add(() => {
        pos.x += (mouse.x - pos.x) * 0.15;
        pos.y += (mouse.y - pos.y) * 0.15;
        xSet(mouse.x);
        ySet(mouse.y);
        xrSet(pos.x);
        yrSet(pos.y);
      });

      const interactives = document.querySelectorAll('a, button, .skill-tag, .project-card, .contact-link');
      const onEnter = () => {
        gsap.to(ring, { scale: 2, opacity: 0.4, duration: 0.3, ease: 'power2.out' });
        gsap.to(dot, { scale: 0.5, duration: 0.3, ease: 'power2.out' });
      };
      const onLeave = () => {
        gsap.to(ring, { scale: 1, opacity: 0.6, duration: 0.3, ease: 'power2.out' });
        gsap.to(dot, { scale: 1, duration: 0.3, ease: 'power2.out' });
      };

      interactives.forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });

      return () => {
        interactives.forEach((el) => {
          el.removeEventListener('mouseenter', onEnter);
          el.removeEventListener('mouseleave', onLeave);
        });
      };
    },
    { scope: dotRef }
  );

  if (reducedMotion) return null;

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
