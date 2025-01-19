// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import discoverService from "../../services/discoverService";

// const initialState = {
//   params: {
//     page: 1,
//   },
//   hasMore: true,
//   filterMovie: [],
//   genresList: [],
//   // value: 0,
//   loading: true,
// };
// const genresSlice = createSlice({
//   name: "genres",
//   initialState,
//   reducers: {
//     // handleChange: (state, action) => {
//     //   state.value = action.payload;
//     // },
//     updatePage: (state, action) => {
//       state.params.page = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(handleGenres.pending, (state, action) => {
//       state.loading = true;
//     });
//     builder.addCase(handleGenres.fulfilled, (state, action) => {
//       state.genresList = action.payload.genres;
//       state.loading = false;
//     });
//     builder.addCase(handleGenres.rejected, (state, action) => {
//       state.loading = false;
//     });

//     builder.addCase(handleDiscoverMovie.pending, (state, action) => {
//       state.loading = true;
//     });
//     builder.addCase(handleDiscoverMovie.fulfilled, (state, action) => {
//       const { results, total_pages } = action.payload;
//       state.filterMovie = [...state.filterMovie, ...results];
//       state.hasMore = state.params.page < total_pages;
//       state.loading = false;
//     });
//     builder.addCase(handleDiscoverMovie.rejected, (state, action) => {
//       state.loading = false;
//     });
//   },
// });

// export const handleDiscoverMovie = createAsyncThunk(
//   "genres/handleDiscoverMovie",
//   async (payload, { rejectWithValue }) => {
//     try {
//       // Sử dụng Promise.all để gửi nhiều yêu cầu song song
//       // Kết hợp dữ liệu, mỗi thể loại là một object { name, movies }
//       const res = await discoverService.getDiscoverMovie(payload);
//       if (res?.data?.results) {
//         return {
//           results: res.data.results,
//           total_pages: res.data.total_pages,
//         };
//       }
//     } catch (error) {
//       console.log("🚀error---->", error);
//       return rejectWithValue(error?.response?.data);
//     }
//   }
// );
// export const handleGenres = createAsyncThunk(
//   "genres/handleGenres",
//   async (_, thunkApi) => {
//     try {
//       const res = await genresService.getGenresMovieList();
//       console.log("🚀res---->", res);
//       if (res?.data) {
//         const genreId = res.data.genres.map((genre) => {
//           return {
//             id: genre?.id,
//             name: genre?.name,
//           };
//         });
//         thunkApi.dispatch(handleDiscoverMovie(genreId));
//         return res?.data;
//       }
//     } catch (error) {
//       console.log("🚀error---->", error);
//       return thunkApi.rejectWithValue(error?.response?.data);
//     }
//   }
// );

// export const { actions, reducer: genresReducer } = genresSlice;
// export const { handleChange, updatePage } = actions;
// export default genresReducer;
