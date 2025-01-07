import React from "react";
import CardItem from "../../components/CardItem";
import CustomEmpty from "../../components/ComponentEmpty";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useSelector } from "react-redux";

const SearchResultsPage = () => {
  const { movies, loading } = useSelector((state) => state.search);
  return (
    <Box
      sx={{
        pt: (theme) => theme.header.heightHeader,
        bgcolor: (theme) => theme.palette.common,
      }}
    >
      <Container maxWidth="xl">
        <Typography
          component="h2"
          variant="h2"
          sx={{ fontSize: "2rem", fontWeight: "bold" }}
        >
          Kết quả tìm kiếm
        </Typography>
        <Grid container spacing={2} sx={{ mt: "15px" }}>
          {!loading && movies.length === 0 ? (
            <CustomEmpty description="Không tìm thấy kết quả tìm kiếm nào nào" />
          ) : (
            movies.map((movie, index) => (
              <CardItem key={`${movie.id}-${index}`} {...movie} />
            ))
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default SearchResultsPage;
