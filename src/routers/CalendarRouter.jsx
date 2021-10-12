import React from 'react';
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import CalendarPage from '../pages/CalendarPage';
import LoginPage from '../pages/LoginPage';

const CalendarRouter = () => (
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

export default CalendarRouter;
