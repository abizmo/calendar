import axios from 'axios';

const baseUrl = `${process.env.REACT_APP_API_URL}/auth`;

// eslint-disable-next-line import/prefer-default-export
export const loginService = ({ email, password }) => axios
  .post(`${baseUrl}/login`, { email, password })
  .then(({ data }) => data)
  .catch(({ response: { data } }) => data);
