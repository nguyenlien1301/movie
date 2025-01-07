import React from "react";
import Grid from "@mui/material/Grid2";
import CustomEmpty from "../../components/ComponentEmpty";
import CardPosterItem from "../../components/CardPosterItem";
import TypographyTitle from "../../components/TypographyTitle";
import ArrayFromComponent from "../../components/ArrayFromComponent";

const EachGenres = ({ name, movies, loading }) => {
  return (
    <>
      <TypographyTitle>{name || ""}</TypographyTitle>
      <Grid container spacing={2}>
        {loading ? (
          <ArrayFromComponent />
        ) : movies.length > 0 ? (
          movies.map((movie, index) => (
            <CardPosterItem key={index} {...movie} />
          ))
        ) : (
          <CustomEmpty description="Không tìm thấy hình ảnh nào" />
        )}
      </Grid>
    </>
  );
};

export default EachGenres;
