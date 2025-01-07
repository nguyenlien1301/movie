import {
  Box,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeIcon from "@mui/icons-material/Home";
import PATHS from "../../constants/path";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MovieIcon from "@mui/icons-material/Movie";
import CategoryIcon from "@mui/icons-material/Category";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
const MENU_CHILDREN_STYLE = {
  padding: "5px 10px 5px 35px",
  "& .MuiListItemIcon-root": {
    minWidth: "35px",
  },
};
const MENU_STYLE = {
  "& .MuiListItemIcon-root": {
    minWidth: "30px",
  },
};
const drawerWidth = 240;
const HeaderHambuger = () => {
  const { pathname } = useLocation();
  const [anchorNav, setAnchorNav] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // state to track the currently open menu
  const openMenuHandler = (menuName) => {
    setOpenMenu((prevState) => (prevState === menuName ? null : menuName)); // Toggle the clicked menu, close others
  };
  const closeMenu = () => {
    setAnchorNav(false);
  };
  useEffect(() => {
    closeMenu(false);
  }, [pathname]);

  return (
    <Box>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        sx={{
          display: { tabletMd: "none" },
          "& .MuiSvgIcon-root": {
            fontSize: { mobileXs: "2.5rem", mobileXl: "3.5rem" },
          },
        }}
        onClick={() => setAnchorNav(true)}
      >
        <MenuIcon sx={{ color: (theme) => theme.palette.common }} />
      </IconButton>
      <Drawer
        open={Boolean(anchorNav)}
        onClose={closeMenu}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
          "&.MuiDrawer-root": {
            zIndex: "99999999",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            height: "50px",
            borderBottom: (theme) =>
              `1px solid ${theme.borderColorCustom.borderColor}`,
            padding: 2,
          }}
        >
          <IconButton onClick={closeMenu}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              disableRipple
              component={Link}
              to={PATHS.HOME}
              sx={MENU_STYLE}
            >
              <ListItemIcon>
                <HomeIcon sx={{ fontSize: "2rem" }} />
              </ListItemIcon>
              <ListItemText
                primary="Home"
                sx={{
                  "& .MuiTypography-root": {
                    fontSize: "var(--fz-text)",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
          <Box>
            <ListItem disablePadding onClick={() => openMenuHandler("movie")}>
              <ListItemButton disableRipple sx={MENU_STYLE}>
                <ListItemIcon>
                  <MovieIcon sx={{ fontSize: "2rem" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Phim"
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: "var(--fz-text)",
                    },
                  }}
                />
                {openMenu === "movie" ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={openMenu === "movie"} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  disableRipple
                  component={Link}
                  to={PATHS.MOVIES.NOW_PLAYING}
                  sx={MENU_CHILDREN_STYLE}
                >
                  <ListItemText primary="Phim đang chiếu" />
                </ListItemButton>
                <ListItemButton
                  disableRipple
                  component={Link}
                  to={PATHS.MOVIES.POPULAR}
                  sx={MENU_CHILDREN_STYLE}
                >
                  <ListItemText primary="Phim phổ biến" />
                </ListItemButton>
                <ListItemButton
                  disableRipple
                  component={Link}
                  to={PATHS.MOVIES.TOP_RATED}
                  sx={MENU_CHILDREN_STYLE}
                >
                  <ListItemText primary="Phim được đánh giá cao" />
                </ListItemButton>
                <ListItemButton
                  disableRipple
                  component={Link}
                  to={PATHS.MOVIES.UPCOMING}
                  sx={MENU_CHILDREN_STYLE}
                >
                  <ListItemText primary="Phim sắp chiếu" />
                </ListItemButton>
              </List>
            </Collapse>
          </Box>
          <Box>
            <ListItem disablePadding onClick={() => openMenuHandler("tvshow")}>
              <ListItemButton disableRipple sx={MENU_STYLE}>
                <ListItemIcon>
                  <LiveTvIcon sx={{ fontSize: "2rem" }} />
                </ListItemIcon>
                <ListItemText
                  primary="TV"
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: "var(--fz-text)",
                    },
                  }}
                />
                {openMenu === "tvshow" ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={openMenu === "tvshow"} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  disableRipple
                  component={Link}
                  to={PATHS.TV_SERIES.AIRING_TODAY}
                  sx={MENU_CHILDREN_STYLE}
                >
                  <ListItemText primary="Phát sóng ngày hôm nay" />
                </ListItemButton>
                <ListItemButton
                  disableRipple
                  component={Link}
                  to={PATHS.TV_SERIES.ON_THE_AIR}
                  sx={MENU_CHILDREN_STYLE}
                >
                  <ListItemText primary="Đang phát sóng" />
                </ListItemButton>
                <ListItemButton
                  disableRipple
                  component={Link}
                  to={PATHS.TV_SERIES.POPULAR}
                  sx={MENU_CHILDREN_STYLE}
                >
                  <ListItemText primary="Phổ biến" />
                </ListItemButton>
                <ListItemButton
                  disableRipple
                  component={Link}
                  to={PATHS.TV_SERIES.TOP_RATED}
                  sx={MENU_CHILDREN_STYLE}
                >
                  <ListItemText primary="Đánh giá cao" />
                </ListItemButton>
              </List>
            </Collapse>
          </Box>
          <Box>
            <ListItem disablePadding onClick={() => openMenuHandler("genre")}>
              <ListItemButton disableRipple sx={MENU_STYLE}>
                <ListItemIcon>
                  <CategoryIcon sx={{ fontSize: "2rem" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Thể loại"
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: "var(--fz-text)",
                    },
                  }}
                />
                {openMenu === "genre" ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={openMenu === "genre"} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  disableRipple
                  component={Link}
                  to={PATHS.GENRES.MOVIE}
                  sx={MENU_CHILDREN_STYLE}
                >
                  <ListItemText primary="Thể loại phim" />
                </ListItemButton>
                <ListItemButton
                  disableRipple
                  component={Link}
                  to={PATHS.GENRES.TV}
                  sx={MENU_CHILDREN_STYLE}
                >
                  <ListItemText primary="Thể loại phim truyền hình" />
                </ListItemButton>
              </List>
            </Collapse>
          </Box>
          <Box>
            <ListItem disablePadding>
              <ListItemButton
                disableRipple
                component={Link}
                to={PATHS.TRENDING.INDEX}
                sx={MENU_STYLE}
              >
                <ListItemIcon>
                  <TrendingUpIcon sx={{ fontSize: "2rem" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Xu hướng"
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: "var(--fz-text)",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Box>
        </List>
      </Drawer>
    </Box>
  );
};
export default HeaderHambuger;
