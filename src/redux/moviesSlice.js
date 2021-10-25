import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchMovies from './fetchAPI';

const initialState = {
  movies: [],
  status: 'idle',
  countOfPages: null,
  error: null,
  searchKeyword: null,
};

export const selectSearchKeyword = (state) => state.app.searchKeyword;

export const searchMoviesAsync = createAsyncThunk(
  'movies/searchMoviesAsync',
  async ({ searchKeyword, page }) => fetchMovies(searchKeyword, page)
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    clearMovies: (state) => {
      state.movies = [];
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: {
    [searchMoviesAsync.pending]: (state) => {
      state.status = 'loading';
      state.movies = [];
    },
    [searchMoviesAsync.fulfilled]: (state, action) => {
      state.status = 'idle';
      if (action.payload.Response === 'False') {
        state.error = action.payload.Error;
        state.countOfPages = null;
        state.searchKeyword = null;
        return;
      }
      state.movies = action.payload.movies;
      state.countOfPages = Math.ceil(action.payload.moviesCount / 10);
      state.searchKeyword = action.payload.searchKeyword;
    },
    [searchMoviesAsync.rejected]: (state) => {
      state.status = 'idle';
      state.error = 'Your request ran into a problem...';
      state.countOfPages = null;
      state.searchKeyword = null;
    },
  },
});

export const { clearMovies, setError, clearError } = moviesSlice.actions;

export const selectMovies = (state) => state.app.movies;
export const selectCountOfPages = (state) => state.app.countOfPages;
export const selectStatus = (state) => state.app.status;
export const selectError = (state) => state.app.error;

export default moviesSlice.reducer;
