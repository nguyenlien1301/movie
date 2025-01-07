import axiosInstance from "../utils/axiosInstance";

const searchService = {
  getSearchMovie(query = "") {
    return axiosInstance.get(`/search/movie`, {
      params: {
        query: `${query}`,
      },
    });
  },
};

export default searchService;
