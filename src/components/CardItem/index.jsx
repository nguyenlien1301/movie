import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Box, Card, ImageList, ImageListItem, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import getImageUrl from "../../utils/imageUrl";
import { formatDate, removeVietnameseTones } from "../../utils/format";
import { Link } from "react-router-dom";
import PATHS from "../../constants/path";
import { CARD_ITEM_TYPE } from "../../constants/general";

const CardItem = ({
  id,
  poster_path,
  title,
  name,
  type = CARD_ITEM_TYPE.movies,
}) => {
  const movieSlug = removeVietnameseTones(title);
  const tvSlug = removeVietnameseTones(name);
  const moviePathId = PATHS.MOVIE_DETAIL.INDEX + `/${id}/${movieSlug}`;
  const tvPathId = PATHS.TV_SERIES_DETAIL.INDEX + `/${id}/${tvSlug}`;
  if (type === CARD_ITEM_TYPE.movies) {
    return (
      poster_path && (
        <Grid
          item
          size={{
            mobileXs: 6,
            mobileSm: 4,
            mobileXl: 3,
            mobileLg: 4,
            tabletSm: 2.4,
            desktopXs: 2,
          }}
        >
          <Box>
            <ImageList
              sx={{
                display: "block",
                transition: "0.2s",
                border: "2px solid transparent",
                overflow: "hidden",
                cursor: "pointer",
                ":hover": {
                  border: (theme) =>
                    `2px solid ${theme.borderColorCustom.border}`,
                },
                ":hover .MuiImageListItem-root": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <ImageListItem
                component={Link}
                to={moviePathId}
                sx={{
                  transition: "transform 0.4s ease",
                  borderRadius: "inherit",
                }}
              >
                <img
                  src={`${getImageUrl(
                    poster_path || ""
                  )}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${getImageUrl(
                    poster_path || ""
                  )}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt="poster"
                  loading="lazy"
                  height="100%"
                />
              </ImageListItem>
            </ImageList>
            <Link to={moviePathId} style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  fontSize: { mobileXs: "1.5rem", tabletXs: "1.8rem" },
                  color: "var(--white)",
                  transition: "var(--transtion)",
                  ":hover": {
                    color: "#fcb941",
                  },
                }}
              >
                {title || ""}
              </Typography>
            </Link>
          </Box>
        </Grid>
      )
    );
  }

  return (
    poster_path && (
      <Grid
        item
        size={{
          mobileXs: 6,
          mobileSm: 4,
          mobileXl: 3,
          mobileLg: 4,
          tabletSm: 2.4,
          desktopXs: 2,
        }}
      >
        <Box>
          <ImageList
            sx={{
              display: "block",
              transition: "0.2s",
              border: "2px solid transparent",
              borderRadius: "15px",
              overflow: "hidden",
              cursor: "pointer",
              ":hover": {
                border: (theme) =>
                  `2px solid ${theme.borderColorCustom.border}`,
              },
              ":hover .MuiImageListItem-root": {
                transform: "scale(1.05)",
              },
            }}
          >
            <ImageListItem
              component={Link}
              to={tvPathId}
              sx={{
                transition: "transform 0.4s ease",
                borderRadius: "inherit",
              }}
            >
              <img
                src={`${getImageUrl(
                  poster_path || ""
                )}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${getImageUrl(
                  poster_path || ""
                )}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt="poster"
                loading="lazy"
                height="100%"
              />
            </ImageListItem>
          </ImageList>
          <Link to={tvPathId} style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                fontSize: "1.8rem",
                color: "var(--white)",
                transition: "var(--transtion)",
                ":hover": {
                  color: "#fcb941",
                },
              }}
            >
              {name || ""}
            </Typography>
          </Link>
        </Box>
      </Grid>
    )
  );
};

export default CardItem;
