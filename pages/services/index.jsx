import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

export const serviceData = [];

const Services = () => {
  return (
    <div className="min-h-screen xl:h-full bg-primary/30 pt-20 pb-28 xs:pt-24 xs:pb-32 sm:pt-28 sm:pb-36 md:pt-32 md:pb-40 lg:py-36 xl:py-36 flex items-center">
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
              className="h2 xl:mt-8"
            >
              Video Editing <span className="text-accent">Services</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-sm sm:text-base mb-4 sm:mb-6 max-w-[280px] xs:max-w-[320px] sm:max-w-[400px] mx-auto lg:mx-0"
            >
              Professional video editing services for Instagram Reels, YouTube Shorts,
              and TikTok content. Transform your raw footage into viral-ready content.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%] 2xl:max-w-[60%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
