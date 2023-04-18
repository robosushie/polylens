import React from "react";

import { APP_COLOR_SCHEME } from "@/config/color-scheme";
import { Grid } from "@react-three/drei";

const GridWrapper: React.FC<{}> = () => {
  const gridParam = {
    cellSize: 1,
    cellThickness: 0.5,
    sectionSize: 2,
    sectionThickness: 1,
    fadeDistance: 120,
    fadeStrength: 5,
  };
  return (
    <>
      <Grid
        infiniteGrid
        cellColor={APP_COLOR_SCHEME["viewport-grid-color"] as any}
        sectionColor={APP_COLOR_SCHEME["viewport-grid-color"] as any}
        cellSize={gridParam.cellSize}
        cellThickness={gridParam.cellThickness}
        fadeDistance={gridParam.fadeDistance}
        sectionSize={gridParam.sectionSize}
        sectionThickness={gridParam.sectionThickness}
        fadeStrength={gridParam.fadeStrength}
        followCamera
      />
    </>
  );
};

export default GridWrapper;
