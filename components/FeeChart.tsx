'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell, LabelList } from 'recharts';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface DataItem {
  platform: string;
  fee: number;
  color: string;
}

export default function FeeChart() {
  const [isMounted, setIsMounted] = useState(false);
  const [animatedData, setAnimatedData] = useState<DataItem[]>([]);

  const finalData: DataItem[] = [
    { platform: 'SuperRare', fee: 15.0, color: '#D1D1D1' },
    { platform: 'Substack', fee: 15.0, color: '#D1D1D1' },
    { platform: 'Patreon', fee: 14.0, color: '#D1D1D1' },
    { platform: 'Gumroad', fee: 11.0, color: '#D1D1D1' },
    { platform: 'Sumu', fee: 4.9, color: '#00bf63' }
  ];

  // Set the component as mounted when it loads
  useEffect(() => {
    setIsMounted(true);
    
    // Start all bars at 0
    const initialData = finalData.map(item => ({ ...item, fee: 0 }));
    setAnimatedData(initialData);

    // Animate all bars to their final values simultaneously
    setTimeout(() => {
      setAnimatedData(finalData);
    }, 100);
  }, []);

  const getChartDimensions = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 640) { // mobile
        return { width: 320, height: 300, barSize: 30 };
      } else if (width < 1024) { // tablet
        return { width: 500, height: 400, barSize: 45 };
      } else { // desktop
        return { width: 700, height: 450, barSize: 60 };
      }
    }
    return { width: 700, height: 450, barSize: 60 }; // default
  };

  const [dimensions, setDimensions] = useState(getChartDimensions());

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getChartDimensions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Don't render the chart until the component has mounted
  if (!isMounted) {
    return null;
  }

  interface CustomLabelProps {
    x?: string | number;
    y?: string | number;
    width?: string | number;
    value?: string | number;
  }
  
  const renderCustomLabel = (props: CustomLabelProps) => {
    const { x = 0, y = 0, width = 0, value = 0 } = props;
    const xPos = typeof x === 'string' ? parseFloat(x) : x;
    const yPos = typeof y === 'string' ? parseFloat(y) : y;
    const widthVal = typeof width === 'string' ? parseFloat(width) : width;
    
    return (
      <text 
        x={xPos + (widthVal/2)}
        y={yPos} 
        fill="white" 
        textAnchor="middle" 
        dy={-10}
        className="font-semibold text-sm sm:text-xl lg:text-2xl"
      >
        {`${Number(value).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 60}}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          delay: 0.5,
          ease: "easeOut"
        }}
        className="sm:pt-16 pt-2 text-3xl sm:text-3xl lg:text-5xl font-semibold text-center text-white lg:px-64 md:px-48 sm:px-32 px-4"
      >
        <h5>It starts with the lowest fees in the creator economy</h5>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60}}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          delay: 0.5,
          ease: "easeOut"
        }}
        className="flex flex-col lg:flex-row justify-around px-4 xl:px-8"
      >
        <div className="flex flex-col items-center lg:pl-4 pt-4">
          <div className="flex flex-col py-4 sm:py-12">
            <div className="text-5xl sm:text-7xl md:text-7xl lg:text-9xl gradient-text">
              <p>4.9%</p>
              <div className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl text-white">
                <p>Platform Fees</p>
              </div>
            </div>
            <div className="flex flex-col py-6 sm:py-12">
              <div className="text-5xl sm:text-7xl md:text-7xl lg:text-9xl gradient-text">
                <p>0%</p>
                <div className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl text-white">
                  <p>Transaction Fees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center p-4 sm:p-8">
          <div className="w-full max-w-3xl flex flex-col rounded-3xl p-2 sm:p-4 items-center">
            <h2 className="text-white text-center mb-4 text-lg sm:text-xl lg:text-2xl font-semibold">Average Platform and Transaction Fees</h2>
            <BarChart 
              width={dimensions.width} 
              height={dimensions.height} 
              data={animatedData}
              margin={{ top: 20, right: 20, left: 10, bottom: 5 }}
            >
              {dimensions.width >= 500 && <CartesianGrid strokeDasharray="3 3" vertical={false} />}
              <XAxis 
                dataKey="platform" 
                stroke="white" 
                fontSize={dimensions.width < 640 ? 12 : 20} 
                fontWeight="600"
                angle={dimensions.width < 640 ? -45 : 0}
                textAnchor={dimensions.width < 640 ? "end" : "middle"}
                height={dimensions.width < 640 ? 60 : 30}
              />
              <YAxis 
                tickFormatter={(value) => `${value}%`}
                stroke="white"
                domain={[0, 20]}
                fontSize={dimensions.width < 640 ? 12 : 20}
                fontWeight="600"
              />
              <Bar 
                dataKey="fee" 
                barSize={dimensions.barSize}
                fill="#6B7280"
                stroke=""
                radius={[10, 10, 0, 0]}
                isAnimationActive={true}
                animationDuration={2000}
                animationBegin={0}
                animationEasing="ease-in-out"
              >
                <LabelList dataKey="fee" content={renderCustomLabel} />
                {finalData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
