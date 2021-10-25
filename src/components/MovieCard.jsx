import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import image from '../images/no_image.jpg';
import { selectStatus } from '../redux/moviesSlice';

const MovieCard = ({ Plot, Poster, Title, imdbID }) => {
  const status = useSelector(selectStatus);
  return (
    <Card
      to={`/${imdbID}`}
      sx={{ textDecoration: 'none' }}
      component={status === 'idle' ? Link : 'span'}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ height: { xs: 300, md: 400 } }}
          image={Poster !== 'N/A' ? Poster : image}
          alt={Title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Plot !== 'N/A' ? Plot : 'The plot is missing'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

MovieCard.propTypes = {
  Plot: PropTypes.string,
  Poster: PropTypes.string,
  Title: PropTypes.string,
  imdbID: PropTypes.string,
};

MovieCard.defaultProps = {
  Plot: '',
  Poster: '',
  Title: '',
  imdbID: '',
};

export default MovieCard;
