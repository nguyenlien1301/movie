import React, { useEffect } from "react";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CustomEmpty from "../../components/ComponentEmpty";
import CardItem from "../../components/CardItem";
import { useDispatch, useSelector } from "react-redux";
import {
  handleGetUpcoming,
  updatePage,
} from "../../store/reducer/upcomingReducer";
import { TYPE_PAGE } from "../../constants/general";
import InfiniteScrollComponent from "../../components/InfiniteScrollComponent";
import ArrayFromComponent from "../../components/ArrayFromComponent";
import useDebounce from "../../hooks/useDebounce";
import TypographyTitle from "../../components/TypographyTitle";
import IntroMovies from "../../components/IntroMovies";
import movieSlice from "../../utils/movieSlice";
import Breadcrumb from "../../components/Breadcrumb";
import { Link } from "react-router-dom";
import PATHS from "../../constants/path";
import ContainerComponent from "../../components/ContainerComponent";

const UpcomingPage = () => {
  const {
    params,
    movies,
    loading: upcomingLoading,
    hasMore,
  } = useSelector((state) => state.upcoming);
  const dispath = useDispatch();
  useEffect(() => {
    dispath(handleGetUpcoming({ page: params.page, type: TYPE_PAGE.all }));
  }, [params.page]);
  const fetchMore = () => {
    if (hasMore) {
      dispath(updatePage(params.page + 1));
    }
  };
  const loading = useDebounce(upcomingLoading, 300);
  return (
    <ContainerComponent sx={{ pt: "var(--h-header)" }}>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={PATHS.HOME}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isActive>Upcoming</Breadcrumb.Item>
      </Breadcrumb>
      <TypographyTitle>Upcoming Movies</TypographyTitle>
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

export default UpcomingPage;
