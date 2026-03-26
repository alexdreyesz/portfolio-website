import { Canvas,  useThree } from "@react-three/fiber";
import BackgroundSphere from "./GalaxySky";
import { useEffect } from "react";

export default function CanvasBackground() {
  function CameraRotationInitializer() {
    const { camera } = useThree();

    const degToRad = (deg: number) => deg * (Math.PI / 180);
  
    useEffect(() => {
      camera.rotation.set(degToRad(180), degToRad(0), 0);
    }, [camera]);
  
    return null;
  }
  
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -10,
        width: "100vw",
        height: "100vh",
      }}
      camera={{ position: [0, 0, 0], fov: 75 }}
    >
      <ambientLight intensity={1} />
      <CameraRotationInitializer />
      <BackgroundSphere/>
    </Canvas>
  );
}
