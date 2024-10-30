import Link from "next/link";

const MobileMenu: React.FC = () => (
  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
      <Link
        href="/"
        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        aria-current="page"
      >
        Dashboard
      </Link>
      <Link
        href="/team"
        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        Experience
      </Link>
      <Link
        href="/projects"
        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        Award and Achievements
      </Link>
      <Link
        href="/calendar"
        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        Projects
      </Link>
      <Link
        href="/calendar"
        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        Education
      </Link>
      <Link
        href="/calendar"
        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        Social
      </Link>
    </div>
  </div>
);

export default MobileMenu;