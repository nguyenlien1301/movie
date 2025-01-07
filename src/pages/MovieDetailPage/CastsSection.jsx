import React from "react";
import { Box, CardMedia, Container, Typography } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import getImageUrl from "../../utils/imageUrl";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import CustomEmpty from "../../components/ComponentEmpty";
import { CustomSwiper } from "../../components/CustomStyleds";
import SkeletonImage from "../../components/SkeletonImage";
import TypographyTitle from "../../components/TypographyTitle";

const CastsSection = ({ casts = [], loading = false }) => {
  return (
    <Box>
      <Container maxWidth="xl">
        <TypographyTitle>Movie Casts</TypographyTitle>
        <Box mt="15px">
          {loading ? (
            <CustomSwiper
              modules={[Navigation, Autoplay]}
              spaceBetween={16} // Khoảng cách giữa các slide
              slidesPerView={5} // Số slide hiển thị trên mỗi hàng
              navigation // Bật mũi tên điều hướng
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              style={{ paddingBottom: "20px" }}
              breakpoints={{
                900: {
                  slidesPerView: 5,
                  spaceBetween: 16,
                },
                700: {
                  slidesPerView: 4,
                  spaceBetween: 16,
                },
                450: {
                  slidesPerView: 3,
                  spaceBetween: 16,
                },
                0: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
              }}
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <SkeletonImage />
                </SwiperSlide>
              ))}
            </CustomSwiper>
          ) : casts?.length > 0 ? (
            <CustomSwiper
              modules={[Navigation, Autoplay]}
              spaceBetween={16} // Khoảng cách giữa các slide
              slidesPerView={5} // Số slide hiển thị trên mỗi hàng
              navigation // Bật mũi tên điều hướng
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              style={{ paddingBottom: "20px" }}
              breakpoints={{
                900: {
                  slidesPerView: 5,
                  spaceBetween: 16,
                },
                700: {
                  slidesPerView: 4,
                  spaceBetween: 16,
                },
                450: {
                  slidesPerView: 3,
                  spaceBetween: 16,
                },
                0: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
              }}
            >
              {casts?.map((cast, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Box
                      sx={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                          borderRadius: "8px", // Bo tròn góc
                          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Bóng mờ
                        }}
                        image={getImageUrl(cast?.profile_path)}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 300px)",
                          width: "100%",
                          height: "60px",
                          bottom: 0,
                        }}
                      ></Box>
                      {cast?.name && (
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: "10px",
                            color: "white",
                          }}
                        >
                          <Typography
                            variant="h6"
                            fontWeight="bold"
                            fontSize="13px"
                          >
                            {cast?.name}
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </SwiperSlide>
                );
              })}
            </CustomSwiper>
          ) : (
            <CustomEmpty description="No actors" />
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default CastsSection;
