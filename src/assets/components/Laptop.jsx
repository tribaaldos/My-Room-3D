import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from 'three';
export function Laptop() {
  const { nodes, materials } = useGLTF("./model/myRoom9.glb");
 const texture = useTexture('./textures/blender.png')
 texture.flip
  return (
    <>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={
          new THREE.MeshBasicMaterial({
            map: texture,
            emissive: '0xff0000'
          })
        }        position={[1.502, 1.138, -1.674]}
        rotation={[1.295, -0.104, 0.344]}
        scale={[0.327, 0.229, 0.199]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.laptop.geometry}
        material={materials["default.012"]}
        position={[1.417, 1.099, -1.415]}
        rotation={[Math.PI, -1.244, Math.PI]}
        scale={0.586}
      />
    </>
  );
}

useGLTF.preload("./model/myRoom9.glb");
