import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import tvSeriesService from "../../services/tvSeriesService";
import { TYPE_PAGE } from "../../constants/general";

const initialState = {
  params: {
    page: 1,
  },
  tvLists: [],
  hasMore: true,
  loading: true,
};
const popularTvSlice = createSlice({
  name: "popularTv",
  initialState,
  reducers: {
    handleUpdatePage: (state, action) => {
      state.params.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleGetPopularTv.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(handleGetPopularTv.fulfilled, (state, action) => {
      const { results, total_pages, type } = action.payload;
      if (type === TYPE_PAGE.home) {
        state.tvLists = results.slice(0, 20);
      } else if (type === TYPE_PAGE.all) {
        state.tvLists = [...state.tvLists, ...results];
      }
      state.hasMore = state.params.page < total_pages;
      state.loading = false;
    });
    builder.addCase(handleGetPopularTv.rejected, (state, action) => {
      state.loading = false;
    });
  },
});
export const handleGetPopularTv = createAsyncThunk(
  "popularTv/handleGetPopularTv",
  async ({ page, type }, { rejectWithValue }) => {
    try {
      const res = await tvSeriesService.getPopularTv({ page, type });
      if (res?.data?.results) {
        return {
          results: res.data.results,
          total_pages: res.data.total_pages,
          type,
        };
      }
    } catch (error) {
      console.log("🚀error---->", error);
      return rejectWithValue(error?.reponse?.data);
    }
  }
);
export const { actions, reducer: popularTvReducer } = popularTvSlice;
export const { handleUpdatePage } = actions;
export default popularTvReducer;
