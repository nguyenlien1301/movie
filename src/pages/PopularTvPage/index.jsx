import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScrollComponent from "../../components/InfiniteScrollComponent";
import CardItem from "../../components/CardItem";
import CustomEmpty from "../../components/ComponentEmpty";
import { CARD_ITEM_TYPE, TYPE_PAGE } from "../../constants/general";
import {
  handleGetPopularTv,
  handleUpdatePage,
} from "../../store/reducer/popularTvReducer";
import useDebounce from "../../hooks/useDebounce";
import ArrayFromComponent from "../../components/ArrayFromComponent";
import TypographyTitle from "../../components/TypographyTitle";
import movieSlice from "../../utils/movieSlice";
import IntroMovies from "../../components/IntroMovies";

const PopularTvPage = () => {
  const {
    tvLists,
    params,
    loading: popularTvLoading,
    hasMore,
  } = useSelector((state) => state.popularTv);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleGetPopularTv({ page: params.page, type: TYPE_PAGE.all }));
  }, [params.page]);
  const fetchMore = () => {
    if (hasMore) {
      dispatch(handleUpdatePage(params.page + 1));
    }
  };
  const loading = useDebounce(popularTvLoading, 300);
  const introPopularTv = movieSlice(tvLists);
  return (
    <>
      <IntroMovies movies={introPopularTv} loading={loading} />
      <Box
        sx={{
          pt: (theme) => `calc(${theme.header.heightHeader} + var(--pt))`,
          bgcolor: (theme) => theme.palette.common,
          height: "auto",
        }}
      >
        <Container maxWidth="xl">
          <TypographyTitle>Phim truyền hình phổ biến</TypographyTitle>
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
        </Container>
      </Box>
    </>
  );
};

export default PopularTvPage;
