"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useSoundEffects, SoundType } from "@/hooks/useSoundEffects";

interface SoundContextType {
  playSound: (type: SoundType) => void;
  toggleMute: () => void;
  isMuted: boolean;
  isLoaded: boolean;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const useSoundContext = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSoundContext must be used within a SoundProvider");
  }
  return context;
};

interface SoundProviderProps {
  children: React.ReactNode;
}

export const SoundProvider: React.FC<SoundProviderProps> = ({ children }) => {
  const soundEffects = useSoundEffects();
  const { playSound, isLoaded } = soundEffects;
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Also try to play on first user interaction (for autoplay policy)
    const handleFirstInteraction = () => {
      if (isLoaded && !hasInteracted) {
        playSound("main");
        setHasInteracted(true);
      }
      // Remove listeners after first interaction
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
      document.removeEventListener("touchend", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
      document.removeEventListener("mousedown", handleFirstInteraction);
    };

    // Add listeners for various interaction types (including mobile touch)
    document.addEventListener("click", handleFirstInteraction, { passive: true });
    document.addEventListener("touchstart", handleFirstInteraction, { passive: true });
    document.addEventListener("touchend", handleFirstInteraction, { passive: true });
    document.addEventListener("keydown", handleFirstInteraction, { passive: true });
    document.addEventListener("mousedown", handleFirstInteraction, { passive: true });

    // Try to play immediately after a short delay (works better in production)
    if (isLoaded && !hasInteracted) {
      const timer = setTimeout(() => {
        playSound("main");
        setHasInteracted(true);
      }, 500);
      
      return () => {
        clearTimeout(timer);
        document.removeEventListener("click", handleFirstInteraction);
        document.removeEventListener("touchstart", handleFirstInteraction);
        document.removeEventListener("touchend", handleFirstInteraction);
        document.removeEventListener("keydown", handleFirstInteraction);
        document.removeEventListener("mousedown", handleFirstInteraction);
      };
    }

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
      document.removeEventListener("touchend", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
      document.removeEventListener("mousedown", handleFirstInteraction);
    };
  }, [isLoaded, playSound, hasInteracted]);

  return (
    <SoundContext.Provider value={soundEffects}>
      {children}
    </SoundContext.Provider>
  );
};