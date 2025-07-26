"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const About = () => {
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

  const values = [
    {
      title: "Innovation",
      codename: "FOXPOUND",
      description:
        "Pushing boundaries to create solutions that redefine what's possible.",
    },
    {
      title: "Impact",
      codename: "OUTER HAVEN",
      description: "Measuring success by the positive change we create for our clients.",
    },
    {
      title: "Excellence",
      codename: "CRYSTAL CATS",
      description: "Holding ourselves to the highest standards in every line of code.",
    },
    {
      title: "Simplicity",
      codename: "LIQUID LIZARD",
      description: "Elegant solutions that hide complexity behind intuitive interfaces.",
    },
  ];

  const approachSteps = [
    {
      phase: "PHASE ONE",
      title: "Reconnaissance",
      description:
        "Deep intel gathering on your business, users, and operational challenges.",
    },
    {
      phase: "PHASE TWO",
      title: "Strategic Planning",
      description:
        "Designing tactical solutions that address core objectives and future missions.",
    },
    {
      phase: "PHASE THREE",
      title: "Deployment",
      description:
        "Precision development with advanced AI capabilities for enhanced operations.",
    },
    {
      phase: "PHASE FOUR",
      title: "Optimization",
      description:
        "Continuous improvement based on field data and evolving mission parameters.",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative bg-mgs-black py-16 md:py-32 overflow-x-hidden"
      id="about"
    >
      {/* MGS Grid Background */}
      <div className="absolute inset-0 mgs-grid-bg opacity-20" />
      <div className="absolute inset-0 mgs-noise opacity-10" />

      {/* About Header */}
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
                Unit Information
              </p>
              <h2 className="text-mgs-white/60 font-tactical text-xs mt-1 uppercase">
                Special Operations Unit
              </h2>
            </div>
          </div>

          <h2 className="display-text mb-6 md:mb-8 text-center text-mgs-white">
            ABOUT <span className="text-mgs-green">HOLY GRAIL</span>
          </h2>
          <p className="subtitle text-lg md:text-xl text-center">
            Elite engineers and{" "}
            <span className="text-mgs-green">tactical AI specialists</span> executing
            complex software operations with surgical precision.
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="w-full px-4 md:px-6 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Mission and Intel */}
          <div
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 mb-16 md:mb-32 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="lg:col-span-5 space-y-8 md:space-y-12">
              {/* Mission Brief */}
              <div className="relative bg-mgs-dark-gray/80 backdrop-blur border-2 border-mgs-green p-4 sm:p-6 md:p-8 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-mgs-green to-transparent" />
                <h3 className="text-xl md:text-2xl font-mgs2-menu mb-4 md:mb-6 text-mgs-white uppercase tracking-wider">
                  Mission <span className="text-mgs-green">Directive</span>
                </h3>
                <p className="text-mgs-white/70 font-roboto text-sm md:text-base leading-relaxed">
                  Whether launching your MVP, scaling your platform, or crafting something
                  never seen before — we execute with precision and speed.
                </p>
                <div className="mt-4 text-xs text-mgs-green/60 font-mgs2-menu uppercase">
                  [CLASSIFIED - LV5]
                </div>
              </div>

              {/* Tactical Approach */}
              <div className="relative bg-mgs-dark-gray/80 backdrop-blur border-2 border-mgs-gray p-4 sm:p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-mgs2-menu mb-4 md:mb-6 text-mgs-white uppercase tracking-wider">
                  Tactical Protocol
                </h3>
                <p className="text-mgs-white/70 font-roboto text-sm md:text-base leading-relaxed">
                  Follow our operations for builds, behind-the-scenes intel, and
                  game-changing deployments.
                </p>
                <div className="mt-4 flex items-center text-xs">
                  <div className="w-2 h-2 bg-mgs-green rounded-full animate-pulse mr-2" />
                  <span className="text-mgs-green/60 font-mgs2-menu uppercase">
                    Status: Active
                  </span>
                </div>
              </div>
            </div>

            {/* Operative Image */}
            <div className="lg:col-span-7 mt-8 lg:mt-0 overflow-hidden">
              <div className="relative h-full overflow-hidden">
                <div className="overflow-hidden h-full border-2 border-mgs-gray">
                  <Image
                    src="/aitech.jpeg"
                    alt="Tactical Operations Center"
                    className="w-full h-full object-cover filter contrast-125 brightness-90"
                    width={800}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mgs-black/60 to-transparent" />
                </div>
                <div className="absolute bottom-2 right-2 sm:-bottom-4 sm:-right-4 md:-bottom-6 md:-right-6 bg-mgs-black border border-mgs-green py-2 px-3 sm:py-3 sm:px-5 md:py-4 md:px-8">
                  <p className="font-mgs2-menu text-xs sm:text-sm md:text-base text-mgs-white uppercase">
                    Intel to <span className="text-mgs-green">advantage</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values - MGS Unit Badges */}
          <div
            className={`mb-16 md:mb-32 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-sm sm:text-xl md:text-2xl font-mgs2-menu text-center mb-6 sm:mb-10 md:mb-16 text-mgs-white uppercase tracking-wide sm:tracking-widest">
              Unit <span className="text-mgs-green">Specializations</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group relative bg-mgs-dark-gray/80 backdrop-blur border-2 border-mgs-gray hover:border-mgs-green transition-all duration-300 p-4 sm:p-6 md:p-8 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-mgs-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="w-10 h-10 md:w-12 md:h-12 bg-mgs-green/10 border border-mgs-green/50 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-mgs-green/20 transition-colors duration-300">
                    <span className="text-mgs-green font-bold text-lg">{index + 1}</span>
                  </div>

                  <h4 className="text-sm md:text-base font-mgs2-menu mb-2 text-mgs-white uppercase">
                    {value.title}
                  </h4>
                  <p className="text-xs text-mgs-green/60 font-tactical uppercase mb-3">
                    {value.codename}
                  </p>
                  <p className="text-mgs-white/60 font-roboto text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Approach - Mission Phases */}
          <div
            className={`bg-mgs-dark-gray/50 backdrop-blur border-2 border-mgs-gray p-4 sm:p-6 md:p-8 lg:p-16 transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-lg sm:text-xl md:text-2xl font-mgs2-menu text-center mb-6 sm:mb-10 md:mb-16 text-mgs-white uppercase tracking-wide sm:tracking-widest">
                Operation <span className="text-mgs-green">Protocol</span>
              </h3>
              <div className="space-y-8 md:space-y-12">
                {approachSteps.map((step, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-mgs-green/10 border border-mgs-green/50 flex items-center justify-center mr-4 md:mr-6 flex-shrink-0 group-hover:bg-mgs-green/20 transition-colors duration-300">
                      <span className="font-mgs2 text-lg md:text-xl text-mgs-green">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-baseline mb-2">
                        <h4 className="text-xs sm:text-base md:text-xl font-mgs2-menu text-mgs-white uppercase tracking-normal sm:tracking-wider sm:mr-3">
                          {step.title}
                        </h4>
                        <span className="text-xs text-mgs-green/60 font-mgs2-menu uppercase mt-1 sm:mt-0">
                          {step.phase}
                        </span>
                      </div>
                      <p className="text-mgs-white/60 font-roboto text-sm md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Operative Profile */}
          <div
            className={`mt-16 md:mt-32 transition-all duration-1000 delay-800 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-mgs2-menu text-center mb-6 sm:mb-10 md:mb-16 text-mgs-white uppercase tracking-wide sm:tracking-widest">
              Command <span className="text-mgs-green">Structure</span>
            </h3>
            <div className="grid grid-cols-1 gap-8 md:gap-10 max-w-2xl mx-auto">
              {/* Operative Card */}
              <div className="relative bg-mgs-dark-gray/80 backdrop-blur border-2 border-mgs-gray overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-mgs-green to-transparent" />

                <div className="h-[35rem] md:h-[40rem] overflow-hidden relative border-2 border-mgs-green p-4">
                  <Image
                    src="/kieran-bb.png"
                    alt="Operative Profile"
                    className="w-full h-full object-contain"
                    width={500}
                    height={700}
                  />
                </div>

                <div className="p-4 sm:p-6 md:p-8 relative">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg md:text-xl font-mgs2-menu mb-1 text-mgs-white uppercase tracking-wider">
                        Kieran O&apos;Leary
                      </h4>
                      <p className="text-mgs-green font-mgs2-menu text-xs sm:text-sm uppercase">
                        Codename Big Boss
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-mgs-white/60 font-tactical uppercase">
                        Rank
                      </p>
                      <p className="text-sm text-mgs-green font-mgs2-menu">CEO</p>
                    </div>
                  </div>

                  <div className="border-t border-mgs-gray/50 pt-4">
                    <p className="text-mgs-white/70 text-sm md:text-base font-roboto mb-4">
                      <span className="text-mgs-green font-tactical uppercase text-xs">
                        Mission Record
                      </span>
                    </p>
                    <p className="text-mgs-white/60 text-sm leading-relaxed font-roboto">
                      Tactical entrepreneur and technology commander. First operative at
                      ShipBob (now valued at $4B), established RCR Recording Studio,
                      founded EmpowerEd (education ops). Co-founder of Banya (stealth
                      bathhouse operations), partner at RW Projects (construction
                      tactics), instrumental in GoodBuy Gear expansion.
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs">
                    <span className="text-mgs-green/60 font-tactical uppercase">
                      Security Clearance x Maximum
                    </span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-mgs-green rounded-full animate-pulse mr-2" />
                      <span className="text-mgs-green/60 font-tactical uppercase">
                        Active
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Allied Units */}
              <div className="mt-8 md:mt-12">
                <h4 className="text-lg md:text-xl font-mgs2-menu text-center mb-3 text-mgs-white uppercase tracking-wider">
                  Allied <span className="text-mgs-green">Operations</span>
                </h4>
                <p className="text-sm text-mgs-white/60 text-center mb-6 md:mb-8 font-roboto">
                  Projects we have built or currently operate
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto px-4 sm:px-0">
                  {[
                    {
                      src: "/shipbob.jpeg",
                      alt: "ShipBob",
                      code: "SB",
                      link: "https://shipbob.com",
                    },
                    {
                      src: "/RCR2.png",
                      alt: "RCR Recording",
                      code: "RC",
                      link: "https://www.redconvertiblerecording.com",
                    },
                    {
                      src: "/empowered.png",
                      alt: "EmpowerEd",
                      code: "EP",
                      link: "https://empoweredae.com",
                    },
                    {
                      src: "/banya.png",
                      alt: "Banya",
                      code: "BN",
                      link: "https://banyachinatown.com",
                    },
                    {
                      src: "/rwprojects.png",
                      alt: "RW Projects",
                      code: "RW",
                      link: "https://rwprojectsinc.com",
                    },
                    {
                      src: "/GBG.png",
                      alt: "GoodBuy Gear",
                      code: "GB",
                      link: "https://goodbuygear.com",
                    },
                    {
                      src: "/logos/keeptouch.png",
                      alt: "KeepTouch",
                      code: "KT",
                      link: "https://keeptouch.app",
                    },
                    {
                      src: "/logos/vibebreath.png",
                      alt: "VibeBreath",
                      code: "VB",
                      link: "https://vibebreath.com",
                    },
                    {
                      src: "/logos/workshop.png",
                      alt: "Workshop GR",
                      code: "WG",
                      link: "https://workshopgr.com",
                    },
                    {
                      src: "/logos/talisen.jpeg",
                      alt: "Talisen Construction",
                      code: "TC",
                      link: "https://talisenconstructioncorp.com",
                    },
                  ].map((ally, index) => (
                    <div key={index} className="relative group">
                      {ally.link ? (
                        <a
                          href={ally.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <div className="bg-mgs-dark-gray/80 border border-mgs-gray hover:border-mgs-green transition-all duration-300 aspect-square w-full relative cursor-pointer">
                            <Image
                              src={ally.src}
                              alt={ally.alt}
                              className="w-full h-full object-contain p-4 filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                              width={300}
                              height={300}
                            />
                          </div>
                        </a>
                      ) : (
                        <div className="bg-mgs-dark-gray/80 border border-mgs-gray hover:border-mgs-green transition-all duration-300 aspect-square w-full relative">
                          <Image
                            src={ally.src}
                            alt={ally.alt}
                            className="w-full h-full object-contain p-4 filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                            width={300}
                            height={300}
                          />
                        </div>
                      )}
                      <p className="text-sm text-mgs-green/60 font-mgs2-menu text-center mt-2 uppercase">
                        {ally.code}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-mgs-green/50 to-transparent pointer-events-none" />
    </div>
  );
};

export default About;
