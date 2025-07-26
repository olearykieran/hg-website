"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Solution {
  title: string;
  description: string;
  features: string[];
  icon: string;
  codename: string;
}

const Solutions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const solutions: Solution[] = [
    {
      title: "Web Development",
      codename: "OPERATION: WEB SNAKE",
      description: "Tactical web deployment with stealth optimization.",
      features: [
        "Responsive Infiltration",
        "Performance Enhancement",
        "SEO Reconnaissance",
        "Framework Arsenal",
      ],
      icon: "/icons/web.svg",
    },
    {
      title: "Mobile Development",
      codename: "OPERATION: PORTABLE OPS",
      description: "Cross-platform mobile operations for maximum reach.",
      features: [
        "iOS & Android Deployment",
        "Cross-platform Tactics",
        "Performance Protocol",
        "User-centric Strategy",
      ],
      icon: "/icons/mobile.svg",
    },
    {
      title: "AI Solutions",
      codename: "OPERATION: LIQUID AI",
      description: "Advanced AI systems for next-gen operations.",
      features: [
        "Machine Learning Core",
        "Language Processing Unit",
        "Computer Vision Module",
        "Predictive Analytics Engine",
      ],
      icon: "/icons/ai.svg",
    },
  ];

  return (
    <div ref={sectionRef} className="relative bg-mgs-black py-16 md:py-32 overflow-x-hidden" id="solutions">
      {/* MGS Grid Background */}
      <div className="absolute inset-0 mgs-grid-bg opacity-20" />
      <div className="absolute inset-0 mgs-noise opacity-10" />

      {/* Scanline effect */}
      <div className="mgs-scanline" />

      {/* Solutions Header */}
      <div
        className={`w-full flex flex-col items-center justify-center mb-16 md:mb-24 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center w-full max-w-5xl mx-auto px-4 md:px-6">
          {/* MGS Codec Header */}
          <div className="inline-block mb-8">
            <div className="mgs-codec px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-mgs-black/80 backdrop-blur">
              <p className="text-mgs-green font-mgs2-menu text-xs sm:text-sm tracking-wide sm:tracking-widest uppercase">
                Mission Capabilities
              </p>
              <h2 className="text-mgs-white/60 font-tactical text-xs mt-1 uppercase">
                Tactical Solutions Division
              </h2>
            </div>
          </div>

          <h2 className="display-text mb-6 md:mb-8 text-center text-mgs-white">
            OPERATIONAL <span className="text-mgs-green">SOLUTIONS</span>
          </h2>
          <p className="subtitle text-lg md:text-xl text-center">
            Deploying tactical software solutions for{" "}
            <span className="text-mgs-green">maximum effectiveness</span>
          </p>
        </div>
      </div>

      {/* Solutions Content */}
      <div className="w-full px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {solutions.map((solution: Solution, index: number) => (
              <div
                key={index}
                className={`group relative transition-all duration-700 delay-${
                  index * 200
                } ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                {/* Card with MGS styling */}
                <div className="relative bg-mgs-dark-gray/80 backdrop-blur border-2 border-mgs-gray hover:border-mgs-green transition-all duration-300 p-4 sm:p-6 md:p-8">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-mgs-green/0 to-mgs-green/0 group-hover:from-mgs-green/10 group-hover:to-transparent transition-all duration-500" />

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16">
                    <div className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-mgs-green/50 group-hover:border-mgs-green transition-colors duration-300" />
                  </div>

                  <div className="relative z-10">
                    {/* Icon and Title */}
                    <div className="flex items-start mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-mgs-green/10 border border-mgs-green/50 flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-mgs-green/20 transition-colors duration-300">
                        <Image
                          src={solution.icon}
                          alt={solution.title}
                          width={24}
                          height={24}
                          className="filter brightness-0 invert opacity-60"
                        />
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-mgs2-menu text-mgs-white uppercase tracking-normal">
                          {solution.title}
                        </h3>
                        <p className="text-xs text-mgs-green font-mgs2-menu uppercase mt-1">
                          {solution.codename}
                        </p>
                      </div>
                    </div>

                    <p className="text-mgs-white/70 mb-6 font-roboto text-sm leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Features list with MGS style */}
                    <ul className="space-y-3">
                      {solution.features.map((feature: string, featureIndex: number) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-mgs-white/60 font-roboto text-sm group-hover:text-mgs-white/80 transition-colors duration-300"
                        >
                          <span className="text-mgs-green mr-3 text-lg">▸</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* MGS Status indicator */}
                    <div className="mt-6 pt-4 border-t border-mgs-gray/50">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-mgs-green/60 font-mgs2-menu uppercase">
                          Status: Active
                        </span>
                        <span className="text-mgs-white/40 font-mgs2-menu">
                          LV.{index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-mgs-green/50 to-transparent" />
    </div>
  );
};

export default Solutions;
