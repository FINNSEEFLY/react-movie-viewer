import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectMovies } from '../redux/moviesSlice';

const DetailedMovieView = () => {
  const { id } = useParams();
  const movie = useSelector(selectMovies).filter((item) => item.imdbID === id)[0];

  return (
    <Card sx={{ maxWidth: 'auto' }}>
      <CardActionArea>
        <CardMedia component="img" height="auto" image={movie.Poster} alt={movie.Title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.FullPlot}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button component={Link} to="/" fullWidth variant="contained">
        Back
      </Button>
    </Card>
  );
};

export default DetailedMovieView;
