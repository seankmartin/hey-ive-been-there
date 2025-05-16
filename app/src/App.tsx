import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls, Stars, Environment } from "@react-three/drei";
import Earth from "./Earth";
import { Perf } from "r3f-perf";

function App() {
  return (
    <Canvas>
      <Environment background near={1} far={1000} resolution={2048} environmentIntensity={5}>
        <Stars
          radius={70}
          depth={40}
          count={10000}
          factor={4}
          saturation={1}
          fade
          speed={1}
        />
      </Environment>
      <ambientLight intensity={6}/>
      <Earth />
      <OrbitControls makeDefault />
      <Perf position="top-left" />
    </Canvas>
  );
}

export default App;
