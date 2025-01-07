import axiosInstance from "../utils/axiosInstance";

const genresService = {
  getGenresMovieList() {
    return axiosInstance.get(`/genre/movie/list`);
  },
  getGenresTvList() {
    return axiosInstance.get(`/genre/tv/list`);
  },
};

export default genresService;
