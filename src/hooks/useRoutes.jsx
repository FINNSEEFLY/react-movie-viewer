import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import MovieSearchApp from '../components/MovieSearchApp';
import DetailedMovieView from '../components/DeailedMovieView';

const useRoutes = () => (
  <Switch>
    <Route exact path="/">
      <MovieSearchApp />
    </Route>
    <Route path="/:id">
      <DetailedMovieView />
    </Route>
    <Redirect to="/" />
  </Switch>
);

export default useRoutes;
