import Link from "next/link";
import { usePathname } from "next/navigation";

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", Icon: HiHome },
  { name: "services", path: "/services", Icon: HiRectangleGroup },
  { name: "work", path: "/work", Icon: HiViewColumns },
  {
    name: "testimonials",
    path: "/testimonials",
    Icon: HiChatBubbleBottomCenterText,
  },
  {
    name: "contact",
    path: "/contact",
    Icon: HiEnvelope,
  },
];

const Nav = ({ navRef }) => {
  const pathname = usePathname();
  const isWorkPage = pathname === "/work";

  return (
    <nav ref={navRef} className="site-nav-fixed flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] 2xl:right-[3%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className={`flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-3 xs:px-4 sm:px-8 md:px-20 lg:px-32 xl:px-0 ${isWorkPage ? 'h-[60px] xs:h-[65px] py-3 xs:py-4' : 'h-[70px] xs:h-[80px] py-4 xs:py-6 sm:py-8'} xl:h-max xl:py-8 bg-white/10 backdrop-blur-sm text-2xl xs:text-3xl sm:text-3xl xl:text-xl xl:rounded-full`}>
        {navData.map((link, i) => (
          <Link
            className={`${
              link.path === pathname && "text-accent"
            } relative flex items-center group hover:text-accent transition-all duration-300`}
            href={link.path}
            key={i}
          >
            {/* tolltip */}
            <div
              role="tooltip"
              className="absolute pr-14 right-0 hidden xl:group-hover:flex"
            >
              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>

                {/* triangle */}
                <div
                  className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
                  aria-hidden
                />
              </div>
            </div>

            {/* icon */}
            <div>
              <link.Icon aria-hidden />
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
