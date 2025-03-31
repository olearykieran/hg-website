"use client";
import React, { useState, CSSProperties, useRef, useEffect } from "react";
import Link from "next/link";

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

/* AI gradient styles */
const aiGradientStyle: CSSProperties = {
  background: 'linear-gradient(135deg, #9C27B0, #7B1FA2, #673AB7, #3F51B5, #2196F3)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  animation: 'gradientFlow 3s linear infinite'
};

const aiGradientBorder: CSSProperties = {
  position: 'relative' as const,
  borderRadius: '1rem',
  padding: '1px',
  background: 'linear-gradient(135deg, #9C27B0, #7B1FA2, #673AB7, #3F51B5, #2196F3)',
  backgroundSize: '200% auto',
  animation: 'gradientFlow 3s linear infinite'
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

  const solutions: SolutionsData = {
    web: {
      title: "Web Applications",
      description: "Custom web solutions with clean design and intelligent features.",
      features: [
        "Responsive interfaces",
        "AI personalization",
        "Real-time processing",
        "Third-party integrations",
        "Analytics dashboards",
      ],
      image: "/webapp.png",
    },
    mobile: {
      title: "Mobile Applications",
      description: "Native and cross-platform apps that adapt to user behavior.",
      features: [
        "iOS and Android",
        "Intelligent UX",
        "Offline functionality",
        "Push notifications",
        "Biometric authentication",
      ],
      image: "/mobile.png",
    },
    ai: {
      title: "AI Integration",
      description: "Enhance existing systems with intelligent capabilities.",
      features: [
        "Custom model development",
        "System augmentation",
        "Intelligent automation",
        "Natural language interfaces",
        "Computer vision",
      ],
      image: "/ai_stuff.png",
    },
  };

  const tabs = Object.keys(solutions) as SolutionKey[];

  return (
    <div className="bg-white py-16 md:py-32" id="solutions">
      {/* Solutions Header - Completely separate */}
      <div className="w-full flex flex-col items-center justify-center mb-16 md:mb-40">
        <div className="text-center w-full max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="display-text mb-6 md:mb-8 text-center">
            <span style={aiGradientStyle}>Innovative</span> Solutions
          </h2>
          <p className="subtitle text-lg md:text-xl text-center">
            Intelligent software that helps businesses <span style={aiGradientStyle}>innovate</span> and grow.
          </p>
        </div>
      </div>

      {/* Solutions Content - Completely separate section */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
            {/* Left column - Tabs */}
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-32">
                <h3 className="text-lg md:text-xl font-satoshi-medium mb-6 md:mb-10 text-gray-500 text-center">
                  Our Offerings
                </h3>
                {/* Mobile dropdown for solutions */}
                <div className="lg:hidden mb-8" ref={dropdownRef}>
                  <div className="relative">
                    <button
                      className="w-full px-4 py-3 rounded-xl text-lg font-satoshi-medium bg-gray-50 text-gray-700 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black flex justify-between items-center"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <span>{solutions[activeTab].title}</span>
                      <svg 
                        className={`w-5 h-5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {isDropdownOpen && (
                      <div className="absolute z-10 mt-1 w-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                        {tabs.map((tab) => (
                          <button
                            key={tab}
                            className={`w-full text-left px-4 py-3 text-lg font-satoshi-medium transition-colors ${
                              activeTab === tab
                                ? "bg-gray-100 text-black"
                                : "text-gray-700 hover:bg-gray-50"
                            }`}
                            onClick={() => {
                              setActiveTab(tab);
                              setIsDropdownOpen(false);
                            }}
                          >
                            {solutions[tab].title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Desktop tabs */}
                <div className="hidden lg:flex lg:flex-col space-y-4">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      className={`text-left px-6 py-4 rounded-xl text-lg font-satoshi-medium transition-all duration-300 ${
                        activeTab === tab
                          ? "bg-black text-white"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {solutions[tab].title}
                    </button>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-10 md:mt-16 bg-gray-50 p-6 md:p-8 rounded-2xl" style={activeTab === "ai" ? aiGradientBorder : {}}>
                  <div className={activeTab === "ai" ? "bg-white rounded-xl p-6 md:p-8" : ""}>
                    <h3 className="text-lg md:text-xl font-satoshi-bold mb-3 md:mb-4">
                      Ready to transform your business?
                    </h3>
                    <p className="text-gray-600 mb-4 md:mb-6 font-satoshi-regular text-sm md:text-base">
                      Get in touch to discuss how we can help you achieve your goals.
                    </p>
                    <Link
                      href="#contact"
                      className="btn btn-primary rounded-full px-6 py-2 md:px-8 md:py-3 inline-block font-satoshi-medium text-sm md:text-base"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Content */}
            <div className="lg:col-span-9">
              <div className="bg-gray-50 rounded-3xl p-6 md:p-12" style={activeTab === "ai" ? aiGradientBorder : {}}>
                <div className={activeTab === "ai" ? "bg-white rounded-2xl p-6 md:p-12" : ""}>
                  <div className="flex flex-col items-center mb-8 md:mb-12">
                    <h3 className="text-2xl md:text-3xl font-satoshi-bold tracking-tight text-center mb-4">
                      {activeTab === "ai" ? (
                        <span style={aiGradientStyle}>{solutions[activeTab].title}</span>
                      ) : (
                        solutions[activeTab].title
                      )}
                    </h3>
                    <img
                      src={solutions[activeTab].image}
                      alt={solutions[activeTab].title}
                      className="w-12 h-12 md:w-16 md:h-16 object-contain"
                    />
                  </div>

                  <p className="text-gray-700 font-satoshi-regular mb-8 md:mb-12 text-lg md:text-xl leading-relaxed">
                    {solutions[activeTab].description}
                  </p>

                  <div className="border-t border-gray-200 pt-6 md:pt-10">
                    <h4 className="text-lg md:text-xl font-satoshi-bold mb-6 md:mb-8">
                      {activeTab === "ai" ? (
                        <span style={aiGradientStyle}>Key Features</span>
                      ) : (
                        "Key Features"
                      )}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-4 md:gap-y-6">
                      {solutions[activeTab].features.map(
                        (feature: string, index: number) => (
                          <div key={index} className="flex items-start">
                            <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0 ${
                              activeTab === "ai" ? "bg-gradient-to-br from-purple-600 to-blue-500" : "bg-black"
                            }`} style={activeTab === "ai" ? {
                              background: 'linear-gradient(135deg, #9C27B0, #7B1FA2, #673AB7, #3F51B5, #2196F3)',
                              backgroundSize: '200% auto',
                              animation: 'gradientFlow 3s linear infinite'
                            } : {}}>
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="md:w-4 md:h-4"
                              >
                                <path
                                  d="M11.6667 3.5L5.25 9.91667L2.33333 7"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <span className="font-satoshi-medium text-gray-800 text-base md:text-lg pt-0 md:pt-1">
                              {feature}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="mt-10 md:mt-16">
                    <Link
                      href="#contact"
                      className="text-black font-satoshi-bold flex items-center group text-base md:text-lg"
                    >
                      Learn more about {solutions[activeTab].title.toLowerCase()}
                      <svg
                        className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Case studies teaser */}
              <div className="mt-10 md:mt-16">
                <h4 className="text-lg md:text-xl font-satoshi-bold mb-4 md:mb-6">
                  Related Case Studies
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="bg-white border border-gray-100 rounded-xl p-5 md:p-6 hover:shadow-md transition-shadow">
                    <span className="text-xs md:text-sm font-satoshi-medium text-gray-500 mb-1 md:mb-2 block">
                      Case Study
                    </span>
                    <h5 className="text-base md:text-lg font-satoshi-bold mb-2 md:mb-3">
                      Transforming customer experience for a fintech startup
                    </h5>
                    <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                      How we helped increase conversion rates by 43% with <span style={aiGradientStyle}>AI-powered</span> personalization.
                    </p>
                    <Link
                      href="#"
                      className="text-black font-satoshi-medium inline-flex items-center text-sm md:text-base"
                    >
                      Read more
                      <svg
                        className="ml-1 w-3 h-3 md:w-4 md:h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>

                  <div className="bg-white border border-gray-100 rounded-xl p-5 md:p-6 hover:shadow-md transition-shadow">
                    <span className="text-xs md:text-sm font-satoshi-medium text-gray-500 mb-1 md:mb-2 block">
                      Case Study
                    </span>
                    <h5 className="text-base md:text-lg font-satoshi-bold mb-2 md:mb-3">
                      Creating an <span style={aiGradientStyle}>intelligent</span> mobile experience
                    </h5>
                    <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                      How our mobile solution improved user engagement by 65%.
                    </p>
                    <Link
                      href="#"
                      className="text-black font-satoshi-medium inline-flex items-center text-sm md:text-base"
                    >
                      Read more
                      <svg
                        className="ml-1 w-3 h-3 md:w-4 md:h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
