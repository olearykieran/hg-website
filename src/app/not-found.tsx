"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useSoundContext } from "@/components/SoundProvider";

export default function NotFound() {
  const { playSound } = useSoundContext();

  useEffect(() => {
    // Play error sound when 404 page loads
    playSound("error");
  }, [playSound]);

  return (
    <div className="min-h-screen bg-mgs-black flex items-center justify-center px-8 mgs-grid-bg">
      <div className="absolute inset-0 mgs-noise opacity-20" />
      <div className="mgs-scanline" />
      
      <div className="relative z-10 text-center">
        <div className="mgs-codec px-8 py-4 bg-mgs-black/80 backdrop-blur inline-block mb-8">
          <p className="text-mgs-red font-mgs2-menu text-sm tracking-widest uppercase">
            Error Code 404
          </p>
          <h1 className="text-mgs-white/60 font-tactical text-xs mt-1 uppercase">
            Target Not Found
          </h1>
        </div>

        <h2 className="text-4xl md:text-6xl font-mgs2-menu text-mgs-white mb-4 uppercase tracking-wider">
          Mission <span className="text-mgs-red">Failed</span>
        </h2>
        
        <p className="text-mgs-white/60 mb-8 font-roboto text-lg">
          The requested intel could not be located.
        </p>

        <div className="space-y-4">
          <p className="text-mgs-green/60 font-tactical text-sm uppercase">
            [CODEC: CONNECTION LOST]
          </p>
          
          <Link
            href="/"
            className="inline-block btn btn-primary px-8 py-3 relative group overflow-hidden"
          >
            <span className="relative z-10">RETURN TO BASE</span>
            <div className="absolute inset-0 bg-gradient-to-r from-mgs-green to-mgs-green-dark transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </Link>
        </div>

        <div className="mt-16 text-mgs-green/40 font-mgs2-menu text-xs">
          <p>TIME PARADOX</p>
        </div>
      </div>
    </div>
  );
}