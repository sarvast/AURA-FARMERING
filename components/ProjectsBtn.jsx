import Image from "next/image";
import Link from "next/link";

import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/work"
        className="relative w-[140px] h-[140px] xs:w-[160px] xs:h-[160px] sm:w-[185px] sm:h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group cursor-pointer z-50"
      >
        <Image
          src="/rounded-text.png"
          alt="rounded text"
          width={141}
          height={148}
          className="animate-spin-slow w-full h-full max-w-[105px] max-h-[110px] xs:max-w-[120px] xs:max-h-[125px] sm:max-w-[141px] sm:max-h-[148px] pointer-events-none select-none"
        />
        <HiArrowRight
          className="absolute text-2xl xs:text-3xl sm:text-4xl group-hover:translate-x-2 transition-all duration-300"
          aria-hidden
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
