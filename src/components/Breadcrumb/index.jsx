import React from "react";
import { Breadcrumbs, IconButton, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";
const Breadcrumb = ({ children }) => {
  return (
    <Breadcrumbs separator={<NavigateNextIcon fontSize="large" />}>
      {children}
    </Breadcrumbs>
  );
};

const BreadcrumbItem = ({ children, isActive = false, isBack = false }) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // Quay lại trang trước đó
  };
  if (isBack) {
    return (
      <IconButton onClick={handleGoBack} sx={{ color: "white", fontSize: 30 }}>
        <WestIcon
          sx={{
            "&.MuiSvgIcon-root": {
              width: "2.5rem",
              height: "2.5rem",
              ":hover": {
                color: "#fcb941",
              },
            },
          }}
        />
      </IconButton>
    );
  }
  if (isActive) {
    return (
      <Typography color="text.primary" sx={{ fontSize: "18px" }}>
        {children}
      </Typography>
    );
  }

  return (
    <Typography
      sx={{
        a: {
          fontSize: "18px",
          color: "rgba(255, 255, 255, 0.7)",
          transition: "all 0.3s",
          ":hover": { color: "#fcb941" },
          textDecoration: "none",
        },
      }}
    >
      {children}
    </Typography>
  );
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
