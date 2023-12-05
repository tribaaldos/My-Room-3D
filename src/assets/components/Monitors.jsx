import { useGLTF } from "@react-three/drei";
import { useTexture } from "@react-three/drei";
// import { button, useControls } from "leva";

import * as THREE from "three";

export function Monitors(props) {
  const { nodes, materials } = useGLTF("./model/myRoom8.glb");
  const texture = useTexture("./textures/rocketleague.png");
  const right = useTexture("./textures/code.png");
  texture.flipY = false;
  right.flipY = false;


  return (
    <>
      <group {...props} dispose={null}>


        <group position={[-0.059, 1.272, -1.021]} rotation={[0, -1.571, 0]}>
          <mesh
            geometry={nodes.monitor_left.geometry}
            material={materials["default.004"]}
            position={[-0.629, -0.028, 0.971]}
            scale={0.845}
          >
            <mesh
              geometry={nodes.screen_left.geometry}
              material={
                new THREE.MeshBasicMaterial({
                  map: texture,
                  emissive: '0xff0000'
                })
              }
              position={[0.072, 0.087, 0.005]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.738, 0.668, 0.36]}
            />
            material.emissive.multiplYScalar(0.5);
          </mesh>
          <mesh
            geometry={nodes.monitor_right.geometry}
            material={materials["default.004"]}
            position={[-0.629, -0.029, -0.401]}
            scale={0.845}
          >
            <mesh
              geometry={nodes.screen_left001.geometry}
              material={
                new THREE.MeshBasicMaterial({
                  map: right,
                  emissive: '0xff0000'
                })
              }
              position={[0.079, 0.088, -0.003]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.727, 0.57, 0.359]}
            />
          </mesh>
        </group>
      </group>
    </>
  );
}

useGLTF.preload("./model/myRoom8.glb");
