import React from "react";

import { APP_COLOR_SCHEME } from "@/config/color-config";
import { Grid } from "@react-three/drei";

const GridWrapper: React.FC<{}> = () => {
  return (
    <>
      <Grid
        infiniteGrid
        cellColor={APP_COLOR_SCHEME["viewport-grid-color"] as any}
        sectionColor={APP_COLOR_SCHEME["viewport-grid-color"] as any}
        fadeDistance={30}
        fadeStrength={5}
        followCamera
      />
    </>
  );
};

export default GridWrapper;
