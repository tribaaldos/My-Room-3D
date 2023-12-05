import { useGLTF } from "@react-three/drei";

export function Speakers() {
  const { nodes, materials } = useGLTF("./model/myRoom9.glb");

  return (
    <>
      <group
        position={[-0.059, 2.097, 1.059]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.48}
      >
        <mesh
          receiveShadow
          geometry={nodes.speaker_right.geometry}
          material={materials["default.002"]}
          position={[-5.887, -0.189, -1.478]}
        />
      </group>
      <mesh
        receiveShadow
        geometry={nodes.speaker_left.geometry}
        material={materials["default.002"]}
        position={[-0.88, 2.075, -1.751]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.48}
      />
    </>
  );
}

useGLTF.preload("./model/myRoom9.glb");
