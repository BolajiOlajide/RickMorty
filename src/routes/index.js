import React from 'react';
import { Provider, connect} from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Protected from '../components/Protected';
import CharacterList from '../components/CharacterList';
import Home from '../components/Home';

import "bootstrap/dist/css/bootstrap.min.css";

const Main = () => (
  <h1>Bolaji</h1>
);

const Root = ({ store, auth }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Protected authed={{auth: auth}} path='/characters' component={CharacterList} />
        <Protected authed={{auth: auth}} path='/main' component={Main} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </Provider>
);

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, null)(Root);
