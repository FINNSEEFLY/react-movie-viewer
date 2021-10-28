import { Pagination as PaginationMUI } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import {
  searchMoviesAsync,
  selectCountOfPages,
  selectPage,
  selectSearchKeyword,
} from '../redux/moviesSlice';

const Pagination = () => {
  const countOfPages = useSelector(selectCountOfPages);
  const dispatch = useDispatch();
  const searchKeyword = useSelector(selectSearchKeyword);
  const currentPage = useSelector(selectPage);

  const pageChangeHandler = (event, page) => dispatch(searchMoviesAsync({ searchKeyword, page }));

  if (countOfPages) {
    return (
      <PaginationMUI
        onChange={pageChangeHandler}
        count={countOfPages}
        shape="rounded"
        defaultPage={currentPage}
      />
    );
  }
  return <br />;
};

export default Pagination;
