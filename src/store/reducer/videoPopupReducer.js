import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieDetailService from "../../services/movieDetailService";
import TvSeriesDetailService from "../../services/tvSeriesDetailSevice";

const initialState = {
  open: false,
  openModal: false,
  videos: [],
  videoKey: "",
  loading: true,
};
const videoPopupSlice = createSlice({
  name: "videoPopup",
  initialState,
  reducers: {
    handleOpenPopup: (state, action) => {
      state.open = true;
      state.videoKey = action.payload;
    },
    handleClosePopup: (state, action) => {
      state.open = false;
      // state.videoKey = null;
    },
    handleOpenModal: (state, action) => {
      state.openModal = true;
    },
    handleCloseModal: (state, action) => {
      state.openModal = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleGetVideo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(handleGetVideo.fulfilled, (state, action) => {
      const { results } = action.payload;
      state.videos = results;
      state.loading = false;
      // state.openModal = true;
    });
    builder.addCase(handleGetVideo.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(handleGetVideosTvSeries.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(handleGetVideosTvSeries.fulfilled, (state, action) => {
      const { results } = action.payload;
      state.videos = results;
      state.loading = false;
    });
    builder.addCase(handleGetVideosTvSeries.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const handleGetVideo = createAsyncThunk(
  "videoPopup/handleGetVideo",
  async (payload, { getState, rejectWithValue }) => {
    try {
      const res = await movieDetailService.getMoviesVideos(payload);
      if (res?.data?.results) {
        return res?.data;
      }
    } catch (error) {
      return rejectWithValue(error?.reponse?.data);
    }
  }
);

export const handleGetVideosTvSeries = createAsyncThunk(
  "videoPopup/handleGetVideosTvSeries",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await TvSeriesDetailService.getTvSeriesVideos(payload);
      if (res?.data?.results) {
        return res.data;
      }
    } catch (error) {
      console.log("🚀error---->", error);
      return rejectWithValue(error?.reponse?.data);
    }
  }
);

export const { actions, reducer: videoPopupReducer } = videoPopupSlice;
export const {
  handleOpenPopup,
  handleClosePopup,
  handleOpenModal,
  handleCloseModal,
} = actions;
export default videoPopupReducer;
