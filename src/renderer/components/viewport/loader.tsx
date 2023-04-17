import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const Loader: React.FC<{ path: string }> = ({ path }) => {
  //   const { scene } = useThree();
  //   const getModel = async (path: any) => {
  //     console.log("model sent");
  //     const gltfData = await window.electronAPI.load_gltf(path);
  //     console.log("model received", gltfData);
  //     // const gltf = {
  //     //   json: gltfData.json,
  //     //   buffers: gltfData.buffers.map(
  //     //     (bufferData: any) => new Uint8Array(bufferData).buffer
  //     //   ),
  //     // };
  //     // scene.add(JSON.parse(model.scene));
  //   };
  //   useEffect(() => {
  //     getModel(path);
  //   }, []);

  const gltf = useGLTF(path);

  return <primitive object={gltf.scene} />;
};

export default Loader;
