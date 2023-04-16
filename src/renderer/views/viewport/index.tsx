import { Grid, Loader } from "@/renderer/components/viewport";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";

import { OrbitControls, Stats } from "@react-three/drei";

const Viewport: React.FC<{}> = () => {
  const [path, setPath] = useState(null);
  useEffect(() => {
    // setPath(
    //   "D:/Projects/TempSparkAR/DinoWorld/objects/brachiosaurus(1)/brachiosaurus.gltf"
    // );
  }, []);
  return (
    <Canvas
      className="w-full h-full bg-viewport-base-color rounded"
      camera={{ position: [3, 1, 0] }}
    >
      {path && <Loader path={path} />}
      <OrbitControls />
      <Stats />
      <Grid />
    </Canvas>
  );
};

export default Viewport;
