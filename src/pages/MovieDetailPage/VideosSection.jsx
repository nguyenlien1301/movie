import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import CustomEmpty from "../../components/ComponentEmpty";
import ButtonCustom from "../../components/Button";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PopupVideos from "../../components/PopupVideos";
import { useDispatch, useSelector } from "react-redux";
import {
  handleOpenModal,
  handleOpenPopup,
} from "../../store/reducer/videoPopupReducer";
import TypographyTitle from "../../components/TypographyTitle";
import { getMediaImageUrl } from "../../utils/imageUrl";
import SwiperComponent from "../../components/SwiperComponent";
import { SwiperSlide } from "swiper/react";
import SkeletonImage from "../../components/SkeletonImage";
import useDebounce from "../../hooks/useDebounce";

const VideosSection = ({ videos = [], title, backdrop_path }) => {
  const { loading: loadingVideo } = useSelector((state) => state.videoPopup);
  const dispatch = useDispatch();
  const handleClickOpen = (key) => {
    dispatch(handleOpenPopup(key));
    setTimeout(() => {
      dispatch(handleOpenModal());
    }, 500);
  };
  const loading = useDebounce(loadingVideo, 300);
  return (
    <Box pt="40px">
      <Container maxWidth="xl">
        <TypographyTitle>Videos</TypographyTitle>
        <Box mt="15px">
          {loading ? (
            <SwiperComponent>
              {Array.from({ length: 6 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <SkeletonImage />
                </SwiperSlide>
              ))}
            </SwiperComponent>
          ) : videos?.length > 0 ? (
            <SwiperComponent>
              {videos?.map((item, index) => {
                const { id, key, name, published_at } = item || {};
                return (
                  <SwiperSlide key={id || index}>
                    <Grid>
                      <Card
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          height: "100%",
                        }}
                      >
                        <CardMedia
                          sx={{ height: 140 }}
                          image={getMediaImageUrl(backdrop_path)}
                          title="green iguana"
                        />
                        <CardContent
                          sx={{
                            p: "10px",
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          {name && (
                            <Typography
                              sx={{
                                display: "-webkit-box",
                                overflow: "hidden",
                                WebkitLineClamp: 1, // số dòng
                                WebkitBoxOrient: "vertical",
                                textOverflow: "ellipsis",
                                fontSize: "15px",
                                mb: "8px",
                              }}
                            >
                              {name}
                            </Typography>
                          )}
                          {published_at && (
                            <Typography
                              sx={{
                                mt: "auto",
                                fontSize: "15px",
                                color: "#bdbdbd",
                              }}
                            >
                              {published_at}
                            </Typography>
                          )}
                        </CardContent>
                        <CardActions>
                          <ButtonCustom
                            component="button"
                            sx={{
                              width: "fit-content",
                              padding: "4px 8px",
                              fontSize: "12px",
                              "& .MuiButton-startIcon": {
                                mr: 0,
                              },
                            }}
                            variant="contained"
                            startIcon={<PlayCircleIcon sx={{ mr: "3px" }} />}
                            onClick={() => handleClickOpen(key)}
                          >
                            Watch a movie
                          </ButtonCustom>
                        </CardActions>
                      </Card>
                    </Grid>
                  </SwiperSlide>
                );
              })}
            </SwiperComponent>
          ) : (
            <CustomEmpty description="No videos available" />
          )}
        </Box>
      </Container>
      <PopupVideos title={title} backdrop_path={backdrop_path} />
    </Box>
  );
};

export default VideosSection;
{
  /* <Box sx={{ py: "40px" }}>
  <Container maxWidth="xl">
    <Box>
      <TypographyTitle>Videos</TypographyTitle>
      <Grid container spacing={2} mt="15px">
        {!loading && videos?.length === 0 ? (
          <CustomEmpty
            description="No videos available"
            style={{ margin: "0 auto" }}
          />
        ) : (
          videos?.map((item, index) => {
            const { id, key, name, published_at } = item || {};
            return (
              <Grid key={id || index} size={{ lg: 2, md: 3, sm: 4, xs: 6 }}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <CardMedia
                    sx={{ height: 140 }}
                    image={getMediaImageUrl(backdrop_path)}
                    title="green iguana"
                  />
                  <CardContent
                    sx={{
                      p: "10px",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {name && (
                      <Typography
                        sx={{
                          display: "-webkit-box",
                          overflow: "hidden",
                          WebkitLineClamp: 2, // số dòng
                          WebkitBoxOrient: "vertical",
                          textOverflow: "ellipsis",
                          fontSize: "15px",
                          mb: "8px",
                        }}
                      >
                        {name}
                      </Typography>
                    )}
                    {published_at && (
                      <Typography
                        sx={{
                          mt: "auto",
                          fontSize: "15px",
                          color: "#bdbdbd",
                        }}
                      >
                        {published_at}
                      </Typography>
                    )}
                  </CardContent>
                  <CardActions>
                    <ButtonCustom
                      component="button"
                      sx={{
                        width: "fit-content",
                        padding: "4px 8px",
                        fontSize: "12px",
                        "& .MuiButton-startIcon": {
                          mr: 0,
                        },
                      }}
                      variant="contained"
                      startIcon={<PlayCircleIcon sx={{ mr: "3px" }} />}
                      onClick={() => handleClickOpen(key)}
                    >
                      Watch a movie
                    </ButtonCustom>
                  </CardActions>
                </Card>
              </Grid>
            );
          })
        )}
      </Grid>
    </Box>
  </Container>
  <PopupVideos title={title} backdrop_path={backdrop_path} />
</Box> */
}
