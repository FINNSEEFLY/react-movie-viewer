import React from 'react';
import './App.css';
import { Container } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Toast from './components/Toast';
import useRoutes from './hooks/useRoutes';

function App() {
  const routes = useRoutes();
  return (
    <Container>
      <BrowserRouter>{routes}</BrowserRouter>
      <Toast />
    </Container>
  );
}

export default App;
