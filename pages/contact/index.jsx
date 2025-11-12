import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

import { fadeIn } from "../../variants";

const Contact = () => {

  return (
    <div className="min-h-screen xl:h-full bg-primary/30">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-20 xs:py-24 sm:py-28 md:py-32 lg:py-36 text-center xl:text-left flex items-center justify-center min-h-screen xl:h-full max-w-7xl">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-8 sm:mb-10 md:mb-12 px-4"
          >
            Let's create <span className="text-accent">viral content.</span>
          </motion.h2>

          {/* button */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-4 sm:gap-6 w-full mx-auto items-center justify-center"
          >
            <Link
              href="https://wa.me/917518608357"
              target="_blank"
              rel="noreferrer noopener"
              className="btn rounded-full border border-white/50 w-[140px] xs:w-[150px] sm:w-[170px] px-6 xs:px-7 sm:px-8 text-sm sm:text-base transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>

              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
