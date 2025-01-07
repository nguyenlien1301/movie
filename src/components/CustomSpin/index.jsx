import { styled } from "@mui/material";
import { Spin } from "antd";
import React from "react";
const LoaderContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "60px", // Đặt chiều cao cố định
});

const CustomSpin = () => {
  return (
    <LoaderContainer>
      <Spin size="large" />
    </LoaderContainer>
  );
};

export default CustomSpin;
