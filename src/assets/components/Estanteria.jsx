import { useGLTF } from "@react-three/drei";

export function Estanteria() {
  const { nodes, materials } = useGLTF("./model/myRoom9.glb");

  return (
    <group position={[2.374, 1.433, -1.129]} rotation={[0, -1.571, 0]}>
    <mesh
 
      geometry={nodes.estanteria.geometry}
      material={materials["default.008"]}
      position={[0.503, 0.304, -0.343]}
      rotation={[0, 0.06, 0]}
      scale={[1.485, 1.485, 4.809]}
    />
  </group>
  );
}

useGLTF.preload("./model/myRoom9.glb");
