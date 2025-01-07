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
const airingTodayTvSlice = createSlice({
  name: "airingToDay",
  initialState,
  reducers: {
    handleUpdatePage: (state, action) => {
      state.params.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleGetAiringToDayTv.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(handleGetAiringToDayTv.fulfilled, (state, action) => {
      const { results, total_pages, type } = action.payload;
      if (type === TYPE_PAGE.home) {
        state.tvLists = results.slice(0, 20);
      } else if (type === TYPE_PAGE.all) {
        state.tvLists = [...state.tvLists, ...results];
      }
      state.hasMore = state.params.page < total_pages;
      state.loading = false;
    });
    builder.addCase(handleGetAiringToDayTv.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const handleGetAiringToDayTv = createAsyncThunk(
  "airingToDay/handleGetAiringToDayTv",
  async ({ page, type }, { rejectWithValue }) => {
    try {
      const res = await tvSeriesService.getAiringToday({ page, type });
      if (res?.data?.results) {
        return {
          results: res?.data?.results,
          total_pages: res?.data?.total_pages,
          type,
        };
      }
    } catch (error) {
      console.log("🚀error---->", error);
      return rejectWithValue(error?.reponse?.data);
    }
  }
);
export const { actions, reducer: airingTodayTvReducer } = airingTodayTvSlice;
export const { handleUpdatePage } = actions;
export default airingTodayTvReducer;
