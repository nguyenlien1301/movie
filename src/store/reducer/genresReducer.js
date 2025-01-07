import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import genresService from "../../services/genresService";
import discoverService from "../../services/discoverService";

const initialState = {
  filterGenres: [],
  genresList: [],
  value: 0,
  loading: {
    loadingGenres: true,
    loadingFilterGenres: true,
  },
};
const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    handleChange: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleGenres.pending, (state, action) => {
      state.loading.loadingGenres = true;
    });
    builder.addCase(handleGenres.fulfilled, (state, action) => {
      state.genresList = action.payload.genres;
      state.loading.loadingGenres = false;
    });
    builder.addCase(handleGenres.rejected, (state, action) => {
      state.loading.loadingGenres = false;
    });

    builder.addCase(handleDiscoverMovie.pending, (state, action) => {
      state.loading.loadingFilterGenres = true;
    });
    builder.addCase(handleDiscoverMovie.fulfilled, (state, action) => {
      state.filterGenres = action.payload;
      state.loading.loadingFilterGenres = false;
    });
    builder.addCase(handleDiscoverMovie.rejected, (state, action) => {
      state.loading.loadingFilterGenres = false;
    });
  },
});

export const handleDiscoverMovie = createAsyncThunk(
  "genres/handleDiscoverMovie",
  async (genres, { rejectWithValue }) => {
    try {
      // Sử dụng Promise.all để gửi nhiều yêu cầu song song
      const requests = genres.map((genre) =>
        discoverService.getDiscoverMovie(genre.id).then((res) => ({
          id: genre.id,
          name: genre.name, // Gắn tên thể loại vào kết quả
          movies: res?.data.results, // Dữ liệu phim của thể loại đó
        }))
      );
      // Chờ tất cả các yêu cầu hoàn thành
      const responses = await Promise.all(requests);
      // Kết hợp dữ liệu, mỗi thể loại là một object { name, movies }
      return responses;
    } catch (error) {
      console.log("🚀error---->", error);
      return rejectWithValue(error?.response?.data);
    }
  }
);
export const handleGenres = createAsyncThunk(
  "genres/handleGenres",
  async (payload, thunkApi) => {
    try {
      const res = await genresService.getGenresMovieList();
      if (res?.data) {
        const genreId = res.data.genres.map((genre) => {
          return {
            id: genre?.id,
            name: genre?.name,
          };
        });
        thunkApi.dispatch(handleDiscoverMovie(genreId));
        return res?.data;
      }
    } catch (error) {
      console.log("🚀error---->", error);
      return thunkApi.rejectWithValue(error?.response?.data);
    }
  }
);

export const { actions, reducer: genresReducer } = genresSlice;
export const { handleChange, handleFilterMovies } = actions;
export default genresReducer;
