import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MovieList from '../components/MovieList';

const Main = () => (
  <h1>Bolaji</h1>
);

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/movies" component={MovieList} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
