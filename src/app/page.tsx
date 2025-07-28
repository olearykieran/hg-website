import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Solutions from "@/components/Solutions";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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

        <Footer />
      </div>
    </div>
  );
}
