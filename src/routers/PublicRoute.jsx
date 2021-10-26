// FIXME: add proptypes
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route } from 'react-router';

const PublicRoute = ({
  component: Component,
  logged,
  ...rest
}) => (
  <Route
    {...rest}
    component={(props) => (logged
      ? <Redirect to="/" />
      : <Component {...props} />
    )}
  />
);

export default PublicRoute;
