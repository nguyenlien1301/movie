import React from "react";
import Grid from "@mui/material/Grid2";
import SkeletonImage from "../SkeletonImage";

const ArrayFromComponent = () => {
  return Array(12)
    .fill("")
    .map((_, index) => (
      <Grid
        key={index}
        size={{
          mobileXs: 6,
          mobileSm: 4,
          mobileXl: 3,
          mobileLg: 4,
          tabletSm: 2.4,
          desktopXs: 2,
        }}
      >
        <SkeletonImage />
      </Grid>
    ));
};

export default ArrayFromComponent;
