import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls } from "@react-three/drei";
import Earth from "./Earth";
import { Perf } from "r3f-perf";

function App() {
  return (
    <Canvas>
      <Stage
        shadows={{ type: "contact", opacity: 0.4, blur: 3 }}
        environment="night"
      >
        <ambientLight intensity={Math.PI} />
        <directionalLight position={[10, 10, 10]} intensity={0.5} />
        <Earth />
      </Stage>
      <OrbitControls />
      <Perf position="top-left" />
    </Canvas>
  );
}

export default App;
