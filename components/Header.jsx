import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Socials from "../components/Socials";

const Header = () => {
  const pathname = usePathname();
  const isWorkPage = pathname === "/work";

  if (isWorkPage) return null;

  return (
    <header className="absolute z-30 w-full items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-0 xl:h-[90px] pointer-events-none">
      <div className="container mx-auto max-w-7xl pointer-events-auto">
        <div className="flex flex-col sm:flex-row lg:flex-row justify-between items-center gap-y-3 sm:gap-y-4 lg:gap-y-6 py-3 sm:py-4 md:py-6 lg:py-8">
          {/* logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <div className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-bold text-white whitespace-nowrap">
              SUNNY <span className="text-accent">EDITORX</span>
            </div>
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
