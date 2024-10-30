import React from "react";
import dynamic from "next/dynamic";
const LinkedIn = dynamic(() => import("@/app/ui/svg/linkedIn"));
const GitHub = dynamic(() => import("@/app/ui/svg/github"));
const Twitter = dynamic(() => import("@/app/ui/svg/twitter"));

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B192C] w-full bottom-0 md:flex justify-between p-8">
      <p className="mb-2 text-gray-300">
        © 2024 Yogesh Kumar. All rights reserved.
      </p>
      <div className="flex gap-6 justify-center">
        <LinkedIn />
        <GitHub />
        <Twitter />
      </div>
    </footer>
  );
};

export default Footer;
