// pages/index.tsx
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import CursorCanvas from "../components/CursorCanvas";
import Slider, { slides } from "../components/Slider";
import Contact from "../components/Contact";

function Footer() {
  return (
    <footer className=" py-4 border-t">
      <p className="text-center text-sans">
        © 2024 Holy Grail Studio. All rights reserved.
      </p>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div id="top-of-page"></div> {/* Target element for IntersectionObserver */}
      <CursorCanvas />
      <Navbar />
      <HeroSection />
      <About />
      <Slider slides={slides} />
      <Contact />
      <Footer />
    </div>
  );
}
