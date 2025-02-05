'use client';

import React from 'react';

const AnimatedBackground = () => {
  // Generate multiple orbs with different positions and animations
  const orbs = Array.from({ length: 8 }).map((_, index) => ({
    id: index,
    delay: `${index * 2}s`,
    duration: `${25 + index * 4}s`,
    size: `${30 + Math.random() * 20}rem`,
    x1: 20 + Math.random() * 30,
    y1: 20 + Math.random() * 30,
    x2: -20 - Math.random() * 20,
    y2: 20 + Math.random() * 20,
  }));

  return (
    <div className="fixed inset-0 -z-0 overflow-hidden bg-[#FCFCFC]">
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute rounded-full bg-gradient-to-r from-amber-100/20 to-amber-200/20 blur-2xl"
          style={{
            width: orb.size,
            height: orb.size,
            animationDuration: orb.duration,
            animationDelay: orb.delay,
            left: `${-20 + Math.random() * 140}%`,
            top: `${-20 + Math.random() * 140}%`,
            animation: `float ${orb.duration} ease-in-out infinite`,
            transform: 'translate(0, 0) scale(1)',
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;