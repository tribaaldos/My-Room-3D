import { useGLTF } from "@react-three/drei";

export function Desk() {
  const { nodes, materials } = useGLTF("./model/myRoom9.glb");

  return (
<group
        position={[-0.059, 0.393, -1.486]}
        rotation={[Math.PI, -0.013, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desk_left.geometry}
          material={materials["default.005"]}
          position={[0.335, 0.018, -0.073]}
          scale={[2.657, 1.041, 1.041]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.desk_right.geometry}
          material={materials["default.005"]}
          position={[-2.411, 0.018, -1]}
          rotation={[0, -1.571, 0]}
          scale={[1.657, 1.041, 1.785]}
        />
      </group>
  );
}

useGLTF.preload("./model/myRoom9.glb");
