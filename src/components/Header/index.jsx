import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";
import HeaderAuthen from "./HeaderAuthen";
import { Link as RouterLink } from "react-router-dom";
import PATHS from "../../constants/path";
import ModeSelect from "../ModeSelect";
import HeaderHambuger from "./HeaderHambuger";
import HeaderMenu from "./HeaderMenu";
import ButtonCustom from "../Button";
import tokenMethod from "../../utils/token";

function Header() {
  return (
    <AppBar
      sx={{
        transition: "0.5s",
        bgcolor: (theme) => theme.palette.common,
        opacity: "1",
        zIndex: 1000,
      }}
    >
      <Toolbar
        // id="back-to-top-anchor"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: (theme) => theme.header.heightHeader,
          width: "100%",
          gap: { mobileXs: 2 },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <HeaderHambuger />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { tabletLg: 5, tabletMd: 4 },
            }}
          >
            <HeaderLogo />
            <HeaderMenu />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { mobileXs: 1, mobileSm: 2, desktopSm: 5 },
          }}
        >
          <HeaderSearch />
          {/* <ModeSelect /> */}
          {!tokenMethod.get() && (
            <ButtonCustom
              component={RouterLink}
              to={PATHS.ACCOUNT}
              variant="contained"
              sx={{
                height: { mobileMd: "30px", desktopSm: "35px" },
                p: {
                  mobileXs: "4px 0px",
                  mobileSm: "4px 14px",
                  // mobileMd: "6px, 12px",
                  mobileMd: "6px 20px",
                },
                minWidth: { mobileXs: "40px" },
                width: "fit-content",
                textTransform: "capitalize",
              }}
            >
              Login
            </ButtonCustom>
          )}
          {!!tokenMethod.get() && <HeaderAuthen />}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
