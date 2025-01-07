import styled from "@emotion/styled";
import { Swiper } from "swiper/react";

export const CustomSwiper = styled(Swiper)(({ theme }) => ({
  ".swiper-pagination-bullet": {
    backgroundColor: theme.backgroundCustom.background,
  },
  ".swiper-pagination-bullet-active": {
    backgroundColor: theme.backgroundCustom.background,
    opacity: "1",
  },

  ".swiper-pagination": {
    bottom: "0",
    textAlign: "center",
  },

  ".swiper-button-prev, .swiper-button-next": {
    width: "40px",
    height: "40px",
    border: "2px solid white",
    borderRadius: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    transition: "0.2s",
  },
  ".swiper-button-prev:hover, .swiper-button-next:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  ".swiper-button-prev:after, .swiper-button-next:after": {
    fontSize: "20px",
    color: "white",
  },
}));

export const BUTTON_CUSTOM_TYLES = {
  minWidth: "40px",
  height: "40px",
  border: "1px solid",
  borderRadius: "50%",
  padding: "0px",
  "&:hover": {
    backgroundColor: "transparent",
    borderColor: "#018ef5",
    boxShadow: "0 0 0 3px rgba(1, 142, 245, 0.25)",
  },
  "& .MuiSvgIcon-root": {
    transition: "0.2s",
  },
  "&:hover .MuiSvgIcon-root": {
    color: "#1976d2",
  },
};
