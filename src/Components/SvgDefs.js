import React from 'react';

export default function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }}>
      <defs>
        <linearGradient id="gs" x1="0" y1="0" x2="40" y2="40">
          <stop stopColor="#f1f2f4" />
          <stop offset="1" stopColor="#7b818c" />
        </linearGradient>
      </defs>
    </svg>
  );
}
