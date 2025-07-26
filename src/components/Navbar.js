"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSoundContext } from "@/components/SoundProvider";

/* AI gradient styles - Removed as no longer used in this file */
// const aiGradientStyle = {
//   background: "linear-gradient(135deg, #FFFFFF, #D3D3D3, #A9A9A9, #808080, #696969)",
//   backgroundSize: "200% auto",
//   WebkitBackgroundClip: "text",
//   WebkitTextFillColor: "transparent",
//   backgroundClip: "text",
//   animation: "gradientFlow 3s linear infinite",
// };

const mgsButtonStyle = {
  background: "hsl(var(--mgs-green))",
  border: "2px solid hsl(var(--mgs-green))",
  color: "hsl(var(--mgs-black))",
  fontFamily: "'MGS2 Menu', sans-serif",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  position: "relative",
  overflow: "hidden",
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const { playSound, toggleMute, isMuted } = useSoundContext();

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
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 mgs-noise ${
        scrolled
          ? "bg-mgs-black/95 backdrop-blur-sm border-b-2 border-mgs-green py-2 md:py-3"
          : "bg-mgs-black/90 backdrop-blur-sm py-3 md:py-5"
      }`}
    >
      <div className="w-full px-8 lg:px-12 xl:px-16 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center group"
          onClick={() => playSound("return")}
        >
          <div className="relative h-16 w-16 md:h-20 md:w-20 mr-3 overflow-hidden mgs-codec">
            <Image
              src="/logos/HGS-mgs-logo.png"
              alt="Holy Grail Studio"
              className="w-full h-full object-contain"
              width={80}
              height={80}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base md:text-lg font-mgs2-menu tracking-wide sm:tracking-widest text-mgs-green uppercase">
              Holy Grail
            </span>
            <span className="text-xs md:text-sm font-tactical tracking-wider text-mgs-white/80 uppercase">
              Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-mgs2-menu uppercase tracking-wider transition-all duration-200 relative ${
                activeLink === link.name
                  ? "text-mgs-green" // Active state color
                  : "text-mgs-white/80 hover:text-mgs-green" // Default state color
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-mgs-green after:transform after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                activeLink === link.name ? "after:scale-x-100" : ""
              }`}
              onClick={() => playSound("dropdown")}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Mute Button */}
          <button
            onClick={toggleMute}
            className="p-2 text-mgs-white/80 hover:text-mgs-green transition-colors duration-200"
            aria-label={isMuted ? "Unmute sounds" : "Mute sounds"}
          >
            {isMuted ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="23" y1="9" x2="17" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="17" y1="9" x2="23" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.07 4.93C20.9447 6.80453 21.9979 9.34836 21.9979 12C21.9979 14.6516 20.9447 17.1955 19.07 19.07M15.54 8.46C16.4774 9.39764 17.0039 10.6692 17.0039 11.995C17.0039 13.3208 16.4774 14.5924 15.54 15.53" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
          
          <Link
            href="#contact"
            className="text-sm px-6 py-2 transition-all duration-300 hover:shadow-glow-green"
            style={mgsButtonStyle}
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-mgs-green-dark transform scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
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
        className={`md:hidden absolute top-full left-0 w-full bg-mgs-black/95 backdrop-blur-md border-b-2 border-mgs-green shadow-lg transition-all duration-300 overflow-hidden mgs-noise ${
          mobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4 relative z-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-mgs2-menu uppercase tracking-wider py-3 border-b border-mgs-gray/30 transition-colors duration-200 ${
                activeLink === link.name
                  ? "text-mgs-green"
                  : "text-mgs-white/80 hover:text-mgs-green"
              }`}
              onClick={() => {
                playSound("dropdown");
                setMobileMenuOpen(false);
              }}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="#contact"
              className="inline-block text-[10px] py-2.5 px-4 text-center w-auto mx-auto transition-all duration-300"
              style={mgsButtonStyle}
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
