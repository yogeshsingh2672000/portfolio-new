import React from "react";

interface MenuButtonProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  isMobileMenuOpen,
  toggleMobileMenu,
}) => (
  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    <button
      type="button"
      className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      aria-controls="mobile-menu"
      aria-expanded={isMobileMenuOpen}
      onClick={toggleMobileMenu}
    >
      <span className="absolute -inset-0.5"></span>
      <span className="sr-only">Open main menu</span>
      <svg
        className={`h-6 w-6 ${isMobileMenuOpen ? "hidden" : "block"}`}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <svg
        className={`h-6 w-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
);

export default MenuButton;
