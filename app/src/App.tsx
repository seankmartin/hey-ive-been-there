import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls } from "@react-three/drei";
import Earth from "./Earth";
import { Perf } from "r3f-perf";

function App() {
  return (
    <Canvas>
      <Stage
        shadows={{ type: "contact", opacity: 0.2, blur: 3 }}
        environment="night"
      >
        <mesh position={[0, 1, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
        <Earth />
      </Stage>
      <OrbitControls />
      <Perf position="top-left" />
    </Canvas>
  );
}

export default App;
