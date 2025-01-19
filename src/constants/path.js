const MOVIES_PATH = "/movies";
const TV_SERIES_PATH = "/tv-series";
const TRENDING_PATH = "/trending";

const PATHS = {
  HOME: "/",
  ACCOUNT: "/login",
  SEARCH: "/search",
  MOVIES: {
    NOW_PLAYING: MOVIES_PATH + "/now-playing",
    POPULAR: MOVIES_PATH + "/popular",
    TOP_RATED: MOVIES_PATH + "/top-rated",
    UPCOMING: MOVIES_PATH + "/upcoming",
  },
  TV_SERIES: {
    AIRING_TODAY: TV_SERIES_PATH + "/airing-today",
    ON_THE_AIR: TV_SERIES_PATH + "/on-tv",
    POPULAR: TV_SERIES_PATH + "/popular",
    TOP_RATED: TV_SERIES_PATH + "/top-rated",
  },
  MOVIE_DETAIL: {
    INDEX: "/movies",
    DETAIL: "/movies" + "/:movie_id" + "/:nameSlug",
  },
  TV_SERIES_DETAIL: {
    INDEX: "/series",
    DETAIL: "/series" + "/:series_id" + "/:nameSlug",
  },
  GENRES: {
    MOVIE: MOVIES_PATH + "/genres-movies",
    TV: TV_SERIES_PATH + "/genres-tv",
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
