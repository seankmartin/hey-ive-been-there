import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

function Earth() {
  const props = useTexture({
    map: "earth/8k_earth_nightmap.jpg",
    normalMap: "earth/normal.jpg",
    roughnessMap: "earth/roughness.jpg",
    emissiveMap: "earth/light.jpg",
  });

  const ref = React.useRef<THREE.Mesh>(null);

  useFrame((state, delta, xrFrame) => {
    if (ref.current) {
      ref.current.rotation.y += delta / 10;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[5, 64, 64]} />
      <meshStandardMaterial
        emissive={"red"}
        emissiveIntensity={5}
        roughness={0.8}
        {...props}
      />
    </mesh>
  );
}
export default Earth;
