'use client';

import { motion, useScroll, animate } from 'framer-motion';
import Image from 'next/image';
import { useRef, useEffect } from 'react';

export default function PageTwoHeader() {
    const targetRef = useRef(null);
    const rotationComplete = useRef(false);
    
    const { scrollYProgress, scrollY } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", async (latest) => {
            if (latest > 0 && !rotationComplete.current) {
                // Prevent default scroll
                document.body.style.overflow = 'hidden';
                
                // Perform rotation animation
                await animate(".logo-image", 
                    { rotate: 720 }, // Two full rotations (360 * 2)
                    { 
                        duration: 2,
                        ease: "easeOut"
                    }
                );
                
                // Re-enable scrolling
                document.body.style.overflow = 'auto';
                rotationComplete.current = true;
            }
        });

        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <div ref={targetRef} className="flex justify-center flex-col pt-8 px-12">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.2,
                    ease: "easeOut"
                }}
                className="text-white md:text-5xl lg:text-7xl font-semibold"
            >
                <h5>The New Creator Economy</h5>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 60}}
                whileInView={{ opacity: 1, y: 0}}
                viewport={{ once: true }}
                transition={{
                    duration:1.2,
                    ease: "easeOut"
                }}
                className="text-white md:text-5xl flex justify-end lg:text-7xl font-semibold">
                <h5>As It Always Should Have Been</h5>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 60}}
                whileInView={{ opacity: 1, y: 0}}
                viewport={{ once: true }}
                transition={{
                    duration:1.2,
                    delay: 1.2,
                    ease: "easeOut"
                }}
                className="text-7xl font-semibold text-center text-green pt-16 pb-12">
                <h6>How Does It Work? 🤔</h6>
                
                {/* Here's the modified Image section */}
                <div className="relative w-[290px] h-[290px] mx-auto mt-12 border-4 border-gray-500 rounded-full flex items-center justify-center">
                <div className="relative w-[280px] h-[280px] mx-auto border-2 border-black rounded-full flex items-center justify-center bg-black">
                    <motion.div
                        className="logo-image absolute"  // Made absolute to prevent affecting the circle
                    >
                        <Image
                            src="/Sumu-logo-vert.png"
                            alt="Sumu Logo"
                            width={260}
                            height={260}
                        />
                    </motion.div>
                </div>
                </div>
            </motion.div>
        </div>
        
    );
}