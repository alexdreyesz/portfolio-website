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

import { useInView } from "../../../hooks/useInView";

interface ModelProps {
  active: boolean;
}

function Model({ active }: ModelProps) {
    useGLTF.preload('/models/extra/earth-compressed.glb');
    const { scene } = useGLTF('/models/extra/earth-compressed.glb');
    
    const ref = useRef<THREE.Object3D>(null!);

    const time = useRef(0);

    const initialRotation = useRef<THREE.Euler>(new THREE.Euler(0.4, -0.9, 0));
    
    useFrame((_, delta) => {
        if (!active) return;

        time.current += delta;

        if (ref.current) {
            ref.current.rotation.x = initialRotation.current.x;
            ref.current.rotation.y = initialRotation.current.y + time.current * 0.05;
            ref.current.rotation.z = initialRotation.current.z;
        }
    });

    return (
        <primitive 
            ref={ref}
            object={scene}
            position={[-0.5, 0, 10]}
            rotation={[3, 0, -0]}
        />
    );
}

export default function Earth() {

    const { ref, inView } = useInView<HTMLDivElement>(0.05);

    return (
        <figure className="h-[60%]" ref={ref}>

        { inView && (
            <Canvas camera={{position: [0, 0, 15], fov: 35}}>
                <ambientLight intensity={1} color="#988ad4" />
                <directionalLight position={[5, 5, 5]} intensity={5}/>
                <directionalLight position={[-5, 5, -5]} intensity={5} />
            
                {/*
                <OrbitControls 
                    enablePan={false} 
                    minDistance={5} 
                    maxDistance={2000}
                />
            */}

                <Model active={inView} />

            </Canvas>
        )}

        </figure>
    );
}