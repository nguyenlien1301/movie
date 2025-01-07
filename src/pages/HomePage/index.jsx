import React from "react";
import NowPlayingSeciton from "./NowPlayingSection";
import PopularSection from "./PopularSection";
import TopRatedSection from "./TopRatedSection";
import UpcomingSection from "./UpcomingSection";
import AiringToDayTvSection from "./AiringToDayTvSection";
import OnTheAirTvSection from "./OnTheAirTvSection";
import PopularTvSection from "./PopularTvSection";
import TopRatedTvSection from "./TopRatedTvSection";
import { useSelector } from "react-redux";
import useDebounce from "../../hooks/useDebounce";
import IntroMovies from "../../components/IntroMovies";
import movieSlice from "../../utils/movieSlice";

const HomePage = () => {
  const { movies: popularMovies, loading: popularLoading } = useSelector(
    (state) => state.popular
  );
  const topMovies = movieSlice(popularMovies);
  const loading = useDebounce(popularLoading, 300);
  return (
    <>
      <IntroMovies movies={topMovies} loading={loading} />
      <NowPlayingSeciton />
      <PopularSection />
      <TopRatedSection />
      <UpcomingSection />
      <AiringToDayTvSection />
      <OnTheAirTvSection />
      <PopularTvSection />
      <TopRatedTvSection />
    </>
  );
};

export default HomePage;
