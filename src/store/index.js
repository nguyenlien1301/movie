import { configureStore } from "@reduxjs/toolkit";
import nowPlayingReducer from "./reducer/nowPlayingReducer";
import popularReducer from "./reducer/popularReducer";
import topRatedReducer from "./reducer/topRatedReducer";
import upcomingReducer from "./reducer/upcomingReducer";
import videoPopupReducer from "./reducer/videoPopupReducer";
import searchReducer from "./reducer/searchReducer";
import authReducer from "./reducer/authReducer";
import airingTodayTvReducer from "./reducer/airingTodayTvReducer";
import onTheAirTvReducer from "./reducer/onTheAirTvReducer";
import popularTvReducer from "./reducer/popularTvReducer";
import topRatedTvReducer from "./reducer/topRatedTvReducer";
import trendingReducer from "./reducer/trendingReducer";

export const store = configureStore({
  reducer: {
    nowPlaying: nowPlayingReducer,
    popular: popularReducer,
    topRated: topRatedReducer,
    upcoming: upcomingReducer,
    videoPopup: videoPopupReducer,
    search: searchReducer,
    auth: authReducer,
    airingToDay: airingTodayTvReducer,
    onTheAirTv: onTheAirTvReducer,
    popularTv: popularTvReducer,
    topRatedTv: topRatedTvReducer,
    trending: trendingReducer,
  },
});
