import { useGLTF } from "@react-three/drei";

export function Chair() {
  const { nodes, materials } = useGLTF("./model/myRoom9.glb");

  return (
    <group position={[-0.059, 0.713, 1.059]} rotation={[0, 1.384, 0]}>
    <mesh
      castShadow
      geometry={nodes.chair.geometry}
      material={materials["default.001"]}
      position={[0.813, 0.147, -0.154]}
      rotation={[0, 0.128, 0]}
    />
  </group>
  );
}

useGLTF.preload("./model/myRoom9.glb");