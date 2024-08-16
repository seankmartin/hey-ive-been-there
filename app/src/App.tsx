import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

function App() {
  return (
    <Canvas
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [3, 2, 6],
      }}
    >
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial attach="material" color="hotpink" />
      </mesh>
    </Canvas>
  );
}

export default App;
