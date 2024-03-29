"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const images = {
  first: "/logoo.png",
};

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
          <div className="flex items-center cursor-pointer">
            <div
              className="relative h-8 w-8 mr-2"
              style={{ opacity: 0.8, borderRadius: "10%" }}
            >
              <Image
                src={images.first}
                alt="Logo"
                fill // Adjusted for the new approach, ensuring the image fills the container
                style={{ objectFit: "contain", borderRadius: "20%" }} // Applied via a wrapping div or directly if compliant
              />
            </div>
            <span className="text-2xl font-arialBlack">Holy Grail Studio</span>
          </div>
        </Link>
        <div className="relative text-2xl  font-arialBlack sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <span>Menu</span> {/* Consider replacing with an icon */}
          </button>
          <div
            className={`absolute top-full flex flex-row right-0 bg-transparent px-2  border-4 gap-8 mt-6 shadow-md ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <Link href="#about" passHref>
              <span className="block sm:px-4 py-2 font-arialBlack cursor-pointer">
                About
              </span>
            </Link>
            <Link href="#our-work" passHref>
              <span className="block sm:px-4 py-2 font-arialBlack cursor-pointer">
                Projects
              </span>
            </Link>
            <Link href="#contact" passHref>
              <span className="block sm:px-4 py-2 font-arialBlack cursor-pointer">
                Contact
              </span>
            </Link>
          </div>
        </div>
        <div className="hidden sm:flex flex-row ">
          <Link href="#about" passHref>
            <span className="px-4 font-arialBlack cursor-pointer">About</span>
          </Link>
          <Link href="#our-work" passHref>
            <span className="px-4 font-arialBlack cursor-pointer">Projects</span>
          </Link>
          <Link href="#contact" passHref>
            <span className="px-4 font-arialBlack cursor-pointer">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
