import React from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import Marker from "./Marker";
import Earth from "./Earth";

function Group() {
  const ref = React.useRef<THREE.Group>(null);

  useFrame((state, delta, xrFrame) => {
    if (ref.current) {
      ref.current.rotation.y += delta / 10;
    }
  });

  return (
    <group ref={ref}>
      <Marker position={[10, 1, 1]} />
      <Earth />
    </group>
  );
}
export default Group
