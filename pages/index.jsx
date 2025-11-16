import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-screen overflow-hidden">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center px-4 sm:px-6 md:px-8 pt-16 sm:pt-20 md:pt-24 xl:pt-32 xl:text-left h-full container mx-auto max-w-7xl">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Creating Viral <br /> Content for{" "}
            <span className="text-accent">Social Media</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-sm sm:text-base max-w-[280px] xs:max-w-sm sm:max-w-md md:max-w-lg xl:max-w-xl mx-auto xl:mx-0 mb-8 sm:mb-10 xl:mb-16 px-4 xl:px-0"
          >
            Professional video editor specializing in Instagram Reels and YouTube Shorts.
            I transform your raw footage into engaging, viral-ready content that
            captures attention and drives engagement across all social platforms.
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-full max-w-[1280px] h-full absolute right-0 bottom-0 overflow-hidden pointer-events-none">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[737px] max-h-[400px] sm:max-h-[500px] md:max-h-[600px] xl:max-h-[678px] absolute top-[50%] sm:top-[45%] md:top-[40%] lg:top-auto lg:bottom-0 -right-[20%] sm:-right-[15%] md:-right-[10%] lg:right-[5%] xl:right-[8%] z-10"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
