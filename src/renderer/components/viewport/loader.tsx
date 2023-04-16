import React from "react";
import { useGLTF } from "@react-three/drei";

const Loader: React.FC<{ path: string }> = ({ path }) => {
  const gltf = useGLTF(path);
  return <primitive object={gltf.scene} />;
};

export default Loader;
