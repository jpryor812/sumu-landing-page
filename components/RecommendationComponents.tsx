'use client'

import React, { useState, useEffect, FC, useRef } from 'react';
import { MousePointer2 } from 'lucide-react';

interface RecommendationData {
  creator: string;
  creatorImage: string;
  description: string;
  recCreator1: string;
  recCreator2?: string;
  recCreator3?: string;
  recommendation: string;
}

const RecommendationCard: FC<RecommendationData> = ({
  creator,
  creatorImage,
  description,
  recCreator1,
  recCreator2,
  recCreator3,
  recommendation,
}) => {
  return (
    <div className="py-4 transition-all duration-500 transform">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={creatorImage} alt={creator} className="w-11 h-11 rounded-full" />
          <div>
            <div className = "flex flex-row gap-4">
            <h3 className="font-semibold text-gray-800 text-sm sm:text-md">{creator}</h3>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm lg:px-4">{description}</p>
          </div>
        </div>
        <div className="ml-2 flex items-start">
          <button className="sm:w-24 w-20 px-2 py-2 sm:px-3 sm:py-2 rounded-full bg-blue-600 text-xs sm:text-sm font-semibold text-gray-100 hover:bg-blue-700 transition-colors">
            View Page
          </button>
        </div>
      </div>
      <div className="mt-1 flex items-center gap-8 sm:gap-4 md:gap-2">
        <div className="flex -space-x-2">
          <img src={recCreator1} alt="Recommender 1" className="w-8 h-8 rounded-full border-2 border-white" />
          {recCreator2 && (
            <img 
              src={recCreator2} 
              alt="Recommender 2" 
              className="w-8 h-8 rounded-full border-2 border-white" 
            />
          )}
             {recCreator3 && (
            <img 
              src={recCreator3} 
              alt="Recommender 2" 
              className="w-8 h-8 rounded-full border-2 border-white" 
            />
          )}
        </div>
        <p className="text-xs sm:text-sm text-gray-800 font-semibold">{recommendation}</p>
      </div>
    </div>
  );
};

