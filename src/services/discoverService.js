import axiosInstance from "../utils/axiosInstance";

const discoverService = {
  getDiscoverMovie(ids) {
    return axiosInstance.get(`/discover/movie?with_genres=${ids}`);
  },
  getDiscoverTvSeries(ids) {
    return axiosInstance.get(`/discover/tv?with_genres=${ids}`);
  },
};
export default discoverService;
