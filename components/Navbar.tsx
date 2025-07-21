import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md rounded-lg">
      <div className="mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-white">
          ifty.dev
        </a>
        <div className="flex gap-6 text-white font-medium">
          <a href="/" className="hover:text-black">
            Home
          </a>
          <a href="#about" className="hover:text-black">
            About
          </a>
          <a href="#" className="hover:text-black">
            Projects
          </a>
          <a href="/contact" className="hover:text-black">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
