import Grid from "@mui/material/Grid2";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScrollComponent from "../../components/InfiniteScrollComponent";
import CardItem from "../../components/CardItem";
import CustomEmpty from "../../components/ComponentEmpty";
import {
  handleGetAiringToDayTv,
  handleUpdatePage,
} from "../../store/reducer/airingTodayTvReducer";
import { CARD_ITEM_TYPE, TYPE_PAGE } from "../../constants/general";
import useDebounce from "../../hooks/useDebounce";
import ArrayFromComponent from "../../components/ArrayFromComponent";
import TypographyTitle from "../../components/TypographyTitle";
import Breadcrumb from "../../components/Breadcrumb";
import { Link } from "react-router-dom";
import PATHS from "../../constants/path";
import ContainerComponent from "../../components/ContainerComponent";

const AiringTodayTvPage = () => {
  const {
    tvLists,
    loading: airingToDayLoading,
    hasMore,
    params,
  } = useSelector((state) => state.airingToDay);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      handleGetAiringToDayTv({ page: params.page, type: TYPE_PAGE.all })
    );
  }, [params.page]);
  const fetchMore = () => {
    if (hasMore) {
      dispatch(handleUpdatePage(params.page + 1));
    }
  };
  const loading = useDebounce(airingToDayLoading, 300);
  return (
    <ContainerComponent sx={{ pt: "var(--h-header)" }}>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={PATHS.HOME}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isActive>Airing Today TV Series</Breadcrumb.Item>
      </Breadcrumb>
      <TypographyTitle>Airing Today TV Series</TypographyTitle>
      <InfiniteScrollComponent
        dataLength={tvLists.length}
        next={fetchMore}
        hasMore={hasMore}
      >
        <Grid container spacing={2}>
          {loading ? (
            <ArrayFromComponent />
          ) : tvLists.length > 0 ? (
            tvLists.map((tvList, index) => {
              return (
                <CardItem
                  key={`${tvList.id}-${index}`}
                  {...tvList}
                  type={CARD_ITEM_TYPE.tv_series}
                />
              );
            })
          ) : (
            <CustomEmpty description="Không tìm thấy hình ảnh nào" />
          )}
        </Grid>
      </InfiniteScrollComponent>
    </ContainerComponent>
  );
};

export default AiringTodayTvPage;
