const MOVIES_PATH = "/movies";
const TV_SERIES_PATH = "/tv_series";
const TRENDING_PATH = "/trending";

const PATHS = {
  HOME: "/",
  ACCOUNT: "/login",
  SEARCH: "/search",
  MOVIES: {
    NOW_PLAYING: MOVIES_PATH + "/now_playing",
    POPULAR: MOVIES_PATH + "/popular",
    TOP_RATED: MOVIES_PATH + "/top_rated",
    UPCOMING: MOVIES_PATH + "/upcoming",
  },
  TV_SERIES: {
    AIRING_TODAY: TV_SERIES_PATH + "/airing_today",
    ON_THE_AIR: TV_SERIES_PATH + "/on_the_air",
    POPULAR: TV_SERIES_PATH + "/popular",
    TOP_RATED: TV_SERIES_PATH + "/top_rated",
  },
  MOVIE_DETAIL: {
    INDEX: "/movie",
    DETAIL: "/movie" + "/:movie_id" + "/:nameSlug",
  },
  TV_SERIES_DETAIL: {
    INDEX: "/series",
    DETAIL: "/series" + "/:series_id" + "/:nameSlug",
  },
  GENRES: {
    MOVIE: MOVIES_PATH + "/genres_movie_list",
    TV: TV_SERIES_PATH + "/genres_tv_list",
  },
  TRENDING: {
    INDEX: TRENDING_PATH,
    ALL: TRENDING_PATH + "/all",
    MOVIES: TRENDING_PATH + "/movies",
    TV: TRENDING_PATH + "/tv",
  },
  PROFILE: "/profile",
};

export default PATHS;
