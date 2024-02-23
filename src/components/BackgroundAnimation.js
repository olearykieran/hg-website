"use client";

// BackgroundAnimation.js
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

const lerp = (a, b, n) => (1 - n) * a + n * b;

const Plane = () => {
  const meshRef = useRef();
  const { viewport } = useThree();

  useFrame(({ clock }) => {
    meshRef.current.material.uniforms.T.value = clock.getElapsedTime();
  });

  const shaderArgs = useMemo(
    () => ({
      uniforms: {
        T: { value: 0 },
        R: { value: viewport.height },
        opacity: { value: 0.03 }, // Ensure this is the desired opacity level
      },
      vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
      fragmentShader: `
      varying vec2 vUv;
      uniform float T;
      uniform float R;
      uniform float opacity;
      float S(float t) { return smoothstep(.03/R, 0.0, t); }
      float L(float i, vec2 u) { 
        return pow(sin(u.x * 3. - sin(i * 6.28) * .6), 20.) * sin(T + i * 3.) * .2 + u.y - i;
      } 
      void main() {
        vec2 u = vUv;
        float c = 0.;
        for (float i = 1.; i > -0.2; i -= .06) {
          c = max(c, S(abs(L(i, u)) - .004/R) - S(L(i - .06, u)) - S(L(i - .12, u)) - S(L(i - .18, u)));
        }
        gl_FragColor = vec4(S(1.-c), S(1.-c), S(1.-c), opacity);
      }
    `,
      transparent: true, // Mark the material as transparent
    }),
    [viewport]
  );

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <shaderMaterial args={[shaderArgs]} />
    </mesh>
  );
};

const BackgroundAnimation = () => {
  return (
    <Canvas
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
    >
      <Plane />
    </Canvas>
  );
};
export default BackgroundAnimation;
