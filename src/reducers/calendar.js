import moment from 'moment';
import { CALENDAR_NEW_EVENT, CALENDAR_SET_ACTIVE } from '../actions/calendar';

const initialState = {
  events: [
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
  ],
  activeEvent: null,
};

// eslint-disable-next-line no-unused-vars
export default (state = initialState, { type, payload }) => {
  switch (type) {
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

    default:
      return state;
  }
};
