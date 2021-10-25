import { Pagination as PaginationMUI } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { searchMoviesAsync, selectCountOfPages, selectSearchKeyword } from '../redux/moviesSlice';

const Pagination = () => {
  const countOfPages = useSelector(selectCountOfPages);
  const dispatch = useDispatch();
  const searchKeyword = useSelector(selectSearchKeyword);

  const pageChangeHandler = (event, page) => dispatch(searchMoviesAsync({ searchKeyword, page }));

  if (countOfPages) {
    return (
      <PaginationMUI
        onChange={pageChangeHandler}
        count={countOfPages}
        shape="rounded"
        defaultPage={1}
      />
    );
  }
  return <br />;
};

export default Pagination;
