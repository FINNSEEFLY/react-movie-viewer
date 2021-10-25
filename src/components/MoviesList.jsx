import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Stack } from '@mui/material';
import ReactSwipe from 'react-swipe';
import MovieCard from './MovieCard';
import { selectMovies } from '../redux/moviesSlice';

const MoviesList = () => {
  const movies = useSelector(selectMovies);
  if (movies.length === 0) {
    return <h3>It looks empty...</h3>;
  }

  let reactSwipeEl;

  return (
    <Stack spacing={2} width="100%">
      <Box
        maxWidth={{ xs: '100%', md: '100%' }}
        padding={1}
        alignContent="center"
        component={ReactSwipe}
        swipeOptions={{ continuous: true }}
        ref={(el) => {
          reactSwipeEl = el;
          return reactSwipeEl;
        }}
      >
        {movies.map((movie) => (
          <Box component="div" key={movie.imdbID}>
            <MovieCard
              Plot={movie.Plot}
              Poster={movie.Poster}
              Title={movie.Title}
              imdbID={movie.imdbID}
            />
          </Box>
        ))}
      </Box>
      <Stack direction="row" justifyContent="center" spacing={2}>
        <Button onClick={() => reactSwipeEl.prev()}>Previous</Button>
        <Button onClick={() => reactSwipeEl.next()}>Next</Button>
      </Stack>
    </Stack>
  );
};

export default MoviesList;
