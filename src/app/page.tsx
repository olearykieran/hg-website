import React, { CSSProperties } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Solutions from "@/components/Solutions";
import About from "@/components/About";
import Contact from "@/components/Contact";

/* AI gradient styles */
const aiGradientStyle: CSSProperties = {
  background: 'linear-gradient(135deg, #9C27B0, #7B1FA2, #673AB7, #3F51B5, #2196F3)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  animation: 'gradientFlow 3s linear infinite'
};

export default function Home() {
  return (
    <main className="bg-white dark:bg-[#1e1e2e] text-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar />
      <HeroSection />
      <Solutions />
      <About />
      <Contact />
      
      <footer className="py-8 text-gray-500 dark:text-gray-400 text-sm border-t border-gray-100 dark:border-gray-800">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="mb-4 flex items-center justify-center">
            <span className="text-base font-satoshi-medium text-gray-900 dark:text-white">
              Holy <span style={aiGradientStyle}>Grail</span> Studio
            </span>
          </div>
          <p className="text-center">&copy; {new Date().getFullYear()} Holy Grail Studio. All rights reserved.</p>
          <p className="text-center mt-2">
            <span style={aiGradientStyle}>AI-powered</span> software solutions for modern businesses
          </p>
        </div>
      </footer>
    </main>
  );
}
