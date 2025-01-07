import axiosInstance from "../utils/axiosInstance";

const tvSeriesService = {
  getAiringToday(payload = {}) {
    return axiosInstance.get(`/tv/airing_today`, {
      params: payload,
    });
  },
  getOnTheAir(payload = {}) {
    return axiosInstance.get(`/tv/on_the_air`, {
      params: payload,
    });
  },
  getPopularTv(payload = {}) {
    return axiosInstance.get(`/tv/popular`, {
      params: payload,
    });
  },
  getTopRatedTv(payload = {}) {
    return axiosInstance.get(`/tv/top_rated`, {
      params: payload,
    });
  },
};

export default tvSeriesService;
