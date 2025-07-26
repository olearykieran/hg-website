"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useSoundContext } from "@/components/SoundProvider";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { playSound } = useSoundContext();

  useEffect(() => {
    // Play error sound when error page loads
    playSound("error");
    
    // Log the error to console
    console.error("Application error:", error);
  }, [error, playSound]);

  return (
    <div className="min-h-screen bg-mgs-black flex items-center justify-center px-8 mgs-grid-bg">
      <div className="absolute inset-0 mgs-noise opacity-20" />
      <div className="mgs-scanline" />
      
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="mgs-codec px-8 py-4 bg-mgs-black/80 backdrop-blur inline-block mb-8">
          <p className="text-mgs-red font-mgs2-menu text-sm tracking-widest uppercase">
            System Error
          </p>
          <h1 className="text-mgs-white/60 font-tactical text-xs mt-1 uppercase">
            Critical Failure Detected
          </h1>
        </div>

        <h2 className="text-4xl md:text-6xl font-mgs2-menu text-mgs-white mb-4 uppercase tracking-wider">
          Operation <span className="text-mgs-red">Compromised</span>
        </h2>
        
        <p className="text-mgs-white/60 mb-8 font-roboto text-lg">
          An unexpected error has occurred during the mission.
        </p>

        <div className="space-y-6">
          <div className="bg-mgs-dark-gray/50 backdrop-blur border border-mgs-red/50 p-4 rounded">
            <p className="text-mgs-red/80 font-tactical text-sm">
              ERROR: {error.message || "Unknown system failure"}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="btn btn-outline px-6 py-3 text-center mgs-codec"
            >
              RETRY MISSION
            </button>
            
            <Link
              href="/"
              className="inline-block btn btn-primary px-8 py-3 relative group overflow-hidden"
            >
              <span className="relative z-10">ABORT TO BASE</span>
              <div className="absolute inset-0 bg-gradient-to-r from-mgs-green to-mgs-green-dark transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        <div className="mt-16 text-mgs-green/40 font-mgs2-menu text-xs">
          <p>FISSION MAILED</p>
        </div>
      </div>
    </div>
  );
}