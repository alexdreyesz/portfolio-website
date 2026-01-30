
import { useRef } from 'react';

import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF} from '@react-three/drei';
//import { OrbitControls } from '@react-three/drei';

import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/draco/');
(GLTFLoader.prototype as unknown as { setDRACOLoader: (loader: DRACOLoader) => void }).setDRACOLoader(dracoLoader);

function Model() {
    useGLTF.preload('/models/sunny-boat-compressed.glb');
    const { scene } = useGLTF('/models/sunny-boat-compressed.glb');
    
    const ref = useRef<THREE.Object3D>(null!);

    const time = useRef(0);

    useFrame((_, delta) => {
      time.current += delta;
  
      if (ref.current) {
        ref.current.rotation.x = Math.sin(time.current) * 0.06;
        ref.current.rotation.y = Math.sin(time.current * 0.8) * 0.10;
      }
    });


    return (
        <primitive 
            ref={ref}
            object={scene}
            position={[0, -2.5, 0]}
        />
    );
}

export default function SunnyBoat() {

    return (
        <figure className="h-[60%] w-100">
        <Canvas camera={{position: [0, 0, 15], fov: 35}}>
            <ambientLight intensity={1} color="#988ad4" />
            <directionalLight position={[5, 5, 5]} intensity={5}/>
            <directionalLight position={[-5, 5, -5]} intensity={5} />
           
            {/*
            <OrbitControls 
                enablePan={false} 
                minDistance={5} 
                maxDistance={20}
            />
            */}

            <Model/>

        </Canvas>
        </figure>
    );
}