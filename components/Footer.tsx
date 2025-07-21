import React from "react";
import Link from "next/link";
import { Facebook, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col space-y-3 items-center md:items-start">
          <Link href="/" className="hover:text-black hover:font-bold">
            Home
          </Link>
          <a href="#about" className="hover:text-black hover:font-bold">
            About
          </a>
          <a href="#" className="hover:text-black hover:font-bold">
            Projects
          </a>
          <Link href="/contact" className="hover:text-black hover:font-bold">
            Contact
          </Link>
        </div>

        <div className="text-center md:text-left">
          <p className="text-lg font-semibold mb-2">
            Subscribe to our newsletter
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:items-stretch bg-white/60 rounded-md p-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded-md text-black outline-none w-full sm:w-auto sm:flex-1"
            />
            <button className="mt-2 sm:mt-0 sm:ml-2 bg-black text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end space-y-3">
          <p className="text-lg font-semibold">Follow Me</p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/fahim.ahmed.ifty.2025">
              <Facebook className="w-5 h-5 hover:text-black" />
            </a>
            <a href="https://bd.linkedin.com/in/fahim-ahmed-ifty-a8b9622b6">
              <Linkedin className="w-5 h-5 hover:text-black" />
            </a>
            <a href="https://github.com/Fahim-ahmed-ifty">
              <Github className="w-5 h-5 hover:text-black" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center py-4 border-t border-white/30 text-sm">
        © {new Date().getFullYear()} Fahim Ahmed Ifty. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
