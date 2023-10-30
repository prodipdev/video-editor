import Link from "next/link";
import { HiMiniSquare2Stack } from "react-icons/hi2";
import { MdPeopleAlt } from "react-icons/md";

const Topbar = () => {
  return (
    <nav className="flex justify-between items-center py-2 border-b-2 border-dotted">
      <Link href="/">
        <HiMiniSquare2Stack className="text-blue-300 text-3xl" />
      </Link>
      <div className="flex items-center gap-10 font-semibold">
        <div className="flex items-center gap-1">
          <MdPeopleAlt className="text-2xl" /> Share
        </div>
        <button className="px-2 rounded-full bg-blue-200 text-blue-600">
          PRO
        </button>
      </div>
    </nav>
  );
};

export default Topbar;
