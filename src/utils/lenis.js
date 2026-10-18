import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '../lib/gsap';

export default function useLenis() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const rafCb = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(rafCb);

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(rafCb);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}
