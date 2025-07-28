"use client";

import { useEffect, useRef, useState } from "react";

export type SoundType = "main" | "codec-freq" | "dropdown" | "engage" | "return" | "error";

interface SoundConfig {
  main: { path: "/sounds/main.mp3"; volume: 0.1 };
  "codec-freq": { path: "/sounds/codec-freq.mp3"; volume: 0.5 };
  dropdown: { path: "/sounds/dropdown.mp3"; volume: 0.4 };
  engage: { path: "/sounds/engage.mp3"; volume: 0.5 };
  return: { path: "/sounds/return.mp3"; volume: 0.4 };
  error: { path: "/sounds/error.mp3"; volume: 0.6 };
}

const soundConfig: SoundConfig = {
  main: { path: "/sounds/main.mp3", volume: 0.1 }, // Much lower volume
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
        
        // Enable for mobile/iOS
        audio.crossOrigin = "anonymous";
        
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
      
      // Create a promise for playing audio that handles mobile/production constraints
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Auto-play was prevented
          if (error.name === "NotAllowedError") {
            console.warn(`Autoplay prevented for: ${type}. Will play on next interaction.`);
            
            // Try to play again on next user interaction
            const retryPlay = () => {
              audio.play().catch(() => {
                // Still failed, give up silently
              });
            };
            
            // Add one-time listeners for various interaction types
            document.addEventListener("click", retryPlay, { once: true, passive: true });
            document.addEventListener("touchstart", retryPlay, { once: true, passive: true });
            document.addEventListener("touchend", retryPlay, { once: true, passive: true });
          } else {
            console.error(`Error playing sound ${type}:`, error);
          }
        });
      }
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