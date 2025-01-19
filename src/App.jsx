import { BrowserRouter, Route, Routes } from "react-router-dom";
import PATHS from "./constants/path";
import { lazy, Suspense } from "react";
import ComponentLoading from "./components/ComponentLoading";
import RouterWrapper from "./components/RouterWrapper";
const MainLayout = lazy(() => import("./layout/MainLayout"));
const UpcomingPage = lazy(() => import("./pages/UpcomingPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
// const LoginPage = lazy(() => import("./pages/AccountPage"));
const NowPlayingPage = lazy(() => import("./pages/NowPlayingPage"));
const PopularPage = lazy(() => import("./pages/PopularPage"));
const TopRatedPage = lazy(() => import("./pages/TopRatedPage"));
const MovieDetailPage = lazy(() => import("./pages/MovieDetailPage"));
const SearchResultsPage = lazy(() => import("./pages/SearchResultsPage"));
const GenresMoviePage = lazy(() => import("./pages/GenresMoviePage"));
const AiringTodayTvPage = lazy(() => import("./pages/AiringTodayTvPage"));
const OnTheAirTvPage = lazy(() => import("./pages/OnTheAirTvPage"));
const PopularTvPage = lazy(() => import("./pages/PopularTvPage"));
const TopRatedTvPage = lazy(() => import("./pages/TopRatedTvPage"));
const TvSeriesDetailPage = lazy(() => import("./pages/TvSeriesDetailPage"));
const TrendingPage = lazy(() => import("./pages/TrendingPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const GenresMovieTvPage = lazy(() => import("./pages/GenresMovieTvPage"));

function App() {
  return (
    <Suspense fallback={<ComponentLoading />}>
      <BrowserRouter>
        <RouterWrapper />
        <Routes>
          <Route path={PATHS.HOME} element={<MainLayout />}>
            <Route index element={<HomePage />} />
            {/* <Route path={PATHS.ACCOUNT} element={<LoginPage />} /> */}
            <Route
              path={PATHS.MOVIES.NOW_PLAYING}
              element={<NowPlayingPage />}
            />
            <Route path={PATHS.MOVIES.POPULAR} element={<PopularPage />} />
            <Route path={PATHS.MOVIES.TOP_RATED} element={<TopRatedPage />} />
            <Route path={PATHS.MOVIES.UPCOMING} element={<UpcomingPage />} />
            <Route
              path={PATHS.TV_SERIES.AIRING_TODAY}
              element={<AiringTodayTvPage />}
            />
            <Route
              path={PATHS.TV_SERIES.ON_THE_AIR}
              element={<OnTheAirTvPage />}
            />
            <Route path={PATHS.TV_SERIES.POPULAR} element={<PopularTvPage />} />
            <Route
              path={PATHS.TV_SERIES.TOP_RATED}
              element={<TopRatedTvPage />}
            />
            <Route
              path={PATHS.MOVIE_DETAIL.DETAIL}
              element={<MovieDetailPage />}
            />
            <Route
              path={PATHS.TV_SERIES_DETAIL.DETAIL}
              element={<TvSeriesDetailPage />}
            />
            <Route path={PATHS.SEARCH} element={<SearchResultsPage />} />
            <Route path={PATHS.GENRES.MOVIE} element={<GenresMoviePage />} />
            <Route path={PATHS.GENRES.TV} element={<GenresMovieTvPage />} />
            <Route path={PATHS.TRENDING.INDEX} element={<TrendingPage />} />
            <Route path={PATHS.PROFILE} element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
