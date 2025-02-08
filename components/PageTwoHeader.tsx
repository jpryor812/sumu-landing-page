'use client';

import { motion } from 'framer-motion';

export default function PageTwoHeader() {
    return (
        <div className="flex justify-center flex-col pt-8 px-12">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.5,
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
                    duration:1.5,
                    ease: "easeOut"
                }}
            className ="text-white md:text-5xl flex justify-end lg:text-7xl font-semibold">
                <h5>As It Always Should Have Been</h5>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 60}}
                whileInView={{ opacity: 1, y: 0}}
                viewport={{ once: true }}
                transition={{
                    duration:1.5,
                    delay: 1.5,
                    ease: "easeOut"
                }}
                className= "text-9xl text-center text-green py-32">
                <h6>What Do We Mean? 🤔</h6>
            </motion.div>



        
        </div>
    );
}