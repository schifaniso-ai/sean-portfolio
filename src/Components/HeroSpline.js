import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="hero-spline-bg" aria-hidden="true">
      <Spline
        scene="https://prod.spline.design/cg1P917d98p2vf7O/scene.splinecode"
        onLoad={() => setLoaded(true)}
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.6s ease-out',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}
