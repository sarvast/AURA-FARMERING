import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-primary/30 pt-6 xs:pt-8 sm:pt-12 md:pt-16 pb-32 xs:pb-36 sm:pb-40 md:pb-44 lg:pb-48">
      <Circles />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="flex flex-col xl:flex-row gap-x-6 lg:gap-x-8 xl:gap-x-10">
          {/* text */}
          <div 
            className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-6 sm:mb-8 md:mb-10 xl:mb-0 transition-opacity duration-300"
            style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
          >
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My <span className="text-accent">Portfolio</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-sm sm:text-base mb-4 sm:mb-6 max-w-[280px] xs:max-w-[320px] sm:max-w-[400px] mx-auto lg:mx-0"
            >
              Check out my latest video editing projects for Instagram Reels,
              YouTube Shorts, and viral social media content.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%] 2xl:max-w-[60%] mb-8 sm:mb-10 md:mb-12 xl:mb-0"
            style={{ transform: `translateY(-${Math.min(scrollY * 0.3, 80)}px)` }}
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <div style={{ opacity: Math.max(0, 1 - scrollY / 200) }}>
        <Bulb />
      </div>
    </div>
  );
};

export default Work;
