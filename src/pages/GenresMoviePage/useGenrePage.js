import React, { useEffect, useMemo } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import queryString from "query-string";
import useMutation from "../../hooks/useMutation";
import discoverService from "../../services/discoverService";
import useDebounce from "../../hooks/useDebounce";
import useQuery from "../../hooks/useQuery";
import genresService from "../../services/genresService";
import { SORT_OPTIONS } from "../../constants/general";

const PRODUCT_LIMITS = 20;
const useGenrePage = () => {
  const { search } = useLocation();
  const queryObject = queryString.parse(search);
  const [_, setSearchParams] = useSearchParams();

  const {
    data: genresData,
    loading: genresLoading,
    error: genresError,
  } = useQuery(genresService.getGenresMovieList);
  const genres = genresData?.genres || [];

  const {
    data: moviesData,
    loading: moviesLoading,
    error: moviesError,
    execute: fetchMovies,
  } = useMutation((query) =>
    discoverService.getDiscoverMovie(query || `?limit=${PRODUCT_LIMITS}`)
  );

  const movies = moviesData?.results || [];
  const moviesListLoading = useDebounce(moviesLoading, 5000);

  useEffect(() => {
    fetchMovies(search);
  }, [search]);
  const updateQueryString = (queryObject) => {
    const newQueryString = queryString.stringify({
      ...queryObject,
      limit: PRODUCT_LIMITS,
    });
    setSearchParams(new URLSearchParams(newQueryString));
  };

  const activeSort = useMemo(() => {
    return (
      Object.values(SORT_OPTIONS).find(
        (options) => options.queryObject.sort_by === queryObject.sort_by
      )?.value || SORT_OPTIONS.popularity_asc.value
    );
  }, [queryObject]);
  const onSortChange = (sortType) => {
    const sortQueryObject = SORT_OPTIONS[sortType].queryObject;
    if (sortQueryObject) {
      updateQueryString({
        ...queryObject,
        ...sortQueryObject,
        page: 1,
      });
    }
  };

  const onPaginationChange = (page) => {
    updateQueryString({ ...queryObject, page: page });
  };
  const onFilterChange = (tabId, isActive) => {
    let newGenreQuery = Array.isArray(queryObject.with_genres)
      ? [...queryObject.with_genres, tabId]
      : [queryObject.with_genres, tabId];

    if (!isActive) {
      newGenreQuery = newGenreQuery.filter((genre) => genre !== tabId);
    }

    if (!tabId) {
      newGenreQuery = [];
    }
    updateQueryString({
      ...queryObject,
      with_genres: newGenreQuery,
      page: 1,
    });
  };
  const onResetFilterChange = () => updateQueryString({});
  const paginationProps = {
    page: Number(moviesData?.page || queryObject.page || 1),
    limit: Number(moviesData?.results?.length || 0),
    total: Math.min(Number(moviesData?.total_pages || 0), 500),
    onPaginationChange,
  };

  const filterProps = {
    genre: genres || [],
    isLoading: genresLoading,
    isError: genresError,
    activeGenre: Array.isArray(queryObject.with_genres)
      ? queryObject.with_genres
      : [queryObject.with_genres],
    onFilterChange,
    onResetFilterChange,
    activeSort,
    onSortChange,
  };

  const moviesListProps = {
    isLoading: moviesListLoading,
    isError: !!moviesError,
    movies,
  };
  return { moviesListProps, paginationProps, filterProps };
};

export default useGenrePage;
