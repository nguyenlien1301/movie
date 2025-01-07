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

const popularSlice = createSlice({
  name: "popular",
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
    builder.addCase(handleGetPopular.pending, (state, action) => {
      state.loading = action.payload;
    });
    builder.addCase(handleGetPopular.fulfilled, (state, action) => {
      const { total_pages, results, type } = action.payload;
      if (type === "home") {
        state.movies = results.slice(0, 20);
      } else if (type === "all") {
        state.movies = [...state.movies, ...results];
      }
      state.hasMore = state.params.page < total_pages;
      state.loading = false;
    });
    builder.addCase(handleGetPopular.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const handleGetPopular = createAsyncThunk(
  "popular/handleGetPopular",
  async ({ page, type }, { geState, rejectWithValue }) => {
    try {
      const res = await moviesService.getPopular({ page, type });
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

export const { actions, reducer: popularReducer } = popularSlice;
export const { updatePage, resetMovies } = actions;
export default popularReducer;
