import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PATHS from "../../constants/path";
import CustomEmpty from "../../components/ComponentEmpty";
import { useDispatch, useSelector } from "react-redux";
import { CARD_ITEM_TYPE, TYPE_PAGE } from "../../constants/general";
import CardSliderItem from "../../components/CardSliderItem";
import SkeletonImage from "../../components/SkeletonImage";
import SwiperComponent from "../../components/SwiperComponent";
import { handleGetPopularTv } from "../../store/reducer/popularTvReducer";
import MovieTitleItem from "../../components/MovieTitleItem";
import ContainerComponent from "../../components/ContainerComponent";

const PopularTvSection = () => {
  const { tvLists, loading } = useSelector((state) => state.popularTv);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleGetPopularTv({ page: 1, type: TYPE_PAGE.home }));
  }, []);
  return (
    <ContainerComponent>
      <MovieTitleItem link={PATHS.TV_SERIES.POPULAR}>
        Phim truyền hình phổ biến
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
        ) : tvLists?.length > 0 ? (
          <SwiperComponent>
            {tvLists.map((movie, index) => (
              <SwiperSlide key={movie?.id || index}>
                <CardSliderItem {...movie} type={CARD_ITEM_TYPE.tv_series} />
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

export default PopularTvSection;
