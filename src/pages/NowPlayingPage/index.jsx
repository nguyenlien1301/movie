import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomEmpty from "../../components/ComponentEmpty";
import Grid from "@mui/material/Grid2";
import CardItem from "../../components/CardItem";
import {
  handleGetNowPlaying,
  updatePage,
} from "../../store/reducer/nowPlayingReducer";
import { TYPE_PAGE } from "../../constants/general";
import InfiniteScrollComponent from "../../components/InfiniteScrollComponent";
import useDebounce from "../../hooks/useDebounce";
import ArrayFromComponent from "../../components/ArrayFromComponent";
import TypographyTitle from "../../components/TypographyTitle";
import ContainerComponent from "../../components/ContainerComponent";
import Breadcrumb from "../../components/Breadcrumb";
import { Link } from "react-router-dom";
import PATHS from "../../constants/path";

const NowPlayingPage = () => {
  const dispatch = useDispatch();
  const {
    movies,
    hasMore,
    loading: nowPlayingLoading,
    params,
  } = useSelector((state) => state.nowPlaying);
  //   Khi trang đầu tiên được render, useEffect sẽ chạy một lần và gửi action handleGetNowPlaying để tải phim của trang đầu tiên (params.page bắt đầu từ 1 trong initialState).
  // Mỗi khi params.page thay đổi (khi người dùng cuộn và tải thêm trang mới), useEffect sẽ chạy lại để gọi dispatch(handleGetNowPlaying(params.page)), giúp tải dữ liệu của trang tiếp theo.
  useEffect(() => {
    dispatch(handleGetNowPlaying({ page: params.page, type: TYPE_PAGE.all }));
  }, [params.page]); // Trigger khi params.page hoặc titleMap thuseEffect(() => {

  const fetchMore = () => {
    // Tăng trang và tải thêm phim khi cuộn xuống
    // Điều kiện kiểm tra hasMore, thường là một boolean để xem liệu còn phim để tải thêm hay không. Nếu hasMore là true, có nghĩa là chưa tải hết tất cả phim, thì hàm sẽ tiếp tục thực hiện.
    if (hasMore) {
      dispatch(updatePage(params.page + 1));
    }
  };
  const loading = useDebounce(nowPlayingLoading, 300);
  return (
    <ContainerComponent
      sx={{
        pt: "var(--h-header)",
      }}
    >
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={PATHS.HOME}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isActive>NowPlaying Movies</Breadcrumb.Item>
      </Breadcrumb>
      <TypographyTitle>NowPlaying movies</TypographyTitle>
      <InfiniteScrollComponent
        dataLength={movies.length}
        next={fetchMore}
        hasMore={hasMore}
      >
        <Grid container spacing={2}>
          {loading ? (
            <ArrayFromComponent />
          ) : movies.length > 0 ? (
            movies?.map((movie, index) => {
              return <CardItem key={`${movie.id}-${index}`} {...movie} />;
            })
          ) : (
            <CustomEmpty description="Không tìm thấy hình ảnh nào" />
          )}
        </Grid>
      </InfiniteScrollComponent>
    </ContainerComponent>
  );
};
export default NowPlayingPage;
