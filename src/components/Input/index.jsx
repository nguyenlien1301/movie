import React, { forwardRef } from "react";
import { Fade, FormLabel, TextField, Typography } from "@mui/material";

const Input = (
  { label, placeholder = "", disabled, requird, error, ...rest },
  ref
) => {
  return (
    <>
      <FormLabel htmlFor="my-textfield" sx={{ fontSize: "14px" }}>
        {label} {requird && "*"}
      </FormLabel>
      <TextField
        ref={ref}
        placeholder={placeholder}
        variant="outlined"
        fullWidth
        disabled={disabled}
        margin="normal"
        {...rest}
      />
      {error && (
        <Fade in={!!error} timeout={200}>
          <Typography sx={{ color: "red", fontSize: "14px" }}>
            {error}
          </Typography>
        </Fade>
      )}
    </>
  );
};

export default forwardRef(Input);
