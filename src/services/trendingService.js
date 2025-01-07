import axiosInstance from "../utils/axiosInstance";

const trendingService = {
  getTrending({ tag = "all", timeWindown = "" }) {
    return axiosInstance.get(`/trending/${tag}/${timeWindown}`);
  },
};

export default trendingService;
