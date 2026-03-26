import { useRef } from "react";

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/draco/');
(GLTFLoader.prototype as unknown as { setDRACOLoader: (loader: DRACOLoader) => void }).setDRACOLoader(dracoLoader);

export default function BackgroundSphere() {
  useGLTF.preload('/models/backgrounds/galaxy-sphere.glb');
  const { scene } = useGLTF("/models/backgrounds/galaxy-sphere.glb");
  const ref = useRef<THREE.Object3D>(null!);
  const elapsed = useRef(0);

  useFrame((_, delta) => {
    elapsed.current += delta;
    if (elapsed.current < 1 / 30) return; // cap at 30fps

    if (ref.current) {
      ref.current.rotation.x += 0.0002 * elapsed.current * 60;
      ref.current.rotation.y += 0.0003 * elapsed.current * 60;
    }
    elapsed.current = 0;
  });

  return (
    <primitive
      object={scene}
      ref={ref}
      scale={[-1, 1, 1]} 
      position={[0, 0, 0]} 
    />
  );
}
