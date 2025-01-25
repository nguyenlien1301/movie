import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import useGenrePage from "./useGenrePage";
import MuiPagination from "../../components/Pagination";
import MoviesList from "./MoviesList";
import MoviesFilter from "./MoviesFilter";
import Breadcrumb from "../../components/Breadcrumb";
import PATHS from "../../constants/path";

const GenresMoviePage = () => {
  const { moviesListProps, paginationProps, filterProps } = useGenrePage();

  return (
    <Box
      sx={{
        pt: "var(--h-header)",
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
export default GenresMoviePage;
