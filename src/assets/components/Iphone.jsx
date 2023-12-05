import { useGLTF } from "@react-three/drei";

export function Iphone() {
  const { nodes, materials } = useGLTF("./model/myRoom9.glb");

  return (
    <mesh
    castShadow
    geometry={nodes.iphone.geometry}
    material={materials["default.003"]}
    position={[-1.492, 0.817, -1.394]}
    rotation={[-0.204, 1.474, -1.346]}
    scale={0.284}
  />
  );
}

useGLTF.preload("./model/myRoom9.glb");
