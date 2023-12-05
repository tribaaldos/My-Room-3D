import { useGLTF } from "@react-three/drei";

export function Bed() {
  const { nodes, materials } = useGLTF("./model/myRoom9.glb");

  return (
    <group
    position={[1.953, 0, 3.219]}
    rotation={[0, 1.571, 0]}
    scale={1.393}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.bed.geometry}
      material={materials["default.009"]}
      position={[-0.544, 0.471, -0.351]}
      rotation={[0, 1.571, 0]}
      scale={[1.428, 1.32, 1.826]}
    />
  </group>
  );
}

useGLTF.preload("./model/myRoom9.glb");
