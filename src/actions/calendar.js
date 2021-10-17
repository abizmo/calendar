export const CALENDAR_SET_ACTIVE = 'CALENDAR_SET_ACTIVE';
export const CALENDAR_NEW_EVENT = 'CALENDAR_NEW_EVENT';

export const newEvent = (event) => ({
  type: CALENDAR_NEW_EVENT,
  payload: { ...event, id: Math.random(), user: { userId: '0123', name: 'goccita' } },
});

export const setEventActive = (payload) => ({
  type: CALENDAR_SET_ACTIVE,
  payload,
});
