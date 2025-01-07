import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { CustomSwiper } from "../CustomStyleds";
const SwiperComponent = ({ children }) => {
  return (
    <CustomSwiper
      modules={[Navigation, Autoplay, Pagination]}
      spaceBetween={16} // Khoảng cách giữa các slide
      speed={800}
      navigation // Bật mũi tên điều hướng
      // autoplay={{ delay: 1500, disableOnInteraction: false }}
      style={{ paddingBottom: "20px" }}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      breakpoints={{
        1200: {
          slidesPerView: 6,
          slidesPerGroup: 6,
        },
        900: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
        768: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
        551: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        0: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
      }}
    >
      {children}
    </CustomSwiper>
  );
};

export default SwiperComponent;
