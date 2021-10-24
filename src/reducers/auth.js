import { AUTH_LOGIN } from '../actions/auth';

const initialState = {
  checking: true,
  name: null,
  uid: null,
};

// eslint-disable-next-line no-unused-vars
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_LOGIN:
      return {
        checking: false,
        name: payload.name,
        uid: payload.uid,
      };

    default:
      return state;
  }
};
