import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
const LinkedIn = dynamic(() => import("@/app/ui/svg/linkedIn"));
const GitHub = dynamic(() => import("@/app/ui/svg/github"));
const Twitter = dynamic(() => import("@/app/ui/svg/twitter"));

const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="bg-[#0B192C] w-full bottom-0 md:flex justify-between p-8"
    >
      <p className="mb-2 text-gray-300">
        © 2024 Yogesh Kumar. All rights reserved.
      </p>
      <div className="flex gap-6 justify-center">
        <Link
          href="https://www.linkedin.com/in/yogesh-krr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </Link>
        <Link
          href="https://github.com/yogeshsingh2672000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </Link>
        <Link
          href="https://x.com/YogeshKrr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
