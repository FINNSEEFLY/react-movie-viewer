import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectMovies } from '../redux/moviesSlice';
import image from '../images/no_image.jpg';

const DetailedMovieView = () => {
  const { id } = useParams();
  const movie = useSelector(selectMovies).filter((item) => item.imdbID === id)[0];

  return (
    <Card sx={{ maxWidth: { sx: 'auto', md: 1050 } }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ height: { sx: 'auto', md: 350 } }}
          image={movie.Poster !== 'N/A' ? movie.Poster : image}
          alt={movie.Title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.FullPlot !== 'N/A' ? movie.FullPlot : 'The plot is missing'}
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
