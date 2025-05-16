import { useTexture } from "@react-three/drei";

function Earth() {
  const props = useTexture({
    map: "earth/8k_earth_nightmap.jpg",
    normalMap: "earth/normal.jpg",
    roughnessMap: "earth/roughness.jpg",
    emissiveMap: "earth/light.jpg",
  });

  return (
    <mesh>
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
