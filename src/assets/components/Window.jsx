import { useGLTF } from "@react-three/drei";

export function Window() {
  const { nodes, materials } = useGLTF("./model/myRoom9.glb");
  return (
    <group
    position={[0.571, 1.106, -0.285]}
    rotation={[-Math.PI / 2, 0, -1.563]}
    scale={[0.029, 0.049, 0.038]}
  >
    <group rotation={[Math.PI / 2, 0, 0]}>
      <mesh

        geometry={nodes.Ring_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh

        geometry={nodes.Ring1_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh

        geometry={nodes.Ring2_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh

        geometry={nodes.Ring3_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh

        geometry={nodes.Ring4_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh
  
        geometry={nodes.Ring5_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh
  
        geometry={nodes.Rod_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh

        geometry={nodes.Rod_Back_1_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh

        geometry={nodes.Rod_Back_2_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh

        geometry={nodes.Rod_End_1_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh
 
        geometry={nodes.Rod_End_2_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh

        geometry={nodes.Curtain_1_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh

        geometry={nodes.Curtain_2_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh

        geometry={nodes.Window_Frame_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh

        geometry={nodes.Window_Frame1_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh
  
        geometry={nodes.Window_Frame10_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh

        geometry={nodes.Window_Frame11_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window_Frame2_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh

        geometry={nodes.Window_Frame3_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh

        geometry={nodes.Window_Frame4_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh

        geometry={nodes.Window_Frame5_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh

        geometry={nodes.Window_Frame6_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh
 
        geometry={nodes.Window_Frame7_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh
    
        geometry={nodes.Window_Frame8_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh

        geometry={nodes.Window_Frame9_lambert1_0.geometry}
        material={materials.lambert1}
      />
    </group>
  </group>
  );
}

useGLTF.preload("./model/myRoom9.glb");
