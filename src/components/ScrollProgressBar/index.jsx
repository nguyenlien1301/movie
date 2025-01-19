import React, { useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";
import { useLocation } from "react-router-dom";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: "9999",
      }}
    >
      <LinearProgress
        variant="determinate"
        value={scrollProgress}
        sx={{
          height: 4,
          borderRadius: 2,
          background: "none",
          "& .MuiLinearProgress-bar": {
            background:
              "linear-gradient(to bottom, #25aae1,  #04befe, #3f86ed, #043ea5)",
          },
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;
