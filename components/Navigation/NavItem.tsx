"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavItemProps {
  children: React.ReactNode;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ children, href }) => {
  const pathname = usePathname();

  return (
    <Link
      className={`
        p-2 px-10 max-lg:px-6 rounded-xl shadow-xl text-center
        ${
          pathname.startsWith(href)
            ? "hover:bg-gradient-to-r hover:from-violet-800/70 hover:to-violet-500/60 bg-gradient-to-r from-violet-500 to-violet-800 "
            : "border-2 hover:bg-gray-600/50"
        }`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavItem;
