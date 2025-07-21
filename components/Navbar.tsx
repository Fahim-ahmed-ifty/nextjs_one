import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md rounded-lg">
      <div className="mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-xl font-bold text-white">ifty.dev</div>
        <div className="flex gap-6 text-white font-medium">
          <a href="#" className="hover:text-indigo-600">
            Home
          </a>
          <a href="#" className="hover:text-indigo-600">
            About
          </a>
          <a href="#" className="hover:text-indigo-600">
            Projects
          </a>
          <a href="#" className="hover:text-indigo-600">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
