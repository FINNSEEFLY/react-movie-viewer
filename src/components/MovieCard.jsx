import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieCard = ({ Plot, Poster, Title, imdbID }) => (
  <Card component={Link} to={`/${imdbID}`} sx={{ maxWidth: 345 }}>
    <CardActionArea l>
      <CardMedia component="img" height="140" image={Poster} alt={Title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Plot}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

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
