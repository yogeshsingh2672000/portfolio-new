import Link from "next/link";

const NavLinks: React.FC = () => (
  <div className="flex">
    <Link
      href="#experience"
      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
    >
      Experience
    </Link>
    <Link
      href="#achievements"
      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
    >
      Achievements
    </Link>
    <Link
      href="#projects"
      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
    >
      Projects
    </Link>
    <Link
      href="#Education"
      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
    >
      Education
    </Link>
    <Link
      href="#footer"
      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
    >
      Social
    </Link>
  </div>
);

export default NavLinks;
