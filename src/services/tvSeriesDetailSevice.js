import axiosInstance from "../utils/axiosInstance";

const tvSeriesDetailService = {
  getTvSeriesDetail(id) {
    return axiosInstance.get(`/tv/${id}`);
  },
  getTvSeriesCasts(id) {
    return axiosInstance.get(`/tv/${id}/credits`);
  },
  getTvSeriesVideos(id) {
    return axiosInstance.get(`/tv/${id}/videos`);
  },
  getTvSeriesSimilar(id) {
    return axiosInstance.get(`/tv/${id}/similar`);
  },
};

export default tvSeriesDetailService;
