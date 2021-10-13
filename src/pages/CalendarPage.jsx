/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "^_" }] */
import moment from 'moment';
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';

import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import Navbar from '../components/ui/Navbar';
import '../styles/calendar.css';
import messages from '../localization/calendar-messages-es';

moment.locale('es');

const events = [
  {
    id: 0,
    title: 'First event',
    start: moment().toDate(),
    end: moment().add(2, 'hours'),
  },
];

const eventStyleGetter = (_event, _start, _end, _isSelected) => ({
  style: {
    backgroundColor: 'red',
    borderRadius: '0px',
    color: 'white',
  },
});

const CalendarPage = () => (
  <div className="calendar-container">
    <Navbar />
    <Calendar
      events={events}
      eventPropGetter={eventStyleGetter}
      localizer={momentLocalizer(moment)}
      messages={messages}
    />
  </div>
);

export default CalendarPage;
