import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { renewStart } from '../actions/auth';

import CalendarPage from '../pages/CalendarPage';
import LoginPage from '../pages/LoginPage';

const CalendarRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(renewStart());
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <CalendarPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default CalendarRouter;
