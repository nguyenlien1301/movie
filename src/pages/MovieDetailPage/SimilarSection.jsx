import React from "react";
import { Box, CardMedia, Container } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import getImageUrl from "../../utils/imageUrl";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import PATHS from "../../constants/path";
import CustomEmpty from "../../components/ComponentEmpty";
import SkeletonImage from "../../components/SkeletonImage";
import SwiperComponent from "../../components/SwiperComponent";
import TypographyTitle from "../../components/TypographyTitle";
import { removeVietnameseTones } from "../../utils/format";

const SimilarSection = ({ similars = [], loading = false }) => {
  return (
    <Box pt="40px">
      <Container maxWidth="xl">
        <TypographyTitle>Movies Similar</TypographyTitle>
        <Box mt="15px">
          {loading ? (
            <SwiperComponent>
              {Array.from({ length: 6 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <SkeletonImage />
                </SwiperSlide>
              ))}
            </SwiperComponent>
          ) : similars?.length > 0 ? (
            <SwiperComponent>
              {similars?.map((similar, index) => {
                const pathDetail =
                  PATHS.MOVIE_DETAIL.INDEX +
                  `/${similar?.id}/${similar.name || similar.title}`;
                return (
                  <SwiperSlide key={similar?.id || index}>
                    <Box
                      sx={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "30px",
                        overflow: "hidden",
                        transition: "0.3s",
                        border: "2px solid transparent",
                        boxShadow:
                          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                        ":hover": {
                          border: (theme) =>
                            `2px solid ${theme.borderColorCustom.border}`,
                        },
                        ":hover .MuiCardMedia-root": {
                          transform: "scale(1.05)",
                        },
                      }}
                    >
                      <CardMedia
                        component={Link}
                        to={pathDetail}
                        sx={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                          borderRadius: "21px", // Bo tròn góc
                          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Bóng mờ
                          transition: "transform 0.3s",
                        }}
                        image={getImageUrl(similar?.poster_path)}
                      />
                    </Box>
                  </SwiperSlide>
                );
              })}
            </SwiperComponent>
          ) : (
            <CustomEmpty description="No movies are showing" />
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default SimilarSection;
