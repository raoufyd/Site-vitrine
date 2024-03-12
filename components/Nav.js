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
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

import Link from "next/link";
import { useRouter } from "next/router";
const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-2 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-8 md:px-40 xl:px-0 h-[50px] py-8 bg-white/10 xl:h-max backdrop-blur-sm text-3xl xl:text-xl rounded-full ">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && "text-accent"
              } hover:text-accent relative flex items-center group  transition-all duration-300`} //transition-all duration-300
              key={link.name}
              href={link.path}
            >
              <div className="absolute pr-14 xlm:bottom-[50px]  xl:right-0 hidden group-hover:flex xl:animate-openlabel animate-openlabel2 ">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                </div>
              </div>
              {link.icon}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
