import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import moviesService from "../../services/moviesService";

const initialState = {
  params: {
    page: 1,
  },
  movies: [],
  hasMore: true,
  loading: true,
};
const nowPlayingSlice = createSlice({
  name: "nowPlaying",
  initialState,
  reducers: {
    updatePage: (state, action) => {
      state.params.page = action.payload;
    },
    resetMovies: (state) => {
      state.movies = [];
      state.params.page = 1;
    },
  },
  //   nowPlaying/handleGetNowPlaying lấy tên này tự động gắn vào 3 trạng thái để tạo ra 3 action, 3 action này sẽ đc tự đqọng dispath tự động gọi khi chạy aysThunk chứ ko cần phải gọi nó.
  // bất kì khi nào asThnk đc gọi nó đều vào pendding
  // extraReducers cho phép bắt đc và cho phép state của nó dựa trên những action bên ngoài type của nó.
  //   extraReducers là một thuộc tính trong createSlice được sử dụng để xử lý các action không được tạo bởi các reducer nội bộ (các action bên ngoài slice). Điều này đặc biệt hữu ích khi bạn sử dụng createAsyncThunk để xử lý các thao tác bất đồng bộ, như gọi API.
  extraReducers: (builder) => {
    builder.addCase(handleGetNowPlaying.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(handleGetNowPlaying.fulfilled, (state, action) => {
      const { results, total_pages, type } = action.payload;
      //   state.movies sẽ đc cập nhật phim đã tải và phim mới đc thêm vào cuối mảng
      if (type === "home") {
        state.movies = results.slice(0, 20);
      } else if (type === "all") {
        state.movies = [...state.movies, ...results];
      }

      // state.movies = [...state.movies, ...results];
      // if(action.payload.type === 'load') { .... line 31  }
      // if(action.payload.type === 'search') { state.movies = results }
      //   kiểm tra xem đã scroll đến trang cuối cùng hay chưa
      // trang hiện tại nhỏ hơn tổng trang thì vẫn còn tải đc trạng thái của hasMore sẽ là true và ngc lại
      state.hasMore = state.params.page < total_pages;
      state.loading = false;
    });
    builder.addCase(handleGetNowPlaying.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const handleGetNowPlaying = createAsyncThunk(
  "nowPlaying/handleGetNowPlaying",
  //   geState: lấy state hiện tại
  // kji cần gọi 1 api cần tương tác với store, gọi api xong update vào store (cứái nào update vào store thì cuyws tạo )
  async ({ page, type }, { geState, rejectWithValue }) => {
    // api này có 1 name là string query cho search giờ có thể lấy ra và truyền cho payload luôn thành truyền 1 obj
    // console.log("🚀payload---->", payload);
    try {
      const res = await moviesService.getNowPlaying({ page, type });
      if (res?.data?.results) {
        return {
          results: res.data.results,
          total_pages: res.data.total_pages,
          type,
        };
      }
    } catch (error) {
      console.log("🚀error---->", error);
      return rejectWithValue(error?.response?.data);
    }
  }
);
const { actions, reducer: nowPlayingReducer } = nowPlayingSlice;
export const { updatePage, updateMovies, resetMovies } = actions;
export default nowPlayingReducer;
