import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import searchService from "../../services/searchService";
const initialState = {
  movies: [],
  searchQuery: "",
  loading: false,
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    listentValueChange: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSearchResults.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getSearchResults.fulfilled, (state, action) => {
      const { results } = action.payload;
      state.movies = results;
      state.loading = false;
    });
    builder.addCase(getSearchResults.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const getSearchResults = createAsyncThunk(
  "search/getSearchMovie",
  async (payload, { getState, rejectWithValue }) => {
    try {
      const res = await searchService.getSearchMovie(payload);
      if (res?.data?.results) {
        return res.data;
      }
    } catch (error) {
      return rejectWithValue(error?.reponse?.data);
    }
  }
);
export const { actions, reducer: searchReducer } = searchSlice;
export const { listentValueChange } = actions;
export default searchReducer;
