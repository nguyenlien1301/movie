import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrayFromComponent from "../../components/ArrayFromComponent";
import ProductCardSkeleton from "../../components/ProductCardSkeleton";
import CardPosterItem from "../../components/CardPosterItem";
import { CARD_ITEM_TYPE } from "../../constants/general";
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
        return (
          <CardPosterItem
            key={`${movie.id}-${index}`}
            {...movie}
            type={CARD_ITEM_TYPE.tv_series}
          />
        );
      })}
    </Grid>
  );
};

export default MoviesList;
