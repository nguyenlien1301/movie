import { Typography } from "@mui/material";
import React from "react";

const TypographyTitle = ({ children, ...rest }) => {
  return (
    <Typography
      component="h2"
      variant="h2"
      sx={{ fontSize: "var(--fz-h2)", fontWeight: "bold" }}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default TypographyTitle;
