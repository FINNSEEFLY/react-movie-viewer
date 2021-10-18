import React, { useEffect, useState } from 'react';
import { Alert, IconButton, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import { clearError, selectError } from '../redux/moviesSlice';

const Toast = () => {
  const [open, setOpen] = useState(false);
  const errorMessage = useSelector(selectError);
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    dispatch(clearError());
  };

  useEffect(() => {
    if (errorMessage !== null) setOpen(true);
  }, [errorMessage]);

  const action = (
    <>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
      <Alert action={action} severity="error" sx={{ width: '100%' }}>
        {errorMessage}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
