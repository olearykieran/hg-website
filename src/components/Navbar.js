"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

/* AI gradient styles */
const aiGradientStyle = {
  background: "linear-gradient(135deg, #9C27B0, #7B1FA2, #673AB7, #3F51B5, #2196F3)",
  backgroundSize: "200% auto",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  animation: "gradientFlow 3s linear infinite",
};

const gradientButtonStyle = {
  background: "linear-gradient(135deg, #9C27B0, #7B1FA2, #673AB7, #3F51B5, #2196F3)",
  backgroundSize: "200% auto",
  animation: "gradientFlow 3s linear infinite",
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active link based on scroll position
      const sections = ["solutions", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveLink(sections[i].charAt(0).toUpperCase() + sections[i].slice(1));
          return;
        }
      }

      setActiveLink("Home");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "#solutions" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-gray-900 shadow-sm py-2 md:py-3"
          : "bg-white dark:bg-gray-900 py-3 md:py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-14 w-14 md:h-20 md:w-20 mr-2">
            <Image
              src="/hgs_logo.png"
              alt="Holy Grail Studio"
              className="w-full h-full object-contain"
              width={80}
              height={80}
            />
          </div>
          <span className="text-base md:text-lg font-satoshi-medium tracking-tight text-gray-900 dark:text-white">
            Holy <span style={aiGradientStyle}>Grail</span> Studio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-satoshi-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200"
              style={activeLink === link.name ? aiGradientStyle : {}}
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href="#contact"
            className="rounded-full text-sm font-satoshi-medium px-6 py-2 text-white"
            style={gradientButtonStyle}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-sm transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-satoshi-medium py-3 border-b border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300"
              style={activeLink === link.name ? aiGradientStyle : {}}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="#contact"
              className="rounded-full py-3 text-center font-satoshi-medium w-full text-white"
              style={gradientButtonStyle}
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
