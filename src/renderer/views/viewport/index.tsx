import { Grid, Loader } from "@/renderer/components/viewport";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";

import { OrbitControls, Stats } from "@react-three/drei";

const Viewport: React.FC<{}> = () => {
  const [path, setPath] = useState(null);
  useEffect(() => {
    const dropZone = document.getElementById("polylens");
    dropZone.addEventListener("dragover", (event) => {
      event.preventDefault();
      event.stopPropagation();
      event.dataTransfer.dropEffect = "copy";
    });

    dropZone.addEventListener("drop", async (event) => {
      event.preventDefault();
      event.stopPropagation();

      const files = event.dataTransfer.files;

      if (files.length > 0) {
        const file = files[0];
        console.log("Dropped file:", file.path);
        setPath(file.path);
        // const model = await window.electronAPI.load_gltf(file.path);
        // console.log(model);
        // Now you can send the file path to the main process to handle further
        // For example, call your IPC function here
      }
    });
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
