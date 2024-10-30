import Link from "next/link";

const NavLinks: React.FC = () => (
  <div className="flex">
    <Link
      href="/"
      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
      aria-current="page"
    >
      Dashboard
    </Link>
    <Link
      href="/team"
      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
    >
      Experience
    </Link>
    <Link
      href="/projects"
      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
    >
      Achievements
    </Link>
    <Link
      href="/calendar"
      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
    >
      Projects
    </Link>
    <Link
      href="/calendar"
      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
    >
      Education
    </Link>
    <Link
      href="/calendar"
      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
    >
      Social
    </Link>
  </div>
);

export default NavLinks;
