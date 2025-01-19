import axiosInstance from "../utils/axiosInstance";

const discoverService = {
  getDiscoverMovie(query = "") {
    return axiosInstance.get(`/discover/movie${query}`);
  },
  getDiscoverTvSeries(query = "") {
    return axiosInstance.get(`/discover/tv${query}`);
  },
};
export default discoverService;
