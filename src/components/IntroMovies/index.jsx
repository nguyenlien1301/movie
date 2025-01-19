import React, { useRef, useState } from "react";
import { Box, Button, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import CustomEmpty from "../../components/ComponentEmpty";
import { getMediaImageUrl } from "../../utils/imageUrl";
import { CustomSwiper } from "../../components/CustomStyleds";
import { Skeleton } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { removeVietnameseTones } from "../../utils/format";
import PATHS from "../../constants/path";

export const SkeletonImageStyle = styled.div`
  .ant-skeleton {
    position: relative;
    width: 100%;
    height: calc(100vh - 70px);
    overflow: hidden;
  }
  .ant-skeleton-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const IntroMovies = ({ movies, loading }) => {
  console.log("🚀movies---->", movies);
  return (
    <Box
      sx={{
        pt: (theme) => theme.header.heightHeader,
        height: "100vh",
        "& .swiper-pagination": {
          bottom: "50px !important",
          textAlign: "center",
        },
        "& .swiper-pagination-bullet": {
          backgroundColor: "var(--white)",
          opacity: "0.7",
        },
        "& .swiper-pagination-bullet-active": {
          backgroundColor: "var(--white)",
          opacity: "1",
        },
      }}
    >
      <CustomSwiper
        modules={[Navigation, Autoplay, Pagination]}
        slidesPerView={1}
        speed={1500}
        cssMode={true}
        // keyboard={true}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{
          bullet: true,
          clickable: true,
        }}
      >
        {loading ? (
          <SkeletonImageStyle>
            {/* <Skeleton.Image active style={{ width: "100%", height: 250 }} /> */}
          </SkeletonImageStyle>
        ) : movies?.length > 0 ? (
          movies?.map((movie, index) => {
            const movieSlug = removeVietnameseTones(movie?.title);
            const tvSlug = removeVietnameseTones(name);
            const moviePath =
              PATHS.MOVIE_DETAIL.INDEX + `/${movie?.id}/${movieSlug}`;
            const tvPath =
              PATHS.TV_SERIES_DETAIL.INDEX + `/${movie?.id}/${tvSlug}`;
            return (
              <SwiperSlide key={movie?.id || index}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: (theme) =>
                      `calc(100vh - ${theme.header.heightHeader})`,
                    overflow: "hidden",
                  }}
                >
                  <Link to={moviePath || tvPath}>
                    <Box
                      component="img"
                      srcSet={getMediaImageUrl(movie?.backdrop_path)}
                      width="100%"
                      height="100%"
                      sx={{
                        objectFit: "cover",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </Link>
                </Box>
              </SwiperSlide>
            );
          })
        ) : (
          loading && <CustomEmpty description="Không tìm thấy hình ảnh nào" />
        )}
      </CustomSwiper>
    </Box>
  );
};

export default IntroMovies;
