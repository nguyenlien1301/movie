import { Box, Button, MenuItem } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import PATHS from "../../../constants/path";
import MovieMenu from "./MovieMenu";
import TvShowMenu from "./TvShowMenu";
import GenresMenu from "./GenresMenu";
import { MENU_ITEM_STYLES } from "../../MenuItemStyle";

// RouterLink vì tránh nhầm với Link của @mui/material

const HeaderMenu = () => {
  return (
    <Box
      sx={{
        display: { mobileXs: "none", tabletMd: "flex" },
        alignItems: "center",
        gap: "var(--gap-menu-item)",
      }}
    >
      <Box component="ul" sx={MENU_ITEM_STYLES}>
        <Box component="li">
          <Link to={PATHS.HOME}>Trang chủ</Link>
        </Box>
      </Box>
      <MovieMenu />
      <TvShowMenu />
      <GenresMenu />
      <Box component="ul" sx={MENU_ITEM_STYLES}>
        <Box component="li">
          <Link to={PATHS.TRENDING.INDEX}>Xu hướng</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderMenu;
