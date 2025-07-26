"use client";

import React, { createContext, useContext, useEffect } from "react";
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

  useEffect(() => {
    // Play the main theme when the page loads and sounds are ready
    if (isLoaded) {
      // Small delay to ensure everything is ready
      const timer = setTimeout(() => {
        playSound("main");
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isLoaded, playSound]);

  return (
    <SoundContext.Provider value={soundEffects}>
      {children}
    </SoundContext.Provider>
  );
};