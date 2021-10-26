import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Redirect,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import { renewStart } from '../actions/auth';
import CalendarPage from '../pages/CalendarPage';
import LoginPage from '../pages/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const CalendarRouter = () => {
  const dispatch = useDispatch();
  const { checking, uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(renewStart());
  }, []);

  if (checking) {
    return <h1>Loading...</h1>;
  }

  return (
    <Router>
      <Switch>
        <PublicRoute
          component={LoginPage}
          logged={!!uid}
          path="/login"
        />
        <PrivateRoute
          component={CalendarPage}
          logged={!!uid}
          path="/"
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default CalendarRouter;
