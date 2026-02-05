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
    useGLTF.preload('/models/extra/cherokee-compressed.glb');
    const { scene } = useGLTF('/models/extra/cherokee-compressed.glb');
    
    const ref = useRef<THREE.Object3D>(null!);

    const time = useRef(0);
        
    const initialRotation = useRef<THREE.Euler>(new THREE.Euler(-1.2, -0.1, -0.4));

    useFrame((_, delta) => {
        if (!active) return;

        time.current += delta;

        if (ref.current) {
            ref.current.rotation.x = initialRotation.current.x + Math.sin(time.current) * 0.06;
            ref.current.rotation.y = initialRotation.current.y + Math.sin(time.current * 0.8) * 0.10;
            ref.current.rotation.z = initialRotation.current.z;
        }
    });

        

    return (
        <primitive 
            ref={ref}
            object={scene}
            position={[-100, 0, -500]}
            rotation={[-1, -0.1, -0.4]}
        />
    );
}

export default function SunnyBoat() {

    const { ref, inView } = useInView<HTMLDivElement>(0.05);

    return (
        <figure className="h-[60%]" ref={ref}>
        { inView && (
            <Canvas camera={{position: [0, 0, 50], fov: 75}}>
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

                <Model  active={inView}/>

            </Canvas>
        )}
        </figure>
    );
}