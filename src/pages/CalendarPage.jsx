/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "^_" }] */
import moment from 'moment';
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { useDispatch, useSelector } from 'react-redux';

import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import CalendarModal from '../components/calendar/CalendarModal';
import Event from '../components/calendar/Event';
import Navbar from '../components/ui/Navbar';
import messages from '../localization/calendar-messages-es';

import { setEventActive } from '../actions/calendar';
import { modalOpen } from '../actions/modal';

import '../styles/calendar.css';
import AddNewFab from '../components/ui/AddNewFab';

moment.locale('es');

const CalendarPage = () => {
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.calendar);
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
    dispatch(setEventActive(e));
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
      <AddNewFab />
      <CalendarModal />
    </div>
  );
};

export default CalendarPage;
