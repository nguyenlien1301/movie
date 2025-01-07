import React, { useEffect } from "react";
import VideosSection from "../MovieDetailPage/VideosSection";
import CastsSection from "../MovieDetailPage/CastsSection";
import SimilarSection from "../MovieDetailPage/SimilarSection";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import useMutation from "../../hooks/useMutation";
import TvSeriesDetailService from "../../services/tvSeriesDetailSevice";
import { formatDate } from "../../utils/format";
import InfoTvSeriesSection from "./InfoTvSeriesSection";
import { handleGetVideosTvSeries } from "../../store/reducer/videoPopupReducer";
import { useDispatch, useSelector } from "react-redux";
import useQuery from "../../hooks/useQuery";
import useDebounce from "../../hooks/useDebounce";

const TvSeriesDetailPage = () => {
  const params = useParams();
  const { series_id } = params;
  const { videos, loading } = useSelector((state) => state.videoPopup);
  const dispatch = useDispatch();
  const {
    data: tvSeriesData,
    loading: tvSeriesLoading,
    execute: executeTvSeriesDetail,
  } = useMutation(TvSeriesDetailService.getTvSeriesDetail);
  const { data: castsData, loading: castsLoading } = useQuery(
    () => series_id && TvSeriesDetailService.getTvSeriesCasts(series_id),
    [series_id]
  );
  const { data: similarsData, loading: similarLoading } = useQuery(
    () => series_id && TvSeriesDetailService.getTvSeriesSimilar(series_id),
    [series_id]
  );
  useEffect(() => {
    if (!!series_id) {
      executeTvSeriesDetail(series_id);
      dispatch(handleGetVideosTvSeries(series_id));
    }
  }, [series_id]);
  const {
    genres,
    production_companies,
    production_countries,
    first_air_date,
    last_air_date,
    name,
  } = tvSeriesData || {};
  const modifiedTvSeriesInfo = {
    ...tvSeriesData,
    genresItem: genres?.map((item) => item?.name).join(", "),
    companies: production_companies?.map((item) => item?.name).join(", "),
    countrie: production_countries?.[0],
    first_air_date: formatDate(first_air_date),
    last_air_date: formatDate(last_air_date),
  };
  const video = videos
    ?.map((item) => {
      return {
        ...item,
        published_at: formatDate(item?.published_at),
      };
    })
    .sort((item1, item2) => item1.published_at - item2.published_at)
    .reverse();

  const keyFirst = video?.[0]?.key;
  const casts = castsData?.cast || [];
  const similars = similarsData?.results || [];
  const loadingIntro = useDebounce(tvSeriesLoading, 300);
  return (
    <Box sx={{ pt: "24px" }}>
      <InfoTvSeriesSection
        {...modifiedTvSeriesInfo}
        keyFirst={keyFirst}
        loading={loadingIntro}
      />
      <VideosSection videos={video} loading={loading} title={name} />
      <CastsSection casts={casts} loading={castsLoading} />
      <SimilarSection similars={similars} loading={similarLoading} />
    </Box>
  );
};

export default TvSeriesDetailPage;
