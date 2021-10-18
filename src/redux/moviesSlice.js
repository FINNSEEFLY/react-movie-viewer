import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchMovies from './fetchAPI';

const initialState = {
  movies: [],
  status: 'idle',
  page: 1,
  error: null,
};

export const searchMoviesAsync = createAsyncThunk(
  'movies/searchMoviesAsync',
  async (searchKeyWord, page) => fetchMovies(searchKeyWord, page)
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page += 1;
    },
    clearMovies: (state) => {
      state.page = 1;
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
    },
    [searchMoviesAsync.fulfilled]: (state, action) => {
      state.status = 'idle';
      if (action.payload.Response === 'False') {
        state.error = action.payload.Error;
        return;
      }
      if (state.page === 1) {
        state.movies = action.payload.movies;
        return;
      }
      state.movies = [...state.movies, ...action.payload.movies];
    },
    [searchMoviesAsync.rejected]: (state) => {
      state.status = 'idle';
      state.error = 'Your request ran into a problem...';
    },
  },
});

export const { nextPage, clearMovies, setError, clearError } = moviesSlice.actions;

export const selectMovies = (state) => state.movies.movies;
export const selectPage = (state) => state.movies.page;
export const selectStatus = (state) => state.movies.status;
export const selectError = (state) => state.movies.error;

export default moviesSlice.reducer;
