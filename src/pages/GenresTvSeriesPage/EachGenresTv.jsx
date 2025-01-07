import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import getImageUrl from "../../utils/imageUrl";
import Grid from "@mui/material/Grid2";
import CustomEmpty from "../../components/ComponentEmpty";
import CardPosterItem from "../../components/CardPosterItem";
import { CARD_ITEM_TYPE } from "../../constants/general";
import TypographyTitle from "../../components/TypographyTitle";
import ArrayFromComponent from "../../components/ArrayFromComponent";

const EachGenresTv = ({ name, movies, loading }) => {
  return (
    <>
      <TypographyTitle>{name || ""}</TypographyTitle>
      <Grid container spacing={2}>
        {loading ? (
          <ArrayFromComponent />
        ) : movies.length > 0 ? (
          movies.map((movie, index) => (
            <CardPosterItem
              key={index}
              {...movie}
              type={CARD_ITEM_TYPE.tv_series}
            />
          ))
        ) : (
          <CustomEmpty description="Không tìm thấy hình ảnh nào" />
        )}
      </Grid>
    </>
  );
};

export default EachGenresTv;
