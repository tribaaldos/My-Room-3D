import { Canvas } from "@react-three/fiber";
import "./App.css";
import { useRef } from "react";
import { button, useControls } from 'leva';
import Experience from "./Experience";
function App() {

  const controls = useRef();
  useControls("dolly", {
    in: button(() => {
      controls.current.dolly(1, true);
    }),
    out: button(() => {
      controls.current.dolly(-1, true);
    }),
  });
  return (
    <>
        <Canvas shadows camera={{ position: [0, 3, 7.5] }}>
        <color args={["white"]} attach="background" />

          <Experience />
        </Canvas>
    </>
  );
}

export default App;
