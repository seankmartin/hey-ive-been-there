import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls, Stars } from "@react-three/drei";
import Earth from "./Earth";
import { Perf } from "r3f-perf";

function App() {
  return (
    <Canvas>
      <Stars
        radius={70}
        depth={10}
        count={10000}
        factor={4}
        saturation={1}
        fade
        speed={1}
      />
      <Stage
        preset={"rembrandt"}
        adjustCamera={1}
        environment="night"
        intensity={0.1}
      >
        <Earth />
      </Stage>
      <OrbitControls makeDefault />
      <Perf position="top-left" />
    </Canvas>
  );
}

export default App;
