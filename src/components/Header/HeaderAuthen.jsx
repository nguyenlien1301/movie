import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Logout from "@mui/icons-material/Logout";
import { handleLogout } from "../../store/reducer/authReducer";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import PATHS from "../../constants/path";
import { MENU_ITEM_STYLES } from "../MenuItemStyle";
import PersonIcon from "@mui/icons-material/Person";

const HeaderAuthen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _onLogout = (e) => {
    e?.preventDefault();
    dispatch(handleLogout());
    navigate(PATHS.HOME);
  };
  return (
    <Box sx={MENU_ITEM_STYLES}>
      <IconButton size="small">
        <Avatar
          sx={{
            width: { mobileXs: "30px", mobileSm: "40px" },
            height: { mobileXs: "30px", mobileSm: "40px" },
          }}
          src="https://i.pinimg.com/564x/38/ec/77/38ec776c73b760bf46508e929b799bc8.jpg"
          alt="nguyenlien"
        ></Avatar>
      </IconButton>
      <Box
        component="ul"
        sx={{ transform: " translateY(-40%)", right: 0, pb: "10px" }}
      >
        <Box component="li">
          <Link
            to={PATHS.PROFILE}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <PersonIcon />
            Profile
          </Link>
        </Box>
        <Box component="li">
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
            onClick={_onLogout}
          >
            <Logout /> Logout
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderAuthen;
