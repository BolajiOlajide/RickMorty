import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const Protected = ({component, authed, ...props}) => {
  let state;

  try {
    state = authed.auth.value
  }
  catch(err) {
    state = false
  }

  if (state === true) {
    return <Route { ...props } component={ component } />;
  }
  else {
    return <Redirect to={ '/' } />;
  }
};

export default Protected;
