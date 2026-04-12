import React, { useState, useEffect } from 'react';

export default function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState('in'); // in → hold → out → done

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'), 300);
    const t2 = setTimeout(() => setPhase('out'), 1200);
    const t3 = setTimeout(() => { setPhase('done'); onDone(); }, 1700);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  if (phase === 'done') return null;

  return (
    <div className={`splash splash-${phase}`}>
      <div className="splash-inner">
        <svg width="72" height="72" viewBox="0 0 72 72" className="splash-logo">
          <defs>
            <linearGradient id="splash-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e0e0e0" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#C0C0C0" />
            </linearGradient>
          </defs>
          <circle cx="36" cy="36" r="34" fill="none" stroke="url(#splash-grad)" strokeWidth="2" />
          <text x="36" y="42" textAnchor="middle" fill="url(#splash-grad)"
            fontFamily="'Playfair Display',Georgia,serif" fontSize="24" fontWeight="800">Ag</text>
        </svg>
        <div className="splash-text">Silverpedi</div>
        <div className="splash-bar"><div className="splash-bar-fill" /></div>
      </div>
    </div>
  );
}
