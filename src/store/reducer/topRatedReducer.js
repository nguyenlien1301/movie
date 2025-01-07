import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import moviesService from "../../services/moviesService";

const initialState = {
  params: {
    page: 1,
  },
  movies: [],
  hasMore: true,
  loading: true,
};
const topRatedSlice = createSlice({
  name: "topRated",
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
  extraReducers: (builder) => {
    builder.addCase(handleGetTopRated.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(handleGetTopRated.fulfilled, (state, action) => {
      const { total_pages, results, type } = action.payload;
      if (type === "home") {
        state.movies = results.slice(0, 20);
      } else if (type === "all") {
        state.movies = [...state.movies, ...results];
      }
      state.hasMore = state.params.page < total_pages;
      state.loading = false;
    });
    builder.addCase(handleGetTopRated.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const handleGetTopRated = createAsyncThunk(
  "topRated/handleGetTopRated",
  async ({ page, type }, { getState, rejectWithValue }) => {
    try {
      const res = await moviesService.getTopRated({ page, type });
      if (res?.data?.results) {
        return {
          results: res.data.results,
          total_pages: res.data.total_pages,
          type,
        };
      }
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);
export const { actions, reducer: topRatedReducer } = topRatedSlice;
export const { updatePage, resetMovies } = actions;
export default topRatedReducer;
