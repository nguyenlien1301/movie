import axiosInstance from "../utils/axiosInstance";

// params: {
//   page: query,
// },
const moviesService = {
  getNowPlaying(payload = {}) {
    return axiosInstance.get(`/movie/now_playing`, {
      params: payload,
    });
  },
  getPopular(payload = {}) {
    return axiosInstance.get(`/movie/popular`, {
      params: payload,
    });
  },
  getTopRated(payload = {}) {
    return axiosInstance.get(`/movie/top_rated`, {
      params: payload,
    });
  },
  getUpcoming(payload = {}) {
    return axiosInstance.get(`/movie/upcoming`, {
      params: payload,
    });
  },
};

export default moviesService;
