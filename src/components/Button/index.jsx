import { Button } from "@mui/material";
import React from "react";

const ButtonCustom = ({ variant, sx, disabled, children, ...rest }) => {
  let sxClass = "";
  switch (variant) {
    case "contained":
      sxClass = {
        color: "var(--white)",
        border: "1px solid transparent",
        backgroundColor: "#2979ff",
        fontSize: "var(--fz-btn)",
        "&:hover": {
          border: "1px solid #2979ff",
          boxShadow: "0 0 0 3px rgba(1, 142, 245, 0.25)",
          backgroundColor: "transparent",
          color: (theme) => theme.colors.color,
        },
      };
      break;
    default:
      break;
  }
  return (
    <Button
      variant={variant}
      disabled={disabled}
      fullWidth
      sx={{ ...sxClass, ...sx }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default ButtonCustom;
