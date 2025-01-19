import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Box, Card, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import getImageUrl from "../../utils/imageUrl";
import { formatDate, removeVietnameseTones } from "../../utils/format";
import { Link, useLocation } from "react-router-dom";
import PATHS from "../../constants/path";
import { useSelector } from "react-redux";
import { CARD_ITEM_TYPE } from "../../constants/general";

const CardItem = ({
  id,
  backdrop_path,
  title,
  release_date,
  overview,
  vote_average,
  name,
  type = CARD_ITEM_TYPE.movies,
}) => {
  const movieSlug = removeVietnameseTones(title);
  const tvSlug = removeVietnameseTones(name);
  const moviePathId = PATHS.MOVIE_DETAIL.INDEX + `/${id}/${movieSlug}`;
  const tvPathId = PATHS.TV_SERIES_DETAIL.INDEX + `/${id}/${tvSlug}`;
  if (type === CARD_ITEM_TYPE.movies) {
    return (
      backdrop_path &&
      overview && (
        <Grid
          item
          size={{
            desktopSm: 2.4,
            tabletSm: 4,
            mobileLg: 6,
            mobileXs: 12,
            mediumDevice: 4,
            smallDevice: 6,
            largeDevice: 3,
          }}
        >
          <Card
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <CardActionArea
              component={Link}
              to={moviePathId}
              sx={{
                flex: 1,
              }}
            >
              <CardMedia
                component="img"
                height="100%"
                image={getImageUrl(backdrop_path || "")}
                alt="poster"
              />
            </CardActionArea>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                flex: 2,
                p: "10px",
                ":last-child": { pb: "15px" },
              }}
            >
              <Typography
                component={Link}
                to={moviePathId}
                variant="h6"
                title={title || ""}
                sx={{
                  display: "-webkit-box",
                  overflow: "hidden",
                  WebkitLineClamp: 1, // số dòng
                  WebkitBoxOrient: "vertical",
                  textOverflow: "ellipsis",
                  fontSize: { mobileLg: "16px" },
                  cursor: "pointer",
                  transition: "0.2s",
                  mb: "10px",
                  color: (theme) => theme.palette.common,
                  bgcolor: "transparent",
                  textDecoration: "none",
                  "&:hover": { color: "#cf8e19" },
                }}
              >
                {title || name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: "5px",
                  mt: "auto",
                  fontSize: "14px",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {" "}
                  <StarIcon />
                  {vote_average}
                </Box>
                <Box>{formatDate(release_date)}</Box>
              </Box>
              <Typography
                variant="p"
                sx={{
                  display: "-webkit-box",
                  overflow: "hidden",
                  WebkitLineClamp: 3, // số dòng
                  WebkitBoxOrient: "vertical",
                  textOverflow: "ellipsis",
                  fontSize: "15px",
                }}
              >
                {overview || ""}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      )
    );
  }

  return (
    backdrop_path &&
    overview && (
      <Grid
        item
        size={{
          desktopSm: 2.4,
          tabletSm: 4,
          mobileLg: 6,
          mobileXs: 12,
          mediumDevice: 4,
          smallDevice: 6,
          largeDevice: 3,
        }}
      >
        {backdrop_path && (
          <Card
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <CardActionArea
              component={Link}
              to={tvPathId}
              sx={{
                flex: 1,
              }}
            >
              <CardMedia
                component="img"
                height="100%"
                image={getImageUrl(backdrop_path || "")}
                alt="poster"
              />
            </CardActionArea>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                flex: 2,
                p: "10px",
                ":last-child": { pb: "15px" },
              }}
            >
              <Typography
                component={Link}
                to={tvPathId}
                variant="h6"
                title={title || ""}
                sx={{
                  display: "-webkit-box",
                  overflow: "hidden",
                  WebkitLineClamp: 1, // số dòng
                  WebkitBoxOrient: "vertical",
                  textOverflow: "ellipsis",
                  fontSize: { mobileLg: "16px" },
                  cursor: "pointer",
                  transition: "0.2s",
                  mb: "10px",
                  color: (theme) => theme.palette.common,
                  bgcolor: "transparent",
                  textDecoration: "none",
                  "&:hover": { color: "#cf8e19" },
                }}
              >
                {title || name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: "5px",
                  mt: "auto",
                  fontSize: "14px",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {" "}
                  <StarIcon />
                  {vote_average}
                </Box>
                <Box>{formatDate(release_date)}</Box>
              </Box>
              <Typography
                variant="p"
                sx={{
                  display: "-webkit-box",
                  overflow: "hidden",
                  WebkitLineClamp: 3, // số dòng
                  WebkitBoxOrient: "vertical",
                  textOverflow: "ellipsis",
                  fontSize: "15px",
                }}
              >
                {overview || ""}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Grid>
    )
  );
};

export default CardItem;
