import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import { selectMovies } from '../redux/moviesSlice';

const MoviesList = () => {
  const movies = useSelector(selectMovies);
  if (movies.length === 0) {
    return <h3>It looks empty...</h3>;
  }
  return movies.map((movie) => (
    <MovieCard
      key={movie.imdbID}
      Plot={movie.Plot}
      Poster={movie.Poster}
      Title={movie.Title}
      imdbID={movie.imdbID}
    />
  ));
};

export default MoviesList;
