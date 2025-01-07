import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import PATHS from "../../constants/path";

const HeaderLogo = () => {
  return (
    <Box>
      <Link to={PATHS.HOME} className="header__logo">
        <Box
          sx={{
            width: "var(--size-logo)",
            height: "var(--size-logo)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            width="70"
            height="70"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{
                    stopColor: "#D71313",
                    stopOpacity: 1,
                  }}
                />
                <stop
                  offset="100%"
                  style={{
                    stopColor: "#FF0000",
                    stopOpacity: 1,
                  }}
                />
              </linearGradient>
            </defs>

            <polygon
              points="50,15 90,15 110,50 90,85 50,85 30,50"
              stroke="url(#grad1)"
              fill="none"
              stroke-width="4"
            />
            <polygon
              points="50,15 90,15 110,50 90,85 50,85 30,50"
              stroke="transparent"
              fill="none"
              stroke-width="2"
            />

            <polygon
              points="110,15 150,15 170,50 150,85 110,85 90,50"
              stroke="url(#grad1)"
              fill="none"
              stroke-width="4"
            />
            <polygon
              points="110,15 150,15 170,50 150,85 110,85 90,50"
              stroke="transparent"
              fill="none"
              stroke-width="2"
            />

            <polygon
              points="30,50 70,50 90,85 70,120 30,120 10,85"
              stroke="url(#grad1)"
              fill="none"
              stroke-width="4"
            />
            <polygon
              points="30,50 70,50 90,85 70,120 30,120 10,85"
              stroke="transparent"
              fill="none"
              stroke-width="2"
            />

            <polygon
              points="90,50 130,50 150,85 130,120 90,120 70,85"
              stroke="url(#grad1)"
              fill="none"
              stroke-width="4"
            />
            <polygon
              points="90,50 130,50 150,85 130,120 90,120 70,85"
              stroke="transparent"
              fill="none"
              stroke-width="2"
            />

            <polygon
              points="50,85 90,85 110,120 90,155 50,155 30,120"
              stroke="url(#grad1)"
              fill="none"
              stroke-width="4"
            />
            <polygon
              points="50,85 90,85 110,120 90,155 50,155 30,120"
              stroke="transparent"
              fill="none"
              stroke-width="2"
            />

            <polygon
              points="110,85 150,85 170,120 150,155 110,155 90,120"
              stroke="url(#grad1)"
              fill="none"
              stroke-width="4"
            />
            <polygon
              points="110,85 150,85 170,120 150,155 110,155 90,120"
              stroke="transparent"
              fill="none"
              stroke-width="2"
            />
          </svg>
        </Box>
        {/* <img
          src="../../assets/react.svg" // Thay đổi đường dẫn tới logo của bạn
          alt="Logo"
          // style={{ width: 40, height: 40, marginRight: 10 }} // Cấu hình kích thước logo
        /> */}
      </Link>
    </Box>
  );
};

export default HeaderLogo;
