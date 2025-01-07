import React, { useEffect } from "react";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CardItem from "../../components/CardItem";
import CustomEmpty from "../../components/ComponentEmpty";
import { useDispatch, useSelector } from "react-redux";
import {
  handleGetPopular,
  updatePage,
} from "../../store/reducer/popularReducer";
import { TYPE_PAGE } from "../../constants/general";
import InfiniteScrollComponent from "../../components/InfiniteScrollComponent";
import useDebounce from "../../hooks/useDebounce";
import ArrayFromComponent from "../../components/ArrayFromComponent";
import TypographyTitle from "../../components/TypographyTitle";
import IntroMovies from "../../components/IntroMovies";
import movieSlice from "../../utils/movieSlice";

const PopularPage = () => {
  const {
    params,
    movies,
    loading: popularLoading,
    hasMore,
  } = useSelector((state) => state.popular);
  const dispath = useDispatch();
  useEffect(() => {
    dispath(handleGetPopular({ page: params.page, type: TYPE_PAGE.all }));
  }, [params.page]);
  const fetchMore = () => {
    if (hasMore) {
      dispath(updatePage(params.page + 1));
    }
  };
  const loading = useDebounce(popularLoading, 300);
  const introPopular = movieSlice(movies);
  return (
    <>
      <IntroMovies movies={introPopular} loading={loading} />
      <Box
        sx={{
          pt: (theme) => `calc(${theme.header.heightHeader} + var(--pt))`,
          bgcolor: (theme) => theme.palette.common,
        }}
      >
        <Container maxWidth="xl">
          <TypographyTitle>Phim phổ biến</TypographyTitle>
          <InfiniteScrollComponent
            dataLength={movies.length}
            next={fetchMore}
            hasMore={hasMore}
          >
            <Grid container spacing={2}>
              {loading ? (
                <ArrayFromComponent />
              ) : movies.length > 0 ? (
                movies.map((movie, index) => {
                  return <CardItem key={`${movie.id}-${index}`} {...movie} />;
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

export default PopularPage;
