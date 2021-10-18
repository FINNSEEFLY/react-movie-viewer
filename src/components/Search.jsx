import React, { useState } from 'react';
import { Button, Stack, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { clearMovies, searchMoviesAsync, selectPage, selectStatus } from '../redux/moviesSlice';

const Search = () => {
  const [searchKeyword, setSearchKeyword] = useState();
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const status = useSelector(selectStatus);
  const changeValueHandler = (event) => {
    setSearchKeyword(event.target.value);
  };
  const onSubmit = () => {
    if (!searchKeyword) return;
    dispatch(clearMovies());
    dispatch(searchMoviesAsync(searchKeyword, page));
  };

  return (
    <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
      <TextField
        id="outlined-basic"
        label="Search something"
        variant="outlined"
        value={searchKeyword}
        onChange={changeValueHandler}
        onSubmit={onSubmit}
        disabled={status !== 'idle'}
      />
      <Button variant="contained" onClick={onSubmit} disabled={status !== 'idle'}>
        Search
      </Button>
    </Stack>
  );
};

export default Search;
