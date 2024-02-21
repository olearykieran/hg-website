"use client";

import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function ThreeScene() {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.setZ(30);

    const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("#bg") });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Soft light
    const hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1); // Simulating sky-ground light
    const pointLight = new THREE.PointLight(0xffffff, 2, 100); // Brighter point light
    pointLight.position.set(5, 5, 5);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Brighter directional light
    directionalLight.position.set(0, -1, 2);
    scene.add(ambientLight, hemisphereLight, pointLight, directionalLight);

    let holyGrail;

    const loader = new GLTFLoader();
    loader.load("/scene.gltf", function (gltf) {
      holyGrail = gltf.scene;
      holyGrail.position.set(0, -15, -25);
      scene.add(holyGrail);

      // Optional: Adjust materials for better light interaction
      holyGrail.traverse((child) => {
        if (child.isMesh) {
          child.material.metalness = 0.1; // Adjust metalness
          child.material.roughness = 0.5; // Adjust roughness
        }
      });
    });

    const controls = new OrbitControls(camera, renderer.domElement);

    function moveCamera() {
      const t = document.body.getBoundingClientRect().top;
      camera.position.z = 30 + t * -0.01;
      camera.position.x = t * -0.0002;
      camera.position.y = t * -0.0002;
    }
    document.body.onscroll = moveCamera;

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();
  }, []);

  return null; // Component does not render anything itself
}
