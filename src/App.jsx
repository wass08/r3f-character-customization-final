import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Interface from "./components/Interface";

function App() {
  return (
    <>
      <Canvas
        camera={{ position: [1, 1.5, 2.5], fov: 50 }}
        shadows
        gl={{ preserveDrawingBuffer: true }}
      >
        <Experience />
      </Canvas>
      <Interface />
    </>
  );
}

export default App;
