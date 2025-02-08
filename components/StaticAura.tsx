import React, { ReactNode } from 'react';

interface StaticAuraProps {
  children: ReactNode;
}

const StaticAura: React.FC<StaticAuraProps> = ({ children }) => {
  return (
    <div
      className="relative min-h-screen bg-black"
      style={{
        backgroundImage: `
          radial-gradient(
            circle at 20% 20%,
            rgba(0, 255, 128, 0.1) 0%,
            rgba(0, 80, 40, 0.08) 40%,
            transparent 85%
          ),
          radial-gradient(
            circle at 50% 50%,
            rgba(0, 255, 128, 0.15) 0%,
            rgba(0, 80, 40, 0.12) 35%,
            rgba(0, 40, 20, 0.05) 65%,
            transparent 90%
          ),
          radial-gradient(
            circle at 80% 80%,
            rgba(0, 255, 128, 0.1) 0%,
            rgba(0, 80, 40, 0.08) 40%,
            transparent 85%
          )
        `
      }}
    >
      {/* Noise overlay with reduced opacity */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
        }}
      />
      
      {children}
    </div>
  );
};

export default StaticAura;