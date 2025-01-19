import { Box } from "@mui/material";
import React, { useEffect } from "react";
import useMutation from "../../hooks/useMutation";
import movieDetailService from "../../services/movieDetailService";
import { useParams } from "react-router-dom";
import { formatDate } from "../../utils/format";
import CastsSection from "./CastsSection";
import VideosSection from "./VideosSection";
import SimilarSection from "./SimilarSection";
import useQuery from "../../hooks/useQuery";
import { useDispatch, useSelector } from "react-redux";
import { handleGetVideo } from "../../store/reducer/videoPopupReducer";
import InfoSection from "./InfoSection";
import useDebounce from "../../hooks/useDebounce";

const MovieDetailPage = () => {
  const params = useParams();
  const { movie_id } = params;
  const { videos } = useSelector((state) => state.videoPopup);
  const dispatch = useDispatch();
  const {
    data: movieDetailData,
    loading: movieDetailLoading,
    execute: executeGetMovieDetail,
  } = useMutation(movieDetailService.getMovieDetail);

  const { data: castData, loading: castLoading } = useQuery(
    () => movie_id && movieDetailService.getMovieCasts(movie_id),
    [movie_id]
  );
  // đảm bảo mỗi khi movie_id thay đổi, hook sẽ gọi lại API để cập nhật dữ liệu mới.
  // [movie_id] trong dependency array giúp đảm bảo API chỉ được gọi lại khi id thay đổi (tức là khi dữ liệu chi tiết sản phẩm mới được load).

  const { data: similarData, loading: similarLoading } = useQuery(
    () => movie_id && movieDetailService.getMoviesSimilar(movie_id),
    [movie_id]
  );
  useEffect(() => {
    if (!!movie_id) {
      executeGetMovieDetail(movie_id);
      dispatch(handleGetVideo(movie_id));
    }
  }, [movie_id]);

  const {
    release_date,
    genres,
    production_companies,
    production_countries,
    title,
    backdrop_path,
  } = movieDetailData || {};
  const casts = castData?.cast || [];
  const similars = similarData?.results || [];
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
  const modifiedMovieInfo = {
    ...movieDetailData,
    genresItem: genres?.map((item) => item?.name).join(", "),
    companies: production_companies?.map((item) => item?.name).join(", "),
    release_date: formatDate(release_date),
  };
  const loading = useDebounce(movieDetailLoading, 300);
  return (
    <Box sx={{ pt: "24px" }}>
      <InfoSection
        {...modifiedMovieInfo}
        keyFirst={keyFirst}
        loading={!loading}
      />
      <VideosSection
        videos={video}
        title={title}
        backdrop_path={backdrop_path}
      />
      <CastsSection casts={casts} loading={castLoading} />
      <SimilarSection similars={similars} loading={similarLoading} />
    </Box>
  );
};

export default MovieDetailPage;
