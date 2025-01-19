import React, { useEffect } from "react";
import { Box, Container } from "@mui/material";
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
import { handleGetAiringToDayTv } from "../../store/reducer/airingTodayTvReducer";
import MovieTitleItem from "../../components/MovieTitleItem";
import ContainerComponent from "../../components/ContainerComponent";

const AiringToDayTvSection = () => {
  const { tvLists, loading } = useSelector((state) => state.airingToDay);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleGetAiringToDayTv({ page: 1, type: TYPE_PAGE.home }));
  }, []);
  return (
    <ContainerComponent>
      <MovieTitleItem link={PATHS.TV_SERIES.AIRING_TODAY}>
        TV Series Airing Today
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
              <SwiperSlide key={index}>
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

export default AiringToDayTvSection;
