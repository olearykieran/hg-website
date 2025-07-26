"use client";

import { useEffect, useRef, useState } from "react";

export type SoundType = "main" | "codec-freq" | "dropdown" | "engage" | "return" | "error";

interface SoundConfig {
  main: { path: "/sounds/main.mp3"; volume: 0.3 };
  "codec-freq": { path: "/sounds/codec-freq.mp3"; volume: 0.5 };
  dropdown: { path: "/sounds/dropdown.mp3"; volume: 0.4 };
  engage: { path: "/sounds/engage.mp3"; volume: 0.5 };
  return: { path: "/sounds/return.mp3"; volume: 0.4 };
  error: { path: "/sounds/error.mp3"; volume: 0.6 };
}

const soundConfig: SoundConfig = {
  main: { path: "/sounds/main.mp3", volume: 0.3 },
  "codec-freq": { path: "/sounds/codec-freq.mp3", volume: 0.5 },
  dropdown: { path: "/sounds/dropdown.mp3", volume: 0.4 },
  engage: { path: "/sounds/engage.mp3", volume: 0.5 },
  return: { path: "/sounds/return.mp3", volume: 0.4 },
  error: { path: "/sounds/error.mp3", volume: 0.6 },
};

export const useSoundEffects = () => {
  const audioRefs = useRef<{ [key in SoundType]?: HTMLAudioElement }>({});
  const [isMuted, setIsMuted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check localStorage for mute preference
    const storedMute = localStorage.getItem("soundMuted");
    if (storedMute === "true") {
      setIsMuted(true);
    }

    // Preload all sounds
    const loadSounds = async () => {
      const loadPromises = Object.entries(soundConfig).map(async ([key, config]) => {
        const audio = new Audio(config.path);
        audio.volume = config.volume;
        audio.preload = "auto";
        
        // Create a promise that resolves when the audio can play
        const loadPromise = new Promise((resolve) => {
          audio.addEventListener("canplaythrough", resolve, { once: true });
          audio.addEventListener("error", resolve, { once: true }); // Resolve even on error to prevent hanging
        });

        audioRefs.current[key as SoundType] = audio;
        return loadPromise;
      });

      try {
        await Promise.all(loadPromises);
        setIsLoaded(true);
      } catch (error) {
        console.error("Error loading sounds:", error);
        setIsLoaded(true); // Set loaded even on error to prevent blocking
      }
    };

    loadSounds();

    // Cleanup
    return () => {
      Object.values(audioRefs.current).forEach((audio) => {
        if (audio) {
          audio.pause();
          audio.src = "";
        }
      });
    };
  }, []);

  const playSound = (type: SoundType) => {
    if (isMuted || !isLoaded) return;

    const audio = audioRefs.current[type];
    if (audio) {
      // Reset the audio to start
      audio.currentTime = 0;
      
      // Play with error handling
      audio.play().catch((error) => {
        // Ignore autoplay policy errors silently
        if (error.name !== "NotAllowedError") {
          console.error(`Error playing sound ${type}:`, error);
        }
      });
    }
  };

  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    localStorage.setItem("soundMuted", newMutedState.toString());
  };

  const setVolume = (type: SoundType, volume: number) => {
    const audio = audioRefs.current[type];
    if (audio) {
      audio.volume = Math.max(0, Math.min(1, volume));
    }
  };

  return {
    playSound,
    toggleMute,
    isMuted,
    isLoaded,
    setVolume,
  };
};