import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrayFromComponent from "../../components/ArrayFromComponent";
import ProductCardSkeleton from "../../components/ProductCardSkeleton";
import CardPosterItem from "../../components/CardPosterItem";
const MoviesList = ({ movies, isLoading, isError }) => {
  if ((!isLoading && !!!movies?.length) || isError)
    return (
      <Box>
        <Box>There is no products</Box>
      </Box>
    );

  if (isLoading) {
    return (
      <Box>
        <Box>
          <ArrayFromComponent />
        </Box>
      </Box>
    );
  }

  return (
    <Grid container spacing={2}>
      {movies.map((movie, index) => {
        return <CardPosterItem key={`${movie.id}-${index}`} {...movie} />;
      })}
    </Grid>
  );
};

export default MoviesList;
