import Swal from 'sweetalert2';

import formatEvent from '../helpers/formatEvent';
import {
  // eslint-disable-next-line no-unused-vars
  createEvent, deleteOneEvent, getAllEvents, updateOneEvent,
} from '../services/calendar';

export const CALENDAR_CLEAR_ACTIVE = 'CALENDAR_CLEAR_ACTIVE';
export const CALENDAR_DELETE_EVENT = 'CALENDAR_DELETE_EVENT';
export const CALENDAR_NEW_EVENT = 'CALENDAR_NEW_EVENT';
export const CALENDAR_SET_ACTIVE = 'CALENDAR_SET_ACTIVE';
export const CALENDAR_SET_EVENTS = 'CALENDAR_SET_EVENTS';
export const CALENDAR_UPDATE_EVENT = 'CALENDAR_UPDATE_EVENT';

export const clearEventActive = () => ({
  type: CALENDAR_CLEAR_ACTIVE,
});

const deleteEvent = () => ({
  type: CALENDAR_DELETE_EVENT,
});

export const deleteEventStart = () => async (dispatch, getState) => {
  const { id } = getState().calendar.activeEvent;
  const { msg, ok } = await deleteOneEvent(id);

  if (!ok) {
    Swal.fire('Error', msg, 'error');
  } else {
    dispatch(deleteEvent());
    Swal.fire('Success', msg, 'success');
  }
};

const setEvents = (payload) => ({
  type: CALENDAR_SET_EVENTS,
  payload,
});

export const getEvents = () => async (dispatch) => {
  const { data, msg, ok } = await getAllEvents();

  if (!ok) {
    Swal.fire('Error', msg, 'error');
  } else {
    const events = data.map(formatEvent);
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
    const formattedEvent = formatEvent(data);
    dispatch(newEvent(formattedEvent));
  }
};

export const setEventActive = (payload) => ({
  type: CALENDAR_SET_ACTIVE,
  payload,
});

const updateEvent = (payload) => ({
  type: CALENDAR_UPDATE_EVENT,
  payload,
});

export const updateEventStart = (event) => async (dispatch) => {
  const { data, msg, ok } = await updateOneEvent(event);

  if (!ok) {
    Swal.fire('Error', msg, 'error');
  } else {
    const formattedEvent = formatEvent(data);
    dispatch(updateEvent(formattedEvent));
  }
};
