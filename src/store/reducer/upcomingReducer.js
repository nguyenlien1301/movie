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
const upcomingSlice = createSlice({
  name: "upcoming",
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
    builder.addCase(handleGetUpcoming.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(handleGetUpcoming.fulfilled, (state, action) => {
      const { total_pages, results, type } = action.payload;
      if (type === "home") {
        state.movies = results.slice(0, 20);
      } else if (type === "all") {
        state.movies = [...state.movies, ...results];
      }
      state.hasMore = state.params.page < total_pages;
      state.loading = false;
    });
    builder.addCase(handleGetUpcoming.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const handleGetUpcoming = createAsyncThunk(
  "upcoming/handleGetUpcoming",
  async ({ page, type }, { getState, rejectWithValue }) => {
    try {
      const res = await moviesService.getUpcoming({ page, type });
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

export const { actions, reducer: upcomingReducer } = upcomingSlice;
export const { updatePage, resetMovies } = actions;
export default upcomingReducer;
