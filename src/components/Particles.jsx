import React from 'react';
import './Particles.css';

const Particles = () => {
  // Pre-calculated particle coordinates & timings for lightweight and stable rendering
  const particles = [
    { id: 1, top: '12%', left: '8%', size: 4, duration: '6s', delay: '0s' },
    { id: 2, top: '22%', left: '35%', size: 3, duration: '8s', delay: '1.5s' },
    { id: 3, top: '15%', left: '78%', size: 5, duration: '7s', delay: '0.8s' },
    { id: 4, top: '45%', left: '14%', size: 3, duration: '9s', delay: '2s' },
    { id: 5, top: '65%', left: '28%', size: 4, duration: '6.5s', delay: '3s' },
    { id: 6, top: '38%', left: '88%', size: 4, duration: '8.5s', delay: '1s' },
    { id: 7, top: '72%', left: '60%', size: 5, duration: '7.5s', delay: '2.5s' },
    { id: 8, top: '80%', left: '82%', size: 3, duration: '9s', delay: '0.5s' },
    { id: 9, top: '28%', left: '52%', size: 3.5, duration: '8s', delay: '4s' },
    { id: 10, top: '55%', left: '46%', size: 2.5, duration: '6s', delay: '1.2s' },
  ];

  return (
    <div className="particles-container" aria-hidden="true">
      {/* Ambient gradient glows */}
      <div className="glow-orb orb-1" />
      <div className="glow-orb orb-2" />
      <div className="glow-orb orb-3" />

      {/* Floating particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
