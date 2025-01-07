import React, { useEffect, useRef } from "react";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box } from "@mui/material";

const ScrollTop = () => {
  const refBackToTop = useRef();
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollYTop = window.scrollY;
      if (window.scrollY > 300) {
        refBackToTop.current.style.opacity = "1";
      } else {
        refBackToTop.current.style.opacity = "0";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); //
  }, []);
  return (
    <Box
      onClick={handleClick}
      ref={refBackToTop}
      sx={{
        position: "fixed",
        opacity: "0",
        bottom: 16,
        right: 16,
        zIndex: 99999,
        transition: "0.3s",
        borderRadius: "50%",
        "& .MuiButtonBase-root": {
          border: "2px solid transparent",
          // backgroundColor: "#2979ff",
          backgroundColor: "var(--blue-light)",
        },
        ":hover .MuiButtonBase-root": {
          background: "transparent",
          // border: "2px solid #2979ff",
          border: "2px solid var(--blue-light)",
        },
      }}
    >
      <Fab
        size="small"
        sx={{
          color: "white",
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Box>
  );
};

export default ScrollTop;
