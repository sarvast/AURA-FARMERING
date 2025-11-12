import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="min-h-screen bg-primary/30 pt-6 xs:pt-8 sm:pt-12 md:pt-16 pb-24 xs:pb-28 sm:pb-32 md:pb-36 lg:py-36 xl:h-full xl:flex xl:items-center xl:pb-0">
      <Circles />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="flex flex-col xl:flex-row gap-x-6 lg:gap-x-8 xl:gap-x-10">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-6 sm:mb-8 md:mb-10 xl:mb-0">
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
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
