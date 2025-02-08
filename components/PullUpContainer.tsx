'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import PageTwoHeader from '@/components/PageTwoHeader'; // Make sure to import it

interface PullUpContainerProps {
  pullUpContent: ReactNode;
}

export default function PullUpContainer({ pullUpContent }: PullUpContainerProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pullProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  
  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Initial content with PageTwoHeader */}
      <div className="min-h-screen bg-black relative z-10">
        <PageTwoHeader />
      </div>

      {/* Pull-up indicator */}
      <motion.div 
        className="fixed bottom-0 left-0 right-0 z-20 flex justify-center"
        style={{ y: -20 }}
      >
        <motion.div
          className="w-16 h-2 bg-white rounded-full mb-4"
          animate={{ y: [0, -10, 0] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Pull-up content */}
      <motion.div
        className="absolute top-0 left-0 w-full bg-[#001405] z-30"
        style={{ y: pullProgress + 'vh' }}
        transition={{ type: "spring", stiffness: 90 }}
      >
        {pullUpContent}
      </motion.div>
    </div>
  );
}