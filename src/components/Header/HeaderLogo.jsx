import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import PATHS from "../../constants/path";
import { Typography } from "@mui/material";

const HeaderLogo = () => {
  return (
    <Box>
      <Link
        to={PATHS.HOME}
        className="header__logo"
        style={{ textDecoration: "none" }}
      >
        <Typography
          sx={{
            fontSize: "3rem",
            fontWeight: "900",
            color: "#FF5733",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            letterSpacing: "0.5rem",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          Movie
        </Typography>
      </Link>
    </Box>
  );
};

export default HeaderLogo;
