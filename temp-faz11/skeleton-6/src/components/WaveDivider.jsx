import React from 'react';

/* Wave divider between sections. variant: 1-3, flip: boolean */
export default function WaveDivider({ variant = 1, flip = false, color }) {
  const c = color || 'var(--bg)';
  const paths = {
    1: 'M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32V64H0Z',
    2: 'M0,48L60,42.7C120,37,240,27,360,32C480,37,600,59,720,58.7C840,59,960,37,1080,26.7C1200,16,1320,16,1380,16L1440,16V64H0Z',
    3: 'M0,40L80,44C160,48,320,56,480,52C640,48,800,32,960,28C1120,24,1280,32,1360,36L1440,40V64H0Z',
  };

  return (
    <div className="wave-divider" style={{ transform: flip ? 'rotate(180deg)' : 'none' }} aria-hidden="true">
      <svg viewBox="0 0 1440 64" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', width: '100%', height: '40px' }}>
        <path d={paths[variant] || paths[1]} fill={c} />
      </svg>
    </div>
  );
}
