import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
export function Tv(props) {
  const { nodes, materials } = useGLTF("./model/myRoom9.glb");
  const tele = useTexture("./textures/real.png");


  console.log(nodes);
  return (
    <group {...props} dispose={null}>
      <group position={[-0.059, 0.859, 1.059]}>
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.tv.geometry}
          material={materials["default.011"]}
          position={[-3.627, 1.59, 2.018]}
          scale={2.24}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.scren_tv001.geometry}
            material={
              new THREE.MeshBasicMaterial({
                map: tele,
                emissive: "0xff0000",
              })
            }
            position={[0.095, 0.008, 0.002]}
            // rotation={[Math.PI / 2, 0, 1.574]}
            rotation={[Math.PI / 2, 0, 1.574]}
            scale={[-0.727, -1.331, -0.492]}
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("./model/myRoom9.glb");
