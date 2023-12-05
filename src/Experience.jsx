// import { useGLTF, useTexture } from "@react-three/drei";
import {
  CameraControls,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import { useRef } from "react";
import { button, useControls } from "leva";
import { Model } from "./Room";
import { DirectionalLightHelper } from "three";
import Lights from "./Lights";
export default function Experience() {
  const controls = useRef();
  const box = useRef();
  const directionalLightRef = useRef(); // Crear una referencia para la luz direccional

  useControls("fit", {
    fitToDesk: button(() => {
      controls.current.fitToBox(box.current, true);
    }),
  });

  function Luz() {
    if (directionalLightRef.current) {
      const Luz = new DirectionalLightHelper(
        directionalLightRef.current,
        0.2,
        0xff0000
      );
      // Agregar el helper a la escena
      directionalLightRef.current.parent.add(Luz);
    }
  }

  return (
    <>
      <Lights />
      <OrbitControls />
      <CameraControls ref={controls} />
      <Sky />
      <Model />
      <mesh
        ref={box}
        position={[0, 1.5, -1]}
        visible={false}
        castShadow
        receiveShadow
      >
        <boxGeometry />
        <meshStandardMaterial color={"blue"} />
      </mesh>
      <Luz ref={directionalLightRef.current} />
    </>
  );
}
