import moment from 'moment';
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { useDispatch, useSelector } from 'react-redux';

import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { clearEventActive, setEventActive } from '../actions/calendar';
import { modalOpen } from '../actions/modal';
import CalendarModal from '../components/calendar/CalendarModal';
import AddNewFab from '../components/ui/AddNewFab';
import DeleteFab from '../components/ui/DeleteFab';
import Event from '../components/calendar/Event';
import Navbar from '../components/ui/Navbar';
import messages from '../localization/calendar-messages-es';

import '../styles/calendar.css';

moment.locale('es');

const CalendarPage = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');

  const components = {
    event: Event,
  };

  const eventStyleGetter = () => ({
    style: {
      backgroundColor: 'red',
      borderRadius: '0px',
      color: 'white',
      outline: 'none',
    },
  });

  const onDoubleClik = () => {
    dispatch(modalOpen());
  };

  const onSelect = (e) => {
    dispatch(setEventActive(e));
  };

  const onSelectSlot = () => {
    dispatch(clearEventActive());
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
        onSelectSlot={onSelectSlot}
        selectable
        onView={onView}
        view={lastView}
      />
      {
        activeEvent
        && <DeleteFab />
      }
      <AddNewFab />
      <CalendarModal />
    </div>
  );
};

export default CalendarPage;
