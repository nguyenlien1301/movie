import { Box, Container, Tab } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EachGenresTv from "./EachGenresTv";
import AllGenresTv from "./AllGenresTv";
import {
  handleChange,
  handleGenresTvSeries,
} from "../../store/reducer/genresTvSeriesReducer";
import TabsItem from "../../components/TabsItem";
import useDebounce from "../../hooks/useDebounce";

const GenresTvSeriesPage = () => {
  const {
    value,
    filterGenres,
    loading: tvSeriesLoading,
  } = useSelector((state) => state.genresTvSeries);
  const dispatch = useDispatch();
  const handleChangeValue = (e, newValue) => {
    dispatch(handleChange(newValue));
    if (newValue === 0) {
      dispatch(handleGenresTvSeries()); // Lấy tất cả phim nếu chọn tab "All"
    }
  };
  const tabMovies = filterGenres.find((item) => {
    return item?.id === value;
  });
  useEffect(() => {
    dispatch(handleGenresTvSeries());
  }, []);
  const loading = useDebounce(
    tvSeriesLoading.loadingGenres || tvSeriesLoading.loadingFilterGenres,
    300
  );
  return (
    <Box
      sx={{
        pt: (theme) => `calc(${theme.header.heightHeader} + var(--pt))`,
        bgcolor: (theme) => theme.palette.common,
        height: "auto",
      }}
    >
      <TabsItem
        value={value}
        handleChangeValue={handleChangeValue}
        filterGenres={filterGenres}
        loading={loading}
      />
      <Container maxWidth="xl">
        {value !== 0 ? (
          <EachGenresTv
            {...tabMovies}
            loading={loading}
            handleChangeValue={handleChangeValue}
          />
        ) : (
          <AllGenresTv filterGenres={filterGenres} loading={loading} />
        )}
      </Container>
    </Box>
  );
};

export default GenresTvSeriesPage;