const RecommendationComponent: FC = () => {
  const [activeTab, setActiveTab] = useState('following');
  const [showCursor, setShowCursor] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 50, y: 50 });
  const [clicked, setClicked] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const componentRef = useRef<HTMLDivElement | null>(null);
  const followingButtonRef = useRef<HTMLButtonElement>(null);
  const mutualButtonRef = useRef<HTMLButtonElement>(null);


  const followingData: RecommendationData[] = [
    {
      creator: 'Blockchain Bobby',
      creatorImage: '/profile2-500x500.png',
      description: "I'm a Web3 developer who teaches a course on building apps on the blockchain",
      recCreator1: '/alex-profile.png',
      recCreator2: '/profile_picture.jpg',
      recommendation: 'Recommended by Alex Dethero and Just-in Trades'
    },
    {
      creator: 'McStickies',
      creatorImage: '/mcStickies-1.png',
      description: "Creating custom stickers for teachers, animal lovers, and brands.",
      recCreator1: '/alex-profile.png',
      recCreator2: 'puja_picture.png',
      recommendation: 'Recommended by Alex Dethero and Healed by Heels'
    },
    {
      creator: 'Life Through Lenses',
      creatorImage: 'profile-800x800.png',
      description: "Photographer and digital artists documenting my journey throughout Europe.",
      recCreator1: '/profile_picture.jpg',
      recommendation: 'Recommended by Just-in Trades'
    },
  ];

  const mutualFansData: RecommendationData[] = [
    {
      creator: 'Just-in Trades',
      creatorImage: '/profile_picture.jpg',
      description: "Sharing tips on how to profitably invest in crypto",
      recCreator1: '/photo-1.jpeg',
      recCreator2: '/photo-2.jpeg',
      recCreator3: '/photo-3.jpeg',
      recommendation: 'Recommended by Fans of Alex Dethero'
    },
    {
      creator: 'Alex Dethero',
      creatorImage: 'alex-profile.png',
      description: "Lo-fi hip-hop beat musician",
      recCreator1: '/photo-4.jpeg',
      recCreator2: '/photo-5.jpg',
      recommendation: 'Recommended by Fans of Just-in Trades'
    },
    {
      creator: 'Coding with Courtney',
      creatorImage: '/photo-8.jpg',
      description: "Group and private coding lessons",
      recCreator1: '/photo-7.jpg',
      recCreator2: '/photo-6.jpg',
      recommendation: 'Recommneded by Fans of Techno-Tony'
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          setShowCursor(true);
        }
      },
      {
        threshold: 0.1 // Trigger when 10% of the component is visible
      }
    );
  
    if (componentRef.current) {
      observer.observe(componentRef.current);
    }
  
    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, [isInView]);
  
  const getCursorPosition = (buttonRef: React.RefObject<HTMLButtonElement | null>) => {
    if (buttonRef.current && componentRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const componentRect = componentRef.current.getBoundingClientRect();  
      
      return {
        x: buttonRect.left - componentRect.left + (buttonRect.width / 2),
        y: buttonRect.top - componentRect.top + (buttonRect.height / 2)
      };
    }
    return { x: 0, y: 0 };
  };
  
  useEffect(() => {
    if (showCursor && isInView) {
      const runAnimationCycle = async () => {
        // Move to Mutual Fans
        await new Promise(resolve => setTimeout(resolve, 1000));
        setCursorPosition(getCursorPosition(mutualButtonRef));
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        setClicked(true);
        
        await new Promise(resolve => setTimeout(resolve, 500));
        setActiveTab('mutual');
        setClicked(false);
        
        // Wait on Mutual Fans view
        await new Promise(resolve => setTimeout(resolve, 4000));
        
        // Move back to Creators You Follow
        setCursorPosition(getCursorPosition(followingButtonRef));
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        setClicked(true);
        
        await new Promise(resolve => setTimeout(resolve, 500));
        setActiveTab('following');
        setClicked(false);
  
        // Pause between cycles
        await new Promise(resolve => setTimeout(resolve, 1000));
      };
  
      const runFullAnimation = async () => {
        await runAnimationCycle();
        await runAnimationCycle();
        setShowCursor(false); // Hide cursor after both cycles are complete
      };
  
      runFullAnimation();
      
      return () => {
        setShowCursor(false);
        setClicked(false);
        setActiveTab('following');
      };
    }
  }, [showCursor, isInView]); // Removed windowWidth dependency
  
  const currentData = activeTab === 'following' ? followingData : mutualFansData;

  return (
    <div ref={componentRef} className="bg-white border-4 border-gray-200 rounded-xl p-1 relative">
      {showCursor && (
        <div
          className="absolute z-50 transition-all duration-1000 ease-in-out"
          style={{
            transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
          }}
        >
          <MousePointer2
            size={32}
            className={`text-black ${clicked ? 'scale-90' : 'scale-100'} transition-transform`}
          />
        </div>
      )}
      <div ref={componentRef} className="bg-white border-4 border-gray-200 rounded-xl p-1 relative">
      <div className="max-w-3xl mx-auto pt-2 px-6">
        <h2 className="text-center text-lg sm:text-xl text-gray-800 font-bold mb-6">Recommendations</h2>
        <div className="flex align-center justify-center gap-4 pb-2 border-b">
        <button 
          ref={followingButtonRef}
          className={`px-2 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            activeTab === 'following' 
              ? 'bg-blue-600 text-white' 
              : 'text-gray-400 border'
          }`}
        >
          By Creators You Follow
        </button>
        <button 
          ref={mutualButtonRef}
          className={`px-2 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            activeTab === 'mutual' 
              ? 'bg-blue-600 text-white' 
              : 'text-gray-400 border'
          }`}
        >
          By Mutual Fans
        </button>
      </div>
        <div className="divide-y">
          {currentData.map((item, index) => (
            <div key={index} className="transition-all duration-500 ease-in-out" style={{
              opacity: 1,
              transform: 'translateY(0)',
              transitionDelay: `${index * 150}ms`
            }}>
              <RecommendationCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default RecommendationComponent;