/* eslint-disable no-console */
/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "^_" }] */
import moment from 'moment';
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { useDispatch } from 'react-redux';

import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import CalendarModal from '../components/calendar/CalendarModal';
import Event from '../components/calendar/Event';
import Navbar from '../components/ui/Navbar';
import messages from '../localization/calendar-messages-es';

import '../styles/calendar.css';
import { modalOpen } from '../actions/modal';

moment.locale('es');

const events = [
  {
    id: 0,
    title: 'First event',
    start: moment().toDate(),
    end: moment().add(2, 'hours'),
    user: {
      userId: '0123',
      name: 'goccita',
    },
  },
];

const CalendarPage = () => {
  const dispatch = useDispatch();
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');

  const components = {
    event: Event,
  };

  const eventStyleGetter = (_event, _start, _end, _isSelected) => ({
    style: {
      backgroundColor: 'red',
      borderRadius: '0px',
      color: 'white',
    },
  });

  const onDoubleClik = () => {
    dispatch(modalOpen());
  };

  const onSelect = (e) => {
    console.log('Select', e);
  };

  const onView = (e) => {
    setLastView(e);
    localStorage.setItem('lastView', e);
  };

  return (
    <div className="calendar-container">
      <Navbar />
      <Calendar
        components={components}
        events={events}
        eventPropGetter={eventStyleGetter}
        localizer={momentLocalizer(moment)}
        messages={messages}
        onDoubleClickEvent={onDoubleClik}
        onSelectEvent={onSelect}
        onView={onView}
        view={lastView}
      />
      <CalendarModal />
    </div>
  );
};

export default CalendarPage;
