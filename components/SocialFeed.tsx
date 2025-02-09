'use client'

import Image from "next/image";
import { MessageCircle, HeartIcon, Repeat2 } from "lucide-react";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

export default function SocialFeed() {
  const controls = useAnimationControls();
  
  const categories = [
    { name: "All", active: true },
    { name: "Art", active: false },
    { name: "Fashion", active: false },
    { name: "Finance", active: false },
    { name: "Gaming", active: false },
    { name: "Music", active: false },
    { name: "Tech", active: false },
    { name: "World Affairs", active: false },
  ];

  useEffect(() => {
    const startAnimation = async () => {
      while (true) {
        // Start at top
        await controls.start({ y: 0 });
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        // Scroll to second post
        await controls.start({ 
          y: "-33.33%", 
          transition: { duration: 1.5, ease: "easeInOut" }
        });
        await new Promise(resolve => setTimeout(resolve, 0));
        
        // Scroll to third post
        await controls.start({ 
          y: "-60.00%", 
          transition: { duration: 1.5, ease: "easeInOut" }
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Scroll back to top
        await controls.start({ 
          y: 0, 
          transition: { duration: 2, ease: "easeInOut" }
        });
      }
    };

    startAnimation();
  }, [controls]);

  return (
    <div className="bg-black border-white border-2 rounded-lg w-full max-w-4xl mx-auto overflow-hidden">
      {/* Categories Section */}
      <div className="w-full overflow-x-auto">
        <div className="flex flex-row gap-6 p-4 justify-start md:justify-center min-w-max">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`text-sm text-gray-300 whitespace-nowrap ${
                category.active ? "font-semibold border-b-2 border-pink-500" : "hover:text-gray-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Container with Animation */}
      <div className="h-[500px] overflow-hidden"> {/* Fixed height container */}
        <motion.div
          animate={controls}
          initial={{ y: 0 }}
        >
          {/* First Post */}
          <div className="px-4 md:px-8 pb-6">
            <div className="bg-[#001405] border-gray-500 border-2 rounded-2xl w-full">
              <div className="flex items-center gap-3 p-4">
                <Image
                  src="/alex-profile.png"
                  alt="alex Album Cover"
                  height={32}
                  width={32}
                  className="rounded-full"
                />
                <div className="flex items-center gap-2 flex-grow">
                  <span className="text-sm font-semibold text-gray-200">
                    Alex Dethero
                  </span>
                  <span className="text-xs text-gray-500">6:45pm</span>
                </div>
              </div>

              <div className="px-4 pb-2">
                <p className="text-md font-semibold text-gray-200">
                  Listened to some classic jazz at work today and I'm feeling creative.
                  Surprise live music making session tonight at 8:00pm est. for all of
                  my fans! Looking forward to chatting with you all and making some
                  hits!!
                </p>
              </div>

              <div className="px-6 py-2">
                <div className="relative w-full aspect-[3/1]">
                  <Image
                    src="/alex-tweet-image.png"
                    alt="alex post image"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>

              <div className="flex justify-center gap-12 md:gap-24 p-4">
                <button className="flex items-center gap-1 text-gray-300 hover:text-gray-100">
                  <MessageCircle size={20} />
                  <span>9</span>
                </button>
                <button className="flex items-center gap-1 text-gray-300 hover:text-gray-100">
                  <Repeat2 size={20} />
                  <span>5</span>
                </button>
                <button className="flex items-center gap-1 text-gray-300 hover:text-gray-100">
                  <HeartIcon size={20} />
                  <span>22</span>
                </button>
              </div>
            </div>
          </div>

          {/* Second Post */}
          <div className="px-4 md:px-8 pb-6">
            <div className="bg-[#001405] border-gray-500 border-2 rounded-2xl w-full">
              {/* ... Same content as first post ... */}
              <div className="flex items-center gap-3 p-4">
                <Image
                  src="/alex-profile.png"
                  alt="alex Album Cover"
                  height={32}
                  width={32}
                  className="rounded-full"
                />
                <div className="flex items-center gap-2 flex-grow">
                  <span className="text-sm font-semibold text-gray-200">
                    Alex Dethero
                  </span>
                  <span className="text-xs text-gray-500">6:45pm</span>
                </div>
              </div>

              <div className="px-4 pb-2">
                <p className="text-md font-semibold text-gray-200">
                  Listened to some classic jazz at work today and I'm feeling creative.
                  Surprise live music making session tonight at 8:00pm est. for all of
                  my fans! Looking forward to chatting with you all and making some
                  hits!!
                </p>
              </div>

              <div className="px-6 py-2">
                <div className="relative w-full aspect-[3/1]">
                  <Image
                    src="/alex-tweet-image.png"
                    alt="alex post image"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>

              <div className="flex justify-center gap-12 md:gap-24 p-4">
                <button className="flex items-center gap-1 text-gray-300 hover:text-gray-100">
                  <MessageCircle size={20} />
                  <span>9</span>
                </button>
                <button className="flex items-center gap-1 text-gray-300 hover:text-gray-100">
                  <Repeat2 size={20} />
                  <span>5</span>
                </button>
                <button className="flex items-center gap-1 text-gray-300 hover:text-gray-100">
                  <HeartIcon size={20} />
                  <span>22</span>
                </button>
              </div>
            </div>
          </div>

          {/* Third Post */}
          <div className="px-4 md:px-8 pb-6">
            <div className="bg-[#001405] border-gray-500 border-2 rounded-2xl w-full">
              <div className="flex items-center gap-3 p-4">
                <Image
                  src="/alex-profile.png"
                  alt="alex Album Cover"
                  height={32}
                  width={32}
                  className="rounded-full"
                />
                <div className="flex items-center gap-2 flex-grow">
                  <span className="text-sm font-semibold text-gray-200">
                    Alex Dethero
                  </span>
                  <span className="text-xs text-gray-500">7:30pm</span>
                </div>
              </div>

              <div className="px-4 pb-2">
                <p className="text-md font-semibold text-gray-200">
                  Just wrapped up an amazing live session! Thanks to everyone who joined.
                  The energy was incredible and we made some real magic happen. 
                  Can't wait to share the finished tracks with you all! 🎵✨
                </p>
              </div>

              <div className="px-6 py-2">
                <div className="relative w-full aspect-[3/1]">
                  <Image
                    src="/alex-tweet-image.png"
                    alt="alex post image"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>

              <div className="flex justify-center gap-12 md:gap-24 p-4">
                <button className="flex items-center gap-1 text-gray-300 hover:text-gray-100">
                  <MessageCircle size={20} />
                  <span>15</span>
                </button>
                <button className="flex items-center gap-1 text-gray-300 hover:text-gray-100">
                  <Repeat2 size={20} />
                  <span>8</span>
                </button>
                <button className="flex items-center gap-1 text-gray-300 hover:text-gray-100">
                  <HeartIcon size={20} />
                  <span>34</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}