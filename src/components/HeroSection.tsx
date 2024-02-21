"use client";

// components/HeroSection.tsx
import React, { useRef, useEffect } from "react";
import Link from "next/link";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 0.8; // Slows down the video
    }
    // Assuming the loop with edited video that includes reverse playback
  }, []);

  return (
    <div className="relative w-full h-[800px] overflow-hidden font-garamond">
      {" "}
      {/* Use Tailwind class for EB Garamond */}
      <video
        ref={videoRef}
        src="/holy-grail.mp4"
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none opacity-80"
        style={{
          width: "50%",

          objectFit: "cover",
          transform: "translate(-50%)",

          left: "50%",
        }}
        autoPlay
        muted
        loop
      />
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white mt-80">
        <h1 className="text-6xl font-arialBlack">Divine Software Solutions.</h1>
        <p className="text-xl my-4 font-sans font-roboto">
          {" "}
          {/* Use Tailwind class for Roboto */}
          Discover innovative technology for your business needs.
        </p>
        <Link href="#about" passHref>
          <button
            style={{
              width: "fit-content",
              backgroundColor: "rgba(0,0,0,0.1)",
              color: "white",
              border: "2px solid white",
              borderRadius: "0.25rem",
              padding: "0.75rem",
              cursor: "pointer",
            }}
            className="font-arialBlack"
          >
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
