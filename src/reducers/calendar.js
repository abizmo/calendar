import {
  CALENDAR_CLEAR_ACTIVE,
  CALENDAR_DELETE_EVENT,
  CALENDAR_NEW_EVENT,
  CALENDAR_SET_ACTIVE,
  CALENDAR_SET_EVENTS,
  CALENDAR_UPDATE_EVENT,
} from '../actions/calendar';

const initialState = {
  events: [],
  activeEvent: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CALENDAR_CLEAR_ACTIVE:
      return {
        ...state,
        activeEvent: null,
      };

    case CALENDAR_DELETE_EVENT:
      return {
        events: state.events.filter((event) => event.id !== state.activeEvent.id),
        activeEvent: null,
      };

    case CALENDAR_NEW_EVENT:
      return {
        events: [...state.events, payload],
        activeEvent: payload,
      };

    case CALENDAR_SET_ACTIVE:
      return {
        ...state,
        activeEvent: { ...payload },
      };

    case CALENDAR_SET_EVENTS:
      return {
        ...state,
        events: payload,
      };

    case CALENDAR_UPDATE_EVENT:
      return {
        ...state,
        events: state.events.map((event) => (event.id !== payload.id ? event : payload)),
      };

    default:
      return state;
  }
};
