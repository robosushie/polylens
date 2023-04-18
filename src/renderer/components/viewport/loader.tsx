import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";

import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import loader from "@/lib/loaders/loaders";
import { dropEventListener } from "@/lib/drop-file";

const Loader: React.FC<{}> = () => {
  const { scene } = useThree();
  useEffect(() => {
    dropEventListener(scene, loader);
  }, []);
  return null;
};

export default Loader;
