export const CALENDAR_SET_ACTIVE = 'CALENDAR_SET_ACTIVE';

export const setEventActive = (event) => ({
  type: CALENDAR_SET_ACTIVE,
  payload: event,
});
