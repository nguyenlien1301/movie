import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
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
        <Grid container spacing={2}>
          {new Array(10).fill("").map((_, index) => {
            return (
              <Grid
                key={index}
                item
                size={{
                  mobileXs: 6,
                  mobileSm: 4,
                  tabletSm: 3,
                  mobileXl: 4,
                  mobileLg: 6,
                  largeDevice: 2.4,
                }}
              >
                <ProductCardSkeleton />
              </Grid>
            );
          })}
        </Grid>
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
