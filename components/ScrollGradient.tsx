'use client'

import React, { useEffect, useState } from 'react';

const ScrollGradient = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight - windowHeight;
      const progress = Math.min((scrollPosition / fullHeight) * 100, 100);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getGradientColor = (progress: number) => {
    const colors = [
      { pos: 0, color: 'rgba(59, 130, 246, 0.15)' },   // Blue
      { pos: 25, color: 'rgba(16, 185, 129, 0.15)' },  // Green
      { pos: 50, color: 'rgba(245, 158, 11, 0.15)' },  // Yellow
      { pos: 75, color: 'rgba(249, 115, 22, 0.15)' },  // Orange
      { pos: 100, color: 'rgba(236, 72, 153, 0.15)' }  // Pink
    ];

    let currentColor = colors[0];
    for (let i = 0; i < colors.length - 1; i++) {
      if (progress >= colors[i].pos && progress <= colors[i + 1].pos) {
        currentColor = colors[i];
        break;
      }
    }

    return `radial-gradient(
      100% 100% at 50% 100%,
      ${currentColor.color} 0%,
      rgba(255, 255, 255, 0) 100%
    )`;
  };

  return (
    <div className="fixed inset-x-0 bottom-0 h-64 pointer-events-none">
      <div
        className="absolute inset-0 blur-[100px] transition-all duration-500 ease-in-out"
        style={{
          background: getGradientColor(scrollProgress),
          transform: 'scale(1.5)', // Makes the gradient appear larger and softer
        }}
      />
    </div>
  );
};

export default ScrollGradient;