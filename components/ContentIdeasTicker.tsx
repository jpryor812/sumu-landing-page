'use client'

import React from 'react';
import { motion } from 'framer-motion';

const ContentIdeasTicker: React.FC = () => {
  const items = [
    "Create exclusive content",
    "Build your community",
    "Monetize your passion",
    "Connect with true fans",
    "Grow your audience"
  ];

  const itemsReverse = [
    "Share your expertise",
    "Engage with followers",
    "Create your brand",
    "Build loyalty",
    "Scale your impact"
  ];

  return (
    <div className="w-full bg-black/20">
      {/* First line - moving left */}
      <div className="w-full overflow-hidden py-4">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {[...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center">
              <span className="text-white text-xl mx-4">{item}</span>
              <span className="text-white/50 text-xl">•</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second line - moving right */}
      <div className="w-full overflow-hidden py-4">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [-1000, 0], // Reversed animation direction
          }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {[...itemsReverse, ...itemsReverse].map((item, index) => (
            <div key={index} className="flex items-center">
              <span className="text-white text-xl mx-4">{item}</span>
              <span className="text-white/50 text-xl">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ContentIdeasTicker;