import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import LoginPage from "./login";

const AccountPage = () => {
  const isSmallScreen = useMediaQuery((theme) =>
    theme.breakpoints.down("mobileLg")
  );

  return (
    <Box
      sx={{
        pt: (theme) => `calc(${theme.header.heightHeader} + var(--pt))`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        zIndex: -1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { mobileXs: "column", mobileLg: "row" },
          bgcolor: (theme) => theme.palette.common, // Nền tối cho phần form
          borderRadius: 2,
          boxShadow: 3,
          maxWidth: "1000px",
          width: "80%",
          height: "80%",
          overflow: "hidden",
        }}
      >
        {!isSmallScreen && (
          <Box
            sx={{
              flex: 1,
              backgroundImage:
                "url(https://images.pexels.com/photos/5207519/pexels-photo-5207519.jpeg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderTopLeftRadius: 2,
              borderBottomLeftRadius: 2,
              minHeight: "100%",
            }}
          />
        )}
        <LoginPage />
      </Box>
    </Box>
  );
};

export default AccountPage;
