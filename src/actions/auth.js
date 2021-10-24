import { loginService } from '../services/auth';

export const AUTH_LOGIN = 'AUTH_LOGIN';

const login = (payload) => ({
  type: AUTH_LOGIN,
  payload,
});

// eslint-disable-next-line no-unused-vars
export const loginStart = ({ email, password }) => async (dispatch) => {
  const { data, msg, ok } = await loginService({ email, password });

  if (!ok) {
    // TODO: dispatch error
    console.log(ok, msg);
  } else {
    const { name, token, uid } = data;

    localStorage.setItem('token', token);
    localStorage.setItem('token-init', new Date().getTime());
    dispatch(login({ name, uid }));
  }
};
