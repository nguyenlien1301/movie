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

const topRatedTvSlice = createSlice({
  name: "topRatedTv",
  initialState,
  reducers: {
    handleUpdatePage: (state, action) => {
      state.params.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleGetTopRatedTv.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(handleGetTopRatedTv.fulfilled, (state, action) => {
      const { results, total_pages, type } = action.payload;
      if (type === TYPE_PAGE.home) {
        state.tvLists = results.slice(0, 20);
      } else if (type === TYPE_PAGE.all) {
        state.tvLists = [...state.tvLists, ...results];
      }
      state.hasMore = state.params.page < total_pages;
      state.loading = false;
    });
    builder.addCase(handleGetTopRatedTv.rejected, (state, action) => {
      state.loading = false;
    });
  },
});
export const handleGetTopRatedTv = createAsyncThunk(
  "topRatedTv/handleGetTopRatedTv",
  async ({ page, type }, { rejectWithValue }) => {
    try {
      const res = await tvSeriesService.getTopRatedTv({ page, type });
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
export const { actions, reducer: topRatedTvReducer } = topRatedTvSlice;
export const { handleUpdatePage } = actions;
export default topRatedTvReducer;
