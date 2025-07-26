"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "TACTICAL SOFTWARE DEPLOYMENT";

  useEffect(() => {
    setIsVisible(true);

    // Typewriter effect
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const heroElement = heroRef.current;

        if (heroElement) {
          const heroContent = heroElement.querySelector(".hero-content") as HTMLElement;
          if (heroContent) {
            heroContent.style.transform = `translateY(${scrollY * 0.2}px)`;
            heroContent.style.opacity = `${1 - scrollY * 0.002}`;
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-32 md:pt-20 overflow-hidden bg-mgs-black mgs-grid-bg"
    >
      {/* Scanline effect */}
      <div className="mgs-scanline" />

      {/* Background noise */}
      <div className="absolute inset-0 mgs-noise opacity-30" />

      {/* Hero content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 hero-content mt-16 md:mt-0">
        <div className="flex flex-col items-center">
          {/* Tactical Header */}
          <div
            className={`mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mgs-codec px-8 py-4 bg-mgs-black/80 backdrop-blur">
              <p className="text-mgs-green font-mgs2-menu text-sm tracking-widest uppercase">
                Mission Briefing
              </p>
              <h2 className="text-mgs-white/60 font-tactical text-xs mt-1">
                {typedText}
                <span className="animate-pulse">_</span>
              </h2>
            </div>
          </div>

          {/* Main content */}
          <div
            className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="display-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 md:mb-6 leading-tight text-mgs-white">
              HOLY GRAIL STUDIO
            </h1>

            <div className="relative inline-block mb-8">
              <p className="subtitle text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4 md:px-0">
                <span className="text-mgs-green">CODENAME:</span>{" "}
                <span className="text-mgs-white/80">Fast. Functional. Beautiful.</span>
              </p>
              <p className="text-mgs-green text-xs sm:text-sm mt-2 font-tactical uppercase tracking-wider">
                [ TACTICAL SOFTWARE DEVELOPMENT ]
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#solutions"
                className="btn btn-primary w-full sm:w-auto text-center relative group overflow-hidden"
              >
                <span className="relative z-10">ENGAGE MISSION</span>
                <div className="absolute inset-0 bg-gradient-to-r from-mgs-green to-mgs-green-dark transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </Link>
              <Link
                href="#contact"
                className="btn btn-outline w-full sm:w-auto text-center mgs-codec"
              >
                CODEC FREQUENCY
              </Link>
            </div>
          </div>

          {/* Stats - MGS style data display */}
          <div
            className={`w-full transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-mgs-black/80 backdrop-blur border-2 border-mgs-green p-6">
              <h3 className="text-mgs-green font-mgs2-menu text-lg mb-4 uppercase tracking-widest">
                Operational Statistics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center bg-mgs-dark-gray/50 backdrop-blur-sm p-4 md:p-6 border border-mgs-gray">
                  <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 text-mgs-green font-mgs2-menu">
                    4+
                  </div>
                  <p className="text-xs md:text-sm text-mgs-white/60 font-tactical uppercase">
                    Years Active
                  </p>
                </div>
                <div className="text-center bg-mgs-dark-gray/50 backdrop-blur-sm p-4 md:p-6 border border-mgs-gray">
                  <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 text-mgs-green font-mgs2-menu">
                    20+
                  </div>
                  <p className="text-xs md:text-sm text-mgs-white/60 font-tactical uppercase">
                    Ops Complete
                  </p>
                </div>
                <div className="text-center bg-mgs-dark-gray/50 backdrop-blur-sm p-4 md:p-6 border border-mgs-gray mgs-alert">
                  <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 text-mgs-red font-mgs2-menu">
                    24/7
                  </div>
                  <p className="text-xs md:text-sm text-mgs-white/60 font-tactical uppercase">
                    Alert Status
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corner UI elements for extra MGS feel */}
      <div className="absolute top-20 left-4 text-mgs-green/40 font-mgs2-menu text-xs">
        <p>VR TRAINING</p>
        <p>LEVEL 01</p>
      </div>
      <div className="absolute bottom-4 right-4 text-mgs-green/40 font-mgs2-menu text-xs text-right">
        <p>SIGNAL: OPTIMAL</p>
        <p>FPS: 60.00</p>
      </div>
    </section>
  );
};

export default HeroSection;
