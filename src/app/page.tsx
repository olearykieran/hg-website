import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Solutions from "@/components/Solutions";
import About from "@/components/About";
import Contact from "@/components/Contact";

/* AI gradient styles - Removed as no longer used in this file */
// const aiGradientStyle: CSSProperties = {
//   background: "linear-gradient(135deg, #FFFFFF, #D3D3D3, #A9A9A9, #808080, #696969)",
//   backgroundSize: "200% auto",
//   padding: "0 0.25em",
//   borderRadius: "0.25em",
//   animation: "gradientFlow 3s linear infinite",
// };

export default function Home() {
  return (
    <div className="relative min-h-screen bg-mgs-black overflow-x-hidden">
      {/* Background Layer */}
      <div className="fixed inset-0 bg-mgs-black mgs-grid-bg">
        {/* Animated scanline overlay */}
        <div className="mgs-scanline"></div>
        {/* Noise texture */}
        <div className="absolute inset-0 mgs-noise opacity-20"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <main className="relative">
          <HeroSection />
          <Solutions />
          <About />
          <Contact />
        </main>

        <footer className="relative py-8 text-mgs-white/60 text-sm border-t-2 border-mgs-green bg-mgs-black/90 backdrop-blur-sm">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="mb-4 flex items-center justify-center">
              <span className="text-sm sm:text-base font-mgs2-menu text-mgs-green uppercase tracking-wide sm:tracking-widest">
                Holy Grail Studio
              </span>
            </div>
            <p className="text-center text-mgs-white/60 font-tactical">
              Holy Grail Studio * All rights reserved
            </p>
            <p className="text-center mt-2 text-mgs-green/60 font-mgs2 text-xs uppercase tracking-wider">
              [ TACTICAL SOFTWARE DEVELOPMENT ]
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
