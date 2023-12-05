import { useGLTF } from "@react-three/drei";

export function Keyboard() {
  const { nodes, materials } = useGLTF("./model/myRoom9.glb");

  return (
    <mesh
    castShadow
    receiveShadow
    geometry={nodes.keyboard.geometry}
    material={materials["default.010"]}
    position={[-0.362, 0.824, -1.306]}
    rotation={[0, -1.571, 0]}
    scale={0.41}
  />
  );
}

useGLTF.preload("./model/myRoom9.glb");