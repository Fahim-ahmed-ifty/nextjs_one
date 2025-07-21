import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md rounded-lg">
      <div className="mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white">
          ifty.dev
        </Link>
        <div className="flex gap-6 text-white font-medium">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <a href="#about" className="hover:text-black">
            About
          </a>
          <a href="#" className="hover:text-black">
            Projects
          </a>
          <Link href="/contact" className="hover:text-black">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
