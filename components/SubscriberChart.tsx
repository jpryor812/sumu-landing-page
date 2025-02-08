'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell, LabelList } from 'recharts';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface DataItem {
  platform: string;
  fee: number;
  color: string;
}

export default function SubscriberChart() {
  const [isMounted, setIsMounted] = useState(false);
  const [animatedData, setAnimatedData] = useState<DataItem[]>([]);
  
  const finalData: DataItem[] = [
    { platform: 'TikTok', fee: 50000, color: '#D1D1D1' },
    { platform: 'YouTube', fee: 15000, color: '#D1D1D1' },
    { platform: 'Instagram', fee: 10000, color: '#D1D1D1' },
    { platform: 'Blog', fee: 10000, color: '#D1D1D1' },
    { platform: 'Suum', fee: 100, color: '#00bf63' }
  ];

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

  const renderCustomLabel = (props: {
    x: number;
    y: number;
    width: number;
    value: number;
  }) => {
    const { x, y, width, value } = props;
    const formattedValue = value.toLocaleString();
    return (
      <text 
        x={x + (width/2)}
        y={y} 
        fill="white" 
        textAnchor="middle" 
        dy={-10}
      >
        {formattedValue}
      </text>
    );
  };

  if (!isMounted) {
    return null;
  }

  // Add this custom tick renderer function before your return statement
const CustomXAxisTick = (props: any) => {
  const { x, y, payload } = props;
  
  return (
    <g transform={`translate(${x},${y})`}>
      <text 
        x={0} 
        y={18} 
        dy={0} 
        textAnchor="middle" 
        fill="white"
        fontSize="20"
        fontWeight="600"
      >
        {payload.value}
      </text>
      {/* Add the subscription text only under "Suum" */}
      {payload.value === "Suum" && (
        <text
          x={0}
          y={30}
          textAnchor="middle"
          fill="white"
          fontSize="12"
          fontWeight="400"
        >
          ($10/month subscription)
        </text>
      )}
    </g>
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
        className="pt-12 text-5xl font-semibold text-center text-white lg:px-64 md:px-48 sm:px-32"
      >
        <h5>Not Sure Whether to Charge For Your Content? Here's Why You Shouild:</h5>
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
        className="flex flex-row justify-around px-12"
      >
        <div className="flex flex-col items-center pl-8 pt-4">
          <div className="flex flex-col py-12">
            <div className="lg:text-4xl text-white pb-4">
              <p>Multiply your earnings by</p>
            </div>
              <div className="lg:text-9xl gradient-text">
                <p>1,000x</p>
              </div>  
                <div className="lg:text-4xl text-white pt-4">
                <p>Don&apos;t rely on third-party algorithms and advertisers to earn money for your content. 
                    Instead, connect with your true fans directly and reward them with exclusive content that makes them feel closer to you.</p>
                </div>
            </div>
          </div>
        <div className="flex items-center justify-center p-8">
          <div className="max-w-3xl flex flex-col rounded-3xl p-4 items-center">
            <h2 className="text-white text-center mb-4 text-xl font-semibold">Average Subscribers/Followers needed for $1,000/month from ads</h2>
            <BarChart 
              width={700} 
              height={450} 
              data={animatedData}
              margin={{ top: 20, right: 30, left: 20, bottom: 15 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="platform" 
                stroke="white" 
                fontSize="20" 
                fontWeight="600"
                tick={CustomXAxisTick}
              />
              <YAxis 
                tickFormatter={(value) => value.toLocaleString()}
                stroke="white"
                domain={[0, 60000]}
                fontSize="20"
                fontWeight="600"
              />
              <Bar 
                dataKey="fee" 
                barSize={60}
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