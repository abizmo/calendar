export const CALENDAR_CLEAR_ACTIVE = 'CALENDAR_CLEAR_ACTIVE';
export const CALENDAR_DELETE_EVENT = 'CALENDAR_DELETE_EVENT';
export const CALENDAR_NEW_EVENT = 'CALENDAR_NEW_EVENT';
export const CALENDAR_SET_ACTIVE = 'CALENDAR_SET_ACTIVE';
export const CALENDAR_UPDATE_EVENT = 'CALENDAR_UPDATE_EVENT';

export const clearEventActive = () => ({
  type: CALENDAR_CLEAR_ACTIVE,
});

export const deleteEvent = () => ({
  type: CALENDAR_DELETE_EVENT,
});

export const newEvent = (event) => ({
  type: CALENDAR_NEW_EVENT,
  payload: { ...event, id: Math.random(), user: { userId: '0123', name: 'goccita' } },
});

export const setEventActive = (payload) => ({
  type: CALENDAR_SET_ACTIVE,
  payload,
});

export const updateEvent = (payload) => ({
  type: CALENDAR_UPDATE_EVENT,
  payload,
});
