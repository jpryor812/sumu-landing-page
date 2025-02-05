'use client';

import React, { useEffect, useRef } from 'react';

const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      console.log('Video element exists');
      console.log('Video source:', videoRef.current.currentSrc);
      console.log('Video ready state:', videoRef.current.readyState);
      console.log('Video error:', videoRef.current.error);
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-blue-100 "> {/* Added background color */}
      <video 
        ref={videoRef}
        preload="auto"
        autoPlay 
        muted 
        loop 
        playsInline
        controls // Temporarily added controls
        className="object-cover w-full h-full" // Added border
      >
        <source src="/alex-vid-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
};

export default VideoBackground;