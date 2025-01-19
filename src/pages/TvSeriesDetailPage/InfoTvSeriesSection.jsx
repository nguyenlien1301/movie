import React from "react";
import {
  Box,
  CardMedia,
  Container,
  Paper,
  Typography,
  Skeleton,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import getImageUrl, { getMediaImageUrl } from "../../utils/imageUrl";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ButtonCustom from "../../components/Button";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import {
  handleOpenModal,
  handleOpenPopup,
} from "../../store/reducer/videoPopupReducer";
import { message } from "antd";
import Breadcrumb from "../../components/Breadcrumb";
import { Link } from "react-router-dom";
import PATHS from "../../constants/path";

const TypographyCustom = styled(Box)(({ theme }) => ({
  color: "var(--white)",
  fontSize: "var(--fz-text)",
  [theme.breakpoints.down("mediumDevice")]: {
    fontSize: "14px",
  },
}));

const InfoSection = ({
  poster_path,
  original_name,
  status,
  genresItem,
  companies,
  countrie,
  first_air_date,
  last_air_date,
  overview,
  keyFirst,
  tagline,
  number_of_episodes,
  number_of_seasons,
  name,
  backdrop_path,
  loading,
}) => {
  const dispatch = useDispatch();

  const handleOpen = () => {
    if (!!keyFirst) {
      dispatch(handleOpenPopup(keyFirst));
      setTimeout(() => {
        dispatch(handleOpenModal());
      }, 500);
    } else {
      message.warning("Hiện tại không có video nào");
    }
  };

  const backdropUrl = getMediaImageUrl(backdrop_path) || "";

  return (
    <Box sx={{ pt: (theme) => theme.header.heightHeader }}>
      {backdropUrl && loading && (
        <Box
          sx={{
            position: "absolute",
            top: (theme) => theme.header.heightHeader,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${backdropUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(5px) brightness(0.5) contrast(1.2)",
            zIndex: -1,
          }}
        />
      )}
      <Container maxWidth="xl">
        <Breadcrumb>
          <Breadcrumb.Item isBack />
          <Breadcrumb.Item>
            <Link to={PATHS.HOME}>Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item isActive>{name}</Breadcrumb.Item>
        </Breadcrumb>
        <Grid
          container
          spacing={{ mobileXl: 2, tabletXs: 4 }}
          sx={(theme) => ({
            mt: "20px",
            [theme.breakpoints.down("mobileXl")]: {
              flexDirection: "column",
              gap: 4,
            },
          })}
        >
          <Grid
            size={3}
            sx={(theme) => ({
              flexGrow: 1,
              [theme.breakpoints.down("mobileXl")]: {
                width: "60%",
              },
              [theme.breakpoints.down("mobileSm")]: {
                width: "100%",
              },
            })}
          >
            {!loading ? (
              <Skeleton
                variant="rectangular"
                height={350}
                sx={{ borderRadius: "8px" }}
              />
            ) : (
              <CardMedia
                component="img"
                src={getImageUrl(poster_path) || ""}
                sx={{ borderRadius: "8px" }}
              />
            )}
          </Grid>
          <Grid size={8}>
            <Grid
              container
              spacing={2}
              flexDirection="column"
              sx={{ gap: { mediumDevice: 1, tabletSm: 2 } }}
            >
              {original_name &&
                (!loading ? (
                  <Skeleton width="50%" />
                ) : (
                  <Grid
                    sx={{
                      display: "grid",
                      gridTemplateColumns: {
                        mobileXs: "150px auto",
                        tabletXs: "120px auto",
                      },
                    }}
                  >
                    <TypographyCustom fontWeight={700}>Name:</TypographyCustom>
                    <TypographyCustom
                      sx={{
                        color: "#cf8e19 !important",
                        fontWeight: 700,
                        fontSize: {
                          mobileXs: "15px !important",
                          tabletSm: "20px !important",
                        },
                      }}
                    >
                      {original_name}
                    </TypographyCustom>
                  </Grid>
                ))}

              {name &&
                (!loading ? (
                  <Skeleton width="50%" />
                ) : (
                  <Grid
                    sx={{
                      display: "grid",
                      gridTemplateColumns: {
                        mobileXs: "150px auto",
                        tabletXs: "120px auto",
                      },
                    }}
                  >
                    <TypographyCustom fontWeight={700}>
                      Other name:
                    </TypographyCustom>
                    <TypographyCustom>{name || ""}</TypographyCustom>
                  </Grid>
                ))}
              {tagline &&
                (!loading ? (
                  <Skeleton width="50%" />
                ) : (
                  <Grid
                    sx={{
                      display: "grid",
                      gridTemplateColumns: {
                        mobileXs: "150px auto",
                        tabletXs: "120px auto",
                      },
                    }}
                  >
                    <TypographyCustom fontWeight={700}>
                      Tagline:
                    </TypographyCustom>
                    <TypographyCustom>{tagline}</TypographyCustom>
                  </Grid>
                ))}
              {status &&
                (!loading ? (
                  <Skeleton width="50%" />
                ) : (
                  <Grid
                    sx={{
                      display: "grid",
                      gridTemplateColumns: {
                        mobileXs: "150px auto",
                        tabletXs: "120px auto",
                      },
                    }}
                  >
                    <TypographyCustom fontWeight={700}>
                      Status:
                    </TypographyCustom>
                    <TypographyCustom
                      sx={{
                        width: "fit-content",
                        height: "30px",
                        px: "10px",
                        backgroundSize: "300% 100%",
                        backgroundImage:
                          "linear-gradient(to right, #25aae1, #043ea5, #04befe, #3f86ed)",
                        color: "var(--white)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "6px",
                      }}
                    >
                      {status}
                    </TypographyCustom>
                  </Grid>
                ))}
              {genresItem?.length > 0 &&
                (!loading ? (
                  <Skeleton width="50%" />
                ) : (
                  <Grid
                    sx={{
                      display: "grid",
                      gridTemplateColumns: {
                        mobileXs: "150px auto",
                        tabletXs: "120px auto",
                      },
                    }}
                  >
                    <TypographyCustom fontWeight={700}>
                      Genres:
                    </TypographyCustom>
                    <TypographyCustom>{genresItem}</TypographyCustom>
                  </Grid>
                ))}
              {companies?.length > 0 &&
                (!loading ? (
                  <Skeleton width="50%" />
                ) : (
                  <Grid
                    sx={{
                      display: "grid",
                      gridTemplateColumns: {
                        mobileXs: "150px auto",
                        tabletXs: "120px auto",
                      },
                    }}
                  >
                    <TypographyCustom fontWeight={700}>
                      Companies:
                    </TypographyCustom>
                    <TypographyCustom>{companies || ""}</TypographyCustom>
                  </Grid>
                ))}
              {countrie &&
                (!loading ? (
                  <Skeleton width="50%" />
                ) : (
                  <Grid
                    sx={{
                      display: "grid",
                      gridTemplateColumns: {
                        mobileXs: "150px auto",
                        tabletXs: "120px auto",
                      },
                    }}
                  >
                    <TypographyCustom fontWeight={700}>
                      Production countries:
                    </TypographyCustom>
                    <TypographyCustom>{`${countrie?.name} (${countrie?.iso_3166_1})`}</TypographyCustom>
                  </Grid>
                ))}
              {number_of_episodes &&
                (!loading ? (
                  <Skeleton width="50%" />
                ) : (
                  <Grid
                    sx={{
                      display: "grid",
                      gridTemplateColumns: {
                        mobileXs: "150px auto",
                        tabletXs: "120px auto",
                      },
                    }}
                  >
                    <TypographyCustom fontWeight={700}>
                      Number of episodes:
                    </TypographyCustom>
                    <TypographyCustom
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      {number_of_episodes} practice
                    </TypographyCustom>
                  </Grid>
                ))}
              {number_of_seasons &&
                (!loading ? (
                  <Skeleton width="50%" />
                ) : (
                  <Grid
                    sx={{
                      display: "grid",
                      gridTemplateColumns: {
                        mobileXs: "150px auto",
                        tabletXs: "120px auto",
                      },
                    }}
                  >
                    <TypographyCustom fontWeight={700}>
                      Number of seasons:
                    </TypographyCustom>
                    <TypographyCustom
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      {number_of_seasons > 1
                        ? `Seasons ${number_of_seasons}`
                        : `Season ${number_of_seasons}`}
                    </TypographyCustom>
                  </Grid>
                ))}
              {first_air_date &&
                (!loading ? (
                  <Skeleton width="50%" />
                ) : (
                  <Grid
                    sx={{
                      display: "grid",
                      gridTemplateColumns: {
                        mobileXs: "150px auto",
                        tabletXs: "120px auto",
                      },
                    }}
                  >
                    <TypographyCustom fontWeight={700}>
                      First air date:
                    </TypographyCustom>
                    <TypographyCustom
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <CalendarMonthIcon />
                      {first_air_date}
                    </TypographyCustom>
                  </Grid>
                ))}
              {last_air_date &&
                (!loading ? (
                  <Skeleton width="50%" />
                ) : (
                  <Grid
                    sx={{
                      display: "grid",
                      gridTemplateColumns: {
                        mobileXs: "150px auto",
                        tabletXs: "120px auto",
                      },
                    }}
                  >
                    <TypographyCustom fontWeight={700}>
                      Last air date:
                    </TypographyCustom>
                    <TypographyCustom
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <CalendarMonthIcon />
                      {last_air_date}
                    </TypographyCustom>
                  </Grid>
                ))}
              {!loading ? (
                <Skeleton width="50%" />
              ) : (
                <Grid
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      mobileXs: "150px auto",
                      tabletXs: "120px auto",
                    },
                  }}
                ></Grid>
              )}
            </Grid>
            {!loading ? (
              <Skeleton
                variant="rectangular"
                width={120}
                height={36}
                sx={{ mt: "20px" }}
              />
            ) : (
              <ButtonCustom
                component="button"
                sx={{
                  mt: "10px",
                  width: "fit-content",
                  color: "var(--white)",
                  fontSize: "var(--fz-text)",
                  px: "20px",
                }}
                variant="contained"
                startIcon={<PlayCircleIcon />}
                size="small"
                onClick={handleOpen}
              >
                Watch
              </ButtonCustom>
            )}
          </Grid>
        </Grid>
        {overview && (
          <Paper sx={{ mt: 2, padding: "20px", minHeight: "100%" }}>
            <Typography
              component="h5"
              variant="h5"
              sx={{ fontWeight: "bold", fontSize: "2rem" }}
            >
              {!loading ? <Skeleton width="20%" /> : "Overview"}
            </Typography>
            {!loading ? (
              <Skeleton variant="text" width="50%" height={100} />
            ) : (
              <Typography sx={{ mt: "10px", fontSize: "1.5rem" }}>
                {overview}
              </Typography>
            )}
          </Paper>
        )}
      </Container>
    </Box>
  );
};

export default InfoSection;
