"use client";
import React, { useState, CSSProperties, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NoiseEffect from "./NoiseEffect";

type SolutionKey = "web" | "mobile" | "ai";

interface SolutionItem {
  title: string;
  description: string;
  features: string[];
  image: string;
}

type SolutionsData = {
  [key in SolutionKey]: SolutionItem;
};

interface Solution {
  title: string;
  description: string;
  features: string[];
  icon: string;
}

/* AI gradient styles */
const aiGradientStyle: CSSProperties = {
  background: "linear-gradient(135deg, #FFFFFF, #D3D3D3, #A9A9A9, #808080, #696969)",
  backgroundSize: "200% auto",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  animation: "gradientFlow 3s linear infinite",
};

const aiGradientBorder: CSSProperties = {
  position: "relative" as const,
  borderRadius: "1rem",
  padding: "1px",
  background: "linear-gradient(135deg, #5A5A5A, #404040, #2A2A2A, #1A1A1A, #0A0A0A)",
  backgroundSize: "200% auto",
  animation: "gradientFlow 3s linear infinite",
};

const Solutions = () => {
  const [activeTab, setActiveTab] = useState<SolutionKey>("ai");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const solutions: Solution[] = [
    {
      title: "Web Development",
      description: "Modern web applications built with cutting-edge technologies.",
      features: [
        "Responsive Design",
        "Performance Optimization",
        "SEO Best Practices",
        "Modern Frameworks",
      ],
      icon: "/icons/web.svg",
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications.",
      features: [
        "iOS & Android",
        "Cross-platform Solutions",
        "Performance Focused",
        "User-centric Design",
      ],
      icon: "/icons/mobile.svg",
    },
    {
      title: "AI Solutions",
      description: "Intelligent solutions powered by advanced AI.",
      features: [
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
      ],
      icon: "/icons/ai.svg",
    },
  ];

  const tabs = Object.keys(solutions) as SolutionKey[];

  return (
    <div className="bg-white dark:bg-gray-900 py-16 md:py-32" id="solutions">
      {/* Dark mode blurred background */}
      <div className="absolute inset-0 -z-10 hidden dark:block bg-[url('/download.jpeg')] bg-cover bg-center blur-sm"></div>

      {/* Solutions Header - Completely separate */}
      <div className="w-full flex flex-col items-center justify-center mb-16 md:mb-40">
        <div className="text-center w-full max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="display-text mb-6 md:mb-8 text-center text-gray-900 dark:text-white">
            <span className="text-custom-blue">Innovative</span> Solutions
          </h2>
          <p className="subtitle text-lg md:text-xl text-center text-gray-600 dark:text-gray-400">
            Intelligent software that helps businesses{" "}
            <span className="text-custom-blue">innovate</span> and grow.
          </p>
        </div>
      </div>

      {/* Noise Effect */}
      <NoiseEffect />

      {/* Solutions Content */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {solutions.map((solution: Solution, index: number) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-6 md:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-custom-blue/10 flex items-center justify-center mr-4">
                    <Image
                      src={solution.icon}
                      alt={solution.title}
                      width={24}
                      height={24}
                      className="text-custom-blue"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-satoshi-bold text-gray-900 dark:text-white">
                    {solution.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 font-satoshi-regular">
                  {solution.description}
                </p>
                <ul className="space-y-3">
                  {solution.features.map((feature: string, featureIndex: number) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-700 dark:text-gray-300 font-satoshi-regular"
                    >
                      <span className="text-custom-blue mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
