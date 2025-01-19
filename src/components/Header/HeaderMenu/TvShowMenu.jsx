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

const TvShowMenu = () => {
  return (
    <Box>
      <Box component="ul" sx={MENU_ITEM_STYLES}>
        <Box component="li">
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            TV
            <ExpandMoreIcon />
          </Box>
          <Box component="ul">
            <Box component="li">
              <Link to={PATHS.TV_SERIES.AIRING_TODAY}>Airing Today</Link>
            </Box>
            <Box component="li">
              <Link to={PATHS.TV_SERIES.ON_THE_AIR}>On TV</Link>
            </Box>
            <Box component="li">
              <Link to={PATHS.TV_SERIES.POPULAR}>Popular</Link>
            </Box>
            <Box component="li">
              <Link to={PATHS.TV_SERIES.TOP_RATED}>Top Rated</Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TvShowMenu;
