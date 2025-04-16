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
    <div className="relative min-h-screen">
      {/* Background Layer */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#1e1e2e] dark:to-[#2a2a3a]">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent dark:via-black/5 animate-gradient-x"></div>
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

        <footer className="relative py-8 text-gray-500 dark:text-gray-400 text-sm border-t border-gray-100 dark:border-neutral-700 dark:bg-[#1c1a18]">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="mb-4 flex items-center justify-center">
              <span className="text-base font-satoshi-medium text-gray-900 dark:text-white">
                Holy Grail Studio
              </span>
            </div>
            <p className="text-center">
              &copy; {new Date().getFullYear()} Holy Grail Studio. All rights reserved.
            </p>
            <p className="text-center mt-2">
              AI-powered software solutions for modern businesses
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
