import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import getImageUrl from "../../utils/imageUrl";
import PATHS from "../../constants/path";
import { CARD_ITEM_TYPE } from "../../constants/general";
import { removeVietnameseTones } from "../../utils/format";

const CardSliderItem = ({
  id,
  poster_path,
  type = CARD_ITEM_TYPE.movies,
  title,
  name,
}) => {
  console.log("🚀title---->", title);
  const movieSlug = removeVietnameseTones(title);
  console.log("🚀movieSlug---->", movieSlug);
  const tvSlug = removeVietnameseTones(name);
  console.log("🚀tvSlug---->", tvSlug);
  const moviePath = PATHS.MOVIE_DETAIL.INDEX + `/${id}/${movieSlug}`;
  const tvPath = PATHS.TV_SERIES_DETAIL.INDEX + `/${id}/${tvSlug}`;
  if (type === CARD_ITEM_TYPE.movies) {
    return (
      <Box
        sx={{
          transition: "0.2s",
          border: "2px solid transparent",
          borderRadius: "15px",
          overflow: "hidden",
          ":hover": {
            border: (theme) => `2px solid ${theme.borderColorCustom.border}`,
          },
          ":hover .MuiCardMedia-root": {
            transform: "scale(1.05)",
          },
        }}
      >
        <CardMedia
          component={Link}
          to={moviePath}
          sx={{
            width: "100%",
            height: "250px",
            objectFit: "cover", // Bo tròn góc
            borderRadius: "inherit",
            transition: "transform 0.4s ease",
          }}
          image={getImageUrl(poster_path)}
        />
      </Box>
    );
  }
  return (
    <Box
      sx={{
        transition: "0.2s",
        border: "2px solid transparent",
        borderRadius: "15px",
        overflow: "hidden",
        ":hover": {
          border: (theme) => `2px solid ${theme.borderColorCustom.border}`,
        },
        ":hover .MuiCardMedia-root": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia
        component={Link}
        to={tvPath}
        sx={{
          width: "100%",
          height: "250px",
          objectFit: "cover", // Bo tròn góc
          borderRadius: "inherit",
          transition: "transform 0.4s ease",
        }}
        image={getImageUrl(poster_path)}
      />
    </Box>
  );
};

export default CardSliderItem;
