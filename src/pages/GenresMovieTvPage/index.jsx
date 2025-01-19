import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import MuiPagination from "../../components/Pagination";
import Breadcrumb from "../../components/Breadcrumb";
import PATHS from "../../constants/path";
import useGenreMoviesTvPage from "./useGenreMovieTvPage";
import MoviesFilter from "./MoviesTvFilter";
import MoviesList from "./MoviesTvList";

const GenresMovieTvPage = () => {
  const { moviesListProps, paginationProps, filterProps } =
    useGenreMoviesTvPage();

  return (
    <Box
      sx={{
        pt: (theme) => `calc(${theme.header.heightHeader} + var(--pt))`,
      }}
    >
      <Container maxWidth="xl">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to={PATHS.HOME}>Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item isActive>Product</Breadcrumb.Item>
        </Breadcrumb>
        <Box
          sx={{
            display: "flex",
            flexDirection: { mobileXs: "column", mobileLg: "row" },
            gap: 3,
            mt: "15px",
          }}
        >
          <MoviesFilter {...filterProps} />
          <Box sx={{ flex: 4 }}>
            <MoviesList {...moviesListProps} />
            <MuiPagination {...paginationProps}></MuiPagination>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default GenresMovieTvPage;
