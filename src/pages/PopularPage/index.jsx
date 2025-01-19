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
import Breadcrumb from "../../components/Breadcrumb";
import { Link } from "react-router-dom";
import PATHS from "../../constants/path";
import ContainerComponent from "../../components/ContainerComponent";

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
  return (
    <ContainerComponent sx={{ pt: "var(--h-header)" }}>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={PATHS.HOME}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isActive>Popular</Breadcrumb.Item>
      </Breadcrumb>
      <TypographyTitle textAlign="center">Popular Movies</TypographyTitle>
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
    </ContainerComponent>
  );
};

export default PopularPage;
