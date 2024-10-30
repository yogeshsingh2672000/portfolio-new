"use client";
import { useState } from "react";
import NavLinks from "@/app/ui/navLinks";
import MenuButton from "@/app/ui/menuButton";
import MobileMenu from "@/app/ui/mobileMenu";
import UserMenu from "@/app/ui/userMenu";

import useScrollVisibility from "@/hooks/useScrollVisibility";
import useDevice from "@/hooks/useDevice";
import Link from "next/link";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isVisible = useScrollVisibility();
  const { isTablet } = useDevice();
  const navLogoLabel = isTablet ? "Yogesh Kumar" : "YK";

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav
      className={`bg-[#0B192C] fixed top-0 left-0 w-full transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <MenuButton
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
          />
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center font-bold">
              <Link href="#hero">{navLogoLabel}</Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <NavLinks />
            </div>
          </div>
          <UserMenu />
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && <MobileMenu />}
    </nav>
  );
}

export default Navbar;
