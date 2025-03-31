"use client";

import React, { useState, CSSProperties } from "react";

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

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  const values = [
    {
      title: "Innovation",
      description:
        "We constantly push boundaries to create solutions that redefine what's possible.",
      icon: "/icons/innovation.svg",
      isHighlighted: true
    },
    {
      title: "Impact",
      description:
        "We measure our success by the positive change our work creates for our clients.",
      icon: "/icons/impact.svg",
      isHighlighted: true
    },
    {
      title: "Excellence",
      description:
        "We hold ourselves to the highest standards in every line of code we write.",
      icon: "/icons/excellence.svg",
      isHighlighted: true
    },
    {
      title: "Simplicity",
      description:
        "We believe in elegant solutions that hide complexity behind intuitive interfaces.",
      icon: "/icons/simplicity.svg",
      isHighlighted: true
    },
  ];

  const approachSteps = [
    {
      number: 1,
      title: "Understand",
      description:
        "We start by deeply understanding your business, users, and challenges.",
      isHighlighted: false
    },
    {
      number: 2,
      title: "Design",
      description:
        "We design elegant solutions that address core needs while planning for future growth.",
      isHighlighted: false
    },
    {
      number: 3,
      title: "Build",
      description:
        "We develop with precision, integrating AI capabilities that enhance functionality.",
      isHighlighted: false
    },
    {
      number: 4,
      title: "Refine",
      description:
        "We continuously improve based on real-world usage and evolving needs.",
      isHighlighted: false
    },
  ];

  return (
    <div className="bg-white py-16 md:py-32" id="about">
      {/* About Header - Centered above everything */}
      <div className="w-full flex flex-col items-center justify-center mb-16 md:mb-40">
        <div className="text-center w-full max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="display-text mb-6 md:mb-8 text-center">
            About <span style={aiGradientStyle}>Us</span>
          </h2>
          <p className="subtitle text-lg md:text-xl text-center">
            We're a team of engineers, designers, and <span style={aiGradientStyle}>AI specialists</span> building intelligent
            software that solves complex problems with elegant solutions.
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Mission and Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 mb-16 md:mb-32">
            <div className="lg:col-span-5 space-y-8 md:space-y-12">
              <div className="bg-gray-50 p-6 md:p-10 rounded-3xl" style={aiGradientBorder}>
                <div className="bg-white rounded-2xl p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-satoshi-bold mb-4 md:mb-6 text-center">
                    Our <span style={aiGradientStyle}>Mission</span>
                  </h3>
                  <p className="text-gray-700 font-satoshi-regular text-base md:text-lg leading-relaxed">
                    To create <span style={aiGradientStyle}>AI-powered</span> software that enhances human capabilities and
                    transforms how businesses operate in the digital age.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 md:p-10 rounded-3xl">
                <h3 className="text-xl md:text-2xl font-satoshi-bold mb-4 md:mb-6 text-center">
                  Our Approach
                </h3>
                <p className="text-gray-700 font-satoshi-regular text-base md:text-lg leading-relaxed">
                  We combine cutting-edge <span style={aiGradientStyle}>AI research</span> with practical software engineering
                  to deliver solutions that are both innovative and reliable.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 mt-8 lg:mt-0">
              <div className="relative h-full">
                <div className="rounded-3xl overflow-hidden h-full">
                  <img
                    src="/aitech.jpeg"
                    alt="Our team at work"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-black text-white py-3 px-5 md:py-4 md:px-8 rounded-xl">
                  <p className="font-satoshi-medium text-sm md:text-base">
                    Transforming ideas into <span style={aiGradientStyle}>intelligent</span> software
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16 md:mb-32">
            <h3 className="text-xl md:text-2xl font-satoshi-bold text-center mb-10 md:mb-16">
              Our Values
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 md:p-8 rounded-3xl hover:shadow-md transition-shadow"
                  style={value.isHighlighted ? aiGradientBorder : {}}
                >
                  <div className={value.isHighlighted ? "bg-white rounded-2xl p-6 md:p-6" : ""}>
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-4 md:mb-6 ${
                      value.isHighlighted ? "bg-gradient-to-br from-purple-600 to-blue-500" : "bg-black"
                    }`} style={value.isHighlighted ? {
                      background: 'linear-gradient(135deg, #9C27B0, #7B1FA2, #673AB7, #3F51B5, #2196F3)',
                      backgroundSize: '200% auto',
                      animation: 'gradientFlow 3s linear infinite'
                    } : {}}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="md:w-6 md:h-6"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 16V12"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 8H12.01"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h4 className="text-lg md:text-xl font-satoshi-bold mb-3 md:mb-4">
                      {value.isHighlighted ? <span style={aiGradientStyle}>{value.title}</span> : value.title}
                    </h4>
                    <p className="text-gray-700 font-satoshi-regular text-sm md:text-base">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Approach */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl md:text-2xl font-satoshi-bold text-center mb-10 md:mb-16">
                Our <span style={aiGradientStyle}>Approach</span>
              </h3>
              <div className="space-y-8 md:space-y-12">
                {approachSteps.map((step) => (
                  <div key={step.number} className="flex items-start">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full text-white flex items-center justify-center mr-4 md:mr-6 flex-shrink-0 font-satoshi-bold text-lg md:text-xl ${
                      step.isHighlighted ? "bg-gradient-to-br from-purple-600 to-blue-500" : "bg-black"
                    }`}>
                      {step.number}
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-satoshi-bold mb-2 md:mb-3">
                        {step.number === 3 ? 
                          <>Build</> : 
                          step.title}
                      </h4>
                      <p className="text-gray-700 font-satoshi-regular text-base md:text-lg">
                        {step.number === 3 ? (
                          <>
                            We develop with precision, integrating <span style={aiGradientStyle}>AI capabilities</span> that enhance functionality.
                          </>
                        ) : (
                          step.description
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="mt-16 md:mt-32">
            <h3 className="text-xl md:text-2xl font-satoshi-bold text-center mb-10 md:mb-16">
              Our Team
            </h3>
            <div className="grid grid-cols-1 gap-8 md:gap-10 max-w-2xl mx-auto">
              <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-md transition-shadow">
                <div
                  className="h-[35rem] md:h-[40rem] overflow-hidden relative"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <img
                    src="/gibme.png"
                    alt="CEO"
                    className={`w-full h-full object-cover object-top absolute top-0 left-0 transition-opacity duration-500 ease-in-out ${
                      isHovered ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <img
                    src="/kier2.jpg"
                    alt="CEO Alternative"
                    className={`w-full h-full object-cover object-top absolute top-0 left-0 transition-opacity duration-500 ease-in-out ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h4 className="text-lg md:text-xl font-satoshi-bold mb-1">
                    Kieran O'Leary
                  </h4>
                  <p className="text-gray-500 font-satoshi-medium mb-3 md:mb-4 text-sm md:text-base">
                    CEO & Founder
                  </p>
                  <p className="text-gray-700 text-sm md:text-base">
                    Serial entrepreneur and technology leader with a proven track record
                    of building successful ventures. One of the first contributors to
                    ShipBob (now valued at $4B), founder of RCR Recording Studio, and
                    founder of EmpowerEd (education advocacy). Co-founder of Banya (a
                    bathhouse in Chinatown), partner at RW Projects (construction
                    management), and instrumental in launching a new location for GoodBuy
                    Gear.
                  </p>
                </div>
              </div>

              {/* Company Logos */}
              <div className="mt-8 md:mt-12">
                <h4 className="text-lg md:text-xl font-satoshi-bold text-center mb-6 md:mb-8">
                  Ventures & <span style={aiGradientStyle}>Partnerships</span>
                </h4>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 items-center justify-items-center">
                  <div className="p-3 bg-gray-50 rounded-xl h-16 w-full flex items-center justify-center">
                    <img
                      src="/shipbob.jpeg"
                      alt="ShipBob"
                      className="max-h-10 max-w-full"
                    />
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl h-16 w-full flex items-center justify-center">
                    <img
                      src="/RCR2.png"
                      alt="RCR Recording Studio"
                      className="max-h-10 max-w-full"
                    />
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl h-16 w-full flex items-center justify-center">
                    <img
                      src="/empowered.png"
                      alt="EmpowerEd"
                      className="max-h-10 max-w-full"
                    />
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl h-16 w-full flex items-center justify-center">
                    <img src="/banya.png" alt="Banya" className="max-h-10 max-w-full" />
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl h-16 w-full flex items-center justify-center">
                    <img
                      src="/rwprojects.png"
                      alt="RW Projects"
                      className="max-h-10 max-w-full"
                    />
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl h-16 w-full flex items-center justify-center">
                    <img
                      src="/GBG.png"
                      alt="GoodBuy Gear"
                      className="max-h-10 max-w-full"
                    />
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

export default About;
