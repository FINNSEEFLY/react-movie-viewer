import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectStatus } from '../redux/moviesSlice';

const Loading = () => {
  const status = useSelector(selectStatus);
  return (
    <Box display={status === 'loading' ? 'flex' : 'none'}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;
