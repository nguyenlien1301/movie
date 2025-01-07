import axiosInstance from "../utils/axiosInstance";

const movieDetailService = {
  getMovieDetail(id) {
    return axiosInstance.get(`/movie/${id}`);
  },
  getMovieCasts(id) {
    return axiosInstance.get(`/movie/${id}/credits`);
  },
  getMoviesVideos(id) {
    return axiosInstance.get(`/movie/${id}/videos`, {
      params: { language: "en-US" },
    });
  },
  getMoviesSimilar(id) {
    return axiosInstance.get(`/movie/${id}/similar`);
  },
  //   getMovieDetail(id) {
  //     return axiosInstance.get(`/movie/${id}?api_key=${API_KEY}`);
  //   },
};

export default movieDetailService;
