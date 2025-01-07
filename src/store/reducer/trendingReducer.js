import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import trendingService from "../../services/trendingService";
const initialState = {
  trendingMovie: [],
  timeWindow: {
    all: "day",
    movie: "day",
    tv: "day",
  },
  selected: false,
  loading: true,
  currentTab: "all",
  error: null,
};
const trendingSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {
    setCurrentTab: (state, action) => {
      state.currentTab = action.payload;
    },
    handleCloseSelect: (state, action) => {
      state.selected = false;
    },
    handleOpenSelect: (state, action) => {
      state.selected = true;
    },
    updateTimeWindow: (state, action) => {
      const { tab, value } = action.payload;
      state.timeWindow[tab] = value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleGetTrending.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(handleGetTrending.fulfilled, (state, action) => {
      const { results } = action.payload;
      state.trendingMovie = results;
      // const mediaType = results?.filter(
      //   (item) => item.media_type === state.currentTab
      // );
      // console.log("🚀mediaType---->", mediaType);
      state.loading = false;
    });
    builder.addCase(handleGetTrending.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const handleGetTrending = createAsyncThunk(
  "trending/handleGetTrending",
  async ({ tag, timeWindown }, { rejectWithValue }) => {
    try {
      const res = await trendingService.getTrending({ tag, timeWindown });
      if (res?.data?.results) {
        return res.data;
      }
    } catch (error) {
      console.log("🚀error---->", error);
      return rejectWithValue(error?.reponse?.data);
    }
  }
);

export const { actions, reducer: trendingReducer } = trendingSlice;
export const {
  setCurrentTab,
  updateTimeWindow,
  handleCloseSelect,
  handleOpenSelect,
} = actions;
export default trendingReducer;
