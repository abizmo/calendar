// FIXME: add proptypes
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({
  component: Component,
  logged,
  ...rest
}) => (
  <Route
    {...rest}
    component={(props) => (logged
      ? <Component {...props} />
      : <Redirect to="/login" />
    )}
  />
);

export default PrivateRoute;
