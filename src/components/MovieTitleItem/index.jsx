import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const MovieTitleItem = ({ link, children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        cursor: "pointer",
        pb: "5px",
        borderBottom: "1.5px solid #ffffff93",
        "&:hover .MuiTypography-body1": {
          opacity: "1",
        },
      }}
    >
      <Typography
        variant="h5"
        component="h5"
        sx={{
          fontWeight: 600,
          fontSize: "var(--fz-h5)",
          cursor: "pointer",
          textTransform: "uppercase",
        }}
      >
        {children}
      </Typography>
      <Typography
        component={Link}
        to={link}
        sx={{
          fontWeight: 600,
          fontSize: "14px",
          cursor: "pointer",
          color: (theme) => theme.palette.common,
          backgroundColor: "transparent",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: 1,
          opacity: "0",
          transition: "opacity 0.3s ease",
        }}
      >
        View all
        <ArrowForwardIosIcon sx={{ fontSize: "12px" }} />
      </Typography>
    </Box>
  );
};

export default MovieTitleItem;
