"use client";

import { useEffect, useRef } from "react";

const NoiseEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let wWidth = window.innerWidth;
    let wHeight =
      Math.max(
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
      ) + 500; // Add extra buffer
    let noiseData: ImageData[] = [];
    let frame = 0;
    let loopTimeout: number;

    const createNoise = () => {
      const idata = ctx.createImageData(wWidth, wHeight);
      const buffer32 = new Uint32Array(idata.data.buffer);
      const len = buffer32.length;

      for (let i = 0; i < len; i++) {
        if (Math.random() < 0.2) {
          buffer32[i] = 0xff000000;
        }
      }

      noiseData.push(idata);
    };

    const paintNoise = () => {
      if (frame === 9) {
        frame = 0;
      } else {
        frame++;
      }

      ctx.putImageData(noiseData[frame], 0, 0);
    };

    const loop = () => {
      paintNoise();
      loopTimeout = window.setTimeout(() => {
        window.requestAnimationFrame(loop);
      }, 1000 / 25);
    };

    const setup = () => {
      wWidth = window.innerWidth;
      wHeight =
        Math.max(
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight,
          document.documentElement.clientHeight
        ) + 500; // Add extra buffer

      canvas.width = wWidth;
      canvas.height = wHeight;

      noiseData = []; // Clear existing noise data
      for (let i = 0; i < 10; i++) {
        createNoise();
      }

      loop();
    };

    const handleResize = () => {
      window.clearTimeout(loopTimeout);
      setup();
    };

    // Create a ResizeObserver to handle dynamic content changes
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    // Observe the document body for changes
    resizeObserver.observe(document.body);

    setup();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
      window.clearTimeout(loopTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full pointer-events-none opacity-[0.2] mix-blend-overlay z-0"
      style={{ height: "100%" }}
      id="noise"
    />
  );
};

export default NoiseEffect;
