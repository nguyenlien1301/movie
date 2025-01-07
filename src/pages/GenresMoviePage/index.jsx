import { Box, Container, Tab } from "@mui/material";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleChange, handleGenres } from "../../store/reducer/genresReducer";
import EachGenres from "./EachGenres";
import AllGenres from "./AllRenres";
import TabsItem from "../../components/TabsItem";
import useDebounce from "../../hooks/useDebounce";

const GenresMoviePage = () => {
  const {
    value,
    filterGenres,
    loading: movieLoading,
  } = useSelector((state) => state.genres);
  const dispatch = useDispatch();
  const handleChangeValue = (e, newValue) => {
    dispatch(handleChange(newValue));
    if (newValue === 0) {
      dispatch(handleGenres()); // Lấy tất cả phim nếu chọn tab "All"
    }
  };
  const tabMovies = filterGenres.find((item) => {
    return item?.id === value;
  });
  useEffect(() => {
    dispatch(handleGenres());
  }, []);
  const loading = useDebounce(
    movieLoading.loadingGenres || movieLoading.loadingFilterGenres,
    300
  );
  return (
    <Box
      sx={{
        pt: (theme) => theme.header.heightHeader,
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
          <EachGenres
            {...tabMovies}
            loading={loading}
            handleChangeValue={handleChangeValue}
          />
        ) : (
          <AllGenres filterGenres={filterGenres} loading={loading} />
        )}
      </Container>
    </Box>
  );
};

export default GenresMoviePage;
