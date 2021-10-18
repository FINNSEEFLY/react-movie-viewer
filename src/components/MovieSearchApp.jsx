import React from 'react';
import { Stack } from '@mui/material';
import Search from './Search';
import MoviesList from './MoviesList';
import Loading from './Loading';

const MovieSearchApp = () => (
  <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
    <h1>Welcome to OMDb UI</h1>
    <Search />
    <MoviesList />
    <Loading />
  </Stack>
);

export default MovieSearchApp;
