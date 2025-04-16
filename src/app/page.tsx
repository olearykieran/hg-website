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
      <div className="fixed inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
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

        <footer className="relative py-8 text-gray-600 dark:text-gray-400 text-sm border-t border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="mb-4 flex items-center justify-center">
              <span className="text-base font-satoshi-medium text-custom-blue">
                Holy Grail Studio
              </span>
            </div>
            <p className="text-center text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Holy Grail Studio. All rights reserved.
            </p>
            <p className="text-center mt-2 text-gray-500 dark:text-gray-500">
              Fast, Functional, Beautiful Software. &ldquo;Code. Ship. Vibe.&rdquo;
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
