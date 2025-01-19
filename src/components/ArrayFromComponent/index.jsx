import React from "react";
import Grid from "@mui/material/Grid2";
import SkeletonImage from "../SkeletonImage";

const ArrayFromComponent = () => {
  return Array(10)
    .fill("")
    .map((_, index) => (
      <Grid
        key={index}
        size={{
          desktopSm: 2,
          tabletSm: 3,
          mobileLg: 6,
          mobileXs: 12,
          mediumDevice: 4,
          smallDevice: 6,
          largeDevice: 2.4,
        }}
      >
        <SkeletonImage />
      </Grid>
    ));
};

export default ArrayFromComponent;
