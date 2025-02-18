import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PATHS from "../../../constants/path";
import Fade from "@mui/material/Fade";
import { Link, useLocation } from "react-router-dom";
import { MENU_ITEM_STYLES } from "../../MenuItemStyle";

const MovieMenu = () => {
  return (
    <Box>
      <Box component="ul" sx={MENU_ITEM_STYLES}>
        <Box component="li">
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            Movies
            <ExpandMoreIcon />
          </Box>
          <Box component="ul">
            <Box component="li">
              <Link to={PATHS.MOVIES.NOW_PLAYING}>Now Playing</Link>
            </Box>
            <Box component="li">
              <Link to={PATHS.MOVIES.POPULAR}>Popular</Link>
            </Box>
            <Box component="li">
              <Link to={PATHS.MOVIES.TOP_RATED}>Top Rated</Link>
            </Box>
            <Box component="li">
              <Link to={PATHS.MOVIES.UPCOMING}>Upcoming</Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MovieMenu;
