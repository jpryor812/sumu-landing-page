'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell, LabelList } from 'recharts';
import { useState, useEffect } from 'react';

export default function FeeChart() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const data = [
    { platform: 'SuperRare', fee: 15.0, color: '#D1D1D1' },  // More muted white
    { platform: 'Substack', fee: 14.0, color: '#D1D1D1' },
    { platform: 'Patreon', fee: 12.0, color: '#D1D1D1' },
    { platform: 'Gumroad', fee: 11.0, color: '#D1D1D1' },
    { platform: 'Suum', fee: 4.9, color: 'url(#suumGradient)' }
  ];

  const renderCustomLabel = (props: any) => {
    const { x, y, width, value } = props;
    return (
      <text 
        x={x + (width/2)} // Center over the bar
        y={y} 
        fill="white" 
        textAnchor="middle" 
        dy={-10} // Distance above bar
        className="font-semibold text-2xl" // Font styling
      >
        {`${value}%`}
      </text>
    );
  };

  if (!isMounted) {
    return null; // or a loading state
  }

  return (
    <div className="flex flex-row justify-around px-12 ">
        <div className="flex flex-col items-center pl-8 pt-4">
        <div className="flex flex-col py-12">
        <div className="lg:text-9xl gradient-text">
            <p>4.9%</p>
            <div className="lg:text-6xl text-white">
            <p>Platform Fees</p>
            </div>
        </div>
        <div className="flex flex-col py-12">
        <div className="lg:text-9xl gradient-text">
            <p>0%</p>
            <div className="lg:text-6xl text-white">
            <p>Transaction Fees</p>
            </div>
            </div>
        </div>
        </div>

        </div>
    <div className ="flex items-center justify-center p-8">
    <div className="max-w-3xl flex flex-col rounded-3xl p-4 items-center">
      <h2 className="text-white text-center mb-4 text-2xl font-semibold">Platform and Transaction Fees</h2>
      <BarChart 
  width={700} 
  height={450} 
  data={data}
  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
>
  <defs>
    <linearGradient id="suumGradient" x1="0" y1="1" x2="1" y2="0">
      <stop offset="10%" stopColor="#FFEBB7" />
      <stop offset="40%" stopColor="#FFD66D" />
      <stop offset="60%" stopColor="#FFD66D" />
      <stop offset="90%" stopColor="#FFEBB7" />
    </linearGradient>
  </defs>
  <CartesianGrid strokeDasharray="3 3" vertical={false} />
  <XAxis dataKey="platform" stroke="white" fontSize="20" fontWeight="600"/>
  <YAxis 
    tickFormatter={(value) => `${value}%`}
    stroke="white"
    domain={[0, 20]}
    fontSize="20"
    fontWeight="600"
  />
  <Bar 
    dataKey="fee" 
    barSize={60}
    fill="#6B7280"
    stroke=""
    radius={[10,10,0,0]}
  >
    <LabelList dataKey="fee" content={renderCustomLabel} />
    {data.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={entry.color} />
    ))}
  </Bar>
</BarChart>
    </div>
    </div>
    </div>
  );
}