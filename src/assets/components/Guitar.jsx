import { useGLTF } from "@react-three/drei";

export function Guitar(props) {
  const { nodes, materials } = useGLTF("./model/myRoom9.glb");

  return (
    <group {...props} dispose={null}>
      <group position={[-0.059, 0, 1.059]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.guitar.geometry}
          material={materials["default"]}
          position={[-2.625, 2.95, -1.5]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./model/myRoom9.glb");