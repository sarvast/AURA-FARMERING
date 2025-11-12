import { motion } from "framer-motion";

import TestimonialSlider from "../../components/TestimonialSlider";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <div className="min-h-screen xl:h-full bg-primary/30 pt-12 pb-24 xs:pt-14 xs:pb-26 sm:pt-16 sm:pb-28 md:pt-20 md:pb-32 lg:py-36 text-center">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 min-h-screen xl:h-full flex flex-col justify-start xl:justify-center max-w-7xl mt-8 xs:mt-10 sm:mt-12 md:mt-16 xl:mt-0">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-6 sm:mb-8 md:mb-10 xl:mb-0 px-4"
        >
          What clients <span className="text-accent">say.</span>
        </motion.h2>

        {/* slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
