import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Environment } from "@react-three/drei";
import Earth from "./Earth";
import Marker from "./Marker";
import { Perf } from "r3f-perf";

function App() {
  return (
    <Canvas>
      <Environment
        background
        near={1}
        far={100000}
        resolution={2048}
        environmentIntensity={3}
      >
        <Stars
          radius={70}
          depth={100}
          count={10000}
          factor={4}
          saturation={1}
          fade
          speed={1}
        />
      </Environment>
      <ambientLight intensity={4} />
      <group>
        {/* <Marker position={[10, 1, 1]} /> */}
        <Earth />
      </group>
      <OrbitControls makeDefault />
      <Perf position="top-left" />
    </Canvas>
  );
}

export default App;
