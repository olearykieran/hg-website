// components/HeroSection.tsx
import React from "react";
import Image from "next/image"; // Importing Image component from next/image
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[800px] overflow-hidden font-garamond">
      {/* Replace video with Image component */}
      <div className="absolute z-0 w-full h-full" style={{ opacity: 0.7 }}>
        <Image
          src="/minimalist-office-space.png"
          alt="Hero Image"
          fill // Adjusted for the new approach
          style={{ objectFit: "cover" }} // Ensure this complies with the latest handling by Next.js
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white mt-80">
        <h1 className="text-6xl font-arialBlack">Modern Software Solutions</h1>
        <p className="text-xl text-black font-sans my-4">
          Discover innovative technology for your business needs.
        </p>
        <Link href="#about" passHref>
          <button className="font-arialBlack bg-transparent border-2 border-white text-white rounded py-2 px-4 hover:bg-white hover:text-black transition duration-300 ease-in-out">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
