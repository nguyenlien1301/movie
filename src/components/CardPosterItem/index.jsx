import { Box, CardMedia, ImageList, ImageListItem } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import getImageUrl from "../../utils/imageUrl";
import { Link } from "react-router-dom";
import PATHS from "../../constants/path";
import { CARD_ITEM_TYPE } from "../../constants/general";
import { removeVietnameseTones } from "../../utils/format";

const CardPosterItem = ({
  poster_path,
  id,
  type = CARD_ITEM_TYPE.movies,
  media_type,
  title,
  name,
  ...rest
}) => {
  const movieSlug = removeVietnameseTones(title);
  const tvSlug = removeVietnameseTones(name);
  const moviePathId = PATHS.MOVIE_DETAIL.INDEX + `/${id}/${movieSlug}`;
  const tvPathId = PATHS.TV_SERIES_DETAIL.INDEX + `/${id}/${tvSlug}`;
  const mediaTypePath = media_type === "movie" ? moviePathId : tvPathId;
  if (type === CARD_ITEM_TYPE.movies) {
    return (
      <Grid
        item
        size={{
          mobileXs: 6,
          mobileSm: 4,
          tabletSm: 3,
          mobileXl: 4,
          mobileLg: 6,
          largeDevice: 2.4,
        }}
        {...rest}
      >
        <ImageList
          sx={{
            display: "block",
            transition: "0.2s",
            border: "2px solid transparent",
            borderRadius: "15px",
            overflow: "hidden",
            cursor: "pointer",
            ":hover": {
              border: (theme) => `2px solid ${theme.borderColorCustom.border}`,
            },
            ":hover .MuiImageListItem-root": {
              transform: "scale(1.05)",
            },
          }}
        >
          <ImageListItem
            component={Link}
            // to={moviePathId}
            to={media_type ? mediaTypePath : moviePathId}
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
      </Grid>
    );
  }
  return (
    <Grid
      item
      size={{
        mobileXs: 6,
        mobileSm: 4,
        tabletSm: 3,
        mobileXl: 4,
        mobileLg: 6,
        largeDevice: 2.4,
      }}
      {...rest}
    >
      <ImageList
        sx={{
          display: "block",
          transition: "0.2s",
          border: "2px solid transparent",
          borderRadius: "15px",
          overflow: "hidden",
          cursor: "pointer",
          ":hover": {
            border: (theme) => `2px solid ${theme.borderColorCustom.border}`,
          },
          ":hover .MuiImageListItem-root": {
            transform: "scale(1.05)",
          },
        }}
      >
        <ImageListItem
          component={Link}
          // to={tvPathId}
          to={media_type ? mediaTypePath : tvPathId}
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
    </Grid>
  );
};

export default CardPosterItem;
