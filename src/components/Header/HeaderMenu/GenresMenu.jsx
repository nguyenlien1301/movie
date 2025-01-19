import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PATHS from "../../../constants/path";
import Fade from "@mui/material/Fade";
import { Link, useLocation } from "react-router-dom";
import { ListItemText } from "@mui/material";
import { MENU_ITEM_STYLES } from "../../MenuItemStyle";

const GenresMenu = () => {
  return (
    <Box>
      <Box component="ul" sx={MENU_ITEM_STYLES}>
        <Box component="li">
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            genres
            <ExpandMoreIcon />
          </Box>
          <Box component="ul">
            <Box component="li">
              <Link to={PATHS.GENRES.MOVIE}>Movie</Link>
            </Box>
            <Box component="li">
              <Link to={PATHS.GENRES.TV}>TV Series</Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GenresMenu;
