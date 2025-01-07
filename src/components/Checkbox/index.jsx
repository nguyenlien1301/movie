import { FormControlLabel, Typography } from "@mui/material";
import React from "react";

const Checkbox = () => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          //   checked={rememberMe}
          //   onChange={handleCheckboxChange}
          color="primary"
          sx={{
            ".MuiSvgIcon-root": {
              width: "20px",
              height: "20px",
            },
          }}
        />
      }
      label={<Typography sx={{ fontSize: "14px" }}>Nhớ mật khẩu</Typography>}
      sx={{ alignSelf: "flex-start", mt: 1 }} // Căn chỉnh cho đẹp
    />
  );
};

export default Checkbox;
