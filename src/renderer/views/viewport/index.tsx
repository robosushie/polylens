import { Camera, Grid, Lights, Loader } from "@/renderer/components/viewport";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";

import { OrbitControls, Stats } from "@react-three/drei";

const Viewport: React.FC<{}> = () => {
  return (
    <Canvas
      className="w-full h-full bg-viewport-base-color rounded"
      camera={{ position: [3, 1, 0] }}
    >
      <Loader />
      <Lights />
      <Camera />
      <OrbitControls />
      <Stats />
      <Grid />
    </Canvas>
  );
};

export default Viewport;
