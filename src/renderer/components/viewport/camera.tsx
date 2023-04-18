import React from "react";
import { PerspectiveCamera } from "@react-three/drei";

const Camera: React.FC<{}> = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[16, 8, 0]} far={4000} />
    </>
  );
};

export default Camera;
