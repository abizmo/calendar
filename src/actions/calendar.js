import moment from 'moment';
import Swal from 'sweetalert2';

import { createEvent, getAllEvents } from '../services/calendar';

export const CALENDAR_CLEAR_ACTIVE = 'CALENDAR_CLEAR_ACTIVE';
export const CALENDAR_DELETE_EVENT = 'CALENDAR_DELETE_EVENT';
export const CALENDAR_NEW_EVENT = 'CALENDAR_NEW_EVENT';
export const CALENDAR_SET_ACTIVE = 'CALENDAR_SET_ACTIVE';
export const CALENDAR_SET_EVENTS = 'CALENDAR_SET_EVENTS';
export const CALENDAR_UPDATE_EVENT = 'CALENDAR_UPDATE_EVENT';

export const clearEventActive = () => ({
  type: CALENDAR_CLEAR_ACTIVE,
});

export const deleteEvent = () => ({
  type: CALENDAR_DELETE_EVENT,
});

const setEvents = (payload) => ({
  type: CALENDAR_SET_EVENTS,
  payload,
});

export const getEvents = () => async (dispatch) => {
  const { data, msg, ok } = await getAllEvents();

  if (!ok) {
    Swal.fire('Error', msg, 'error');
  } else {
    const events = data.map((event) => ({
      ...event,
      end: moment(event.end).toDate(),
      start: moment(event.start).toDate(),
    }));
    dispatch(setEvents(events));
  }
};

const newEvent = (event) => ({
  type: CALENDAR_NEW_EVENT,
  payload: { ...event },
});

export const newEventStart = (event) => async (dispatch) => {
  const { data, msg, ok } = await createEvent(event);

  if (!ok) {
    Swal.fire('Error', msg, 'error');
  } else {
    data.end = moment(data.end).toDate();
    data.start = moment(data.start).toDate();
    dispatch(newEvent(data));
  }
};

export const setEventActive = (payload) => ({
  type: CALENDAR_SET_ACTIVE,
  payload,
});

export const updateEvent = (payload) => ({
  type: CALENDAR_UPDATE_EVENT,
  payload,
});
