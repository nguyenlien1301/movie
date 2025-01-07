import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PATHS from "../../constants/path";
import CustomEmpty from "../../components/ComponentEmpty";
import { useDispatch, useSelector } from "react-redux";
import { handleGetNowPlaying } from "../../store/reducer/nowPlayingReducer";
import { TYPE_PAGE } from "../../constants/general";
import CardSliderItem from "../../components/CardSliderItem";
import SkeletonImage from "../../components/SkeletonImage";
import SwiperComponent from "../../components/SwiperComponent";
import MovieTitleItem from "../../components/MovieTitleItem";
import ContainerComponent from "../../components/ContainerComponent";

const NowPlayingSeciton = () => {
  const { movies, loading } = useSelector((state) => state.nowPlaying);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleGetNowPlaying({ page: 1, type: TYPE_PAGE.home }));
  }, []);
  return (
    <ContainerComponent>
      <MovieTitleItem link={PATHS.MOVIES.NOW_PLAYING}>
        Phim đang chiếu
      </MovieTitleItem>
      <Box mt="15px">
        {loading ? (
          <SwiperComponent>
            {Array.from({ length: 6 }).map((_, index) => (
              <SwiperSlide key={index}>
                <SkeletonImage />
              </SwiperSlide>
            ))}
          </SwiperComponent>
        ) : movies?.length > 0 ? (
          <SwiperComponent>
            {movies.map((movie, index) => (
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
    </ContainerComponent>
  );
};

export default NowPlayingSeciton;
