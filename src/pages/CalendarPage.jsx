import moment from 'moment';
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import Navbar from '../components/ui/Navbar';
import '../styles/calendar.css';

const events = [
  {
    id: 0,
    title: 'First event',
    start: moment().toDate(),
    end: moment().add(2, 'hours'),
  },
];

const CalendarPage = () => (
  <div>
    <Navbar />
    <Calendar
      events={events}
      localizer={momentLocalizer(moment)}
    />
  </div>
);

export default CalendarPage;
