import {
  OrbitControls,
  MeshReflectorMaterial,
  PerspectiveCamera,
} from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Experience() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      {/* Lights */}
      <directionalLight position={[3, 1, 3]} intensity={3} />
      <ambientLight intensity={0.5} />

      {/* Camera */}
      <PerspectiveCamera
        fov={45}
        near={0.1}
        far={1000}
        position={[20, 20, -50]}
      />

      {/* Inserting orbit contols */}
      <OrbitControls makeDefault />

      {/* Adding Mesh for basic floor */}
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={0.5}
          mirror={0.5}
          color={"#0e2433"}
        />
      </mesh>

      {/* mesh for box */}
      <mesh ref={meshRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="blue" />
      </mesh>
    </>
  );
}
