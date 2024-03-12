import Link from "next/link";
import {
  RiDribbbleLine,
  RiFacebookLine,
  RiInstagramLine,
  RiYoutubeLine,
} from "react-icons/ri";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg  xlm:mt-4 ">
      <Link
        href={""}
        className="hover:text-accent transition-all duration-300 "
      >
        <RiYoutubeLine size={30} />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine size={30} />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine size={30} />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiDribbbleLine size={30} />
      </Link>
    </div>
  );
};

export default Socials;
