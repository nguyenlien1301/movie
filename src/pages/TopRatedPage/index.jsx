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
import Breadcrumb from "../../components/Breadcrumb";
import { Link } from "react-router-dom";
import PATHS from "../../constants/path";
import ContainerComponent from "../../components/ContainerComponent";

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
  return (
    <ContainerComponent sx={{ pt: "var(--h-header)" }}>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={PATHS.HOME}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isActive>Top Rated</Breadcrumb.Item>
      </Breadcrumb>
      <TypographyTitle>Top Rated Movies</TypographyTitle>
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

export default TopRatedPage;
