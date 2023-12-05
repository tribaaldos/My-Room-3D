import { useGLTF } from "@react-three/drei";


export function Ps4() {
  const { nodes, materials } = useGLTF("./model/myRoom9.glb");

  return (
    <group
      position={[-1.998, 0.848, -1.398]}
      rotation={[0, -Math.PI / 2, 0]}
      scale={0.497}
    >
      <mesh
        castShadow
        geometry={nodes.ps4001.geometry}
        material={materials["default.006"]}
        position={[0.071, 0, 0.237]}
      />
    </group>
  );
}

useGLTF.preload("./model/myRoom9.glb");
