"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

/* AI magic gradient style */
const aiGradientStyle = {
  background: 'linear-gradient(135deg, #9C27B0, #7B1FA2, #673AB7, #3F51B5, #2196F3)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  animation: 'gradientFlow 3s linear infinite'
};

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const heroElement = heroRef.current;

        if (heroElement) {
          // Parallax effect for hero content
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
      className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-white z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center z-0 opacity-5"></div>

      {/* Hero content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 hero-content">
        <div className="flex flex-col items-center">
          {/* Main content - always on top */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="display-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6 leading-tight">
              Software that feels like <span className="font-bold" style={aiGradientStyle}>magic</span>
            </h1>

            <p className="subtitle text-base sm:text-lg md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto px-4 md:px-0">
              We craft intelligent software solutions that transform how businesses operate
              by leveraging the power of <span className="font-medium">AI</span>
            </p>

            <div className="flex flex-col sm:flex-row font-satoshi-medium items-center justify-center gap-4">
              <Link href="#solutions" className="btn btn-primary rounded-full px-6 py-3 w-full sm:w-auto text-center">
                Explore Solutions
              </Link>
              <Link href="#contact" className="btn btn-outline rounded-full px-6 py-3 w-full sm:w-auto text-center">
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Stats - explicitly below main content */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center bg-white/50 backdrop-blur-sm p-4 md:p-6 rounded-lg">
              <h3 className="text-2xl md:text-4xl font-medium mb-1 md:mb-2">98%</h3>
              <p className="text-xs md:text-sm text-gray-500">Client Satisfaction</p>
            </div>
            <div className="text-center bg-white/50 backdrop-blur-sm p-4 md:p-6 rounded-lg">
              <h3 className="text-2xl md:text-4xl font-medium mb-1 md:mb-2">50+</h3>
              <p className="text-xs md:text-sm text-gray-500">Projects Delivered</p>
            </div>
            <div className="text-center bg-white/50 backdrop-blur-sm p-4 md:p-6 rounded-lg">
              <h3 className="text-2xl md:text-4xl font-medium mb-1 md:mb-2">12+</h3>
              <p className="text-xs md:text-sm text-gray-500">Years Experience</p>
            </div>
            <div className="text-center bg-white/50 backdrop-blur-sm p-4 md:p-6 rounded-lg">
              <h3 className="text-2xl md:text-4xl font-medium mb-1 md:mb-2">24/7</h3>
              <p className="text-xs md:text-sm text-gray-500">Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
