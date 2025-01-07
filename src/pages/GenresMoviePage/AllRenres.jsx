import { Box, Typography } from "@mui/material";
import React from "react";
import SwiperComponent from "../../components/SwiperComponent";
import { SwiperSlide } from "swiper/react";
import SkeletonImage from "../../components/SkeletonImage";
import CardSliderItem from "../../components/CardSliderItem";
import CustomEmpty from "../../components/ComponentEmpty";
const AllGenres = ({ filterGenres = [], loading }) => {
  return filterGenres?.map((genres, index) => {
    const genresMovies = genres?.movies?.map((item) => item);
    return (
      <Box mt="30px" key={index}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            "&:hover .MuiTypography-body1": {
              opacity: "1",
            },
          }}
        >
          <Typography
            variant="h5"
            component="h5"
            sx={{
              fontWeight: 600,
              fontSize: "var(--fz-h5)",
            }}
          >
            {genres?.name}
          </Typography>
        </Box>
        <Box mt="15px">
          {loading ? (
            <SwiperComponent>
              {Array.from({ length: 6 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <SkeletonImage />
                </SwiperSlide>
              ))}
            </SwiperComponent>
          ) : genresMovies?.length > 0 ? (
            <SwiperComponent>
              {genresMovies.map((movie, index) => (
                <SwiperSlide key={movie?.id || index}>
                  <CardSliderItem {...movie} />
                </SwiperSlide>
              ))}
            </SwiperComponent>
          ) : (
            // Hiển thị CustomEmpty nếu không có dữ liệu
            <CustomEmpty description="No movies are showing" />
          )}
        </Box>
      </Box>
    );
  });
};

export default AllGenres;
