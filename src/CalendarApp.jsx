import React from 'react';
import { Provider } from 'react-redux';

import CalendarRouter from './routers/CalendarRouter';
import store from './store';

const CalendarApp = () => (
  <Provider store={store}>
    <CalendarRouter />
  </Provider>
);

export default CalendarApp;
