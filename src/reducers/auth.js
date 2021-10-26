import { AUTH_CHECKING_FINISH, AUTH_LOGIN, AUTH_LOGOUT } from '../actions/auth';

const initialState = {
  checking: true,
  name: null,
  uid: null,
};

// eslint-disable-next-line no-unused-vars
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_CHECKING_FINISH:
      return {
        ...state,
        checking: false,
      };

    case AUTH_LOGIN:
      return {
        checking: false,
        name: payload.name,
        uid: payload.uid,
      };

    case AUTH_LOGOUT:
      return {
        ...state,
        name: null,
        uid: null,
      };

    default:
      return state;
  }
};
