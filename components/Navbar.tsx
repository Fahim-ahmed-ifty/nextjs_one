"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleAboutClick = () => {
    setMenuOpen(false);
    if (pathname !== "/") {
      sessionStorage.setItem("scrollTo", "about");
      router.push("/");
    } else {
      const section = document.getElementById("about");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Close menu on clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Scroll to section if needed on page load
  useEffect(() => {
    const target = sessionStorage.getItem("scrollTo");
    if (target) {
      sessionStorage.removeItem("scrollTo");

      const scrollToSection = () => {
        const section = document.getElementById(target);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        } else {
          setTimeout(scrollToSection, 100);
        }
      };

      scrollToSection();
    }
  }, []);

  return (
    <nav className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md rounded-lg">
      <div className="mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
        <Link href="/" className="text-xl font-bold text-white">
          ifty.dev
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-white font-medium">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <button onClick={handleAboutClick} className="hover:text-black">
            About
          </button>
          <Link href="/education" className="hover:text-black">
            Education
          </Link>
          <Link href="/projects" className="hover:text-black">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-black">
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            ref={menuRef}
            className="absolute top-16 right-4 w-48 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg flex flex-col py-4 px-6 space-y-4 text-white font-medium md:hidden"
          >
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-black"
            >
              Home
            </Link>
            <button
              onClick={handleAboutClick}
              className="text-left hover:text-black"
            >
              About
            </button>
            <Link
              href="/education"
              onClick={() => setMenuOpen(false)}
              className="hover:text-black"
            >
              Education
            </Link>
            <Link
              href="/projects"
              onClick={() => setMenuOpen(false)}
              className="hover:text-black"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-black"
            >
              Contact
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-sm text-right text-gray-300 hover:text-white"
            >
              Close ✕
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
