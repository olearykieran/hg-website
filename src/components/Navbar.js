"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarStyle, setNavbarStyle] = useState({
    opacity: 1,
    transition: "opacity 0.5s ease",
    position: "fixed", // Keep navbar fixed at the top of the viewport
    width: "100%", // Ensure navbar spans the width of the viewport
    zIndex: 10, // Make sure navbar stays on top of other content
    backgroundColor: "rgba(255, 255, 255, 0.0)", // Semi-transparent background; adjust as needed
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Adjust opacity based on the intersection
          if (entry.isIntersecting) {
            setNavbarStyle((prevState) => ({ ...prevState, opacity: 1 }));
          } else {
            setNavbarStyle((prevState) => ({ ...prevState, opacity: 0 }));
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.1, // This can be adjusted based on when you want the fade effect to start
      }
    );

    // Target element for IntersectionObserver
    const target = document.querySelector("#top-of-page");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <nav
      className="bg-light-black py-4 font-light"
      style={{ ...navbarStyle, fontFamily: "EB Garamond" }}
    >
      <div className="flex justify-between items-center px-4 mx-auto sm:px-8 max-w-screen-xl">
        <Link href="/" passHref>
          <span className="text-2xl cursor-pointer font-arialBlack ">
            Holy Grail Studio
          </span>
        </Link>
        <div className="font-arialBlack  sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <span>Menu</span> {/* Consider replacing with an icon */}
          </button>
        </div>
        <div className={`flex-row sm:flex ${isOpen ? "block" : "hidden"} sm:block`}>
          <Link href="#about" passHref>
            <span className="block px-4 font-arialBlack  cursor-pointer">About</span>
          </Link>
          <Link href="#our-work" passHref>
            <span className="block px-4 font-arialBlack  cursor-pointer">Our Work</span>
          </Link>
          <Link href="#contact" passHref>
            <span className="block px-4 font-arialBlack cursor-pointer">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
