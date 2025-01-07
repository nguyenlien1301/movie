import React, { useEffect } from "react";
import CardItem from "../../components/CardItem";
import CustomEmpty from "../../components/ComponentEmpty";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useDispatch, useSelector } from "react-redux";
import {
  handleGetTopRated,
  updatePage,
} from "../../store/reducer/topRatedReducer";
import { TYPE_PAGE } from "../../constants/general";
import InfiniteScrollComponent from "../../components/InfiniteScrollComponent";
import useDebounce from "../../hooks/useDebounce";
import ArrayFromComponent from "../../components/ArrayFromComponent";
import TypographyTitle from "../../components/TypographyTitle";
import movieSlice from "../../utils/movieSlice";
import IntroMovies from "../../components/IntroMovies";

const TopRatedPage = () => {
  const {
    params,
    movies,
    loading: topRatedLoading,
    hasMore,
  } = useSelector((state) => state.topRated);
  const dispath = useDispatch();
  useEffect(() => {
    dispath(handleGetTopRated({ page: params.page, type: TYPE_PAGE.all }));
  }, [params.page]);
  const fetchMore = () => {
    if (hasMore) {
      dispath(updatePage(params.page + 1));
    }
  };
  const loading = useDebounce(topRatedLoading, 300);
  const introTopRated = movieSlice(movies);
  return (
    <>
      <IntroMovies movies={introTopRated} loading={loading} />
      <Box
        sx={{
          pt: (theme) => `calc(${theme.header.heightHeader} + var(--pt))`,
          bgcolor: (theme) => theme.palette.common,
        }}
      >
        <Container maxWidth="xl">
          <TypographyTitle>Phim được đanh gia cao</TypographyTitle>
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

export default TopRatedPage;
